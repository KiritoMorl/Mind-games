import engine from '../index.js';
import getRandomArbitrary from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const getCorrectAnswer = (randomNum) => {
  if (randomNum % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const generateRound = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const randomNumber = getRandomArbitrary(minNumber, maxNumber);
  const CorrectAnswer = getCorrectAnswer(randomNumber);
  return [randomNumber, CorrectAnswer];
};
const runEvenGame = () => engine(rules, generateRound);

export default runEvenGame;
