console.log(sumAll(1, 4, 2, 7, 9));
console.log(sumAll());
console.log(sumAll(6));

function sumAll(...numbers) {
    console.log("-> " + numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}