/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
     var len = s.length,
         period_len = (numRows > 1) ? 2 * numRows - 2 : 1,
         str_tmp = '',
         str = '';
     if(len <= numRows){
         return s;
     }
     for(var i = 0; i < len; i++){
         str_tmp += s[i];
         if((i % period_len) >= numRows - 1){
             for(var j = 0; j < numRows - 2; j++){
                 str_tmp += '*';
             }
         }
     }
     for(var n = 0; n < numRows; n++){
         var index = n;
         while(index < str_tmp.length){
             if(str_tmp[index] != '*'){
                 str += str_tmp[index];
             }
             index += numRows;
         }
     }
     return str;
 };
