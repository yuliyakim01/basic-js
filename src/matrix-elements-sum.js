const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      //check the number above the current one, if it's zero, keep going
      //if the number is not zero, add it to sum
      if (i > 0  && matrix[i - 1][j] === 0) {
        continue;
      }
      sum += matrix[i][j]
    };
  };

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
