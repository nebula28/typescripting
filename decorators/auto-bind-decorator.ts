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