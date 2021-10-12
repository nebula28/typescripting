const names = ['josh', 'jess', 'bailey'];

// Array is a generic type
// type Array requires at least one type Array<number>
//const names2: Array = [];

const names3: any[] = [];

const names4: Array<string> = []; // same as :string[]

const names5: Array<string | number> = [];

const names6: Array<any> = [];

// : Promise<unknown> w/o Promise<string>
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is done');
    } , 2000)
})

promise.then(data => {
    // typescript knows the data will be of type string
    data.toUpperCase();
})