import { getRandomElement, isEqualArrays } from './util.js';
import { dictionary, maskChar } from './config.js';

class Word {
    #word;
    #foundLetters;

    constructor() {
        this.#word = getRandomElement(dictionary).toUpperCase();
        this.#foundLetters = [];
    }

    get word() {
        return this.#word;
    }

    get maskedWord() {
        return [ ...this.#word ]
            .map(e => this.#foundLetters.includes(e) ? e : maskChar)
            .reduce((p, c) => p + " " + c);
    }

    guess(letter) {
        letter = letter.toUpperCase();

        if (this.#word.indexOf(letter) > -1) {
            if (!this.#foundLetters.includes(letter)) {
                this.#foundLetters.push(letter);
            }
            return true;
        }
        return false;
    }

    revealed() {
        return isEqualArrays(this.#foundLetters, [ ...new Set(this.#word) ]);
    }
}

export default Word;
