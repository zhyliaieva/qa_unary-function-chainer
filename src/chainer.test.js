'use strict';

const { chainer } = require('./chainer');

describe('chainer', () => {
  it('chains functions', () => {
    const f1 = jest.fn((x) => x + 1);
    const f2 = jest.fn((x) => x * 2);
    const f3 = jest.fn((x) => x - 3);

    const chained = chainer([f1, f2, f3]);

    expect(chained(5)).toBe(9);
    expect(f1).toHaveBeenCalledWith(5);
    expect(f2).toHaveBeenCalledWith(6);
    expect(f3).toHaveBeenCalledWith(12);
  });

  it('handles empty function list', () => {
    const chained = chainer([]);

    expect(chained(5)).toBe(5);
  });

  it('handles single function', () => {
    const f1 = jest.fn((x) => x * 3);
    const chained = chainer([f1]);

    expect(chained(4)).toBe(12);
    expect(f1).toHaveBeenCalledWith(4);
  });
});
