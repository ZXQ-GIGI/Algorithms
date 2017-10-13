var str = '123456';
str[1] = 3;
//console.log(str);
var input = '';
process.stdin.on('data', function (data) {
   input += data;
   console.log(input);
    //console.log(input.split('\n'));
   //console.log(parseInt(input.split(' ')[1]));
});
// console.log(isNaN('D'));
// var nums = ['122','335','345'];
// var len = nums.reduce(function(pre,cur,index,array) {
//         return pre.length + cur.length;
// 	});
// console.log(len);
