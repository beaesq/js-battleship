function makeBoardDiv(isComputer, size = 10) {
  const divBoard = document.createElement("div");
  divBoard.classList.add("board");
  const user = isComputer ? "computer" : "player";
  divBoard.setAttribute("id", `board-${  user}`);

  for (let i = 0; i < size; i += 1) {
    const divRow = document.createElement("div");
    divRow.classList.add("board-row");

    for (let j = 0; j < size; j += 1) {
      const div = document.createElement ("div");
      div.setAttribute("coordinates", `${j}-${i}`);
      div.classList.add(user);
      div.classList.add("board-square");
      divRow.appendChild(div);
    }
    divBoard.appendChild(divRow);
  }
  
  return divBoard;
}

function getSquare([a, b], isComputer = true, playerBoardID = "board-player", computerBoardID = "board-computer") {
  const boardID = isComputer ? computerBoardID : playerBoardID;
  const divBoard = document.getElementById(boardID);
  return divBoard.querySelector(`[coordinates="${b}-${a}"]`);
}

function displayPlayerShips(ships, playerBoardID = "board-player") {
  for (let index = 0; index < ships.length; index += 1) {
    const currentShip = ships[index];
    const [currentShipX, currentShipY] = currentShip.coordinates;
    for (let j = 0; j < currentShip.ship.length; j += 1) {
      const [a, b] = currentShip.isVertical ? [currentShipX, currentShipY + j] : [currentShipX + j, currentShipY];
      const square = getSquare([a, b], false, playerBoardID);
      square.classList.add('ship');
    }
  }
}

function setupDisplay(playerGameboard, computerGameboard) {
  const container = document.body;  // change this
  container.appendChild(makeBoardDiv(false));
  container.appendChild(makeBoardDiv(true));
  displayPlayerShips(playerGameboard.ships);
  
}

function updateSquare(isHit, target) {
  if (isHit) {
    target.classList.add('hit');
  } else {
    target.classList.add('miss');
  }
}

export { setupDisplay, updateSquare, getSquare };