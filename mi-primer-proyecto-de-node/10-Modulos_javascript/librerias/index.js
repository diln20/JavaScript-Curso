import axios from "axios"
//heckr.io top 10 libraries npm
axios.get('https://pokeapi.co/api/v2/pokemon/charmander')
    .then(function (response) {
        // handle success
        console.log("Success!!!")
        console.log(response.data)
    })
    .catch(function (error) {
        // handle error
        console.log("Error!!!")
        console.log(error);
    })