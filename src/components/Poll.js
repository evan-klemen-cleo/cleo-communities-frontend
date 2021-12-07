import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Collapse from 'react-bootstrap/Collapse';

const Poll = ({ pollDetails }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelect = (e) => setSelectedOption(e.target.value);
  return (
    <>
      <div className="poll">
        <ButtonGroup name="radio">
          {pollDetails.options.map(({ label }, i) => (
            <Button
              key={i}
              type="radio"
              name="radio"
              value={label}
              checked={selectedOption === label}
              active={selectedOption === label}
              onClick={handleSelect}
              variant="outline-secondary"
              size="sm">{label}</Button>
          ))}
        </ButtonGroup>
      </div>
      <Collapse in={Boolean(selectedOption)}>
        <div className="poll-results">
          {
            [...pollDetails.options]
              .sort((a, b) => b.votes - a.votes)
              .map(({ label, votes }) => (
                <p className="mb-0 pl-1" key={label}>{label}: <strong>{votes} </strong></p>
              ))
          }
        </div>
      </Collapse>
    </>
  );
};

export default Poll;
