/**
 * 'document.forms' nos devuelve un array con todos los formularios que existen en mi documento.
 * 
 * Realiza una funcion similar a recogerlos por etiqueta 'form'
 */
let formularios = document.forms;
// console.log(formularios);

/**
 * Una vez localizamos el formulario correspondiente (en este caso posicion 0, 1, 2)
 * 
 * Necesitamos recoger los elementos que vamos a validar. Para ello utilizamos el contenido de la propiedad 'elements'
 * Con esto obtengo un array con todos los elementos dentro de mi formulario.
 * 
 * Si quiero especificar cual es el elemento que necesito, tengo que buscar por la propiedad con el nombre que necesito buscar
 * 
 * Por ultimo cuando tengo el elemento, voy a la propiedad 'value' que me va a devolver el contenido del elemento
 * 
 * SINTAXIS
 * formulario[posicion_formulario]['elements'][nombre_a_buscar]['value']
 */

/**
 * A la hora de evaluar el contenido de un elemento del formulario podemos realizar busquedas por un patron.
 * 
 * Utilizaremos el metodo 'test', el cual realizar una validacion con un patron sobre un valor.
 * 
 * El metodo 'test' es un booleano que devuelve:
 * -    true: cuando la expresion se cumple.
 * -    false: cuando la expresion no se cumple.
 * 
 * SINTAXIS
 * EXPRESION_REGULAR.test(VALOR_A_EVALUAR)
 */


function validarNav(){
    let valor = formularios[0]['elements']['edad']['value'];
    // console.log(valor);

    // Un unico digito a comprobar. Si hay mas de uno, devuelve false
    // let expresion = /^\d$/;
    let expresion = /^\d\w\d\d\d$/;

    if(expresion.test(valor)){
        console.log('TODO CORRECTO');
    }else{
        console.log('ESTO NO FUNCIONA');
    }
}

/**
 * Ejemplo
 * Verificar que el textarea del formulario 3 contiene lo siguiente:
 * -    Longitud < 10
 * -    Una letra + Tres numeros + Una letra
 * 
 * Importante tener el evento keyup asociado
 */
function ej1(){
    // 1. Recoger el valor
    let valor = formularios[2]['elements']['recomendacion']['value'];

    // 2. Comprobar longitud
    if(valor.length < 10){
        // 3. Comprobar expresion. (es lo mismo que /^\w\d\d\d\w$/)
        let expresion = /^\w\d{3}\w$/;
        if(expresion.test(valor)){
            console.log('Validacion correcta');
        }else{
            console.log('Longitud correcta, validacion incorrecta');
        }
    }else{
        console.log('Longitud mayor a 10')
    }
}

/**
 * Ejercicio 2
 * Realizar validacion de un DNI
 * XXXXXXXXY siendo X un numero e Y una letra
 * 
 * Se realiza sobre el elemento con 'name' dni.
 * 
 * Dos nuevos eventos:
 * -    focus: se activa cuando estoy en un elemento determinado (tengo el foco en ese elemento)
 * -    blur: se activa cuando salgo de un elemento (retiro el foco o lo cambio a otro elemento distinto)
 */
function ej2(){
    // 1. Recoger el valor
    let valor = formularios[1]['elements']['dni']['value'];
    let span = formularios[1].getElementsByTagName('label')[0].getElementsByTagName('span')[0];
    
    let expresion = /^\d{8}\w$/;

    // 2. Comprobar expresion
    if(expresion.test(valor)){
        span.textContent = 'Correcto';
        span.classList.add('valid');
        span.classList.remove('invalid');
    }else {
        span.textContent = 'Incorrecto';
        span.classList.add('invalid');
        span.classList.remove('valid');
    }
}

/**
 * Ejercicio 3.
 * Realizar una validacion sobre el elemento con name 'cp' y validar que sea correcto 
 * en la Comunidad de Madrid.
 */
function ej3(){
    let valor = formularios[0]['elements']['cp']['value'];
    let span = formularios[0].getElementsByTagName('label')[0].getElementsByTagName('span')[0];
    
    let expresion = /^28\d{3}$/;

    // 2. Comprobar expresion
    if(expresion.test(valor)){
        span.textContent = 'Correcto';
        span.classList.add('valid');
        span.classList.remove('invalid');
    }else {
        span.textContent = 'Incorrecto';
        span.classList.add('invalid');
        span.classList.remove('valid');
    }
}

/**
 * Ejercicio 4.
 * Realizar una validacion sobre elemento con name 'clase' que recoja un valor y verifique:
 * -    Numero del curso
 * -    Espacio (no se admiten caracteres)
 * -    Letra del grupo
 */
function ej4(){
    let valor = formularios[1]['elements']['clase']['value'];
    let span = formularios[1].getElementsByTagName('label')[0].getElementsByTagName('span')[0];
    
    let expresion = /^\d\s\w$/;

    // 2. Comprobar expresion
    if(expresion.test(valor)){
        span.textContent = 'Correcto';
        span.classList.add('valid');
        span.classList.remove('invalid');
    }else {
        span.textContent = 'Incorrecto';
        span.classList.add('invalid');
        span.classList.remove('valid');
    }
}

/**
 * TAREA PENDIENTE
 * Reconocer los elementos que necesitan ser una letra y que esta letra sea mayuscula, minuscula, etc.
 * \w unicamente nos da que sea un caracter sin especificar.
 */