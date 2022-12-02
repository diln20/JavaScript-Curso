//metodos de cadena texto parte(3)
//https://regexr.com

// Language: javascript

let texto_largo = "En las aplicaciones web de Access, el campo Texto largo puede almacenar hasta 2^30-1 bytes y equivale al tipo de datos SQL Server de nvarchar(max). "

console.log(texto_largo.match(/s/g))

//existe la palabra dentro del texto
console.log(texto_largo.includes("terremoto"))


//saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("En"))

//saber si un texto termina con una palabra
console.log(texto_largo.endsWith(""))