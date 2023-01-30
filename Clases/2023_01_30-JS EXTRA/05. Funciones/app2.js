/**
 * 
 ***************************************************
 ******************* FUNCIONES ********************* 
 *************************************************** 
 * 
 * En JavaScript, hay varias formas de crear funciones. A continuación te describiré las tres formas más comunes:
 * 
 * Declaración de función: Es la forma más común de crear funciones en JavaScript. Utiliza la palabra clave function, seguida del nombre de la función y una lista de parámetros entre paréntesis. El cuerpo de la función se escribe entre llaves.
 * 
 * function nombreFuncion(parametro1, parametro2) {
 *   // cuerpo de la función
 * }
 * 
 * 
 * 
 * Expresión de función: Es otra forma de crear funciones en JavaScript. Utiliza la palabra clave function pero en este caso se asigna a una variable. El nombre de la función es opcional en esta forma de crear una función.
 * 
 * let miFuncion = function (parametro1, parametro2) {
 *   // cuerpo de la función
 * };
 * 
 * 
 * 
 * 
 * Funciones de flecha: Es una forma nueva y moderna de crear funciones en javascript, Es más corta y fácil de leer, Utilizando la sintaxis de las arrow functions.
 * 
 * let miFuncion = (parametro1, parametro2) => {
 *   // cuerpo de la función
 * };
 * 
 * En todos los casos, el nombre de la función es opcional, pero es recomendable darle un nombre para facilitar su depuración y mantenimiento. Los parámetros son opcionales también, y pueden ser utilizados para pasar valores a la función.
 * 
 * 
 * 
 * Una vez creada una función, se puede llamar a través de su nombre seguido de paréntesis, pasando los argumentos necesarios si es que hay alguno.
 * 
 * 
 * nombreFuncion(argumento1, argumento2);
 * Es importante mencionar que las funciones son objetos de primer nivel en javascript, lo que significa que pueden ser asignadas a variables, pasadas como argumentos, y retornadas como valor de otras funciones.
 * 
 * 
 ***************************************************
 **************** FUNCIONES ARROW ****************** 
 *************************************************** 

 * 
 * Las funciones de flecha (arrow functions) son una forma moderna de crear funciones en JavaScript que proporcionan una sintaxis más corta y fácil de leer en comparación con las funciones tradicionales.
 * 
 * La sintaxis de una función de flecha se ve así:
 * 
 * 
 * let miFuncion = (parametro1, parametro2) => {
 *   // cuerpo de la función
 * };
 * En esta sintaxis, se utiliza una flecha (=>) para separar los parámetros de la función del cuerpo de la función. Si la función solo tiene un parámetro, se pueden omitir los paréntesis. Si la función no tiene parámetros, se deben dejar los paréntesis vacíos.
 * 
 * 
 * let miFuncion = parametro => {
 *   // cuerpo de la función
 * };
 * let miFuncion = () => {
 *   // cuerpo de la función
 * };
 * Además, si el cuerpo de la función solo tiene una expresión, se puede omitir las llaves y el return, ya que la función de flecha devuelve automáticamente el valor de esa expresión.
 * 
 * 
 * let miFuncion = (parametro1, parametro2) => parametro1 + parametro2;
 * Para identificar los argumentos que tiene una función de flecha, simplemente debes revisar el listado de parámetros entre paréntesis en la declaración de la función, esos son los argumentos que se esperan recibir cuando se llama a la función.
 * 
 * Es importante mencionar que las funciones de flecha no tienen su propio objeto this, y heredan el this de su entorno de ejecución.
 * 
 * 
 * 
 */