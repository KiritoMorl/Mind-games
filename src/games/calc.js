import _ from 'lodash';
import engine from '../index.js';

const rules = 'What is the result of the expression?';

const calculation = (numberOne, sign, numberTwo) => {
  if (sign === '+') {
    return numberOne + numberTwo;
  }
  if (sign === '-') {
    return numberOne - numberTwo;
  }
  if (sign === '*') {
    return numberOne * numberTwo;
  }
  throw new Error(`Operator ${sign} - doesn't support`);
};

const generateRound = () => {
  const num1 = _.random(0, 10);
  const num2 = _.random(0, 10);
  const signArr = ['+', '-', '*'];
  const minSignIndex = 0;
  const maxSignIndex = signArr.length - 1;
  const randomSign = signArr[_.random(minSignIndex, maxSignIndex)];
  const question = `${num1} ${randomSign} ${num2}`;
  const correctAnswer = String(calculation(num1, randomSign, num2));
  return [question, correctAnswer];
};

const runCalcGame = () => {
  engine(rules, generateRound);
};

export default runCalcGame;
