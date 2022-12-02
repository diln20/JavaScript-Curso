// .some()
const arr = [1, 2, 3, 4, 5];

const res = arr.some(valor => valor > 0);
console.log(res);


const existe = arr.some(valor => valor = 2)
console.log(existe);


const listaObjetos = [
    {
        nombre: 'juan',
        edad: 20
    },
    {
        nombre: 'Dilan',
        edad: 23
    },
    {
        nombre: 'Pedro',
        edad: 25
    },
    {
        nombre: 'Juanito',
        edad: 25
    },
    {
        nombre: 'Juanes',
        edad: 29
    }
]


const existePersona = listaObjetos.some(o => o.nombre === 'Juanito')
console.log(existePersona);

//Como obtener una lista a partir de un objeto iterable
const str = "Hola soy Dilan";
console.log(str[7]);
console.log(str.length);
console.log(Array.from(str));

const set = new Set([2, 3, "Hola", 4])
const ar_set = Array.from(set)
console.log(ar_set);

const keys = arr.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys);


