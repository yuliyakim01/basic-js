const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // step 1: handle missing arg
  if (!date) {
    return "Unable to determine the time of year!";
  }

  // step 2: strictly validate that `date` is a true Date object
  if (
    !(date instanceof Date) || // ensures it was created via `new Date()`
    date.constructor !== Date || // prevents constructor spoofing
    Object.prototype.toString.call(date) !== "[object Date]" || // ensures correct internal type
    Object.getPrototypeOf(date) !== Date.prototype || // prevents prototype manipulation
    Object.getOwnPropertyNames(date).length > 0 || // ensures no additional properties exist (Fake Date objects)
    typeof date.getTime !== "function" || // ensures required method exists
    typeof date.getMonth !== "function" || // ensures required method exists
    isNaN(date.getTime()) // ensures the date is valid
  ) {
    throw new Error("Invalid date!");
  }

  // Step 3: Determine season based on month
  const month = date.getMonth();
  if (month >= 2 && month <= 4) return "spring"; // March - May
  if (month >= 5 && month <= 7) return "summer"; // June - August
  if (month >= 8 && month <= 10) return "autumn"; // September - November
  return "winter"; // December - February
}

module.exports = {
  getSeason,
};



