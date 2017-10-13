/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums.push(0);
    nums.sort(function(value1, value2) {
        return value1 - value2;
    });
    for(var i = 0; i < nums.length; i++) {
        if(i < nums.length - 1 && nums[i] >= 0 && nums[i] - nums[i + 1] < -1) {
            return nums[i] + 1;
        }
        if(i == nums.length - 1) {
            return nums[i] + 1;
        }
    }

};
