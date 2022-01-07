import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Clock, Eye, ChatRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Poll from './Poll';

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
  const rand = (max, offset=1) => Math.floor(Math.random() * max) + offset
  return (
    <Row className="post-wrapper">
      <Row style={{padding: '53px 53px 0 53px', marginBottom: '18px'}}>
        <Col xs={6} className="text-start d-flex flex-row">
          <div className="chip">{'Products'.toUpperCase()}</div>
          <div className="chip">{'Reviews'.toUpperCase()}</div>
          <div className="chip">{'Newborn'.toUpperCase()}</div>
        </Col>
      </Row>
      <Col xs={12} style={{padding: '0 53px 53px 53px'}}>
        <div className="post-item">
          <h3><Link to="1234" className="link">{title}</Link></h3>
          <p className="text-muted font-22">{blurb}</p>
        </div>
        {
          poll && <Poll pollDetails={pollDetails}/>
        }
      </Col>
      <hr/>
      <Col xs={12}  style={{paddingRight: '53px', paddingBottom: '30px', paddingLeft: '53px'}} className="d-flex">
        <div className="post-meta">
          <Clock/> <span>{dayjs(dayjs().subtract(rand(59), 'minutes')).fromNow()}</span>
        </div>
        <div className="post-meta">
          <Eye/> <span>{rand(1000)}</span>
        </div>
        <div className="post-meta">
          <ChatRight /><span>{Math.floor(Math.random() * 1000) + 1}</span>
        </div>

      </Col>
    </Row>
  )
}

export default Post;
