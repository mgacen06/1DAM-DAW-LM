/**
 * Ejercicio 5.
 * Crea una funcion que recibe por parametro un nombre de un pokemon y retorna un array u objeto con los nombres de los 
 * pokemons a los que sus ataques son poco efectivos
 * @param String nombre
 * @return Array nombres
 */
function ejercicio5(nombre){
  let pocoEfectivo = [];
  let nombres = [];
  for (pokemon in pokemons){
    if(pokemons[pokemon]['nombre'] == nombre ){
      for (tipo in tipos){
        if (pokemons[pokemon]['tipo'] == tipo){
          pocoEfectivo = tipos[tipo]['noEfectivo'];
          for(p in pokemons){
            if (pocoEfectivo.includes(pokemons[p]['tipo'])){
              nombres.push(pokemons[p]['nombre']);
            }
          }
          return nombres;
        }
      } 
    }
  }
}

console.log(ejercicio5("Squirtle"));

/**
 * Ejercicio 6.
 * Crea una funcion que recibe por parametro un nombre de un pokemon 
 * y retorna el numero de pokemons que tienen más nivel que el pokemon introducido
 * @param String nombre
 * @return number total
 */
function ejercicio6(nombre){
  let contador = 0;
  for (pokemon in pokemons){
    if (pokemons[pokemon]['nombre'] == nombre){
      for (pok in pokemons){
        if(pokemons[pok]['nivel'] > pokemons[pokemon]['nivel']){
          contador++;
        }
      }
    }
  }
  return contador;
}
console.log(ejercicio6("Squirtle"));

/**
 * Ejercicio 7.
 * Crea una funcion que retorne el nombre del pokemon con mayor velocidad
 * @param NO
 * @return String nombre
 */
function ejercicio7(){
  let velocidades = [];
  for (pokemon in pokemons){
    velocidades.push(pokemons[pokemon]['estadisticas']['velocidad']); 
  }
  velocidades.sort();
  velocidades.reverse();
  return velocidades[0];
}
console.log(ejercicio7());


/**
 * Ejercicio 8.
 * Crea una funcion que reciba por parametro un nombre de un pokemon y un nivel. 
 * En caso de que exista este nombre y este nivel introducidos, la funcion debe retornar todos los nombres de los pokemons que tengan ataques poco efectivos y ademas mayor nivel.
 * @param Number nivel
 * @param String nombre
 * @return Array nombres
 */

function ejercicio8(nivel, nombre){
  let pocoEfectivo = [];
  let nombres = [];
  for (pokemon in pokemons){
    if(pokemons[pokemon]['nombre'] == nombre && pokemons[pokemon]['nivel'] == nivel ){
      for (tipo in tipos){
        if (pokemons[pokemon]['tipo'] == tipo){
          pocoEfectivo = tipos[tipo]['noEfectivo'];
          for(p in pokemons){
            if (pocoEfectivo.includes(pokemons[p]['tipo'])){
              nombres.push(pokemons[p]['nombre']);
            }
          }
          return nombres;
        }
      } 
    }
  }
}
console.log(ejercicio8(25, 'Pikachu'));