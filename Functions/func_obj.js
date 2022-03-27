function square(n) {
    return n * n;
}

function sum(n) {
    return n + n;
}

const square2 = function(n) {
    return n * n;
}

function op(n, func) {
    return func(n);
}

const quad = square;

console.log(square(4));
console.log(quad(4));
console.log(square2(4));
console.log(op(3, square));
console.log(op(3, sum));