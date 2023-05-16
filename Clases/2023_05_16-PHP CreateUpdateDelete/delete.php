<?php 

echo 'ESTAMOS EN EL DELETE.PHP';
echo 'Hemos recogido el valor del id : '. $_GET['id'];  
// $_GET['nombre'] --> recoge el valor de la variable 'nombre' de la URL
// Ejemplo: http://localhost/php/delete.php?id=2

// 1. Recoger el id de la url. 
// 1.1 Ver si existe y en tal caso recogerlo.
$id = $_GET['id'];

// 2. Importar la clase Database.php
require_once('Database.php');

// 3. Invocar la funcion delete de la clase Database.php
Database::delete($id);

// 4. Retornar al index.php para ver cambios
header('Location: index.php');
?>