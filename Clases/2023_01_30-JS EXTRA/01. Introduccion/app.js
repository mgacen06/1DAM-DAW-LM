/**
 **************************************************
 **************** SINTAXIS BASICA ***************** 
 ************************************************** 
 *
 * 1. Variables
 * Las variables se crean mediante la palabra reservada var o let (redomendable).
 * Se utiliza var para declarar por primera vez.
 * 
 * En JavaScript no es obligatorio inicializar las variables. 
 * Se pueden declarar y asignarles valor posteriormente.
 * 
 * Las variables que no estan declaradas (en el ejemplo la c), JavaScript las crea conviriendolas en variables globales.
 * 
 * Ejemplos: 
 * var a = 1;
 * let b = 2;
 * c = 3;
 * 
 * 1.1. Variables. Nombres
 * Los nombres asignados a las variables deben cumplir las siguientes normas:
 * - Pueden estar formados por letras y numeros. Adicionalmente tambien los simbolos dolar ($) y guion bajo (_)
 * - El primer caracter no puede ser un numero.
 * 
 * Ejemplos:
 * 
 * var variable;            ---> correcto
 * var variable1;           ---> correcto
 * var _variable;           ---> correcto
 * var 1_variable;          ---> incorrecto
 * var $_$_variable;        ---> correcto
 * 
 * 1.2. Variables. Tipos.
 * En JavaScript los tipos de variables se dividen en dos grupos: tipos primitivos y tipos de referencia o clases.
 * 
 * 1.2.1. Variables. Tipos. Primitivos.
 * Los cinco tipos primitivos son: undefined, null, boolean, number y string.
 * Se define typeof como operador para averiguar el tipo de una variable.
 * 
 * - undefined: variable que ha sido definida pero sin valor.
 * - null: similar a undefined pero utilizado para objetos que en ese momento no existen.
 * - boolean: variable que almacena dos valores que son true y false.
 * Al realizar conveersion numerica a tipo boolean, JavaScript aplica la siguiente conversion: el numero 0
 * se convierte a false y cualquier otro numero se convierte a true.
 * 
 * 1.2.2. Variables. Tipos. Conversion.
 * JavaScript es un lenguaje de programacion no tipado, por lo que una variable puede guardar diferentes tipos de datos a lo largo de la ejecucion del programa.
 * Una variable puede iniciarlizarse con valor numerico, despues almacenar cadena de texto y acabar de forma booleana.
 * 
 * Las conversiones convierten una variable de un tipo a otro.
 * - toString() convierte variables de cualquier tipo a cadenas de texto.
 * - parseInt(variable) convierte el valor de la variable en un numero entero.
 * - parseFloat(variable) convierte el valor de la variable en un numero con decimales.
 * 
 * Tanto parseInt() como parseFloat() cumplen dos caos espciales:
 * - devuelven NaN si su contenido no es un valor numerico.
 * - si el primer caracter es un numero, devuelve los primeros numeros hasta encontrar otro caracter no numerico.
 * 
 * 1.2.2. Variables. Tipos. Referencia.
 * En JavaScript se define una clase para cada uno de los tipos primitivos: Boolean, Number, String.
 *  
 * 
 * 2. Palabras reservadas.
 * 
 * abstract
 * boolean 
 * break 
 * byte
 * case 
 * catch 
 * char 
 * class 
 * const 
 * continue
 * debugger 
 * default 
 * delete 
 * do 
 * double 
 * else 
 * enum 
 * export 
 * extends
 * false 
 * final 
 * finally 
 * float 
 * for 
 * function
 * goto 
 * if 
 * implements 
 * import 
 * in 
 * instanceof 
 * int 
 * interface
 * long
 * native 
 * new 
 * null
 * package 
 * private 
 * protected 
 * public
 * return
 * short 
 * static 
 * super 
 * switch 
 * synchronized
 * this 
 * throw 
 * throws 
 * transient 
 * true 
 * try 
 * typeof
 * var 
 * volatile 
 * void
 * while 
 * with
 * 
 * 
 */