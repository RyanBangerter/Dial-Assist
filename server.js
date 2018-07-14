//dependencies
const express = require("express");
const bodyParser = require("body-parser");
//var path = require("path");
const passport = require('passport');
const session = require('express-session');
const routes = require('./routes');


//initialization
const PORT = process.env.PORT || 3001;
const app = express();

//static content(public folder)
app.use(express.static("client/build"));

//models for syncing
const db = require("./models");

//parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//auth
app.use(session({
    secret: 'kidneys make bad cartoon characters',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());

app.use(passport.session());


//routing
app.use(routes);



//load passport strategies
require("./config/passport.js")(passport, db.Customer);



//listener
db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
      });
});