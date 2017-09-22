const { expect } = require('chai');
const isEmail = require('../../../src/formfield/validatefield/isemail');
const testCases = require('./testCases');

describe('isEmail results', () => {
  it('should be a function', () => {
    expect(isEmail).to.be.a('function');
  });

  it('should accept one parameter', () => {
    expect(isEmail.length).to.equal(1);
  });

  it('should be named isEmail', () => {
    expect(isEmail.name).to.equal('isEmail');
  });

  testCases.input.forEach((testCase, index) => {
    it('should return a Boolean', () => {
      const result = isEmail(testCase);

      expect(result).to.be.a('Boolean');
    });

    it(`value returned should equal ${testCases.output[index]}`, () => {
      const result = isEmail(testCase);

      expect(result).to.equal(testCases.output[index]);
    });
  });
});
