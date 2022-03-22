import _ from 'lodash';
import * as readline from 'readline';

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


//funcion para editar el array de jugadores (no retorna)
const addPlayers = (players, name) => {
  players.push({name: name, score: 501}); 
  
}

const enterPlayers = (players, n_players, input) => {
  n_players = input;
  for(let i = 1; i <= n_players; i++){
    dialog(1, players, n_players);
  }

}
//funcion para manejar el dialogo
export const dialog = (id, players, n_players) =>{
  //codigo para dialogo por consola 
  // ID = 0 -> pedir numero de jugadores 
  // ID = 1 -> pedir nombre jugadores
  const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  })

  if (id ==0){
    rl.question('Ingresar número de jugadores\n', number => {
      if(number < 2){
        console.log("Deben ser al menos dos jugadores, ¡Hasta la próxima!");
      } else{
        enterPlayers (players, n_players, number);   
      }
      rl.close();
      
    })
  } else if (id == 1){
    //no funciona, voy a investigar como se puede hacer
    //https://stackoverflow.com/questions/24464404/how-to-readline-infinitely-in-node-js
      rl.question('Ingresar nombre jugador:\n', answer =>{
        addPlayers(players, answer);
        console.log('¡Hola ' + answer + '! tu puntaje inicial es 501\n');  
        rl.close();
      })
      
      
    }
    

  

}



