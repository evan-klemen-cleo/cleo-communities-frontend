import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Post from '../components/Post';
import PostTabNav from './PostTabNav';
import { Outlet } from 'react-router-dom';
import PostList from './PostList';

function Home() {

  return (
    <Row>
      <Row>
        <Col xs={3} className="mb-2">
          <PostTabNav />
        </Col>
      </Row>
      <Outlet />
    </Row>
  )
}

export default Home;
