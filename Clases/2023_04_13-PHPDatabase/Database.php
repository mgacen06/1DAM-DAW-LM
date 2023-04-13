<?php

/**
 * Clase para realizar la conexion a la base de datos.
 * 
 * Utilizamos la clase PDO.
 * 
 * Importante tener en cuenta los parametros de configuracion:
 * -    $driver: el tipo de base de datos. En nuestro caso MySQL.
 * -    $host: la ubicacion de mi base de datos. En nuestro caso localhost ó 127.0.0.1
 * -    $port: (opcional) el puerto de mi base de datos. En nuestro caso 3306.
 * -    $user: usuario con el que me voy a conectar. En nuestro sera un usuario normal.
 * -    $password: contraseña con la que me voy a conectar. ¿?
 * -    $db: la base de datos a la que me voy a conectar.
 * 
 * https://www.php.net/manual/es/book.pdo.php
 * 
 * $dsn = '$driver:dbname=$db;host=$host;port=$port';
 * 
 * try {
 *     $gbd = new PDO($dsn, $user, $password);
 * } catch (PDOException $e) {
 *     echo 'Falló la conexión: ' . $e->getMessage();
 * }
 */
    $driver = 'mysql';
    $host='127.0.0.1';
    $port = '3307';
    $user='root';
    $password = '';
    $db = 'grupob';
    
    $dsn = "$driver:dbname=$db;host=$host;port=$port";
    
    try {
        // La variable $gbd tiene toda la configuracion de la conexion
        $gbd = new PDO($dsn, $user, $password);
        echo 'Conectado correctamente';
    } catch (PDOException $e) {
        echo 'Falló la conexión: ' . $e->getMessage();
    }

    /**
     * ¿Y como hago una query?
     * 
     * SELECT
     * Para hacer select necesito consultar en el siguiente sitio:
     * PDO::query — Ejecuta una sentencia SQL, devolviendo un conjunto de resultados como un objeto PDOStatement.
     * 
     * $sql = "SELECT * FROM coches";
     * $gbd->query($sql);
     */

    $sql = "SELECT * FROM coches";
    // var_dump muestra algo por pantalla 

    /**
     * Se realiza la sentencia $sql y me devuelve una coleccion de datos con los resultados 
     */
    $resultado = $gbd->query($sql);

    foreach ($resultado as $row) {
        echo $row['id'] . "<br>";
        echo $row['marca'] . "<br>";
        echo $row['modelo'] . "<br>";
        echo $row['precio'] . "<br><br>";
    }

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
               
            ?>
        </thead>
        <tbody>
            <?php

            ?>
        </tbody>
    </table>
</body>
</html>
