const square = {
    _size: 0,

    get size() {
        console.log("getter");
        return this._size;
    },

    set size(newValue) {
        console.log("setter");
        if (newValue > 0) {
            this._size = newValue;
        }
    }
}

square.size = 10;
console.log(square.size);