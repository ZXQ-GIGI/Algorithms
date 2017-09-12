/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var len = s.length,
        period_len = (numRows > 1) ? 2 * numRows - 2 : 1,
        arr = new Array(),
        str = '';
    if(len <= numRows){
        return s;
    }
    for(var i = 0; i < len; i++){
        arr.push(s[i]);
        if((i % period_len) >= numRows - 1){
            for(var j = 0; j < numRows - 2; j++){
                arr.push('*');
            }
        }
    }
    console.log(arr);
    for(var i = 0; i < numRows; i++){
        var index = i;
        while(index < arr.length){
            if(arr[index] != '*'){
                str += arr[index];
            }
            index += numRows;
        }
    }
    return str;
};

console.log(convert('AAqwee',3));
