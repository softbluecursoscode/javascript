function process(number, array) {
    array.push(number);
    number++;
}

let n = 5;
let a = [ 0 ];
process(n, a);

console.log(n);
console.log(a);
