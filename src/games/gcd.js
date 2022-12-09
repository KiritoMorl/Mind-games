import engine from '../index.js';
import getRandomArbitrary from '../utils.js';

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
const rules = 'Find the greatest common divisor of given numbers.';
const generateRound = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const randomNumber1 = getRandomArbitrary(minNumber, maxNumber);
  const randomNumber2 = getRandomArbitrary(minNumber, maxNumber);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getCorrectAnswer(randomNumber1, randomNumber2);
  return [question, String(correctAnswer)];
};
const runGcdGame = () => engine(rules, generateRound);

export default runGcdGame;
