import { includesArray } from "./includesArray";

export default function createPlayer(gameboard, name = "Chuu") {
  const moves = [];

  function makeMove(size = 10) {
    let move = [];
    do {
      move = [Math.floor(Math.random() * size), Math.floor(Math.random() * size)];
      if (!includesArray(moves, move)) {
        moves.push(move);
        break;
      }
    } while (moves.length < size * size); // infinite loop failsafe? idk
    return move;
  }

  return { name, gameboard, makeMove }
}