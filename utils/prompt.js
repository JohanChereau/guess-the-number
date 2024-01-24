import readlineSync from "readline-sync";

const prompt = (question) => {
  const answer = readlineSync.question(question);

  return answer;
};

const isNumberValid = (number, bounds) => {
  return !(
    Number.isNaN(number) ||
    number < bounds.LOWER ||
    number > bounds.UPPER
  );
};

export const promptNumber = (question, bounds) => {
  const answer = Number(prompt(question));

  if (!isNumberValid(answer, bounds)) {
    console.log(
      `Please, enter a number between ${bounds.LOWER} and ${bounds.UPPER}.`
    );
    return promptNumber(question, bounds);
  }

  return answer;
};

export const displayGameRules = (bounds) => {
  console.log(`
  Welcome to the Number Guessing Game !
  
  Rules:
  1. The system will generate a random number between ${bounds.LOWER} and ${bounds.UPPER}.
  2. Your task is to guess this number.
  3. Enter a number when prompted.
  4. If your guess is too high or too low, you'll be notified, and you can guess again.
  5. The game continues until you guess the correct number.
  
  Let's get started!`);
};

export function displayVictoryMessage(targetNumber, guessingAttempts) {
  console.log(`
  Well done! The random number was indeed ${targetNumber}.
  You succeeded in ${guessingAttempts} ${
    guessingAttempts === 1 ? "attempt" : "attempts"
  }.
  `);
}
