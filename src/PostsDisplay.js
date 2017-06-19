import React from 'react';
import { NavLink } from 'react-router-dom';

const PostDisplay = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Posts</h2>
      {props.postList.map(({ id, title, body }) => (
        <div className="item" key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
          <NavLink to={`/posts/${id}/details`}>View {id}</NavLink>
        </div>
      ))}
    </div>
  );
}

export default PostDisplay;
