import createShip from "./ship";
import createPlayer from "./player";
import createGameboard from "./gameboard";
import { setupDisplay, updateSquare, getSquare } from "./display";
import './style.css';

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

function playerTurn(event, player, computer) {
  console.log(`${player.name}'s turn!`);
  const str = event.target.getAttribute("coordinates");
  const coordinates = str.split("-").map(Number);
  const isHit = computer.gameboard.receiveAttack(coordinates);
  updateSquare(isHit, event.target);
}

function computerTurn(event, player, computer) {
  console.log("computer's turn!");
  const computerMove = computer.makeMove();
  const isHit = player.gameboard.receiveAttack(computerMove);
  updateSquare(isHit, getSquare(computerMove, false));
}

function setupLoop({ player, computer }) {
  const divBoard = document.getElementById("board-computer");
  
  const startTurn = (event) => {
    playerTurn(event, player, computer);

    divBoard.removeEventListener('click', startTurn);
    setTimeout(() => { computerTurn(event, player, computer) }, 1000);
    setTimeout(() => { divBoard.addEventListener('click', startTurn) }, 2000);
  }

  divBoard.addEventListener('click', startTurn);

  
}

function isGameWon() {
  
}


window.onload = () => {
  const meta = document.createElement('meta');
  meta.setAttribute('name', 'viewport');
  meta.setAttribute('content', 'width=device-width, initial-scale=1.0');
  document.head.appendChild(meta);
  
  const players = startGame();
  setupLoop(players);

  // console.log('game over');
}
