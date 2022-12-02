//Iterar los valores de una lista

const array = ['hola', 2, 5, 90, false, undefined]

//Ejemplo de iteracion de una lista
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

//Forma ES6 (mas eficiente)
let suma = 0;
const array2 = [3, 53, 4, 59, 6, 7, 8, 9, 10]
array2.forEach((valor) => {
    suma += valor;
    console.log(valor)
}
)
console.log(suma)

//Busqueda de un valor dentro de una lista
const array3 = [3, 53, 4, 59, 6, 7, 8, 9, 10]

const variable = array3.find(valor => {
    if (valor === 59) {
        return true;
    }
})

console.log(variable)

const listaObjetos = [
    {
        nombre: 'juan',
        edad: 20
    },
    {
        nombre: 'Dilan',
        edad: 23
    },
    {
        nombre: 'Pedro',
        edad: 25
    },
    {
        nombre: 'Juanito',
        edad: 25
    },
    {
        nombre: 'Juanes',
        edad: 29
    }
]

// const objeto = listaObjetos.find(o=>{
//     if(o.nombre==='Juanito'){
//         return true;
//     }
// })


const objeto = listaObjetos.find(o => o.nombre === 'Juanito')
console.log(objeto.edad)

const { edad } = listaObjetos.find(o => o.nombre === 'Juanito')
console.log(edad)

console.log(objeto)

