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

function makeSetupArea() {
  const container = document.createElement("div");
  container.classList.add("setup-area");
  return container;
}

function makeShipDisplay(length) {
  const shipContainer = document.createElement("div");
  shipContainer.classList.add("ship");
  shipContainer.classList.add("isVertical");
  for (let index = 0; index < length; index += 1) {
    const square = document.createElement("div");
    square.classList.add("ship-square");
    shipContainer.appendChild(square);
  }
  return shipContainer;
}

function getShipInfo(length) {
  return { coordinates: [0, 0], isVertical: false }
}

function setupDisplay(playerGameboard, computerGameboard) {
  const container = document.body;  // change this
  container.appendChild(makeBoardDiv(true));
  container.appendChild(makeBoardDiv(false));
  container.appendChild(makeSetupArea());
}

function updateSquare(isHit, target) {
  if (isHit) {
    target.classList.add('hit');
  } else {
    target.classList.add('miss');
  }
}

export { setupDisplay, updateSquare, getSquare, getShipInfo, displayPlayerShips };