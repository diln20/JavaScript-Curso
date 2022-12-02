// $("li").hide()
// $(selector).accion()

// $("h1").hide()

// $(document).ready(()=>{

$(()=>{
    //Selectores:
    // id="el-1" => "#el-1"
    // class="el-1" => ".el-1"
    // tag="h1" => "h1"
    // $("h1").hide()
    // $("h1").show()
    // $("h1").toggle()
    // $("h1").fadeOut()
    // $("h1").fadeIn()
    // $("h1").fadeToggle()
    // $("h1").slideUp()
    // $("h1").slideDown()
    // $("h1").slideToggle()
    // $("h1").animate({opacity:0.5}, 2000)
    //$("#el-1").hide()
    $(".hide-btn").click(()=>{
        console.log("ocultando...")
        // $("h1").hide()
        $("h1").fadeOut()
    })
    $(".show-btn").click(()=>{
        console.log("mostrando...")
        // $("h1").show()
        $("h1").fadeIn()
    })

    $("li").click(()=>{
        $("h1").css({color:"red"})
    })
    $("li").dblclick(()=>{
        $("h1").css({color:"blue"})
    })

    $(".new-element-f").click(()=>{
         //al principio agrega
     $("ul").prepend("<li>Elemento first</li>")
    })
    $(".new-element-l").click(()=>{
       //al final agrega
    $("ul").append("<li>New Element last</li>")
   })
   $("li").mouseenter((elem)=>{
        // console.log("ah entrado el raton (hover)")
        //javascript nativo
        elem.target.style.color ="blue"
   })
   $("li").mouseleave((elem)=>{
    // console.log("ah entrado el raton (hover)")
    //javascript nativo
    elem.target.style.color ="black"
})
    

})


// })