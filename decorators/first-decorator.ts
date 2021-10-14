// enable experimentalDecorators in tsconfig.json
function Logger(constructor: Function) {
    console.log('logging...');
    console.log(constructor);
}

@Logger
class Person {
    name = 'josh';
    constructor() {
        console.log('created person...');
    }
}

const person = new Person();

console.log(person);