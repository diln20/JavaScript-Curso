export function suma(a, b) {
    return a + b;
}

export function multiplicacion(a, b) {
    return a * b;
}

export function eleva(a, b) {
    return a ** b;
}

export function factorial(n) {
    // 5! = 5*4*3*2*1
    if (n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}

export const nombre="matematicas"
