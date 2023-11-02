import createPlayer from "./player";

describe('computer player', () => {
  let mockCreateGameboard;

  beforeEach(() => { 
    mockCreateGameboard = jest.fn();
    jest.spyOn(global.Math, 'random').mockReturnValueOnce(0.123456789).mockReturnValueOnce(0.123456789).mockReturnValueOnce(0.123456789).mockReturnValueOnce(0.123456789).mockReturnValue(0.594739);
  });

  it('returns a valid move', () => { 
    const computer = createPlayer(mockCreateGameboard);
    expect(computer.makeMove()).toEqual([1, 1]);
  });

  it('does not repeat moves', () => { 
    const computer = createPlayer(mockCreateGameboard);
    const moves = [];
    moves.push(computer.makeMove());
    moves.push(computer.makeMove());
    expect(moves).toHaveLength(2);
    expect(moves).toEqual([[1, 1], [5, 5]]);
  });
});