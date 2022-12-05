import readlineSync from 'readline-sync';

export function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
export const engine = (task, rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = rules() ;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
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
