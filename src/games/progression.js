import engine from '../index.js';
import getRandomArbitrary from '../utils.js';

const rules = 'What number is missing in the progression?';
let numbersArr = [];
const getNumbersArr = (randomN) => {
  const step = getRandomArbitrary(1, 10);
  let number = randomN;
  const arrLength = getRandomArbitrary(5, 10);
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
  const place = getRandomArbitrary(0, length);
  const number = numbersArr[place];
  numbersArr[place] = '..';
  return number;
};
const generateRound = () => {
  const minNumber = 1;
  const maxNumber = 50;
  const separator = ' ';
  const randomNumber = getRandomArbitrary(minNumber, maxNumber);
  getNumbersArr(randomNumber);
  const correctAnswer = getNumber();
  const question = numbersArr.join(separator);
  return [question, String(correctAnswer)];
};
const runProgressionGame = () => engine(rules, generateRound);

export default runProgressionGame;
