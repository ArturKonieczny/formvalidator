const validateField = require('./validatefield');

module.exports = class FormField {
  constructor(fieldConfig) {
    this.fieldId = fieldConfig.fieldId;
    this.fieldValue = fieldConfig.fieldValue || '';
    this.validation = fieldConfig.validation || [];
    this.valid = fieldConfig.valid || true;
    this.isRequired = fieldConfig.isRequired || false;
  }

  /**
   * Validates form field.
   * @return {Boolean} True if form field is valid
   */
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

  /**
   * Sets the given property value to be equal newValue and then runs .validate();
   * @param {String} property Property name
   * @param {String} newValue New value.
   * @Returns {None} Nothing
   */
  set(property, newValue) {
    this[property] = newValue;
    this.validate();
  }

  get(property) {
    return this[property];
  }
};
