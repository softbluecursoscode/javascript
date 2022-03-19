/**
 * EXERCÍCIO
 * ---------
 * 
 * Crie um gerador de tabuada de um número especificado (solicitado via teclado). A tabuada deve mostrar os valores da multiplicação de 1 a 10.
 */

const prompt = require("prompt-sync")();

const n = Number(prompt("> "));

let i = 1;
while (i <= 10) {
    console.log(n + " x " + i + " = " + (n * i));
    i++;
}