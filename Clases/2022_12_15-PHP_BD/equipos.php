<?php

    /**
     * Funcion que retorna todos los equipos
     * @return array
     */
    function getEquipos(){
        /**
         * En este fichero podremos consultar todos los equipos de mi base de datos
        */

        /**
            * 1. Necesitamos configurar la conexion a la base de datos
            *     - Ubicacion de la base de datos:    'localhost'
            *     - Usuario de la base de datos:      'root'
            *     - Contraseña de mi usuario:         ''
            *     - Nombre de la base de datos:       'nba'
            *
            * 2. Necesitamos saber la query que se va a realizar
            *     - Query utilizada:                  'SELECT * FROM equipos;'
            *
            * 3. Realizo la query.
            *
            * 4. Recoger los resultados.
            *
            * 5. Utilizar los resultados.
        */

        /**
         * PASO 1.
         * Utilizo la clase mysqli() para configurar la conexion a la base de datos.
         * Para poder funcionar, mysqli necesita recibir como parametros la configuracion.
         * 
         * mysqli(UBICACION, USUARIO, CONTRASEÑA, BASE_DATOS)
         */
        $conexion = new mysqli('localhost', 'root', '', 'nba');

        /**
         * PASO 2.
         * Guardo en la variable $sql la query que voy a realizar
         */
        $sql = "SELECT * FROM equipos";

        /**
         * PASO 3. 
         * Realizar la query. Para ello utilizo el metodo query de PHP.
         * El metodo query recibe como parametro, la sentencia $sql que voy a realizar
         * 
         * query($sql);
         * 
         * PASO 4.
         * Guardo el retorno de la query en la variable $resultado
         */
        return $conexion->query($sql);
    }

    $resultado = getEquipos();

    function imprimeCards($cosas){
        while ($fila = $cosas->fetch_assoc()) {
            echo '<div class="card">';
            echo    $fila['nombre'];
            echo '</div>';
        }
    }
    

    //   var_dump($resultado);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            width: 100vw;
            height: 100vh;
        }
        main{
            background-color: beige;
            width: 100%;
            height: 100%;
            display:grid;
            grid-template-columns: repeat(6,auto);
            grid-template-rows: repeat(5,auto);
        }

        .card{
            margin: auto auto;
            background-color: white;
            height: 80%;
            width: 80%;

            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>
<body>
    <main>
        <?php
           imprimeCards($resultado);
        ?>
    </main>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Ciudad</th>
                <th>Conferencia</th>
            </tr>
        </thead>
        <tbody>
            <?php
                /**
                 * PASO 5.
                 * Realizo un bucle que recorre el $resultado.
                 * Cada iteracion es una fila de la query que se almacena en $fila
                 * Necesito que $fila esté en el formato que necesito para leerla en clave-valor
                 * fetch_assoc() transforma una fila en el formato clave-valor
                 */

                /**
                * $fila: variable interna que contiene cada iteracion del bucle while
                * En $fila se guarda cada iteracion en formato clave-valor.
                * Para almacenar el clave-valor utilizo un metodo llamado fetch_assoc() 
                */
                
                // while ($fila = $resultado->fetch_assoc()) {
                //     echo '<tr>';
                //     echo    '<td>'.$fila['id'].'</td>';
                //     echo    '<td>'.$fila['nombre'].'</td>';
                //     echo    '<td>'.$fila['ciudad'].'</td>';
                //     echo    '<td>'.$fila['conferencia'].'</td>';
                //     echo '</tr>';
                // }
            ?>
        </tbody>
    </table>
  <?php

  ?>
</body>
</html>