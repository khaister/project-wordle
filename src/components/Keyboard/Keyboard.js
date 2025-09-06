function Keyboard({ guesses }) {
  const topRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const middleRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const bottomRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  const letterStatuses = guesses.flat().reduce((acc, { letter, status }) => {
    if (!acc[letter]) {
      acc[letter] = status;
      return acc;
    }

    // if the letter is already marked as 'correct', we don't want to override it
    if (acc[letter] === 'correct') {
      return acc;
    }

    // if the letter is marked as 'incorrect' or 'misplaced',
    // we only want to override it if the new status is 'correct'
    if (
      (acc[letter] === 'incorrect' || acc[letter] === 'misplaced') &&
      status === 'correct'
    ) {
      acc[letter] = status;
    }

    return acc;
  }, {});
  console.log(letterStatuses);

  return (
    <div className="keyboard">
      {[topRow, middleRow, bottomRow].map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((letter) => {
            const status = letterStatuses[letter] || '';
            return (
              <button key={letter} className={`key ${status}`}>
                {letter}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
