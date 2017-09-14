/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
     var sign = x > 0 ? 1 : -1,
         str = x.toString(),
         s = '',
         MAX = Math.pow(2,31) - 1,
         MIN = - Math.pow(2,31);
     for(var i = str.length - 1; i >= 0; i--){
         if(str[i] != '-'){
             s += str[i];
         }
     }
     var num = sign * parseFloat(s);
     return (num > MIN && num < MAX) ? num : 0;
 };
 /**
 * run with node
 */
/**
*
*var reverse = function(x) {
*    var MAX = Math.pow(2,31) - 1,
*        MIN = - Math.pow(2,31);
*    var sign = (x > 0) ? 1 : -1,
*        str = x.toString().split('').reverse().join('');
*    if(sign < 0){
*        str.pop();
*    }
*    var num = sign * parseFloat(str);
*    return (num > MIN && num < MAX) ? num : 0;
*};
*/

console.log(reverse(123234));
