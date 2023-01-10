/**
 * CONSOLE
 * Esta herramienta me sirve para mostrar los datos de distintos elementos en la consola del navegador (inspeccionar).
 * 
 * sintaxis:
 * console.log('CONTENIDO');
 * 
 * Ejemplo:
 * console.log('Estamos en clase de lenguajes de marcas');
 */


/**
 * PROMPT
 * 
 * Esta herramienta interacciona con el usuario para pedir datos.
 * El dato que recibe el prompt es una CADENA DE CARACTERES.
 * 
 * sintaxis:
 * prompt('mensaje');
 * - mensaje es una cadena de texto OPCIONAL que sale en la ventana emergente
 * 
 * Ejemplo:
 * prompt('Dame un numero del 1 al 10')
 */

/**
 * ALERT
 * 
 * Esta herramienta muestra una ventana emergente con un dato concreto.
 * 
 * sintaxis:
 * alert('mensaje');
 * - mensaje es una cadena de caracteres OPCIONAL.
 * 
 * Ejemplo:
 * alert('Esto es un mensaje');
 * alert('El numero introducido es ' + prompt('Introduce un numero del 1 al 10'));
 */

/**
 * VARIABLES
 * 
 * Existen tres tipos de variables en javascript:
 * - const: contiene un valor constante en todo el documento.
 * - let: variable con contenido.
 * - var: variable con contenido.
 * 
 * sintaxis:
 * var NOMBRE;
 * var NOMBRE = 'CONTENIDO';
 * 
 * A la hora de nombrar las variables debemos cumplir los siguientes casos:
 * - No empieza por un numero.
 * - Pueden estar formadas por caracteres, numeros y simbolos ($ _).
 * 
 * Ejemplo:
 * let 1cosa;           // incorrecto
 * let _cosa            // correcto
 * let __$$_cosa        // correcto
 * let cosa1            // correcto
 * 
 * let otraCosa;        // CamelCase
 * let otra_cosa;       // Snake Case
 * 
 * 
 * 
 * TIPOS
 * Dos grupos principales de tipos: primitivos y de referencia o clase.
 * 
 * - Primitivos: number, boolean, string. Ademas tenemos null y undefined.
 *      + undefined: hace referencia a variables que estan creadas pero no tiene valor.
 *      + null: 
 *          * es null cuando se asigna como valor a una variable. 
 *          * es null cuando hace referencia a un objeto que no existe
 * 
 * Ejemplos:
 * let mesa;               // undefined
 * let silla = null;       // null
 * 
 * - Clase: Boolean, Number, String.
 * 
 * 
 * CONVERSIONES
 * Existen funciones que realizan conversiones de tipos:
 * - toString(): convertir un dato en una cadena de caracteres.
 * - parseInt(): convierte un dato en un numero.
 * 
 * Ejemplo:
 * parseInt('5');       // 5
 * toString(5);         // '5'
 * 
 */

/**
 * Ejercicio: 
 * Escribe un programa que pida un valor al usuario y lo devuelva por alert y por consola sumandole 5
 */
// let numero = parseInt(prompt('dame un numero del 1 al 10')) + 5;
// alert(numero);
// console.log(numero);

/**
 * Ejercicio: 
 * Escribe un programa que pida al usuario dos numeros y devuelva la suma de ambos por alert o por consola.
 */
// let numero1 = parseInt(prompt('escribe el primer numero'));
// let numero2 = parseInt(prompt('escribe otro numero'));
// alert('El resultado de la suma es: ' + (numero1 + numero2));
// console.log('El resultado de la suma es: ' + (numero1 + numero2));

/**
 * OPERADORES. 
 * 
 * TYPEOF
 * Determina el tipo de la variable. Los posibles valores de retorno son:
 * - tipos primitivos: undefined, boolean, string, number.
 * - tipos referencia: objeto.
 * 
 * sintaxis:
 * typeof VARIABLE;
 * 
 * Ejemplo:
 * let a = 5;
 * let b = '5';
 * let c = true;
 * 
 * typeof a;    // devuelve 'number'
 * typeof b;    // devuelve 'string'
 * typeof c;    // devuelve 'boolean'
 * 
 * 
 * INSTANCEOF
 * Determina la clase de cada objeto
 * Esto es necesario ya que typeof no cubre todos  los casos necesarios en los valores de tipo object.
 * 
 * instanceof devuelve unicamente:
 * - true: si pertenece a dicha clase.
 * - false: si no pertenece a dicha clase.
 * 
 * Ejemplos:
 * let d = new String('a');
 * 
 * d instanceof String;     // true
 * d instanceof Number;     // false
 */

/**
 * OBJETOS
 * 
 * Un objeto es un contenedor de propiedades y valores:
 * - el nombre de la propiedad puede ser cualquier cadena de caracteres.
 * - los valores pueden ser de cualquier tipo salvo undefined
 * 
 * 1. Creacion de objetos
 * Para construir un objeto tenemos dos maneras distintas.
 * 
 * 1.1. Utilizar new Object() y asignar propiedades y valores.
 * Si queremos introducir propiedades y valores seguimos la siguiente sintaxis.
 * 
 * let VARIABLE = new Object();                 // creamos el objeto llamado VARIABLE
 * VARIABLE.PROPIEDAD = VALOR;                  // al objeto llamado VARIABLE le agrego la PROPIEDAD con su VALOR
 * 
 * 
 * 1.2.Utilizar las llaves y asignar propiedades y valores.
 * Si queremos introucir propiedades y valores seguimos la siguiente sintaxis.
 * 
 * let VARIABLE = {};                           // creamos el objeto llamado VARIABLE
 * VARIABLE.PROPIEDAD = VALOR;                  // al objeto llamado VARIABLE le agrego la PROPIEDAD con su VALOR
 * 
 * Dentro de utilizar las llaves puedo introducir las propiedades con valores desde el principio.
 * En este caso las separamos por comas. Sintaxis:
 * 
 * let VARIABLE = {
 *  propiedad : valor,
 *  propiedad : valor,
 *  propiedad : valor
 * }
 */

// Creamos un objeto de mesa e introducimos los valores.
let mesa = new Object();
mesa.nPatas = 4;
mesa.color = 'blanco';
mesa.rota = false;
mesa.precio = null;

// Creamos un objeto de coche e introducimos los valores.
let coche = {};
coche.marca = 'Toyota';
coche.modelo = 'Yaris';
coche.nPuertas = 5;
coche.propietario = {}
coche.propietario.nombre = "sergio",
coche.propietario.dni = "123456";
coche.propietario.direccion = 'calle perdida 123';
coche.extras = mesa;

let variable = 'a';

/**
 * Para poder acceder a los valores de los objetos utilizamos los cochetes con el nombre de la propiedad a la que quiero acceder.
 * 
 * coche['marca'];                      // "Toyota"
 * coche['propietario']['nombre'];      // "Sergio"
 * 
 * De la misma forma y siempre que no sea una palabra reservada, puedo acceder con .
 * 
 * coche.marca;                         // "Toyota"
 * coche.propietario.nombre;            // "Sergio"
 */