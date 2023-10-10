// brain-even.js

import { runGame, showMessage } from '../src/index.js';

showMessage('Answer "yes" if the number is even, otherwise answer "no".');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
  const randomNumber = getRandomNumber(1, 100);
  const isEven = randomNumber % 2 === 0;
  const question = `${randomNumber}`;
  const correctAnswer = isEven ? 'yes' : 'no';

  return { question, correctAnswer };
}

runGame(generateQuestion);
