function suma(a, b) {
    return a + b;
}

function multiplicacion(a, b) {
    return a * b;
}

function eleva(a, b) {
    return a ** b;
}

function factorial(n) {
    // 5! = 5*4*3*2*1
    if (n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}

module.exports = {
    suma,
    multiplicacion,
    eleva,
    factorial
}