import { beginDialog } from './src/initGame.js';

// Main script

const main = async () => {
  console.log("¡Bienvenidxs!");
  let players = []; // [[name: , score], [],...] <- Functional Programming
  let n_players = 0; // number of players

  //preguntar por el numero de jugadores e iterar para preguntar los nombres 
  beginDialog(0, players, n_players);
};

main();
