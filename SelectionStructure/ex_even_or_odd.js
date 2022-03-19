/**
 * EXERCÍCIO
 * ---------
 * 
 * Escreva um programa que recebe um valor numérico pelo teclado e imprime no console se o número é par ou ímpar.
 */

const prompt = require("prompt-sync")();

const n = prompt("Número: ");
let result;

if (n % 2 == 0) {
    result = "PAR";
} else {
    result = "ÍMPAR";
}

console.log("O número é " + result);