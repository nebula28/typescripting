type Admin = {
    name: string;
    privilege: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

// intersection type -> same as interface Admin, Employee -> interface AdvancedEmployee extends Employee, Admin
type AdvancedEmployee = Admin & Employee;

const e1: AdvancedEmployee = {
    name: 'Josh',
    privilege: ['create-serve', 'delete-server', 'update-server', 'read-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    // typeof check is a type of type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    // typeof emp will return Object
    // in will check if privilege exists as a property in the emp object
    // in is type of type guard
    if ('privilege' in emp) {
        console.log('Privilege: ' + emp.privilege);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInfo(e1);
// printEmployeeInfo({name: 'Jess', startDate: new Date()});

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving truck...');
    }

    loadCargo(amt: number) {
        console.log('Loading cargo... ' + amt);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    // if('loadCargo' in vehicle) {
    //     vehicle.loadCargo(500);
    // }
    // instanceof is a type of type guard
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(500);
    }
}

useVehicle(v1);
useVehicle(v2);