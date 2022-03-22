//main juego 
import * as readline from 'readline';
import {
  enterPlayers
  } from './calculators.js';

function main (){
    console.log("¡Bienvenidxs!");

    //codigo para dialogo por consola 
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    let players = []; // [{name: , score: 501},{},...]
    let n_players = 0; //numero de jugadores

    //preguntar por el numero de jugadores e iterar para preguntar los nombres 
    enterPlayers(players, n_players, rl);
    
    //comenzar juego 


}

//ejecución juego
main()