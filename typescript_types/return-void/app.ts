// you can define the return type as below
function add(n1: number, n2: number): number {
    return n1 + n2;
}

// printRes return type is : void (see inference) because nothing is returned
function printRes(num: number) {
    console.log("num: " + num);
}
// no error
// function printRes(num: number): undefined {
//     console.log("num: " + num);
//     return;
// }

printRes(add(5, 12));

let someVal: undefined;