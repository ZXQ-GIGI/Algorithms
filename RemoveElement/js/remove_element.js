/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    nums.sort(function(value1, value2) {
        return value1 - value2;
    });
    var start = nums.indexOf(val);
    var end = nums.lastIndexOf(val);
    if(start >= 0) {
         nums.splice(start, end - start + 1);
    }
    return nums.length;

};
