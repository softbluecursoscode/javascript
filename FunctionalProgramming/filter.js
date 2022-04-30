const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
console.log(array);

const evenArray = array.filter(e => e % 2 == 0);
console.log(evenArray);

const firstElemsArray = array.filter((e, i) => i < 4);
console.log(firstElemsArray);
