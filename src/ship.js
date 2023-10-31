export default function createShip(length, startingHits = 0) {
  let hits = startingHits;

  const isSunk = () => length === hits;

  const hit = () => { 
    if (hits < length) hits += 1;
  }

  return { length, get hitTotal() { return hits; }, isSunk, hit }
}