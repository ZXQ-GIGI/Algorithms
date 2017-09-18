/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var arrs = [];

    function _compare(num1, num2) {
        if (num1 > num2) {
            return 1;
        } else if (num1 === num2) {
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
    var i = 0,
        j = 1,
        m = 2;
    nums = nums.sort(_compare);
    while(i < j && j < m && m < nums.length && nums[i] <= 0) {
        var tmp = [nums[i], nums[j], nums[m]];
        if(nums[i] + nums[j] + nums[m] === 0 && !_isExist(arrs, tmp)) {
            arrs.push(tmp);
            j++;
            m = j+1;
            if (j == nums.length - 1) {
                i++;
                j = i + 1;
                m = j + 1;
           }
        } else {
            m++;
        }
        if(m == nums.length) {
            j++;
            m = j + 1;
            if(j == nums.length - 1){
                i++;
                j = i + 1;
                m = j + 1;
            }
        }
    }
    return arrs;
};

console.log(threeSum([-11,-3,-6,12,-15,-13,-7,-3,13,-2,-10,3,12,-12,6,-6,12,9,-2,-12,14,11,-4,11,-8,8,0,-12,4,-5,10,8,7,11,-3,7,5,-3,-11,3,11,-13,14,8,12,5,-12,10,-8,-7,5,-9,-11,-14,9,-12,1,-6,-8,-10,4,9,6,-3,-3,-12,11,9,1,8,-10,-3,2,-11,-10,-1,1,-15,-6,8,-7,6,6,-10,7,0,-7,-7,9,-8,-9,-9,-14,12,-5,-10,-15,-9,-15,-7,6,-10,5,-7,-14,3,8,2,3,9,-12,4,1,9,1,-15,-13,9,-14,11,9]));
