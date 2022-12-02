const boton = document.querySelector("#btn")

// console.log(boton)


boton.addEventListener("click",()=>{
    //console.log("click")
    // alert("se ha hecho click")
    //confirm("¿Estas de acuerdo") && console.log("Ok")
    // confirm("¿Estas de acuerdo") 
    // ? console.log("Ok") 
    // : console.log("No!")

    const respuesta = confirm("¿Seguro?")
    if(respuesta){
        console.log("Esta de acuerdo")
    }else{
        console.log("No estas de acuerdo!")
    }
})

const botoninfo = document.querySelector("#info")
botoninfo.addEventListener("click",()=>{
    const nombre=prompt("cual es tu nombre")
    if(nombre){
    console.log("Tu nombre es "+nombre)
    }else{
        console.log("No has escrito nada")
    }
})

const lista= [
    {
        nombre:"Juan",
        edad: 20
    },
    {
        nombre:"Pedro",
        edad: 30
    },
    {
        nombre:"Maria",
        edad: 40
    }

]


console.log(lista)