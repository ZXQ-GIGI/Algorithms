/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0,
        s = 0,
        left = 0,
        right = height.length - 1;
    while(left < right) {
        s = Math.min(height[left],height[right]) * (right - left);
        max = s > max ? s : max;
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
};
