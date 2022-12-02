//Trabajando con Objetos


// const obj ={
//     nombre: 'Juan',
//     profesion: 'Desarrollador Web',
//     edad: 36,
//     musicaRock: true,
//     mostrarInformacion: function(){
//         console.log(`${this.nombre} es ${this.profesion} y su edad es ${this.edad}`);
//     }
// }
// obj.mostrarInformacion()


const obj = {
    id: 4,
    nombre: 'Juan',
    apellido: 'Perez',
    isDeveloper: true,
    musica: ['Rock', 'Trance', 'Electronica'],
    hogar: {
        ciudad: 'Buenos Aires',
        pais: 'Argentina'
    },
}

//acceder a los valores de las propiedades
console.log(obj['apellido']);
console.log(obj.nombre);

const prop = 'musica';
console.log(obj[prop]);

const obj2 = obj;
console.log(obj2);
//afecta a ambos objetos
obj2.nombre = "Andrey"
console.log(obj2.nombre);

console.log(obj.nombre);

//valores primitivos si copia objetos no
let val1 = 4
let val2 = val1

val2 = 6
console.log(val1);
console.log(val2);


//copiar un objeto
const obj3 = { ...obj }
console.log(obj3.nombre);
obj3.nombre = "Andres"
console.log(obj3.nombre);
//no afecta al objeto
console.log(obj.nombre);


//Como ordenar listas de objetos en funcion de una propiedad

const peliculas = [
    { nombre: 'La vida es bella', anio: 1997 },
    { nombre: 'El señor de los anillos', anio: 2001 },
    { nombre: 'El padrino', anio: 1972 },
    { nombre: 'El padrino 2', anio: 1974 },
    { nombre: 'El padrino 3', anio: 1990 },
    { nombre: 'Pulp Fiction', anio: 1994 },
    { nombre: 'Kill Bill', anio: 2003 },
    { nombre: 'Kill Bill 2', anio: 2004 },
    { nombre: 'Django', anio: 2012 },
]

//ordenar por año usando .sort() -> muta el valor original de la lista 
peliculas.sort((a, b) => a.anio - b.anio)
console.log("Forma uno");
console.log(peliculas);



//ordenar por año
peliculas.sort(function (a, b) {
    if (a.anio > b.anio) {
        return 1;
    } else {
        return -1;
    }
}
)
console.log("Forma dos");
console.log(peliculas);

//ordenar por nombre
peliculas.sort(function (a, b) {
    if (a.nombre > b.nombre) {
        return 1;
    } else {
        return -1;
    }
}
)
console.log(peliculas);

//ordenar por nombre de forma inversa
peliculas.sort(function (a, b) {
    if (a.nombre > b.nombre) {
        return -1;
    } else {
        return 1;
    }
}
)
console.log(peliculas);

//ordenar por año de forma inversa
peliculas.sort(function (a, b) {
    if (a.anio > b.anio) {
        return -1;
    } else {
        return 1;
    }
}
)
console.log(peliculas);








