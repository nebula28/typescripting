// type AddFn = (a: number, b: number) => number; this is more common than interface as functions
// annonymous interface as a function
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    readonly name?: string;
    // ? means the property might exist (optional property)
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    
    age = 30;

    constructor(name?: string){
        if (name) {
            this.name = name;
        }
    }
    greet(phrase:string) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        console.log('Hi');
    }
};

let user1: Greetable;
let user2: Greetable;

user1 = new Person('Josh');
// Person with no name because name(?) is optional now
user2 = new Person();
// cannot change because readonly
// user1.name = 'Jess';

user1.greet('Hi there, my name is');
console.log(user1);