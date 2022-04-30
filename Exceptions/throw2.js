function toUpperCase(str) {
    if (!str) {
        return str;
    }

    if (typeof str !== "string") {
        throw 500;
    }

    return str.toUpperCase();
}

try {
    console.log(toUpperCase(100));

} catch (err) {
    console.log(err);
}