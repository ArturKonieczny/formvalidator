export const sampleForm = {
  ammount: {
    fieldId: 'ammount',
    label: 'Liczba Opakowań:',
    fieldValue: '0',
    validation: ['isEmpty', 'isInteger'],
    classes: [],
    type: 'number',
    valid: 'true'
  },
  phone: {
    fieldId: 'phone',
    label: 'Telefon:',
    fieldValue: '',
    validation: ['isEmpty', 'isInteger'],
    classes: [],
    type: 'number',
    valid: 'true'
  },
  notes: {
    fieldId: 'notes',
    label: 'Uwagi dodatkowe:',
    fieldValue: '',
    validation: ['isEmpty', 'isLongEnough'],
    classes: [],
    type: 'textarea',
    valid: 'true'
  },
  email: {
    fieldId: 'email',
    label: 'E-mail:',
    fieldValue: '',
    validation: ['isEmpty', 'isEmail'],
    classes: [],
    type: 'text',
    valid: 'true'
  },
  nip: {
    fieldId: 'nip',
    label: 'NIP:',
    fieldValue: '',
    validation: ['isEmpty', 'isInteger'],
    classes: [],
    type: 'text',
    valid: 'true'
  },
  postcode: {
    fieldId: 'postcode',
    label: 'Kod pocztowy:',
    fieldValue: '',
    validation: ['isEmpty', 'isPostCode'],
    classes: [],
    type: 'text',
    valid: 'true'
  }
};
