class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    set name(value) {
        this.#name = value;
    }
}

const p1 = new Person("Pedro", 25);
p1.name = "Paulo";
console.log(p1.name);
console.log(p1.age);


