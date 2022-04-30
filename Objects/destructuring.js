function getSquareInfo(n) {
    const p = 4 * n;
    const s = n * n;

    return { p, s };
}

const info = getSquareInfo(3);

//const p = info.p;
//const s = info.s;

const { p, s } = info;
const { p: perimeter, s: surface } = info;

console.log(`P = ${p}, S = ${s}`);
console.log(`P = ${perimeter}, S = ${surface}`);
