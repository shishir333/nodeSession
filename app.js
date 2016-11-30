// var hello = 'Hello World';

// console.log(hello);

var express = require('express');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./Model/bookModel');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var bookRouter = require('./Routes/bookRoutes')(Book);

app.use('/api/v1/Books', bookRouter); //This line should come after the bodyparser urlencoded and json

//app.use('/api/v1/Books', bookRouter);

app.use('/api/v1', function (req, res) { res.send('Server started!');});
//app.use('/', function(req, res){ res.send('Root route');})

app.listen(port, function() { console.log('Using port:' + port); });