const person = {
    name: "Pedro",
    age: 30,
    "id number": "XXXXXX"
};

const p = person.name;
person["id number"] = "ABCDEF";
const a = person["age"];

person.birthDay = 10;

console.log(person);
console.log(p);
console.log(a);