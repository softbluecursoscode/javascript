/**
 * EXERCÍCIO
 * ---------
 * 
 * Escreva uma função que dobra o valor de um número passado como parâmetro. A função não deve retornar o valor após o cálculo, mas a mudança de valor
 * deve ser visível a quem chamar a função.
 */

function double(n) {
    n.number *= 2;
}

const x = { number: 2 };
double(x);
double(x);
double(x);
console.log(x.number);
