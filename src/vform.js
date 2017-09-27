const FormField = require('./formfield');

module.exports = class VForm {
  constructor(config) {
    this.form = {};
    this.isValid = false;
    config.forEach((formItem) => {
      const { fieldId } = formItem;

      this.form[fieldId] = new FormField(formItem);
    });
  }
  /* eslint-disable guard-for-in*/
  /**
   * Checks if all the form fields are valid.
   * @return {Boolean} True if all fields are Valid
   */
  checkForm() {
    for (const formFieldId in this.form) {
      const formField = this.form[formFieldId];

      if (formField.get('isRequired') && !formField.get('valid')) {
        this.isValid = false;

        return this.isValid;
      }
    }

    this.isValid = true;

    return this.isValid;
  }

  /**
   * Validates all form fields.
   * @return {Boolean} True if all fields are valid
   */
  validateForm() {
    for (const formFieldId in this.form) {
      const formField = this.form[formFieldId];

      formField.get('isRequired');
      if (formField.get('isRequired')) {
        formField.validate();
      }
    }

    return this.checkForm();
  }

  /**
   * Returns a form object field that was created with config.
   * @param  {String} fieldName Name of form field
   * @return {Object}           FormField Object
   */
  getFormField(fieldName) {
    return this.form[fieldName];
  }
};
