#!/usr/bin/env node
var process = require('process');
var fs = require('fs');

// Get the environment flag used to run the command
var envFlag = "dev"; // dev is the default
var envFlagMatches = 0;
var flags = JSON.parse(process.env.npm_config_argv).original
if(flags.indexOf("--env") > 0) {
  envFlag = flags[flags.indexOf("--env") + 1];
  envFlagMatches++;
  console.log("Using the environment variable \"" + envFlag + "\" that you set.");
} else {
  console.log("Using the default flag of \"" + envFlag + "\".");
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
    return ${JSON.stringify(envVars[i])};
  }
  `;
}

var content = fs.readFileSync(__dirname + '/../env/app-config.ts');
var contentReplace = content.toString();
contentReplace = contentReplace.replace(/willBeReplaced/, configContent);

var wstream = fs.createWriteStream(__dirname + '/../src/providers/app-config.ts');
wstream.write(contentReplace);
wstream.end();
