/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function(candidates, target) {
    var result = [],
           ele = [];

    function dfs(candidates, target){

        if(target == 0) {
            result.push(ele.slice(0));
            return;
        }

        if(target > 0 && candidates.length == 0){
            return;
        }

        for(var i = 0; i < candidates.length; i++) {

            ele.push(candidates[i]);
            var next_tar = target - candidates[i];
            var next_can = candidates.slice(i).filter(function(item, index, array) {
                return (item <= next_tar);
            });
            dfs(next_can, next_tar);
            ele.pop();
        }
    }
    dfs(candidates, target);
    return result;
};
