const array1 = [ 10, 20, 30, 40 ];
const doubleArray = array1.map(e => e * 2);
console.log(doubleArray);

const array2 = [
    { name: "Pedro", age: 30 },
    { name: "Maria", age: 25 },
    { name: "Paulo", age: 42 }
];
const ageArray = array2.map(e => e.age);
console.log(ageArray);