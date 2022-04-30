/**
 * EXERCÍCIO
 * ---------
 * 
 * Escreva um programa que transforma um array de objetos de clientes em um array com o ano de nascimento dos clientes.
 * Considere o seguinte:
 * 
 * 1) Um cliente tem as propriedades 'name' e 'age'.
 * 2) Alguns clientes estão com erro de cadastro (a idade é igual a 0). Eles devem ser desconsiderados.
 * 3) O array resultante não deve ter elementos duplicados.
 * 4) Considere o conjunto de clientes definido no array 'clients' abaixo.
 */

const clients = [
    { name: "Pedro", age: 32 },
    { name: "Joana", age: 28 },
    { name: "Paulo", age: 47 },
    { name: "Maria", age: 36 },
    { name: "Juliana", age: 28 },
    { name: "Carlos", age: 0 },
    { name: "João", age: 0 }
]

const years = clients
    .map(e => e.age)
    .filter(e => e > 0)
    .map(e => new Date().getFullYear() - e);

const uniqueYears = [ ...new Set(years) ];

uniqueYears.forEach(e => console.log(e));