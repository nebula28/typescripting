"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // protected -> employees is available in classes which extend Department
        this.employees = [];
    }
    // static variables or methods can be used inside static methods
    static createEmployee(name) {
        // console.log(this.fiscalYear);
        return { name: name };
    }
    // static methods or variables can be accessed in non static using the class name i.e. -> Department.fiscalYear
    addEmployee(employee) {
        // console.log(Department.fiscalYear);
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
// static variables or methods cannot be access on instance of Department class i.e. using inside of describe method or it.fiscalYear
Department.fiscalYear = 2021;
class IT extends Department {
    constructor(id, admins) {
        super(id, 'Information Technology');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}
class Accounting extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get latestReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No reports available...');
    }
    set latestReport(value) {
        if (!value) {
            throw new Error('set mostRecentReport: value is undefined...');
        }
        this.addReport(value);
    }
    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === 'Josh') {
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
