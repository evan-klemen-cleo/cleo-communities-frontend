import React from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Chip from '../components/Chip';
import PostMeta from '../components/PostMeta';
import Comment from '../components/Comment';

const PostDetails = () => {
  const { id } = useParams();
  console.log('id-------->', id);

  return (
    <>
      <Container className="mt-5">
        <Row className="mb-4">
          <Col xs={12} className="d-flex">
            <Chip text="Hiking" />
            <Chip text="Meetups" />
          </Col>
          <Col xs={12}>

          </Col>
        </Row>
        <Row>
          <Col xs={12} className="post-detail-top text-start mb-4">
            <h3 className="font-34">Anyone in the D.C. area want to join me and the kids for a hike?</h3>
            <p className="text-muted font-22">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue enim nunc,
              a
              ultrices felis rutrum eget. Suspendisse molestie, enim ac venenatis tristique, dui ante auctor lectus, sed
              facilisis nunc nibh molestie eros. Sed ultricies mauris ligula, nec iaculis nunc sollicitudin nec. Proin
              accumsan malesuada urna vel pulvinar. </p>
          </Col>
        </Row>
      </Container>
      <hr/>
      <Container>
        <Row>
          <Col xs={12} className="my-5">
            <PostMeta />
          </Col>
          <Col xs={12}>
            <Form className="comment-form-wrapper">
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" className="comment-input" placeholder="What are your thoughts?" rows={3} />
              </Form.Group>
              <Button type="submit" size="sm" variant="primary" className="comment-submit">
                Comment
              </Button>
            </Form>
          </Col>
        </Row>
        <Comment />
      </Container>
    </>
  );
};

export default PostDetails;
