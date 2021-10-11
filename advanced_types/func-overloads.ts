type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// function overloads
function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: string, b: number): string
function add(a: number, b: string): string
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString;
    }
    return a + b;
}
// return type: string | number means I cannot call string functions on the results even though the result is a string
const result = add(1, 2);
const result2 = add('Josh', 'Jess');

// typecast result allows me to call string functions on the results
const result3 = add('Josh', 'Jess') as string;
result3.toUpperCase();

// result with overload
const result4 = add(4, 5);
result4.toFixed(2);