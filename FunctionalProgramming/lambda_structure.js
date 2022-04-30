//** f1 */
const f1 = function(x, y) {
    const m1 = x * 2;
    const m2 = y * 2;
    return m1 + m2;
}

const f1l = (x, y) => {
    const m1 = x * 2;
    const m2 = y * 2;
    return m1 + m2;
}

//** f2 */
const f2 = function(x) {
    return x * 2;
}

const f2l = x => x * 2;


//** f3 */
const str = "abc";
const f3 = function() {
    return str.toUpperCase();
}

const f3l = () => str.toUpperCase();


//** f4 */
function f4(x, y) {
    return x + y;
}

const f4l = (x, y) => x + y;
