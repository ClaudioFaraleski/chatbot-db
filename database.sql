DROP DATABASE IF EXISTS chatbot_db;
CREATE DATABASE chatbot_db;
USE chatbot_db;

CREATE TABLE opcoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(10) NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    mensagem TEXT NOT NULL
);

CREATE TABLE historico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL,
    opcao_escolhida VARCHAR(10) NOT NULL,
    ip VARCHAR(45) DEFAULT NULL,
    status VARCHAR(20) DEFAULT 'pendente',
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Inserir dados iniciais
INSERT INTO opcoes (codigo, descricao, mensagem) VALUES
('1', 'Problemas técnicos', 'Como posso ajudar com seu problema técnico?'),
('2', 'Faturamento', 'Como posso ajudar com faturamento?'),
('3', 'Reclamações', 'Por favor, descreva sua reclamação');

-- Inserir mais dados de exemplo com subopções
INSERT INTO opcoes (codigo, descricao, mensagem) VALUES
('1.1', 'Internet Lenta', 'Para melhorar sua conexão, tente: 1. Reiniciar o modem 2. Verificar cabos 3. Fazer teste de velocidade'),
('1.2', 'Sem Conexão', 'Vamos tentar resolver: 1. Verifique se todos os cabos estão conectados 2. Reinicie seu modem'),
('2.1', 'Segunda Via', 'Você pode acessar a segunda via em nosso site ou app'),
('2.2', 'Pagamento', 'Aceitamos cartão, boleto e pix. Qual você prefere?'),
('3.1', 'Produto', 'Descreva o problema com o produto'),
('3.2', 'Serviço', 'Conte-nos o que aconteceu com o serviço');
