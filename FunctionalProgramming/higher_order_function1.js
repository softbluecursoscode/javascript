const sum = (a, b) => a + b;
const double = a => a * 2;
const sum2 = (a, b, c) => a + b + c;

const log = f => (...arguments) => {
    console.log(`${f.name} started`);
    const result = f(...arguments);
    console.log(`${f.name} finished`);
    return result;
}

console.log(log(sum)(2, 4));
console.log(log(double)(2));
console.log(log(sum2)(2, 4, 4));
