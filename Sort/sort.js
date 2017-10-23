
module.exports = Sort;
function Sort(array) {
};

Sort.prototype.straightInsertionSort = function (array) {
    for(var i = 1; i < array.length; i++) {
        if(array[i-1] > array[i]) {
            var index = i - 1;
            while(array[index] > array[i] && index >= 0){
                index--;
            }
            array.splice(index + 1, 0, array[i]);
            array.splice(i + 1, 1);
        }
    }
    return array;
};

Sort.prototype.shellInsertionSort = function (array) {
    var gap = Math.floor(array.length / 2);
    while(gap >= 1) {
        for(var i = gap; i < array.length; i++) {
            if(array[i-1] > array[i]) {
                var index = i - 1;
                while(array[index] > array[i] && index >= 0){
                    index -= gap;
                }
                array.splice(index + gap, 0, array[i]);
                array.splice(i + gap, 1);
            }
        }
        gap = Math.floor(gap / 2);
    }
    return array;
};

Sort.prototype.simpleSelectionSort = function (array) {
    for(var i = 0; i < array.length; i++){
        var min = i,
            tmp = 0;
        for(var j = i + 1; j < array.length; j++) {
            if(array[j] < array[min]) {
                min = j;
            }
        }
        tmp = array[min];
        array[min] = array[i];
        array[i] = tmp;
    }
    return array;
};

Sort.prototype.heapSort = function (array) {
    //downward adjustment
    function adjustHeap(array, index) {
        var lChild = index * 2;
        while(index <= array.length) {
            var lChild = index * 2,
                rChild = lChild + 1;
            if(lChild > array.length) {
                return;
            }
            if(lChild + 1 > array.length) {
                rChild--;
            }
            var min = array[lChild - 1] <= array[rChild - 1] ? lChild : rChild;
            if(array[index - 1] > array[min - 1]) {
                var tmp = array[index - 1];
                array[index - 1] = array[min - 1];
                array[min - 1] = tmp;
                index = min;
            } else {
                return;
            }
        }
    }
    //create min-heap
    function createHeap(array) {
        for(var i = Math.floor(array.length / 2); i >= 1; i--){
            adjustHeap(array, i);
        }
    }

    var tmp = array.slice(0);
    for(var i = 0; i < array.length; i++) {
        createHeap(tmp);
        array[i] = tmp[0];
        tmp[0] = tmp.pop();
    }
    return array;
};

Sort.prototype.bubbleSort = function (array) {
    //bubble with both direction
    var low = 0,
        high = array.length - 1;
    while(low < high) {
        //find max
        for(var j = low; j < high; j++) {
            if(array[j] > array[j + 1]) {
                var tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
        //find min
        for(var m = high; m > low; m--) {
            if(array[m] < array[m - 1]) {
                var tmp = array[m];
                array[m] = array[m - 1];
                array[m - 1] = tmp;
            }
        }
        low++;
        high--;
    }
    return array;
};

Sort.prototype.quickSort = function (array) {

};

Sort.prototype.mergeSort = function (array) {

};

Sort.prototype.radixSort = function (array) {

};
