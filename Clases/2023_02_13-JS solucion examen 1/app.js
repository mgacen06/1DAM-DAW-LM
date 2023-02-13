/**
 * Trimestre 2 SOLUCION
 * Examen 1
 * 
 * Contenido: funciones, estructuras, objetos y arrays
 * Tiempo: 60 minutos
 * 
 * Detalles.
 * -    Es FUNDAMENTAL poner identificar cada examen para poder corregirlo. Para ello 
 *      es necesario rellenar los datos de @author y @email  
 * -    No se corrigen examenes sin rellenar este elemento.
 * -    No se permite el uso de internet, por lo que el modo avión debe estar activado.
 *      La penalización de no cumplir este requisito es el suspenso automatico del examen.
 * -    No se permite el uso de otro codigo o practicas realizadas en clase.
 * -    La única fuente de información posible será la chuleta que se facilita junto al examen. 
 * 
 * Datos del estudiante.
 * @author Sergio Fontan Llamas
 * @email sfontan@profesores.imf.com
 */


let tipos = {
    Planta: {
      efectivo: ["Tierra", "Agua"],
      noEfectivo: ["Fuego", "Veneno", "Volador", "Planta"],
      inmune: [],
    },
    Fuego: {
      efectivo: ["Hielo", "Planta"],
      noEfectivo: ["Fuego", "Roca", "Dragon"],
      inmune: [],
    },
    Agua: {
      efectivo: ["Tierra", "Fuego"],
      noEfectivo: ["Agua", "Electrico"],
      inmune: [],
    },
    Electrico: {
      efectivo: ["Agua", "Volador"],
      noEfectivo: ["Electrico", "Planta"],
      inmune: ["Tierra"],
    },
    Hielo: {
      efectivo: ["Agua", "Tierra", "Roca", "Dragon"],
      noEfectivo: ["Fuego", "Hielo"],
      inmune: [],
    },
    Lucha: {
      efectivo: ["Hielo", "Normal", "Siniestro", "Acero"],
      noEfectivo: ["Psiquico", "Volador"],
      inmune: ["Fantasma"],
    },
    Veneno: {
      efectivo: ["Planta"],
      noEfectivo: ["Veneno"],
      inmune: ["Acero"],
    },
    Tierra: {
      efectivo: ["Roca", "Electrico"],
      noEfectivo: ["Planta"],
      inmune: ["Volador"],
    },
    Volador: {
      efectivo: ["Planta", "Lucha"],
      noEfectivo: ["Electrico", "Roca", "Hielo"],
      inmune: [],
    },
    Fantasma: {
      efectivo: ["Fantasma", "Psiquico"],
      noEfectivo: [],
      inmune: ["Normal"],
    },
    Acero: {
      efectivo: ["Acero", "Roca"],
      noEfectivo: ["Fuego", "Lucha"],
      inmune: [],
    },
    Siniestro: {
      efectivo: ["Psiquico", "Fantasma"],
      noEfectivo: ["Lucha"],
      inmune: [],
    },
    Dragon: {
      efectivo: ["Dragon"],
      noEfectivo: [],
      inmune: [],
    },
    Psiquico: {
      efectivo: ["Veneno", "Lucha"],
      noEfectivo: ["Psiquico"],
      inmune: ["Siniestro"],
    },
    Normal: {
      efectivo: [],
      noEfectivo: ["Roca"],
      inmune: ["Fantasma"],
    },
  };
  
let pokemons = [
{
    nombre: "Pikachu",
    nivel: 25,
    tipo: "Electrico",
    estadisticas: {
    ataque: 55,
    defensa: 40,
    velocidad: 90,
    },
    evolucion: function () {
    this.nombre = "Raichu";
    this.tipo = "Electrico";
    },
},
{
    nombre: "Charmander",
    nivel: 10,
    tipo: "Fuego",
    estadisticas: {
    ataque: 52,
    defensa: 43,
    velocidad: 65,
    },
    evolucion: function () {
    this.nombre = "Charmeleon";
    this.tipo = "Fuego";
    },
},
{
    nombre: "Squirtle",
    nivel: 15,
    tipo: "Agua",
    estadisticas: {
    ataque: 48,
    defensa: 65,
    velocidad: 43,
    },
    evolucion: function () {
    this.nombre = "Wartortle";
    this.tipo = "Agua";
    },
},
{
    nombre: "Jigglypuff",
    nivel: 5,
    tipo: "Normal",
    estadisticas: {
    ataque: 45,
    defensa: 20,
    velocidad: 20,
    },
    evolucion: false,
},
{
    nombre: "Gengar",
    nivel: 35,
    tipo: "Fantasma",
    estadisticas: {
    ataque: 65,
    defensa: 60,
    velocidad: 110,
    },
    evolucion: false,
},
{
    nombre: "Mewtwo",
    nivel: 70,
    tipo: "Psiquico",
    estadisticas: {
    ataque: 110,
    defensa: 90,
    velocidad: 130,
    },
    evolucion: false,
},
{
    nombre: "Dragonite",
    nivel: 55,
    tipo: "Dragon",
    estadisticas: {
    ataque: 134,
    defensa: 95,
    velocidad: 80,
    },
    evolucion: false,
},
{
    nombre: "Snorlax",
    nivel: 50,
    tipo: "Normal",
    estadisticas: {
    ataque: 110,
    defensa: 65,
    velocidad: 30,
    },
    evolucion: false,
},
{
    nombre: "Charizard",
    nivel: 36,
    tipo: "Fuego",
    estadisticas: {
    ataque: 84,
    defensa: 78,
    velocidad: 100,
    },
    evolucion: false,
},
{
    nombre: "Blastoise",
    nivel: 36,
    tipo: "Agua",
    estadisticas: {
    ataque: 83,
    defensa: 100,
    velocidad: 78,
    },
    evolucion: false,
},
{
    nombre: "Venusaur",
    nivel: 36,
    tipo: "Planta",
    estadisticas: {
    ataque: 82,
    defensa: 83,
    velocidad: 80,
    },
    evolucion: false,
},
{
    nombre: "Vaporeon",
    nivel: 25,
    tipo: "Agua",
    estadisticas: {
    ataque: 65,
    defensa: 60,
    velocidad: 65,
    },
    evolucion: false,
},
{
    nombre: "Flareon",
    nivel: 25,
    tipo: "Fuego",
    estadisticas: {
    ataque: 130,
    defensa: 60,
    velocidad: 65,
    },
    evolucion: false,
},
{
    nombre: "Espeon",
    nivel: 25,
    tipo: "Psiquico",
    estadisticas: {
    ataque: 65,
    defensa: 60,
    velocidad: 130,
    },
    evolucion: false,
},
{
    nombre: "Umbreon",
    nivel: 25,
    tipo: "Siniestro",
    estadisticas: {
    ataque: 65,
    defensa: 110,
    velocidad: 65,
    },
    evolucion: false,
},
{
    nombre: "Growlithe",
    nivel: 15,
    tipo: "Fuego",
    estadisticas: {
    ataque: 70,
    defensa: 45,
    velocidad: 60,
    },
    evolucion: function () {
    this.nombre = "Arcanine";
    this.tipo = "Fuego";
    },
},
{
    nombre: "Chikorita",
    nivel: 5,
    tipo: "Planta",
    estadisticas: {
    ataque: 49,
    defensa: 65,
    velocidad: 45,
    },
    evolucion: function () {
    this.nombre = "Bayleef";
    this.tipo = "Planta";
    },
},
{
    nombre: "Cyndaquil",
    nivel: 5,
    tipo: "Fuego",
    estadisticas: {
    ataque: 52,
    defensa: 43,
    velocidad: 65,
    },
    evolucion: function () {
    this.nombre = "Quilava";
    this.tipo = "Fuego";
    },
},
{
    nombre: "Totodile",
    nivel: 5,
    tipo: "Agua",
    estadisticas: {
    ataque: 65,
    defensa: 64,
    velocidad: 43,
    },
    evolucion: function () {
    this.nombre = "Croconaw";
    this.tipo = "Agua";
    },
},
{
    nombre: "Sentret",
    nivel: 5,
    tipo: "Normal",
    estadisticas: {
    ataque: 46,
    defensa: 34,
    velocidad: 20,
    },
    evolucion: function () {
    this.nombre = "Furret";
    this.tipo = "Normal";
    },
},
{
    nombre: "Bulbasaur",
    nivel: 5,
    tipo: "Planta",
    estadisticas: {
    ataque: 49,
    defensa: 49,
    velocidad: 45,
    },
    evolucion: function () {
    this.nombre = "Ivysaur";
    this.tipo = "Planta";
    },
},
{
    nombre: "Ponyta",
    nivel: 5,
    tipo: "Fuego",
    estadisticas: {
    ataque: 85,
    defensa: 55,
    velocidad: 90,
    },
    evolucion: function () {
    this.nombre = "Rapidash";
    this.tipo = "Fuego";
    },
},
{
    nombre: "Vulpix",
    nivel: 5,
    tipo: "Fuego",
    estadisticas: {
    ataque: 41,
    defensa: 40,
    velocidad: 65,
    },
    evolucion: function () {
    this.nombre = "Ninetales";
    this.tipo = "Fuego";
    },
},
{
    nombre: "Psyduck",
    nivel: 5,
    tipo: "Agua",
    estadisticas: {
    ataque: 52,
    defensa: 48,
    velocidad: 55,
    },
    evolucion: function () {
    this.nombre = "Golduck";
    this.tipo = "Agua";
    },
},
{
    nombre: "Steelix",
    nivel: 5,
    tipo: "Acero",
    estadisticas: {
    ataque: 85,
    defensa: 200,
    velocidad: 30,
    },
    evolucion: false,
},

{
    nombre: "Gengar",
    nivel: 5,
    tipo: "Fantasma",
    estadisticas: {
    ataque: 65,
    defensa: 60,
    velocidad: 110,
    },
    evolucion: false,
},

{
    nombre: "Hitmonlee",
    nivel: 5,
    tipo: "Lucha",
    estadisticas: {
    ataque: 95,
    defensa: 95,
    velocidad: 70,
    },
    evolucion: false,
},
{
    nombre: "Pidgeot",
    nivel: 5,
    tipo: "Volador",
    estadisticas: {
    ataque: 80,
    defensa: 75,
    velocidad: 101,
    },
    evolucion: false,
},
{
    nombre: "Golem",
    nivel: 5,
    tipo: "Roca",
    estadisticas: {
    ataque: 120,
    defensa: 130,
    velocidad: 45,
    },
    evolucion: false,
},
];

  
/**
 * Ejercicio 1. 
 * Crea una funcion que retorne las estadisticas de los pokemon de tipo electrico con 
 * un nivel mayor a 20
 * @return array estadisticas
 */
function ej1(){
  let estadisticas = [];
  for(pok in pokemons){
    if(pokemons[pok]['tipo'] == 'Electrico' && pokemons[pok]['nivel'] > 20){
      estadisticas.push(pokemons[pok]['estadisticas']);
    }
  }
  return estadisticas;
}

console.log(ej1());

/**
 * Ejercicio 2. 
 * Crea una funcion que retorna los pokemon que pueden tener ataques inmunes a otros pokemon
 * @return Array nombres
 */

function ej2(){
  let nombres = [];
  for(pok in pokemons){
    /**
     * Interesa quedarse con el 'tipo' para poder comparar con los tipos del array 'tipos'
     * pokemons[pok]['tipo]
     */
    for(t in tipos){
      if(t == pokemons[pok]['tipo']){
        /**
         * Cuando 't' como nombre de la propiedad tiene el mismo valor que el tipo
         * del pokemon que estamos comparando, pasamos a mirar el array 'inmune'
         */
        if(typeof tipos[t]['inmune'] == 'object' && tipos[t]['inmune'].length > 0){
          /**
           * Formas de comprobar si hay contenido en el array 'inmune'
           * 1. Su longitud es > 0 ---> tipos[t]['inmune'].length > 0
           * 2. typeof tipos[t]['inmune']:
           *    - su valor es 'object' cuando contiene elementos 
           *    - su valor es 'undefined' cuando no contiene nada o no existe
           * 
           * En este caso es 'object' siempre por estar ya creado y definido
           * Ademas es longitud > 0 en ciertos casos (los que interesa)
           */
          nombres.push(pokemons[pok]['nombre']);

        }
      }
    }
  }
  return nombres;
}

// Solucion 2. Aparece comentada porque sale error en consola pero ejecuta correctamente. Cosa rara ¿?¿?¿?¿?
// function ej2b(){
//   let nombres = [];
//   for(pok in pokemons){
//     if(tipos[pokemons[pok]['tipo']]['inmune'].length > 0){
//       nombres.push(pokemons[pok]['nombre']);
//     }
//   }
  
//   return nombres;
// }

console.log(ej2());
// console.log(ej2b());

/**
 * Ejercicio 3.
 * Crea una funcion que retorne el pokemon que tenga mayor nivel.
 * Es necesario retornar todos sus datos 
 * @return Object pokemon
 */
function ej3(){
  let niveles = [];
  for(pok in pokemons){
    if(pokemons[pok]['nivel'].toString().length < 2){
      niveles.push('0'+pokemons[pok]['nivel'].toString());
    }else{
      niveles.push(pokemons[pok]['nivel'].toString());
    }
  }
  /**
   * El metodo sort() ordena los elementos del array.
   * OJO: segun la ordenación de sort() hay que tener en cuenta este aspecto con numeros:
   * -  70 es mayor a 1
   * -  5 es mayor a 10
   * Compara elementos por el primer digito que se encuentra, por lo que hay que 
   * fiarse a medias de que ordene correctamente (podeis comprobarlo con el console.log) 
   * 
   * Una forma puede ser convirtiendo el numero a tipo 'string' con toString() y comprobar su longitud.
   * Opciones:
   * -  si su longitud es < 2 tenemos que el numero es una unidad. Le agregamos un 0 delante
   *    Ejemplo: niveles.push('0'+'5');
   * 
   * -  si su longitud es 2 tenemos que el numero contiene decena. Lo insertamos tal cual. 
   *    Ejemplo: niveles.push('15');
   * 
   * El metodo reverse() invierte el orden del array, por lo que deja en la posicion 0 el que necesito devolver
   */
  niveles.sort();
  niveles.reverse();
  // Funcion corregida puesto que originalmente terminaba aqui y
  // devolvía solo el nivel mas alto pero no los datos del pokemon. 
  // Al poner en el enunciado se piden todos los datos, se busca 
  // el que coincide (solo uno) y se devuelve. (problema si el nivel coincide en dos pokemon)
  for(pok in pokemons){
    if(pokemons[pok]['nivel'] == niveles[0]){
      return pokemons[pok];
    }
  }
  // return niveles[0];
}

function ej3b() {
  let pokemon = {}; 
  let nivel = 0;
  for (pok in pokemons) {
    if (pokemons[pok]['nivel'] > nivel) {
      nivel = pokemons[pok]['nivel']; // Actualizar nivel
      pokemon = pokemons[pok];        // Actualizar pokemon a devolver
    }
  }
  return pokemon;
}
console.log(ej3());
console.log(ej3b());

/**
 * Ejercicio 4.
 * Crea una funcion que retorne los pokemon que pueden evolucionar y que tienen un nivel menor a 15
 * @return Array nombres
 */
function ej4(){
  let nombres = [];
  for(pok in pokemons){
    if(typeof pokemons[pok]['evolucion'] == 'function' && pokemons[pok]['nivel'] < 15){
      /**
       * Distinguimos que los pokemon puedan evolucionar por su propiedad 'evolucion'.
       * Si nos fijamos en su contenido tiene una funcion o un valor 'false'.
       * Por tanto comprobando su tipo podemos saber si evoluciona o no:
       * -  typeof evolucion == 'function' ---> evoluciona
       * -  typeof evolucion == 'boolean'  ---> no evoluciona
       * -  typeof evolucion ==  false     ---> no evoluciona
       */
      nombres.push(pokemons[pok]['nombre']);
    }
  }
  return nombres;
}

console.log(ej4());
