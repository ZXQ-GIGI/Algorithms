/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

   var _ = function(str){
       for(var i = 0, j = str.length - 1; i < j; i++, j--){
           if(str[i] !== str[j]){
               return false;
           }
       }
       return true;
   };
   for(var l = s.length; l > 0; l--){
        for(var start = s.length - l; start >= 0; start--){
            var str = s.slice(start, start + l);
            if(_(str)){
                return str;
            }
        }
    }
    return null;
};
