// Global scope
const a = 1;

function f1() {
    // Local scope
    const b = 2;
    console.log(b);
}

function f2() {
    // Local scope
    const c = 2;
    console.log(c);
}

f1();
f2();

console.log(a);
console.log(c);
