import _ from "lodash";
import { pointsParser } from "./parsers.js";

const calculatePoints = (userPoints, parsedPoints) =>
  Math.abs(userPoints - parsedPoints);

export const enterPlay = (user, userPoints, userPlays) => {
  let parsedPoints = _.chain(userPlays)
    .map((play) => pointsParser(play))
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    .value();
  return calculatePoints(userPoints, parsedPoints);
};

//funcion para editar el array de jugadores (no retorna)
export const addPlayers = (players_array, name) =>
  players_array.push([name, 501]);

export const iterator = function* (index, n_players) {
  yield (index + 1) % n_players;
};

export const checkWin = (array) => {
  array.forEach((playerData) => {
    let score = playerData[1];
    let winner = playerData[0];
    if (score == 0) return winner;
  });
  return false;
};
