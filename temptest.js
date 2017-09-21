const VForm = require('./src');
const sampleForm = require('./resources/sampleform');

const form = new VForm(sampleForm);

console.log(form.form.nip);

form.form.nip.set('fieldValue', '725-18-01-126');
console.log(form.form.nip);
console.log(form.form.nip.get('valid'));

console.log(form.validateForm());
console.log(form);
