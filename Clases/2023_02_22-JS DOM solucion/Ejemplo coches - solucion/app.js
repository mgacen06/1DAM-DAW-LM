let title = document.getElementsByTagName('title')[0];
title.textContent = 'Practica de coches con objetos';

let main = document.getElementsByTagName('main')[0];

/**
 * Funcion que pinta en HTML los elementos del array coches
 * @param {Array} coches 
 * @param {Array} main 
 */
function pintar_coches(coches, main){
    main.setAttribute('class', 'container');

    h1 = document.createElement('h1');
    h1.textContent = 'Ejemplo de coches';
    h1.style.width = '100%';
    h1.style.textAlign = 'center';
    main.appendChild(h1);

    div = document.createElement('div');
    div.setAttribute('class', 'caja');
    div.style.width = '100vw';
    div.style.height = '100%';

    for(coche in coches){
        
        div2 = document.createElement('div');
        div2.setAttribute('class', 'cajaProducto');
        div.appendChild(div2);
        
        img = document.createElement('img');
        img.setAttribute('src', `img/${coches[coche]['marca']}.webp`);
        div2.appendChild(img);

        ul = document.createElement('ul');

        for(datos in coches[coche]){
           
            switch (typeof coches[coche][datos]) {
                case 'object':
                    li = document.createElement('li');
                    li.textContent = `${datos} `
                    ul.appendChild(li);

                    ul2 = document.createElement('ul');
                    for(propietario in coches[coche][datos]){
                        li2 = document.createElement('li');
                        li2.textContent = `${propietario} : ${coches[coche][datos][propietario]}`
                        ul2.appendChild(li2);
                    }
                    ul.appendChild(ul2);
                    break;
            
                default:
                    li = document.createElement('li');
                    li.textContent = `${datos} : ${coches[coche][datos]}`
                    ul.appendChild(li);
                    break;
            }
        }
        div2.appendChild(ul);
    }
    main.appendChild(div);
}

/**
 * Llamara a la cabecera de la funcion
 */
pintar_coches(coches, main);