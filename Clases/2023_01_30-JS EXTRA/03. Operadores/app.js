/**
 ***************************************************
 ******************* OPERADORES ******************** 
 *************************************************** 
 *
 * 1. Asignacion
 * El operador mas sencillo. Se utiliza el simbolo igual (=).
 * 
 * 2. Aritmeticos
 * Operadores para manipulaciones matematicas.
 * - suma           (+)
 * - resta          (-)
 * - multiplicacion (*)
 * - division       (/)
 * - modulo         (%)
 * 
 * 3. Logicos
 * Operadores para realizar operaciones logicas.
 * 
 * 3.1. Negacion
 * Se utiliza la exclamacion (!)
 * 
 * variable     !variable
 * true         false
 * false        true
 * 
 * Si la variable es un numero:
 * - false si vale 0
 * - true si vale distinto de 0
 * 
 * Si la variable es una cadena de texto:
 * - false si la cadena esta vacia ("")
 * - true cualquier otro caso
 * 
 * 3.2. AND
 * Combina dos valores booleanos con el simbolo (&&)
 * 
 * variable1    variable2       variable1 && variable2
 * true         true            true
 * true         false           false
 * false        true            false
 * false        false           false
 * 
 * 3.3. OR
 * Combina dos valores booleanos con el simbolo (||).
 * 
 * variable1    variable2       variable1 || variable2
 * true         true            true
 * true         false           true
 * false        true            true
 * false        false           false
 * 
 * 
 * 3.4. Relacionales
 * Operadores para operaciones matematicas
 * - mayor que          (>)
 * - menor que          (<)
 * - mayor o igual que  (>=)
 * - menor o igual que  (<=)
 * - igual que          (==)
 * - distinto de        (!=)
 * 
 * Con cadenas de texto, los comparadores mayor y menor que:
 * - comparan letra a letra comenzando desde la izquierda hasta encontrar diferencia.
 * - las mayusculas se consideran menores que las minusculas
 * 
 * 3.5. TYPEOF
 * Se utiliza para determinar el tipo de dato que almacena la variable.
 * 
 * Los posibles valores de retorno son: 
 * - tipos primitivos: undefined, boolean, number, string
 * - tipos referencia: object
 * 
 * Ejemplos:
 * var myFunction = function() {
 *  console.log('hola');
 * };
 * var myObject = {
 *  foo : 'bar'
 * };
 * var myArray = [ 'a', 'b', 'c' ];
 * var myString = 'hola';
 * var myNumber = 3;
 * var variable1;       
 * 
 * typeof variable1;    // devuelve "undefined"
 * typeof myFunction;   // devuelve 'function'
 * typeof myObject;     // devuelve 'object'
 * typeof myArray;      // devuelve 'object' -- tenga cuidado
 * typeof myString;     // devuelve 'string'
 * typeof myNumber;     // devuelve 'number'
 * typeof null;         // devuelve 'object' -- tenga cuidado
 * 
 * 3.6. INSTANCEOF
 * El operador instanceof determina la clase concreta de cada objeto.
 * Esto es necesario ya que typeof no cubre todos los casos necesarios en los valores de tipo object
 * 
 * Instanceof solo devuelve true o false, es decir, no devuelve la clase sino que comprueba el tipo.
 * 
 * Ejemplos:
 * var variable1 = new String("hola mundo");
 * typeof variable1;             // devuelve "object"
 * variable1 instanceof String;  // devuelve true
 * 
 */