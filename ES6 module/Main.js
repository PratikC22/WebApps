
import { bubbleSort, mergeSort, merge, selectionSort, binarySearch } from './Utility.js';

let array = [4, 2, 11, 9, 45, 3];
let array1 = [3, 99, 2, 34, 43];
let array2 = [1, 6, 55, 44, 65];
let sortedArray = [1, 2, 3, 4, 5, 6];

console.log(bubbleSort(array));
console.log(selectionSort(array));
console.log(mergeSort(merge(array1, array2)));
console.log("Entry found at index " + binarySearch(sortedArray, 4));