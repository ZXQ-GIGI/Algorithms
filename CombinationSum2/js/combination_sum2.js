/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var result = [],
           ele = [];

    function dfs(candidates, target){

        if(target === 0) {
            result.push(ele.slice(0));
            return;
        }

        if(target > 0 && candidates.length === 0){
            return;
        }

        for(var i = 0; i < candidates.length; i++) {
            if(i > 0 && candidates[i] == candidates[i-1]) {
                continue;
            }
            ele.push(candidates[i]);
            var next_tar = target - candidates[i];
            var next_can = candidates.slice(i + 1).filter(function(item, index, array) {
                return (item <= next_tar);
            });
            dfs(next_can, next_tar);
            ele.pop();
        }
    }
    candidates.sort(function(value1, value2) {
        return value1 - value2;
    });
    dfs(candidates, target);
    return result;
};
