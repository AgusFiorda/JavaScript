

//Parametro Rest 
//...c dice que puede tener mas valores y si no se agrega un tercer valor no pasa nada.
function sumar(a,b,...c) {
  let resultado=a+b;
  c.forEach(function(n) {
    resultado+=n;
  });
  return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));
console.log(sumar(1,2,3,4,5,6));
console.log(sumar(1,2,3,4,5,6,7));

//SPREAD

const arr1=[1,2,3,4,5],
arr2=[6,7,8,9,0];

//junta los dos arreglos por separado
console.log(arr1,arr2);

//junta los dos arreglos en uno
const arr3=[...arr1,...arr2];
console.log(arr3)

