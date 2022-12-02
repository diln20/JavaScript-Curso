class Estudiante {
    nombre
    asignaturas = ["Javascript", "HTML", "CSS"]

    constructor(nombre) {
        this.nombre = nombre
    }

    obtenDatos() {
        return this.nombre + " " + this.asignaturas
    }
}


let estudiante1 = new Estudiante("Juan")
console.log(estudiante1.obtenDatos())