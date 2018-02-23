var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var cookieParser = require('cookie-parser');

app.use(cookieParser());


// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

//Connecting the  Server Side app.js
require('./app')(app);

// Hosting on http://localhost:3000/#/
var port = process.env.PORT || 3000;
app.listen(port);