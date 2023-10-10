// brain-even.js

import { runGame, showMessage } from '../src/index.js';

function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1) + 1);
}

function generateQuestion() {
  const randomNumber = getRandomNumber();
  return { question: `${randomNumber}`, correctAnswer: randomNumber % 2 === 0 ? 'yes' : 'no' };
}

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const playerName = runGame(generateQuestion, 3, gameDescription);

if (playerName) {
  showMessage(`Congratulations, ${playerName}!`);
}
