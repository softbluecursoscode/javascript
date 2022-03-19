outer: for (let i = 1; i <= 10; i++) {
    inner: for (let j = 1; j <= 10; j++) {
        console.log(i + " - " + j + " - " + (i * j));

        if (j == 5) {
            break outer;
        }
    }
}
