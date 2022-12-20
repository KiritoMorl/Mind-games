import _ from 'lodash';
import engine from '../index.js';

const rules = 'What number is missing in the progression?';

let progression = [];

const makeProgression = (randomN, step, progressionLength) => {
  let number = randomN;
  if (progression.length >= 5) {
    progression = [];
  }
  for (let i = 0; i < progressionLength; i += 1) {
    number += step;
    progression.push(number);
  }
  return progression;
};

const generateRound = () => {
  const step = _.random(1, 10);
  const progressionLength = _.random(5, 10);
  const separator = ' ';
  const randomNumber = _.random(1, 50);
  makeProgression(randomNumber, step, progressionLength);
  const place = _.random(0, progression.length - 1);
  const answer = String(progression[place]);
  progression[place] = '..';
  const question = progression.join(separator);
  return [question, answer];
};

const runProgressionGame = () => engine(rules, generateRound);

export default runProgressionGame;
