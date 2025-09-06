import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import GuessInput from '../GuessInput';
import Guesses from '../Guesses';
import Keyboard from '../Keyboard';
import GameOverBanner from '../GameOverBanner';

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
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
      <Keyboard guesses={guesses} />
      <GameOverBanner
        isGameOver={isGameOver}
        isGuessCorrect={isGuessCorrect}
        guesses={guesses}
        answer={answer}
        onReset={() => {
          setGuesses([]);
          setIsGameOver(false);
          setIsGuessCorrect(false);
          setAnswer(sample(WORDS));
        }}
      />
    </>
  );
}

export default Game;
