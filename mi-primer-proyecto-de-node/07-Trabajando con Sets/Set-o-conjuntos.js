// Sets o conjuntos 

const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, { id: 1 }, { id: 1 }, "hola", "hola"]

//no es el mismo objeto
console.log({ id: 5 } === { id: 5 })

const miSet = new Set(array)

//no valores repetidos
console.log(miSet)
//si repetidos
console.log(array)

//tamaño
console.log(miSet.size)

//agregar
miSet.add(7)
console.log(miSet)

//eliminar
miSet.delete(7)
console.log(miSet)

//verificar si existe
console.log(miSet.has("hola"))
console.log(array.includes(1))
//limpiar
// miSet.clear()
// console.log(miSet)

//iterar
miSet.forEach((value) => {
    console.log(value)
}
)

const it_miset = miSet.values()
console.log(it_miset)

ar_miSet = [...miSet]
console.log(ar_miSet[0])



