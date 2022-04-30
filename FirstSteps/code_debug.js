function createString(char, length) {
    let str = "";

    for (let i = 0; i < length; i++) {
        str += char;
    }

    return str;
}

const s1 = createString("1", 10);
console.log(s1);

const s2 = createString("-", 20);
console.log(s2);

const s3 = createString("X", 25);
console.log(s3);
