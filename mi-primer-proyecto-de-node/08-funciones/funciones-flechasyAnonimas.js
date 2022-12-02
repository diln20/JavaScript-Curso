//Funciones tipo flecha- funciones anonimas

const array = [1, 2, 3, 18, 6, 73, 8, 9, 92];

//const array.map(function(valor donde se guarda,indice,arrayOriginal))
const array2 = array.map(function (valor) {
    return valor * 2;
});

console.log(array2);


//Funciones tipo flecha

const array3 = array.map(valor => valor * 2);
console.log(array3);

// const dobleDelValor= valor=>{
//     return valor * 2;
// }

variable = 7
console.log(variable)

const dobleDelValor2 = valor => valor * 2;

function dobleDelValor3(valor) {
    return valor * 2;
}


const array4 = array.map(dobleDelValor2);
console.log(array4);

console.log(dobleDelValor3(5));
console.log(dobleDelValor2(5));







