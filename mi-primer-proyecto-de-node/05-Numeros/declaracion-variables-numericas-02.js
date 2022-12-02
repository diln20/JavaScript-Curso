//Principales operaciones aritmeticas
let a = 3.5;
let b = 4.8;

//suma
console.log(a + b);
//resta
console.log(a - b);
//multiplicacion
console.log(a * b);
//division
console.log(a / b);
//modulo
console.log(a % b);
//exponente
console.log(a ** b);


//representacion de los numeros en cadenas de texto
console.log(typeof a)
let a_s = a.toString();

console.log(a_s)
console.log(typeof a_s)


//Redondeo de numeros decimales

let c = 3.3;
let d = c * 3;

console.log(d)
console.log(typeof d)
//toFixed() limitar el numero de decimales al valor x
console.log(d);
console.log(typeof d.toFixed(2));

let e = 1839.1232456789;
let f = 767832786731726
console.log(e.toFixed(2));
console.log(f.toFixed(2));

//.toPrecision(x)-Limita el numero de cifras significativas

console.log(e.toPrecision(7));
console.log(f.toPrecision(7));

console.log(typeof e.toPrecision(2));








