<?php 
    // Comentario simple
    /**
     * COMENTARIO MULTILINEA
     */

     /**
      * VARIABLES
      * Las variables en PHP se crean con el simbolo del dolar y un nombre
      */ 
      $cosa = "algo";
      $numero = 3;
      $nombres = ['Miguel', 'Jose', 'Ernesto', 'Ana', 'Lucia'];

      /**
       * PARA PODER MOSTRAR DATOS UTILIZO echo
       * echo 'palabra';
       * echo 5;
       * echo $nombres[0];
       */
      
       /**
        * CONDICIONALES EN PHP
        * if(condicion){
        *     // Contenido si true
        * }else{
        *     // Contenido si false
        * }
        */
        if($cosa == 'sergio'){
            // ok
        }else{
            // no es igual a sergio
        }

        /**
         * BUCLES EN PHP
         * for($i = 0; $i < 5; $i++){
         *  // Contenido
         * }
         */

         /**
          * CONCATENACION
          * Para concatenar utilizamos el punto
          */

          /**
           * LONGITUD O TAMAÑO DE UN ARRAY.
           * Para saber cual es el tamaño o longitud de un array utilizamos count(elemento)
           */
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>HOLA</h1>
    <h2>NOMBRES DE LOS MAS INTELIGENTES DE LA CLASE</h2>
    <ul>
        <!-- Mostrar un <li> con el contenido de la variable $cosa -->
        <?php
            echo '<li>' . $cosa . '</li>';
        ?>
        <!-- Mostrar tantos <li> como elementos tiene mi array -->
        <?php
            for($i = 0; $i < count($nombres); $i++){
                echo '<li>' . $nombres[$i] . '</li>';
            }
        ?>
    </ul>
    <a href="coches/index.php">COCHES</a>
    <a href="usuarios/index.php">USUARIOS</a>
</body>
</html>