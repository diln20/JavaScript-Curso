const htext= document.getElementById("h-texto")


console.log(htext)



htext.addEventListener("cambioTexto",
    evento => {
        console.log(evento.detail)
        htext.innerText=evento.detail.texto
        htext.style.color=evento.detail.color
    }
)


function cambiarTexto(nuevoTexto, color){
    const evento= new CustomEvent("cambioTexto",{
    detail:{
        texto:nuevoTexto,
        color
    }
    })
    htext.dispatchEvent(evento)
}


