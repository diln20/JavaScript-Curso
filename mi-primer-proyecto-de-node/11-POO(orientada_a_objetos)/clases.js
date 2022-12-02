class Persona {
    nombre;
    edad;
    isDeveloper;
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }
    //metodo    
    saludo() {
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`);
    }
}

const persona1 = new Persona('Juan', 23, true);
console.log(persona1);
const persona2 = new Persona('Pedro', 25, false);
persona1.saludo()

let numero = 60
console.log(typeof persona1)
console.log(persona1 instanceof Persona)



