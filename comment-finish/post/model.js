var mongoose = require('mongoose');
require('../user/model');

var CommentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  body: String
});

var PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  body: String,
  comments: [CommentSchema]
});

module.exports = mongoose.model('Post', PostSchema);