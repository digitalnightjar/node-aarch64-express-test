var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");

var app = express();

const path = require("path");
const buildPath = path.normalize(path.join(__dirname, './client/build'));
app.use(express.static(buildPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app, buildPath);

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});
