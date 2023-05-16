<?php
    /**
     * OBJETIVO
     * 
     * 1. Recoger el id del elemento que hay que eliminar.
     * 2. Realizar la sentencia SQL que elimina un elemento con el id recogido.
     * 3. Devolver la vista al index
     */

     // 1. GET['id'] 
     if(isset( $_GET['id'])){
        $id = $_GET['id'];
        echo 'HEMOS RECOGIDO EL VALOR ' . $id;
   
        //2.  Importar la clase Database para poder usar sus funciones
       require_once ('Database.php');
   
       // Realizar un nuevo objeto de la clase Database para usar la funcion getAll
       $database = new Database();
       $database->delete('coches', $id);
   
       //3. Redireccionar al index
       header('Location: index.php');
     }else{
        echo 'Error 404';
     }
     
?>