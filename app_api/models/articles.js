var mongoose = require('mongoose');

var tagSchema = mongoose.Schema({
    tags: { type: String, select: true },
    text: String,
    timestamp: {type: Date, default: Date.now}
});

var CommentSchema = new mongoose.Schema({
  username: String,
  commentText: String,
  upvotes: {type: Number, default: 0},
  article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' }
});


var ArticleSchema = new mongoose.Schema({
  username: String,
  title: String,
  text: String,
  timestamp: {type: Date, default: Date.now},
  upvotes: {type: Number, default: 0},
  tags: [tagSchema],
  comments: [CommentSchema]
});

ArticleSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};

mongoose.model('Article', ArticleSchema);
mongoose.model('Comment', CommentSchema);