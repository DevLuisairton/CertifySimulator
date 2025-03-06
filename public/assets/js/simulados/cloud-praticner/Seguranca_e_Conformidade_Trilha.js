const originalQuestions = [
  {
    id: 1,
    text: "Qual é a função principal do AWS Identity and Access Management (IAM)?",
    options: [
      "Monitorar atividades suspeitas na conta AWS",
      "Gerenciar identidades e permissões para recursos da AWS",
      "Criptografar dados armazenados no Amazon S3",
      "Detectar vulnerabilidades de segurança em instâncias EC2"
    ],
    correctAnswer: 1,
    explanation: "O AWS IAM permite gerenciar identidades e definir permissões para acessar recursos na AWS de forma segura."
  },
  {
    id: 2,
    text: "Quais das seguintes opções são benefícios do AWS CloudTrail? (Escolha duas)",
    options: [
      "Registra ações realizadas em contas da AWS para auditoria",
      "Fornece proteção contra ataques DDoS avançados",
      "Ajuda a monitorar e analisar atividades suspeitas na conta",
      "Permite configurar firewalls de aplicativos web"
    ],
    correctAnswer: [0, 2],
    explanation: "O AWS CloudTrail registra ações executadas nos serviços da AWS e ajuda a monitorar atividades suspeitas para auditoria e conformidade."
  },
  {
    id: 3,
    text: "Qual é a principal função do AWS Key Management Service (KMS)?",
    options: [
      "Gerenciar permissões de acesso a recursos da AWS",
      "Criar e gerenciar chaves de criptografia para proteger dados",
      "Monitorar atividades de rede em tempo real",
      "Detectar vulnerabilidades em instâncias EC2"
    ],
    correctAnswer: 1,
    explanation: "O AWS KMS permite criar e gerenciar chaves de criptografia para proteger dados armazenados e em trânsito."
  },
  {
    id: 4,
    text: "Quais são benefícios do AWS Organizations? (Escolha duas)",
    options: [
      "Centraliza o gerenciamento de múltiplas contas AWS",
      "Fornece proteção contra ataques DDoS",
      "Permite consolidar faturas e aplicar políticas de segurança centralizadas",
      "Monitora vulnerabilidades em instâncias EC2"
    ],
    correctAnswer: [0, 2],
    explanation: "O AWS Organizations centraliza o gerenciamento de múltiplas contas AWS e permite consolidar faturas e políticas de segurança."
  },
  {
    id: 5,
    text: "Qual é a principal função do AWS Config?",
    options: [
      "Auditar e avaliar a conformidade de recursos da AWS",
      "Criptografar dados armazenados no Amazon S3",
      "Proteger aplicativos web contra ataques comuns",
      "Detectar atividades suspeitas na conta AWS"
    ],
    correctAnswer: 0,
    explanation: "O AWS Config audita e avalia a conformidade de recursos da AWS, ajudando a garantir que as configurações estejam em conformidade com as políticas."
  },
  {
    id: 6,
    text: "Quais são características do AWS Shield? (Escolha duas)",
    options: [
      "Proteção contra ataques DDoS",
      "Monitoramento de vulnerabilidades em instâncias EC2",
      "Serviço gerenciado de firewall para aplicativos web",
      "Disponível em duas versões: Standard e Advanced"
    ],
    correctAnswer: [0, 3],
    explanation: "O AWS Shield oferece proteção contra ataques DDoS e está disponível nas versões Standard e Advanced."
  },
  {
    id: 7,
    text: "Qual é a principal função do AWS WAF?",
    options: [
      "Proteger aplicativos web contra ataques comuns, como SQL injection",
      "Criptografar dados armazenados no Amazon S3",
      "Monitorar atividades suspeitas na conta AWS",
      "Gerenciar permissões de acesso a recursos da AWS"
    ],
    correctAnswer: 0,
    explanation: "O AWS WAF protege aplicativos web contra ataques comuns, como SQL injection e cross-site scripting (XSS)."
  },
  {
    id: 8,
    text: "Quais são benefícios do Amazon Inspector? (Escolha duas)",
    options: [
      "Detecta vulnerabilidades em instâncias EC2 e aplicativos",
      "Protege contra ataques DDoS avançados",
      "Audita a conformidade de recursos da AWS",
      "Fornece recomendações de segurança automatizadas"
    ],
    correctAnswer: [0, 3],
    explanation: "O Amazon Inspector detecta vulnerabilidades em instâncias EC2 e fornece recomendações de segurança automatizadas."
  },
  {
    id: 9,
    text: "Qual é a principal função do AWS Artifact?",
    options: [
      "Fornecer relatórios de conformidade e documentação de segurança",
      "Monitorar atividades suspeitas na conta AWS",
      "Criptografar dados armazenados no Amazon S3",
      "Proteger aplicativos web contra ataques comuns"
    ],
    correctAnswer: 0,
    explanation: "O AWS Artifact fornece relatórios de conformidade e documentação de segurança para ajudar a atender requisitos regulatórios."
  },
  {
    id: 10,
    text: "Quais são benefícios do AWS Trusted Advisor? (Escolha duas)",
    options: [
      "Fornece recomendações para otimizar custos e segurança",
      "Protege contra ataques DDoS avançados",
      "Audita a conformidade de recursos da AWS",
      "Monitora vulnerabilidades em instâncias EC2"
    ],
    correctAnswer: [0, 1],
    explanation: "O AWS Trusted Advisor fornece recomendações para otimizar custos, segurança e desempenho na AWS."
  },
  {
    id: 11,
    text: "Qual é a principal função do AWS IAM Policy?",
    options: [
      "Definir permissões para usuários, grupos e roles na AWS",
      "Criptografar dados armazenados no Amazon S3",
      "Monitorar atividades suspeitas na conta AWS",
      "Detectar vulnerabilidades em instâncias EC2"
    ],
    correctAnswer: 0,
    explanation: "O AWS IAM Policy define permissões para usuários, grupos e roles, controlando o acesso a recursos da AWS."
  },
  {
    id: 12,
    text: "Quais são características do AWS KMS? (Escolha duas)",
    options: [
      "Permite criar e gerenciar chaves de criptografia",
      "Integra-se com serviços da AWS para criptografia de dados",
      "Monitora atividades suspeitas na conta AWS",
      "Fornece proteção contra ataques DDoS"
    ],
    correctAnswer: [0, 1],
    explanation: "O AWS KMS permite criar e gerenciar chaves de criptografia e integra-se com serviços da AWS para proteger dados."
  },
  {
    id: 13,
    text: "Qual é a principal função do AWS Organizations SCP?",
    options: [
      "Aplicar políticas de segurança centralizadas em múltiplas contas AWS",
      "Criptografar dados armazenados no Amazon S3",
      "Monitorar atividades suspeitas na conta AWS",
      "Detectar vulnerabilidades em instâncias EC2"
    ],
    correctAnswer: 0,
    explanation: "O AWS Organizations SCP aplica políticas de segurança centralizadas em múltiplas contas AWS."
  },
  {
    id: 14,
    text: "Quais são benefícios do AWS Config Rules? (Escolha duas)",
    options: [
      "Auditar a conformidade de recursos da AWS",
      "Automatizar a correção de configurações não conformes",
      "Proteger aplicativos web contra ataques comuns",
      "Monitorar atividades suspeitas na conta AWS"
    ],
    correctAnswer: [0, 1],
    explanation: "O AWS Config Rules audita a conformidade de recursos e pode automatizar a correção de configurações não conformes."
  },
  {
    id: 15,
    text: "Qual é a principal função do AWS Shield Advanced?",
    options: [
      "Fornecer proteção avançada contra ataques DDoS",
      "Auditar a conformidade de recursos da AWS",
      "Criptografar dados armazenados no Amazon S3",
      "Monitorar vulnerabilidades em instâncias EC2"
    ],
    correctAnswer: 0,
    explanation: "O AWS Shield Advanced oferece proteção avançada contra ataques DDoS, com suporte 24/7 e proteção financeira."
  },
  {
    id: 16,
    text: "Quais são características do AWS WAF? (Escolha duas)",
    options: [
      "Protege aplicativos web contra ataques comuns",
      "Permite criar regras personalizadas para filtrar tráfego",
      "Criptografa dados armazenados no Amazon S3",
      "Monitora atividades suspeitas na conta AWS"
    ],
    correctAnswer: [0, 1],
    explanation: "O AWS WAF protege aplicativos web contra ataques comuns e permite criar regras personalizadas para filtrar tráfego."
  },
  {
    id: 17,
    text: "Qual é a principal função do Amazon Inspector?",
    options: [
      "Detectar vulnerabilidades em instâncias EC2 e aplicativos",
      "Proteger contra ataques DDoS avançados",
      "Auditar a conformidade de recursos da AWS",
      "Criptografar dados armazenados no Amazon S3"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Inspector detecta vulnerabilidades em instâncias EC2 e aplicativos, fornecendo recomendações de segurança."
  },
  {
    id: 18,
    text: "Quais são benefícios do AWS Artifact? (Escolha duas)",
    options: [
      "Fornece relatórios de conformidade e documentação de segurança",
      "Monitora atividades suspeitas na conta AWS",
      "Criptografa dados armazenados no Amazon S3",
      "Protege aplicativos web contra ataques comuns"
    ],
    correctAnswer: [0, 1],
    explanation: "O AWS Artifact fornece relatórios de conformidade e documentação de segurança, ajudando a atender requisitos regulatórios."
  },
  {
    id: 19,
    text: "Qual é a principal função do AWS Trusted Advisor?",
    options: [
      "Fornecer recomendações para otimizar custos, segurança e desempenho",
      "Proteger contra ataques DDoS avançados",
      "Auditar a conformidade de recursos da AWS",
      "Monitorar vulnerabilidades em instâncias EC2"
    ],
    correctAnswer: 0,
    explanation: "O AWS Trusted Advisor fornece recomendações para otimizar custos, segurança e desempenho na AWS."
  },
  {
    id: 20,
    text: "Quais são características do AWS IAM Roles? (Escolha duas)",
    options: [
      "Permitem delegar acesso a serviços e recursos da AWS",
      "São usadas apenas para usuários humanos",
      "Podem ser assumidas por serviços da AWS, como EC2 e Lambda",
      "Requerem configuração manual de chaves de criptografia"
    ],
    correctAnswer: [0, 2],
    explanation: "O AWS IAM Roles permitem delegar acesso a serviços e recursos e podem ser assumidas por serviços da AWS, como EC2 e Lambda."
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