const { expect } = require('chai');
const VForm = require('../index');

describe('module exports', () => {
  it('should be a function', () => {
    expect(VForm).to.be.a('function');
  });

  it('should accept one parameter', () => {
    expect(VForm.length).to.equal(1);
  });

  it('should be named VForm', () => {
    expect(VForm.name).to.equal('VForm');
  });
});
