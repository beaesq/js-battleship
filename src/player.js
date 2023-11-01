export default function createPlayer(createGameboard, name = "Chuu", isHuman = false) {
  const gameboard = createGameboard();



  return { name, gameboard }
}