// Crea un nuevo proyecto de Node

// - Crea un fichero index.html (utiliza el comando "!")

// - Crea un fichero index.js

// - Integra el fichero index.js en el html

// - En el fichero index.js:

// - Crea una variable con tu nombre

// - Crea una variable con tu apellido

// - Crea un objeto con tu nombre y tu apellido

// - Almacena el objeto anterior en la SessionStorage

// - Almacena el objeto anterior en la LocalStorage

// - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior

// - Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies

// - Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo

// - Observa cómo la SessionStorage está vacía

// - Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador

// - Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado


const nombre="Dilan"

const apellido="Torres"


let objeto={
    nombre:nombre,
    apellido:apellido
}


// sessionStorage.setItem("objeto",JSON.stringify(objeto))

// localStorage.setItem("objeto",JSON.stringify(objeto))

let ahora = new Date()

document.cookie = `Cookie=${JSON.stringify(objeto)};expires=${new Date(ahora.getTime() + 2 * 60000)}`

