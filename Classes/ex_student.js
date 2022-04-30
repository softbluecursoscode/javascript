/**
 * EXERCÍCIO
 * ---------
 * 
 * Crie uma classe 'Student' para representar um aluno. O aluno deve ter um ID e um array de notas. A classe deve ter métodos para adicionar
 * notas, retornar a média e dizer se o aluno foi aprovado (a média deve ser 7.0 ou superior para que isso aconteça).
 */

class Student {
    constructor(id) {
        this.id = id;
        this.grades = [];
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    getAverage() {
        return this.grades.reduce((p, c) => p + c) / this.grades.length;
    }

    isApproved() {
        return this.getAverage() >= 7;
    }
}

const s = new Student(1);
s.addGrade(8.5);
s.addGrade(5.5);
s.addGrade(6.5);
s.addGrade(9.0);
console.log(s.getAverage());
console.log(s.isApproved());