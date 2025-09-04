import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from './Guess';

function Guesses({ guesses, answer, onGuessResult }) {
  const handleOnGuessResult = (isCorrect) => {
    onGuessResult({
      isCorrect,
      isGameOver: guesses.length === NUM_OF_GUESSES_ALLOWED || isCorrect,
    });
  };
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
          const guess = guesses[num];
          return (
            <Guess
              key={num}
              guess={guess}
              answer={answer}
              onGuessResult={handleOnGuessResult}
            />
          );
        })}
      </div>
    </>
  );
}

export default Guesses;
