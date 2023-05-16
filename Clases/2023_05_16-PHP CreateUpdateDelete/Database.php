<?php

    class Database {

        /**
         * Funcion que realiza la configuracion de la 
         * conexion a la base de datos
         */
        public function conectar(){
            $driver = "mysql";      // Que tipo de base de datos voy a utilizar.
            $host = 'localhost';    // 127.0.0.1
            $port = '3307';
            $bd = 'abr13';
            $user = 'root';         // Esto tiene que cambiar, se crea uno nuevo con permisos.
            $password =  "";        // Esto tambien cambia

            $dsn = "$driver:dbname=$bd;host=$host;port=$port";

            try {
                $gbd = new PDO($dsn, $user, $password);
                echo 'Conectado correctamente';
            } catch (PDOException $e) {
                echo 'Falló la conexión: ' . $e->getMessage();
            }

            return $gbd;
        }

        /**
         * Funcion que recoge todos los datos de una tabla
         * En este caso de la tabla coches.
         */
        public function getAll($tabla){
            $sql = "SELECT * FROM $tabla";
            $resultados = self::conectar()->query($sql);
            return $resultados;
        }

        /**
         * Funcion que recibe un $id y borra el elemento
         * que tiene dicho $id
         */
        public function delete($tabla, $id){
            $sql = "DELETE FROM $tabla WHERE id = $id";
            self::conectar()->query($sql);
        }

        /**
         * Funcion que inserta una nueva fila en la BD de coches
         */
        public function save($valores){
            /**
             * $valores [
             *  0 --> marca,
             *  1 --> modelo,
             *  2 --> precio
             * ]
             */
            $sql = "INSERT INTO coches (marca, modelo, precio) VALUES ('$valores[0]', '$valores[1]', $valores[2])";
            // echo $sql;
            // exit();
            self::conectar()->exec($sql);
        }

        /**
         * Funcion que filtra un coche por una id que recibe por parametro
         */
        public function getById($id){
            $sql = "SELECT * FROM coches WHERE id = $id";
            $resultados = self::conectar()->query($sql);
            return $resultados->fetch(PDO::FETCH_ASSOC);
        }

         /**
         * Funcion que inserta una nueva fila en la BD de coches
         */
        public function update($valores){
            /**
             * $valores [
             *  0 --> marca,
             *  1 --> modelo,
             *  2 --> precio
             * ]
             */
            $sql = "UPDATE coches SET marca = '$valores[1]', modelo = '$valores[2]', precio = $valores[3] WHERE id = $valores[0]";
            // echo $sql;
            // exit();
            self::conectar()->exec($sql);
        }
    }
?>