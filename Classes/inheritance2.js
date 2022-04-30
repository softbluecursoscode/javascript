class Animal {

    walk() {
        console.log("Animal walking...");
    }
}

class Dog extends Animal {

    constructor(name) {
        super();
        this.name = name;
    }

    bark() {
        console.log("Au-Au!");
    }

    walk() {
        super.walk();
        console.log("Dog walking...");
    }
}

const dog = new Dog("Totó");
dog.walk();
dog.bark();
console.log(dog.name);

console.log(dog instanceof Dog);
console.log(dog instanceof Animal);