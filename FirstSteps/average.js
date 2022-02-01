const prompt = require("prompt-sync")();

const n1 = Number(prompt("Valor 1: "));
const n2 = Number(prompt("Valor 2: "));
const n3 = Number(prompt("Valor 3: "));

const avg = (n3 + n2 + n1) / 3;

console.log("Média: " + avg);
