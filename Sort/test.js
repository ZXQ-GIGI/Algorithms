const sort = require('./sort.js');

var array = [67, 34, 52, 8, 32, 12, 65, -2, 23, 45, 20, 100,-23, 45, 26, 0, -1, 76];
var test = new sort();

//console.log(test.straightInsertionSort(array));
//console.log(test.shellInsertionSort(array));
//console.log(test.simpleSelectionSort(array));
console.log(test.heapSort(array));
console.log(test.bubbleSort(array));
console.log(test.quickSort(array));
console.log(test.mergeSort(array));
console.log(test.radixSort(array));
