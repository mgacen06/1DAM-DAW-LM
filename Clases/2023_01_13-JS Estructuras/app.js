/**
 * OBJETOS
 * 
 * (visto)
 * 1. Creacion
 * 2. Acceso
 * 3. Agregar propiedades
 * 
 * (pendiente)
 * 4. Modificacion propiedades
 * 5. Eliminacion propiedades
 * 
 * 3. Agregar propiedades.
 * Para agregar una propiedad nueva es necesario hacer referencia al objeto y colocar un nombre de propiedad y valor nuevos
 */

let trabajador = {
    nombre : "Antonio",
    edad : 24,
    puesto : "profesor",
    asignaturas : {
        nombre : "Sistemas Informaticos",
        temas : 7,
        descripcion : "Esta asignatura trata sobre los componentes de un equipo informatico"
    } 
};

console.log(trabajador);

trabajador['asignaturas']['aula'] = 4.2;      // Agregamos la propiedad aula con el valor 4.2 en el lugar asignado
console.log(trabajador);

/**
 * 4. Modificacion propiedades
 * Para modificar una propiedad es necesario acceder a dicha propiedad y asignarle un nuevo valor
 */

trabajador['asignaturas']['temas'] = 8;         // Modificar la propiedad temas pisando el valor 7 para poner el valor 8
console.log(trabajador);

/**
 * 5. Eliminacion propiedades
 * Para eliminar una propiedad es necesario utilizar la palabra reservada 'delete'
 */

delete trabajador['asignaturas']['temas'];         // Eliminar la propiedad temas
console.log(trabajador);

/**********************************
 ***** ESTRUCTURAS DE CONTROL *****
 **********************************
 *
 * 1. IF..ELSE
 * 
 * if(CONDICION){
 *      EJECUCION_VERDADERO
 * }else{
 *      EJECUCION_FALSO
 * }
 * 
 * 2. Condicional ternario
 * CONDICION ? EJECUCION_VERDADERO : EJECUCION_FALSO
 */
let a = 5;
if (a > 2){
    console.log('a es mayor que 2');
}else{
    console.log('a es menor que 2');
}

a > 2 ? console.log('a es mayor que 2') : console.log('a es menor que 2');

/**
 * SWITCH
 * 
 * switch (VARIABLE) {
 *   case VALOR:
 *      ...
 *      break;
 * 
 *     default:
 *      ...
 *      break;
 * }
 * 
 * WHILE
 * 
 * while(CONDICION){
 *      ...
 * }
 * 
 * 
 * FOR
 * 
 * for(iniciacion; condicion; actualizacion){
 *      ...
 * }
 * 
 * 
 * FOR .. IN
 * Bucle derivado del for. Su definicion implica el uso de objetos, permitiendo recorrer las propiedades del objeto.
 * En cada iteracion, un nuevo nombre de propiedad esta siendo evaluado, es decir, es asignado a la variable.
 * 
 * for (indice in objeto){
 *      ...
 * }
 * 
 * Tambien puede ser utilizado en arrays
 * 
 * for (indice in array){
 *      ...
 * }
 * 
 */

for (t in trabajador){
    // console.log();
    if(t === "nombre"){
        console.log(trabajador[t]);         // t tiene la propiedad nombre (se lo he puesto en el condicional)
                                            // trabajador[t] devuelve el valor de la propiedad t (nombre) que esta dentro del objeto trabajador
        
    }
    if(typeof trabajador[t] === 'object'){
        console.log('estamos en el ultimo caso. Asignaturas es un objeto');
        // recorrer asignaturas para poder mostrar sus valores.
    }
}
