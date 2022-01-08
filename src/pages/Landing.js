import React from 'react';
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <Row className="mt-5 h-100">
      <Col xs={6} className="h-50 d-flex align-items-center justify-content-center">
        <div className="text-start">
          <h1 className="my-4 text-white font-66">Cleo Conversations</h1>
          <h2 className="my-4 text-white font-os">We help you thrive at work and at home</h2>
          <Button
            className="login-btn mt-4"
            onClick={() => navigate('/posts')}
          >
            Log in
          </Button>
        </div>
      </Col>
      <Col xs={6}>
        <div className="landing-image h-100" />
      </Col>
    </Row>
  );
};

export default Landing;
