import React from 'react';

const Comment = ({user, body}) => (
  <div className='comment'>
    <div className='comment-user'>{ user.name }</div>
    <div className='comment-body'>{ body }</div>
  </div>
)

export default Comment;