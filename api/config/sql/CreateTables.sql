-- criacao da tabelas do banco de dados

DROP TABLE IF EXISTS cliente;
DROP TABLE IF EXISTS pedido;
DROP TABLE IF EXISTS produto;
DROP TABLE IF EXISTS recebe;
DROP TABLE IF EXISTS categorias;
DROP TABLE IF EXISTS armazena;

-- tabela de clientes
CREATE TABLE cliente (
id_cli INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nome VARCHAR(255) NOT NULL,
endereco VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
telefone VARCHAR(20) NOT NULL,
data_nascento DATE NOT NULL);

-- tabela de pedidos
CREATE TABLE pedido (
id_pedido INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
num_pedido INT NOT NULL,
quantidade INT NOT NULL,
id_cli INT NOT NULL);

-- tabela de produtos
CREATE TABLE produto (
id_produto INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nome VARCHAR(255) NOT NULL,
descrição VARCHAR(255) NOT NULL,
quantidade INT NOT NULL);

-- tabela para receber prdutos
CREATE TABLE recebe (
id_pedido INT NOT NULL,
id_produto INT NOT NULL,
quantidade INT NOT NULL);

-- tabela categorias
CREATE TABLE categorias (
id_cat INT PRIMARY KEY NOT NULL,
nome VARCHAR(255) NOT NULL,
quantidade  INT NOT NULL);


CREATE TABLE armazena (
id_produto INT NOT NULL,
id_categoria INT NOT NULL,
quantidade  INT NOT NULL);


ALTER TABLE pedido ADD CONSTRAINT pedido_id_cli_cliente_id_cli FOREIGN KEY (id_cli) REFERENCES cliente(id_cli);
ALTER TABLE recebe ADD CONSTRAINT recebe_id_pedido_pedido_id_pedido FOREIGN KEY (id_pedido) REFERENCES pedido(id_pedido);
ALTER TABLE recebe ADD CONSTRAINT recebe_id_produto_produto_id_produto FOREIGN KEY (id_produto) REFERENCES produto(id_produto);
ALTER TABLE armazena ADD CONSTRAINT armazena_id_produto_produto_id_produto FOREIGN KEY (id_produto) REFERENCES produto(id_produto);
ALTER TABLE armazena ADD CONSTRAINT armazena_id_categoria_categorias_id_cat FOREIGN KEY (id_categoria) REFERENCES categorias(id_cat);
