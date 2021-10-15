// enable experimentalDecorators in tsconfig.json
function Logger(log: string) {
    return function(constructor: Function) {
        console.log(log);
        console.log(constructor);
    }
    
}

@Logger('logging person . . .');
class Person {
    name = 'josh';
    constructor() {
        console.log('created person...');
    }
}

const person = new Person();

console.log(person);