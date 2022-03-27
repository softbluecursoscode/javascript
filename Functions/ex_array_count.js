/**
 * EXERCÍCIO
 * ---------
 * 
 * Escreva uma função que conta quantas vezes determinado elemento está presente dentro de um array.
 * A função deve retornar essa contagem ou 0 se o elemento não existir.
 */

const items = [ "A", "A", "B", "B", "B" ];
console.log(countElement(items, "A"));
console.log(countElement(items, "B"));
console.log(countElement(items, "C"));

function countElement(array, elem) {
    let count = 0;
    for (i of array) {
        if (i == elem) {
            count++;
        }
    }
    return count;
}