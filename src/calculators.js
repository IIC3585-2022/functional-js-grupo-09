import _ from 'lodash';

import {
  pointsParser
} from './parsers.js';

const calculatePoints = (userPoints, parsedPoints) => Math.abs(userPoints - parsedPoints);

export const enterPlay = (user, userPoints, userPlays) => {
  let parsedPoints = _.chain(userPlays)
    .map(play => pointsParser(play))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    )
    .value()
  return calculatePoints(userPoints, parsedPoints);
};
