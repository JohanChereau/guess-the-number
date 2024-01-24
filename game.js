import { promptNumber } from "./utils/prompt.js";

export const guessTheNumber = (
  targetNumber,
  bounds,
  guessingAttemptsCounter
) => {
  const userAttempt = promptNumber("Enter a number: ", bounds);

  if (!hasTargetNumberBeenFound(userAttempt, targetNumber)) {
    guessingAttemptsCounter.addNewAttempt();
    return guessTheNumber(targetNumber, bounds, guessingAttemptsCounter);
  }

  return true;
};

export const hasTargetNumberBeenFound = (userAttempt, targetNumber) => {
  if (userAttempt > targetNumber) {
    console.log(`${userAttempt} is too big.`);
    return false;
  }

  if (userAttempt < targetNumber) {
    console.log(`${userAttempt} is too small.`);
    return false;
  }

  return true;
};
