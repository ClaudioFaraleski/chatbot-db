const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456', // configure sua senha aqui
    database: 'chatbot_db',
    waitForConnections: true,
    connectionLimit: 10
});

// Rota para buscar opções
app.get('/opcoes', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT codigo, descricao, mensagem FROM opcoes');
        console.log('Opções encontradas:', rows);
        
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Nenhuma opção encontrada' });
        }
        
        res.json(rows);
    } catch (error) {
        console.error('Erro ao buscar opções:', error);
        res.status(500).json({ error: 'Erro interno ao buscar opções' });
    }
});

// Rota para processar mensagem
app.post('/chat', async (req, res) => {
    const { usuario, opcao } = req.body;
    
    try {
        // Registrar interação no histórico apenas com campos existentes
        await pool.query(
            'INSERT INTO historico (usuario, opcao_escolhida) VALUES (?, ?)',
            [usuario, opcao]
        );

        // Buscar resposta apropriada
        const [resposta] = await pool.query(
            'SELECT mensagem FROM opcoes WHERE codigo = ?',
            [opcao]
        );

        if (resposta.length > 0) {
            res.json({ 
                sucesso: true,
                mensagem: resposta[0].mensagem 
            });
        } else {
            res.json({ 
                sucesso: false,
                mensagem: 'Opção não encontrada.' 
            });
        }
    } catch (error) {
        console.error('Erro no chat:', error);
        res.status(500).json({ 
            sucesso: false,
            error: 'Erro ao processar mensagem' 
        });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});