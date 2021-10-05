// noImplicitAny causes typescript to throw an error for parameter data
// function sendAnalaytics(data) {
function sendAnalaytics(data: string) {
    console.log(data);
}

sendAnalaytics('data');

// noImplicitAny is fine for variables
let logged;
// logged: any
logged = true;

// ! at the end of this line or ? after buttont to clear this error = htmlbutton | null
// this is due to strictNullChecks: true
const button = document.querySelector('button');

// button.addEventListener('click', () => console.log('clicked'));
// button?.addEventListener('click', () => console.log('clicked'));sendAnalaytics



function clickHandler(message: string) {
    // set "noUnusedLocals": true to throw error for unused local variables
    let username = 'josh';
    console.log('clicked' + message);
}


// it's best to work around the error vs using ? or !
if (button) {
    // will throw error due to strictBindCallApply: true
    button.addEventListener('click', clickHandler.bind(null, 'clicking'));
}

// set "noUnusedParameters": true to throw error for unused parameters
function willDo(name: string) {
    console.log('done');
}

// set "noImplicitReturns": true to throw error for cases that don't reach return statement
function checkIt(num: number, num2: number) {
    if (num + num2 > 0) {
        return num + num2;
    }
    // or place return statement
    // return;
}

checkIt(-1, 1);
