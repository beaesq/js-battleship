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
    const length1 = 5;
    const shipObj1 = { length1 };
    const coordinates1 = [4, 0];
    const isVertical1 = true;
    const length2 = 5;
    const shipObj2 = { length2 };
    const coordinates2 = [2, 2];
    const isVertical2 = false;
    mockCreateShip.mockReturnValueOnce(shipObj1).mockReturnValue(shipObj2);

    gameboard.place(mockCreateShip, length1, coordinates1, isVertical1);
    gameboard.place(mockCreateShip, length2, coordinates2, isVertical2);
    expect(gameboard.ships).toHaveLength(1);
    expect(gameboard.ships[0]).toHaveProperty('coordinates', coordinates1);
  });
});