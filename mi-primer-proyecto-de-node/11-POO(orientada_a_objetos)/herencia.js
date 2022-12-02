// InHeritance - Herencia


class Persona {
    _nombre
    _edad
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }
    saludo() {
        console.log(`Hola, soy ${this._nombre} y tengo ${this._edad} años`);
    }
}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad);
        this.lenguaje = lenguaje;
    }
    saludo() { //Override
        super.saludo()
        console.log(`y soy desarrollador de ${this.lenguaje}`)
    }
}

const nuevodev = new Desarrollador("Dilan", 23, "Javascript")
console.log(nuevodev);

nuevodev.saludo()


//Polimorfismo - Polymorphism=> varias formas