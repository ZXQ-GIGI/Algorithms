/**
 * @param { Any[] } testCases
 * @param { Callback } callback
 * @param { Boolean } isLog
 * @param { Any[] }
 */

const cases = [
  {
    matrix: [],
    value: []
  }, {
    matrix: [],
    value: [],
  }
]

function commonTest(testCases, callback, isLog) {

  var log = function(index, params, result) {
    console.log(`--第${index}个测试用例--`);
    console.log('参数: ');
    console.log(params);
    console.log('结果: ');
    console.log(result);
    console.log('\n');
  }
  console.log(testCases, callback, isLog);
  const results = [];
  for (var t = 0; t < testCases.length; t++) {
    results[t] = callback(...testCases[t]) || 'No Return';
    isLog && log(t, testCases[t], results[t]);
  }
}

module.exports = commonTest;
