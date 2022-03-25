import readline from "readline";
import { addPlayers, iterator, checkWin, iterator2} from "./calculators.js";


const Game =  (players_array) => {
  //usar iterators
  let i = iterator2(0, players_array.length);
  let winner = false;
  while (!winner) {
    let playerId = i.next().value;
    let playerData = players_array[playerId];
    console.log(`Es el turno de ${playerData[0]}`);
     
    //ver tema de los dialogos (pedir jugada)
     winner = checkWin(players_array);
   
  }
  console.log(`El juego ha terminado el ganador es: ${winner}`);
};

const enterPlayers = async (players_array, n_players) => {
  if (n_players === 0) {
    // Here is stored the last players_array state
    //console.log(players_array);
    console.log("¡Que comienze el juego!");
    return Game(players_array);
  }

  await beginDialog(1, players_array, n_players);
};

const checkTwoOrMorePlayers = (players_number) =>
  players_number >= 2 ? true : false;

//function to begin the dialog
export const beginDialog = async (id, players_array, n_players) => {
  //codigo para dialogo por consola
  // ID = 0 -> pedir numero de jugadores
  // ID = 1 -> pedir nombre jugadores
  // ID = 2 -> pedir jugadas
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  if (id === 0) {
    rl.question("Ingresa el número de jugadores:\n", (number) => {
      if (!checkTwoOrMorePlayers(number)) {
        console.log("Deben ser al menos dos jugadores, ¡Hasta la próxima!");
        return rl.close();
      }
      rl.close();
      enterPlayers(players_array, parseInt(number));
    });
  }

  if (id === 1) {
    rl.question("Ingresar nombre jugador:\n", (player_name) => {
      addPlayers(players_array, player_name);
      console.log("¡Hola " + player_name + "! tu puntaje inicial es 501\n");
      rl.close();
      enterPlayers(players_array, n_players - 1);
    });
  }
  if(id==2){
    rl.question("Ingresar jugada:\n", (jugada) => {

     
      rl.close();
     
    });


  }
};
