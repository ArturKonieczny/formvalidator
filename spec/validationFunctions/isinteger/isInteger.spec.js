const { expect } = require('chai');
const isInteger = require('../../../src/formfield/validatefield/isInteger');
const testCases = require('./testCases');

describe('isInteger results', () => {
  it('should be a function', () => {
    expect(isInteger).to.be.a('function');
  });

  it('should accept one parameter', () => {
    expect(isInteger.length).to.equal(1);
  });

  it('should be named isInteger', () => {
    expect(isInteger.name).to.equal('isInteger');
  });

  testCases.input.forEach((testCase, index) => {
    it('should return a Boolean', () => {
      const result = isInteger(testCase);

      expect(result).to.be.a('Boolean');
    });

    it(`value returned should equal ${testCases.output[index]}`, () => {
      const result = isInteger(testCase);

      expect(result).to.equal(testCases.output[index]);
    });
  });
});
