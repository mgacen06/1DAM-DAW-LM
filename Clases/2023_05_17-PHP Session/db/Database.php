<?php

    class Database{

        /**
         * SE ENCARGA DE LA CONEXION
         */
        public static function conectar(){
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
            return $gbd;
        }

        /**
         * Funcion que realiza el login de usuario
         * Llamada a la base de datos para comprobar si existe o no el usuario
         */
        public static function login($email, $password){
            // 1. Conectar a la BD

            // 2. Realizar consulta con el email y password recibido
            $sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
            
            // 3. Si es correcto, devuelvo los datos del usuario
            $user = self::conectar()->query($sql);

            if($user != null){
                return $user->fetch(PDO::FETCH_ASSOC);
            }
            else{
                // 4. Si no es correcto, devuelvo null
                return null;
            }
        }
      }
?>