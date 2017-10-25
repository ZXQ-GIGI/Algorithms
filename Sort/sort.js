
module.exports = Sort;

function Sort(array) {
};

Sort.prototype.straightInsertionSort = function (array) {
    var result = array.slice(0);
    for(var i = 1; i < result.length; i++) {
        if(result[i-1] > result[i]) {
            var index = i - 1;
            while(result[index] > result[i] && index >= 0){
                index--;
            }
            result.splice(index + 1, 0, result[i]);
            result.splice(i + 1, 1);
        }
    }
    return result;
};

Sort.prototype.shellInsertionSort = function (array) {
    var result = array.slice(0);
    var gap = Math.floor(result.length / 2);
    while(gap >= 1) {
        for(var i = gap; i < result.length; i++) {
            if(result[i - gap] > result[i]) {
                var index = i - gap;
                while(result[index] > result[i] && index >= 0){
                    index -= gap;
                }
                result.splice(index + gap, 0, result[i]);
                result.splice(i + 1, 1);
            }
        }
        gap = Math.floor(gap / 2);
    }
    return result;
};

Sort.prototype.simpleSelectionSort = function (array) {
    var result = array.slice(0);
    for(var i = 0; i < result.length; i++){
        var min = i,
            tmp = 0;
        for(var j = i + 1; j < result.length; j++) {
            if(result[j] < result[min]) {
                min = j;
            }
        }
        tmp = result[min];
        result[min] = result[i];
        result[i] = tmp;
    }
    return result;
};

Sort.prototype.heapSort = function (array) {
    // downward adjustment
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
    // create min-heap
    function createHeap(array) {
        for(var i = Math.floor(array.length / 2); i >= 1; i--){
            adjustHeap(array, i);
        }
    }

    var tmp = array.slice(0),
        result = [];
    for(var i = 0; i < array.length; i++) {
        createHeap(tmp);
        result.push(tmp[0]);
        tmp[0] = tmp.pop();
    }
    return result;
};

Sort.prototype.bubbleSort = function (array) {
    // bubble with both direction
    var result = array.slice(0),
        low = 0,
        high = result.length - 1;
    while(low < high) {
        // find max
        for(var j = low; j < high; j++) {
            if(result[j] > result[j + 1]) {
                var tmp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = tmp;
            }
        }
        // find min
        for(var m = high; m > low; m--) {
            if(result[m] < result[m - 1]) {
                var tmp = result[m];
                result[m] = result[m - 1];
                result[m - 1] = tmp;
            }
        }
        low++;
        high--;
    }
    return result;
};

Sort.prototype.quickSort = function (array) {
    function partition(array, low, high) {
        var i = low,
            j = high,
            key = array[i];
        while(i < j) {
            while(array[j] >= key && j > i) {
                j--;
            }
            if(array[j] < key) {
                array[i] = array[j];
                array[j] = key;
            }
            while(array[i] <= key && j > i) {
                i++;
            }
            if(array[i] > key) {
                array[j] = array[i];
                array[i] = key;
            }
        }
        return i;
    }
    function dfs(array, low, high) {
        if(low >= high){
            return;
        }
        var pos = partition(array, low, high);
        dfs(array, 0, pos - 1);
        dfs(array, pos + 1, high);
    }
    var result = array.slice(0);
    dfs(result, 0, result.length - 1);
    return result;
};

Sort.prototype.mergeSort = function (array) {
    var result = array.slice(0);
    for(var i = 0; i < result.length; i++) {
        result[i] = [result[i]];
    }

    for(var i = 0; i <= result.length; i++) {
        if(result.length == 1) {
            return result[0];
        }
        if(result[i] != undefined && result[i + 1] != undefined) {
            var left = result[i];
            var right = result[i + 1];
            var tmp = [];
            while(left.length > 0 || right.length > 0) {
                if(left[0] <= right[0] || (left[0] && right[0]) == undefined) {
                    tmp.push(left.shift());
                }
                if(left[0] > right[0] || (left[0] == undefined && right[0])){
                    tmp.push(right.shift());
                }
            }
            result.splice(i, 2, tmp); // remove two merged array and add new array
        } else {
            i = -1; // new sort start
        }
    }
};

Sort.prototype.radixSort = function (array) {
    var result = array.slice(0);
    var mark = [];
    var bit = 1;
    //init mark and length equals 10(0-9)
    function initMark() {
        for(var n = 0; n < 10; n++) {
            mark[n] = [];
        }
    }

    while(result.some(function(item, index, arr) {
        return item.toString().length >= bit;
    })) {
        initMark();
        console.log(mark);
        for(var i = 0; i < result.length; i++) {
            var toStr = String(result[i]);
            var value = 0;
            if(toStr.length - bit >= 0){
                value = toStr[toStr.length - bit];
            }
            console.log(toStr);
            mark[value].push(result[i]);
        }
        result = [];
        for(var j = 0; j < mark.length; j++) {
            for(var m = 0; m < mark.length; m++) {
                result.push(mark[j][m]);
            }
        }
        mark = [[]];
    }
    return result;
};
