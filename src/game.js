import createShip from "./ship";
import createPlayer from "./player";
import createGameboard from "./gameboard";
import { displayBoards, updateSquare, getSquare, displayPlayerShips, displaySetupInfo, displayTurnInfo } from "./display";
import { includesArray } from "./includesArray";

function playerTurn(event, player, computer, divBoard, clickHandler) {
  const str = event.target.getAttribute("coordinates");
  const coordinates = str.split("-").map(Number);
  const isHit = computer.gameboard.receiveAttack(coordinates);
  updateSquare(isHit, event.target);

  removeClickHandler(clickHandler);
  if (computer.gameboard.areAllShipsSunk()) {
    endGame(player.name);
  } else {
    displayTurnInfo(computer.name);
    setTimeout(() => { computerTurn(event, player, computer, divBoard) }, 1000);
  }
}

function removeClickHandler(clickHandler, size = 10) {
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      const square = getSquare([i, j], true);
      square.removeEventListener("click", clickHandler);
    }
  }
}

function addClickHandler(computer, divBoard, clickHandler, size = 10) {
  const markedSquares = computer.gameboard.marked;
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      if (!includesArray(markedSquares, [i, j])) {
        const square = getSquare([i, j], true);
        square.addEventListener("click", clickHandler);
      }
    }
  }
}

function startTurn({ player, computer }) {
  displayTurnInfo(player.name);
  const divBoard = document.getElementById("board-computer");

  const clickHandler = (event) => {
    playerTurn(event, player, computer, divBoard, clickHandler);
  }

  addClickHandler(computer, divBoard, clickHandler);
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

  const placeShip = (event) => {
    divBoard.removeEventListener("mouseout", clearShip);
    divBoard.removeEventListener("mouseover", displayShip);
    divBoard.removeEventListener("click", placeShip);

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
    const result = player.gameboard.place(createShip, length, [x, y], isVertical);
    displayPlayerShips(player.gameboard.ships);
    if (result) {
      setupLoop(player, computer, index + 1);
    } else {
      setupLoop(player, computer, index);
    }
  }

  // continue/exit setup
  if (index < 7) {
    // setup area text & ship rotation
    displaySetupInfo(index);
    const rotateShip = (event) => {
      isVertical = !isVertical;
      divBoard.removeEventListener("mouseout", clearShip);
      divBoard.removeEventListener("mouseover", displayShip);
      divBoard.removeEventListener("click", placeShip);
      divBoard.addEventListener("mouseover", displayShip);
      divBoard.addEventListener("mouseout", clearShip);
      divBoard.addEventListener("click", placeShip);
    }
    const setupArea = document.getElementById("setup-area");
    const btn = setupArea.querySelector("button");
    btn.addEventListener("click", rotateShip);

    // board event listeners
    divBoard.addEventListener("mouseover", displayShip);
    divBoard.addEventListener("mouseout", clearShip);
    divBoard.addEventListener("click", placeShip);
  } else {
    divBoard.removeEventListener("mouseout", clearShip);
    divBoard.removeEventListener("mouseover", displayShip);
    divBoard.removeEventListener("click", placeShip);

    startTurn({ player, computer });
  }
}

function placeComputerShips(computer, size = 10) {
  for (let index = 0; index < 7; index += 1) {
    let result = null;
    do {
      const coordinates = [Math.floor(Math.random() * size), Math.floor(Math.random() * size)]
      const isVertical = (Math.random() > 0.5);
      result = computer.gameboard.place(createShip, getShipLength(index), coordinates, isVertical);
    } while (!result);
  }
}

function setupPlayer() {
  displaySetupInfo();
  const setupArea = document.getElementById("setup-area");
  const nameForm = setupArea.querySelector("form");

  nameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameForm.elements["player-name"].value;
    const playerGameboard = createGameboard();
    const player = createPlayer(playerGameboard, name);

    const computerGameboard = createGameboard();
    const computer = createPlayer(computerGameboard);
    placeComputerShips(computer);

    setupLoop(player, computer, 0);
  });
}

function startGame() {
  displayBoards();
  setupPlayer()
}

function endGame(name) {
  console.log(`${name} wins!`);
}

function computerTurn(event, player, computer, divBoard) {
  const computerMove = computer.makeMove();
  const isHit = player.gameboard.receiveAttack(computerMove);
  updateSquare(isHit, getSquare(computerMove, false));
  if (player.gameboard.areAllShipsSunk()) {
    endGame(computer.name);
  } else {
    setTimeout(() => { startTurn({ player, computer }) }, 1000);
  }
}

export { startGame, startTurn };