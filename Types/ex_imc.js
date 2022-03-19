/**
 * EXERCÍCIO
 * ---------
 * 
 * Escreva um programa que, com base no peso e na altura de uma pessoa, calcule o seu IMC.
 * O cálculo do IMC é dado pelo peso dividido pela altura elevada ao quadrado.
 */

const prompt = require("prompt-sync")();
const weight = Number(prompt("Peso: "));
const height = Number(prompt("Altura: "));

//const imc = weight / (height * height);
const imc = weight / Math.pow(height, 2);
console.log("O IMC é: " + imc);
