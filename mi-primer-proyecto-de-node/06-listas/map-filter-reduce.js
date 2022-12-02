// Trabajar con metodos mas avanzados

//.map() .filter() .reduce()


const array = ['Pamplona', 'Cucuta', 'Bogota', 'Armenia']


const val = array.forEach(v => {
    console.log(v)
    return 4
}
)

console.log(val)


// const newArray = array.map(
//     (valor, indice)=>{
//         console.log(indice)
//         // return valor.concat(" Hola")
//         // return valor + " Hola"        
//         return  `${indice+1} - ${valor}`

//     }
// )

const newArray = array.map(
    (valor, indice) => `${indice + 1} - ${valor}`)

console.log(newArray)

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

// const personasmenores=listaObjetos.filter(obj=>{
//     if(obj.edad<25){
//         return true
//     }
// })

const personasmenores = listaObjetos.filter(obj => (obj.edad < 25))
console.log(personasmenores)


const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Juanito")
console.log(nuevaLista)

const valores = [3, 56, 23, 5, 90, 100]

// const suma = valores.reduce((ant,cur,indice ,arrayOriginal))
const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado),
        console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur;
})
console.log(suma)




