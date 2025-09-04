import React from 'react';

function Guesses({ guesses }) {
  if (!guesses) {
    return null;
  }
  return (
    <>
      <div className="guess-results">
        {guesses.map(({ value, id }) => (
          <p key={id} className="guess">
            {value}
          </p>
        ))}
      </div>
    </>
  );
}

export default Guesses;
