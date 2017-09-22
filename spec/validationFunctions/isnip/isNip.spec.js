const { expect } = require('chai');
const isNip = require('../../../src/formfield/validatefield/isNip');
const testCases = require('./testCases');

describe('isNip results', () => {
  it('should be a function', () => {
    expect(isNip).to.be.a('function');
  });

  it('should accept at lesat one parameter', () => {
    expect(isNip.length).to.equal(1);
  });

  it('should be named isNip', () => {
    expect(isNip.name).to.equal('isNip');
  });

  testCases.input.forEach((testCase, index) => {
    it('should return a Boolean', () => {
      const result = isNip(testCase);

      expect(result).to.be.a('Boolean');
    });

    it(`value returned should equal ${testCases.output[index]}`, () => {
      const result = isNip(testCase);

      expect(result).to.equal(testCases.output[index]);
    });
  });
});
