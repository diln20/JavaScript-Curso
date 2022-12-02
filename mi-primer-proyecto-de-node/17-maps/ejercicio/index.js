let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  

   marker = new google.maps.Marker({
        position: {
            lat:52.59660899340232,
            lng: 13.887530802046435
        },
        map,
        title: "Posición Inicial"
    })
    
   marker = new google.maps.Marker({
        position:{
            lat:48.86808221159132,
            lng: 2.329340237505617
        },
        map,
        title: "Posición Inicial"
    })
    
   marker = new google.maps.Marker({
        position: {
            lat: 7.898517008351162,
            lng: -72.49760934455631,
        },
        map,
        title: "Posición Inicial"
    })

}