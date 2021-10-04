// ! tells ts not to worry that a button will exist here
const button = document.querySelector('button')!;

// ts will complain about this line of code being null without the ! in the line above
button.addEventListener('click', () => console.log('clicked...'));