import readlineSync from 'readline-sync';

const greeting = (str, question, condition, correctAnswer1, correctAnswer2) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(str);
  let correctAnswer = '';
  for (let i = 0; i < 3; i += 1) {
    const random = question[i];
    console.log(`Question: ${random}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (condition[i]) {
      correctAnswer = correctAnswer1;
    } else {
      correctAnswer = correctAnswer2;
    }
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === 2 && userAnswer === correctAnswer) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default greeting;
