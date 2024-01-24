import { displayGameRules, displayVictoryMessage } from "./utils/prompt.js";
import { generateRandomIntegerBetween } from "./utils/random.js";
import { createAttemptsCounter } from "./utils/counter.js";
import { guessTheNumber } from "./game.js";

const bounds = {
  LOWER: 0,
  UPPER: 100,
};

const targetNumber = generateRandomIntegerBetween(bounds.LOWER, bounds.UPPER);
const guessingAttemptsCounter = createAttemptsCounter();

const startGame = (bounds) => {
  displayGameRules(bounds);
  guessTheNumber(targetNumber, bounds, guessingAttemptsCounter);
  displayVictoryMessage(
    targetNumber,
    guessingAttemptsCounter.getGuessingAttempts()
  );
};

startGame(bounds);
