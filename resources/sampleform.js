module.exports = [
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
    isRequired: true
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
    fieldValue: '',
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
