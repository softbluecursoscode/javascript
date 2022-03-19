const exp = 5 + 4 - 3 * 2 * (1 + 1)

// 5 + 4 - 3 * 2 * 2
// 5 + 4 - 6 * 2
// 5 + 4 - 12
// 9 - 12
// -3

console.log(exp);

// --------------

const exp2 = true && false || true && !false;

// true && false || true && true
// false || true
// true

console.log(exp2);