const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // Convert str and addition to strings
  str = String(str);
  let addition = options.addition !== undefined ? String(options.addition) : '';

  // Set default values for optional parameters
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';

  // Create the repeated addition string
  let additionStr = Array(additionRepeatTimes).fill(addition).join(additionSeparator);

  // Combine str with addition and repeat it
  let result = Array(repeatTimes).fill(str + additionStr).join(separator);

  return result;
}

module.exports = {
  repeater
};
