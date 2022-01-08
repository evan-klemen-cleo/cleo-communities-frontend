import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import dayjs from 'dayjs';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const Comment = () => {
  const rand = (max, offset = 1) => Math.floor(Math.random() * max) + offset;
  return (
    <Row className="my-3 comment-wrapper">
      <Col xs={12} className="text-start d-flex flex-row align-items-center">
        <Image src="https://www.fillmurray.com/50/50" roundedCircle />
        <h4 className="username font-os font-weight-400">@username</h4>
      </Col>
      <Col xs={12} className="text-start mt-4">
        <p className="text-muted font-22 font-noto font-weight-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue enim nunc, a ultrices felis rutrum eget.</p>
      </Col>
      <Col xs={12} className="mt-3 d-flex flex-row align-items-center">
            <span className="text-muted font-22">
              {dayjs(dayjs().subtract(rand(59), 'minutes')).fromNow()}
              {`  `}
              &bull;
            </span>
        <Button variant="link" className="reply-link">{`  `}reply</Button>
      </Col>
    </Row>
  );
};

export default Comment;
