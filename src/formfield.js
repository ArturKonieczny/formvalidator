import validateField from './validatefield';

export default class FormField {
  constructor(fieldConfig) {
    this.fieldId = fieldConfig.fieldId;
    this.fieldValue = fieldConfig.fieldValue || '';
    this.validation = fieldConfig.validation || [];
    this.valid = fieldConfig.valid || false;
  }

  validate() {
    let isValid = true;

    this.validation.forEach((functionName) => {
      const validationFunction = validateField[functionName] || (() => true);

      if (!validationFunction(this.fielfValue)) {
        isValid = false;
      }
    });

    this.valid = isValid;
  }

  setValue(newValue) {
    this.fieldValue = newValue;
    this.validate();
  }
}
