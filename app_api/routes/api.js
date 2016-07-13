var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

router.post('/register', ctrlAuth.register);

//Getting all posts
router.get('/posts', function(req, res, next) {
  Post.find(function(err, posts){
  	if (err) {
  		return next(err);
  	}
  	//console.log(posts.title);
  	res.json(posts);
  });
});



module.exports = router;