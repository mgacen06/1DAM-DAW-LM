<?php

    // Importar la clase Database para poder usar sus funciones
    require_once ('Database.php');

    // Realizar un nuevo objeto de la clase Database para usar la funcion getAll
    $database = new Database();
    $resultados = $database->getAll('coches');
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
    <h1>ESTAMOS EN EL INDEX</h1>
    <a href="create.php">Crear coche</a>
    <table>
        <thead>
            <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Precio</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <?php
                foreach ($resultados as $row) {
                    echo '<tr>';
                    echo '<td>'.$row['marca'] . "</td>";
                    echo '<td>'.$row['modelo'] . "</td>";
                    echo '<td>'.$row['precio'] . "</td>";
                    echo '<td> 
                            <a href="edit.php?id='.$row['id'].'">Editar </a> 
                            <a href="delete.php?id='.$row['id'].'">Eliminar </a> 
                        </td>';
                    echo '</tr>';
                }
            ?>
        </tbody>
    </table>
</body>
</html>