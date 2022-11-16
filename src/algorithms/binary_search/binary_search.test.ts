import {binarySearch} from './binary_search';

describe('Binary search', () => {
  test('must returns 1', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 2)).toBe(1);
  });
  test('1. must returns 2', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });
  test('2. must returns 2', () => {
    expect(binarySearch([
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
      40, 44, 64, 79, 84, 86, 95, 96, 98, 99,
    ], 10)).toBe(2);
  });
  test('must returns 4', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });
  test('1. must returns -1', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });
  test('2. must returns -1', () => {
    expect(binarySearch([
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
      40, 44, 64, 79, 84, 86, 95, 96, 98, 99,
    ], 100)).toBe(-1);
  });
  test('must returns -1', () => {
    expect(binarySearch([
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
      40, 44, 64, 79, 84, 86, 95, 96, 98, 99,
    ], 95)).toBe(16);
  });
});