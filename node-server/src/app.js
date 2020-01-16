const express = require('express');
const bodyParser = require("body-parser");
const app = express();

const loginRoute = require("../routes/loginRoute");
const registerRoute = require("../routes/registerRoute");
const homeRoute = require("../routes/homeRoute");

//configuring express to use body-parser
app.use(bodyParser.json());

app.use(homeRoute);//the route to the homepage
app.use(loginRoute);//the route for login
app.use(registerRoute);//the route for login

module.exports = app;


