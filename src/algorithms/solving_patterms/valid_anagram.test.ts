import {validAnagram} from './valid_anagram';

describe('Valid Anagram', () => {
  test('1. must be truthy', () => {
    expect(validAnagram('', '')).toBeTruthy();
  });
  test('2. must be falsy', () => {
    expect(validAnagram('aaz', 'zza')).toBeFalsy();
  });
  test('3. must be truthy', () => {
    expect(validAnagram('anagram', 'nagaram')).toBeTruthy();
  });
  test('4. must be falsy', () => {
    expect(validAnagram('rat', 'car')).toBeFalsy();
  });
  test('5. must be falsy', () => {
    expect(validAnagram('awesome', 'awesom')).toBeFalsy();
  });
  test('6. must be falsy', () => {
    expect(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')).
        toBeFalsy();
  });
  test('7. must be truthy', () => {
    expect(validAnagram('qwerty', 'qeywrt')).toBeTruthy();
  });
  test('8. must be truthy', () => {
    expect(validAnagram('texttwisttime', 'timetwisttext')).toBeTruthy();
  });
});