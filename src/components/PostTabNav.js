import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const PostTabNav = () => {
  const { pathname } = useLocation();
  let activeStyle = 'active nav-link';

  return (
    <div className="d-flex flex-row">
      <NavLink
        to="/posts"
        className={(e) => {
          return e.isActive && (pathname === '/posts') ? activeStyle : 'nav-link'
        }}
      >
        New
      </NavLink>
      <NavLink
        to="trending"
        className={({ isActive }) => {
          return isActive && (pathname === '/posts/trending') ? activeStyle : 'nav-link'
        }}
      >
        Trending
      </NavLink>
    </div>
  );
};

export default PostTabNav;
