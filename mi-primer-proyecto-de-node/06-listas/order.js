// Su tarea es crear una función que pueda 
// tomar cualquier número entero no negativo como argumento 
// y devolverlo con sus dígitos en orden descendente.
// Esencialmente, reorganiza los dígitos para crear el número más alto posible.

//     Ejemplos:
// Entrada: 42145 Salida: 54421

// Entrada: 145263 Salida: 654321

// Entrada: 123456789 Salida: 987654321




function descendingOrder(n) {
    if (n < 0) {
        throw new Error("El numero debe ser positivo")
    } else {
        return parseInt(n.toString().split("").sort().reverse().join(""))
    }
}

console.log(descendingOrder(42145))