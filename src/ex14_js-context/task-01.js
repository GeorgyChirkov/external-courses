const Calculator = {
    result: 0,
    getResult() {
        return this.result  
    },
    add(x=0) {
        this.result += x;
        return this
    },
    multiply(x=0) {
        this.result *= x;
        return this
    },
    divide(x=1) {
        this.result /= x;
        return this
    },
    reset() {
        this.result = 0;
        return this 
    },
    subtract(x=0) {
        this.result -= x;
        return this
    },
    setState(x=this.result) {
        this.result = x;
        return this
    },
    fetchData(callback) {
        const cb = callback.bind(this)
        setTimeout(() => cb(500), 500)
        return this
    }
}
module.exports = Calculator;