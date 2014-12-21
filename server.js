var http = require('http');
var express = require("express");
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var controllers = require("./controllers");
var flash = require("connect-flash");
var session = require('express-session')
var app = express();


// Setup the view Engine
app.set("view engine","vash");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(session({ secret: 'behavior', resave: false, saveUninitialized: true}));

app.use(flash());

// parse application/json
app.use(bodyParser.json())

//set the public static resource folder
app.use(express.static(__dirname + "/public"));

//use authentication
var auth = require("./auth");
auth.init(app);

// Map the routes
controllers.init(app);

var server = http.createServer(app);

server.listen(3000);