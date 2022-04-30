/**
 * EXERCÍCIO
 * ---------
 * 
 * Crie uma classe 'Account' para representar uma conta bancária. A conta deve ter um número associado e métodos para fazer depósito e saque.
 * Não é possível fazer operações usando valores negativos ou igual a 0, e saques que deixam a conta com saldo negativo também não são
 * permitidos.
 * 
 * Crie também uma classe 'SavingsAccount'. A diferença desse tipo de conta é que todos os depósitos feitos recebem 5% de incremento no valor, 
 * e saques nessa conta não são permitidos.
 */

class Account {
    #number;
    #amount;

    constructor(number) {
        this.#number = number;
        this.#amount = 0;
    }

    get amount() {
        return this.#amount;
    }

    deposit(value) {
        this.#checkValuePositive(value);
        this.#amount += value;
    }

    withdraw(value) {
        this.#checkValuePositive(value);
        this.#checkHasEnoughMoney(value);
        this.#amount -= value;
    }

    #checkValuePositive(value) {
        if (!value || value <= 0) {
            throw new Error("Value must be positive");
        }
    }

    #checkHasEnoughMoney(value) {
        if (this.#amount - value < 0) {
            throw new Error("You do not have enough money!");
        }
    }
}

class SavingsAccount extends Account {
    deposit(value) {
        super.deposit(value + 0.05 * value);
    }

    withdraw(value) {
        throw new Error("You cannot get money from here!");
    }
}

const a = new Account("123");
a.deposit(200);
a.withdraw(80);
console.log(a.amount);

const sa = new SavingsAccount("321");
sa.deposit(200);
console.log(sa.amount);