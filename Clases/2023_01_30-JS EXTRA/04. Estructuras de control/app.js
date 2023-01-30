/**
 ***************************************************
 ************* ESTRUCTURAS DE CONTROL ************** 
 ***************************************************  
 * 
 * 1. IF..ELSE
 * Empleada en decisiones en funcion de una condicion.
 * 
 * if(condicion){
 *      ...
 * }else{
 *      ...
 * }
 * 
 * 2. SWITCH
 * Evalua el valor de una variable con distintos casos posibles.
 * 
 * switch(variable){
 *      case a:
 *          codigo;
 *          break;
 *      case b:
 *          codigo;
 *          break;
 *      case c:
 *          codigo;
 *          break;
 *      case d:
 *          codigo;
 *          break;
 * }
 * 
 * 3. WHILE
 * Ejecucion de un bucle siempre que se cumpla la condicion.
 * Es necesario modificar la condicion en cada iteracion para no ejecutarlo de forma indefinida.
 * 
 * while(condicion){
 *      ...
 * }
 * 
 * 4. FOR
 * Ejecucion de un bucle que cumple una condicion actualizando el valor de la condicion.
 * La estructura tiene tres partes diferenciadas: iniciacion, condicion y actualizacion.
 * - iniciacion: zona que establece los valores iniciales de las variables que contralan la repecicion.
 * - condicion: elemento que decide si continua o detiene la repeticion.
 * - actualizacion: nuevo valor que se asigna a la variable que contrala la repecicion tras cada repeticion.
 * 
 * for(iniciacion; condicion; actualizacion){
 *      ...
 * }
 * 
 * 5. FOR ... IN
 * Derivada del for, su definicion implica el uso de objetos, permitiendo recorrer las propiedades de cada objeto.
 * En cada iteracion, un nuevo nombre de propiedad del objeto es asignada a la variable.
 * 
 * for (propiedad in objeto){
 *      ...
 * }
 * 
 * Tambien puede ser utilizado para recorrer un array.
 * 
 * for (indice in array){
 *      ...
 * }
 * 
 * 6. TRY - CATCH - FINALLY
 * En esta estructura se distinguen tres partes:
 * - try: bloque de codigo que se ejecuta de manera normal.
 * - catch: codigo ejecutado si se produce algun error en el bloque try.
 * - finally: sentencias a ejecutar tras el try-catch. Se ejecutan siempre, haya o no error en el try.
 *            Suele utilizarse para liberar recursos.
 * 
 * try {
 *      ...
 * } catch (Exception) {
 *      ...
 * } finally{
 *      ...
 * }
 * 
 */