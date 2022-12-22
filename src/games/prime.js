import random from 'lodash/random.js';
import engine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomN) => {
  for (let i = 2; i <= randomN / 2; i += 1) {
    if (randomN % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNumber = random(1, 50);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = randomNumber;
  return [question, answer];
};

const runPrimeGame = () => engine(rules, generateRound);

export default runPrimeGame;
