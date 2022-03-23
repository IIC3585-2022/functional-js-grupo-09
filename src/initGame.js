import readline from 'readline';
import {
  addPlayers
} from './calculators.js';

const enterPlayers = async (players_array, n_players) => {
  if (n_players === 0){
    // Here is stored the last players_array state
    console.log(players_array);
    return;
  }

  await beginDialog(1, players_array, n_players);
};

const checkTwoOrMorePlayers = players_number => players_number >= 2 ? true : false;

//function to begin the dialog
export const beginDialog = async (id, players_array, n_players) => {
  //codigo para dialogo por consola 
  // ID = 0 -> pedir numero de jugadores 
  // ID = 1 -> pedir nombre jugadores
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  if (id === 0) {
    rl.question('Ingresa el número de jugadores:\n', number => {
      if (!checkTwoOrMorePlayers(number)){
        console.log("Deben ser al menos dos jugadores, ¡Hasta la próxima!");
        return rl.close();
      };
      rl.close();
      enterPlayers(players_array, parseInt(number));
    });
  };

  if (id === 1){
    rl.question('Ingresar nombre jugador:\n', player_name => {
      addPlayers(players_array, player_name);
      console.log('¡Hola ' + player_name + '! tu puntaje inicial es 501\n');
      rl.close();
      enterPlayers(players_array, n_players - 1);
    });
  };
};