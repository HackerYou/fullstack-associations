import React from 'react';

const Post = ({ body }) => (
  <div className='post'>
    <div className='userName'>(user goes here)</div>
    <div className='body'>{ body }</div>
    <div>(comments go here)</div>
  </div>
)

export default Post;