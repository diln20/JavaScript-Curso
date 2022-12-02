class Persona {
    //Private ->#
    //Private -> solo se puede acceder desde dentro de la clase
    #nombre
    #edad
    #obtenEdad
    //Protected-> _var
    //Protected -> solo se puede acceder desde dentro de la clase y de las clases que hereden de esta
    _isDeveloper = true
    constructor(nom, edad) {
        this.#nombre = nom;
        this.#edad = edad;
    }
    //metodo    
    saludo() {
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`);
    }
    obtenNombre() { //funcion getter -> nos permite acceder de forma controlada a algun atributo protegido
        return this.#nombre
    }
    obtenEdad() {
        return this.#edad
    }

    getEdad() {
        return this.#edad
    }
    setEdad(nuevaedad) {
        this.#edad = nuevaedad
    }

}


const persona1 = new Persona('Juan', 23);
// console.log(persona1);
// console.log(persona1.nombre)
persona1.saludo()
// console.log(persona1.obtenNombre())
// console.log(persona1.#obtenEdad())

// console.log(persona1._isDeveloper)


//Getter -> metodos que nos permiten obtener atributos/metodos privados o protegidos

const edad = persona1.getEdad()
console.log(edad)

// Setter -> metodos que nos permiten cambiar el valor de aluguno de los atributos privados o protegidos

persona1.setEdad(45)
console.log(persona1.getEdad())


