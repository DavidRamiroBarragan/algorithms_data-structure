'use strict';
//Implement a function called countUniqueValues, which accepts a sorted
// array, and counts the unique values in the array. There can be negative
// numbers in the array, but it will always be sorted.
Object.defineProperty(exports, '__esModule', {value: true});
//Time Complexity - O(n)
//Space Complexity - O(n)
//Bonus
//You must do this with constant or O(1) space and O(n) time.
function countUniqueValues(list) {
  if (!list.length) {
    return 0;
  }
  const acc = {};
  for (let i = 0; i <= list.length; i++) {
    const num = list[i];
    acc[num] ? acc[num] += 1 : acc[num] = 1;
  }
  console.log(acc);
  return Object.keys(acc).length;
}
exports.default = countUniqueValues;
//# sourceMappingURL=count_unique_values.js.map