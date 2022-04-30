const d1 = new Date(2000, 3, 15);
console.log(d1);
const d2 = new Date(2000, 3, 15, 16, 30, 20, 200);
console.log(d2);
console.log(d2.getMilliseconds());
const d3 = new Date(4329874238);
console.log(d3);
const d4 = new Date(2000, 3, 15, 16, 30, 20, 200);
const d5 = new Date(2001, 3, 15, 16, 30, 20, 200);

console.log(d2.getTime() == d4.getTime());
console.log(d4.getTime() < d5.getTime());