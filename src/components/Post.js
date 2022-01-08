import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Poll from './Poll';
import Chip from './Chip';
import PostMeta from './PostMeta';

dayjs.extend(relativeTime)

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
      <Row style={{padding: '53px 53px 0 53px', marginBottom: '18px'}}>
        <Col xs={6} className="text-start d-flex flex-row">
          <Chip text="Products" />
          <Chip text="Reviews" />
          <Chip text="Newborn" />
        </Col>
      </Row>
      <Col xs={12} style={{padding: '0 53px 53px 53px'}}>
        <div className="post-item">
          <h3><Link to="/posts/1234" className="link font-weight-400 font-noto">{title}</Link></h3>
          <p className="text-muted font-22 font-noto font-weight-300 mt-4">{blurb}</p>
        </div>
        {
          poll && <Poll pollDetails={pollDetails}/>
        }
      </Col>
      <hr/>
      <Col xs={12}  style={{paddingRight: '53px', paddingBottom: '30px', paddingLeft: '53px'}}>
        <PostMeta />
      </Col>
    </Row>
  )
}

export default Post;
