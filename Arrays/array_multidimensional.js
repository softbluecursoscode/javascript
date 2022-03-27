// 1  2  4
// 3  4  7

const e = [ [ 1, 2, 4 ], [ 3, 4, 7 ] ];

for (let i = 0; i < e.length; i++) {
    for (let j = 0; j < e[i].length; j++) {
        process.stdout.write(e[i][j] + "\t");
    }
    console.log("");
}