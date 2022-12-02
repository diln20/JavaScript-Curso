var variable;
let variablelet_;

// const constantes=2;

const constante = "Hola soy una constante";

// constante="Hola soy una constante"; // da Error



var a = 1;
console.log(a);
a = a + a;
console.log(a);


let b = 1;
console.log(b);

b = b + 7;
console.log(b);

//Diferencias var vs let 

// var es una variable global afecta a todo el codigo
var variablelet = "hola soy una variable let";
// let es una variable local solo en el bloque
for (var i = 0; i < 3; i++) {
    let variablelet = "soy la segunda variable let";
}


console.log(variablelet);

/////////////////////////////////////////


// Tipos de datos

console.log(typeof variablelet);

var num = 4;

console.log(num);
num = "hola soy el cuatro";

console.log(num);



