const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArray: [],
  getLength() {
    return this.chainArray.length;
  },
  addLink(value) {
    // add empty link if no argument is passed
    if (value === undefined) {
      this.chainArray.push('( )');
    } else {
      this.chainArray.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    if (typeof position !== "number" || position < 1 || position > this.chainArray.length) {
      this.chainArray = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chainArray.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chainArray.reverse();
    return this;
  },
  finishChain() {
    const result = this.chainArray.join("~~");
    this.chainArray = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
