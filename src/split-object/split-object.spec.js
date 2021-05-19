import { splitObject } from './split-object.js';

describe('splitObject splits an object into one key/value pair objects, returns and array with these objects', () => {
  describe('strings and numbers', () => {
    it('keys, values - numbers', () => {
      const expected = [{ 1: 2 }, { 3: 4 }, { 5: 6 }];
      const received = splitObject({ 1: 2, 3: 4, 5: 6 });
      expect(received).toEqual(expected);
    });

    it('keys, values - strings', () => {
      const expected = [{ Anna: 'Adler' }, { Doctor: 'Watson' }, { Sherlock: 'Holmes' }];
      const received = splitObject({ Anna: 'Adler', Doctor: 'Watson', Sherlock: 'Holmes' });
      expect(received).toEqual(expected);
    });
    it('keys, values - numbers/strings', () => {
      const expected = [{ 12: 'monkeys' }, { hateful: 8 }, { weeks: 9.5 }, { 2.5: 'man' }];
      const received = splitObject({
        12: 'monkeys', hateful: 8, weeks: 9.5, 2.5: 'man',
      });
      expect(received).toEqual(expected);
    });
    it('empty string values', () => {
      const expected = [{ 1: '' }, { one: '' }];
      const received = splitObject({ 1: '', one: '' });
      expect(received).toEqual(expected);
    });
  });

  describe('tricky values', () => {
    it('value - boolean', () => {
      const expected = [{ one: true }, { two: false }];
      const received = splitObject({ one: true, two: false });
      expect(received).toEqual(expected);
    });

    it('value - NaN, Infinity, null', () => {
      const expected = [{ one: NaN }, { two: Infinity }, { three: null }];
      const received = splitObject({ one: NaN, two: Infinity, three: null });
      expect(received).toEqual(expected);
    });

    it('value - undefined', () => {
      // eslint-disable-next-line no-undefined
      const expected = [{ life: undefined }, { death: undefined }];
      // eslint-disable-next-line no-undefined
      const received = splitObject({ life: undefined, death: undefined });
      expect(received).toEqual(expected);
    });
  });

  describe('empty array', () => {
    it('empty array', () => {
      const expected = [];
      const received = splitObject({});
      expect(received).toEqual(expected);
    });
  });

  describe('has no side effects', () => {
    it('empty array', () => {
      const arg = [];
      const returned = splitObject(arg);
      const areDifferent = arg !== returned;
      expect(areDifferent).toEqual(true);
    });
  });
});
