function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printRes(num: number) {
    console.log("num: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const res = n1 + n2;
    cb(res);
}

printRes(add(5, 12));

let someVal: undefined;

// let combineVals: Function;

// precise function type setting
let combineVals: (a: number, b: number) => number;

combineVals = add;

// will cause error
// combineVals = 5;

// will cause error
// combineVals = printRes;


console.log(combineVals(8, 8));


// callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.
addAndHandle(10, 20, (res) => {
    console.log(res);
    // return res;
});