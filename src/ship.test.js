import createShip from "./ship";

describe('hit()', () => {

});

describe('isSunk()', () => {
  it('ship is sunk when it is fully hit', () => {
    const ship = createShip(4, 4);
    expect(ship.isSunk()).toBeTruthy();
  });

  it('ship is not sunk when it is partially hit', () => {
    const ship = createShip(5, 2);
    expect(ship.isSunk()).toBeFalsy();
  });

  it('ship is not sunk when it has not been hit', () => {
    const ship = createShip(2, 0);
    expect(ship.isSunk()).toBeFalsy();
  });
});