var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  body: String
});

module.exports = mongoose.model('Post', PostSchema);