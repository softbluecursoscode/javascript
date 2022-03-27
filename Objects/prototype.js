const vehicle = {
    speed: 0.0,
    drive: function() { console.log("drive!"); }
}

console.log(vehicle.speed);
vehicle.drive();

const car = Object.create(vehicle);
car.color = "blue";
car.speed = 100.0;

console.log(car.speed);
car.drive();
console.log(car.color);
