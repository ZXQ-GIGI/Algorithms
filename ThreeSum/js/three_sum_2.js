/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    var result = [];

    nums.sort(function(value1, value2) {
        return value1 - value2;
    });

    function _isExist(arrs, arr) {
        for(var n = 0; n < arrs.length; n++) {
            if(arrs[n].toString() === arr.toString()) {
                return true;
            }
        }
        return false;
    }

    var left = (nums.indexOf(0) >= 0) ? nums.slice(0, nums.indexOf(0) + 1) : nums.filter(function(item, index, array) {
            return (item < 0);
        }),
        right = (nums.indexOf(0) >= 0) ? nums.slice(nums.lastIndexOf(0), nums.length) : nums.filter(function(item, index, array) {
            return (item > 0);
        }),
        middle = [];

        //console.log(left);
        //console.log(right);

    for(var i = 0; i < left.length; i++) {
        for(var j = 0; j < right.length; j++) {
            var value = 0 - left[i] - right[j];

            if(value < 0) {
                middle = nums.slice(i + 1, nums.length - right.length);
            } else if(value > 0){
                middle = nums.slice(nums.length - right.length, nums.length - right.length + j);
            } else {
                middle = nums.slice(i + 1, nums.length - right.length + j);
            }
            //console.log(left[i],right[j]);
            //console.log('mi' + '['+ middle + ']');
            var index = middle.indexOf(value);
            if(index >=0 && !_isExist(result, [left[i], middle[index], right[j]])) {
                result.push([left[i], middle[index], right[j]]);
            }
        }
    }
    return result;

};
