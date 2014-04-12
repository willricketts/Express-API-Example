//var db = require('monk')('localhost/apex');
//var photo = db.get('photo')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/apex');

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
}
