// brain-calc.js

import { runGame } from '../src/index.js';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
  // Выводим сообщение о вопросе перед генерацией вопроса
  console.log('What is the result of the expression?');

  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];

  const expression = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const result = eval(expression);

  return { question: expression, correctAnswer: result };
}

runGame(generateQuestion);
