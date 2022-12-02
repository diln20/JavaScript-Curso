// .sort()

const array = [2, 5, 6, 7, 8, 23, 1, 4, 28, 3]

console.log(array)

array.sort((a, b) => {
    if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    } else {
        return 0
    }
})

console.log(array)

array.sort((a, b) => {
    if (a < b) {
        return +1
    } else if (a > b) {
        return -1
    } else {
        return 0
    }
})



console.log(array)

//Ordenar unicamente arrays numericos
const array2 = [2, 5, 6, 7, 8, 23, 1, 4, 28, 3]
array2.sort((a, b) => a - b)


console.log(array2)
array2.sort((a, b) => b - a)
console.log(array2)


/////////////////////////////
// Interesante en arrays de objetos
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

// listaObjetos.sort((a, b) =>{
//     if(a.edad<b.edad){
//         return -1
//     }else if(a.edad>b.edad){
//         return 1
//     }else {
//         return 0
//     }
// }

listaObjetos.sort((a, b) => a.edad - b.edad)
console.log(listaObjetos)