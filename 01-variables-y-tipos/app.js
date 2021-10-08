/*  Comentarios en bloque
puedo hacer varias líneas sin problema
*/

// Comentarios de una sola línea

// console.log() sirve para imprimir cualquier cosa en la consola
// console.log('hola');

// Os enseño la forma de llamar a las variables "var" pero ya no se utiliza.


//* Variables
//Declarar una variable
var nombre;

// Inicializar una variable
nombre = 'Ivan';

// Reasignar un valor a una variable
nombre = 23;

//! ECMAScript 6 -> 2015
// Let se usa para crear variables que pueden ser reasignadas
let nombre2 = 'Soraya';
let numero = 34;


// const se usa cuando no queremos que se pueda reasignar un valor a esa variable "constante" -> Si lo hacemos dará error
const numero2 = 23;
// numero2 = 14;

// Se suelen poner en mayúsculas las variables que ya son valores fijos de serie
const PI = 3.14159;


//* Maneras de mostrar en pantalla código javascript

// Escribe en la consola
// console.log(numero2);

// Muestra una alerta en mi web que hay que aceptar para que siga ejecutando el código
// window.alert(numero2);

// Escribe el código en mi HTML
// document.write(numero2);

//* Tipos de datos PRIMITIVOS que podemos almacenar 


//? String
// Las de toda la vida
let textoSimples = 'Esto es un texto con "comillas" simples';
let textoDobles = "Esto es un texto con 'comillas' dobles";

//! ECMAScript 6 -> ES6
// Permite hacer saltos de línea
let textoBackticks = `Esto es un texto 
con backticks`;

console.log(textoSimples);
console.log(textoDobles);
console.log(textoBackticks);

//? Number
numero = 2;
numero = 2.4;
numero = -5;
numero = -2.7;

//? Boolean
let verdadero = true;
let falso = false;

//? Undefined

let variable = undefined; // redundante
let variable2;

console.log(variable); //  -> undefined
console.log(variable2); // -> undefined

//? null
let valorNulo = null;

//? Symbol -> No lo explico!! :)