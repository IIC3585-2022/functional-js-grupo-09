import { enterPlay } from './src/calculators.js';

// Main script

const main = () => {
  let data = enterPlay('Mike', 501, [[3,20], 'SB', 'DB']);
  console.log(data);
};

main();
