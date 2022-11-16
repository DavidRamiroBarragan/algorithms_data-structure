"use strict";
// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a
// value and returns the index at which the value exists. Otherwise, return -1.
function binarySearch(value, element) {
    let start = 0;
    let end = value.length - 1;
    let mid = Math.floor((start + end) / 2);
    while (value[mid] != element && start <= end) {
        if (value[mid] > element) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
        mid = Math.floor((start + end) / 2);
    }
    return (value[mid] === element) ? mid : -1;
}
const a = binarySearch([1, 2, 3, 4, 5], 2); // 1
const b = binarySearch([1, 2, 3, 4, 5], 3); // 2
const c = binarySearch([1, 2, 3, 4, 5], 5); // 4
const d = binarySearch([1, 2, 3, 4, 5], 6); // -1
const e = binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99,
], 10); // 2
const f = binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99,
], 95); // 16
const g = binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99,
], 100); // -1
console.log(a, b, c, d, e, f, g);
