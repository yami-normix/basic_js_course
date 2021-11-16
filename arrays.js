var frutas = ["Manzana", "Banano", "Fresa", "Cereza"];

console.log(frutas);
frutas[0];
//Ver la cantidad de elementos
console.log(frutas.length);

//Metodos de uso del Array
var masFrutas = frutas.push("Uvas"); //Empujandole uvas al final del Array
var menosFrutas = frutas.pop("Uvas"); //Eliminando las uvas al final del Array
var nuevaFrutaPosicionUno = frutas.unshift("Uvas"); //Agregando un elemento al inicio del Array
var borrarPrimerFruta = frutas.shift("Uvas"); //Borrar el primer elemento del Array
var posicionIndex = frutas.indexOf("Cereza"); //Preguntando la posición de Cereza