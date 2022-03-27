import readline from "readline";
import { playParser } from "./parsers.js";
import {
  calculateNewPlayersPoints,
  checkWin,
  iterator2
} from './calculators.js';

const isWinner = (winner) => {
  console.log(`El juego ha terminado el ganador es: ${winner}`);
};

const checkWinner = (players_array) => {
  // checks for the new state of the game
  let winner = checkWin(
    players_array
  );

  if (winner !== false){
    isWinner(winner);
    return true;
  };
  return false;
};

const showGameLogs = (players_array) => {
  console.log('\nPuntajes actuales:');
  for (let i = 0; i < players_array.length; i++){
    console.log(`Jugador ${players_array[i][0]}: ${players_array[i][1]} puntos`);
  }
  console.log('\n');
}

const getPlay = (players_array, iterator, plays) => {
  let playerId = iterator.next().value;
  let playerData = players_array[playerId];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(`Ingresa tu siguiente tiro, ${playerData[0]}:\n`, (play) => {
    rl.close();

    const updated_players_array = calculateNewPlayersPoints(
      players_array,
      playerId,
      playParser(play)
    );

    if (plays + 1 === 3){
      showGameLogs(updated_players_array);

      if (checkWinner(updated_players_array)){
        return true;
      }

      return game(
        updated_players_array,
        iterator2(playerId + 1, updated_players_array.length)
      );
    }
    
    return getPlay(
      updated_players_array,
      iterator2(playerId, updated_players_array.length),
      plays + 1
    );
  });
};

export const game = (players_array, iterator, code) => {
  //usar iterators
  let playerId = iterator.next().value;
  let playerData = players_array[playerId];

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(`Ingresa tu primer tiro, ${playerData[0]}:\n`, (play) => {
    rl.close();

    const updated_players_array = calculateNewPlayersPoints(players_array, playerId, playParser(play));

    return getPlay(
      updated_players_array,
      iterator2(playerId, updated_players_array.length),
      1
    );
  });
};
