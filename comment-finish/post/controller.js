var Post = require('./model');

module.exports = {
  listPosts: (req, res, next) => {
    Post.find().populate('user comments.user').exec()
    .then(records => res.send(records))
    .catch(next)
  }
}