

//otra forma de declarar funciones

const saludar=()=> console.log("Hola");

saludar();

//tambien asi, no hace falta los parentesis para pasarle un solo parametro

const saludo2 = nombre => console.log(`Hola ${nombre}`);

saludo2("agustin")

/* const sumar= function (a,b) {
  return a+b;
}
console.log(sumar(1,2)); */

// se puede simplificar asi

const sumar = (a,b) => a+b;

console.log(sumar(2,2));

//recorrer una funcion y forma de declararlo

const numeros=[1,2,3,4,5];

numeros.forEach((el,index)=>
console.log(`${el} esta en la posicion ${index}`)
)