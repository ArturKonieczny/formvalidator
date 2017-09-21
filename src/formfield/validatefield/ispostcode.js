module.exports = function isPostCode(value) {
  const testValue = value.trim().replace(/ /g, '');
  const testRegExp = /[0-9]{2}-[0-9]{3}/;

  return testRegExp.test(testValue);
};
