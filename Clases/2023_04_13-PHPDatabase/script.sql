CREATE DATABASE IF NOT EXISTS grupob;
USE grupob;

-- id, modelo, marca, precio
CREATE TABLE IF NOT EXISTS coches(
	id INT PRIMARY KEY AUTO_INCREMENT,
    modelo VARCHAR(40),
    marca VARCHAR(40),
    precio INT(10)
);

LOAD DATA INFILE 'coches.csv'
INTO TABLE coches
FIELDS TERMINATED BY ',' -- Delimitador de campos
LINES TERMINATED BY '\n' -- Delimitador de líneas
IGNORE 1 ROWS; -- Ignorar la primera fila (encabezado)

SELECT * FROM coches;
