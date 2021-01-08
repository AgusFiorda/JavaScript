const numeros=[1,2,3];

const[uno,dos,tres] = numeros;

console.log(uno,dos,tres);

let persona={
nombre:"Agus",
apellido:"Fiorda",
edad:21
}

//en los objetos las variables tiene que tener el mismo nombre que en el objeto creado, por ejemplo no se puede poner name donde es el nombre,
let {nombre,apellido,edad}= persona;
console.log(nombre,apellido,edad);