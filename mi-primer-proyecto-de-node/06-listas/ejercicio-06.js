

// Crea un archivo JS que contenga las siguientes líneas
//- Una variable que contenga la lista de la compra(mínimo 5 elementos)
//- Modifica la lista de la compra y añádele "Aceite de Girasol"
//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
//- Una lista de tus 3 películas favoritas(objetos con propiedades: titulo, director, fecha)
//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010(utilizando filter)
//- Una nueva lista que contenga los directores de la lista de películas original(utilizando map)
//- Una nueva lista que contenga los títulos de la lista de películas original(utilizando map)
//- Una nueva lista que concatene la lista de directores y la lista de los títulos(utilizando concat)
//- Una nueva lista que concatene la lista de directores y la lista de los títulos(utilizando el factor de propagación)

const lista_compra = ["Gaseosa", "Pan", "Cafe", "Arroz", "Azucar"]

lista_compra.push("Aceite de Girasol")
console.log(lista_compra)

lista_compra.splice(-1, 1)
console.log(lista_compra)

const lista_film = [
    {
        titulo: "El señor de los anillos",
        director: "Peter Jackson",
        fecha: new Date("2009-12-12")
    }
    ,
    {
        titulo: "Transformers",
        director: "Michael Bay",
        fecha: new Date("2008-07-07")
    }
    ,
    {
        titulo: "Titanes del pacifico",
        director: "Guillermo del Toro",
        fecha: new Date("2018-08-05")
    }
]
// new Date(year,month,day)
const lista_film_P = lista_film.filter(valor => {
    return valor.fecha > new Date("2010-1-01")
})

console.log(lista_film_P)

const lista_directores = lista_film.map(valor => {
    return valor.director
}
)
console.log(lista_directores)

const lista_titulos = lista_film.map(valor => {
    return valor.titulo
}
)
console.log(lista_titulos)

const lista_concat = lista_directores.concat(lista_titulos)
console.log(lista_concat)

const lista_concat2 = [...lista_directores, ...lista_titulos]
console.log(lista_concat2)



