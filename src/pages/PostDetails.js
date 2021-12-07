import React from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PostDetails = () => {
  const { id } = useParams();
  console.log('id-------->', id);
  return (
    <Row className="post-detail-wrapper">
      <Col xs={12}>
        Post details...
      </Col>
    </Row>
  );
};

export default PostDetails;
