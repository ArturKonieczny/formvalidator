# Form Validator

Simple package for easy form validation.

## Installation

```bash
npm install formvalidator
```

or simply download and "require" this repository.

## Usage

```js
const FormValidator = require('formvalidator');

const myForm = new FormValidator(settings);

```

## Sample settings

```js
[
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
```

## Available Methods

1. FormValidator:

```js
.checkForm();
```

Checks if all required fields are valid without validating them.

```js
.validateForm();
```

Validates all form fields and runs .checkForm().

```js
.getFormField(name);
```

Returns a form field Object that was created using *settings*.

2. FormField

```js
.validate()
```

Validates the field using validation functions provided in *settings*.

```js
.set(property, value);
```

If set property is 'fieldValue', .validate() will be run.

```js
.get(property);
```

## Available validation functions

```js
isEmail(value);
isEmpty(value);
isInteger(value);
isLongEnough(value, valueLength); //at the moment package only checks default length which is 10. TO DO
isNip(value);
isPositive(value);
isPostCode(value);
```
