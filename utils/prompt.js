import readlineSync from "readline-sync";

const prompt = (question) => {
  const answer = readlineSync.question(question);

  return answer;
};

export const isPromptAnswerValid = (promptAnswer, checkValidity) => {
  return checkValidity(promptAnswer);
};

//Ask a number
const isNumberValid = (number, bounds) => {
  return !(
    Number.isNaN(number) ||
    number < bounds.LOWER ||
    number > bounds.UPPER
  );
};

export const promptNumber = (question, bounds) => {
  const answer = Number(prompt(question));

  if (
    !isPromptAnswerValid(answer, () => {
      return isNumberValid(answer, bounds);
    })
  ) {
    console.log(
      `Please, enter a number between ${bounds.LOWER} and ${bounds.UPPER}.`
    );
    return promptNumber(question, bounds);
  }

  return answer;
};

//Play again
const isPlayAgainPromptValid = (prompt) => {
  return prompt.toLowerCase() === "y" || prompt.toLowerCase() === "n";
};

export const askToPlayAgain = () => {
  const answer = prompt("Do you want to play again? (Y/N):");

  if (!isPromptAnswerValid(answer, isPlayAgainPromptValid)) {
    return askToPlayAgain();
  }

  if (answer.toLowerCase() !== "y") {
    console.log(`Thank you for playing! Goodbye.`);
    return false;
  }

  return true;
};

//Game rules
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

//Victory
export function displayVictoryMessage(targetNumber, guessingAttempts) {
  console.log(`
Well done! The random number was indeed ${targetNumber}.
You succeeded in ${guessingAttempts} ${
    guessingAttempts === 1 ? "attempt" : "attempts"
  }.
  `);
}
