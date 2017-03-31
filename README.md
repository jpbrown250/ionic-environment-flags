# The purpose of this script is to aid with the use of production and development environments.

### Features:
* Config files in either .js or .json (if both are found, .js will be prioritized)
* Creates a provider file in src/providers/app-config.ts when this script is ran
* Access to enviornment variables through use of the .js file as a config

### Implementation:
1. Place the script found at `./scripts/replace.env.js` in your project inside of a scripts folder (create one if it does not exist).
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
<!-- NOTE: This is meant to be seen throuh markdown styling -->
<blockquote>
...<br>
@Injectable()<br>
export class AppConfig {<br>
  &nbsp;constructor() {}<br>
  &nbsp;static get apiUrl() {<br>
    &nbsp;&nbsp;const apiUrlConst = "www.your-dev-url.com"<br>
    &nbsp;&nbsp;return apiUrlConst<br>
  &nbsp;}<br>
}<br>
</blockquote>

* if I run `npm run generate-env -env=p` my component contains this:
<!-- NOTE: This is meant to be seen throuh markdown styling -->
<blockquote>
...<br>
@Injectable()<br>
export class AppConfig {<br>
  &nbsp;constructor() {}<br>
  &nbsp;static get apiUrl() {<br>
    &nbsp;&nbsp;const apiUrlConst = "www.your-prod-site.com"<br>
    &nbsp;&nbsp;return apiUrlConst<br>
  &nbsp;}<br>
  &nbsp;static get someApiKey() {<br>
    &nbsp;&nbsp;const someApiKeyConst = undefined<br>
    &nbsp;&nbsp;return someApiKeyConst<br>
  &nbsp;}<br>
}<br>
</blockquote>

### Resources and Credits
* GitHub Environment Proposal: <https://github.com/driftyco/ionic-app-scripts/issues/762>
* Base Architecture Design: It was posted by [juarezpaf](https://github.com/juarezpaf) in the above mentioned thread on March 8th, 2017.
