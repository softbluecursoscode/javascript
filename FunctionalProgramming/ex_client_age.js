/**
 * EXERCÍCIO
 * ---------
 * 
 * Escreva um programa que calcula algumas informações relacionadas a alguns clientes cadastradados.
 * Considere o seguinte:
 * 
 * 1) Um cliente tem as propriedades 'name' e 'age'.
 * 2) As informações encontradas devem ser a idade máxima, a idade mínima e a idade média.
 * 3) Considere o conjunto de clientes definido no array 'clients' abaixo.
 */

const clients = [
    { name: "Pedro", age: 32 },
    { name: "Joana", age: 28 },
    { name: "Paulo", age: 47 },
    { name: "Maria", age: 36 },
    { name: "Juliana", age: 28 }
]

const ages = clients.map(e => e.age);
console.log(ages);

const max = (p, c) => c > p ? c : p;
const min = (p, c) => c < p ? c : p;
const avg = array => array.reduce((p, c) => p + c) / array.length;

console.log("Max: " + ages.reduce(max));
console.log("Min: " + ages.reduce(min));
console.log("Avg: " + avg(ages));