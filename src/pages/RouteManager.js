import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../assets/cleo-logo.svg';
import '../app.scss';

import Home from './Home';
import PostDetails from './PostDetails';
import Landing from './Landing';

function App() {
  const location = useLocation();
  console.log('location-------->', location);
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="nav-brand">
            <img src={logo} className="App-logo" alt="logo"/>
            <h3>Conversations</h3>
          </Navbar.Brand>
          <div>

            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/posts/:id">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>

      <Container className="mt-5 h-100">
        <Routes>
          <Route exact="/" element={<Navigate to="/posts" />} />
          <Route exact="landing" element={<Landing />} />
          <Route path="/posts/:id" element={<PostDetails/>}/>
          <Route path="/posts" element={<Home/>}/>
        </Routes>
      </Container>
    </React.Fragment>
  );
}

export default App;
