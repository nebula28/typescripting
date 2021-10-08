abstract class Department {
    // static variables or methods cannot be access on instance of Department class i.e. using inside of describe method or it.fiscalYear
    static fiscalYear = 2021;

    // protected -> employees is available in classes which extend Department
    protected employees: string[] = [];

    constructor(protected readonly id: string, private name: string) {}

    // to define abstract, the base class must also use abstract modifier
    abstract describe(this: Department): void;

    // static variables or methods can be used inside static methods
    static createEmployee(name: string) {
        // console.log(this.fiscalYear);
        return { name: name };
    }

    // static methods or variables can be accessed in non static using the class name i.e. -> Department.fiscalYear
    addEmployee(employee: string) {
        // console.log(Department.fiscalYear);
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class IT extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'Information Technology');
    }

    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}

class Accounting extends Department {
    private lastReport: string;

    get latestReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No reports available...');
    }

    set latestReport(value: string) {
        if (!value) {
            throw new Error('set mostRecentReport: value is undefined...');
        }
        this.addReport(value);
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addReport(report: string) {
        this.reports.push(report);
        this.lastReport = report;
    }

    printReports() {
        console.log(this.reports);
    }

    addEmployee(name: string) {
        if(name === 'Josh') {
            return;
        }
        this.employees.push(name);
    }
}

const accounting = new Accounting('d3', []);

accounting.latestReport = 'Reports Array';
accounting.addReport('Second report');
console.log(accounting.latestReport);
accounting.addEmployee('Josh');
accounting.addEmployee('Jess');

// accounting describe method overrides Department abstract describe method
accounting.describe();
accounting.printReports();
console.log(accounting);

const it = new IT('d2', ['Kent']);

it.addEmployee('Josh');

const newEmployee = Department.createEmployee('Dee');
console.log(`${Department.fiscalYear} Employee created: ${newEmployee.name}`);
it.addEmployee(newEmployee.name);

it.describe();
it.printEmployeeInfo();
console.log(it);

// singleton
class CustomerService extends Department {
    private static instance: CustomerService;

    private constructor(id: string) {
        super(id, 'Customer Service');
    }

    static getInstance() {
        // or CustomerService.instance
        if(this.instance) {
            return this.instance;
        }
        this.instance = new CustomerService('d3');
        return this.instance;
    }

    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}

// singleton
const cs = CustomerService.getInstance();

// this would return the same isntance/object
// const cs2 = CustomerService.getInstance();