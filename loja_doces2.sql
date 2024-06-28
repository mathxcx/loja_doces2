CREATE DATABASE loja_doces2;

USE loja_doces2;

CREATE TABLE categoria (
id_categoria INT PRIMARY KEY AUTO_INCREMENT,
nome_categoria VARCHAR(45) NOT NULL
);

INSERT INTO categoria(nome_categoria) VALUES
("Bolos"),("Tortas"),("Doces Finos"), ("Doces Tradicionais");

SELECT * FROM categoria;

CREATE TABLE doces(
id_doce INT PRIMARY KEY AUTO_INCREMENT,
nome_doce VARCHAR(45) NOT NULL,
id_categoria INT NOT NULL,
FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
);

INSERT INTO doces(id_categoria,nome_doce) VALUES
(1, "Red Velvet"),
(1, "Bolo de Laranja"),
(2, "Torta de Maçã");

SELECT * FROM doces;