// ! tells ts not to worry that a button will exist here
var button = document.querySelectorAll('button');
// ts will complain about this line of code 
button.addEventListener('click', function () { return console.log('clicked...'); });
