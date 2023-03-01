let sections = document.getElementsByTagName('section');
let h1, div, p, card, descripcion, ul, li, coment, h3, h5, h6;

/**
 * Funcion principal para pintar elementos en HTML
 * @param {String} tipo - Contiene uno de los cuatro objetos que se van a pintar
 */
function pintar(tipo){
    section_style(sections);
    // console.log(objeto['categoria'])
    switch (tipo) {
        case 'papeleria':
            sections[0].appendChild(titulo(papeleria));
            productos(papeleria)
            comentarios(papeleria);
        break;

        case 'hogar':
            sections[0].appendChild(titulo(hogar));
            productos(hogar)
            comentarios(hogar);
        break;

        case 'electronica':
            sections[0].appendChild(titulo(electronica));
            productos(electronica)
            comentarios(electronica);
        break;

        case 'cocina':
            sections[0].appendChild(titulo(cocina));
            productos(cocina)
            comentarios(cocina);
        break;
    
        default:
            break;
    }
}


/**
 * Funcion que agrega los estilos de contenedor padre a los sections
 * @param {Array} sections 
 */
function section_style(sections){
    for(let section = 0; section < sections.length; section++){
        sections[section].classList.add('container');
        // sections[section].setAttribute('class', 'container');
        sections[section].replaceChildren();
    }
}

/**
 * Funcion que configura los titulos para todos las las categorias
 * @param {Array} objeto - Contiene uno de los cuatro objetos posibles
 * @returns {Object} h1
 */
function titulo(objeto){
    h1 = document.createElement('h1');
    h1.textContent = `Productos de la categoria ${objeto['categoria']}`;
    h1.style.textAlign = 'center';
    h1.style.width = '100vw';
    return h1;
}

/**
 * Funcion que inserta todos los productos en su seccion correspondiente de productos.
 * @param {Object} objeto 
 */
function productos(objeto){
    let productos = objeto['productos'];
    
    for(prod in productos){
        card = document.createElement('div');
        card.setAttribute('class', 'card');

        for(dato in productos[prod]){
            switch (typeof productos[prod][dato]) {
                case 'function':
                    // No hago nada                
                    break;
    
                case 'boolean':
                    // No hago nada                
                    break;
    
                case 'object':
                    // Tratamiento especial
                    // Evaluamos que sea descripcion y no comentario.
                    if(dato == 'descripcion'){
                        ul = document.createElement('ul');
                        descripcion = productos[prod][dato];
                        
                        for (des in descripcion) {
                            li = document.createElement('li');
                            li.textContent = `${des} : ${descripcion[des]}`;
                            ul.appendChild(li);
                            card.appendChild(ul);
                        }
                    }

                    break;
                default:
                    // Tipos string y number (nombre y precio)
                    p = document.createElement('p');
                    p.textContent = `${dato} : ${productos[prod][dato]}`;
                    card.appendChild(p);
                    break;
            }
        }   
        sections[1].appendChild(card);
    }
}

/**
 * Funcion que inserta todos los productos en su seccion correspondiente de comentarios.
 * @param {Object} objeto 
 */
function comentarios(objeto){
    let productos = objeto['productos'];
    
    for(prod in productos){
        card = document.createElement('div');
        card.setAttribute('class', 'card');

        for(dato in productos[prod]){
            switch (typeof productos[prod][dato]) {
                case 'string':
                    // Me quedo el nombre del producto        
                    if(dato == 'nombre'){
                        h3 = document.createElement('h3');
                        h3.textContent = `${productos[prod][dato]}`;
                        h3.style.textAlign = 'center';
                        h3.style.width = '100%';
                        card.appendChild(h3);
                    }        
                    break;
    
                case 'object':
                    // Tratamiento especial
                    // Evaluamos que sea comentario y no descripcion.
                    coment = productos[prod][dato];
                    if(dato == 'comentarios'){
                        for(orden in coment){
                            for (comentario in coment[orden]) {
                                switch (comentario) {
                                    case 'autor':
                                            h5 = document.createElement('h5');
                                            h5.textContent = `${comentario} : ${coment[orden][comentario]}`;
                                            card.appendChild(h5);
                                        break;
                                    
                                    case 'texto':
                                            h6 = document.createElement('h6');
                                            h6.textContent = `${comentario} : ${coment[orden][comentario]}`;
                                            card.appendChild(h6);

                                            // Si no es el ultimo, coloco una linea horizontal para separar comentarios
                                            if(orden < coment.length-1){
                                                hr = document.createElement('hr');
                                                card.appendChild(hr);
                                            }
                                            
                                        break;
                                
                                    default:
                                        break;
                                }
                            }  
                        }
                    }
                    
                    break;
                default:
                    
                    break;
            }
        }   
        sections[2].appendChild(card);
    }
}