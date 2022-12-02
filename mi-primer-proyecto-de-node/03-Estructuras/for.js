//bucles


//for(inicializacion;condicion;actualizacion){}
//for(var i=0;i<10;i++){console.log(i)}

//i=i+1
//i+=1
//i++

for (let i = 0; i < 10; i += 3) {
    console.log(i);
}

let lista = [1, 4, 6, 2, 3, 5, 6, 10, 12]

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}

//Estructura for ..... of

for (let valor of lista) {
    console.log(valor)
}


//Estructura for Each
lista.forEach(
    valor => {
        console.log(valor)
    }
)


//Estructura for ..... in



let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    isDeveloper: true
}


for (let propiedad in persona) {
    console.log(propiedad)
    console.log(persona[propiedad])
}


//Estructura while



