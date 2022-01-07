import React, { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useLocation } from 'react-router-dom';
import Post from '../components/Post';

const PostList = ({ trending }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log('useEffect pathname: ', pathname)
  }, [pathname]);
  return (
    <Row className="mt-4">
      <Col xs={12}>
        <Post title="Anyone in the D.C. area want to join me and the kids for a hike?" blurb="I was looking to do either Barts trail or possibly going up to Sugar Mountain..." />
        <Post
          title="Which stroller do you prefer for two children?"
          blurb="Trying to decide on which to get. I live in the city and..."
          poll
        />
        <Post
          title="I have a ton of girls 3-6mo clothes if anyone is in need!"
          blurb="As the title says, from shoes, dresses, socks, shirts and bathing suits!"
        />
        <Post
          title="My child is having a tongue tie revision. What was your experience like with recovery?"
          blurb="Any other tips, or things you wish you would have known before the procedure?"
        />
      </Col>
    </Row>
  );
};

export default PostList;
