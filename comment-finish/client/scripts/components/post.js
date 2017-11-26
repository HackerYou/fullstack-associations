import React from 'react';
import Comment from './comment';

const Post = ({ body, user, comments }) => (
  <div className='post'>
    <div className='userName'>{ user.name }</div>
    <div className='body'>{ body }</div>
    <div>{ comments.map(comment => <Comment key={ comment._id } {...comment } /> ) }</div>
  </div>
)

export default Post;