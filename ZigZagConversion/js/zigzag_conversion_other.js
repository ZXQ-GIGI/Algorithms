/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

 var convert = function(s, numRows) {

     var temp = [];
     for(var i = 0; i < numRows; i++) {
         temp[i] = '';
     }
     var j = 0;
     while(j < s.length) {
         for(var k = 0; k < numRows && j < s.length; k++) {
             temp[k] += s[j++];
         }
         for(var m = numRows - 2; m > 0 && j < s.length; m--) {
             temp[m] += s[j++];
         }
     }
     for(var n = 1; n < numRows; n++) {
         temp[0] += temp[n];
     }
     return temp[0];
 }
