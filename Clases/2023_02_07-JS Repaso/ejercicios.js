
const jugadores = [
    {
      nombre: "Lionel Messi",
      equipo: "Paris Saint-Germain",
      liga: "Ligue 1",
      posicion: "Delantero",
      golesMarcados: 26,
      partidosJugados: 30,
      fechaNacimiento: new Date("1987-06-24"),
      nacionalidad: "Argentina",
      esInternacional: true,
      estadisticas: {
        asistencias: 17,
        faltasSufridas: 43,
        tarjetas: [
          {
            tipo: "amarilla",
            cantidad: 4,
          },
          {
            tipo: "roja",
            cantidad: 1,
          },
        ],
        minutosJugados: 2700,
      },
    },
    {
      nombre: "Cristiano Ronaldo",
      equipo: "Manchester United",
      liga: "Premier League",
      posicion: "Delantero",
      golesMarcados: 22,
      partidosJugados: 27,
      fechaNacimiento: new Date("1985-02-05"),
      nacionalidad: "Portugal",
      esInternacional: true,
      estadisticas: {
        asistencias: 15,
        faltasSufridas: 31,
        tarjetas: [
          {
            tipo: "amarilla",
            cantidad: 3,
          },
          {
            tipo: "roja",
            cantidad: 0,
          },
        ],
        minutosJugados: 2500,
      },
    },
    {
      nombre: "Robert Lewandowski",
      equipo: "Bayern Munich",
      liga: "Bundesliga",
      posicion: "Delantero",
      golesMarcados: 37,
      partidosJugados: 28,
      fechaNacimiento: new Date("1988-08-21"),
      nacionalidad: "Polonia",
      esInternacional: true,
      estadisticas: {
        asistencias: 12,
        faltasSufridas: 27,
        tarjetas: [
          {
            tipo: "amarilla",
            cantidad: 6,
          },
          {
            tipo: "roja",
            cantidad: 0,
          },
        ],
        minutosJugados: 2650,
      },
    },
    {
      nombre: "Kylian Mbappé",
      equipo: "Paris Saint-Germain",
      liga: "Ligue 1",
      posicion: "Delantero",
      golesMarcados: 19,
      partidosJugados: 28,
      fechaNacimiento: new Date("1998-12-20"),
      nacionalidad: "Francia",
      esInternacional: true,
      estadisticas: {
        asistencias: 14,
        faltasSufridas: 32,
        tarjetas: [
          {
            tipo: "amarilla",
            cantidad: 2,
          },
          {
            tipo: "roja",
            cantidad: 0,
          },
        ],
        minutosJugados: 2300,
      },
    },
    {
      nombre: "Neymar Jr.",
      equipo: "Paris Saint-Germain",
      liga: "Ligue 1",
      posicion: "Delantero",
      golesMarcados: 21,
      partidosJugados: 29,
      fechaNacimiento: new Date("1992-02-05"),
      nacionalidad: "Brasil",
      esInternacional: true,
      estadisticas: {
        asistencias: 17,
        faltasSufridas: 39,
        tarjetas: [
          {
            tipo: "amarilla",
            cantidad: 3,
          },
          {
            tipo: "roja",
            cantidad: 0,
          },
        ],
        minutosJugados: 2600,
      },
    },
    {
      nombre: "Erling Haaland",
      equipo: "Borussia Dortmund",
      liga: "Bundesliga",
      posicion: "Delantero",
      golesMarcados: 22,
      partidosJugados: 25,
      fechaNacimiento: new Date("2000-07-21"),
      nacionalidad: "Noruega",
      esInternacional: true,
      estadisticas: {
        asistencias: 10,
        faltasSufridas: 20,
        tarjetas: [
          {
            tipo: "amarilla",
            cantidad: 1,
          },
          {
            tipo: "roja",
            cantidad: 0,
          },
        ],
        minutosJugados: 2100,
      },
    },
    {
      nombre: "Kevin De Bruyne",
      equipo: "Manchester City",
      liga: "Premier League",
      posicion: "Mediocampista",
      golesMarcados: 10,
      partidosJugados: 28,
      fechaNacimiento: new Date("1991-06-28"),
      nacionalidad: "Belgica",
      esInternacional: true,
      estadisticas: {
        asistencias: 25,
        faltasSufridas: 20,
        tarjetas: [
          {
            tipo: "amarilla",
            cantidad: 3,
          },
          {
            tipo: "roja",
            cantidad: 0,
          },
        ],
        minutosJugados: 2400,
      },
    },
    {
      nombre: "Virgil van Dijk",
      equipo: "Liverpool",
      liga: "Premier League",
      posicion: "Defensa",
      golesMarcados: 2,
      partidosJugados: 26,
      fechaNacimiento: new Date("1991-07-08"),
      nacionalidad: "Holanda",
      esInternacional: true,
      estadisticas: {
        asistencias: 2,
        faltasSufridas: 20,
        tarjetas: [
          {
            tipo: "amarilla",
            cantidad: 4,
          },
          {
            tipo: "roja",
            cantidad: 1,
          },
        ],
        minutosJugados: 1900,
      },
    },
    {
      nombre: "Luis Alberto",
      equipo: "Lazio",
      liga: "Serie A",
      posicion: "Mediocampista",
      golesMarcados: 8,
      partidosJugados: 30,
      fechaNacimiento: new Date("1992-11-28"),
      nacionalidad: "España",
      esInternacional: false,
      estadisticas: {
        asistencias: 20,
        faltasSufridas: 20,
        tarjetas: [
          {
            tipo: "amarilla",
            cantidad: 5,
          },
          {
            tipo: "roja",
            cantidad: 0,
          },
        ],
        minutosJugados: 2200,
      },
    },
    {
      nombre: "Jadon Sancho",
      equipo: "Borussia Dortmund",
      liga: "Bundesliga",
      posicion: "Delantero",
      golesMarcados: 12,
      partidosJugados: 25,
      fechaNacimiento: new Date("2000-03-25"),
      nacionalidad: "Inglaterra",
      esInternacional: true,
      estadisticas: {
        asistencias: 20,
        faltasSufridas: 10,
        tarjetas: [
          {
            tipo: "amarilla",
            cantidad: 2,
          },
          {
            tipo: "roja",
            cantidad: 1,
          },
        ],
        minutosJugados: 1900,
      },
    },
    {
      nombre: "Mauro Icardi",
      equipo: "Paris Saint-Germain",
      liga: "Ligue 1",
      posicion: "Delantero",
      golesMarcados: 27,
      partidosJugados: 28,
      fechaNacimiento: new Date("1993-02-19"),
      nacionalidad: "Argentina",
      esInternacional: true,
      estadisticas: {
        asistencias: 15,
        faltasSufridas: 20,
        tarjetas: [
          {
            tipo: "amarilla",
            cantidad: 3,
          },
          {
            tipo: "roja",
            cantidad: 0,
          },
        ],
        minutosJugados: 2100,
      },
    },
    {
      nombre: "Raheem Sterling",
      equipo: "Manchester City",
      liga: "Premier League",
      posicion: "Delantero",
      golesMarcados: 20,
      partidosJugados: 30,
      fechaNacimiento: new Date("1994-12-08"),
      nacionalidad: "Inglaterra",
      esInternacional: true,
      estadisticas: {
        asistencias: 15,
        faltasSufridas: 15,
        tarjetas: [
          {
            tipo: "amarilla",
            cantidad: 4,
          },
          {
            tipo: "roja",
            cantidad: 0,
          },
        ],
        minutosJugados: 1700,
      },
    },
    {
      nombre: "Leroy Sane",
      equipo: "Bayern Munich",
      liga: "Bundesliga",
      posicion: "Delantero",
      golesMarcados: 15,
      partidosJugados: 25,
      fechaNacimiento: new Date("1996-01-11"),
      nacionalidad: "Alemania",
      esInternacional: true,
      estadisticas: {
        asistencias: 20,
        faltasSufridas: 10,
        tarjetas: [
          {
            tipo: "amarilla",
            cantidad: 2,
          },
          {
            tipo: "roja",
            cantidad: 1,
          },
        ],
        minutosJugados: 1700,
      },
    },
    {
      nombre: "Ciro Immobile",
      equipo: "Lazio",
      liga: "Serie A",
      posicion: "Delantero",
      golesMarcados: 30,
      partidosJugados: 28,
      fechaNacimiento: new Date("1990-02-20"),
      nacionalidad: "Italia",
      esInternacional: true,
      estadisticas: {
        asistencias: 10,
        faltasSufridas: 15,
        tarjetas: [
          {
            tipo: "amarilla",
            cantidad: 3,
          },
          {
            tipo: "roja",
            cantidad: 0,
          },
        ],
        minutosJugados: 2200,
      },
    },
    {
      nombre: "Houssem Aouar",
      equipo: "Olympique Lyon",
      liga: "Ligue 1",
      posicion: "Mediocampista",
      golesMarcados: 5,
      partidosJugados: 25,
      fechaNacimiento: new Date("1998-06-30"),
      nacionalidad: "Francia",
      esInternacional: false,
      estadisticas: {
        asistencias: 10,
        faltasSufridas: 15,
        tarjetas: [
          {
            tipo: "amarilla",
            cantidad: 2,
          },
          {
            tipo: "roja",
            cantidad: 0,
          },
        ],
        minutosJugados: 1700,
      },
    },
    {
      nombre: "Tanguy Ndombele",
      equipo: "Tottenham Hotspur",
      liga: "Premier League",
      posicion: "Mediocampista",
      golesMarcados: 8,
      partidosJugados: 25,
      fechaNacimiento: new Date("1996-12-28"),
      nacionalidad: "Francia",
      esInternacional: true,
      estadisticas: {
        asistencias: 15,
        faltasSufridas: 18,
        tarjetas: [
          {
            tipo: "amarilla",
            cantidad: 3,
          },
          {
            tipo: "roja",
            cantidad: 1,
          },
        ],
        minutosJugados: 1600,
      },
    },
    {
      nombre: "Gianluigi Donnarumma",
      equipo: "AC Milan",
      liga: "Serie A",
      posicion: "Portero",
      golesMarcados: 0,
      partidosJugados: 27,
      fechaNacimiento: new Date("1999-02-25"),
      nacionalidad: "Italia",
      esInternacional: true,
      estadisticas: {
        asistencias: 0,
        faltasSufridas: 5,
        tarjetas: [
          {
            tipo: "amarilla",
            cantidad: 1,
          },
          {
            tipo: "roja",
            cantidad: 0,
          },
        ],
        minutosJugados: 2700,
      },
    },
    {
      nombre: "Serge Gnabry",
      equipo: "Bayern Munich",
      liga: "Bundesliga",
      posicion: "Delantero",
      golesMarcados: 20,
      partidosJugados: 26,
      fechaNacimiento: new Date("1995-07-14"),
      nacionalidad: "Alemania",
      esInternacional: true,
      estadisticas: {
        asistencias: 10,
        faltasSufridas: 15,
        tarjetas: [
          {
            tipo: "amarilla",
            cantidad: 2,
          },
          {
            tipo: "roja",
            cantidad: 0,
          },
        ],
        minutosJugados: 1700,
      },
    },
    {
      nombre: "Thomas Muller",
      equipo: "Bayern Munich",
      liga: "Bundesliga",
      posicion: "Mediocampista",
      golesMarcados: 15,
      partidosJugados: 25,
      fechaNacimiento: new Date("1989-09-13"),
      nacionalidad: "Alemania",
      esInternacional: true,
      estadisticas: {
        asistencias: 20,
        faltasSufridas: 20,
        tarjetas: [
          {
            tipo: "amarilla",
            cantidad: 3,
          },
          {
            tipo: "roja",
            cantidad: 1,
          },
        ],
        minutosJugados: 1500,
      },
    },
  ];
/**
 * Ejercicio 1.
 * Crea una funcion que muestre por consola los nombres de los jugadores con posicion 'Mediocampista'
 * @param NO
 * @return NO
 */
function e1(){
    for(jugador in jugadores){
        if(jugadores[jugador]['posicion'] === 'Mediocampista'){
            console.log(jugadores[jugador]['nombre']);
        }
    }
}

/**
 * Ejercicio 2.
 * Crea una función que muestre por consola los nombres de lo jugadores que hayan jugado 30 o mas partidos.
 * @return NO
 */
function e2(){
    for(jugador in jugadores){
        if(jugadores[jugador]['partidosJugados'] >= 30){
            console.log(jugadores[jugador]['nombre']);
        }
    }
}

/**
 * Ejercicio 3.
 * Crea una funcion que muestra (por consola) los nombres de los jugadores que son internacionales.
 * @return NO
 */
function e3(){
    for(jugador in jugadores){
        if(jugadores[jugador]['esInternacional']){
            console.log(jugadores[jugador]['nombre']);
        }
    }
}
// e3();

/**
 * Ejercicio 4.
 * Crea una funcion que retorne los nombres de los jugadores que juegan en la 'Premier League'
 * @return Array nombres
 */
function e4(){
    let nombres = [];
    for(jugador in jugadores){
        if(jugadores[jugador]['liga'] === 'Premier League'){
            nombres.push(jugadores[jugador]['nombre']);
        }
    }
    return nombres;
}
// console.log(e4());

/**
 * Ejercicio 5.
 * Crea una funcion que retorne todos los delanteros que juegan en la 'Ligue 1'
 * @return Array nombres
 */
function e5(){
    let nombres = [];
    for(jugador in jugadores){
        if(jugadores[jugador]['liga'] === 'Ligue 1' && jugadores[jugador]['posicion'] === 'Delantero'){
            nombres.push(jugadores[jugador]['nombre']);
        }
    }
    return nombres;
}
// console.log(e5());


/**
 * Ejercicio 6.
 * Crea una funcion que muestre por pantalla los nombres de los jugadores junto a las siguiente estadisticas: 'asistencias', 'faltasSufridas', 'minutosJugados'.
 * @return NO
 */
function e6(){
    for(jugador in jugadores){
        console.log('Nombre: ' + jugadores[jugador]['nombre']);
        console.log('Asistencias: '+ jugadores[jugador]['estadisticas']['asistencias']);
        console.log('Faltas sufridas: '+ jugadores[jugador]['estadisticas']['faltasSufridas']);
        console.log('Minutos jugados: '+ jugadores[jugador]['estadisticas']['minutosJugados']);
    }
}
// e6();

/**
 * Opcion B con return
 * @return Array nombres
 */
function e6b(){
    let nombres = [];
    for(jugador in jugadores){
        nombres.push('Nombre: ' + jugadores[jugador]['nombre'] + ' Asistencias: '+ jugadores[jugador]['estadisticas']['asistencias'] +
        ' Faltas sufridas: '+ jugadores[jugador]['estadisticas']['faltasSufridas'] + ' Minutos jugados: '+ jugadores[jugador]['estadisticas']['minutosJugados']);
    }
    return nombres;
}
// console.log(e6b());

/**
 * Ejercicio 7.
 * Crea una funcion que retorne los nombres de los jugadores que hayan recibido alguna tarjeta roja
 * @return 
 */
function e7(){
    let nombres = [];
    for(jugador in jugadores){
        for(tarjeta in jugadores[jugador]['estadisticas']['tarjetas']){
            if(jugadores[jugador]['estadisticas']['tarjetas'][tarjeta]['tipo'] == 'roja' 
            && jugadores[jugador]['estadisticas']['tarjetas'][tarjeta]['cantidad'] > 0){
                /**
                 * tarjeta contiene los valores 0 y 1 correspondientes a los dos objetos
                 * [0] ---> objeto de tarjetas amarillas
                 * [1] ---> objeto de tarjetas rojas
                 */
                nombres.push(jugadores[jugador]['nombre']);
            }
        }
    }
    return nombres;
}
console.log(e7());

/**
 * Ejercicio 8.
 * Crea una funcion que devuelva los jugadores que son internacionales y que han jugado mas de 5 partidos 
 * @return Array nombres
 */
function e8(){
    let nombres = [];
    for(jugador in jugadores){
        if(jugadores[jugador]['esInternacional'] && jugadores[jugador]['partidosJugados'] > 5){
            nombres.push(jugadores[jugador]['nombre']);
        }
    }
    return nombres;
}
console.log(e8());