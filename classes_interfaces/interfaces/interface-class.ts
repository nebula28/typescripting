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
    readonly name: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30;

    constructor(name: string){
        this.name = name;
    }
    greet(phrase:string) {
        console.log(phrase + ' ' + this.name);
    }
};

let user1: Greetable;

user1 = new Person('Josh');
// cannot change because readonly
// user1.name = 'Jess';

user1.greet('Hi there, my name is');
console.log(user1);