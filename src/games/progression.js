import random from 'lodash/random.js';
import engine from '../index.js';

const rules = 'What number is missing in the progression?';

const makeProgression = (randomNumber, step, progressionLength) => {
  const progression = [randomNumber];
  let number = randomNumber;
  for (let i = 0; i < progressionLength; i += 1) {
    number += step;
    progression.push(number);
  }
  return progression;
};

const generateRound = () => {
  const step = random(1, 10);
  const progressionLength = random(5, 10);
  const separator = ' ';
  const randomNumber = random(1, 50);
  const progression = makeProgression(randomNumber, step, progressionLength);
  const place = random(0, progression.length - 1);
  const answer = String(progression[place]);
  progression[place] = '..';
  const question = progression.join(separator);
  return [question, answer];
};

const runProgressionGame = () => engine(rules, generateRound);

export default runProgressionGame;
