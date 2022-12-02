//Trabajando con fechas

const fecha = new Date();

console.log(fecha);

//Atencion los meses empiezan desde 0-enero a 11-diciembre   
const fecha2 = new Date(1987, 10,)
console.log(fecha2);

const fecha3 = new Date(-10000000000000)//Milisegundos
console.log(fecha3);

const fecha4 = new Date("October 13, 1979 12:15:15")
console.log(fecha4);


console.log(fecha < fecha4);
console.log(fecha > fecha4);

console.log(fecha === fecha2);// error no se pueden comparar fechas de esta forma

fecha7 = new Date(1987, 10, 20, 1, 23, 52, 192)
fecha8 = new Date(1987, 10, 20, 1, 23, 52, 192)
//Esta es la forma de comparar la igualdad entre fechas
console.log(fecha8.getTime() === fecha7.getTime());


//Metodos de fecha
const fecha5 = new Date();
//año
console.log(fecha5.getFullYear());
//mes
console.log(fecha5.getMonth());
//dia
console.log(fecha5.getDate());
//dia de la semana
console.log(fecha5.getDay());
//hora
console.log(fecha5.getHours());
//minutos
console.log(fecha5.getMinutes());
//segundos
console.log(fecha5.getSeconds());
//milisegundos
console.log(fecha5.getMilliseconds());
//timestamp
console.log(fecha5.getTime());


//Mostrar fecha en un string
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date/toLocaleDateString
console.log(fecha5.toLocaleDateString("en-US"))

