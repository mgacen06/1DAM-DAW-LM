/**
 ***************************************************
 ******************* FUNCIONES ********************* 
 *************************************************** 
 *
 * Son utilizadas para reutilizar codigo, ocultar informacion y abstraccion.
 * Por norma general, las funciones son utilizadas para especificar el comportamiento de los objetos.
 * Pueden definirse al margen de los objetos.
 * 
 * 1. Funcion sin argumentos.
 * La definicion se realiza con el siguiente esquema:
 * 
 * function nombre(){
 *      ...
 * }
 * 
 * 2. Funcion con argumentos.
 * Se pueden incluir argumentos separados por comas:
 * 
 * function nombre (argumento1, argumento2){
 *      ...
 * }
 * 
 * 3. Funcion con retorno
 * Una funcion puede tener un valor de retorno utilizando la palabra reservada return.
 * 
 * function nombre (argumento1, argumento2){
 *      ...
 *      return valor;
 * }
 * 
 * 4. Funcion autoejecutable.
 * Una funcion puede ser ejecutada inmediatamente. Este patron consiste en crear una funcion
 * y ejecutarla imediatamente.
 * 
 * (function () {
 *      ...
 * }) ();
 * 
 * 5. Funcion con argumentos.
 * Las funciones pueden ser asignadas a variables o pasadas a otras funcionaes como argumentos.
 * 
 * function (
 *      function () {
 *             return "hola mundo";
 *      }
 * )
 * 
 * 
 */