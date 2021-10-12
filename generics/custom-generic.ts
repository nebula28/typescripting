// function merge(objA: object, objB: object) {
//     return Object.assign(objA, objB);
// }

// console.log(merge({name: 'josh'}, {age: 30}));

// // does not work
// // const mergedObj = merge({name: 'jess'}, {age: 32});
// // mergedObj.name;

// // works
// const mergedObj = merge({name: 'jess'}, {age: 32}) as {name: string, age: number};
// mergedObj.name;


// custom generic type
// merge returns intersection type of : T & U
function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// type -> mergedObj: { name: string; } & { age: number; }
const mergedObj = merge({name: 'jess'}, {age: 32});
console.log(mergedObj.age);


// long way
const mergedObj2 = merge<{name: string}, {age: number}>({name: 'jess'}, {age: 32});
console.log(mergedObj.age);
