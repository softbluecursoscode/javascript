/**
 * EXERCÍCIO
 * ---------
 * 
 * Crie um jogo de adivinhação numérica. O computador deve sortear um número aleatório dentro de um intervalo e você deve tentar descobri-lo.
 * A cada tentativa, o programa diz se o número é maior ou menor do que o número tentado.
 * O jogo acaba quando o número tentado for o número correto.
 */

const prompt = require("prompt-sync")();

const min = 1;
const max = 10;
const secret = Math.trunc(Math.random() * (max - min + 1) + min);

let playing = true;
let tries = 0;

while(playing) {
    const n = Number(prompt("> "));
    tries++;

    if (n == secret) {
        playing = false;
    } else if (n < secret) {
        console.log("O número secreto é maior...");
    } else {
        console.log("O número secreto é menor...");
    }
}

console.log("O jogo acabou! O número era " + secret + ". Numero de tentativas: " + tries);