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

  getFormField(fieldName) {
    return this.form[fieldName];
  }
};
