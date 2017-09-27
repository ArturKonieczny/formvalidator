/**
 * Checks if given value is NIP.
 * @param  {String}  value Value to be tested
 * @return {Boolean}       True if valid
 */
/* eslint-disable no-magic-numbers */
module.exports = function isNip(value) {
  const testValue = value.trim().replace(/ /g, '').replace(/-/g, '');

  if (testValue.length !== 10) {
    return false;
  }
  const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
  let controlSum = 0;

  for (let index = 0; index < weights.length; index++) {
    controlSum += testValue[index] * weights[index];
  }

  if (Number(testValue[9]) !== (controlSum % 11)) {
    return false;
  }

  return true;
};
