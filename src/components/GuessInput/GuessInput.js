import React from 'react';

function GuessInput({ onInput }) {
  const [input, setInput] = React.useState('');
  const handleSubmit = (e) => {
    onInput(input);
    console.log('You guessed:', input);
    setInput('');
  };
  return (
    <>
      <form className="guess-input-wrapper" action={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          name="guess"
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          required
          minLength="5"
          maxLength="5"
          value={input}
          onChange={(e) => setInput(e.target.value.toUpperCase())}
          style={{ textTransform: 'uppercase' }}
        />
      </form>
    </>
  );
}

export default GuessInput;
