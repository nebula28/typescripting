function Log(target: any, propertyName: string | Symbol) {
    console.log('in property decorator Log');
    console.log(target, propertyName);
}

// : PropertyDescriptor
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('in accessor decorator Log2');
    console.log(target);
    console.log(name);
    console.log(descriptor);
    // can set/get/writeable/enumerable
    // return {}
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('in method decorator Log3');
    console.log(target);
    console.log(name); 
    console.log(descriptor); 
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('in parameter decorator Log4');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0){
            this._price = val;
        } else {
            throw new Error('price must be greater than 0');
        }
    }

    constructor(title: string, price: number){
        this.title = title;
        this._price = price;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

const prod = new Product('book', 12);

// decorator function
function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            // this refers to the object it is bound to
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}

class Printer {
    message = 'This works';

    @AutoBind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector('button');
// bind(p) sets the context to the p object instead of the element that the click event listener is set to
//button?.addEventListener('click', p.showMessage.bind(p));

// AutoBind decorator binds the p object to showMessage
button?.addEventListener('click', p.showMessage);

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[], // ['required', 'positive']
    }
}

const registeredValidators: ValidatorConfig = {};

// descriptor is not an argument for property decorators
function Required(target: any, propName: string) {
    // .name returns the name of the constructor
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
    };
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }

    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form');
courseForm?.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if (!validate(createdCourse)) {
        alert('invalid course, try again . . .');
        return;
    }
    console.log(createdCourse);
});

// https://github.com/typestack/class-validator
