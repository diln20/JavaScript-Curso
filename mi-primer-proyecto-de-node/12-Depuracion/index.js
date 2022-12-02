const Persona = {
    nombre: 'Juan',
    edad: 25,
}

console.log(Persona);


function obtenDobleEdad(edad) {
    return 2 * edad;
}


const dobleEdad = obtenDobleEdad(Persona.edad);
console.log(dobleEdad);

let arraynums = []

function obtenArray(edad) {
    let arraynums = []
    for (let i = 0; i < 10; i++) {
        const numero = edad + i;
        console.log(numero);
        arraynums = [...arraynums, numero]
    }
    return arraynums;
}

const array = obtenArray(Persona.edad);

console.log(array);

