var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use('/', express.static(__dirname));

app.listen(process.env.npm_package_config_port || 3000, function() {
  console.log("Listening to 3000...");
});