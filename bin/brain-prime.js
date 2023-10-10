#!/usr/bin/env node
import { runGame } from '../src/index.js';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для проверки числа на простоту
function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}

function generateQuestion() {
  const number = getRandomNumber(2, 100); // Генерируем случайное число от 2 до 100.
  const question = `Question: ${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
}

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
runGame(generateQuestion, gameDescription);
