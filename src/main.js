//main juego 
import * as readline from 'readline';
import {
  enterPlayers
  } from './calculators.js';

function main (){
    console.log("¡Bienvenidxs!");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    let players = [];
    let n_players = 0;
    //preguntar por el numero de jugadores e iterar para preguntar los nombres 
    enterPlayers(players, n_players, rl);
    //guardar en el array players = [{name: , score: 501},{},...]
    //comenzar juego 


}

//ejecución juego
main()