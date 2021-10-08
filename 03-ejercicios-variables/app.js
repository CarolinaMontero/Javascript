//* Ejercicio 1
// Escribir un programa que calcule el número de segundos que existen en un día. Para ello debemos crear 3 variables: horas, minutos y segundos. Multiplicaremos los segundos de un minuto por los minutos de una hora, por las horas de un día. El resultado lo guardaremos dentro de otra variable.

// Como todo el mundo sabe, un día tiene 86400 segundos.

const HORAS = 24;
const MINUTOS = 60;
const SEGUNDOS = 60;

const segundosDelDia = HORAS * MINUTOS * SEGUNDOS;
console.log(segundosDelDia); // 86400
console.log('Un día tiene ' + segundosDelDia + ' segundos.' ); // Un día tiene 86400 segundos.



//* Ejercicio 2
// Hacer un conversor de euros a dólares. Crearemos una variable llamada "euros" con un valor inicial de 7. Tenemos que calcular ese valor en dólares. Supondremos que un euro son dos dólares.

const DOLAR = 1.155;
const euros = 7;

const resultadoEnDolares = euros * DOLAR;

console.log(euros + ' euros son aproximadamente ' + resultadoEnDolares + ' dólares.');

//* Ejercicio 3
// El IVA para ciertos artículos es del 21%. Realiza un programa que a partir de una variable precio inicializada con valor 100, calcule el precio con IVA añadiendo el símbolo de euros al final.

const IVA = 21;
const precio = 500;
const parteDeIva = (precio * IVA) / 100;

const precioMasIva = precio + parteDeIva;
console.log('El precio final con el ' + IVA + '% de IVA de ' + precio + ' = ' + precioMasIva);
