<?php
/**
 * Este fichero contiene el formulario para insertar un nuevo coche
 */

// 1. Recoger el id del coche que vamos a actualizar 

if(isset($_GET['id'])){
    $id = $_GET['id'];

     //2.  Importar la clase Database para poder usar sus funciones
     require_once ('Database.php');

     // Realizar un nuevo objeto de la clase Database para usar la funcion getById
     $database = new Database();

     // 4. Llamar a la funcion getById para recoger los elementos del coche con esa ID
    $coche = $database->getById($id); // Retorna los datos del coche correspodiente
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
    <h1>ESTAMOS EN EL EDIT.PHP</h1>
    <form action="update.php" method="POST">
        <input type="hidden" value="<?php echo $coche['id']?>" name="id">     
        <input type="text" value="<?php echo $coche['marca']?>" name="marca" placeholder="Introduce la marca"> 
        <input type="text" value="<?php echo $coche['modelo']?>" name="modelo" placeholder="Introduce el modelo">
        <input type="text" value="<?php echo $coche['precio']?>" name="precio" placeholder="Introduce el precio">
        <button type="submit">Enviar</button>     
    </form>
</body>
</html>