'use strict'

const fibonacci = () => {
    const fib = [0, 1]

    while (fib[fib.length-1] <= 350){
        fib.push(fib[fib.length - 1] + fib[fib.length - 2])
    }

    return fib
}

console.log(fibonacci())

const isFibonnaci = (num) => fibonacci().includes(num) 

module.exports = {
    fibonacci,
    isFibonnaci
}
