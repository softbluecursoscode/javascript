/**
 * EXERCÍCIO
 * ---------
 * 
 * Escreva um programa que permite que o usuário digite código JavaScript. O programa deve permitir que o usuário digite
 * várias linhas de código.
 * 
 * Quando a linha tiver o caractere ".", o código digitado até o momento deve ser executado e a resposta deve ser mostrada
 * na tela. Dica: use o comando eval() para executar o código.
 * 
 * Caso o código digitado pelo usuário tenha um problema de sintaxe, uma mensagem de erro deve ser apresentada e o usuário 
 * deve fornecer o código novamente. O programa só termina quando o usuário digitar ".." em uma linha e pressionar o ENTER.
 */

const prompt = require("prompt-sync")();

outer:
while (true) {
    let code = "";
    while (true) {
        const line = prompt(">> ");

        if (line === ".") {
            break;
        }

        if (line === "..") {
            break outer;
        }

        code += line + "\n";
    }

    try {
        const ret = eval(code);
        console.log("Result: " + ret);
    } catch (err) {
        console.log(`Error: ${err.name} -> ${err.message}`);
    }
}
