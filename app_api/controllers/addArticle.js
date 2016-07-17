var mongoose = require('mongoose');
var User = mongoose.model('User');
var Article = mongoose.model('Article');

module.exports.addArticle = function(req, res) {

  //Add post
  //router.post('/posts', function(req, res, next) {
    var article = new Article(req.body);

    article.username = req.body.username;
    article.title = req.body.title;
    article.text = req.body.text;
    article.tags = req.body.tags;

    console.log(req.body.title);

    article.save(function(err, article){
      if (err) {
        console.log(err);
        return next(err);
      }
      console.log(article);
      res.json(article);
    });
  //});

};
