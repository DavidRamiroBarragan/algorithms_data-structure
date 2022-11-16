'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const valid_anagram_1 = require('./valid_anagram');
describe('Valid Anagram', () => {
  test('1. must be truthy', () => {
    expect((0, valid_anagram_1.validAnagram)('', '')).toBeTruthy();
  });
  test('2. must be falsy', () => {
    expect((0, valid_anagram_1.validAnagram)('aaz', 'zza')).toBeFalsy();
  });
  test('3. must be truthy', () => {
    expect((0, valid_anagram_1.validAnagram)('anagram', 'nagaram')).
        toBeTruthy();
  });
  test('4. must be falsy', () => {
    expect((0, valid_anagram_1.validAnagram)('rat', 'car')).toBeFalsy();
  });
  test('5. must be falsy', () => {
    expect((0, valid_anagram_1.validAnagram)('awesome', 'awesom')).toBeFalsy();
  });
  test('6. must be falsy', () => {
    expect((0, valid_anagram_1.validAnagram)('amanaplanacanalpanama',
        'acanalmanplanpamana')).
        toBeFalsy();
  });
  test('7. must be truthy', () => {
    expect((0, valid_anagram_1.validAnagram)('qwerty', 'qeywrt')).toBeTruthy();
  });
  test('8. must be truthy', () => {
    expect((0, valid_anagram_1.validAnagram)('texttwisttime', 'timetwisttext')).
        toBeTruthy();
  });
});
//# sourceMappingURL=valid_anagram.test.js.map