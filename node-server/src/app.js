const express = require('express');
const bodyParser = require("body-parser");
const app = express();

//configuring express to use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = app;


