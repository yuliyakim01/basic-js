const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;

  //initialize empty board (with the same dimensions, initially filled with zeroes
  const result = Array.from( { length: rows }, () => Array(columns).fill(0));

  //iterate through each cell in the matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      //if current cell is true = there's a mine, update its neighbors
      if (matrix[i][j]) {
        //loop over all neighbors, so all 8 cells around it
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            const newRow = i + x;
            const newColumn = j + y;

            //check if neighbor is not a mine
            if (newRow >= 0 && newRow < rows
              && newColumn >= 0 && newColumn < columns 
              && !(x === 0 && y === 0)
              ) {
                result[newRow][newColumn]++;
              }
          }
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
