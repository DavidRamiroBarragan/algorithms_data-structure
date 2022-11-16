import countUniqueValues from './count_unique_values';

describe('Count unique values', () => {
  test('must be 2', () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
  });
  test('must be 7', () => {
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
  });
  test('must be 0', () => {
    expect(countUniqueValues([])).toBe(0);
  });
  test('must be 4', () => {
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
  });
});