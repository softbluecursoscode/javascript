const fruits = [ "laranja", "banana", "figo", "abacate" ];
const sliceFruits = fruits.slice(1, 3);
const newFruits = fruits.concat("melancia");
newFruits.reverse().sort();

console.log(fruits);
console.log(newFruits);
console.log(newFruits.join("||"));
console.log(sliceFruits);
console.log(fruits.indexOf("figo"));