/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var tmp = 0;
    for(var i = nums.length - 2; i >= 0; i--) {
        if(nums[i] >= nums[nums.length - 1]) {
            nums.push(parseInt(nums.splice(i,1).join('')));
        } else {
            for(var j = i + 1; j < nums.length; j++){
                if(nums[j] > nums[i]) {
                    tmp = nums[j];
                    nums[j] = nums[i];
                    nums[i] = tmp;
                    i = 0;
                    break;
                }
            }
        }
    }
};
