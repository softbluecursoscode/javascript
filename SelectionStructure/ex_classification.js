/**
 * EXERCÍCIO
 * ---------
 * 
 * Escreva um programa que, com base em uma idade fornecida, classifica a pessoa nos grupos abaixo:
 * 
 * - CRIANÇA: 0 a 12 anos
 * - ADOLESCENTE: 13 a 17 anos
 * - ADULTO: 18 a 65 anos
 * - SÊNIOR: 66 anos ou mais
 * 
 * Idades negativas ou acima de 110 anos devem ser consideradas como inválidas.
 */

const prompt = require("prompt-sync")();

const age = prompt("Idade: ");
let c;

 if (age >= 0 && age <= 12) {
    c = "CRIANÇA";
 } else if (age >= 13 && age <= 17) {
     c = "ADOLESCENTE";
 } else if (age >= 18 && age <= 65) {
     c = "ADULTO";
 } else if (age > 66 && age <= 110) {
     c = "SÊNIOR";
 } else {
     c = "INVÁLIDO";
 }

 console.log("Classificação: " + c);