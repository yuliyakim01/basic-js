const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let catCounter = 0;
  let target = '^^';
  if (matrix === null) {
    return 0;
  }

  matrix.forEach(row => {
    row.forEach(cat => {
      if (cat === target) {
        catCounter++;
      }
    });
  });
  return catCounter;
}

module.exports = {
  countCats
};
