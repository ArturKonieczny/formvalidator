/* eslint-disable no-magic-numbers */
export default function isNip(value) {
  const testValue = value.trim().replace(/ /g, '').replace(/-/g, '');
  const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
  let controlSum = 0;

  for (let index = 0; index < weights.length; index++) {
    controlSum += testValue[index] * weights[index];
  }

  if (Number(testValue[9]) !== (controlSum % 11)) {
    return false;
  }

  return true;
}