#!/usr/bin/env node
import { runGame, showMessage } from '../src/index.js';

function generateProgression() {
  const length = Math.floor(Math.random() * 6) + 5; // Генерируем длину прогрессии от 5 до 10 чисел
  const start = Math.floor(Math.random() * 50) + 1; // Генерируем начальное число от 1 до 50
  const step = Math.floor(Math.random() * 5) + 2; // Генерируем шаг от 2 до 6

  const progression = [];
  const hiddenIndex = Math.floor(Math.random() * length); // Генерируем позицию для скрытого числа

  for (let i = 0; i < length; i++) {
    if (i === hiddenIndex) {
      progression.push('..'); // Заменяем число двумя точками
    } else {
      progression.push(start + i * step);
    }
  }

  return {
    question: progression.join(' '), // Собираем прогрессию в строку
    correctAnswer: (start + hiddenIndex * step).toString(), // Правильный ответ
  };
}

const playerName = runGame(generateProgression, 'What number is missing in the progression?');

if (playerName) {
  showMessage(`Congratulations, ${playerName}!`);
}
