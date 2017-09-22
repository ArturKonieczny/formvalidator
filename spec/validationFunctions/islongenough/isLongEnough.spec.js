const { expect } = require('chai');
const isLongEnough = require('../../../src/formfield/validatefield/isLongEnough');
const testCases = require('./testCases');

describe('isLongEnough results', () => {
  it('should be a function', () => {
    expect(isLongEnough).to.be.a('function');
  });

  it('should accept at least one parameter', () => {
    expect(isLongEnough.length).to.equal(1);
  });

  it('should be named isLongEnough', () => {
    expect(isLongEnough.name).to.equal('isLongEnough');
  });

  testCases.input.forEach((testCase, index) => {
    it('should return a Boolean', () => {
      const result = isLongEnough(testCase[0], testCase[1]);

      expect(result).to.be.a('Boolean');
    });

    it(`value returned should equal ${testCases.output[index]}`, () => {
      const result = isLongEnough(testCase[0], testCase[1]);

      expect(result).to.equal(testCases.output[index]);
    });
  });
});
