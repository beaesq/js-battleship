import createShip from "./ship";
import createPlayer from "./player";
import createGameboard from "./gameboard";
import { setupDisplay, updateSquare, getSquare, displayPlayerShips, displaySetupInfo } from "./display";


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
  const length = getShipLength(index);
  const divBoard = document.getElementById("board-player");
  let isVertical = true;

  // ship placement
  const displayShip = (event) => {
    const str = event.target.getAttribute("coordinates");
    const [x, y] = str.split("-").map(Number);
    const shipEnd = isVertical ? y + length : x + length;
    if (shipEnd <= size) {
      for (let i = 0; i < length; i += 1) {
        const coordinates = isVertical ? [x, y + i] : [x + i, y];
        const square = getSquare(coordinates, false);
        square.style.backgroundColor = "purple";
      }
    }
  }

  const clearShip = (event) => {
    const str = event.target.getAttribute("coordinates");
    const [x, y] = str.split("-").map(Number);
    const shipEnd = isVertical ? y + length : x + length;
    if (shipEnd <= size) {
      for (let i = 0; i < length; i += 1) {
        const coordinates = isVertical ? [x, y + i] : [x + i, y];
        const square = getSquare(coordinates, false);
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
    const shipEnd = isVertical ? y + length : x + length;
    if (shipEnd <= size) {
      for (let i = 0; i < length; i += 1) {
        const coordinates = isVertical ? [x, y + i] : [x + i, y];
        const square = getSquare(coordinates, false);
        square.style = null;
      }
    }
    player.gameboard.place(createShip, length, [x, y], isVertical);
    displayPlayerShips(player.gameboard.ships);

    setupLoop(player, computer, index + 1);
  }

  // setup area text & ship rotation
  displaySetupInfo(index);

  const rotateShip = (event) => {
    isVertical = !isVertical;
    divBoard.removeEventListener("mouseout", clearShip);
    divBoard.removeEventListener("mouseover", displayShip);
    divBoard.removeEventListener("click", placePlayerShip);
    divBoard.addEventListener("mouseover", displayShip);
    divBoard.addEventListener("mouseout", clearShip);
    divBoard.addEventListener("click", placePlayerShip);
  }

  const setupArea = document.getElementById("setup-area");
  const btn = setupArea.querySelector("button");
  btn.addEventListener("click", rotateShip);

  // continue/exit setup
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