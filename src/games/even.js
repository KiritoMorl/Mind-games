import _ from 'lodash';
import engine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswer = (randomNum) => {
  if (randomNum % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generateRound = () => {
  const randomNumber = _.random(1, 100);
  const CorrectAnswer = getCorrectAnswer(randomNumber);
  return [randomNumber, CorrectAnswer];
};

const runEvenGame = () => engine(rules, generateRound);

export default runEvenGame;
