module.exports = Sort;

function Sort(array) {
};

Sort.prototype.straightInsertionSort = function (array) {
    var result = array.slice(0);
    for(var i = 1; i < result.length; i++) {
        if(result[i-1] > result[i]) {
            var index = i - 1;
            // forward to search for insertion location of current value
            while(result[index] > result[i] && index >= 0){
                index--;
            }
            // insert current value and remove original position value
            result.splice(index + 1, 0, result[i]);
            result.splice(i + 1, 1);
        }
    }
    return result;
};

Sort.prototype.shellInsertionSort = function (array) {
    var result = array.slice(0),
        gap = Math.floor(result.length / 2);
    while(gap >= 1) {
        for(var i = gap; i < result.length; i++) {
            // use straight insertion sort, but the decreasing value equals gap
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
            // when left child does not exist, it means current node has no child
            if(lChild > array.length) {
                return;
            }
            // left child exists and right child does not exist
            if(lChild + 1 > array.length) {
                rChild--;
            }
            // select smaller one of two children
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
    // get correct osition of cardinal number
    function partition(array, low, high) {
        var i = low,
            j = high,
            key = array[i];
        while(i < j) {
            // from right to left to search element smaller than cardinal number and exchange
            while(array[j] >= key && j > i) {
                j--;
            }
            if(array[j] < key) {
                array[i] = array[j];
                array[j] = key;
            }
            // from left to right to search element larger than cardinal number and exchange
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
        // the left and right sides of the base position continue to be searched
        dfs(array, 0, pos - 1);         //left
        dfs(array, pos + 1, high);      //right
    }
    var result = array.slice(0);
    dfs(result, 0, result.length - 1);
    return result;
};

Sort.prototype.mergeSort = function (array) {
    var result = array.slice(0);
    // initialize result and make each element an array
    for(var i = 0; i < result.length; i++) {
        result[i] = [result[i]];
    }

    for(var i = 0; i <= result.length; i++) {
        // when length equals 1 , it means all sorts are done
        if(result.length == 1) {
            return result[0];
        }
        if(result[i] != undefined && result[i + 1] != undefined) {
            var left = result[i];
            var right = result[i + 1];
            var tmp = [];
            while(left.length > 0 || right.length > 0) {
                if(left[0] <= right[0] || (left[0] && right[0] == undefined)) {
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
    var result = array.slice(0),
        positive = array.filter(function(item, index, arr) {
        return item >= 0; // get '0' and positive array
    }),
        negative = array.filter(function(item, index, arr) {
        return item < 0; //get negative array
    });


    function positiveSort(arr, isPositive) {
        // initialize mark and length equals 10(0-9)
        function initMark() {
            for(var n = 0; n < 10; n++) {
                mark[n] = [];
            }
        }
        var mark = [],
            bit = 1; // the initial bit is units' digit
        // get the abssolute value of the negative array
        if(!isPositive) {
            arr = arr.map(function(item) {
                return Math.abs(item);
            });
        }
        while(arr.some(function(item, index, arr) {
            return item.toString().length >= bit;
        })) {
            initMark(); // initialize the mark container
            for(var i = 0; i < arr.length; i++) {
                var toStr = String(arr[i]),
                    value = 0;
                if(toStr.length - bit >= 0){
                    value = toStr[toStr.length - bit];
                }
                mark[value].push(arr[i]);
            }
            arr = [];
            for(var j = 0; j < mark.length; j++) {
                for(var m = 0; m < mark[j].length; m++) {
                    arr.push(mark[j][m]);
                }
            }
            bit++;
        }
        // restore and reverse the original negative array
        if(!isPositive) {
            arr = arr.map(function(item) {
                return -item;
            }).reverse();
        }
        return arr;
    }
    negative = positiveSort(negative, false); // negative part
    positive = positiveSort(positive, true);  // positive part
    return negative.concat(positive);
};
