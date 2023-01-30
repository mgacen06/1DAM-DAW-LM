/**
 **************************************************
 ******************* CLASE DATE ******************* 
 ************************************************** 
 * 
 * 
 * La clase Date en JavaScript proporciona una manera de trabajar con fechas y horas en el lenguaje. 
 * 
 * Permite crear objetos de fecha y hora, obtener y establecer valores de fecha y hora individuales, y formatear fechas y horas en diferentes formatos.
 * 
 * Para crear un objeto de fecha y hora en JavaScript, se puede utilizar el constructor Date(). 
 * 
 * Puedes crear una nueva fecha con el constructor vacío, en cuyo caso se establece la fecha y hora actual, o puedes proporcionar argumentos para establecer una fecha específica.

getDate(): Devuelve el día del mes (1-31) de una fecha dada.
    Ejemplo:
    let fecha = new Date();
    let dia = fecha.getDate();
    console.log(dia); // imprime el día actual

getDay(): Devuelve el día de la semana (0-6) de una fecha dada.
    Ejemplo:
    let fecha = new Date();
    let diaSemana = fecha.getDay();
    console.log(diaSemana); // imprime el día de la semana actual

getFullYear(): Devuelve el año (4 dígitos) de una fecha dada.
    Ejemplo:
    let fecha = new Date();
    let anio = fecha.getFullYear();
    console.log(anio); // imprime el año actual

getMonth(): Devuelve el mes (0-11) de una fecha dada.
    Ejemplo:
    let fecha = new Date();
    let mes = fecha.getMonth();
    console.log(mes); // imprime el mes actual

getTime(): Devuelve la cantidad de milisegundos desde el 1 de enero de 1970 hasta una fecha dada.
    Ejemplo:
    let fecha = new Date();
    let tiempo = fecha.getTime();
    console.log(tiempo); // imprime la cantidad de milisegundos desde el 1 de enero de 1970 hasta la fecha actual

setDate(): Establece el día del mes de una fecha dada.
    Ejemplo:
    let fecha = new Date();
    fecha.setDate(15);
    console.log(fecha); // imprime la fecha con el día establecido en 15

setFullYear(): Establece el año de una fecha dada.
    Ejemplo:
    let fecha = new Date();
    fecha.setFullYear(2020);
    console.log(fecha); // imprime la fecha con el año establecido en 2020

setMonth(): Establece el mes de una fecha dada.
    Ejemplo:
    let fecha = new Date();
    fecha.setMonth(3);
    console.log(fecha); // imprime la fecha con el mes establecido en abril

setTime(): Establece la fecha en función de la cantidad de milisegundos desde el 1 de enero de 1970.
    Ejemplo:
    let fecha = new Date();
    fecha.setTime(1609459200000);
 * 
 * 
 */ 