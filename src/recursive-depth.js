const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Input must be an array");
    }

    // If no nested arrays, depth is 1
    if (!arr.some(element => Array.isArray(element))) {
      return 1;
    }

    // Recursively calculate depth for nested arrays
    return 1 + Math.max(...arr.map(element => 
      Array.isArray(element) ? this.calculateDepth(element) : 0
    ));
  }
}

module.exports = {
  DepthCalculator
};
