<?php 
    $cabecera = ['id', 'marca', 'modelo'];
    $cuerpo = [
        [1, 'Ford', 'Fiesta'],
        [2, 'Toyota', 'Yaris'],
        [3, 'Renault', 'Twingo'],
        [4, 'Citroen', 'C4'],
        [5, 'Mini', 'Cooper'],
        [6, 'BMW', '320d']
    ];

    /**
     * 1. Relizar la consulta SELECT de todos los elementos
     */
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <h1>ESTAMOS EN EL INDEX DE COCHES</h1>
    <a href="create.php">Crear</a>
    <table>
        <thead>
            <?php
                // Aqui va el contenido de la fila con la cabecera (array $cabecera)
                echo '<tr>';
                for($i = 0; $i < count($cabecera); $i++){
                    echo '<th>' . $cabecera[$i] . '</th>';
                }
                echo '<th>Acciones</th>';
                echo '</tr>';
            ?>
        </thead>
        <tbody>
            <?php
                // Aqui va el contenido de las filas del cuerpo (array $cuerpo)
                for($i = 0; $i < count($cuerpo); $i++){
                    echo '<tr>';
                    for($j = 0; $j < count($cuerpo[$i]); $j++){
                        echo '<td>' . $cuerpo[$i][$j] . '</td>';
                    }  
                    // Ahora pongo los elementos o botones del resto del crud
                    echo '<td>';
                        echo '<a href="#"> Ver</a>';
                        echo '<a href="edit.php?id='. $cuerpo[$i][0] .'"> Editar</a>';
                        echo '<a href="delete.php?id='. $cuerpo[$i][0] .'"> Eliminar</a>';
                    echo '</td>';

                    echo '</tr>';
                }
            ?>
        </tbody>
    </table>
</body>
</html>