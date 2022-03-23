import {
  beginDialog
} from 'initGame.js';

function main (){
  console.log("¡Bienvenidxs!");
  let players = []; // [[name: , score], [],...] <- Functional Programming
  let n_players = 0; // number of players

  //preguntar por el numero de jugadores e iterar para preguntar los nombres 
  beginDialog(0, players, n_players);
  
  //comenzar juego 

}

//ejecución juego
main()