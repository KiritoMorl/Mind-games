import engine from '../index.js';
import getRandomArbitrary from '../utils.js';

const getCorrectAnswer = (numberOne, sign, numberTwo) => {
  if (sign === '+') {
    return numberOne + numberTwo;
  }
  if (sign === '-') {
    return numberOne - numberTwo;
  }
  return numberOne * numberTwo;
};
const rules = 'What is the result of the expression?';
const generateRound = () => {
  const minNumber = 1;
  const maxNumber = 25;
  const nm1 = getRandomArbitrary(minNumber, maxNumber);
  const nm2 = getRandomArbitrary(minNumber, maxNumber);
  const signArr = ['+', '-', '*'];
  const minSignIndex = 0;
  const maxSignIndex = signArr.length;
  const randomSign = signArr[getRandomArbitrary(minSignIndex, maxSignIndex)];
  const question = [`${nm1} ${randomSign} ${nm2}`];
  const correctAnswer = getCorrectAnswer(nm1, randomSign, nm2);
  return [question, String(correctAnswer)];
};
const runCalcGame = () => {
  engine(rules, generateRound);
};

export default runCalcGame;
