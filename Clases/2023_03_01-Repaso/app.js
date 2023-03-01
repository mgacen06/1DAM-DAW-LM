/**
 * Console.log(papeleria) tiene dos elementos:
 * -    elemento 1 ---> categoria y contiene un string 
 * -    elemento 2 ---> productos y contiene un array
 */
// console.log(papeleria);

/**
 * papeleria['categoria'] --> devuelve el contenido de la propiedad categoria
 * papeleria['productos'] --> contiene un array de 9 objetos
 */
// console.log(papeleria['categoria'])
// console.log(papeleria['productos'])

/**
 * _____________________________________________________
 * __________________ EJERCICIOS _______________________
 * _____________________________________________________
 */

/**
 * Ejercicio 1.
 * Mostrar los nombres de los productos por consola
 */
function ej1(){
    /**
     * En este primer bucle avanzo un nivel.
     * Elementos que aparecen:
     * -    categoria
     * -    productos
     */
    for (i in papeleria){
        // Filtramos por productos puesto que el nombre esta en productos
        if(i == 'productos'){
            /**
             * En este segundo bucle avanzamos otro nivel
             * -    i --> categoria no se puede avanza (string)
             * -    i --> productos, obtengo un array con 9 objetos
             * 
             * En este caso j sera cada uno de esos nueve objetos
             * -     el objetivo es imprimir el contenido de 'nombre' dentro de j
             */
            for (j in papeleria[i]){
                console.log(papeleria[i][j]['nombre'])
            }
        }
    }
}
// ej1();

/**
 * Ejercicio 2.
 * Mostrar nombre y precio por consola
 */
function ej2(){
 /**
     * En este primer bucle avanzo un nivel.
     * Elementos que aparecen:
     * -    categoria
     * -    productos
     */
 for (i in papeleria){
    // Filtramos por productos puesto que el nombre esta en productos
    if(i == 'productos'){
        /**
         * En este segundo bucle avanzamos otro nivel
         * -    i --> categoria no se puede avanza (string)
         * -    i --> productos, obtengo un array con 9 objetos
         * 
         * En este caso j sera cada uno de esos nueve objetos
         * -     el objetivo es imprimir el contenido de 'nombre' y 'precio' dentro de j
         * 
         */
        for (j in papeleria[i]){
            console.log(`Nombre: ${papeleria[i][j]['nombre']}`)
            console.log(`Precio: ${papeleria[i][j]['precio']}`)
        }
    }
}
}
// ej2();

/**
 * Ejercicio 3.
 * Mostrar todos los productos que sean de tipo string o number
 */
/**
 * Herramientas
 * -    for..in             para recorrer
 * -    if o switch         para evaluar
 * -    typeof              para saber el tipo
 */
/**
 * typeof evalua el tipo de un elemento
 *      typeof 'cateogoria'      // 'string'
 *      typeof 5                 // 'number'
 *      typeof true              // 'boolean'
 *      typeof ['a']             // 'object'
 *      typeof {a: 'a'}          // 'object'
 */
function ej3(){
    /**
     * imprimir nombre, precio (porque son string y number)
     */
    for (i in papeleria){
        if(i == 'productos'){
            for (j in papeleria[i]){ //papeleria['productos']
                for(k in papeleria[i][j]){ // papeleria['productos'][0 .. 8][nombre, precio...]
                    // if(typeof papeleria[i][j][k] == 'string' || typeof papeleria[i][j][k] == 'number'){
                    //     console.log(papeleria[i][j][k])
                    // }
                    switch (typeof papeleria[i][j][k]) {
                        case 'string':
                            console.log(papeleria[i][j][k])
                            break;
                        case 'number':
                            console.log(papeleria[i][j][k])
                            break;
                        default:
                            // EL RESTO DE CASOS: boolean, function, object, undefined, null...
                            break;
                    }
                }
            }
        }
    }
}
// ej3();

/**
 * Ejercicio 4. 
 * Mostrar por consola el contenido de descripcion
 * -    Formato:
 *      nombre : valor
 */
function ej4a(){
    // Almaceno en la variable productos el contenido de los productos, es decir, me quito la categoria
    let productos = papeleria['productos'];
    for(i in productos){
        // Almaceno cada producto de cada iteracion para ahorrarme estar bailando con las i, j, k...
        let producto =  productos[i]; 
        for(j in producto['descripcion']){
            console.log(`${j} : ${producto['descripcion'][j]}`)
        }
    }
}
// ej4a();

function ej4b(){
    // console.log(papeleria)
    for(i in papeleria){
        // console.log(i)
        if(i == 'productos'){
            // console.log(papeleria[i])
            for(j in papeleria[i]){
                // El for de la 'j' recoge todos los objetos que estan dentro del ARRAY
                for(k in papeleria[i][j]){
                    // El for de la 'k' recoge cada propiedad dentro de cada objeto del array
                    if(k == 'descripcion'){
                        for(l in papeleria[i][j][k]){
                            // El for de la 'l' recoge cada propiedad de la descripcion de cada objeto del array de productos
                            console.log(`${l} : ${papeleria[i][j][k][l]}`)
                        }
                    }
                }
            }
        }
    }
}
ej4b();
/**
 * Ejercicio 5. 
 * Crear una card por cada producto con:
 * -    Nombre como etiqueta <p>
 */

/**
 * PASOS
 * 1. Localizo mi etiqueta main                         // let main = document.getElementsByTagName('main')[0]
 * 2. Intoduzco la clase container al main              // main.setAttribute('class', 'container')
 * 3. Recorro el objeto de la papeleria                 // for..in
 * 4. Por cada iteracion creo un div.                   // let div = document.createElement('div')
 * 5. A ese div le meto la clase card                   // div.setAttribute('class', 'card')
 * 6. Creo la etiqueta p                                // let p = document.createElement('p')
 * 7. Introduzco texto del nombre en la etiqueta p      // p.textContent = 'contenido del nombre del objeto'
 * 8. Meto la etiqueta p en el div                      // div.appendChild(p)
 * 9. Meto el div en el main                            // main.appendChild(div)
 */
function ej5(){
    // Paso 1
    let main = document.getElementsByTagName('main')[0];
    // Paso 2
    main.setAttribute('class', 'container');
    // Paso 3
    for (i in papeleria){
        // Filtramos por productos puesto que el nombre esta en productos
        if(i == 'productos'){
            /**
             * En este segundo bucle avanzamos otro nivel
             * -    i --> categoria no se puede avanza (string)
             * -    i --> productos, obtengo un array con 9 objetos
             * 
             * En este caso j sera cada uno de esos nueve objetos
             * -     el objetivo es imprimir el contenido de 'nombre' dentro de j
             */
            for (j in papeleria[i]){
                // Paso 4
                let div = document.createElement('div');
                // Paso 5
                div.setAttribute('class', 'card');
                // Paso 6
                let p = document.createElement('p');
                // Paso 7
                p.textContent = papeleria[i][j]['nombre'];
                // Paso 8
                div.appendChild(p)
                // Paso 9
                main.appendChild(div)
            }
        }
    }
}
ej5();

/**
 * Ejercicio 6.
 * Crear una card por cada producto con:
 * -    Nombre como etiqueta <p>
 * -    Descripcion como elementos de lista ordenada (<ol>)
 */

/**
 * PASOS
 * 1. Localizo mi etiqueta main                         // let main = document.getElementsByTagName('main')[0]
 * 2. Intoduzco la clase container al main              // main.setAttribute('class', 'container')
 * 3. Recorro el objeto de la papeleria                 // for..in
 * 4. Por cada iteracion creo un div.                   // let div = document.createElement('div')
 * 5. A ese div le meto la clase card                   // div.setAttribute('class', 'card')
 * 6. Creo la etiqueta p                                // let p = document.createElement('p')
 * 7. Introduzco texto del nombre en la etiqueta p      // p.textContent = 'contenido del nombre del objeto'
 * 8. Meto la etiqueta p en el div                      // div.appendChild(p)
 * 9. Creo una etiqueta ol                              // let ol = document.createElement('ol')
 * 10. Recorrer propiedad 'descripcion' en producto     // for .. in
 * 11. Por cada propiedad de descripcion genero
 *     un li                                            // let li = document.createElement('li')
 * 12. Meto el contenido de la propiedad de cada 
 *     iteracion en el li                               // li.textContent = 'Contenido';
 * 13. Meto li dentro de ol                             // ol.appendChild(li)
 * 14. Cuando termina el bucle de descripcion
 *     meto ol en div                                   // div.appendChild(ol)
 * 15. Meto el div en el main                           // main.appendChild(div)
 */

/**
 * Ejercicio 7.
 * Crear card por cada producto con:
 * -    nombre del producto como etiqueta <p>
 * -    descripcion del producto como lista desordenada (<ul>)
 * -    Cantidad de comentarios como <h6>
 */
/**
 * PASOS
 * 1. Localizo mi etiqueta main                         // let main = document.getElementsByTagName('main')[0]
 * 2. Intoduzco la clase container al main              // main.setAttribute('class', 'container')
 * 3. Recorro el objeto de la papeleria                 // for..in
 * 4. Por cada iteracion creo un div.                   // let div = document.createElement('div')
 * 5. A ese div le meto la clase card                   // div.setAttribute('class', 'card')
 * 6. Creo la etiqueta p                                // let p = document.createElement('p')
 * 7. Introduzco texto del nombre en la etiqueta p      // p.textContent = 'contenido del nombre del objeto'
 * 8. Meto la etiqueta p en el div                      // div.appendChild(p)
 * 9. Creo una etiqueta ol                              // let ol = document.createElement('ol')
 * 10. Recorrer propiedad 'descripcion' en producto     // for .. in
 * 11. Por cada propiedad de descripcion genero
 *     un li                                            // let li = document.createElement('li')
 * 12. Meto el contenido de la propiedad de cada 
 *     iteracion en el li                               // li.textContent = 'Contenido';
 * 13. Meto li dentro de ol                             // ol.appendChild(li)
 * 14. Cuando termina el bucle de descripcion
 *     meto ol en div                                   // div.appendChild(ol)
 * 15. Creo h6                                          // let h6 = document.createElement('h6')
 * 16. Meto longitud de propiedad comentarios           // h6.textContent = comentarios.length
 * 17. Meto h6 dentro de div                            // div.appendChild(h6)
 * 18. Meto el div en el main                           // main.appendChild(div)
 */