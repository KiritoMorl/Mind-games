import engine from '../index.js';
import getRandomArbitrary from '../utils.js';

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
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateRound = () => {
  const minNumber = 1;
  const maxNumber = 50;
  const randomNumber = getRandomArbitrary(minNumber, maxNumber);
  const correctAnswer = getCorrectAnswer(randomNumber);
  const question = randomNumber;
  return [question, correctAnswer];
};
const runPrimeGame = () => engine(rules, generateRound);

export default runPrimeGame;
