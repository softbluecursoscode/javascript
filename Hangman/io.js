import promptSync from 'prompt-sync';
const prompt = promptSync();

const print = text => console.log(text);

const newLine = () => console.log();

const read = text => prompt(text + " >> ");

export { print, newLine, read };
