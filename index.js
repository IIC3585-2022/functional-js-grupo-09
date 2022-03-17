import pointsParser from './src/pointsParser.js';

// Main script

const main = () => {
  let points = pointsParser([3,20]);
  console.log(points);
};

main();
