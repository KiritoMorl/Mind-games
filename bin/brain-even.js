#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let correctAnswer = '';
for (let i = 1; i < 4; i += 1) {
  const randomNumber = Math.floor(Math.random() * 50);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  if (correctAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
  if (i === 3 && userAnswer === correctAnswer) {
    console.log(`Congratulations, ${userName}!`);
  }
}
