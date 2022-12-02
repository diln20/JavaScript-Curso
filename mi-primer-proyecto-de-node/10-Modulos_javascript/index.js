//Formas de importar/exportar modulos
// 1. Importar/exportar modulos con CommonJS - require
// 2. Importar/exportar modulos con ES6 - import/export

const matematicas = require('./modulos/matematicas.js');

// const {
//     factorial,suma
// }=matematicas;
// console.log(matematicas.suma);
// const factorial=matematicas.factorial;


const { factorial, suma } = require('./modulos/matematicas.js');



const fact = factorial(5)
console.log(fact)

const sum = matematicas.suma(12, 90)
console.log(sum)

// console.log(module)