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
 * Ejercicio crear formulario desde JavaScript
 * 
 * -    etiqueta <form> de tipo 'POST'
 * -    tres inputs con tipo 'text', 'number' y 'password'
 * -    uno de los inputs contiene valor y otro 'required'
 * -    boton de tipo 'button'
 */

let form, input, button;

form = document.createElement('form');
form.setAttribute('method', 'POST');

// texto
input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('required', '');
form.appendChild(input);

// password
input = document.createElement('input');
input.setAttribute('type', 'password');
form.appendChild(input);

// number
input = document.createElement('input');
input.setAttribute('type', 'number');
input.setAttribute('value', '5');
form.appendChild(input);

// button
button = document.createElement('button');
button.setAttribute('type', 'button');
button.textContent = 'Enviar';
form.appendChild(button);

main.appendChild(form);

/**
 * RECOGER VALORES DE UN FORMULARIO
 * En funcion del valor, aplicar un estilo u otro
 */

form = document.getElementsByTagName('form')[0];
input = form.getElementsByTagName('input')[0];
console.log(typeof input.value);
if(parseInt(input.value) < 16 && input.value.length < 2){
    input.style.backgroundColor = 'red';
    let p = document.createElement('p');
    p.textContent = 'Te has equivocado al escribir el numero';
    form.appendChild(p);
    // Colocar el color rojo en el input
}else{
    input.style.backgroundColor = 'green';
    // acceder a esa etiqueta <p> del mensaje de error y eliminarla si existe
    // p.remove();
    // Colocar el color verde en el input
}

/**
 * Practica.
 * 
 * Crear un flexbox dentro del 'header' que pinte tantos divs como pokemons existan
 * 
 * -    Cada div debe contener el nombre de cada pokemon
 * -    Cada div debe tener un borde para visualizar su contenido
 */