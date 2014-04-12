var db = require('monk')('localhost/apex');
var photo = db.get('photo')

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
    console.log(req.query);
    photo.insert(req.query, function (err, doc) {
        if (err) throw err;
    });
    res.end();
}