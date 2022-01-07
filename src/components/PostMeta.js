import React from 'react';
import { ChatRight, Clock, Eye } from 'react-bootstrap-icons';
import dayjs from 'dayjs';

const PostMeta = ({ time, views, comments, className }) => {
  const rand = (max, offset = 1) => Math.floor(Math.random() * max) + offset
  return (
    <div className={`d-flex ${className}`}>
      <div className="post-meta">
        <Clock/> <span>{dayjs(dayjs().subtract(rand(59), 'minutes')).fromNow()}</span>
      </div>
      <div className="post-meta">
        <Eye/> <span>{rand(1000)}</span>
      </div>
      <div className="post-meta">
        <ChatRight/><span>{Math.floor(Math.random() * 1000) + 1}</span>
      </div>
    </div>
  );
};

export default PostMeta;
