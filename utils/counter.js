export const createAttemptsCounter = () => {
  let guessingAttempts = 1;

  const attemptsCounter = {
    getGuessingAttempts: () => guessingAttempts,
    addNewAttempt: () => guessingAttempts++,
  };

  return attemptsCounter;
};
