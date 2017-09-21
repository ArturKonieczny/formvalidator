const validateField = require('./validatefield');

module.exports = class FormField {
  constructor(fieldConfig) {
    this.fieldId = fieldConfig.fieldId;
    this.fieldValue = fieldConfig.fieldValue || '';
    this.validation = fieldConfig.validation || [];
    this.valid = fieldConfig.valid || false;
    this.isRequired = fieldConfig.isRequired || false;
  }

  validate() {
    let isValid = true;

    if (this.isRequired) {
      this.validation.forEach((functionName) => {
        const validationFunction = validateField[functionName] || (() => true);

        if (!validationFunction(this.fieldValue)) {
          isValid = false;
        }
      });
    }

    this.valid = isValid;

    return this.valid;
  }

  set(property, newValue) {
    this[property] = newValue;
    if (property === 'fieldValue') {
      this.validate();
    }
  }

  get(property) {
    return this[property];
  }
};
