/**
 * EXERCÍCIO
 * ---------
 * 
 * Escreva um programa que solicita um texto ao usuário e mostra na tela o mesmo texto onde cada caractere é separado do outro por um espaço em branco.
 */

const prompt = require("prompt-sync")();

const text = prompt("> ");
const delimiter = " ";
let newText = "";

for (let i = 0; i < text.length; i++) {
    newText += text.charAt(i) + delimiter;
}

console.log(newText);