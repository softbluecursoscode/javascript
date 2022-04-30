function sayHello(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    }
}

const f = sayHello("Maria");
f();
