const originalQuestions = [
  {
    id: 1,
    text: "Qual serviço da AWS é usado para coletar e monitorar métricas de desempenho de instâncias EC2, bancos de dados e outros recursos?",
    options: [
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "AWS X-Ray",
      "AWS Config"
    ],
    correctAnswer: 1,
    explanation: "O Amazon CloudWatch permite coletar e monitorar métricas de desempenho para diversos serviços da AWS, incluindo EC2 e RDS."
  },
  {
    id: 2,
    text: "Quais das seguintes afirmações sobre AWS CloudTrail são verdadeiras? (Escolha duas)",
    options: [
      "Registra eventos de API e atividades em contas da AWS",
      "Permite a execução de consultas SQL diretamente sobre os logs coletados",
      "Fornece rastreamento detalhado de requisições HTTP em aplicações",
      "Ajuda a detectar atividades suspeitas e auditoria de conformidade"
    ],
    correctAnswer: [0, 3],
    explanation: "O AWS CloudTrail registra eventos de API e atividades em contas da AWS, sendo útil para auditoria e detecção de atividades suspeitas."
  },
  {
    id: 3,
    text: "Qual é a principal função do AWS X-Ray?",
    options: [
      "Monitorar métricas de desempenho de instâncias EC2",
      "Rastrear e analisar requisições em aplicações distribuídas",
      "Auditar a conformidade de recursos da AWS",
      "Coletar logs de eventos de API"
    ],
    correctAnswer: 1,
    explanation: "O AWS X-Ray rastreia e analisa requisições em aplicações distribuídas, ajudando a identificar gargalos e problemas de desempenho."
  },
  {
    id: 4,
    text: "Quais são benefícios do AWS Config? (Escolha duas)",
    options: [
      "Auditar a conformidade de recursos da AWS",
      "Monitorar métricas de desempenho em tempo real",
      "Fornecer rastreamento detalhado de requisições HTTP",
      "Ajudar a detectar mudanças não autorizadas em recursos"
    ],
    correctAnswer: [0, 3],
    explanation: "O AWS Config audita a conformidade de recursos e ajuda a detectar mudanças não autorizadas."
  },
  {
    id: 5,
    text: "Qual é a principal função do Amazon Athena?",
    options: [
      "Executar consultas SQL diretamente sobre dados armazenados no Amazon S3",
      "Monitorar métricas de desempenho de instâncias EC2",
      "Rastrear requisições em aplicações distribuídas",
      "Coletar logs de eventos de API"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Athena permite executar consultas SQL diretamente sobre dados armazenados no Amazon S3, sem necessidade de infraestrutura."
  },
  {
    id: 6,
    text: "Quais são características do AWS Glue? (Escolha duas)",
    options: [
      "Serviço ETL (Extract, Transform, Load) totalmente gerenciado",
      "Permite executar consultas SQL sobre dados no S3",
      "Fornece rastreamento detalhado de requisições HTTP",
      "Prepara e transforma dados para análise"
    ],
    correctAnswer: [0, 3],
    explanation: "O AWS Glue é um serviço ETL totalmente gerenciado que prepara e transforma dados para análise."
  },
  {
    id: 7,
    text: "Qual é a principal função do Amazon QuickSight?",
    options: [
      "Monitorar métricas de desempenho de instâncias EC2",
      "Fornecer visualizações e dashboards de dados em tempo real",
      "Rastrear requisições em aplicações distribuídas",
      "Coletar logs de eventos de API"
    ],
    correctAnswer: 1,
    explanation: "O Amazon QuickSight fornece visualizações e dashboards de dados em tempo real para análise de negócios."
  },
  {
    id: 8,
    text: "Quais são benefícios do AWS Data Pipeline? (Escola duas)",
    options: [
      "Orquestrar e automatizar movimentação e transformação de dados",
      "Executar consultas SQL sobre dados no S3",
      "Monitorar métricas de desempenho de instâncias EC2",
      "Fornecer visualizações de dados em tempo real"
    ],
    correctAnswer: [0, 1],
    explanation: "O AWS Data Pipeline orquestra e automatiza a movimentação e transformação de dados entre serviços da AWS."
  },
  {
    id: 9,
    text: "Qual é a principal função do AWS Trusted Advisor?",
    options: [
      "Fornecer recomendações para otimizar custos, segurança e desempenho",
      "Monitorar métricas de desempenho de instâncias EC2",
      "Rastrear requisições em aplicações distribuídas",
      "Coletar logs de eventos de API"
    ],
    correctAnswer: 0,
    explanation: "O AWS Trusted Advisor fornece recomendações para otimizar custos, segurança e desempenho na AWS."
  },
  {
    id: 10,
    text: "Quais são características do Amazon Kinesis? (Escolha duas)",
    options: [
      "Processar e analisar fluxos de dados em tempo real",
      "Executar consultas SQL sobre dados no S3",
      "Monitorar métricas de desempenho de instâncias EC2",
      "Coletar logs de eventos de API"
    ],
    correctAnswer: [0, 3],
    explanation: "O Amazon Kinesis processa e analisa fluxos de dados em tempo real e pode coletar logs de eventos de API."
  },
  {
    id: 11,
    text: "Qual é a principal função do Amazon CloudWatch Logs?",
    options: [
      "Monitorar métricas de desempenho de instâncias EC2",
      "Coletar, armazenar e analisar logs de aplicações e serviços",
      "Rastrear requisições em aplicações distribuídas",
      "Auditar a conformidade de recursos da AWS"
    ],
    correctAnswer: 1,
    explanation: "O Amazon CloudWatch Logs coleta, armazena e analisa logs de aplicações e serviços da AWS."
  },
  {
    id: 12,
    text: "Quais são benefícios do AWS X-Ray? (Escolha duas)",
    options: [
      "Rastrear requisições em aplicações distribuídas",
      "Identificar gargalos de desempenho em aplicações",
      "Monitorar métricas de desempenho de instâncias EC2",
      "Auditar a conformidade de recursos da AWS"
    ],
    correctAnswer: [0, 1],
    explanation: "O AWS X-Ray rastreia requisições em aplicações distribuídas e ajuda a identificar gargalos de desempenho."
  },
  {
    id: 13,
    text: "Qual é a principal função do AWS Config Rules?",
    options: [
      "Auditar a conformidade de recursos da AWS",
      "Monitorar métricas de desempenho de instâncias EC2",
      "Rastrear requisições em aplicações distribuídas",
      "Coletar logs de eventos de API"
    ],
    correctAnswer: 0,
    explanation: "O AWS Config Rules audita a conformidade de recursos da AWS com base em regras personalizadas."
  },
  {
    id: 14,
    text: "Quais são características do Amazon Athena? (Escolha duas)",
    options: [
      "Executar consultas SQL sobre dados no S3",
      "Monitorar métricas de desempenho de instâncias EC2",
      "Fornecer visualizações de dados em tempo real",
      "Não requer infraestrutura gerenciada"
    ],
    correctAnswer: [0, 3],
    explanation: "O Amazon Athena permite executar consultas SQL sobre dados no S3 sem necessidade de infraestrutura gerenciada."
  },
  {
    id: 15,
    text: "Qual é a principal função do AWS Glue Data Catalog?",
    options: [
      "Armazenar metadados sobre fontes de dados",
      "Monitorar métricas de desempenho de instâncias EC2",
      "Rastrear requisições em aplicações distribuídas",
      "Coletar logs de eventos de API"
    ],
    correctAnswer: 0,
    explanation: "O AWS Glue Data Catalog armazena metadados sobre fontes de dados, facilitando a descoberta e o acesso."
  },
  {
    id: 16,
    text: "Quais são benefícios do Amazon QuickSight? (Escolha duas)",
    options: [
      "Fornecer visualizações e dashboards de dados em tempo real",
      "Executar consultas SQL sobre dados no S3",
      "Monitorar métricas de desempenho de instâncias EC2",
      "Integrar-se com diversas fontes de dados"
    ],
    correctAnswer: [0, 3],
    explanation: "O Amazon QuickSight fornece visualizações em tempo real e integra-se com diversas fontes de dados."
  },
  {
    id: 17,
    text: "Qual é a principal função do AWS Data Pipeline?",
    options: [
      "Orquestrar e automatizar movimentação e transformação de dados",
      "Monitorar métricas de desempenho de instâncias EC2",
      "Rastrear requisições em aplicações distribuídas",
      "Coletar logs de eventos de API"
    ],
    correctAnswer: 0,
    explanation: "O AWS Data Pipeline orquestra e automatiza a movimentação e transformação de dados entre serviços da AWS."
  },
  {
    id: 18,
    text: "Quais são características do AWS Trusted Advisor? (Escolha duas)",
    options: [
      "Fornecer recomendações para otimizar custos, segurança e desempenho",
      "Monitorar métricas de desempenho de instâncias EC2",
      "Rastrear requisições em aplicações distribuídas",
      "Auditar a conformidade de recursos da AWS"
    ],
    correctAnswer: [0, 1],
    explanation: "O AWS Trusted Advisor fornece recomendações para otimizar custos, segurança e desempenho."
  },
  {
    id: 19,
    text: "Qual é a principal função do Amazon Kinesis Data Streams?",
    options: [
      "Processar e analisar fluxos de dados em tempo real",
      "Monitorar métricas de desempenho de instâncias EC2",
      "Rastrear requisições em aplicações distribuídas",
      "Coletar logs de eventos de API"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Kinesis Data Streams processa e analisa fluxos de dados em tempo real."
  },
  {
    id: 20,
    text: "Quais são benefícios do Amazon CloudWatch Alarms? (Escolha duas)",
    options: [
      "Monitorar métricas e acionar ações automatizadas",
      "Executar consultas SQL sobre dados no S3",
      "Rastrear requisições em aplicações distribuídas",
      "Notificar sobre mudanças em recursos da AWS"
    ],
    correctAnswer: [0, 3],
    explanation: "O Amazon CloudWatch Alarms monitora métricas e pode notificar sobre mudanças ou acionar ações automatizadas."
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