function Logger(logger: string) {
    console.log('logger factory . . .');
    return function(constructor: Function) {
        console.log(logger);
        console.log(constructor);
    }

}

function WithTemplate(template: string, hookId: string)  {
    console.log('template factory . . .');
    return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
        // returns new class
        return class extends originalConstructor {
            // _ ignores an unused argument
            // this overrides the Person constructor function
            // runs extra logic when Person class is instantiated
            constructor(..._: any[]) {
                super();
                console.log('rendering template . . .');
                const hookEl = document.getElementById(hookId);
                if(hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}

@Logger('logging person . . .')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'josh';
    constructor() {
        console.log('created person...');
    }
}

const person = new Person();

console.log(person);