import * as io from './io.js';
import Word from './word.js';
import { maxAttempts } from './config.js';

function play() {
    io.print("Welcome!");
    const word = new Word();
    let leftAttempts = maxAttempts;
    const guesses = [];

    while(!word.revealed() && leftAttempts > 0) {
        io.newLine();
        io.print(word.maskedWord);

        const letter = io.read("Guess");

        if (!letter || guesses.includes(letter) || letter.length > 1) {
            io.print("Ops, try again...");
            continue;
        }

        guesses.push(letter);

        if (word.guess(letter)) {
            io.print("Hit!!!");
        
        } else {
            io.print("Miss...");
            leftAttempts--;

            if (leftAttempts > 0) {
                io.print(`You have ${leftAttempts} chance(s)`);
            }
        }
    }

    if (leftAttempts == 0) {
        io.print(`You lost... The word was '${word.word}'`);
    } else {
        io.print(`You ROCK! :D. You found the word '${word.word}'`);
    }
}

play();