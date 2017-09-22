exports.input = [
  {
    fieldId: 'ammount',
    fieldValue: '0',
    validation: ['isEmpty', 'isInteger'],
    valid: true,
    isRequired: true
  },
  {
    fieldId: 'phone',
    fieldValue: '123456',
    validation: ['isEmpty', 'isInteger'],
    valid: true,
    isRequired: true
  },
  {
    fieldId: 'notes',
    fieldValue: '',
    validation: ['isEmpty', 'isLongEnough'],
    valid: true,
    isRequired: false
  },
  {
    fieldId: 'email',
    fieldValue: '111@gmail.com',
    validation: ['isEmpty', 'isEmail'],
    valid: true,
    isRequired: true
  },
  {
    fieldId: 'nip',
    fieldValue: '538-317-76-23',
    validation: ['isEmpty', 'isNip'],
    valid: true,
    isRequired: true
  },
  {
    fieldId: 'postcode',
    fieldValue: '11-000',
    validation: ['isEmpty', 'isPostCode'],
    valid: true,
    isRequired: true
  }
];

exports.output = {
  form: {
    ammount: {
      fieldId: 'ammount',
      fieldValue: '0',
      validation: ['isEmpty', 'isInteger'],
      valid: true,
      isRequired: true
    },
    phone: {
      fieldId: 'phone',
      fieldValue: '123456',
      validation: ['isEmpty', 'isInteger'],
      valid: true,
      isRequired: true
    },
    notes: {
      fieldId: 'notes',
      fieldValue: '',
      validation: ['isEmpty', 'isLongEnough'],
      valid: true,
      isRequired: true
    },
    email: {
      fieldId: 'email',
      fieldValue: '111@gmail.com',
      validation: ['isEmpty', 'isEmail'],
      valid: true,
      isRequired: true
    },
    nip: {
      fieldId: 'nip',
      fieldValue: '538-317-76-23',
      validation: ['isEmpty', 'isNip'],
      valid: true,
      isRequired: true
    },
    postcode: {
      fieldId: 'postcode',
      fieldValue: '11-000',
      validation: ['isEmpty', 'isPostCode'],
      valid: true,
      isRequired: true
    }
  },
  isValid: true
};
