CREATE DATABASE dindin;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL
);

CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    descricao TEXT
);

CREATE TABLE transacoes (
    id SERIAL PRIMARY KEY,
    descricao TEXT,
    valor INTEGER,
    data TIMESTAMP DEFAULT NOW(),
    categoria_id INTEGER REFERENCES categorias(id),
    usuario_id INTEGER REFERENCES usuarios(id),
    tipo TEXT
);

INSERT INTO categorias (descricao)
VALUES ('Alimentação'), 
('Assinaturas e Serviços'), 
('Casa'), ('Mercado'), 
('Cuidados Pessoais'), 
('Educação'), ('Família'), 
('Lazer'), ('Pets'), ('Presentes'), 
('Roupas'), ('Saúde'), ('Transporte'), 
('Salário'), ('Vendas'), 
('Outras receitas'), ('Outras despesas');