const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const loginRoute = require("../routes/loginRoute");
const registerRoute = require("../routes/registerRoute");

//configuring express to use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/login',loginRoute);//the route for login
app.use('/register',registerRoute);//the route for login

module.exports = app;


