//como unir dos listas .concat(lista2)


const lista1 = [1, "Hola", 3, 4, 5, 6, true, 8, 9, 10];
const lista2 = [11, undefined, 13, 14, "kenworth", 16, "9", 18, 19, 20];

console.log(lista1.concat(lista2));

const lista3 = lista1.concat(lista2);

console.log(lista3);


//como unir dos listas con el factor de propagacion

console.log(...lista3);

const lista4 = [...lista1, ...lista2];
console.log(lista4);


//ERROR! Mal entendido el concepto de factor de propagacion
const lista5 = [lista1, lista2];
console.log(lista5);

