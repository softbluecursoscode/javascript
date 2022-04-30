const array1 = [ "a", "b", "c" ];
const array2 = [ 1, 2, 3 ];

const array3 = [ ...array1 ];
const array4 = [ "?", ...array1, "/", ...array2, "?" ];

console.log(array3);
console.log(array4);
