/**
 * Checks if given value is e-mail.
 * @param  {String}  value Value to be tested
 * @return {Boolean}       True if valid
 */
module.exports = function isEmail(value) {
  const testValue = value.trim();
  const testRegExp = /\S+@\S+\.\S+/;

  return testRegExp.test(testValue);
};
