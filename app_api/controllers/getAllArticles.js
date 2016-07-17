var mongoose = require('mongoose');
var User = mongoose.model('User');
var Article = mongoose.model('Article');


module.exports.getAllArticles = function(req, res) {

 Article.find(function(err, articles){
    if (err) {
      return res.send(500, err);
    }
    return res.send(articles);
  }).sort('-timestamp')

}