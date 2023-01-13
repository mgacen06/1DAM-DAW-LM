<?php
    /**
     * @description - Funcion que recoge todos los valores de una tabla
     * @param $tabla - String que contiene el nombre de la tabla
     * @return array() - Todos los elementos de la tabla
     */
    function getAll($tabla){
        $conexion = new mysqli('localhost', 'root', '', 'nba');
        $sql = "SELECT * FROM " . $tabla;
        return $conexion->query($sql);
    }

    /**
     * @description - Funcion que recoge un valor de una tabla
     * @param $tabla - String que conteiene el nombre de la tabla
     * @param $id - Valor que contiene el id elegido.
     * @return array() - Elemento filtrado por $id
     */
    function getElementById($tabla, $id){
        $conexion = new mysqli('localhost', 'root', '', 'nba');
        $sql = "SELECT * FROM " .$tabla ." WHERE id = " . $id;
        return $conexion->query($sql);
    }

    /**
     * @description - Funcion que imprime una card por cada iteración
     * @param $array - Array con elementos a imprimir
     */
    function imprimeCards($array){
        while ($fila = $array->fetch_assoc()) {
            echo '<div class="card">';
            echo    $fila['nombre'];
            echo '</div>';
        }
    }

    // $sql = "SELECT * FROM equipos WHERE id = 8";
    // $sql = "SELECT * FROM " .$tabla ." WHERE id = " . $id;

    // Muestra todos los equipos
    // var_dump(getAll('equipos'));

    // Muestra el equipo con id 8
    // var_dump(getElementById('equipos', '8'));
    
    // Muestra el jugador con id 150
    // var_dump(getElementById('jugadores', '150'));

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
            margin: 0;
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
           imprimeCards(getAll('equipos'));
        ?>
    </main>
</body>
</html>