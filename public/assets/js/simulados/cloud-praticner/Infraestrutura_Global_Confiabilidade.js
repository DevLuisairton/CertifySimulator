const originalQuestions = [
  {
    id: 1,
    text: "Qual é a principal vantagem do uso de múltiplas Zonas de Disponibilidade (AZs) em uma região AWS?",
    options: [
      "Reduzir custos operacionais de armazenamento",
      "Aumentar a resiliência e disponibilidade dos serviços",
      "Evitar a necessidade de balanceadores de carga",
      "Garantir latências mais baixas em redes locais"
    ],
    correctAnswer: 1,
    explanation: "O uso de múltiplas AZs aumenta a resiliência e a disponibilidade dos serviços, garantindo continuidade mesmo em caso de falha de uma zona."
  },
  {
    id: 2,
    text: "Quais são benefícios do AWS Global Accelerator? (Escolha duas)",
    options: [
      "Melhoria na latência para usuários globais",
      "Criação automática de backups de instâncias EC2",
      "Fornece um endereço IP estático para aplicativos globais",
      "Oferece armazenamento distribuído para dados não estruturados"
    ],
    correctAnswer: [0, 2],
    explanation: "O AWS Global Accelerator melhora a latência ao direcionar tráfego para a região ideal e fornece um IP estático para maior estabilidade."
  },
  {
    id: 3,
    text: "Qual é a função das Edge Locations no Amazon CloudFront?",
    options: [
      "Armazenar backups de dados críticos",
      "Distribuir conteúdo com baixa latência para usuários finais",
      "Gerenciar instâncias EC2 em múltiplas regiões",
      "Fornecer conectividade direta com data centers locais"
    ],
    correctAnswer: 1,
    explanation: "As Edge Locations distribuem conteúdo com baixa latência, melhorando a experiência do usuário final."
  },
  {
    id: 4,
    text: "Quais são características do AWS Backup? (Escolha duas)",
    options: [
      "Oferece backup centralizado para serviços AWS",
      "Requer configuração manual para cada recurso",
      "Integra-se apenas com Amazon S3",
      "Permite agendamento e políticas de retenção de backups"
    ],
    correctAnswer: [0, 3],
    explanation: "O AWS Backup oferece backup centralizado e permite agendamento e políticas de retenção."
  },
  {
    id: 5,
    text: "Qual é o objetivo do AWS Well-Architected Framework?",
    options: [
      "Reduzir custos de infraestrutura em 50%",
      "Fornecer práticas recomendadas para projetar sistemas seguros e eficientes",
      "Automatizar a criação de instâncias EC2",
      "Substituir a necessidade de monitoramento de aplicações"
    ],
    correctAnswer: 1,
    explanation: "O AWS Well-Architected Framework fornece práticas recomendadas para projetar sistemas seguros, eficientes e resilientes."
  },
  {
    id: 6,
    text: "Quais são benefícios de usar múltiplas regiões AWS? (Escolha duas)",
    options: [
      "Maior resiliência contra falhas regionais",
      "Redução automática de custos de transferência de dados",
      "Melhoria na latência para usuários globais",
      "Eliminação da necessidade de Zonas de Disponibilidade"
    ],
    correctAnswer: [0, 2],
    explanation: "Usar múltiplas regiões aumenta a resiliência e melhora a latência para usuários globais."
  },
  {
    id: 7,
    text: "Qual é a principal função do Amazon CloudFront?",
    options: [
      "Fornecer armazenamento de objetos ilimitado",
      "Distribuir conteúdo com baixa latência e alta transferência",
      "Gerenciar instâncias EC2 em tempo real",
      "Automatizar backups de bancos de dados"
    ],
    correctAnswer: 1,
    explanation: "O Amazon CloudFront é uma CDN que distribui conteúdo com baixa latência e alta transferência."
  },
  {
    id: 8,
    text: "Quais são práticas recomendadas para alta disponibilidade no AWS? (Escolha duas)",
    options: [
      "Usar uma única Zona de Disponibilidade para reduzir custos",
      "Distribuir aplicações em múltiplas AZs",
      "Utilizar apenas instâncias Spot para workloads críticos",
      "Configurar balanceadores de carga entre AZs"
    ],
    correctAnswer: [1, 3],
    explanation: "Distribuir aplicações em múltiplas AZs e usar balanceadores de carga são práticas essenciais para alta disponibilidade."
  },
  {
    id: 9,
    text: "Qual é a vantagem do uso de Edge Locations em aplicações globais?",
    options: [
      "Reduzir a necessidade de balanceadores de carga",
      "Melhorar a latência para usuários finais",
      "Fornecer armazenamento de dados ilimitado",
      "Automatizar a criação de instâncias EC2"
    ],
    correctAnswer: 1,
    explanation: "Edge Locations melhoram a latência ao aproximar o conteúdo dos usuários finais."
  },
  {
    id: 10,
    text: "Quais são benefícios do AWS Global Accelerator? (Escolha duas)",
    options: [
      "Reduzir custos de transferência de dados entre regiões",
      "Melhorar a disponibilidade de aplicações globais",
      "Fornecer um IP estático para aplicações",
      "Automatizar a criação de backups"
    ],
    correctAnswer: [1, 2],
    explanation: "O AWS Global Accelerator melhora a disponibilidade e fornece um IP estático para aplicações globais."
  },
  {
    id: 11,
    text: "Qual é a principal função do AWS Backup?",
    options: [
      "Automatizar a criação de instâncias EC2",
      "Gerenciar backups centralizados para serviços AWS",
      "Fornecer armazenamento de objetos de baixo custo",
      "Monitorar o desempenho de aplicações"
    ],
    correctAnswer: 1,
    explanation: "O AWS Backup gerencia backups centralizados para serviços AWS de forma automatizada."
  },
  {
    id: 12,
    text: "Quais são pilares do AWS Well-Architected Framework? (Escolha duas)",
    options: [
      "Segurança e Excelência Operacional",
      "Redução de Custos Automática",
      "Eliminação de Zonas de Disponibilidade",
      "Escalabilidade e Resiliência"
    ],
    correctAnswer: [0, 3],
    explanation: "Segurança e Excelência Operacional são pilares do AWS Well-Architected Framework."
  },
  {
    id: 13,
    text: "Qual é a vantagem de usar múltiplas Zonas de Disponibilidade (AZs)?",
    options: [
      "Reduzir a latência entre regiões",
      "Aumentar a resiliência de aplicações",
      "Eliminar a necessidade de balanceadores de carga",
      "Reduzir custos de armazenamento"
    ],
    correctAnswer: 1,
    explanation: "Usar múltiplas AZs aumenta a resiliência de aplicações, garantindo continuidade em caso de falhas."
  },
  {
    id: 14,
    text: "Quais são benefícios do Amazon CloudFront? (Escolha duas)",
    options: [
      "Distribuição de conteúdo com baixa latência",
      "Armazenamento ilimitado de dados não estruturados",
      "Integração com AWS Global Accelerator",
      "Cache de conteúdo para melhorar desempenho"
    ],
    correctAnswer: [0, 3],
    explanation: "O Amazon CloudFront distribui conteúdo com baixa latência e usa cache para melhorar desempenho."
  },
  {
    id: 15,
    text: "Qual é a função do AWS Global Accelerator?",
    options: [
      "Fornecer armazenamento de objetos global",
      "Melhorar a latência e disponibilidade de aplicações globais",
      "Automatizar a criação de instâncias EC2",
      "Gerenciar backups entre regiões"
    ],
    correctAnswer: 1,
    explanation: "O AWS Global Accelerator melhora a latência e a disponibilidade de aplicações globais."
  },
  {
    id: 16,
    text: "Quais são práticas recomendadas pelo AWS Well-Architected Framework? (Escolha duas)",
    options: [
      "Usar uma única AZ para reduzir custos",
      "Implementar monitoramento contínuo",
      "Eliminar o uso de balanceadores de carga",
      "Projetar para falhas e recuperação"
    ],
    correctAnswer: [1, 3],
    explanation: "Monitoramento contínuo e design para falhas são práticas recomendadas pelo AWS Well-Architected Framework."
  },
  {
    id: 17,
    text: "Qual é a vantagem de usar Edge Locations?",
    options: [
      "Reduzir custos de armazenamento",
      "Melhorar a latência para usuários finais",
      "Automatizar a criação de instâncias EC2",
      "Fornecer backups automáticos"
    ],
    correctAnswer: 1,
    explanation: "Edge Locations melhoram a latência ao aproximar o conteúdo dos usuários finais."
  },
  {
    id: 18,
    text: "Quais são benefícios do AWS Backup? (Escolha duas)",
    options: [
      "Centralização de backups para múltiplos serviços",
      "Redução automática de custos de armazenamento",
      "Agendamento e políticas de retenção",
      "Eliminação da necessidade de monitoramento"
    ],
    correctAnswer: [0, 2],
    explanation: "O AWS Backup centraliza backups e permite agendamento e políticas de retenção."
  },
  {
    id: 19,
    text: "Qual é o objetivo do AWS Well-Architected Framework?",
    options: [
      "Reduzir custos de infraestrutura",
      "Fornecer práticas recomendadas para arquiteturas seguras e eficientes",
      "Automatizar a criação de instâncias EC2",
      "Substituir a necessidade de balanceadores de carga"
    ],
    correctAnswer: 1,
    explanation: "O AWS Well-Architected Framework fornece práticas recomendadas para arquiteturas seguras e eficientes."
  },
  {
    id: 20,
    text: "Quais são benefícios de usar múltiplas regiões AWS? (Escolha duas)",
    options: [
      "Maior resiliência contra falhas regionais",
      "Redução automática de custos de transferência de dados",
      "Melhoria na latência para usuários globais",
      "Eliminação da necessidade de Zonas de Disponibilidade"
    ],
    correctAnswer: [0, 2],
    explanation: "Usar múltiplas regiões aumenta a resiliência e melhora a latência para usuários globais."
  }
];

// Lista de questões ativa (será embaralhada)
let questions = [...originalQuestions];

// Estado do simulado
const examState = {
  currentQuestionIndex: 0,
  answers: {},
  markedForReview: new Set(),
  timeRemaining: 20 * 60, // 30 minutos em segundos
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