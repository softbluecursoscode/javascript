const filter = (array, f) => {
    const newArray = [];

    for (const e of array) {
        if (f(e)) {
            newArray.push(e);
        }
    }

    return newArray;
}

console.log(filter([ 1, 2, 3, 4, 5 ], e => e % 2 == 0));
