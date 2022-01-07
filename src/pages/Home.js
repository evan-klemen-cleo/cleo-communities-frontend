import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PostTabNav from '../components/PostTabNav';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function Home() {

  return (
    <Container className="mt-5 h-100">
      <Row>
        <Row>
          <Col xs={3} className="mb-2">
            <PostTabNav/>
          </Col>
        </Row>
        <Outlet/>
      </Row>
    </Container>
  )
}

export default Home;
