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



//funciones para manejar el dialogo:
//1.funcion para pedir jugadas 
//2.funcion para notificar resultado de las jugadas
//3.funcion para pedir el numero de jugadores y sus nombres
