import greeting from '../index.js';

const even = () => {
  const str = 'Answer "yes" if the number is even, otherwise answer "no".';
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 100);
  const z = Math.floor(Math.random() * 100);
  const randomN = [x, y, z];
  const condition = [randomN[0] % 2 === 0, randomN[1] % 2 === 0, randomN[2] % 2 === 0];
  greeting(str, randomN, condition, 'yes', 'no');
};

export default even;
