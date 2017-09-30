var readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function search(i, str, result, len) {
    if(1 == result.length) {
        result.push(str[i]);
        str.shift();
    }
    if(str.length == 0) {
        return true;
    }
    for(var j = 0; j < str.length; j++) {
        if((str[j] * result[result.length - 1]) % 4 == 0) {
            result.push(str[j]);
            var tmp_str = str.slice(0);
            tmp.splice(j,1);
            var tmp_result = result.slice(0);
            search(i, tmp_str, tmp_result);
        }
    }
    return false;
}

rl.on('line',function(line) {
    var arr = line.split('\n');
    var strCount = arr[0];
    var result = [];
    for(var i = 2; i < arr.length; i += 2) {
        var str = arr[i].split(' ').sort(function(val1, val2) {
            return val1 - val2;
        }).join('');
        console.log(search(1, str, result, str.length) ? 'YES' : 'NO');
    }
});
