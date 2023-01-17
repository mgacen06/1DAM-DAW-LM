/**
 * Objeto restaurante: contiene informacion sobre un restaurante
 */
let restaurante = {
    trabajadores : {
        camarero1 : {
            nombre : "Antonio",
            fechaNacimiento : "1996-02-10",
            experiencia : "7 años"
        },
        camarero2 : {
            nombre : "Claudia",
            fechaNacimiento : "1992-12-20",
            experiencia : "10 años"
        },
        camarero3 : {
            nombre : "Ernesto",
            fechaNacimiento : "2004-12-20",
            experiencia : "No tiene experiencia"
        },
    },
    material : null,
    salon : {
        mesa1: {
            capacidad : 5
        },
        mesa2: {
            capacidad : 8
        },
        mesa3: {
            capacidad : 6
        },
        mesa4: {
            capacidad : 4
        },
        mesa5: {
            capacidad : 2
        },
        mesa6: {
            capacidad : 1
        }
    }
};

// console.log(restaurante);

/**
 * EJERCICIO 1:
 * Mostrar por consola el objeto de cada trabajador (objeto entero) del restaurante
 */
/**
 * PASOS PARA RESOLVER EL EJERCICIO
 * 1. Entrar en trabajadores.
 * 2. Mostrar cada trabajador
 */
// console.log(restaurante['trabajadores']);

// 1.            --> restaurante
for(pos in restaurante){
    // console.log(pos); // Contiene un string con el nombre de las propiedades que estan dentro de restautante. En este caso solamente es 'trabajadores'
    // console.log(restaurante[pos]); // Muestra los trabajadores que estan dentro de restaurante
    // 2.       --> restaurante['trabajadores']
    if(pos === 'trabajadores'){
        // 3.       --> restaurante['trabajadores'][camareros]
        for(posTrabajadores in restaurante[pos]){
            console.log("Propiedad: " + posTrabajadores);
            console.log(restaurante[pos][posTrabajadores]);
        }
    }
}
/**
 * EJERCICIO 2:
 * Mostrar los años de experiencia de los trabajadores
 */
/**
 * Recorremos el objeto restaurante con 3 posibles iteraciones:
 * - pos            --> trabajadores (este es el que nos interesa)
 * - pos            --> material
 * - pos            --> salon
 */
for(pos in restaurante){
    if(pos === 'trabajadores'){
        /**
         * Recorremos el obajeto restaurante['trabajadores'] con 2 posibles valores:
         * - posTrabajadores            -> camarero1 (interesa)
         * - posTrabajadores            -> camarero2 (interesa)
         */
        for(posTrabajadores in restaurante[pos]){
            // console.log(restaurante[pos][posTrabajadores]['experiencia']);
            console.log(`El camarero con nombre ${restaurante[pos][posTrabajadores]['nombre']} tiene ${restaurante[pos][posTrabajadores]['experiencia']} de experiencia`);
        }
    }
}


/**
 * EJERCICIO 3:
 * Mostrar el nombre de los trabajadores que tienen mas de 7 años de experiencia
 */
/**
 * Recorremos el objeto restaurante con 3 posibles iteraciones:
 * - pos            --> trabajadores (este es el que nos interesa)
 * - pos            --> material
 * - pos            --> salon
 */
for(pos in restaurante){
    if(pos === 'trabajadores'){
        /**
         * Recorremos el obajeto restaurante['trabajadores'] con 2 posibles valores:
         * - posTrabajadores            -> camarero1 (interesa)
         * - posTrabajadores            -> camarero2 (interesa)
         */
        for(posTrabajadores in restaurante[pos]){
            let experiencia = parseInt(restaurante[pos][posTrabajadores]['experiencia']);
            // Si la expriencia es un numero y es mayor que 7
            if(typeof experiencia == 'number' && !isNaN(experiencia) && experiencia > 7){
                console.log(`El camarero con nombre ${restaurante[pos][posTrabajadores]['nombre']} tiene ${restaurante[pos][posTrabajadores]['experiencia']} de experiencia`);
            }
        }
    }
}

/**
 * EJERCICIO 4:
 * Mostrar el nombre de los trabajadores que tengan menos de 30 años
 */
/**
 * Creamos una variable llamada 'hoy' que contiene la fecha actual quedandose unicamente con el año
 */
let anioNacimiento;
let hoy = new Date().getFullYear();
for(pos in restaurante){
    if(pos === 'trabajadores'){
        /**
         * Recorremos el obajeto restaurante['trabajadores'] con 2 posibles valores:
         * - posTrabajadores            -> camarero1 (interesa)
         * - posTrabajadores            -> camarero2 (interesa)
         */
        for(posTrabajadores in restaurante[pos]){
            anioNacimiento = parseInt(restaurante[pos][posTrabajadores]['fechaNacimiento']); // El formato de la anioNacimiento es YYYY
            /**
             * CONDICION ? SI_TRUE : SI_FALSE;
             */
            hoy - anioNacimiento < 30 ? console.log(`El camarero con nombre ${restaurante[pos][posTrabajadores]['nombre']} tiene menos de 30 años`) : false ;
        }
    }
}

/**
 * EJERCICIO 5:
 * Mostrar las mesas que tienen capacidad mayor a 5
 */
/**
 * 1. Filrar salon
 * 2. Filtrar mesas
 * 3. Comparar capacidad
 */
for(pos in restaurante){
    // 1.           --> pos = 'salon'
    if(pos === 'salon'){
        for(posSalon in restaurante[pos]){
            /**
             * Filtramos por mesas (variable posSalon) y esta puede tener 6 posibles valores
             * posSalon         ---> mesa1
             * posSalon         ---> mesa2
             * posSalon         ---> mesa3
             * posSalon         ---> mesa4
             * posSalon         ---> mesa5
             * posSalon         ---> mesa6
             */
            // console.log(restaurante[pos][posSalon]['capacidad']);
            if(restaurante[pos][posSalon]['capacidad'] > 5){
                console.log(`La ${posSalon} tiene una capacidad mayor a 5`);
            }
            restaurante[pos][posSalon]['capacidad'] > 5 ? console.log(`La ${posSalon} tiene una capacidad mayor a 5`) : false;
        }
    }
}


/**
 * EJERCICIO 6:
 * Eliminar las mesas que sean mayores a capacidad 4.
 */
for(pos in restaurante){
    // 1.           --> pos = 'salon'
    if(pos === 'salon'){
        for(posSalon in restaurante[pos]){
            /**
             * Filtramos por mesas (variable posSalon) y esta puede tener 6 posibles valores
             * posSalon         ---> mesa1 (interesa porque capacidad > 4)
             * posSalon         ---> mesa2 (interesa porque capacidad > 4)
             * posSalon         ---> mesa3 (interesa porque capacidad > 4)
             * posSalon         ---> mesa4
             * posSalon         ---> mesa5
             * posSalon         ---> mesa6
             */
            restaurante[pos][posSalon]['capacidad'] > 4 ? delete restaurante[pos][posSalon] : false;
        }
    }
}
console.log(restaurante['salon']);


/**
 * EJERCICIO 7:
 * Crear un segundo salon con 3 mesas que tengan capacidades aleatorias entre 1 y 6
 */
/**
 * 1. Crear nueva propiedad salon2 dentro de restaurante (objeto).
 * 2. Crear 3 mesas dentro de salon2
 * 3. Crear propiedad 'capacidad' con valor aleatorio por cada mesa
 * 
 * Para hallar un numero aleatorio entre 1 y 6 seguimos el siguiete esquema:
 * Math.floor(Math.random() * (max - min + 1)) + min;
 * 
 * donde:
 * - max es el valor maximo             --> 6
 * - min es el valor minimo             --> 1
 * - Math.random()                      --> valor aleatorio entre el max y el min introducidos con decimales.
 * - Math.floor                         --> redondear el Math.random()
 */

// 1
restaurante['salon2'] = {
    // 2
    mesa1: {
        capacidad : Math.floor((Math.random() * 6 )) + 1
    },
    mesa2: {
        capacidad: Math.floor((Math.random() * 6 )) + 1
    },
    mesa3: {
        capacidad: Math.floor((Math.random() * 6 )) + 1
    }
};

console.log(restaurante);

/**
 * EJERCICIO 8. (para el viernes)
 * Meter 3 mesas dentro del salon
 */
