import _ from 'lodash';
import engine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (num, num2) => { if (num === 0) { return num2; } return getGcd(num2 % num, num); };

const generateRound = () => {
  const randomNumber1 = _.random(1, 100);
  const randomNumber2 = _.random(1, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = String(getGcd(randomNumber1, randomNumber2));
  return [question, answer];
};

const runGcdGame = () => engine(rules, generateRound);

export default runGcdGame;
