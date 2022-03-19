/**
 * EXERCÍCIO
 * ---------
 * 
 * Encontre o resultado da seguinte expressão:
 * 
 * (5 + 3) * 2 < 30 / 2 || !(5 - 1 <= 8 % 3)
 */

const e = (5 + 3) * 2 < 30 / 2 || !(5 - 1 <= 8 % 3);

// 8 * 2 < 30 / 2 || !(5 - 1 <= 2)
// 16 < 15 || !(4 <= 2)
// false || !false
// false || true
// true

console.log(e);