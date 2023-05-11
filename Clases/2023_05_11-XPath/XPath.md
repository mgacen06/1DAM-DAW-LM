Recoger texto usamos text() dentro de la etiqueta correspondiente.

Para evaluar contenido usamos:
    - [nombreetiqueta]
    - [@nombreatributo]

Operadores
=
>
<
>=
<=

Si necesitamos evaluar contenido de varias cosas sobre una misma etiqueta, todo va dentro de corchetes, esdecir, colocamos las condiciones seguidas
etiqueta[eval1] [eval2] [eval3] ...
Ejemplo:
jugador[dni[@pais="it"]][numMundiales>0]/name/text()

Concatenar dos valores de dos etiquetas distintas o dos expresiones distintas, colocamos el simbolo | entre ambas expresiones de tal manera que evalua las dos y devuelve las dos.
etiqueta.../text() | etiqueta.../text()
Ejemplo:
/plantilla/jugador/name/text() | /plantilla/jugador/apellido1/text()


REFERENCIA: https://www.mclibre.org/consultar/xml/lecciones/xml-xpath.html