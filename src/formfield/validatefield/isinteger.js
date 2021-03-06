/**
 * Checks if given value is an integer.
 * @param  {String}  value Value to be tested
 * @return {Boolean}       True if valid
 */
module.exports = function isInteger(value) {
  const testValue = value.trim().replace(/ /g, '');

  return Number.isInteger(Number(testValue));
};
