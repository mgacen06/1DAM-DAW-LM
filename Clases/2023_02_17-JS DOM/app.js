/**
 * Practica.
 * 
 * Crear un flexbox dentro del 'main' que pinte tantos divs como pokemons existan
 * 
 * -    Cada div debe contener el nombre de cada pokemon
 * -    Cada div debe tener un borde para visualizar su contenido
 */

// Primer paso, ubicar la etiqueta donde voy a introducir los elementos
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
                // Pintas estadisticas
                /**
                 * j                --> estadistica
                 * pokemons[i][j]  --> objeto con las estadisticas
                 */
                details = document.createElement('details');

                summary = document.createElement('summary');
                summary.textContent = j;

                /**
                 * Recorre las estadisticas una vez esta creado el desplegable.
                 * Se introducen los elementos dentro del details que va dentro del div
                 */
                for(k in pokemons[i][j]){
                    p = document.createElement('p');
                    p.textContent = `${k} : ${pokemons[i][j][k]} `;
                    details.appendChild(p); 
                }

                details.appendChild(summary);
                div.appendChild(details);

                break;

            case 'function':
                // Pokemon evoluciona
                p = document.createElement('p');
                p.textContent = 'Evoluciona';
                p.style.color = 'white';
                p.style.backgroundColor = 'green';
                div.appendChild(p); 

                break;

            case 'boolean':
                // Pokemon No evoluciona
                p = document.createElement('p');
                p.textContent = 'No evoluciona';
                p.style.color = 'white';
                p.style.backgroundColor = 'red';
                div.appendChild(p); 

                break;

            default:
                //Pinta por ser caso general
                p = document.createElement('p');                // <p></p>
                p.textContent = `${j} : ${pokemons[i][j]}`;     // <p>CONTENIDO DEL VALOR DE LA PROPIEDAD j</p>
                // p.textContent = j + ' : ' + pokemons[i][j];
                div.appendChild(p);                              // en el <div class="caja"></div> introducir la etiqueta p
                
                break;
        }
    }
}

/**
 * Ejercicio.
 * Crear cards por cada tipo en el array 'tipos'
 * Pintar los efectivos, no efectivos e inmunes
 */

