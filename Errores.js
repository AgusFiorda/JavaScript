

//Manejo de errores


// en el try se agrega el codigo a evuluar
try {
  console.log("Codigo a evaluar");
  //creamos un error voluntario para que salte en el catch 
  noExiste;
  //se detiene la ejecucion donde esta el error, si hay mas codigo no lo ejecuta

} catch (error) {
    console.log("captura el error cauzado en el try");
    //imprimimos el error que se genero
    console.log(error);

}
//No suele usarse mucho
finally{
  console.log("Se ejecutara siempre al final de un bloque Try-Catch");
}

console.log("\n\n\n");

try {
  let numero="y";
  //isNaN comprueba si es un numero
  if (isNaN(numero)) {
    throw new Error("No se ingreso un numero");
  }
  console.log(numero*numero);
} catch (error) {
  console.log(`Se produjo el siguiente error ${error}`);
}