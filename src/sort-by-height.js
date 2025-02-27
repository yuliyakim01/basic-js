const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Store the positions of -1
  const positions = arr.map((val, index) => (val === -1 ? index : null)).filter(index => index !== null);

  // Sort the array while removing -1
  const sortedValues = arr.filter(val => val !== -1).sort((a, b) => a - b);

  // Reinsert -1 at their original positions
  positions.forEach(index => sortedValues.splice(index, 0, -1));

  return sortedValues;
}


module.exports = {
  sortByHeight
};
