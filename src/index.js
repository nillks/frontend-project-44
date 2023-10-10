// src/index.js

import readlineSync from 'readline-sync';

// Общая функция для запуска игр
export function runGame(gameLogic, maxRounds = 3) {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  let correctAnswersCount = 0;

  while (correctAnswersCount < maxRounds) {
    const { question, correctAnswer } = gameLogic();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer === correctAnswer.toString()) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
}
