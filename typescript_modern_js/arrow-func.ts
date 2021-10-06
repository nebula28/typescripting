const add = (a: number, b: number) => {
   return a + b;
}
add(2, 5);

const subtract = (a: number, b: number) => a - b;
subtract(3, 1);

const printOut: (arg: number | string) => void = arg => console.log(arg);
printOut(add(2, 4));

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', e => console.log(e));
}
