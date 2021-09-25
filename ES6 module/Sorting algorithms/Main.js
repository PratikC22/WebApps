
import { bubbleSort, mergeSort, selectionSort, binarySearch } from './Utility.js';

let array = [4, 2, 11, 9, 45, 3];
let sortedArray = [1, 2, 3, 4, 5, 6];

console.log(bubbleSort(array));
console.log(selectionSort(array));
console.log(mergeSort(array));
console.log(binarySearch(sortedArray, 4));
