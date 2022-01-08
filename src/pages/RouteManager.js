import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { matchPath } from 'react-router';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import logo from '../assets/cleo-logo.svg';
import classNames from 'classnames';
import '../app.scss';

import Home from './Home';
import PostDetails from './PostDetails';
import Landing from './Landing';
import { Bell } from 'react-bootstrap-icons';
import PostList from '../components/PostList';

function App() {
  const { pathname } = useLocation();
  const postDetailsRouteObject = matchPath('/posts/:id', pathname);
  const isPostDetailsRoute = postDetailsRouteObject && !postDetailsRouteObject?.params?.id.includes('trending');
  const waveFill = {
    '/posts': '#E9DED1',
    '/posts/trending': '#E9DED1',
    '/landing': '#f6e4e4'
  };
  const routeColorClasses = {
    posts: ['/posts', '/posts/trending'].includes(pathname),
    'post-detail': Boolean(isPostDetailsRoute),
    landing: pathname === '/landing'
  };
  const topbarClasses = classNames('topbar', routeColorClasses);
  const pageClasses = classNames('page', routeColorClasses)
  return (
    <div className={pageClasses}>
      <div className={topbarClasses}>
        <Container>
          <Row>
            <Col xs={2} className="text-start">
              <Link to="/">
                <img src={logo} className="App-logo" alt="logo"/>
              </Link>
            </Col>
            <Col xs={{ offset: 8, span: 2 }}>
              <div className="notifications">
                <Bell className="mx-1"/>
                Notifications
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{
        height: '150px',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 2,
      }}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
          <path d="M-34.71,13.33 C174.09,264.97 293.16,-98.17 535.83,179.13 L504.79,-10.34 L0.00,0.00 Z"
                style={{ stroke: 'none', fill: waveFill[pathname] || '#ede2ef' }}/>
        </svg>
      </div>

      <div className={`mt-5 h-100 ${pageClasses}`}>
        <Routes>
          <Route path="/landing" element={<Landing/>}/>
          <Route path="/posts" element={<Home/>}>
            <Route path="/posts" element={<PostList/>}/>
            <Route path="trending" element={<PostList trending/>}/>
          </Route>
          <Route path="/posts/:id" element={<PostDetails/>}/>
          <Route path="/" element={<Navigate replace to="/posts"/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
