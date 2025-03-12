const originalQuestions = [
  {
    id: 1,
    text: "Qual das seguintes práticas é fundamental para a Excelência Operacional no AWS Well-Architected Framework?",
    options: [
      "Implementação de criptografia de dados em repouso.",
      "Automação de mudanças e respostas a eventos.",
      "Dimensionamento vertical de instâncias EC2.",
      "Redução de custos através da utilização de instâncias spot."
    ],
    correctAnswer: 1,
    explanation: "A automação é essencial para a Excelência Operacional, reduzindo a intervenção humana em tarefas repetitivas."
  },
  {
    id: 2,
    text: "Qual é o objetivo principal da automação na Excelência Operacional?",
    options: [
      "Reduzir a necessidade de intervenção humana em tarefas repetitivas.",
      "Aumentar a velocidade de processamento de dados.",
      "Melhorar a segurança da infraestrutura.",
      "Otimizar o uso de recursos de computação."
    ],
    correctAnswer: 0,
    explanation: "A automação visa diminuir a necessidade de intervenção humana em tarefas repetitivas, melhorando a eficiência."
  },
  {
    id: 3,
    text: "Qual das seguintes práticas contribui para a melhoria contínua na Excelência Operacional?",
    options: [
      "Realização de revisões periódicas do Well-Architected Framework.",
      "Utilização de instâncias reservadas para todos os recursos.",
      "Implementação de um único ponto de falha para aumentar a resiliência.",
      "Desativação de logs e monitoramento para reduzir custos."
    ],
    correctAnswer: 0,
    explanation: "Revisões periódicas do Well-Architected Framework ajudam a identificar áreas de melhoria contínua."
  },
  {
    id: 4,
    text: "Qual princípio de segurança é enfatizado no AWS Well-Architected Framework?",
    options: [
      "Segurança através da obscuridade.",
      "Privilégio mínimo.",
      "Acesso irrestrito a todos os recursos.",
      "Dependência de um único ponto de autenticação."
    ],
    correctAnswer: 1,
    explanation: "O princípio do privilégio mínimo é fundamental para limitar o impacto de possíveis violações de segurança."
  },
  {
    id: 5,
    text: "Qual das seguintes práticas é recomendada para proteger dados em trânsito?",
    options: [
      "Utilização de criptografia no lado do cliente.",
      "Armazenamento de dados em buckets S3 públicos.",
      "Desativação de firewalls de rede.",
      "Compartilhamento de chaves de acesso em texto plano."
    ],
    correctAnswer: 0,
    explanation: "A criptografia no lado do cliente garante que os dados sejam protegidos antes de serem transmitidos."
  },
  {
    id: 6,
    text: "Qual é o objetivo da implementação de controles de detecção no pilar de Segurança?",
    options: [
      "Impedir todos os ataques cibernéticos.",
      "Detectar e responder a incidentes de segurança de forma rápida e eficaz.",
      "Reduzir os custos de armazenamento de dados.",
      "Aumentar a velocidade de processamento de aplicações."
    ],
    correctAnswer: 1,
    explanation: "Controles de detecção permitem identificar e responder rapidamente a incidentes de segurança."
  },
  {
    id: 7,
    text: "Qual é o objetivo principal do pilar de Confiabilidade no AWS Well-Architected Framework?",
    options: [
      "Garantir que a infraestrutura seja capaz de se recuperar de falhas.",
      "Otimizar o uso de recursos de computação.",
      "Reduzir os custos de armazenamento de dados.",
      "Aumentar a velocidade de processamento de aplicações."
    ],
    correctAnswer: 0,
    explanation: "O pilar de Confiabilidade visa garantir que a infraestrutura possa se recuperar de falhas e manter a disponibilidade."
  },
  {
    id: 8,
    text: "Qual das seguintes práticas contribui para a alta disponibilidade de uma aplicação?",
    options: [
      "Implementação de um único ponto de falha.",
      "Utilização de instâncias EC2 em uma única zona de disponibilidade.",
      "Distribuição de recursos em várias zonas de disponibilidade.",
      "Desativação de backups e snapshots."
    ],
    correctAnswer: 2,
    explanation: "A distribuição de recursos em várias zonas de disponibilidade aumenta a resiliência e a disponibilidade da aplicação."
  },
  {
    id: 9,
    text: "Qual é a importância dos testes de recuperação de desastres no pilar de Confiabilidade?",
    options: [
      "Validar a capacidade da infraestrutura de se recuperar de eventos disruptivos.",
      "Otimizar o uso de recursos de computação.",
      "Reduzir os custos de armazenamento de dados.",
      "Aumentar a velocidade de processamento de aplicações."
    ],
    correctAnswer: 0,
    explanation: "Testes de recuperação de desastres validam a capacidade da infraestrutura de se recuperar de eventos disruptivos, garantindo a continuidade dos negócios."
  },
  {
    id: 10,
    text: "Qual princípio de Eficiência de Performance é enfatizado no AWS Well-Architected Framework?",
    options: [
      "Dimensionamento vertical excessivo.",
      "Seleção de tipos de recursos adequados para a carga de trabalho.",
      "Utilização de um único tipo de instância EC2 para todas as cargas de trabalho.",
      "Desativação de caching e otimização de consultas."
    ],
    correctAnswer: 1,
    explanation: "Selecionar os tipos de recursos adequados garante o uso eficiente dos recursos de computação."
  },
  {
    id: 11,
    text: "Qual das seguintes práticas contribui para a otimização da latência de uma aplicação?",
    options: [
      "Utilização de Content Delivery Networks (CDNs).",
      "Armazenamento de dados em regiões geográficas distantes dos usuários.",
      "Desativação de otimização de consultas em bancos de dados.",
      "Implementação de um único ponto de acesso à rede."
    ],
    correctAnswer: 0,
    explanation: "CDNs armazenam em cache o conteúdo próximo aos usuários, reduzindo a latência."
  },
  {
    id: 12,
    text: "Qual é o objetivo do monitoramento de performance no pilar de Eficiência de Performance?",
    options: [
      "Identificar e corrigir gargalos de desempenho.",
      "Reduzir os custos de armazenamento de dados.",
      "Aumentar a segurança da infraestrutura.",
      "Garantir a conformidade com regulamentações."
    ],
    correctAnswer: 0,
    explanation: "O monitoramento de performance permite identificar e corrigir gargalos, garantindo o desempenho ideal da aplicação."
  },
  {
    id: 13,
    text: "Qual princípio de Otimização de Custos é enfatizado no AWS Well-Architected Framework?",
    options: [
      "Pagamento por recursos provisionados, independentemente do uso.",
      "Utilização de instâncias reservadas para todas as cargas de trabalho.",
      "Pagamento apenas pelos recursos consumidos.",
      "Desativação de monitoramento de custos."
    ],
    correctAnswer: 2,
    explanation: "Pagar apenas pelos recursos consumidos é fundamental para otimizar custos na nuvem."
  },
    {
    id: 14,
    text: "Qual das seguintes práticas contribui para a redução de custos de armazenamento de dados?",
    options: [
      "Utilização de classes de armazenamento S3 adequadas para cada tipo de dado.",
      "Armazenamento de todos os dados em buckets S3 Standard.",
      "Desativação de políticas de ciclo de vida do S3.",
      "Duplicação de dados em várias regiões."
    ],
    correctAnswer: 0,
    explanation: "Utilizar classes de armazenamento S3 adequadas permite otimizar custos de acordo com a frequência de acesso aos dados."
  },
  {
    id: 15,
    text: "Qual é o objetivo da análise de custos no pilar de Otimização de Custos?",
    options: [
      "Identificar oportunidades de redução de custos.",
      "Aumentar a segurança da infraestrutura.",
      "Melhorar a performance da aplicação.",
      "Garantir a conformidade com regulamentações."
    ],
    correctAnswer: 0,
    explanation: "A análise de custos permite identificar oportunidades de redução de gastos e otimizar o uso de recursos."
  },
  {
    id: 16,
    text: "Qual o objetivo principal do pilar de Sustentabilidade?",
    options: [
      "Minimizar o impacto ambiental das cargas de trabalho na AWS.",
      "Reduzir os custos de armazenamento de dados.",
      "Aumentar a segurança da infraestrutura.",
      "Melhorar a performance da aplicação."
    ],
    correctAnswer: 0,
    explanation: "O pilar de Sustentabilidade visa reduzir o impacto ambiental das cargas de trabalho, promovendo práticas sustentáveis."
  },
  {
    id: 17,
    text: "Qual das seguintes práticas contribui para a sustentabilidade na AWS?",
    options: [
      "Escolha de regiões com menor emissão de carbono.",
      "Utilização de instâncias EC2 superdimensionadas.",
      "Desativação de recursos ociosos.",
      "Armazenamento de dados em várias regiões sem necessidade."
    ],
    correctAnswer: 0,
    explanation: "Escolher regiões com menor emissão de carbono ajuda a reduzir a pegada ambiental das cargas de trabalho."
  },
  {
    id: 18,
    text: "Qual a importancia de monitorar o consumo de energia dos seus workloads?",
    options: [
      "Permite a otimização de recursos e redução do impacto ambiental.",
      "Reduz os custos de armazenamento de dados.",
      "Aumenta a segurança da infraestrutura.",
      "Melhora a performance da aplicação."
    ],
    correctAnswer: 0,
    explanation: "Monitorar o consumo de energia permite otimizar recursos, reduzindo o impacto ambiental e promovendo a sustentabilidade."
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