const counter = {
    value: 0,
    increment: function() {
        this.value++;
    },

    defineValue: function(value) {
        this.value = value;
    }
}

counter.defineValue(10);
counter.increment();
counter.increment();

console.log(counter.value);