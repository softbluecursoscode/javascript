/**
 * EXERCÍCIO
 * ---------
 * 
 * Escreva um programa que armazena em um array um conjunto de livros, onde cada livro é um objeto que contém as propriedades
 * "nome", "ano" e "id". Crie então uma função que, com base no ID de um livro, retorne o livro correspondente.
 */

const library = [
    {
        name: "Book #1",
        year: 2000,
        id: 1
    },
    {
        name: "Book #2",
        year: 2010,
        id: 2
    },
    {
        name: "Book #3",
        year: 2020,
        id: 3
    }
];

function search(id) {
    for (book of library) {
        if (id == book.id) {
            return book;
        }
    }
    return null;
}

console.log(search(1));
console.log(search(3).year);
console.log(search(4));