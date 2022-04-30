class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            throw new Error("Age cannot be negative");
        }
        this._age = value;
    }

    get info() {
        return `${this._name}, ${this._age} years old`;
    }
}

const p = new Person("Pedro", 25);
console.log(p.name);
console.log(p.age);
console.log(p.info);