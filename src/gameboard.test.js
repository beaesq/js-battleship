import createGameboard from "./gameboard";


describe('placing ships', () => {
  const mockCreateShip = jest.fn();
  
  it('puts a ship at the correct coordinates', () => { 
    const gameboard = createGameboard();
    const length = 4;
    const shipObj = { length };
    const coordinates = [1, 1];
    const isVertical = true;
    mockCreateShip.mockReturnValue(shipObj);

    gameboard.place(mockCreateShip, length, coordinates, isVertical);

    expect(mockCreateShip).toHaveBeenCalledWith(length);
    expect(gameboard.ships[0]).toHaveProperty('coordinates', coordinates);
    expect(gameboard.ships[0]).toHaveProperty('ship', shipObj);
    expect(gameboard.ships[0]).toHaveProperty('isVertical', isVertical);
  });

  it('does not let you put a ship outside the board', () => { 
    const gameboard = createGameboard();
    const length = 5;
    const shipObj = { length };
    const coordinates = [9, 1];
    const isVertical = false;
    mockCreateShip.mockReturnValue(shipObj);

    gameboard.place(mockCreateShip, length, coordinates, isVertical);
    expect(gameboard.ships).toHaveLength(0);
  });

  it('does not let you place a ship over an existing ship', () => {
    const gameboard = createGameboard();
    const length0 = 5;
    const shipObj0 = { length: length0 };
    const coordinates0 = [4, 9];
    const isVertical0 = false;
    const length1 = 5;
    const shipObj1 = { length: length1 };
    const coordinates1 = [4, 0];
    const isVertical1 = true;
    const length2 = 5;
    const shipObj2 = { length: length2 };
    const coordinates2 = [2, 2];
    const isVertical2 = false;
    mockCreateShip.mockReturnValueOnce(shipObj0).mockReturnValueOnce(shipObj1).mockReturnValue(shipObj2);

    gameboard.place(mockCreateShip, length0, coordinates0, isVertical0);
    gameboard.place(mockCreateShip, length1, coordinates1, isVertical1);
    gameboard.place(mockCreateShip, length2, coordinates2, isVertical2);
    expect(gameboard.ships).toHaveLength(2);
    expect(gameboard.ships[0]).toHaveProperty('coordinates', coordinates0);
    expect(gameboard.ships[1]).toHaveProperty('coordinates', coordinates1);
  });
});

describe('receiveAttack()', () => { 
  const mockHit = jest.fn();
  const shipObj = {
    coordinates: [1, 1],
    isVertical: true,
    ship: {
      length: 5,
      hit: mockHit
    }
  };
  const gameboard = createGameboard(10, [shipObj]);

  it('hits a ship when the attack hits', () => { 
    const coordinates = [1, 4];
    gameboard.receiveAttack(coordinates);
    expect(mockHit).toHaveBeenCalledTimes(1);
  });

  it('records a miss when the attack misses', () => { 
    const coordinates = [2, 4];
    gameboard.receiveAttack(coordinates);
    expect(gameboard.misses).toHaveLength(1);
    expect(gameboard.misses[0]).toEqual(coordinates)
  });
});