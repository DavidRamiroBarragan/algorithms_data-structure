'use strict';
var __importDefault = (this && this.__importDefault) || function(mod) {
  return (mod && mod.__esModule) ? mod : {'default': mod};
};
Object.defineProperty(exports, '__esModule', {value: true});
const count_unique_values_1 = __importDefault(require('./count_unique_values'));
describe('Count unique values', () => {
  test('must be 2', () => {
    expect((0, count_unique_values_1.default)([1, 1, 1, 1, 1, 2])).toBe(2);
  });
  test('must be 7', () => {
    expect((0, count_unique_values_1.default)(
        [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
  });
  test('must be 0', () => {
    expect((0, count_unique_values_1.default)([])).toBe(0);
  });
  test('must be 4', () => {
    expect((0, count_unique_values_1.default)([-2, -1, -1, 0, 1])).toBe(4);
  });
});
//# sourceMappingURL=count_unique-values.test.js.map