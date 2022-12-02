//break y continue
//break: rompe el ciclo
//continue: salta la iteracion
//labels


//Ejemplo de break
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

// Ejemplo de continue
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         continue;
//     }

let unidades = 0;
let decenas = 0;

bucleDecenas: while (true) {
    bucleunidades: while (true) {
        console.log(`el numero actual es: ${decenas}${unidades}`)
        unidades++;
        if (unidades === 10) {
            unidades = 0;
            break bucleunidades;
        }
    }
    if (decenas === 3) {
        console.log(`el numero actual es: ${decenas}${unidades}`)
        break bucleDecenas;
    }
    decenas++;
}
console.log("fin del programa")
