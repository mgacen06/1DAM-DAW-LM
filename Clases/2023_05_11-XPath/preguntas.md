Realiza sentencias en XPath que devuelvan los siguientes valores.

1.  Devuelve el contenido (texto) del nombre de todos los jugadores.
/plantilla/jugador/name/text()

2. Devuelve los jugadores (etiquetas) de aquellos que tienen algún mundial.
/plantilla/jugador[numMundiales>0]

3.  Devuelve los jugadores (etiqueta) que tienen como atributo 'pais', italia.
/plantilla/jugador[dni[@pais="it"]]

4.  Devuelve el nombre (texto) de los jugadores que tienen como atributo el pais de italia.
/plantilla/jugador[dni[@pais="it"]]/name/text()

5.  Devuelve el nombre (texto) de los jugadores que tienen como atributo el pais de italia y que tienen algún mundial.

/plantilla/jugador[dni[@pais="it"]][numMundiales>0]/name/text()

/plantilla/jugador[dni[@pais="it"] and numMundiales>0]/name/text()
NOTA: "AND" no es funcional pero "and" si es funcional.

6.  Devuelve el nombre y apellido1 (texto) de todos los jugadores
/plantilla/jugador/name/text() | /plantilla/jugador/apellido1/text()
