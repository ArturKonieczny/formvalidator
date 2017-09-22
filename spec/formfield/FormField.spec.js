const { expect } = require('chai');
const FormField = require('../../src/formfield');
const testCases = require('./testCases');

describe('FormField results', () => {
  testCases.forEach((testCase) => {
    it('should be an Object', () => {
      const result = new FormField(testCase.input);

      expect(result).to.be.an('Object');
    });

    it(`Object returned should have ${Object.keys(testCase.output).length} properties`, () => {
      const result = new FormField(testCase.input);

      expect(Object.keys(result).length).to.equal(Object.keys(testCase.output).length);
    });

    it('should have "fieldId" property', () => {
      const result = new FormField(testCase.input);

      expect(result).to.have.property('fieldId');
    });

    it('property "fieldId" should be a String', () => {
      const result = new FormField(testCase.input);

      expect(result.fieldId).to.be.a('String');
    });

    it('should have "fieldValue" property', () => {
      const result = new FormField(testCase.input);

      expect(result).to.have.property('fieldValue');
    });

    it('property "fieldValue" should be a String', () => {
      const result = new FormField(testCase.input);

      expect(result.fieldValue).to.be.a('String');
    });

    it(`property "fieldValue" should be equal ${testCase.output.fieldValue}`, () => {
      const result = new FormField(testCase.input);

      expect(result.fieldValue).to.be.equal(testCase.output.fieldValue);
    });

    it('should have "validation" property', () => {
      const result = new FormField(testCase.input);

      expect(result).to.have.property('validation');
    });

    it('property "validation" should be an Array', () => {
      const result = new FormField(testCase.input);

      expect(result.validation).to.be.an('Array');
    });

    it('should have "valid" property', () => {
      const result = new FormField(testCase.input);

      expect(result).to.have.property('valid');
    });

    it('property "valid" should be Boolean', () => {
      const result = new FormField(testCase.input);

      expect(result.valid).to.be.an('Boolean');
    });

    it(`property "valid" should be equal ${testCase.output.valid}`, () => {
      const result = new FormField(testCase.input);

      expect(result.valid).to.be.equal(testCase.output.valid);
    });

    it('should have "isRequired" property', () => {
      const result = new FormField(testCase.input);

      expect(result).to.have.property('isRequired');
    });

    it('property "isRequired" should be Boolean', () => {
      const result = new FormField(testCase.input);

      expect(result.isRequired).to.be.an('Boolean');
    });

    it(`property "isRequired" should be equal ${testCase.output.isRequired}`, () => {
      const result = new FormField(testCase.input);

      expect(result.isRequired).to.be.equal(testCase.output.isRequired);
    });

    it(`.validate ${testCase.output.fieldId} should return ${testCase.output.valid}`, () => {
      const result = new FormField(testCase.input);

      expect(result.validate()).to.equal(testCase.output.valid);
    });
  });
});
