//  create web server
// 1. import module
// 2. create server
// 3. listen port
// 4. routing
// 5. run server

// 1. import module
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// 2. create server
var app = express();
// 3. listen port
var port = 3000;
// 4. routing
var router = require('./router/main')(app, path, bodyParser, mongoose);
// 5. run server
var server = app.listen(port, function(){
    console.log("Express server has started on port " + port)
});

// 6. connect db
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost/comment');