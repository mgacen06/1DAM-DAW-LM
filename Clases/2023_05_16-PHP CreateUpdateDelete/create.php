<?php
/**
 * Este fichero contiene el formulario para insertar un nuevo coche
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
    <h1>ESTAMOS EN EL CREATE.PHP</h1>
    <form action="save.php" method="POST">
        <input type="text" name="marca" placeholder="Introduce la marca"> 
        <input type="text" name="modelo" placeholder="Introduce el modelo">
        <input type="text" name="precio" placeholder="Introduce el precio">
        <button type="submit">Enviar</button>     
    </form>
</body>
</html>