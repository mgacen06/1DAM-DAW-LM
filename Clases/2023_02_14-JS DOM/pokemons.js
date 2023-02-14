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
