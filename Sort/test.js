const sort = require('./sort.js');

var mixedArray = [67, 34, 52, 8, 32, 12, 65, -2, 23, 45, 20, 100,-23, 45, 26, 0, -1, 76, 35];
var positiveArray = [2, 4, 23, 56, 32, 77, 47, 20];
var negativeArray = [-23, -45, -90, -1, -234, -54, -66, -89, -99];
var test = new sort();

// mixed array
console.log(test.straightInsertionSort(mixedArray));
console.log(test.shellInsertionSort(mixedArray));
console.log(test.simpleSelectionSort(mixedArray));
console.log(test.heapSort(mixedArray));
console.log(test.bubbleSort(mixedArray));
console.log(test.quickSort(mixedArray));
console.log(test.mergeSort(mixedArray));
console.log(test.radixSort(mixedArray));

// positive array
console.log(test.straightInsertionSort(positiveArray));
console.log(test.shellInsertionSort(positiveArray));
console.log(test.simpleSelectionSort(positiveArray));
console.log(test.heapSort(positiveArray));
console.log(test.bubbleSort(positiveArray));
console.log(test.quickSort(positiveArray));
console.log(test.mergeSort(positiveArray));
console.log(test.radixSort(positiveArray));

// negative array
console.log(test.straightInsertionSort(negativeArray));
console.log(test.shellInsertionSort(negativeArray));
console.log(test.simpleSelectionSort(negativeArray));
console.log(test.heapSort(negativeArray));
console.log(test.bubbleSort(negativeArray));
console.log(test.quickSort(negativeArray));
console.log(test.mergeSort(negativeArray));
console.log(test.radixSort(negativeArray));

// the original array is not changed
console.log(mixedArray);
console.log(positiveArray);
console.log(negativeArray);
