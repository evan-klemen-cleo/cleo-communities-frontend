import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
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

function App() {
  const { pathname } = useLocation();
  console.log('location-------->', pathname);
  const waveFill = {
    '/posts': '#E9DED1'
  };
  const topbarClasses = classNames('topbar', {
    posts: pathname === '/posts'
  });
  const pageClasses = classNames('page', {
    posts: pathname === '/posts'
  })
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
                <Bell className="mx-1" />
                Notifications
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ height: '150px', overflow: 'hidden' }} className="wave">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
          <path d="M-34.71,13.33 C174.09,264.97 293.16,-98.17 535.83,179.13 L504.79,-10.34 L0.00,0.00 Z"
                style={{ stroke: 'none', fill: waveFill[pathname] }}/>
        </svg>
      </div>

      <Container className="mt-5 h-100">
        <Routes>
          <Route exact="/landing" element={<Landing/>}/>
          <Route path="/posts/:id" element={<PostDetails/>}/>
          <Route path="/posts" element={<Home/>}/>
          <Route path="/" element={<Navigate replace to="/posts"/>}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
