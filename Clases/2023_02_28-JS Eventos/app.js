/**
 * EVENTOS JS
 * 
 * Relacionar una funcion con la interaccion del usuario
 * 
 * Formas de incluir un evento en HTML
 * 1. Inlcuir como atributo en una etiqueta
 *      Sintaxis:
 *      tipoevento = "funcion"
 * 
 * TIPOS DE EVENTOS
 * -    onclick --> realizar un click sobre el elemento
 * -    onkeydown --> pulsar sin soltar una tecla
 * -    onkeyup --> soltar una tecla
 */

/**
 * Ejercicio 1:
 * Generar input y button en html
 * Generar evento click sobre el button
 * 
 * Resultado: imprimir por consola el contenido del input cuando se activa el evento click
 * NOTA: hay que crear una funcion.
 */
// Paso 1. Ubicarse sobre el elemento
let input = document.getElementsByTagName('input')[0];

// Paso 2. Colocar evento click sobre el <button>
let button = document.getElementsByTagName('button')[0];
button.setAttribute('onclick', 'ej1()');

// Paso 3. Creo la funcion que se va a ejecutar al pulsar boton
function ej1(){
    // Paso 4. Imprimo valor por consola
    console.log(input.value);
}

/**
 * Ejercicio 2:
 * Generar un evento que imprima por consola cada vez que escribo
 * un caracter en el input.
 * 
 * Tipos de eventos:
 * -    onkeydown: pinta el contenido sin la tecla pulsada.
 *                 se activa el evento cuando pulso tecla
 * -    onkeyup: pinta el contenido con la tecla pulsada.
 *              se activa el evento cuando suelto la tecla
 */
// Paso 1. Agregar el evento al <input>
input.setAttribute('onkeydown', 'ej2()');
// input.setAttribute('onkeyup', 'ej2()');

// Paso 2. Genero la funcion ej2()
function ej2(){
    console.log(input.value);
}
