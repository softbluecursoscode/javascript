class Employee {
    static currentId;

    static {
        this.currentId = 10;
    }

    constructor() {
        this.id = Employee.currentId++;
    }
}

console.log(new Employee().id);
console.log(new Employee().id);
console.log(new Employee().id);
console.log(new Employee().id);