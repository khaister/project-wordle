import React from 'react';

import { range } from '../../utils';

function Guess({ value }) {
  if (!value) {
    return (
      <p className="guess">
        {range(5).map((i) => (
          <span key={i} className="cell">
            {' '}
          </span>
        ))}
      </p>
    );
  }

  return (
    <p className="guess">
      {value.split('').map((letter, index) => (
        <span key={index} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
