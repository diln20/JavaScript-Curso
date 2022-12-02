function funcion_sin_parametros() {
    return true;
}


const miPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hola soy una promesa")
    }
        , 5000)//milisegundos
})

function* GenerarI() {
    let i = 0;
    while (true) {
        yield i += 2; //esperar hasta que se vuelva a llamar
    }
}





