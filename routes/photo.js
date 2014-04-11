var db = require('monk')('localhost/apex');
var photos = db.get('photo')

exports.listphotos = function(req, res){
    photos.find({}, function(e, docs){
        res.json(docs);
    });

};

exports.findphoto = function(req, res){
    var name = req.params.owner;
    photos.find({owner: name}, function(e, docs){
        res.json(docs);
    });
};