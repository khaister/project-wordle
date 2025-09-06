function GameOverBanner({
  isGameOver,
  isGuessCorrect,
  guesses,
  answer,
  onReset,
}) {
  if (!isGameOver) {
    return null;
  }

  const classes = isGuessCorrect ? 'happy banner' : 'sad banner';
  const message = isGuessCorrect ? (
    <>
      <strong>Congratulations!</strong> Got it in{' '}
      <strong>{guesses.length} guesses</strong>
    </>
  ) : (
    <>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </>
  );

  return (
    <div className={classes}>
      <p>{message}</p>
      <button className="reset-button" onClick={onReset}>
        New Game
      </button>
    </div>
  );
}

export default GameOverBanner;
