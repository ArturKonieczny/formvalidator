export default function isInteger(value) {
  const testValue = value.trim().replace(/ /g, '').replace(/-/g, '');

  return Number.isInteger(testValue);
}
