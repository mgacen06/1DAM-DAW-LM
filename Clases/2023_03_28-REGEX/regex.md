Una expresion regular es una secuencia de caracteres que forman un patron de busqueda.

Sirven para el trabajo y procesamiento de texto.

Hay distintos elementos a tener en cuenta.

Coincidencias Basicas
    .       - Cualquier Caracter, excepto nueva linea
    \d      - Cualquier Digitos (0-9)
    \D      - No es un Digito (0-9)
    \w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
    \W      - No es un Caracter de Palabra.
    \s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
    \S      - No es un Espacio, Tab o nueva linea.

Limites
    \b      - Limite de Palabra
    \B      - No es un Limite de Palabra
    ^       - Inicio de una cadena de texto
    $       - Final de una cadena de texto

Cuantificadores:
    *       - 0 o Más
    +       - 1 o Más
    ?       - 0 o Uno
    {3}     - Numero Exacto
    {3,4}   - Rango de Numeros (Minimo, Maximo)

Conjuntos de Caracteres
    []      - Caracteres dentro de los brackets
    [^ ]    - Caracteres que NO ESTAN dentro de los brackets

Grupos
    ( )     - Grupo
    |       - Uno u otro

Otros elementos
    (?=.*ALGO) - ALGO sea un elemento que este contenido en algun punto de la cadena a validar
