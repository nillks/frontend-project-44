// brain-even.js

import { runGame } from '../src/index.js';

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
