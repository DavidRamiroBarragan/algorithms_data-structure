// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a
// value and returns the index at which the value exists. Otherwise, return -1.

export function binarySearch(value: number [], element: number) {
  let start = 0;
  let end   = value.length - 1;
  let mid   = Math.floor((start + end) / 2);
  
  while (value[mid] != element && start <= end) {
    if (value[mid] > element) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return (value[mid] === element) ? mid : -1;
}