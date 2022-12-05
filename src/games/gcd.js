import { engine, getRandomArbitrary } from '../index.js';

const getCorrectAnswer = (firstNumber, secondNumber) => {
  const dividersArr = [];
  for (let i = 1; i <= firstNumber; i += 1) {
    if (i > secondNumber) {
      break;
    }
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      dividersArr.push(i);
    }
  }
  const maxDivider = dividersArr.length - 1;
  return dividersArr[maxDivider];
};
const task = 'Find the greatest common divisor of given numbers.';
const rules = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const randomNumber1 = getRandomArbitrary(minNumber, maxNumber);
  const randomNumber2 = getRandomArbitrary(minNumber, maxNumber);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getCorrectAnswer(randomNumber1, randomNumber2);
  return [question, String(correctAnswer)];
};
const gcd = () => engine(task, rules);

export default gcd;
