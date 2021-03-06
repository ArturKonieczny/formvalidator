/**
 * Checks if given value is empty.
 * @param  {String}  value Value to be tested
 * @return {Boolean}       True if valid
 */
module.exports = function isEmpty(value) {
  const testValue = value.trim().replace(/ /g, '');

  return testValue.length !== 0;
};
