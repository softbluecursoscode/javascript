/**
 * EXERCÍCIO
 * ---------
 * 
 * Escreva uma função que calcula a idade humana equivalente de um cachorro, considerando o fato de que cada ano que um cachorro vive corresponde
 * a 7 anos de vida de um ser humano. O valor da idade deve ser fornecido via teclado.
 * Além disso, permita que a função possa ser customizada para que o valor de 7 anos seja alterado, se necessário.
 */

const prompt = require("prompt-sync")();

const age = Number(prompt("> "));
const realAge = calculateDogAge(age, 6.5);

console.log("Idade do cachorro: " + realAge);

function calculateDogAge(age, rate = 7) {
    return age * rate;
}
