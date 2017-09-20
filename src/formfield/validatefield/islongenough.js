const defaultLength = 10;

export default function isLongEnough(value, valueLength = defaultLength) {
  const testValue = value.trim();

  return testValue > valueLength;
}
