function getSquareInfo(n) {
    const p = 4 * n;
    const s = n * n;

    return { p, s };
}

const info = getSquareInfo(3);
console.log(info);