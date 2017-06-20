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
          <NavLink to={`/posts/${id}`}>View {id}</NavLink>
        </div>
      ))}
    </div>
  );
}

export default PostDisplay;

// <Link
//   to={{
//     pathname: `/posts/${id}`,
//     state: { message: 'hello, im a passed message!' }
//   }}
// >
