/**
 * 一只蚂蚱位于0处，它可以在直线上正反两个方向移动，且每次移动的距离都只比上次移动的多一个单位
 * 第一次跳动的距离为单位1, 如果让蚂蚱跳跃到x处，最少需要跳跃几次
 */

function smartLocust(x) {
    var result = [0]; //数组初始化二叉树
    var i= 0; //指针i
    var depth = 0;//树的深度及查找次数

    while(i < result.length) { //扩展二叉树
        //遍历当前层所有节点
        var len = result.length;
        for(var j = i; j < len; j++) {
            //检测是否达到目标值
            if(result[j] === x) {
                return depth;
            }
            result.push(result[j] + depth + 1); //扩展左孩子，行为向右（+）
            result.push(result[j] - depth - 1); //扩展有孩子，行为向左（-）
        }
        i = j;
        depth++;
    }
    return -1;
}
console.log(smartLocust(2)); //3
console.log(smartLocust(6)); //3
console.log(smartLocust(0)); //0
