var data = require(__dirname + "/production.json");
data.someApiKey = process.env.someKey;
module.exports = data;