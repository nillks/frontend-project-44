import readlineSync from 'readline-sync';

function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1) + 1);
}

function showMessage(message) {
  console.log(message);
}

function getQuestion() {
  const randomNumber = getRandomNumber();
  console.log(`Question: ${randomNumber}`);
  return randomNumber;
}

function getAnswer() {
  const answer = readlineSync.question('Answer: ');
  return answer;
}

function startGame() {
  showMessage('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  showMessage(`Hello, ${playerName}!`);
  showMessage('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const question = getQuestion();
    const userAnswer = getAnswer();
    const isEven = question % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      showMessage('Correct!');
      correctAnswersCount += 1;
    } else {
      showMessage(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      showMessage(`Let's try again, ${playerName}!`);
      return;
    }
  }

  showMessage(`Congratulations, ${playerName}!`);
}

startGame();
