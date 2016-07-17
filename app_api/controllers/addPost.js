var mongoose = require('mongoose');
var User = mongoose.model('User');
var Post = mongoose.model('Post');

module.exports.addPost = function(req, res) {

  //Add post
  //router.post('/posts', function(req, res, next) {
    var post = new Post(req.body);

    post.username = req.body.username;
    post.title = req.body.title;
    post.text = req.body.text;
    post.tags = req.body.tags;

    console.log(req.body.title);

    post.save(function(err, post){
      if (err) {
        console.log(err);
        return next(err);
      }
      console.log(post);
      res.json(post);
    });
  //});

};
