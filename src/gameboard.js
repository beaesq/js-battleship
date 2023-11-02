export default function createGameboard(size = 10, ships = [], misses = []) {

  function isOutsideBoard([x, y], length = 1, isVertical = true) {
    for (let index = 0; index < length; index += 1) {
      const [a, b] = isVertical ? [x, y + index] : [x + index, y];

      if (a < 0 || a > size - 1 || b < 0 || b > size - 1) {
        return true;
      }
    }
    return false;
  }

  function compare(arr1, arr2) {
    // assumes same number of elements
    for (let index = 0; index < arr1.length; index += 1) {
      if (arr1[index] !== arr2[index]) {
        return false;
      }
    }
    return true;
  }

  function includesArray(sourceArray, searchElement) {
    // assumes same number of elements
    for (let index = 0; index < sourceArray.length; index += 1) {
      if (compare(sourceArray[index], searchElement)) return true;
    }
    return false;
  }

  function isOverOtherShips([x, y], length, isVertical) {
    // make coordinate array of new ship
    const shipCoordArr = [];
    for (let index = 0; index < length; index += 1) {
      const [a, b] = isVertical ? [x, y + index] : [x + index, y];
      shipCoordArr.push([a, b]);
    }

    // go through all existing ships
    for (let i = 0; i < ships.length; i += 1) {
      const currentShip = ships[i];
      const [currentShipX, currentShipY] = currentShip.coordinates;

      // go through coordinate array of current ship
      for (let j = 0; j < currentShip.ship.length; j += 1) {
        const [a, b] = currentShip.isVertical ? [currentShipX, currentShipY + j] : [currentShipX + j, currentShipY];

        // check if any coordinates of the new ship overlap with the current ship
        if (includesArray(shipCoordArr, [a, b])) return true;
      }
    }
    return false;
  }

  function place(createShip, length, coordinates, isVertical) {
    if (isOutsideBoard(coordinates, length, isVertical)) return;
    if (isOverOtherShips(coordinates, length, isVertical)) return;

    const ship = createShip(length);
    const shipObj = {
      ship,
      coordinates,
      isVertical
    };
    ships.push(shipObj);
  }

  function receiveAttack(attack) {
    if (isOutsideBoard(attack)) return false;

    // go through all existing ships
    for (let i = 0; i < ships.length; i += 1) {
      const currentShip = ships[i];
      const [currentShipX, currentShipY] = currentShip.coordinates;

      // go through coordinate array of current ship
      for (let j = 0; j < currentShip.ship.length; j += 1) {
        const coordinates = currentShip.isVertical ? [currentShipX, currentShipY + j] : [currentShipX + j, currentShipY];

        if (compare(coordinates, attack)) { 
          currentShip.ship.hit();
          return true;
        }
      }
    }

    misses.push(attack);
    return false;
  }

  function areAllShipsSunk() {
    let result = true;
    for (let i = 0; i < ships.length; i += 1) {
      const currentShip = ships[i];
      result = result && currentShip.ship.isSunk();
    }
    return result;
  }

  return { ships, place, receiveAttack, misses, areAllShipsSunk }
}