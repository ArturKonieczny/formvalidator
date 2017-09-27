/**
 * Checks if given value is positive.
 * @param  {String}  value Value to be tested
 * @return {Boolean}       True if valid
 */
module.exports = function isPositive(value) {
  const testValue = value.trim().replace(/ /g, '');

  return Number(testValue) >= 0;
};
