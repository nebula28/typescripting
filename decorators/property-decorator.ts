function Log(target: any, propertyName: string | Symbol) {
    console.log('in property decorator Log');
    // target returns prototype of Product object and propertyName returns the name of the property -> title
    console.log(target, propertyName);
}

class Product {
    @Log
    title: string;
    // underscore means private
    private _price: number;

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

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}