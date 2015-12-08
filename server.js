var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, function() {
  console.log("Listening to 3000...");
});