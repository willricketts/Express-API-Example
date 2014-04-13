//var db = require('monk')('localhost/apex');
//var photo = db.get('photo')

var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("DB Connection Open");
});

var photoSchema = mongoose.Schema({
    contenturl: String,
    owner: String,
    latitude: String,
    longitude: String
});

var photo = mongoose.model('photo', photoSchema)

exports.list = function(req, res){
    photo.find({}, function(e, docs){
        res.json(docs);
    });
};

exports.find = function(req, res){
    var name = req.params.owner;
    photo.find({owner: name}, function(e, docs){
        res.json(docs);
    });
};

exports.create = function(req, res) {
    var newPhoto = new photo(req.query);
    newPhoto.save(function (err, newPhoto, numberAffected) {
      if (err) console.log(err);
    });
    res.end();
};

exports.update = function(req, res) {
    var b = req.query;
    var query = { name: req.params.owner };
    user.findOneAndUpdate(query, { owner: b.name, latitude: b.latitude, longitude: b.longitude, contenturl: b.contenturl}, function(err, docs) {
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
  var query = { owner: req.params.owner };
  photo.findOneAndRemove(query, function(err, docs){
    if(err){
      throw err;
    }
    else {
      res.json(docs);
    };
  });
};
