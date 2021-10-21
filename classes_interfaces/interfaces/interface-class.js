"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(name) {
        this.age = 30;
        if (name) {
            this.name = name;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        console.log('Hi');
    }
}
;
let user1;
let user2;
user1 = new Person('Josh');
// Person with no name because name(?) is optional now
user2 = new Person();
// cannot change because readonly
// user1.name = 'Jess';
user1.greet('Hi there, my name is');
console.log(user1);
