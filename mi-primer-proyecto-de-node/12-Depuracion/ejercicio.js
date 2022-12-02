function Fibonacci(num) {
    if (num === 1) {
        return [0, 1];
    }
    if (num === 2) {
        return [1, 1]
    }
    let fib = [1, 1]
    for (let i = 2; i < num; i++) {
        fib.push(fib[i - 1] + fib[i - 2])
    }
    return fib
}

console.log(Fibonacci(6))
