const vehicle = {
    speed: 0.0,
    drive: function() { console.log("drive!"); }
}

const car = Object.create(vehicle);
car.color = "blue";

console.log(Object.getOwnPropertyNames(vehicle));
console.log(Object.getOwnPropertyNames(car));

for (const p in car) {
    console.log("-> " + p);
}

if (car.color) {
    console.log("The car color is " + car.color);
}

if (car.color !== undefined) {
    console.log("The car color is " + car.color);
}

if ("color" in car) {
    console.log("The car color is " + car.color);
}