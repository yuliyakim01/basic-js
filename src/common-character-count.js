const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const map = {};

  // Count occurrences of each character in s1
  for (const char of s1) {
    map[char] = (map[char] || 0) + 1;
  }

  // Compare with characters in s2 and count common occurrences
  for (const char of s2) {
    if (map[char]) {
      count++;
      map[char]--; // Decrease count to prevent duplicate matching
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
