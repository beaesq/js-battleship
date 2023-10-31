export default function createShip (length, hits = 0, isSunk = false) {
  return { length, hits, isSunk }
}