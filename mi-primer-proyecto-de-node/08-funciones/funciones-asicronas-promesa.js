//Funciones asincronicas


function miAsinc() {
    //Hace una llamada a una base de datos externa
    //Puede darnos algun error
}

const miPromise = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    //si esta todo correcto
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})

miPromise
    .then(() => console.log("Todo bien"))
    .catch(() => console.log("Todo mal"))
    .finally(() => console.log("Yo me ejecuto siempre"))

