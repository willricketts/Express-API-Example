
/*
 * GET users listing.
 */
var db = require('monk')('localhost/apex');
var users = db.get('user')

exports.list = function(req, res){
  users.find({}, function(e, docs){
      res.json(docs);
  });
};

exports.find = function(req, res){
  var name = req.params.name;
  users.find({name: name}, function(e, docs){
      res.json(docs);
  });
};

exports.create = function(req, res) {
    console.log(req.query);
    users.insert(req.query, function (err, doc) {
        if (err) throw err;
    });
    res.end();
}