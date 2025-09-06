import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import GuessInput from '../GuessInput/GuessInput';
import Guesses from '../Guesses/Guesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [isGuessCorrect, setIsGuessCorrect] = React.useState(false);

  const handleOnInput = (input) => {
    const result = checkGuess(input, answer);
    setGuesses([...guesses, result]);
    if (result.every(({ status }) => status === 'correct')) {
      setIsGuessCorrect(true);
      setIsGameOver(true);
    } else if (guesses.length + 1 === NUM_OF_GUESSES_ALLOWED) {
      setIsGameOver(true);
    }
  };

  return (
    <>
      <Guesses guesses={guesses} />
      <GuessInput onInput={handleOnInput} isGameOver={isGameOver} />
      {isGameOver && isGuessCorrect && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{guesses.length} guesses</strong>
          </p>
        </div>
      )}
      {isGameOver && !isGuessCorrect && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
