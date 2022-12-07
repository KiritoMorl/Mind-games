import { engine, getRandomArbitrary } from '../index.js';

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
const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const rules = () => {
  const minNumber = 1;
  const maxNumber = 50;
  const randomNumber = getRandomArbitrary(minNumber, maxNumber);
  const correctAnswer = getCorrectAnswer(randomNumber);
  const question = randomNumber;
  return [question, correctAnswer];
};
const prime = () => engine(task, rules);

export default prime;
