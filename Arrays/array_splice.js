const months = [ "Janeiro", "Fevereiro", "Maio", "Segunda-Feira", "Terça-Feira" ];

const daysOfWeek = months.splice(3);
const emptyArray = months.splice(2, 0, "Março", "Abril");

console.log(months);
console.log(daysOfWeek);
console.log(emptyArray);