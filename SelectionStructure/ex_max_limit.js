/**
 * EXERCÍCIO
 * ---------
 * 
 * Escreva um programa que recebe um valor numérico pelo teclado, multiplica o valor por ele mesmo e imprime o resultado.
 * Entretanto, se o valor fornecido for maior do que 10, ele deve ser ajustado para 10 antes da multiplicação
 */

const prompt = require("prompt-sync")();

let v = prompt("Valor: ");

const max = 10;

if (v > max) {
    v = max;
}

const m = v ** 2;
console.log(">> " + m);