import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
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
    setGuesses([...guesses, { value: input, id: crypto.randomUUID() }]);
  };

  const handleOnGuessResult = ({ isCorrect, isGameOver }) => {
    setIsGuessCorrect(isCorrect);
    setIsGameOver(isGameOver);
  };

  return (
    <>
      <Guesses
        guesses={guesses}
        answer={answer}
        onGuessResult={handleOnGuessResult}
      />
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
