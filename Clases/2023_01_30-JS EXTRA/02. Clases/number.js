
/**
 * 
 * 
 **************************************************
 ******************* CLASE NUMBER *****************
 **************************************************
 * 
 * A continuación se muestran algunas de las funciones y propiedades más útiles para el manejo de números.
 * 
 * NaN, (del inglés, "Not a Number") JavaScript emplea el valor NaN para indicar un valor numérico no definido (por ejemplo, la división 0/0).
 * 
 *    var numero1 = 0;
 *    var numero2 = 0;
 *    console.log(numero1/numero2); // se muestra el valor NaN
 * 
 * isNaN(), permite proteger a la aplicación de posibles valores numéricos no definidos
 * 
 *    var numero1 = 0;
 *    var numero2 = 0;
 *    if(isNaN(numero1/numero2)) {
 *      console.log("La división no está definida para los números indicados");
 *    } else {
 *      console.log("La división es igual a => " + numero1/numero2);
 *    }
 * 
 * 
 * Infinity, hace referencia a un valor numérico infinito y positivo (también existe el valor –Infinity para los infinitos negativos)
 * 
 *    var numero1 = 10;
 *    var numero2 = 0;
 *    console.log(numero1/numero2); // se muestra el valor Infinity
 *    toFixed(digitos), devuelve el número original con tantos decimales como los indicados por el parámetro digitos y realiza los redondeos necesarios. Se trata de una función muy útil por ejemplo para mostrar precios.
 * 
 *    var numero1 = 4564.34567;
 *    numero1.toFixed(2);       // 4564.35
 *    numero1.toFixed(6);       // 4564.345670
 *    numero1.toFixed();        // 4564
 * 
 *
 */

 