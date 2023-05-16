<?php
    // 1. Recoger todos los elementos del formulario
    $datos = [$_POST['marca'], $_POST['modelo'], $_POST['precio']];
    // 2. Importar la clase Database.php
    require_once('Database.php');

    // 3. Invocar la funcion save de Database llevandole los datos
    Database::save($datos);

    // 4. Retornar al index.php
    header('Location: index.php');
?>