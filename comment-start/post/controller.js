var Post = require('./model');

module.exports = {
  listPosts: (req, res) => {
    Post.find().then(records => res.send(records));
  }
}