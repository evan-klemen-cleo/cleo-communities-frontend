import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Bell, BookmarkHeart, ChatLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Poll from './Poll';

function Post({ title, blurb, poll }) {
  if (!Boolean(title)) return null;
  const pollDetails = {
    options: [
      {
        label: 'The StrollKing 9000',
        votes: 12
      },
      {
        label: 'FalconX Turbo Strollabout',
        votes: 2
      },
      {
        label: 'Swiss Army Stroller',
        votes: 6
      }
    ]
  };
  return (
    <Row className="post-wrapper">
      <Col xs={9}>
        <div className="post-item">
          <h4><Link to="1234" className="link">{title}</Link></h4>
          <p>{blurb}</p>
        </div>
        {
          poll && <Poll pollDetails={pollDetails} />
        }
      </Col>
      <Col xs={3} className="flex-column d-flex justify-content-between">
        <div className="d-flex justify-content-end">
          <Button variant="link" title="Subscribe to updates"><Bell/></Button>
          <Button variant="link" title="Bookmark post"><BookmarkHeart/></Button>
        </div>
        <div className="comment-count">
          Comments: 12 <ChatLeft />
        </div>
      </Col>
    </Row>
  )
}

export default Post;
