import createShip from "./ship";
import createPlayer from "./player";
import createGameboard from "./gameboard";
import { setupDisplay, updateSquare, getSquare, getShipInfo, displayPlayerShips } from "./display";

function getShipLength(index) {
  switch (index) {
    case 0:
      return 5;
    case 1:
      return 4;
    case 2:
      return 3;
    case 3:
    case 4:
      return 2;
    case 5:
    case 6:
      return 1;
    default:
      return 2;
  }
}

function placePlayerShips(player) {
  for (let index = 0; index < 1; index += 1) {
    const length = getShipLength(index);
    const { coordinates, isVertical } = getShipInfo(length);
    player.gameboard.place(createShip, length, coordinates, isVertical);
    console.log(player);
  }
}

function placeComputerShips(computer) {
  
}

function startGame() {
  const playerGameboard = createGameboard();
  const computerGameboard = createGameboard();
  
  // get player name
  const playerName = 'Yves';
  
  const player = createPlayer(playerGameboard, playerName);
  const computer = createPlayer(computerGameboard);
  setupDisplay(playerGameboard, computerGameboard);
  // get board setup
  placePlayerShips(player);
  // placeComputerShips(computer);
  
  displayPlayerShips(playerGameboard.ships);
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

function startGameLoop({ player, computer }) {
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

export { startGame, startGameLoop };