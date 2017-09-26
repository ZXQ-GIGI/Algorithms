/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var start = 0,
        end = nums.length - 1;
    while(start <= end) {
        var tmp = Math.floor((start + end) / 2);
        if (target < nums[tmp]) {
            end = tmp - 1;
        } else if (target > nums[tmp]) {
            start = tmp + 1;
        } else {
            return tmp;
        }
    }
    return start;
};
