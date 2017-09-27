const defaultLength = 10;

/**
 * Checks if given value is long enough.
 * @param  {String}  value Value to be tested
 * @param  {Number}  valueLength  Required length.
 * @return {Boolean}       True if valid
 */
module.exports = function isLongEnough(value, valueLength = defaultLength) {
  const testValue = value.trim();

  return testValue.length > valueLength;
};
