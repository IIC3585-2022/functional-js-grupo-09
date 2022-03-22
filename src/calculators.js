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


//funcion para editar el array de jugadores (no retorna)
const addPlayers = (players, n_players, readline) => {
  

  
  
}

//funciones para manejar el dialogo:

//1.funcion para pedir jugadas 


//2.funcion para notificar resultado de las jugadas


//3.funcion para pedir el numero de jugadores y sus nombres
export const enterPlayers = (players, n_players, readline) => {
  readline.question('Ingresar número de jugadores\n', number => {
    if(number < 2){
      console.log("Deben ser al menos dos jugadores, ¡Hasta la próxima!");
    } else{
      n_players = number;
      addPlayers(players, n_players);
    }
    readline.close()
  })

}



