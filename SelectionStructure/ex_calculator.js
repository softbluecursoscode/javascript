/**
 * EXERCÍCIO
 * ---------
 * 
 * Implemente uma calculadora capaz de executar as 4 operações matemáticas básicas e que recebe os dados via teclado.
 * Três informações devem ser passadas: o primeiro operando, a operação matemática e o segundo operando.
 * Por exemplo:
 * > 20
 * > +
 * > 4
 * > Resultado: 24
 */

 const prompt = require("prompt-sync")();

 const op1 = Number(prompt("> "));
 const o = prompt("> ");
 const op2 = Number(prompt("> "));

 let r;

 switch(o) {
    case "+": r = op1 + op2; break;
    case "-":  r = op1 - op2; break;
    case "*":  r = op1 * op2; break;
    case "/":  r = op1 / op2; break;
    default: r = null;
 }

 console.log("> " + r);
