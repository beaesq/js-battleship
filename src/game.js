import createShip from "./ship";
import createPlayer from "./player";
import createGameboard from "./gameboard";
import { setupDisplay, updateSquare, getSquare } from "./display";

function startGame() {
  // get player name
  const playerName = 'Yves';

  const playerGameboard = createGameboard();
  const computerGameboard = createGameboard();
  
  playerGameboard.place(createShip, 5, [0, 0], true);
  playerGameboard.place(createShip, 3, [7, 5], false);
  computerGameboard.place(createShip, 2, [3, 4], false);
  computerGameboard.place(createShip, 3, [6, 3], true);

  const player = createPlayer(playerGameboard, playerName);
  const computer = createPlayer(computerGameboard);
  setupDisplay(playerGameboard, computerGameboard);

  return { player, computer }
}

function endGame(name) {
  console.log(`${name} wins!`);
}

function computerTurn(event, player, computer, divBoard, playerTurn) {
  console.log("computer's turn!");
  const computerMove = computer.makeMove();
  const isHit = player.gameboard.receiveAttack(computerMove);
  updateSquare(isHit, getSquare(computerMove, false));
  if (player.gameboard.areAllShipsSunk()) {
    endGame(computer.name);
  } else {
    setTimeout(() => { divBoard.addEventListener('click', playerTurn) }, 1000);
  }
}

function setupLoop({ player, computer }) {
  const divBoard = document.getElementById("board-computer");
  
  const playerTurn = (event) => {
    console.log(`${player.name}'s turn!`);
    const str = event.target.getAttribute("coordinates");
    const coordinates = str.split("-").map(Number);
    const isHit = computer.gameboard.receiveAttack(coordinates);
    updateSquare(isHit, event.target);

    divBoard.removeEventListener('click', playerTurn);
    if (computer.gameboard.areAllShipsSunk()) {
      endGame(player.name);
    } else {
      setTimeout(() => { computerTurn(event, player, computer, divBoard, playerTurn) }, 1000);
    }
  }

  divBoard.addEventListener('click', playerTurn);
}

export { startGame, setupLoop };