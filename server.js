var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static(__dirname) + "/client");
app.use('/assets', express.static(__dirname + "../assets"));

app.listen(process.env.PORT || 3000, function() {
  console.log("Listening to 3000...");
});