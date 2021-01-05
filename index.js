  //si se crea la funcion asi lo que ocurre es que la podes invocar antes de que la tengas creada.

    function unaFuncion() {
      console.log("uno");
      console.log("dos");
      console.log("tres");
      return 4
    }

    let resultado = unaFuncion() + 2
    console.log(resultado)

    //funcion anonima
    //si se crea la funcion asi se puede invocar despues de que la funcion haya sido creada, antes no
    const funcionExpresada = function () {
      console.log("Esto es una funcion expresada, es decir una funcion que se le ha a agreado como valor a una variable, si la llamamos antes de su definicion JS nos lanza un error")

    }

    console.log(funcionExpresada())

    //declaracion de arreglos con []
    let array = ["Hola", 1, 2, 3, [4, 5, 6]];
    console.log(array);

    const colores = ["Rojo", "Negro", "Blanco"];
    colores.push("Amarillo");


    //el primer parametro es el valor "el = elemento" y el segundo elemento es el "index = indice"
    colores.forEach(function (el, index) {
      console.log(`<li id="${index}">${el}</li>`)

    });



    //Objetos

/*
    const agus = {
      nombre: String,
      apellido: String,
      edad: Number,
      pasatiempos: [],
      casado: Boolean,
      email: String,
      instagram: String,
      saludar: function () {
        console.log("hola");
      }
    }
    agus.nombre = "agustin";
    agus.apellido = "Fiordalisi";
    agus.edad = 21;
    agus.pasatiempos = ["correr", "futbol"];
    agus.casado = true;
    agus.instagram = "@fiiorda";*/

    const Persona= function(nombre,apellido,edad,soltero,pasatiempos) {
      this.nombre=nombre;
      this.apellido=apellido;
      this.edad=edad;
      this.soltero=soltero;
      this.pasatiempos=pasatiempos;

      this.saludar=function () {
        return `${this.nombre} ${this.apellido}`
      }
    }

    const p1= new Persona();

    /*p1.nombre=prompt("escriba su nombre: ");
    p1.apellido=prompt("escriba su nombre: ");
    p1.soltero=prompt("es soltero?: ");
    p1.pasatiempos=[prompt("escriba sus pasatiempos: ")];
  */
    const SuperPersona = function (nombre,apellido,edad,soltero,pasatiempo) {

      Persona.call(this,nombre,apellido,edad,soltero,pasatiempo)

      this.correrRapido=function(){return true};
      
    } 
    SuperPersona.prototype= Object.create(Persona.prototype);
    const p2 = new SuperPersona();

    p2.nombre="zancho";
    p2.apellido="Panza";
    console.log("Corre rapido?",p2.correrRapido(),p2.saludar());


    

