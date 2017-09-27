const { expect } = require('chai');
const isPositive = require('../../../src/formfield/validatefield/isPositive');
const testCases = require('./testCases');

describe('isPositive results', () => {
  it('should be a function', () => {
    expect(isPositive).to.be.a('function');
  });

  it('should accept at lesat one parameter', () => {
    expect(isPositive.length).to.equal(1);
  });

  it('should be named isPositive', () => {
    expect(isPositive.name).to.equal('isPositive');
  });

  testCases.input.forEach((testCase, index) => {
    it('should return a Boolean', () => {
      const result = isPositive(testCase);

      expect(result).to.be.a('Boolean');
    });

    it(`value returned should equal ${testCases.output[index]}`, () => {
      const result = isPositive(testCase);

      expect(result).to.equal(testCases.output[index]);
    });
  });
});
