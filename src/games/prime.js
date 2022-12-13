import _ from 'lodash';
import engine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getCorrectAnswer = (randomN) => {
  let correctAnswer = '';
  for (let i = 2; i <= randomN; i += 1) {
    if (randomN % i === 0 && i < randomN) {
      correctAnswer = 'no';
      return correctAnswer;
    }
    correctAnswer = 'yes';
  }
  return correctAnswer;
};

const generateRound = () => {
  const randomNumber = _.random(1, 50);
  const correctAnswer = getCorrectAnswer(randomNumber);
  const question = randomNumber;
  return [question, correctAnswer];
};

const runPrimeGame = () => engine(rules, generateRound);

export default runPrimeGame;
