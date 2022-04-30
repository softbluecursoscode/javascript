const n = 10;

try {
    const s = n.toUpperCase();
    
} catch (err) {
    console.log(`Error: ${err.name} -> ${err.message}`);

} finally {
    console.log("EXECUTED!");
}
