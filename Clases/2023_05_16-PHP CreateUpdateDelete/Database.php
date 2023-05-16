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

        public static function getAll(){
            /**
             * 1. Conecta
             * 2. Realizo la query
             */
            $sql = "SELECT * FROM coches";
            $resultado = self::conectar()->query($sql);
            return $resultado;
        }

        /**
         * Funcion que elimina un coche por id
         */
        public static function delete($id){
            $sql = "DELETE FROM coches WHERE id = $id";
            self::conectar()->exec($sql);
        }

        /**
         * Funcion que inserta un coche nuevo en la BD
         * Los elementos del coche vienen en el parametro $datos
         * $datos = [marca, modelo, precio]
         */
        public static function save($datos){
            $sql = "INSERT INTO coches (marca, modelo, precio) VALUES ('$datos[0]', '$datos[1]', $datos[2])";
            self::conectar()->exec($sql);
        }

        /**
         * Funcion que recibe un id por parametro y retorna su coche asociado
         */
        public static function findbyId($id){
            $sql = "SELECT * FROM coches WHERE id = $id";
            $coche = self::conectar()->query($sql);
            return $coche->fetch(PDO::FETCH_ASSOC);
        }

        /**
         * Funcion que acutaliza los datos de un coche determinado
         * $datos = [id, marca, modelo, precio];
         */
        public static function update($datos){
            $sql = "UPDATE coches SET marca = '$datos[1]', modelo = '$datos[2]', 
            precio = $datos[3] WHERE id = $datos[0]";
            self::conectar()->exec($sql);
        }
    }

?>