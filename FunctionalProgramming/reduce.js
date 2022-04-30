const array1 = [ 1, 2, 3, 4 ];
const sumArray = array1.reduce((acum, e) => acum + e);
console.log(sumArray);

const array2 = [ "a", "b", "c", "d" ];
const concatArray = array2.reduce((acum, e) => acum + "|" + e);
console.log(concatArray);
