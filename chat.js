const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
/*generico*/
const perguntas = [
    "Qual é o objetivo deste curso?",
    "Quais são os pré-requisitos para participar do curso?",
    "Quanto tempo dura o curso?",
    "Quais tópicos são cobertos no curso?",
    "Quem é o instrutor do curso?",
    "Existe certificado após a conclusão do curso?",
    "Como posso me inscrever no curso?"
];
/*generico*/
const respostas = [
    "O objetivo deste curso é fornecer aos alunos uma compreensão abrangente dos fundamentos da programação.",
    "Os pré-requisitos incluem conhecimento básico de linguagens de programação e familiaridade com conceitos de lógica de programação.",
    "O curso tem a duração de 8 semanas, com aulas realizadas duas vezes por semana.",
    "O curso abrange tópicos como introdução à linguagem JavaScript, manipulação do DOM e interações com APIs.",
    "O instrutor do curso é João Silva, um desenvolvedor experiente com mais de 10 anos de experiência na indústria.",
    "Sim, os alunos que completarem o curso com sucesso receberão um certificado de conclusão.",
    "Para se inscrever no curso, você pode preencher o formulário de inscrição em nosso site ou entrar em contato conosco pelo telefone."
];
/*generico*/
sendButton.addEventListener('click', () => {
    const userMessage = userInput.value;
    if (userMessage) {
        addUserMessage(userMessage);
        processUserMessage(userMessage);
        userInput.value = '';
    }
});

function addUserMessage(message) {
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user';
    userMessageDiv.textContent = message;
    chatBox.appendChild(userMessageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotMessage(message) {
    const botMessageDiv = document.createElement('div');
    botMessageDiv.className = 'message bot';
    botMessageDiv.textContent = message;
    chatBox.appendChild(botMessageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function processUserMessage(message) {
    const index = perguntas.findIndex(p => p.toLowerCase().includes(message.toLowerCase()));
    if (index !== -1) {
        addBotMessage(respostas[index]);
    } else {
        addBotMessage("Desculpe, não entendi a pergunta. Por favor, tente novamente.");
    }
}
