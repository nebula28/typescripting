// html paragraph element | null
// const paragraph = document.querySelector('p');
// html element | null
// const paragraph = document.getElementById('message-output');

// without type casting
// const userInput = document.getElementById('user-input')!;

// typescript will throw an error without typecasting Property 'value' does not exist on type 'HTMLElement
// userInput.value = 'Hi there...';

// with type casting (option 1)
// const userInput = <HTMLInputElement>document.getElementById('user-input');

// with type casting (option 2)
const userInput = document.getElementById('user-input') as HTMLInputElement;

// typescript knows input has a value attribute
userInput.value = 'Hi there...';

// ! means the expression in front of it will never yeild null
// type casting to HTMLInputElement tells typescript the expression will never yeild null as well

// if you are unsure an element will exist do this:
if (userInput) {
    (userInput as HTMLInputElement).value = 'Goodbye!';
}