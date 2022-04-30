class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.steps = 0;
    }

    walk() {
        this.steps++;
    }
}

const p1 = new Person("Pedro", 25);
p1.walk();
p1.walk();
p1.walk();

const p2 = new Person("Rodrigo", 35);
p2.walk();

console.log(p1.steps);
console.log(p2.steps);