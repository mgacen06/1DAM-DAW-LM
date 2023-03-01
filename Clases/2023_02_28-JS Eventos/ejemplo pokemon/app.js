let main = document.getElementsByTagName('main')[0];
main.setAttribute('class', 'container');

let div, p, details, summary;

for(i in pokemons){
    div = document.createElement('div');    // <div></div>
    div.setAttribute('class', 'caja');      // <div class="caja"></div>
    main.appendChild(div);                  // en el <main> introducir el <div class="caja"></div> 

    for(j in pokemons[i]){

        switch (typeof pokemons[i][j]) {
            case 'object':
                // Nada
                
                break;

            case 'function':
                // Nada

                break;

            case 'boolean':
                // Nada
                break;

            default:
                if(j == 'nombre'){
                    p = document.createElement('p');                // <p></p>
                    p.textContent = `${pokemons[i][j]}`;            // <p>CONTENIDO DEL VALOR DE LA PROPIEDAD j</p>
                    div.appendChild(p);                             // en el <div class="caja"></div> introducir la etiqueta p
                }                         
                break;
        }
    }
}

/**
 * Ejercicio
 * Realizar un filtro de un elemento input para mostrar u ocultar las cards que contengan dicho texto
 */

/**
 * HERRAMIENTAS
 * document.getElementsByTagName()
 * document.getElementsByClassName()
 * bucle for..in
 * elemento.textContent
 * elemento.style.propiedad = 'valor'
 * elemento.style.display = 'none'
 * elemento.style.display = 'block'
 * input.value
 * evento onkeyup sobre input
 * 
 * include:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 * 
 */
