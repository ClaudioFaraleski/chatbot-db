const API_URL = 'http://localhost:3001';
const usernameInput = document.getElementById('username');
const chatContainer = document.getElementById('chat');
const optionsContainer = document.getElementById('options');

async function loadOptions() {
    try {
        const response = await fetch(`${API_URL}/opcoes`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const options = await response.json();
        
        if (!Array.isArray(options)) {
            throw new Error('Formato de resposta inválido');
        }

        optionsContainer.innerHTML = '';
        options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = `${option.codigo} - ${option.descricao}`;
            button.onclick = () => selectOption(option.codigo);
            optionsContainer.appendChild(button);
        });
    } catch (error) {
        console.error('Erro ao carregar opções:', error);
        addMessage('bot', 'Erro ao carregar opções. Por favor, recarregue a página.');
    }
}

// Selecionar uma opção
function selectOption(opcao) {
    const username = usernameInput.value.trim();
    
    if (!username) {
        alert('Por favor, digite seu nome antes de selecionar uma opção.');
        return;
    }
    
    addMessage('user', `Opção selecionada: ${opcao}`);
    
    fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            usuario: username,
            opcao: opcao
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na resposta do servidor');
        }
        return response.json();
    })
    .then(data => {
        if (data.error) {
            addMessage('bot', `Erro: ${data.error}`);
        } else {
            addMessage('bot', data.mensagem);
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        addMessage('bot', 'Erro ao processar sua solicitação. Tente novamente.');
    });
}

// Adicionar mensagem ao chat
function addMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender === 'bot' ? 'bot-message' : 'user-message');
    messageDiv.textContent = text;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Carregar opções quando a página carregar
window.onload = loadOptions;