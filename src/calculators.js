import _ from "lodash";
import { pointsParser } from "./parsers.js";

const calculatePoints = (userPoints, parsedPoints) =>
  Math.abs(userPoints - parsedPoints);

export const enterPlay = (userPoints, userPlays) => {
  let parsedPoints = _.chain(userPlays)
    .map((play) => pointsParser(play))
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    .value();
  return calculatePoints(userPoints, parsedPoints);
};

//funcion para editar el array de jugadores (no retorna)
export const addPlayers = (players_array, name) =>
  players_array.push([name, 501]);

export const calculateNewPlayersPoints = (players_array, index, play) => {
  let newPlayersArray = _.map(players_array, (player_data, i) => {
    if (i === index){
      return [
        player_data[0],
        enterPlay(player_data[1], [play])
      ]
    };
    return player_data
  });
  return newPlayersArray;
};

export const iterator = (array) => {
  //https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Iterators_and_Generators
  let index = 0;
  return {
    next: function () {
      return index < array.length
        ? { value: array[index++], done: false }
        : { value: -1 };
    },
  };
};

export const checkWin = (array) => {
  let winnerData = _.filter(array, (data) => data[1] === 0); // puede usarse _.some también
  return winnerData.length > 0 ? winnerData[0][0] : false;
};


export function* iterator2(i, n_players){
  while(true){
    yield ((i++)%n_players);
  }
}