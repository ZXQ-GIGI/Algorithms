/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var now = Date.now();
    var arrs = [],
        bound = nums.length,
        zero = 0,
        pos = 0;
    function _isExist(arrs, arr) {
        for(var n = 0; n < arrs.length; n++) {
            if(arrs[n].toString() === arr.toString()) {
                return true;
            }
        }
        return false;
    }

    if(nums.length < 3) {
        return arrs;
    }
    nums.sort(function(value1, value2) {
        return value1 - value2;
    });

    for(var x = 0; x < nums.length; x++) {
        if(nums[x] >= 0) {
            bound = x;
            break;
        }
    }

    zero = (nums.indexOf(0) >= 0) ? nums.lastIndexOf(0) - nums.indexOf(0) + 1 : 0;
    pos = (zero >= 3) ? 1 : 0;

    for(var i = 0; i < bound + pos; i++) {
        var middle = 0,
            start = 0,
            end = 0;
        for(var m = nums.length - 1; m >= bound; m--) {
            //console.log("---i: " + i + ",m: " + m);
            var a = nums[i],
                c = nums[m],
                b = 0 - nums[i] - nums[m];
            if (b >= 0) {
                start = bound;
                end = m - 1;
            } else {
                start = i + 1;
                end = bound - 1;
            }
            while(start <= end) {
            //    console.log("start: " + start + " ,end: " + end);
                middle = Math.floor((start + end) / 2);
                if(nums[middle] === b && !_isExist(arrs, [a,b,c])) {
                    arrs.push([a,b,c]);
                    break;
                }
                else if(nums[middle] > b) {
                    end = middle - 1;
                } else {
                    start = middle + 1;
                }
            }
        }

    }
    console.log(new Date() - now);
    return arrs;
};


 console.log(threeSum([13,-11,-14,4,-9,-10,-11,7,-14,-9,14,0,-5,-7,6,-9,11,6,-14,-12,-10,9,-8,-7,5,6,8,-12,-1,-4,14,-3,0,7,9,7,12,13,-9,13,11,-10,-10,-9,-10,12,-10,8,-5,13,11,-8,7,-12,0,-11,2,-14,-8,8,-3,13,-9,5,5,7,-11,-6,5,-13,-7,1,14,-10,-1,-11,-13,4,12,-11,2,0,-4,-14,4,4,-10,13,-3,-10,6,1,-12,4,-9,1,-4,-13,10,8,-11,10,-14,-12,-14,1,-8,10,-10,11,-15,0,-3,-12,1,-14,-1,-1,6,11,-4,-3,-2,-1,-13]));
