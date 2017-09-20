export default function isEmail(value) {
  const testValue = value.trim();
  const testRegExp = /\S+@\S+\.\S+/;

  return testRegExp.test(testValue);
}
