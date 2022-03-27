/**
 * Fatorial (!)
 * ------------
 * 
 * n! = n * (n - 1)!
 * 0! = 1
 */

console.log(fatorial(10));

function fatorial(n) {
    if (n == 0) {
        return 1;
    }
    return n * fatorial(n - 1);
}
