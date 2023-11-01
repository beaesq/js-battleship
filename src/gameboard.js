export default function createGameboard(size = 10) {
  const ships = [];

  function isOutsideBoard([x, y], length, isVertical) {
    for (let index = 0; index < length; index += 1) {
      const [a, b] = isVertical ? [x, y + index] : [x + index, y];

      if (a < 0 || a > size - 1 || b < 0 || b > size - 1) {
        return true;
      }
    }
    return false;
  }

  function place(createShip, length, coordinates, isVertical) {
    if (isOutsideBoard(coordinates, length, isVertical)) return;

    const ship = createShip(length);
    const shipObj = {
      ship,
      coordinates,
      isVertical
    };
    ships.push(shipObj);
  }

  return { ships, place }
}