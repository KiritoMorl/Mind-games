import _ from 'lodash';
import engine from '../index.js';

const rules = 'What number is missing in the progression?';

let numbersArr = [];

const getNumbersArr = (randomN) => {
  const step = _.random(1, 10);
  let number = randomN;
  const arrLength = _.random(5, 10);
  if (numbersArr.length >= 5) {
    numbersArr = [];
  }
  for (let i = 0; i < arrLength; i += 1) {
    number += step;
    numbersArr.push(number);
  }
  return numbersArr;
};

const getNumber = () => {
  const length = numbersArr.length - 1;
  const place = _.random(0, length);
  const number = numbersArr[place];
  numbersArr[place] = '..';
  return number;
};

const generateRound = () => {
  const separator = ' ';
  const randomNumber = _.random(1, 50);
  getNumbersArr(randomNumber);
  const correctAnswer = String(getNumber());
  const question = numbersArr.join(separator);
  return [question, correctAnswer];
};

const runProgressionGame = () => engine(rules, generateRound);

export default runProgressionGame;
