// brain-gcd.js

import { runGame, showMessage } from '../src/index.js';

function findGCD(a, b) {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
}

function generateQuestion() {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const question = `${num1} ${num2}`;
  const correctAnswer = findGCD(num1, num2);

  showMessage('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${question}`);

  return { question, correctAnswer: correctAnswer.toString() };
}

const playerName = runGame(generateQuestion);

if (playerName) {
  showMessage(`Congratulations, ${playerName}!`);
}
