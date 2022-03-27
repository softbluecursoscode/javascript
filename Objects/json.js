const shape = {
    x: 10,
    y: 5,
    name: "shape1",
    drawable: true,
    points: []
}

const str = JSON.stringify(shape);
console.log(str);

const obj = JSON.parse(str);
console.log(obj);