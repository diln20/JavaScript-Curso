const mifuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    //     return "No es un numero"
    throw new Error("No es un numero, el valor debe ser un numero")
}

// console.log(mifuncion(2))

// const elDoble=console.log(mifuncion("hola"))

// console.log(elDoble)

const numero = "s";

try {
    //codigo que puede fallar
    console.log("Esta ejecutandose de manera correcta")
    const doble = mifuncion(numero)
    console.log(doble)
} catch (e) {
    console.log(`el valor de e es: ${e}`)
    console.log("Error! ")
    //En caso de fallar, ejecutar esto
} finally {
    //Siempre se ejecuta
    console.log("Siempre se ejecuta, si hay error o no hay error")
}

// InternaError, SyntaxError , TypeError , RangeError y ReferenceError
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors



