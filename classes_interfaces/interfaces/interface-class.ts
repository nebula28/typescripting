interface Greetable {
    name: string;

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

user1.greet('Hi there, my name is');
console.log(user1);