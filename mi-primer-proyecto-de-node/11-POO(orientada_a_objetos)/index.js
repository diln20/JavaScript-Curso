const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 28,
    isDeveloper: true,
    saludo: function () {
        console.log('Hola Mundo');
    }
};

// console.log(persona);
persona.saludo()


// Path: 11-POO(orientada_a_objetos)\index.js
const otra_persona = {
    nombre: 'Dilan',
    apellido: 'Torres',
    edad: 15,
    isDeveloper: true,
    saludo: function () {
        console.log('Hola Mundo');
    }
}

otra_persona.saludo()


const crearPersona = (nombre,apellido,edad,isDeveloper)=>{
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        isDeveloper: isDeveloper,
    }
}


const nueva_persona = crearPersona("Juan","topo",23,true)
console.log(nueva_persona)

const nueva_persona2 = crearPersona("luis","snow",27,true)
console.log(nueva_persona2)