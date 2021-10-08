/*
//Operadores

//? Operadores matemáticos

//* Adición -> +
const num1 = 10;
const num2 = 3;
const suma = num1 + num2;

console.log(suma);

console.log(num1 + num2);



//* Concatenación -> +
const texto1 = 'hola';
const texto2 = ' mundo';

console.log('Concatenación de textos:' ,texto1 + texto2);



//* Sustracción -> -
console.log('Resta:', num1 - num2);



//* Multiplicación -> *
console.log('Multiplicación:', num1 * num2);



//* División -> /
const division = num1 / num2;

// Para hacer que una resultado con decimales tenga un número determinado de decimales usamos la función .toFixed() con el número de decimales que queremos.
//! El problema es que lo convierte en un string
const divisionDosDecimales = division.toFixed(2); // '3.33'

//! Para convertir un String a números utilizamos Number()
const divisionNumero = Number(divisionDosDecimales);

console.log('División:', division);
console.log('División:', divisionDosDecimales);




//* Módulo -> %
console.log(num2 % num1);

console.log(454875465460 % 5); // Es múltiplo de 5
console.log('Par:' , 2356 % 2); // Es múltiplo de 2, por ende, par.
console.log('Impar:' , 235453 % 2); // NO es múltiplo de 2, por ende, impar.

*/

//?  Operadores de asignación
//! Asignan un NUEVO VALOR a una variable

//* Símbolo igual -> =
let numX = 100;

//* -> +=
let a = 10;
let b = 5;

a = 5;
a = a + 2;
b = b + 10;

//! += SIEMPRE ASIGNA UN VALOR NUEVO Y CAMBIA LA VARIABLE!!
b += 10;

console.log('a =', a);
console.log('b =', b);


//* -> -=

b = b - 5;
b -= 5;

//* -> *=

b = b * 5;
b *= 5;

//* -> /=

b = b / 5;
b /= 5;

//* -> %=

b = b % 5;
b %= 5;


//? Operadores de incremento y decremento
//! TIENEN EL MISMO COMPORTAMIENTO QUE LOS DE ASIGNACIÓN

let z = 23;
z = z + 1; // -> 24
z += 1; // -> 25
z++; // -> 26
z--; // -> 25

console.log('Z:', z);
