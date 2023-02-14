/**
 * METODOS DEL DOM (algunos)
 * 
 * UBICAR ELEMENTOS
 * getElementById('id')                     --> 1 elemento
 * getElementsByClassName('clase')          --> Array de elementos
 * getElementsByTagName('etiqueta')         --> Array de elementos
 * 
 * CREAR ELEMENTOS
 * createElement('nombre')                  --> crear un elemento (etiqueta)
 * textContent = 'CONTENIDO'                --> inserta texto dentro de un elemento (etiqueta)
 * setAttribute('nombre', 'contenido');     --> crea atributo en un elemento (etiqueta)
 * 
 * INSERTAR ELEMENTOS
 * appendChild(elemento)    --> colocar el elemento
*/

/**
 * Guardo en la variable 'main' todas las etiquetas de mi HTML que sean <main>
 */
let main = document.getElementsByTagName('main')[0];
console.log(main);

/**
 * CREAR UN ELEMENTO SIMPLE.
 * 
 * CREAR UNA ETIQUETA <h1>HOLA</h1>
 */
let h1 = document.createElement('h1');
h1.textContent = 'HOLA';
main.appendChild(h1);

let a = document.createElement('a'); // 1
a.textContent = 'Pagina web';
a.setAttribute('href', 'web.es');
a.setAttribute('class', '');
main.appendChild(a); // ultimo

/**
 * CREAR ELEMENTO COMPLEJO
 * 
 * Crear una lista ul con elementos li
 */

let ul, li;

ul = document.createElement('ul');

li = document.createElement('li');
li.textContent = 'Elemento de la lista';
ul.appendChild(li);

li = document.createElement('li');
li.textContent = 'Elemento de la lista 2';
ul.appendChild(li);

main.appendChild(ul);






/**
 * Ejercicio crear formulario
 */