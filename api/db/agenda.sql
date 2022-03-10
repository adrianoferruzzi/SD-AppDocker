CREATE DATABASE IF NOT EXISTS 
    agenda;
USE agenda;

CREATE TABLE IF NOT EXISTS pessoas (
    id INT(11) AUTO_INCREMENT, 
    nome VARCHAR(255),
    telefone VARCHAR(15),
    PRIMARY KEY (id) 
);

CREATE USER 'dbuser'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
GRANT ALL PRIVILEGES on agenda.* to 'dbuser'@'%';
flush privileges;

INSERT INTO pessoas VALUE(0, 'Adriano', '19988887777');
INSERT INTO pessoas VALUE(0, 'Andressa', '11966665555');
INSERT INTO pessoas VALUE(0, 'Luciano', '11944443333');
SELECT * FROM pessoas;
