//Metodos de cadenas de texto (parte 2)

let str = "Dilan"
let db = "DILAN"
//metodo para convertir un string a mayusculas
console.log(str.toUpperCase())

console.log(str.toUpperCase === db.toUpperCase)
console.log(str.toLowerCase === db.toLowerCase)


//Formas de concatenar dos cadenas de caracteres

let str_1 = "hola soy la primera cadena"

let str_2 = "hola soy la segunda cadena"

console.log(str_1 + " " + str_2)
//mejor usar este
console.log(str_1.concat(" ", str_2))

console.log(`${str_1} ${str_2}`)


//todo los espacios eliminar espacios al principio y al final
let str_3 = "   hola soy la primera cadena   "
console.log(str_3.length)
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

//obtener un caracter de una cadena de texto

let str_4 = "hola soy la segunda cadena"
console.log(str_4.charAt(5))
console.log(str_4[5])

//Obtener la posicion de una palabra dentro de una cadena de caracteres
let str_5 = "hola soy la quinta cadena"
console.log(str_5.indexOf("cadena"))
console.log(str_5.charAt(19))
console.log(str_5.lastIndexOf("cadena"))





