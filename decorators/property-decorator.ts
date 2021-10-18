function Log(target: any, propertyName: string | Symbol) {
    console.log('in property decorator Log');
    // target returns prototype of Product object and propertyName returns the name of the property -> title
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('in accessor decorator Log2');
    console.log(target); // Product prototype
    console.log(name); // price - name of setter
    console.log(descriptor); // set - for set price (get/set)
}

// if target is static it points to the constructor function
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('in method decorator Log3');
    console.log(target); // Product prototype
    console.log(name); // getPriceWithTax - name of method
    console.log(descriptor); // getPriceWithTax (value/writable)
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('in parameter decorator Log4');
    console.log(target); // Product prototype
    console.log(name); // getPriceWithTax - name of method argument is used in
    console.log(position); // position of argument (index: 0)
}

class Product {
    // property decorator
    @Log
    title: string;
    // underscore means private
    private _price: number;

    // accessor decorator
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

    // method decorator
    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}