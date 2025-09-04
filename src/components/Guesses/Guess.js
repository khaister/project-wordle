import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer, onGuessResult }) {
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    if (guess) {
      const results = checkGuess(guess.value, answer);
      const isCorrect = results.every(({ status }) => status === 'correct');
      onGuessResult(isCorrect);
    }
    setResults(guess ? checkGuess(guess.value, answer) : []);
  }, [guess, answer, onGuessResult]);

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
