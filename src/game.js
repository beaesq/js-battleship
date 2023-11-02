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

function endGame() {
  console.log('game over');
}

function isGameWon() {
  return true;
}

function computerTurn(event, player, computer, divBoard, startTurn) {
  console.log("computer's turn!");
  const computerMove = computer.makeMove();
  const isHit = player.gameboard.receiveAttack(computerMove);
  updateSquare(isHit, getSquare(computerMove, false));
  if (isGameWon()) {
    endGame();
  } else {
    setTimeout(() => { divBoard.addEventListener('click', startTurn) }, 1000);
  }
}

function setupLoop({ player, computer }) {
  const divBoard = document.getElementById("board-computer");
  
  const startTurn = (event) => {
    console.log(`${player.name}'s turn!`);
    const str = event.target.getAttribute("coordinates");
    const coordinates = str.split("-").map(Number);
    const isHit = computer.gameboard.receiveAttack(coordinates);
    updateSquare(isHit, event.target);

    divBoard.removeEventListener('click', startTurn);
    if (isGameWon()) {
      endGame();
    } else {
      setTimeout(() => { computerTurn(event, player, computer, divBoard, startTurn) }, 1000);
    }
  }

  divBoard.addEventListener('click', startTurn);
}

export { startGame, setupLoop };