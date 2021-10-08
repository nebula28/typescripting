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