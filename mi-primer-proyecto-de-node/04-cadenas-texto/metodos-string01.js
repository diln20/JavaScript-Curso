//metodos mas utilizados


//metodo para obtener la longitud de un string

let str = "Hola mundo dilan que tal "
console.log(str.length)


//obtener partes de cadenas de caracteres
//slice() subtring() substr()
let slice_str = str.slice(5, 10)
console.log(slice_str)

let substring_str = str.substring(5, 10)
console.log(substring_str)

let substr_str = str.substr(5, 10)
console.log(substr_str)


//metodo para reemplazar partes de una cadena de caracteres
let cadena = "Hola mi nombre es Dilan"
console.log(cadena.replace("Dilan", "Andrey"))

//
let cadena2 = "Hola mi nombre es los Dilan mi nombre es  los Andrey los"
//reemplaza la primera instancia si no se agrega /-----/g


//console.log(cadena2.replace(/los/g, "los"))
console.log(cadena2.replace(/los/g, "Andrey"))


