import { engine, getRandomArbitrary } from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const getCorrectAnswer = (randomNum) => {
  if (randomNum % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const rules = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const randomNumber = getRandomArbitrary(minNumber, maxNumber);
  const CorrectAnswer = getCorrectAnswer(randomNumber);
  return [randomNumber, CorrectAnswer];
};
const even = () => engine(task, rules);

export default even;
