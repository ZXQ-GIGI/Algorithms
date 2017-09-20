/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var arrs = [],
        bound = nums.length,
        zero = 0;
    function _compare(value1, value2) {
        if (value1 > value2) {
            return 1;
        } else if (value1 === value2) {
            return 0;
        } else {
            return -1;
        }
    }
    function _isExist(arrs, arr) {
        for(var n = 0; n < arrs.length; n++) {
            if(arrs[n].toString() === arr.toString()) {
                return true;
            }
        }
        return false;
    }
    nums = nums.sort(_compare);
    console.log("," + nums);
    if(nums.length < 3) {
        return arrs;
    }
    for(var x = 0; x < nums.length; x++) {
        if(nums[x] >= 0) {
            bound = x;
            break;
        }
    }
    console.log(bound);
    zero = (nums.indexOf(0) >= 0) ? nums.lastIndexOf(0) - nums.indexOf(0) + 1 : 0;
    var pos = 0;
    if (zero >= 3) {
        pos = 1;
    }
    //-----------
    for(var i = 0; i < bound + pos; i++) {
        var middle = 0,
            start = 0,
            end = 0;

        for(var m = nums.length - 1; m >= bound - pos; m--) {
            console.log("---i: " + i + ",m: " + m);
            var num2 = 0 - nums[i] - nums[m];
            if(num2 >= 0) {
                start = bound;
                end = m - 1;
            } else {
                start = i + 1;
                end = bound - 1;
            }
            while(start <= end) {
                console.log("start: " + start + " ,end: " + end);
                middle = Math.floor((start + end) / 2);
                if(nums[middle] === num2 && !_isExist(arrs, [nums[i],nums[middle],nums[m]])) {
                    arrs.push([nums[i],nums[middle],nums[m]]);
                    break;
                }
                else if(nums[middle] > num2) {
                    end = middle - 1;
                } else {
                    start = middle + 1;
                }
            }
        }

    }
    return arrs;
};


 //console.log(threeSum([6,-5,-6,-1,-2,8,-1,4,-10,-8,-10,-2,-4,-1,-8,-2,8,9,-5,-2,-8,-9,-3,-5]));
