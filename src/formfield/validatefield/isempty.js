module.exports = function isEmpty(value) {
  const testValue = value.trim().replace(/ /g, '');

  return testValue.length !== 0;
};
