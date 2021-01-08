//lo que definimos como clases en JS son prototipos

/* const animal ={
nombre:"Snoopy",
sonar(){
  console.log("Hago sonidos porque puedo");
}

} 

console.log(animal);
*/

/* function Animal(nombre,genero) {
  //atributos
  this.nombre=nombre;
  this.genero=genero;

  //metodos
  this.sonar=function() {
    console.log("Hago sonidos porque puedo");
    
  }
  this.saludar =function () {
    console.log(`Hola soy ${this.nombre}`);

    
  }

} */

/* function Animal(nombre,genero) {
  //atributos
  this.nombre=nombre;
  this.genero=genero;
}
  //metodos

  //lo ponemos por afuera para que no tenga los metodos asignados y los llamen solo los objetos que los necesiten o los usen y no todos de tipo animal
  Animal.prototype.sonar=function() {
    console.log("Hago sonidos porque puedo");
    
  }
  Animal.prototype.saludar =function () {
    console.log(`Hola soy ${this.nombre}`);

  }

const snoopy= new Animal("Snoopy","Macho"),
lolaBunny= new Animal("Lola Bunny","Hembra");

console.log(snoopy);
console.log(lolaBunny);


//HERENCIA PROTOTIPICA (SE PUEDE HACER CON CLASES PERO ES PARA ENTENDER COMO LO MANEJA JS)

function Perro(nombre,genero,tamanio) {
//el super es para hacer la herencia 
  this.super=Animal;
  this.super(nombre,genero);
  this.tamanio=tamanio;
  
}
//perro hereda de animal
Perro.prototype= new Animal();
Perro.prototype.constructor=Perro;

//sobreescribimos el metodo de sonar para perro
Perro.prototype.sonar= function () {
  console.log("Mi sonido es un ladrido");
}

Perro.prototype.ladrar= function () {
  console.log("Gauuuuu Gauuuu");
}

const perrito= new Perro("coco","Macho","mediano");

console.log(perrito); */

class Animal {
  //atributos
  constructor(nombre,genero){
  this.nombre=nombre;
  this.genero=genero;
}

  //metodos
  sonar() {
    console.log("Hago sonidos porque puedo");
    
  }
  saludar() {
    console.log(`Hola soy ${this.nombre}`);

  }

} 
//para que herede de animal se usa extends
class Perro extends Animal{
constructor(nombre,genero,tamanio){
  super(nombre,genero);
  this.tamanio=tamanio;

}
sonar(){
  
  console.log("Soy un perro y hago lo que quiero")
}
ladrar(){
  console.log("gau gauuuu !!!")
}
}


const gato= new Animal("gatito","Hembra"),
bartolo=new Perro("Perro","Macho","pequeño");

console.log(gato);
console.log(bartolo);
gato.sonar();
gato.saludar();
bartolo.sonar();
bartolo.ladrar();