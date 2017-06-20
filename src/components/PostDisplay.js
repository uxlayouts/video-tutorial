import React from 'react';

const PostDisplay = ({ id, title, body }) => (
  <div className="item">
    <h2>Post {id}</h2>
    <h2>{title}</h2>
    <p>{body}</p>
  </div>
);

export default PostDisplay;
