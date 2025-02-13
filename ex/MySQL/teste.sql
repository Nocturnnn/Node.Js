--aqui entra no mysql pelo cmd
mysql -h localhost -u root -p

--ver tabela
SHOW DATABASES;

--criar tabela
CREATE DATABASE sistemaDeCadastro;

--acessar tabela
USE sistemadecadastro

--ver tabela
SHOW TABLES;

--ver colunas
DESCRIBE usuarios;

CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    'MATEUS',
    'email@teste3.com',
    20
);

--ver todos os dados
SELECT * FROM usuarios;

--pesquisa especifica
SELECT * FROM usuarios WHERE idade = 20;

--deletar tabela
DELETE FROM usuarios;

--DELETAR dados
DELETE FROM usuarios WHERE  nome =  'VICTOR';

--ATUALIZAR dados
UPDATE usuarios SET nome = 'Pedrinho Bala Fina' WHERE nome = 'MATEUS';