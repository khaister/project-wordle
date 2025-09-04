import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from './Guess';

function Guesses({ guesses }) {
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
          const guess = guesses[num];
          return <Guess key={num} value={guess ? guess.value : ''} />;
        })}
      </div>
    </>
  );
}

export default Guesses;
