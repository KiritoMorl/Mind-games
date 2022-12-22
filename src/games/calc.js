import random from 'lodash/random.js';
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
  const num1 = random(0, 10);
  const num2 = random(0, 10);
  const signs = ['+', '-', '*'];
  const randomSign = signs[random(0, signs.length - 1)];
  const question = `${num1} ${randomSign} ${num2}`;
  const answer = String(calculation(num1, randomSign, num2));
  return [question, answer];
};

const runCalcGame = () => {
  engine(rules, generateRound);
};

export default runCalcGame;
