import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div className="App-nav">
      <NavLink exact to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink exact to="/posts">Posts</NavLink>
    </div>
  );
};
export default Nav;
