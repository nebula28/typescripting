"use strict";
class Department {
    // constructor(id: string, name: string) {
    //     this.id = id;
    //     this.name = name;
    // }
    // shorthand contructor - readonly means the value cannot be altered
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        // public is default, private is not -> these are called 'modifiers'
        this.employees = [];
    }
    // you can pass keyword this to describe method to tell typescript 'this' refers only to an instance of the Department class
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const marketing = new Department('d1', 'Marketing');
// console.log(marketing);
marketing.addEmployee('Josh');
marketing.addEmployee('Jess');
marketing.addEmployee('Bailey');
marketing.describe();
marketing.printEmployeeInfo();
// not a good practice to allow object property to be publicly changed
// marketing.employees[3] = 'public';
// this code returns undefined as there is no name specified for the accounting object
// typescript will throw an error because the type for this was set to Department
// const accounting = { describe: marketing.describe};
// accounting.describe();
// this code works because the accounting object has a name property like a Department object would
// const accounting = {
//     name: 'accounting',
//     describe: marketing.describe
// }
// accounting.describe();
