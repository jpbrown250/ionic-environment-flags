#!/usr/bin/env node

/* README
# The purpose of this script is to aid with the use of production and development environments.

### Features:
* Config files in either .js or .json (if both are found, .js will be prioritized)
* Creates a provider file in src/providers/app-config.ts when this script is ran
* Access to enviornment variables through use of the .js file as a config

### Implementation:
1. Place this file in your project inside of the scripts folder (create one if it does not exist).
2. Add the following commands to your package.json file inside of your scripts section:
`"preionic:build": "node ./scripts/replace.env",
"preionic:serve": "node ./scripts/replace.env",
"generate-env": "node ./scripts/replace.env",`
3. Create an env folder in your project and create files for your different evnironments named the way you want to refer to them in the command line. For example: production.js can be targeted with -env=p
4. Import/inject the provider in your app.modules.ts as you would with any other provider (use this file path: `../providers/app-config`)
5. Create your environment object and fill it with what you need
6. Import the module in any other ts file(s) you want to use it in.
7. Run `npm run generate-env` or your normal `ionic serve` or even `ionic build` and be sure to add the flag referring to the name of your js or json file as `-env=production` or `-env=prod` or `-env=p`
8. Check your `src/providers/app-config` file to make sure it worked and for how call your variables.

### Protect your Environment Information:
* Add your config files to a .gitignore file to match all .json and .js `env/*.js`, `env/*.json` and `src/providers/app-config.ts` be sure not to include a reference that could target your app-config.ts.


### Examples:
My env folder has 3 files and their contents:

* development.json
`{
  "apiUrl": "www.your-dev-url.com"
}`

* production.js
`var data = require(__dirname + "/production.json");
data.someApiKey = process.env.someKey;
module.exports = data;`

* production.json
`{
  "apiUrl": "www.your-prod-site.com"
}`

* if I run `npm run generate-env -env=d` my component contains this:
`...
@Injectable()
export class AppConfig {

  constructor() {}
  static get apiUrl() {
    const apiUrlConst = "www.your-dev-url.com"
    return apiUrlConst
  }
  
}`

* if I run `npm run generate-env -env=p` my component contains this:
`...
@Injectable()
export class AppConfig {

  constructor() {}
  static get apiUrl() {
    const apiUrlConst = "www.your-prod-site.com"
    return apiUrlConst
  }
  static get someApiKey() {
    const someApiKeyConst = undefined
    return someApiKeyConst
  }
  
}`

### Resources and Credits
* GitHub Environment Proposal: <https://github.com/driftyco/ionic-app-scripts/issues/762>
* Base Architecture Design: It was posted by [juarezpaf](https://github.com/juarezpaf) in the above mentioned thread on March 8th, 2017.
*/



var process = require('process');
var fs = require('fs');

// Get the environment flag used to run the command
var envFlag = "dev"; // dev is the default
var envFlagMatches = 0;
JSON.parse(process.env.npm_config_argv).original.forEach(function(flag) {
  if(/--env=/.test(flag)) {
    envFlag = flag.slice(6);
    envFlagMatches++;
  } else if(/-env=/.test(flag)) {
    envFlag = flag.slice(5);
    envFlagMatches++;
  }
});

// Warn the user if they used multiple env= flags
if(envFlagMatches > 1) {
  // TODO: make this yellow
  console.warn(
    "\x1b[33m",
    "::WARNING:: Multiple --env= or -env= flags were found.\n" +
    " ::WARNING:: " +
    process.argv.find(function(item) {
      return new RegExp(envFlag + "\\b").test(item);
    }) +
    " will be used."
  );
}

// Get an array of all of the possible environment strings
var configs = [];
fs.readdirSync(__dirname + '/../env').forEach(function(file) {
  if(
      /.js\b/.test(file) &&
      !configs.find(function(config) {
        return config == file.slice(0, -3);
      })
    ) {
    configs.push(file.slice(0, -3));
  } else if(
      /.json\b/.test(file) &&
      !configs.find(function(config) {
        return config == file.slice(0, -5);
      })
    ) {
    configs.push(file.slice(0, -5));
  }
});

// Set env to current tag used for the environment
var regExp = new RegExp("\\b" + envFlag);
var env;
var countMatchingConfigs = 0;
if(configs.every(function(config) {
  if(regExp.test(config)) {
    env = config;
    countMatchingConfigs++;
  }
  return config;
})) {}

// Throw an error for too many matching configs if there were more than 1 matching
if(countMatchingConfigs > 1) {
  // TODO: make this red
  throw Error(
    "Multiple files match your environment flag of \"" +
    envFlag + "\" your flag needs to be more specific so it only matches one of either .js or .json file"
  );
}

// Retrieve the json data if it exists, if not use an empty object.
var envVars;
try {
  envVars = require(__dirname + '/../env/' + env + '.js');
} catch(e) {
  try {
    envVars = require(__dirname + '/../env/' + env + '.json');
  } catch(e) {
    envVars = {};
  }
}

var configContent = '';
for(var i in envVars) {
  configContent += 
  `static get ${i}() {
    const ${i}Const = ${JSON.stringify(envVars[i])}
    return ${i}Const
  }
  `;
}

var content = fs.readFileSync(__dirname + '/../env/app-config.ts');
var contentReplace = content.toString();
contentReplace = contentReplace.replace(/willBeReplaced/, configContent);

var wstream = fs.createWriteStream(__dirname + '/../src/providers/app-config.ts');
wstream.write(contentReplace);
wstream.end();