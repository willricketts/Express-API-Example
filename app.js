
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var photo = require('./routes/photo');
var http = require('http');
var path = require('path');
var mongodb = require('mongodb');
var app = express();
var url = require('url');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/apex');

//DB stuff

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//GENERAL ROUTES
app.get('/', routes.index);                     //index

//USER ROUTES
app.get('/users', user.list);                   //get all
app.get('/users/:name', user.find);             //get one
app.post('/users/create', user.create);         //create

//PHOTO ROUTES
app.get('/photos', photo.list);                 //get all
app.get('/users/:owner/photos', photo.find);    //get one
app.post('/photos/create', photo.create);       //create

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
