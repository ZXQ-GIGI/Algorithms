/**
 * 按以下方法计算一个字符串的值
 * 给定一个字符串 aadeseedfss
 * 其中 a:2 d:2 e:3 s:3
 * 则 值 = 2*2 + 2*2 + 3*3 + 3* 3
 * 给定一个值k，允许去掉k个字符串中的字符，使得字符串的值最小
 */

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var n = 0;// 初始状态为负数，表示还没开始读取
var k = 0;
var ans = 0;
var cur_line = 0;
var tokens;
function obj(key, value){
    this.key = key;
    this.value = value;
}
rl.on('line', function(line){ // javascript每行数据的回调接口

   if (n == 0) { // 测试用例第一行读取n
       tokens = line.trim().split('');
       n = 1;
   } else {
       k = parseInt(line.trim());
       var mark = [];
       var i = 0;
       for(i = 0; i < tokens.length; i++) {
           if(mark.length == 0){
               mark.push(new obj(tokens[i],1));
           } else {
               for(var j = 0; j < mark.length; j++){
                   if(mark[j].key == tokens[i]){
                       mark[j].value++;
                       break;
                   }
               }
               if(j == mark.length){
                   mark.push(new obj(tokens[i],1));
               }
           }
       }
	   mark.sort(function(value1, value2){
           return value2.value - value1.value;
       });
       for(i = 0; i < mark.length; i++) {
           if(k > 0){
               if(i == 0){
                   mark[i].value--;
                   k--;
               } else {
                   if(mark[i] >= mark[i-1]){
                       mark[i].value--;
                       k--;
                   }
                   else{
                       i = 0;
                   }

               }
           } else {
               break;
           }
       }
       for(i = 0; i < mark.length; i++){
           ans += (mark[i].value * mark[i].value);
       }
       cur_line += 1;
   }

   // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
   if (1 === cur_line) {
       // 输出结果
       console.log(ans);
       n = 0;
       ans = 0;
       cur_line = 0;
   }
});
