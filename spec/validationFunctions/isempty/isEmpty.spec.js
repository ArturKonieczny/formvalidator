const { expect } = require('chai');
const isEmpty = require('../../../src/formfield/validatefield/isempty');
const testCases = require('./testCases');

describe('isEmpty results', () => {
  it('should be a function', () => {
    expect(isEmpty).to.be.a('function');
  });

  it('should accept one parameter', () => {
    expect(isEmpty.length).to.equal(1);
  });

  it('should be named isEmpty', () => {
    expect(isEmpty.name).to.equal('isEmpty');
  });

  testCases.input.forEach((testCase, index) => {
    it('should return a Boolean', () => {
      const result = isEmpty(testCase);

      expect(result).to.be.a('Boolean');
    });

    it(`value returned should equal ${testCases.output[index]}`, () => {
      const result = isEmpty(testCase);

      expect(result).to.equal(testCases.output[index]);
    });
  });
});
