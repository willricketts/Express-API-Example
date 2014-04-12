
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

//ROUTES

//index
app.get('/', routes.index);

//USER ROUTES
//get
app.get('/users', user.list);
app.get('/users/:name', user.find);

//create
app.post('/users/create', user.create);

//PHOTOS
//get all
app.get('/photos', photo.list);
//get one
app.get('/users/:owner/photos', photo.find);
//create
app.post('/photos/create', photo.create);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
