function toUpperCase(str) {
    if (!str) {
        return str;
    }

    if (typeof str !== "string") {
        throw new Error("You did not provide a string...");
    }

    return str.toUpperCase();
}

try {
    console.log(toUpperCase(100));
} catch (err) {
    console.log(err.name);
    console.log(err.message);
}