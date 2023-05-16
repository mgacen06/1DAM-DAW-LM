<?php
/**
 * Fichero que gestiona los datos del formulario para actualizar un coche existente
 */

 // 1. Recoger elementos del formulario
 $valores = [$_POST['id'], $_POST['marca'], $_POST['modelo'], $_POST['precio']];

  // 2. Importar la clase Database para poder usar sus funciones
  require_once ('Database.php');
   
  // 3. Realizar un nuevo objeto de la clase Database para usar la funcion update
  $database = new Database();

  // 4. Realizamos una llamada a la funcion update llevando como parametro el array de valores
  $database->update($valores);

  // 5. Redireccionar al index
  header('Location: index.php');
?>