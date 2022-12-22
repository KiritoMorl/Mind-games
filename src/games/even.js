import random from 'lodash/random.js';
import engine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const randomNumber = random(1, 100);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

const runEvenGame = () => engine(rules, generateRound);

export default runEvenGame;
