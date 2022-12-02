//Listas,array o arreglo

const lista = [1, "hola", undefined, null];
const lista2 = new Array(2, "hola", undefined, null)
const lista3 = new Array(3)
lista3[0] = "soy el primer elemento"
const lista4 = [lista, lista2, lista3]


console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//objetos
const movil = {
    marca: "Xiaomi",
    modelo: "Redmi Note 9",
    color: "Azul",
    precio: 200,
    contactos: ["Dilan", "Andrey", "Andrew"],
    caracteristicas: {
        pantalla: "6.5",
        ram: "4GB",
        almacenamiento: "64GB"
    }
}
movil.precio = 300;

movil.operador = "claro";


console.log(movil);
console.log(movil.contactos[0]);
console.log(movil.caracteristicas["pantalla"]);

//fechas
//librerias de apoyo Moment.js
const fecha = new Date();
console.log(fecha);

const fecha2 = new Date(10);//utilizando milisegundos
console.log(fecha2);

const fecha3 = new Date(2020, 10, 10, 10, 10, 10, 10);//año,mes,dia,hora,minuto,segundo,milisegundo
console.log(fecha3);

const dia = ahora.getDate();
const mes = ahora.getMonth();
const anio = ahora.getFullYear();
const hora = ahora.getHours();
const minutos = ahora.getMinutes();
const segundos = ahora.getSeconds();
const milisegundos = ahora.getMilliseconds();

console.log(dia, mes, anio, hora, minutos, segundos, milisegundos);
