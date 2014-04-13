//var db = require('monk')('localhost/apex');
//var users = db.get('user')

var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("DB Connection Open");
});

var userSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

var user = mongoose.model('user', userSchema)

exports.list = function(req, res){
  user.find({}, function(e, docs){
      res.json(docs);
  });
};

exports.find = function(req, res){
  var name = req.params.name;
  user.find({name: name}, function(e, docs){
      res.json(docs);
  });
};

exports.create = function(req, res) {
    var newUser = new user(req.query);
    newUser.save(function (err, newUser, numberAffected) {
      if (err) console.log(err);
    });
    res.end();
};

exports.update = function(req, res) {
    var b = req.query;
    var query = { name: req.params.name };
    user.findOneAndUpdate(query, { name: b.name, age: b.age, email: b.email}, function(err, docs) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(docs);
      };
    });
};

exports.delete = function(req, res) {
  var b = req.query;
  var query = { name: req.params.name };
  user.findOneAndRemove(query, function(err, docs){
    if(err){
      throw err;
    }
    else {
      res.json(docs);
    };
  });
};
