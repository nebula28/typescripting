// enable experimentalDecorators in tsconfig.json
function Logger(logger: string) {
    console.log('logger factory . . .');
    return function(constructor: Function) {
        console.log(logger);
        console.log(constructor);
    }
    
}

function WithTemplate(template: string, hookId: string)  {
    console.log('template factory . . .');
    // _constructor tells typescript we know it is a variable that's not being used and it can be ignored
    // return function(_constructor: Function) {
    return function(constructor: any) {
        console.log('rendering template . . .');
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if(hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
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