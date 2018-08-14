'use strict';
var commonTest = require('../test.js');

var matrix1 = [
  [1, 1, 1, 1, 0],
  [1, 0, 1, 1, 1],
  [0, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1]
];

const matrix2 = [
  [1, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 0, 1, 1]
];

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function setMatrixZero(matrix) {
  
}

function setZeroWithNoSpace(matrix) {
  var M = matrix.length;
  var N = matrix[0].length;
  var i = j = 0;

  console.log('1: ');
  console.log(matrix);

  for (i = 0; i < M; i++) {
    for (j = 0; j < N; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[i][N - 1] = 0;
        matrix[0][j] = 0;
        matrix[M - 1][j] = 0;
      }
    }
  }
  console.log('2: ');
  console.log(matrix);

  for (j = 1; j < N - 1; j++) {
    if(matrix[0][j] === 0 && matrix[M - 1][j] === 0) {
      for (i = 0; i < M; i++) {
        matrix[i][j] = 0;
      }
    }
  }

  console.log('3: ');
  console.log(matrix);

  for (i = 1; i < M - 1; i++) {
    if (matrix[i][0] === 0 && matrix[i][N - 1] === 0) {
      for (j = 0; j < N; j++) {
        matrix[i][j] = 0;
      } 
    }
  }

  console.log('4: ');
  console.log(matrix);

  return matrix;
}

function setZero(matrix) {
  console.log('de', matrix);
  var M = matrix.length;
  var N = matrix[0].length;
  var i = j = 0;
  var result = [];
  var m = n = 0;
  
  for (i = 0; i < M; i++) {
    result[i] = [];
    for (j = 0; j < N; j++) {
      result[i][j] = matrix[i][j];
      if (matrix[i][j] === 0) {
        for (m = 0; m < M; m++) {
          result[m][j] = 0;
        }
        for (n = 0; n < N; n++) {
          result[i][n] = 0;
        }
      }
    }
    console.log(result);
  }
}

console.log(commonTest);
commonTest([
  { matrix1 },
  { matrix2 }
], setZero, true);


// setZeroWithNoSpace(matrix2);
// setZero(matrix2)




