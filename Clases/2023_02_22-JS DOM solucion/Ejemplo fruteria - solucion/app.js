let productos = fruteria;
let frutas = fruteria['frutas'];
const verduras = Object.assign({},fruteria['verduras']); // Clonar objeto verduras
let secciones = document.getElementsByTagName('section');
let div, div2, h1, h6, ul, li;
let verdurasOrdenadas = ordenados();

/**
 * Funcion auxiliar que ordena las verduras teniendo en cuenta la frescura.
 * @returns array 
 */
function ordenados(){
    let frescura = 5;
    let resultado = [];
    do{
        for(verdura in verduras){
            if(verduras[verdura]['frescura'] == frescura){
                resultado.push(verduras[verdura]);
                delete verduras[verdura];
            }
        }
        frescura--;
    }while(frescura > 0);
    return resultado;
}

/**
 * Funcion que realiza la insercion de elementos en el primer <section>
 * @param {Array} productos 
 * @param {Object} seccion 
 */
function section1(productos, seccion){
    seccion.setAttribute('class', 'container');
    for(producto in productos){
        div = document.createElement('div');
        div.setAttribute('class', 'caja');
        div.style.width = '48vw';
        div.style.height = '100%';

        h1 = document.createElement('h1');
        h1.textContent = producto;
        h1.style.width = '100%';
        h1.style.textAlign = 'center';
        div.appendChild(h1);

        for(p in productos[producto]){
            div2 = document.createElement('div');
            div2.setAttribute('class', 'cajaProducto');
            div.appendChild(div2);

            h6 = document.createElement('h6');
            h6.textContent = p;
            h6.style.width = "100%";
            h6.style.textAlign = 'center';
            div2.appendChild(h6);
            
            ul = document.createElement('ul');

            for(datos in productos[producto][p]){
                
                li = document.createElement('li');
                li.style.listStyle = 'none';
                
                switch (datos) {
                    case 'tipo':
                        li.textContent = `${datos} : ${productos[producto][p][datos]}`
                        break;

                    case 'precio':
                        li.textContent = `${datos} : ${productos[producto][p][datos]}`
                        break;
                    
                    case 'origen':
                        li.textContent = `${datos} : ${productos[producto][p][datos]}`
                    break;

                    default:
                        break;
                }  
                ul.appendChild(li);
            }
            div2.appendChild(ul);
        }
        seccion.appendChild(div);
    }
}

/**
 * Funcion que realiza la insercion de elementos en el segundo <section>
 * @param {Array} productos 
 * @param {Object} seccion 
 */
function section2(productos, seccion){
    // Creamos flexbox en la seccion correspondiente
    seccion.setAttribute('class', 'container');
    for(producto in productos){
        div = document.createElement('div');
        div.setAttribute('class', 'caja');
        div.style.width = '48vw';
        div.style.height = '100%';

        h1 = document.createElement('h1');
        h1.textContent = producto;
        h1.style.width = '100%';
        h1.style.textAlign = 'center';
        div.appendChild(h1);

        for(p in productos[producto]){
            div2 = document.createElement('div');
            div2.setAttribute('class', 'cajaProducto');
            div.appendChild(div2);

            h6 = document.createElement('h6');
            h6.textContent = p;
            h6.style.width = "100%";
            h6.style.textAlign = 'center';
            div2.appendChild(h6);
            
            ul = document.createElement('ul');

            for(datos in productos[producto][p]){
                
                li = document.createElement('li');
                li.style.listStyle = 'none';
                
                if(datos === 'enOferta'){
                    productos[producto][p][datos] ? li.textContent = `${datos} : si` : li.textContent = `${datos} : no`; 
                }else{
                    li.textContent = `${datos} : ${productos[producto][p][datos]}`
                }   
                ul.appendChild(li);
            }
            div2.appendChild(ul);
        }
        seccion.appendChild(div);
    }
}

/**
 * Funcion que realiza la insercion de elementos en el tercer <section>
 * @param {Array} verduras 
 * @param {Object} seccion 
 */
function section3(verduras, seccion){
    // Creamos flexbox en la seccion correspondiente
    seccion.setAttribute('class', 'container');
    h1 = document.createElement('h1');
    h1.textContent = 'Verduras ordenadas por frescura';
    h1.style.width = '100%';
    h1.style.textAlign = 'center';
    seccion.appendChild(h1);
    console.log(verduras)
    /**
     * Recorremos verduras ordenadas
     */
    for(producto in verduras){
        div = document.createElement('div');
        div.setAttribute('class', 'caja');
        div.style.width = '48vw';
        div.style.height = '100%';

        /**
         * AQui hay que ordenar e imprimir las frescuras
         */
        ul = document.createElement('ul');
        for(v in verduras[producto]){
            li = document.createElement('li');
            li.style.listStyle = 'none';
            if(v != 'frescura'){
                li.textContent = `${v} : ${verduras[producto][v]}`;
            }else{
                progress = document.createElement('progress');
                progress.setAttribute('value', verduras[producto][v]);
                progress.setAttribute('max', 5);
                progress.setAttribute('min', 0);
               
                switch (verduras[producto][v]) {
                    case 5:
                        console.log(verduras[producto][v])
                        progress.setAttribute('class', 'green');
                        break;
                    case 4:
                        progress.setAttribute('class', 'green');
                        break;
                    case 3:
                        progress.setAttribute('class', 'yellow');
                        break;
                    case 2:
                        progress.setAttribute('class', 'yellow');
                        break;
                    default:
                        progress.setAttribute('class', 'red');
                        break;
                }
                li.appendChild(progress);
            }
            ul.appendChild(li);
        }
        div.appendChild(ul);
        seccion.appendChild(div);
    }
}

/**
 * Llamada a las cabeceras de las funciones correspondientes a las tres secciones
 */
section1(productos, secciones[0]);
section2(productos, secciones[1]);
section3(verdurasOrdenadas, secciones[2]);

