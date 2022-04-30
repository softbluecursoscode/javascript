class Animal {

    walk() {
        console.log("Animal walking...");
    }
}

class Dog extends Animal {

    bark() {
        console.log("Au-Au!");
    }

    walk() {
        super.walk();
        console.log("Dog walking...");
    }
}

const animal = new Animal();
animal.walk();

const dog = new Dog();
dog.walk();
dog.bark();