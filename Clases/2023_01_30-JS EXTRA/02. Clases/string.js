/**
**************************************************
 ******************* CLASE STRING *****************
 ************************************************** 
 * 
 * La clase String en JavaScript es una clase nativa que se utiliza para trabajar con cadenas de texto.
 * 
 * Una cadena de texto es un conjunto de caracteres que se encierran entre comillas simples o dobles.
 * 
 * Para crear una nueva instancia de la clase String se puede utilizar la sintaxis new String(texto) o simplemente agregando una cadena de texto a una variable.
 * 
 * 
 * PROPIEDADES
 * En la clase String se utilizan dos propiedades principalmente:
 * 
 * -    constructor: devuelve la funcion constructor de un objeto String
 *      Ejemplo:
 *      let nombre = "Juan";
 *      console.log(nombre.constructor);  // devuelve la función String()
 * 
 * -    prototype: propiedad que permite añadir propiedades y metodos a las instancias de String.
 *      Ejemplo:
 *      String.prototype.contarVocales = function() {
 *          let vocales = "aeiouAEIOU";
 *          let contador = 0;
 *          for(let i = 0; i < this.length; i++) {
 *              if (vocales.indexOf(this[i]) !== -1) {
 *              contador++;
 *              }
 *          }
 *          return contador;
 *      }
 *      let frase = "Hola mundo";
 *      console.log(frase.contarVocales());  // devuelve 3
 * 
 * 
 * METODOS
 * En la clase String existen muchos metodos para manipular cadenas. Entre ellos tenemos los siguientes:
 * 
 * length: Devuelve la longitud de una cadena de texto. 
 *      Ejemplo: 
 * "    Hello World".length devuelve 11.
 * 
 * concat(string1, string2, ...): Concatena dos o más cadenas de texto. 
 *      Ejemplo: 
 *      "Hello" .concat(" ", "World") devuelve "Hello World".
 * 
 * toUpperCase(): Devuelve la cadena de texto en mayúsculas. 
 *      Ejemplo: 
 *      "Hello World".toUpperCase() devuelve "HELLO WORLD".
 * 
 * toLowerCase(): Devuelve la cadena de texto en minúsculas. 
 *      Ejemplo: 
 *      "Hello World".toLowerCase() devuelve "hello world".
 * 
 * indexOf(substring): Devuelve la posición de la primera aparición de una subcadena de texto. 
 *      Ejemplo: 
 *      "Hello World".indexOf("World") devuelve 6.
 * 
 * lastIndexOf(substring): Devuelve la posición de la última aparición de una subcadena de texto. 
 *      Ejemplo: 
 *      "Hello World, World".lastIndexOf("World") devuelve 13.
 * 
 * slice(start, end): Devuelve una porción de la cadena de texto según un índice de inicio y fin. 
 *      Ejemplo: 
 *      "Hello World".slice(6,11) devuelve "World".
 * 
 * substring(start, end): Devuelve una porción de la cadena de texto según un índice de inicio y fin. 
 *      Ejemplo: 
 *      "Hello World".substring(6,11) devuelve "World".
 * 
 * substr(start, length): Devuelve una porción de la cadena de texto según un índice de inicio y una longitud. 
 *      Ejemplo: 
 *      "Hello World".substr(6, 5) devuelve "World".
 * 
 * replace(oldValue, newValue): Reemplaza un valor específico en una cadena de texto. 
 *      Ejemplo: 
 *      "Hello World".replace("World", "Universe") devuelve "Hello Universe".
 * 
 * trim: Este método elimina los espacios en blanco al principio y al final de una cadena.
 *      Ejemplo:
 *      let str = " Hello World ";
 *      console.log(str.trim()); // "Hello World"
 * 
 * split: Este método divide una cadena en un arreglo de subcadenas.
 *      Ejemplo:
 *      let str = "Hello World";
 *      console.log(str.split(" ")); // ["Hello", "World"]
 * 
 * 
 * 
 *
 */