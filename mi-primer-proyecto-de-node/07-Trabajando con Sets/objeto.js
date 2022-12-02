// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales(nombre, apellido, edad, altura, eresDesarrollador)
// - Una variable que obtenga tu edad a partir del objeto anterior
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig @s
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor


const datosPersonales = {
    nombre: "Dilan",
    apellido: "Torres",
    edad: 23,
    altura: 1.70,
    eresDesarrollador: true
}

const edad = datosPersonales.edad;


const lista = [
    datosPersonales,
    {
        nombre: "Yair",
        apellido: "Torres",
        edad: 21,
        altura: 1.70,
        eresDesarrollador: false
    },
    {
        nombre: "Farid",
        apellido: "Torres",
        edad: 19,
        altura: 1.70,
        eresDesarrollador: false
    }
]

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad)

console.log(listaOrdenada)