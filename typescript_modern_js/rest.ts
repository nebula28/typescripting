const addUp = (...numbers: number[]) => {
    return numbers.reduce((previousValue, currentValue) => { return previousValue + currentValue }, 0);
}
console.log(addUp(1,7,2,19,13));

// rest operator on tuple type
const subtractThem = (...numbers: [number, number, number]) => {
    return numbers.reduce((previousValue, currentValue) => { return previousValue - currentValue }, 0);
}
console.log(subtractThem(1, 2, 3));
