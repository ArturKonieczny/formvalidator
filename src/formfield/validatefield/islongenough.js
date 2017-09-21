const defaultLength = 10;

module.exports = function isLongEnough(value, valueLength = defaultLength) {
  const testValue = value.trim();

  return testValue > valueLength;
};
