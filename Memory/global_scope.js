const a = 2;
let b = 3;

function f1() {
    let a = 10;
    console.log("Este é o valor de a: " + a);
}

function f2() {
    b = 5;
}

f1();
f2();

console.log(a);
console.log(b);
