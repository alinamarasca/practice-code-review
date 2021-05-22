/* eslint-disable spellcheck/spell-checker */
import { filterItems } from './difference.js';

describe('', () => {});

describe('removes the difference items for two arrays', () => {
  describe('difference positive numbers', () => {
    it('whole numbers', () => {
      const expected = [1];
      const received = filterItems([1, 2], [2, 3]);
      expect(received).toEqual(expected);
    });
    it('decimal numbers', () => {
      const expected = [0];
      const received = filterItems([0, 1.11], [1.11, 5.4]);
      expect(received).toEqual(expected);
    });
    it('mixed whole and decimal numbers', () => {
      const expected = [3.8, 1];
      const received = filterItems([5.4, 2, 3.8, 1], [2, 5.4, 3.3]);
      expect(received).toEqual(expected);
    });
  });
  describe('difference negative numbers', () => {
    it('whole numbers', () => {
      const expected = [-3];
      const received = filterItems([-1, -2, -3], [-6, -1, -2]);
      expect(received).toEqual(expected);
    });
    it('decimal numbers', () => {
      const expected = [-3.01, -5.09];
      const received = filterItems(
        [-1.4, -3.01, -2.56, -0.1, -5.09],
        [-1.4, -2.56, -0.1],
      );
      expect(received).toEqual(expected);
    });
    it('mixed whole and decimal numbers', () => {
      const expected = [-3.4];
      const received = filterItems([-1, -0.1, -3.4], [-6, -8.9, -1, -0.1]);
      expect(received).toEqual(expected);
    });
  });
  describe('difference mixed positive and negative numbers', () => {
    it('whole numbers', () => {
      const expected = [0, 2, -2];
      const received = filterItems([0, 1, -1, 2, -2], [1, -1, 8]);
      expect(received).toEqual(expected);
    });
    it('decimal numbers', () => {
      const expected = [2.99, -2.34];
      const received = filterItems(
        [0, 1.4, -1.01, 2.99, -2.34],
        [0, 1.4, -1.01, 3.87],
      );
      expect(received).toEqual(expected);
    });
    it('mixed whole and decimal numbers', () => {
      const expected = [-5.09, 0, 3.01];
      const received = filterItems(
        [-1, 2, -5.09, 0, 3.01],
        [-1, 3.06, 0.1, 2, -5.14],
      );
      expect(received).toEqual(expected);
    });
  });

  describe('difference two string array', () => {
    it('', () => {
      const expected = ['zehra'];
      const received = filterItems(
        ['zehra', 'harun', 'saban'], ['harun', 'saban'],
      );
      expect(received).toEqual(expected);
    });
  });

  // describe('has no side-effects', () => {
  //   it('returns a new array', () => {
  //     const arg = [];
  //     const returned = filterItems(arg);
  //     const areDifferent = arg !== returned;
  //     expect(areDifferent).toEqual(true);
  //   });
  //   it('does not modify the argument', () => {
  //     const arg = [3, 2, 1];
  //     filterItems(arg);
  //     expect(arg).toEqual([3, 2, 1]);
  //   });
  // });
});
