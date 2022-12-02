function factorial(n) {
    // 5! = 5*4*3*2*1
    if (n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}
const fact = factorial(5)
console.log(fact)