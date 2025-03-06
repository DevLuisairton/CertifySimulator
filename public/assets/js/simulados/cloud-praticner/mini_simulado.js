const originalQuestions = [
  {
    id: 1,
    text: "Por que a AWS é mais econômica do que os data centers tradicionais para aplicações com cargas de trabalho de computação variáveis?",
    options: [
      "Os custos do Amazon Elastic Compute Cloud (Amazon EC2) são faturados mensalmente.",
      "Os clientes mantêm acesso administrativo total às suas instâncias do Amazon EC2.",
      "As instâncias do Amazon EC2 podem ser lançadas sob demanda quando necessário.",
      "Os clientes podem executar permanentemente instâncias suficientes para lidar com cargas de trabalho de pico."
    ],
    correctAnswer: 2,
    explanation: "A AWS é mais econômica porque as instâncias do Amazon EC2 podem ser lançadas sob demanda, permitindo que os clientes paguem apenas pelo tempo de computação que utilizam. Isso elimina a necessidade de manter servidores ociosos em data centers tradicionais, o que reduz custos significativamente."
  },
  {
    id: 2,
    text: "Qual serviço da AWS simplificaria a migração de um banco de dados para a AWS?",
    options: [
      "AWS Storage Gateway",
      "AWS Database Migration Service (AWS DMS)",
      "Amazon Elastic Compute Cloud (Amazon EC2)",
      "Amazon AppStream 2.0"
    ],
    correctAnswer: 1,
    explanation: "O AWS Database Migration Service (AWS DMS) é projetado especificamente para facilitar a migração de bancos de dados para a AWS. Ele permite migrações rápidas e seguras com tempo de inatividade mínimo, suportando uma variedade de bancos de dados de origem e destino."
  },
  {
    id: 3,
    text: "Qual oferta da AWS permite que os clientes encontrem, comprem e comecem a usar imediatamente soluções de software em seu ambiente AWS?",
    options: [
      "AWS Config",
      "AWS OpsWorks",
      "AWS SDK",
      "AWS Marketplace"
    ],
    correctAnswer: 3,
    explanation: "O AWS Marketplace é uma loja digital que permite que os clientes encontrem, comprem e implantem rapidamente soluções de software de terceiros que funcionam perfeitamente com a AWS. Ele oferece uma ampla variedade de produtos, desde aplicativos até serviços de dados e machine learning."
  },
  {
    id: 4,
    text: "Qual serviço de rede da AWS permite que uma empresa crie uma rede virtual dentro da AWS?",
    options: [
      "AWS Config",
      "Amazon Route 53",
      "AWS Direct Connect",
      "Amazon Virtual Private Cloud (Amazon VPC)"
    ],
    correctAnswer: 3,
    explanation: "O Amazon Virtual Private Cloud (Amazon VPC) permite que você crie uma rede virtual isolada na AWS. Com o VPC, você pode definir um espaço de endereço IP personalizado, criar sub-redes, configurar tabelas de rotas e gateways de rede, e controlar o acesso à rede."
  },
  {
    id: 5,
    text: "Qual das seguintes opções é responsabilidade da AWS sob o modelo de responsabilidade compartilhada da AWS?",
    options: [
      "Configurar aplicativos de terceiros",
      "Manter hardware físico",
      "Proteger o acesso e os dados do aplicativo",
      "Gerenciar Amazon Machine Images (AMIs) personalizadas"
    ],
    correctAnswer: 1,
    explanation: "No modelo de responsabilidade compartilhada da AWS, a AWS é responsável pela segurança 'da nuvem', o que inclui manter o hardware físico, a infraestrutura global e os serviços fundamentais. O cliente é responsável pela segurança 'na nuvem', como gerenciar sistemas operacionais, aplicativos e dados."
  },
  {
    id: 6,
    text: "Qual componente da infraestrutura global da AWS o Amazon CloudFront usa para garantir a entrega de baixa latência?",
    options: [
      "Regiões da AWS",
      "Localizações de borda da AWS",
      "Zonas de disponibilidade da AWS",
      "Amazon Virtual Private Cloud (Amazon VPC)"
    ],
    correctAnswer: 1,
    explanation: "O Amazon CloudFront usa localizações de borda da AWS para garantir a entrega de conteúdo com baixa latência. Essas localizações estão estrategicamente posicionadas em todo o mundo para reduzir a distância entre os usuários finais e os servidores, melhorando o desempenho e a velocidade de entrega."
  },
  {
    id: 7,
    text: "Como um administrador de sistema adicionaria uma camada adicional de segurança de login ao AWS Management Console de um usuário?",
    options: [
      "Usar AWS Cloud Directory",
      "Auditar funções do AWS Identity and Access Management (IAM)",
      "Habilitar autenticação multifator",
      "Habilitar AWS CloudTrail"
    ],
    correctAnswer: 2,
    explanation: "A autenticação multifator (MFA) adiciona uma camada extra de segurança ao exigir que os usuários forneçam duas ou mais formas de verificação antes de acessar o AWS Management Console. Isso reduz significativamente o risco de acesso não autorizado, mesmo que as credenciais de login sejam comprometidas."
  },
  {
    id: 8,
    text: "Qual serviço pode identificar o usuário que fez a chamada de API quando uma instância do Amazon Elastic Compute Cloud (Amazon EC2) é encerrada?",
    options: [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS X-Ray",
      "AWS Identity and Access Management (AWS IAM)"
    ],
    correctAnswer: 1,
    explanation: "O AWS CloudTrail registra todas as chamadas de API feitas na sua conta da AWS, incluindo quem fez a chamada, quando foi feita e quais ações foram realizadas. Isso permite rastrear e auditar atividades, como o encerramento de uma instância do EC2."
  },
  {
    id: 9,
    text: "Qual serviço você usaria para enviar alertas com base em alarmes do Amazon CloudWatch?",
    options: [
      "Amazon Simple Notification Service (Amazon SNS)",
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "Amazon Route 53"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Simple Notification Service (Amazon SNS) é um serviço de mensagens que permite enviar alertas e notificações com base em alarmes do Amazon CloudWatch. Ele pode notificar usuários por e-mail, SMS ou outras integrações quando condições específicas são atendidas."
  },
  {
    id: 10,
    text: "Onde um cliente pode encontrar informações sobre ações proibidas na infraestrutura da AWS?",
    options: [
      "AWS Trusted Advisor",
      "AWS Identity and Access Management (IAM)",
      "Console de faturamento da AWS",
      "Política de Uso Aceitável da AWS"
    ],
    correctAnswer: 3,
    explanation: "A Política de Uso Aceitável da AWS descreve as ações proibidas na infraestrutura da AWS. Ela define diretrizes para o uso responsável dos serviços da AWS, garantindo que os recursos não sejam usados de maneira inadequada ou maliciosa."
  }
];

// Lista de questões ativa (será embaralhada)
let questions = [...originalQuestions];

// Estado do simulado
const examState = {
  currentQuestionIndex: 0,
  answers: {},
  markedForReview: new Set(),
  timeRemaining: 30 * 60, // 30 minutos em segundos
  timerInterval: null,
  examFinished: false
};

// Elementos do DOM
const examContainer = document.getElementById('exam-container');
const resultsContainer = document.getElementById('results-container');
const questionContainer = document.getElementById('question-container');
const questionNav = document.getElementById('question-nav');
const timerDisplay = document.getElementById('timer-display');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const finishBtn = document.getElementById('finish-btn');
const restartBtn = document.getElementById('restart-btn');
const finishModal = document.getElementById('finish-modal');
const cancelFinishBtn = document.getElementById('cancel-finish');
const confirmFinishBtn = document.getElementById('confirm-finish');

// Função para embaralhar as questões
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Função para formatar o tempo
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Iniciar o timer
function startTimer() {
  examState.timerInterval = setInterval(() => {
    examState.timeRemaining--;

    timerDisplay.textContent = formatTime(examState.timeRemaining);

    if (examState.timeRemaining <= 300) {
      timerDisplay.classList.add('countdown-warning');
    }

    if (examState.timeRemaining <= 0) {
      clearInterval(examState.timerInterval);
      finishExam();
    }
  }, 1000);
}

// Renderizar a navegação de questões
function renderQuestionNav() {
  questionNav.innerHTML = '';

  questions.forEach((question, index) => {
    const navItem = document.createElement('div');
    navItem.className = 'question-nav-item';
    navItem.textContent = index + 1;

    if (index === examState.currentQuestionIndex) {
      navItem.classList.add('current');
    }
    if (examState.answers[question.id] !== undefined && examState.answers[question.id].length > 0) {
      navItem.classList.add('answered');
    }
    if (examState.markedForReview.has(question.id)) {
      navItem.classList.add('marked');
    }

    navItem.addEventListener('click', () => {
      examState.currentQuestionIndex = index;
      renderCurrentQuestion();
      renderQuestionNav();
    });

    questionNav.appendChild(navItem);
  });
}

// Renderizar a questão atual
function renderCurrentQuestion() {
  const question = questions[examState.currentQuestionIndex];
  const selectedAnswers = examState.answers[question.id] || [];

  questionContainer.innerHTML = `
    <div class="question-header">
      <span class="question-number">Questão ${examState.currentQuestionIndex + 1} de ${questions.length}</span>
      <button class="review-btn ${examState.markedForReview.has(question.id) ? 'marked' : ''}" data-id="${question.id}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v1H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3V5a3 3 0 0 0-3-3z"></path>
        </svg>
        ${examState.markedForReview.has(question.id) ? 'Remover Marcação' : 'Marcar para Revisão'}
      </button>
    </div>
    <div class="question-text">${question.text}</div>
    <div class="options">
      ${question.options.map((option, idx) => `
        <div class="option ${selectedAnswers.includes(idx) ? 'selected' : ''}" data-index="${idx}">
          ${String.fromCharCode(65 + idx)}. ${option}
        </div>
      `).join('')}
    </div>
  `;

  const reviewBtn = questionContainer.querySelector('.review-btn');
  reviewBtn.addEventListener('click', () => {
    toggleReviewMark(question.id);
  });

  const options = questionContainer.querySelectorAll('.option');
  options.forEach(option => {
    option.addEventListener('click', () => {
      const selectedIndex = parseInt(option.getAttribute('data-index'));
      selectAnswer(question.id, selectedIndex);
    });
  });

  prevBtn.disabled = examState.currentQuestionIndex === 0;
  nextBtn.disabled = examState.currentQuestionIndex === questions.length - 1;
}

// Selecionar uma resposta (ajustada para suportar uma ou duas escolhas)
function selectAnswer(questionId, answerIndex) {
  const question = questions.find(q => q.id === questionId);
  const isMultipleChoice = Array.isArray(question.correctAnswer) && question.correctAnswer.length === 2;

  if (!examState.answers[questionId]) {
    examState.answers[questionId] = [];
  }

  const answerArray = examState.answers[questionId];
  const index = answerArray.indexOf(answerIndex);

  if (index === -1) {
    if (isMultipleChoice && answerArray.length >= 2) {
      return; // Não permite mais de duas escolhas para perguntas de múltipla escolha
    } else if (!isMultipleChoice && answerArray.length >= 1) {
      return; // Não permite mais de uma escolha para perguntas de única escolha
    }
    answerArray.push(answerIndex);
  } else {
    answerArray.splice(index, 1);
  }

  renderCurrentQuestion();
  renderQuestionNav();
}

// Alternar marcação para revisão
function toggleReviewMark(questionId) {
  if (examState.markedForReview.has(questionId)) {
    examState.markedForReview.delete(questionId);
  } else {
    examState.markedForReview.add(questionId);
  }
  renderCurrentQuestion();
  renderQuestionNav();
}

// Navegação entre questões
function goToNextQuestion() {
  if (examState.currentQuestionIndex < questions.length - 1) {
    examState.currentQuestionIndex++;
    renderCurrentQuestion();
    renderQuestionNav();
  }
}

function goToPrevQuestion() {
  if (examState.currentQuestionIndex > 0) {
    examState.currentQuestionIndex--;
    renderCurrentQuestion();
    renderQuestionNav();
  }
}

// Finalizar o exame
function finishExam() {
  clearInterval(examState.timerInterval);
  examState.examFinished = true;
  examContainer.classList.add('hidden');
  resultsContainer.classList.remove('hidden');
  renderResults();
}

// Renderizar resultados (ajustada para suportar uma ou duas escolhas)
function renderResults() {
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  questions.forEach(question => {
    const selectedAnswers = examState.answers[question.id] || [];
    const correctAnswers = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer];

    if (selectedAnswers.length === 0) {
      unansweredCount++;
    } else if (arraysEqual(selectedAnswers.sort(), correctAnswers.sort())) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });

  // Cálculo da porcentagem de acertos
  const percentage = ((correctCount / questions.length) * 100).toFixed(2);

  // Atualizar exibição do score com porcentagem
  document.getElementById('score').textContent = `${correctCount}/${questions.length} (${percentage}%)`;

  document.getElementById('correct-count').textContent = correctCount;
  document.getElementById('incorrect-count').textContent = incorrectCount;
  document.getElementById('unanswered-count').textContent = unansweredCount;

  const resultsQuestionsContainer = document.getElementById('results-questions');
  resultsQuestionsContainer.innerHTML = '';

  questions.forEach(question => {
    const selectedAnswers = examState.answers[question.id] || [];
    const correctAnswers = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer];

    let status = 'unanswered';
    let statusText = 'Não Respondida';

    if (selectedAnswers.length > 0) {
      status = arraysEqual(selectedAnswers.sort(), correctAnswers.sort()) ? 'correct' : 'incorrect';
      statusText = arraysEqual(selectedAnswers.sort(), correctAnswers.sort()) ? 'Correta' : 'Incorreta';
    }

    const resultHTML = `
      <div class="results-question">
        <div class="results-question-header">
          <h3>Questão ${questions.indexOf(question) + 1}</h3>
          <span class="results-question-status status-${status}">${statusText}</span>
        </div>
        <div class="question-text">${question.text}</div>
        <div class="options">
          ${question.options.map((option, idx) => `
            <div class="option ${correctAnswers.includes(idx) ? 'correct' : ''} ${(selectedAnswers.includes(idx) && !correctAnswers.includes(idx)) ? 'incorrect' : ''}">
              ${String.fromCharCode(65 + idx)}. ${option}
              ${correctAnswers.includes(idx) ? ' ✓' : ''}
              ${(selectedAnswers.includes(idx) && !correctAnswers.includes(idx)) ? ' ✗' : ''}
            </div>
          `).join('')}
        </div>
        <div class="explanation">
          <strong>Explicação:</strong> ${question.explanation}
        </div>
      </div>
    `;

    resultsQuestionsContainer.innerHTML += resultHTML;
  });
}

// Função auxiliar para comparar arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Reiniciar o simulado
function restartExam() {
  clearInterval(examState.timerInterval);

  // Resetar estado
  examState.currentQuestionIndex = 0;
  examState.answers = {};
  examState.markedForReview = new Set();
  examState.timeRemaining = 30 * 60; // Reinicia o tempo para 30 minutos
  examState.examFinished = false;

  // Reembaralhar questões usando original
  questions = shuffleArray([...originalQuestions]);

  // Resetar UI
  timerDisplay.textContent = formatTime(examState.timeRemaining); // Atualiza o display do tempo
  timerDisplay.classList.remove('countdown-warning');
  examContainer.classList.remove('hidden');
  resultsContainer.classList.add('hidden');

  // Reiniciar componentes
  renderQuestionNav();
  renderCurrentQuestion();
  startTimer();
}

// Controle do modal
function showFinishModal() {
  finishModal.classList.add('active');
}

function hideFinishModal() {
  finishModal.classList.remove('active');
}

// Event listeners
nextBtn.addEventListener('click', goToNextQuestion);
prevBtn.addEventListener('click', goToPrevQuestion);
finishBtn.addEventListener('click', showFinishModal);
restartBtn.addEventListener('click', restartExam);
cancelFinishBtn.addEventListener('click', hideFinishModal);
confirmFinishBtn.addEventListener('click', () => {
  hideFinishModal();
  finishExam();
});

// Inicialização
questions = shuffleArray(questions);
renderCurrentQuestion();
renderQuestionNav();
startTimer();