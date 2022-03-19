/**
 * EXERCÍCIO
 * ---------
 * 
 * Escreva um programa que faz a conversão de um valor em R$ para um valor em dólar e mostre o resultado.
 * O valor a ser convertido e a cotação devem ser solicitados ao usuário.
 */

const prompt = require("prompt-sync")();

const real = prompt("Valor em R$ => ");
const cotacao = prompt("Cotação US$ => ");

const dolar = real / cotacao;

console.log("Valor convertido em US$ => " + dolar);