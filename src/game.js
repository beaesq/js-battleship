import createShip from "./ship";
import createPlayer from "./player";
import createGameboard from "./gameboard";
import { setupDisplay, updateSquare, getSquare, displayPlayerShips } from "./display";

let length = 0; // why does it only work when it's outside ???????

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

function setupLoop(player, computer, index, size = 10) {
  length = getShipLength(index);
  const divBoard = document.getElementById("board-player");

  const displayShip = (event) => {
    const str = event.target.getAttribute("coordinates");
    const [x, y] = str.split("-").map(Number);
    if (y + length <= size) {
      for (let i = 0; i < length; i += 1) {
        const square = getSquare([x, y + i], false);
        square.style.backgroundColor = "purple";
      }
    }
  }

  const clearShip = (event) => {
    const str = event.target.getAttribute("coordinates");
    const [x, y] = str.split("-").map(Number);
    if (y + length <= size) {
      for (let i = 0; i < length; i += 1) {
        const square = getSquare([x, y + i], false);
        square.style = null;
      }
    }
  }

  const placePlayerShip = (event) => {
    divBoard.removeEventListener("mouseout", clearShip);
    divBoard.removeEventListener("mouseover", displayShip);
    divBoard.removeEventListener("click", placePlayerShip);

    const str = event.target.getAttribute("coordinates");
    const [x, y] = str.split("-").map(Number);
    if (y + length <= size) {
      for (let i = 0; i < length; i += 1) {
        const square = getSquare([x, y + i], false);
        square.style = null;
      }
    }
    player.gameboard.place(createShip, length, [x, y], true);
    displayPlayerShips(player.gameboard.ships);

    setupLoop(player, computer, index + 1);
  }

  if (index < 7) {
    divBoard.addEventListener("mouseover", displayShip);
    divBoard.addEventListener("mouseout", clearShip);
    divBoard.addEventListener("click", placePlayerShip);
  } else {
    divBoard.removeEventListener("mouseout", clearShip);
    divBoard.removeEventListener("mouseover", displayShip);
    divBoard.removeEventListener("click", placePlayerShip);

    startGameLoop({ player, computer });
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
  // placeComputerShips(computer);
  setupLoop(player, computer, 0);
  
  // displayPlayerShips(playerGameboard.ships);
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

export { startGame, startGameLoop };