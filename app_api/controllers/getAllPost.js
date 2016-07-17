var mongoose = require('mongoose');
var User = mongoose.model('User');
var Post = mongoose.model('Post');


module.exports.getAllPost = function(req, res) {

 Post.find(function(err, posts){
    if (err) {
      return res.send(500, err);
    }
    return res.send(posts);
  }).sort('-timestamp')

}