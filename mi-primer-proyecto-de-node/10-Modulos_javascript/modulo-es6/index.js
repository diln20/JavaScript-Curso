// import {suma,eleva,nombre} from  './modulos/matematicas.js'
import * as matematicas from './modulos/matematicas.js'
import getAutor,{libro} from './modulos/literatura.js'


const sum = matematicas.suma(12, 90)
console.log(sum)

const potencia = matematicas.eleva(2,21)
console.log(potencia)

console.log(matematicas.nombre)


console.log(getAutor())
console.log(libro)