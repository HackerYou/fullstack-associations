var mongoose = require('mongoose');
var Post = require('./post/model');
mongoose.connect('mongodb://localhost/fakebook');

// TODO: Add user details to this
var posts = [
  {
    body: "The first person to suck in helium probably thought there voice was forever changed for a scary 20 seconds or so."
  },
  {
    body: "If you win a years worth of calendars, do you only win one calendar?"
  },
  {
    body: "It kinda makes sense that the target audience for fidget spinners lost interest in them so quickly"
  },
  {
    body: "Security at every level of an airport is absolutely ridiculous. Until you get to the baggage claim. Then it’s just like take whatever bag you want."
  }
]
Post.remove().then(() => {
  posts.forEach(postData => {
    var post = new Post(postData);
    post.save().then(() => console.log(`Saved ${post.body}`));
  })
})
