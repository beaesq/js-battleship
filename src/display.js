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
  return divBoard.querySelector(`[coordinates="${a}-${b}"]`);
}

function displayPlayerShips(ships, playerBoardID = "board-player") {
  for (let index = 0; index < ships.length; index += 1) {
    const currentShip = ships[index];
    const [currentShipX, currentShipY] = currentShip.coordinates;
    for (let j = 0; j < currentShip.ship.length; j += 1) {
      const [a, b] = currentShip.isVertical ? [currentShipX, currentShipY + j] : [currentShipX + j, currentShipY];
      const square = getSquare([a, b], false, playerBoardID); // !!! check if x & y gets flipped
      square.classList.add('ship');
    }
  }
}

function makeSetupArea() {
  const container = document.createElement("div");
  container.id = ("setup-area");
  return container;
}

function displayBoards() {
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

function getSetupText(index) {
  switch (index) {
    case 0:
      return "Place your carrier!"
    case 1:
      return "Place your battleship!"
    case 2:
      return "Place your cruiser!"
    case 3:
      return "Place your first destroyer!"
    case 4:
      return "Place your second destroyer!"
    case 5:
      return "Place your first submarine!"
    case 6:
      return "Place your second submarine!"
    default:
      return "Enter your name 😈";
  }
}

function displaySetupInfo(index) {
  const container = document.getElementById("setup-area");
  container.innerHTML = "";

  const text = document.createElement("p");
  text.innerHTML = getSetupText(index);
  container.appendChild(text);

  if (index >= 0 || index <= 6) {
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerHTML = "Rotate Ship";
    container.appendChild(button);
  } else {
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "player-name");
    input.setAttribute("name", "player-name");
    input.setAttribute("placeholder", "Your name");
    form.appendChild(input);
    const button = document.createElement("button");
    button.innerHTML = "Submit";
    form.appendChild(button);
    container.appendChild(form);
  }
}

function displayTurnInfo(name) {
  const container = document.getElementById("setup-area");
  container.innerHTML = "";

  const text = document.createElement("p");
  text.innerHTML = `${name}'s turn!`;
  container.appendChild(text);
}

function displayWinInfo(name) {
  const container = document.getElementById("setup-area");
  container.innerHTML = "";

  const text = document.createElement("p");
  text.innerHTML = `${name} wins!`;
  container.appendChild(text);
}

export { displayBoards, updateSquare, getSquare, displayPlayerShips, displaySetupInfo, displayTurnInfo, displayWinInfo };