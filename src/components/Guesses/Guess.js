import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  if (!guess) {
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

  const results = checkGuess(guess.value, answer);

  return (
    <p className="guess">
      {results.map(({ letter, status }, index) => {
        const classes = `cell ${status}`;
        return (
          <span key={index} className={classes}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
