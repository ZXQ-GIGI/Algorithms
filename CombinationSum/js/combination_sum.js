/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

 // to finish
var combinationSum = function(candidates, target) {
    var result = [],
           ele = [];

    function dfs(candidates, target){
        for(var i = 0; i < candidates.length; i++) {

            if(ele.length > 0 && candidates[i] >= ele[ele.length - 1]) {
                ele.push(candidates[i]);
            } else {
                continue;
            }
            var next_tar = target - candidates[i];
            var next_can = candidates.filter(function(item, index, array) {
                return (item <= next_tar);
            });
            //console.log(next_can);
            if(next_tar == 0) {
                result.push(ele);
                return;
            }
            if(next_can.length > 0) {
                dfs(next_can, next_tar);
                ele.pop();
                console.log('+1');
            } else {
                ele = [];
                return;
            }
        }
    }
    dfs(candidates, target);
    return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
