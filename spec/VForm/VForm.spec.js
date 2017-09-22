const { expect } = require('chai');
const VForm = require('../../index');
const testCases = require('./testCases');

describe('VForm results', () => {
  testCases.forEach((testCase) => {
    it('should be an Object', () => {
      const result = new VForm(testCase.input);

      expect(result).to.be.an('Object');
    });

    it(`Object returned should have ${Object.keys(testCase.output).length} properties`, () => {
      const result = new VForm(testCase.input);

      expect(Object.keys(result).length).to.equal(Object.keys(testCase.output).length);
    });

    it('should have "form" property', () => {
      const result = new VForm(testCase.input);

      expect(result).to.have.property('form');
    });

    it('should have "isValid" property', () => {
      const result = new VForm(testCase.input);

      expect(result).to.have.property('isValid');
    });

    it('property "form" should be an Object', () => {
      const result = new VForm(testCase.input);

      expect(result.form).to.be.an('Object');
    });

    it(`Property "form" should have ${Object.keys(testCase.output.form).length} properties`, () => {
      const result = new VForm(testCase.input);

      expect(Object.keys(result.form).length).to.equal(Object.keys(testCase.output.form).length);
    });

    it('property "isValid" should be Boolean', () => {
      const result = new VForm(testCase.input);

      expect(result.isValid).to.be.a('Boolean');
    });

    it(`.checkForm should return ${testCase.output.isValid}`, () => {
      const result = new VForm(testCase.input);

      expect(result.checkForm()).to.equal(testCase.output.isValid);
    });

    it(`.validateForm should return ${testCase.output.isValid}`, () => {
      const result = new VForm(testCase.input);

      expect(result.validateForm()).to.equal(testCase.output.isValid);
    });
  });
});
