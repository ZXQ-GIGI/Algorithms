/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var sum = 0,
        peak = [];
    height.unshift(0);
    height.push(0);

    for(var i = 1; i < height.length - 1; i++) {
        if(height[i] >= height[i-1] && height[i] >= height[i+1]) {
            peak.push(i);
        }
    }

    var m = 1;
    while(m <= peak.length - 2) {
        if(height[peak[m]] <= height[peak[m - 1]] && height[peak[m]] <= height[peak[m + 1]]) {
            peak.splice(m,1);
            m = 1;
            continue;
        }
        m++;
    }

    for(var j = 0; j < peak.length - 1; j++) {
        var min = Math.min(height[peak[j]], height[peak[j + 1]]);
        var ele = height.slice(peak[j] + 1, peak[j + 1]).filter(function(item, index, array) {
            return (item < min);
        });
        if(ele.length === 0) {
            continue;
        }
        sum += ele.length * min - ele.reduce(function(prev, cur, index, array) {
            return prev + cur;
        });
    }

    return sum;
};
