const parrafos = document.querySelectorAll(".parrafo")
const secciones= document.querySelectorAll(".seccion")
const boton = document.querySelector(".boton")




parrafos.forEach( parrafos =>{
    parrafos.addEventListener("dragstart", event=>{
    //    console.log("Inicio arrastre")
        console.log("Estoy arrastrando el parrafo: " + parrafos.innerText)
        parrafos.classList.add("dragging")
        event.dataTransfer.setData("id",parrafos.id)
        const elemento_fantasma =document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma,0,0)
    //    console.log(parrafos.innerHTML)
    })
    parrafos.addEventListener("dragend" ,()=>{
        // console.log("Finalizo arrastre")
        parrafos.classList.remove("dragging")
    })
})

secciones.forEach(seccion=>{
    seccion.addEventListener("dragover",event=>{
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy" //copy por defecto
        // console.log("Drag Over")
        //
    })

    seccion.addEventListener("drop",event=>{
        console.log("Drop")
        const id_parrafo=event.dataTransfer.getData("id")
        console.log("Parrafo id: ",id_parrafo)
        // event.dataTransfer
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    }   
    )
})
const papelera = document.querySelector(".papelera")

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})

papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})







