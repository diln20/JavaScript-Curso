//Que son las funciones, como se declaran y como se utilizan

const nom = "Dilan"
saludando(nom);
function saludando(nombre) {
    console.log(`Hola ${nombre} que tal`);
}

function saludar(nombre) {
    console.log("Hola " + nombre);
}

// saludar("Dilan");
let nombre = "Andrey";
console.log(nombre);

despedir(nombre);
console.log(nombre);


function despedir(nombre) {
    nombre = "Juan"
    console.log(`Adios ${nombre}`);
}

///
let Persona = {
    nombre: "Dilan",
    apellido: "Perez"
}
saludarPersona(Persona)
console.log(Persona)

function saludarPersona(objeto = { nombre: "Default", apellido: "Default" }) {
    // objeto.apellido="Heredia"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

saludar()
saludarPersona()
//////////


function imprimeNumeros(numero = 7) {//Parametros por defecto
    console.log(numero);
}

imprimeNumeros(1)


////////

function imprimir(...parametros) {
    console.log(parametros);
}
imprimir(1, 2, 3, 4, 5, 6, "Hola", { id: 1 })


////////

function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const s = suma(1, 2, 3, 4, 9, 15)

console.log(s);

////////
let variable = "hola";


function multiplicar(a = 0, b = 0) {
    console.log(variable);
    let variable_interna = "adios";
    return a * b
}


console.log(multiplicar(2, 3));










