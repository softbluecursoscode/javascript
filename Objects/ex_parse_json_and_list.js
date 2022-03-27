/**
 * EXERCÍCIO
 * ---------
 * 
 * Crie um programa que solicita ao usuário um objeto qualquer no formato JSON e lista todas as propriedades e valores
 * que fazem parte deste objeto.
 */

 const prompt = require("prompt-sync")();

 const jsonStr = prompt(">> ");
 const obj = JSON.parse(jsonStr);

 for (const p in obj) {
     console.log("--> " + p + ": " + obj[p])
 }