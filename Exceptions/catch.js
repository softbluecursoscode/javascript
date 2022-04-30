try {
    const x = a;
    
} catch (err) {
    console.log("Ops... problems!");
    console.log(`The error was '${err.name}'. The message was: ${err.message}`);
}

console.log("FIM");