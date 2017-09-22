const { expect } = require('chai');
const isPostCode = require('../../../src/formfield/validatefield/isPostCode');
const testCases = require('./testCases');

describe('isPostCode results', () => {
  it('should be a function', () => {
    expect(isPostCode).to.be.a('function');
  });

  it('should accept one parameter', () => {
    expect(isPostCode.length).to.equal(1);
  });

  it('should be named isPostCode', () => {
    expect(isPostCode.name).to.equal('isPostCode');
  });

  testCases.input.forEach((testCase, index) => {
    it('should return a Boolean', () => {
      const result = isPostCode(testCase);

      expect(result).to.be.a('Boolean');
    });

    it(`value returned should equal ${testCases.output[index]}`, () => {
      const result = isPostCode(testCase);

      expect(result).to.equal(testCases.output[index]);
    });
  });
});
