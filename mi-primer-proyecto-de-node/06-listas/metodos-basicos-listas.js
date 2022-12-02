//Como trabajar con listas(arrays, arreglos , vectores)

//Declaracion de un arreglo
// let array = new Array(2);
let var1 = 45
let array = [1, 2, { id: 5 }, 4, 5, 6, "Hola", 8, var1];
console.log(array);


//Acceder a un elemento del arreglo
//array[indice] => 0,1,2,3,4,5,6,7,8
array[0];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);

// Metodos para introducir nuevos valores en nuestros arrays
// .push() unshift() => Mutan el valor de nuestro array
//valores al final -> Push
array.push("final")
console.log(array);

//valores al inicio -> unshift
array.unshift("inicio")
console.log(array);

//Metodos para eliminar valores de nuestros arrays
// .pop() shift() => Mutan el valor de nuestro array

const array2 = [1, 3, "hola", false]

//valores al final -> pop
array2.pop()
console.log(array2);
array2.pop()
console.log(array2);
//valores al inicio -> shift
array2.shift()
console.log(array2);

//Metodos para eliminar,modificar o añadir valores de nuestros arrays
// .splice(x,y,z)
const array3 = [1, 2, 3, 4, 5, 6]

//Eliminar valores .splice( indice , numvaloresaeliminar)
array3.splice(2, 1)
console.log(array3);

//Añadir valores .splice( indice , 0 , valor)
array3.splice(2, 0, "hola")
console.log(array3);

//Modificar valores .splice( indice , 1,  valores)
array3.splice(2, 1, 3)
console.log(array3);

