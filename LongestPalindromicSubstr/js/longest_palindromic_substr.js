/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {

     var start = 0,
         end = 0;

     var _ = function(str, left, right){
       while(left >= 0 && right < str.length && str.charAt(left) === str.charAt(right)){
            left--;
            right++;
        }
        return right - left - 1;
    };

     for(var i = 0; i < s.length; i++){
         var len_odd = _(s, i, i);
         var len_even = _(s, i, i + 1);
         var maxLen = (len_odd > len_even) ? len_odd : len_even;
         if(maxLen >= (end - start + 1)){
             start = i - Math.floor((maxLen - 1) / 2);
             end = i + Math.floor(maxLen / 2);
         }
     }
     return s.slice(start, end + 1);
 };

 //console.log(longestPalindrome("ababde"));
