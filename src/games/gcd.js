import _ from 'lodash';
import engine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const calculationGCD = (firstNumber, secondNumber) => {
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

const generateRound = () => {
  const randomNumber1 = _.random(1, 100);
  const randomNumber2 = _.random(1, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = String(calculationGCD(randomNumber1, randomNumber2));
  return [question, correctAnswer];
};

const runGcdGame = () => engine(rules, generateRound);

export default runGcdGame;
