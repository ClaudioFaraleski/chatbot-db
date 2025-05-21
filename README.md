# Sistema de Chatbot com Banco de Dados

## 📝 Resumo do Projeto

Este é um sistema de chatbot de suporte técnico desenvolvido com Node.js e MySQL. O projeto oferece uma interface moderna e responsiva para atendimento automatizado, com recursos como:

- Atendimento 24/7 automatizado
- Interface profissional e intuitiva
- Sistema de menu multinível para navegação
- Histórico completo de atendimentos
- Backend robusto com Node.js e Express
- Banco de dados MySQL para persistência
- API RESTful para comunicação
- Design responsivo para todos dispositivos

[Demonstração ao vivo](https://chatboottecnico.netlify.app/public/index.html)

![Node.js](https://img.shields.io/badge/Node.js-v18.x-green)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)

Sistema de atendimento automatizado com interface de chat e persistência de dados.

## 📋 Funcionalidades

- Interface de chat responsiva e profissional
- Sistema de menus dinâmicos
- Registro de histórico de atendimentos
- Suporte a múltiplos tipos de atendimento
- Persistência de dados em MySQL
- API RESTful

## 🚀 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/chatbot-db.git

# Entre no diretório
cd chatbot-db

# Instale as dependências
npm install

# Configure o banco de dados
mysql -u root -p < database.sql

# Inicie o servidor
npm start
```

## ⚙️ Configuração

1. Configure as credenciais do banco de dados em `server.js`:
```javascript
const pool = mysql.createPool({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'chatbot_db'
});
```

## 🗄️ Estrutura do Banco de Dados

### Tabela `opcoes`
- `id`: INT (PK, AUTO_INCREMENT)
- `codigo`: VARCHAR(10)
- `descricao`: VARCHAR(100)
- `mensagem`: TEXT

### Tabela `historico`
- `id`: INT (PK, AUTO_INCREMENT)
- `usuario`: VARCHAR(50)
- `opcao_escolhida`: VARCHAR(10)
- `data_hora`: DATETIME

## 🔧 Tecnologias Utilizadas

- Node.js
- Express
- MySQL
- HTML5
- CSS3
- JavaScript

## 📱 Interface

- Design responsivo
- Suporte a dispositivos móveis
- Interface intuitiva
- Feedback visual das interações
- Indicadores de status

## 🔒 Segurança

- Validação de entradas
- Sanitização de dados
- Proteção contra SQL Injection
- Tratamento de erros

## 📊 Endpoints da API

### GET /opcoes
Retorna todas as opções disponíveis no menu.

### POST /chat
Processa mensagens e retorna respostas.

**Corpo da requisição:**
```json
{
    "usuario": "string",
    "opcao": "string"
}
```

## 🌐 Demonstração

Acesse o projeto online: [Chatbot Técnico](https://chatboottecnico.netlify.app/public/index.html)

![Preview do Chatbot](preview.png)

## 👥 Contribuição

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

For By Claudio Faraleski Jr

## 📞 Suporte

Para suporte, envie um email para suporte@seudominio.com ou acesse nossa [página de demonstração](https://chatboottecnico.netlify.app/public/index.html).
