/**
 * EXERCÍCIO
 * ---------
 * 
 * Uma determinada cidade teve as seguintes temperaturas registradas neste ano: 12.3, 22.0, 25.5, 9.9, 14.4 e 18.6.
 * Crie um programa que calcula as temperaturas mínima e máxima registradas, bem como a temperatura média.
 */

const temperatures = [ 12.3, 22.0, 25.5, 9.9, 14.4, 18.6 ];

let min = null;
let max = null;
let avg = 0;

for (const temp of temperatures) {
    if (temp < min || min == null) {
        min = temp;
    }

    if (temp > max || max == null) {
        max = temp;
    }

    avg += temp;
}

avg /= temperatures.length;

console.log("Mín: " + min);
console.log("Max: " + max);
console.log("Média: " + avg);