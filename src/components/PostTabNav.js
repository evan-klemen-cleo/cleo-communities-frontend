import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const PostTabNav = () => {
  const { pathname } = useLocation();
  let activeStyle = 'active nav-link font-weight-600';

  return (
    <div className="d-flex flex-row">
      <NavLink
        to="/posts"
        className={(e) => {
          return e.isActive && (pathname === '/posts') ? activeStyle : 'nav-link font-weight-600'
        }}
      >
        New
      </NavLink>
      <NavLink
        to="trending"
        className={({ isActive }) => {
          return isActive && (pathname === '/posts/trending') ? activeStyle : 'nav-link font-weight-600'
        }}
      >
        Trending
      </NavLink>
    </div>
  );
};

export default PostTabNav;
