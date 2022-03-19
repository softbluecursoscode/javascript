/**
 * EXERCÍCIO
 * ---------
 * 
 * Escreva um programa que calcula o novo salário de um funcionário que acabou de receber uma porcentagem de aumento.
 * O salário e a pocentagem devem ser fornecidos pelo usuário.
 */

const prompt = require("prompt-sync")();
const salary = Number(prompt("Salário atual: "));
const increase = Number(prompt("Porcentagem de aumento: "));

const newSalary = salary + salary * (increase / 100);
console.log("O novo salário é: " + newSalary);
