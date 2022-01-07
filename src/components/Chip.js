import React from 'react';

const Chip = ({text}) => {
  return (
    <div className="chip">{text.toUpperCase()}</div>
  );
};

export default Chip;
