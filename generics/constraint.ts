function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'jess'}, {age: 32});
console.log(mergedObj.age);

interface Lengthy {
    length: number;
}

// countAndDescribe returns type: tuple [T, string]
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let description = 'did not receive a value';
    if (element.length === 1) {
        description = 'received 1 value';
    } else if (element.length > 1) {
        description = 'received ' + element.length + ' values' ;
    }
    return [element, description];
}

console.log(countAndDescribe('Hi there')); // received 1 value 

console.log(countAndDescribe(['Hello', 'Goodbye'])); // received # values

console.log(countAndDescribe([])); // did not receive a value