//Comparaciones

if (5 == '5') {
    console.log("es verdadero");
}

if (5 === 5) {
    console.log("es verdadero");
}


let a = 5
let b = '5'

console.log(typeof (a))
console.log(typeof (b))

//solo compara el valor ==
//compara el valor y el tipo ===
if (a == b) {
    console.log("a es ingual b --> debil");
}

if (a === b) {
    console.log("a es ingual b --> fuerte");
}

//comparacion de desigualdad

let c = 4;
let d = 10;

if (c != d) {
    console.log("c es diferente a d-->debil");
}

if (c !== d) {
    console.log("c es diferente a d-->fuerte");
}

//mayor que o menor que
let max = 10;
let min = 5;

if (max > min) {
    console.log("max es mayor a min");
}

if (max < min) {
    console.log("max es menor que min");
}

if (max >= min) {
    console.log("max es mayor o igual que min");
}


if (max <= min) {
    console.log("max es menor o igual que min");
}






