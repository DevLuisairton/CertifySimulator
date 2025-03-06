const originalQuestions = [
  {
    id: 1,
    text: "Qual recurso da Amazon VPC permite que instâncias em uma sub-rede privada acessem a internet?",
    options: [
      "Internet Gateway (IGW)",
      "NAT Gateway",
      "Elastic Load Balancer",
      "Security Group"
    ],
    correctAnswer: 1,
    explanation: "O NAT Gateway permite que instâncias em sub-redes privadas acessem a internet enquanto impedem conexões externas diretas."
  },
  {
    id: 2,
    text: "Quais das seguintes afirmações sobre Security Groups e Network ACLs são verdadeiras? (Escolha duas)",
    options: [
      "Security Groups são stateful, enquanto Network ACLs são stateless",
      "Network ACLs aplicam regras somente a tráfego de entrada",
      "Security Groups permitem tráfego apenas quando há uma regra explícita",
      "Network ACLs são específicas para cada instância dentro da VPC"
    ],
    correctAnswer: [0, 2],
    explanation: "Security Groups são stateful e permitem tráfego apenas quando há regras explícitas, enquanto Network ACLs são stateless e controlam tráfego de entrada e saída."
  },
  {
    id: 3,
    text: "Qual é a função de um Internet Gateway (IGW) em uma VPC?",
    options: [
      "Permitir comunicação entre instâncias em sub-redes privadas",
      "Fornecer acesso à internet para instâncias em sub-redes públicas",
      "Criptografar o tráfego entre instâncias EC2",
      "Balancear carga entre múltiplas sub-redes"
    ],
    correctAnswer: 1,
    explanation: "O Internet Gateway permite que instâncias em sub-redes públicas acessem a internet."
  },
  {
    id: 4,
    text: "Quais são características do Elastic Load Balancing (ELB)? (Escolha duas)",
    options: [
      "Distribui tráfego entre múltiplas instâncias EC2",
      "Fornece um endereço IP estático para aplicações",
      "Opera apenas dentro de uma única sub-rede",
      "Suporta balanceamento de carga entre regiões"
    ],
    correctAnswer: [0, 3],
    explanation: "O ELB distribui tráfego entre instâncias EC2 e pode operar entre múltiplas regiões."
  },
  {
    id: 5,
    text: "Qual é a principal diferença entre Security Groups e Network ACLs?",
    options: [
      "Security Groups são stateless, enquanto Network ACLs são stateful",
      "Security Groups aplicam regras apenas a tráfego de saída",
      "Network ACLs operam no nível da sub-rede, enquanto Security Groups operam no nível da instância",
      "Network ACLs são específicas para cada instância EC2"
    ],
    correctAnswer: 2,
    explanation: "Network ACLs operam no nível da sub-rede, enquanto Security Groups operam no nível da instância."
  },
  {
    id: 6,
    text: "Quais são benefícios do AWS Direct Connect? (Escolha duas)",
    options: [
      "Reduzir a latência de conexão com a AWS",
      "Fornecer uma conexão de internet pública dedicada",
      "Aumentar a segurança com conexões privadas",
      "Substituir a necessidade de uma VPC"
    ],
    correctAnswer: [0, 2],
    explanation: "O AWS Direct Connect reduz a latência e aumenta a segurança com conexões privadas."
  },
  {
    id: 7,
    text: "Qual é a função do Amazon Route 53?",
    options: [
      "Fornecer balanceamento de carga entre instâncias EC2",
      "Gerenciar domínios e rotear tráfego para recursos AWS",
      "Criptografar o tráfego entre sub-redes",
      "Automatizar a criação de sub-redes"
    ],
    correctAnswer: 1,
    explanation: "O Amazon Route 53 gerencia domínios e roteia tráfego para recursos AWS."
  },
  {
    id: 8,
    text: "Quais são características de uma sub-rede pública em uma VPC? (Escolha duas)",
    options: [
      "Pode acessar a internet diretamente via Internet Gateway",
      "É usada apenas para instâncias que não precisam de acesso à internet",
      "Pode ter um NAT Gateway para acesso à internet",
      "Não pode ser associada a um Security Group"
    ],
    correctAnswer: [0, 2],
    explanation: "Sub-redes públicas podem acessar a internet via Internet Gateway e podem usar NAT Gateway."
  },
  {
    id: 9,
    text: "Qual é a função de um NAT Gateway em uma VPC?",
    options: [
      "Permitir que instâncias em sub-redes públicas acessem a internet",
      "Permitir que instâncias em sub-redes privadas acessem a internet",
      "Criptografar o tráfego entre sub-redes",
      "Fornecer balanceamento de carga entre instâncias EC2"
    ],
    correctAnswer: 1,
    explanation: "O NAT Gateway permite que instâncias em sub-redes privadas acessem a internet."
  },
  {
    id: 10,
    text: "Quais são benefícios do AWS VPN? (Escolha duas)",
    options: [
      "Fornecer uma conexão segura entre a rede local e a VPC",
      "Reduzir custos de transferência de dados",
      "Substituir a necessidade de um Internet Gateway",
      "Criptografar o tráfego entre instâncias EC2"
    ],
    correctAnswer: [0, 1],
    explanation: "O AWS VPN fornece conexões seguras e pode reduzir custos de transferência de dados."
  },
  {
    id: 11,
    text: "Qual é a função de um Security Group em uma VPC?",
    options: [
      "Controlar o tráfego de entrada e saída no nível da sub-rede",
      "Controlar o tráfego de entrada e saída no nível da instância",
      "Fornecer balanceamento de carga entre instâncias EC2",
      "Criptografar o tráfego entre sub-redes"
    ],
    correctAnswer: 1,
    explanation: "Security Groups controlam o tráfego de entrada e saída no nível da instância."
  },
  {
    id: 12,
    text: "Quais são características do Amazon Route 53? (Escolha duas)",
    options: [
      "Fornece balanceamento de carga global",
      "Opera apenas dentro de uma única região",
      "Gerencia domínios e roteia tráfego para recursos AWS",
      "Substitui a necessidade de um Internet Gateway"
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon Route 53 fornece balanceamento de carga global e gerencia domínios."
  },
  {
    id: 13,
    text: "Qual é a função de um Elastic Load Balancer (ELB)?",
    options: [
      "Criptografar o tráfego entre sub-redes",
      "Distribuir tráfego entre múltiplas instâncias EC2",
      "Fornecer acesso à internet para sub-redes privadas",
      "Automatizar a criação de sub-redes"
    ],
    correctAnswer: 1,
    explanation: "O ELB distribui tráfego entre múltiplas instâncias EC2."
  },
  {
    id: 14,
    text: "Quais são benefícios do AWS Direct Connect? (Escolha duas)",
    options: [
      "Reduzir a latência de conexão com a AWS",
      "Fornecer uma conexão de internet pública dedicada",
      "Aumentar a segurança com conexões privadas",
      "Substituir a necessidade de uma VPC"
    ],
    correctAnswer: [0, 2],
    explanation: "O AWS Direct Connect reduz a latência e aumenta a segurança com conexões privadas."
  },
  {
    id: 15,
    text: "Qual é a função de um Network ACL em uma VPC?",
    options: [
      "Controlar o tráfego de entrada e saída no nível da instância",
      "Controlar o tráfego de entrada e saída no nível da sub-rede",
      "Fornecer balanceamento de carga entre instâncias EC2",
      "Criptografar o tráfego entre sub-redes"
    ],
    correctAnswer: 1,
    explanation: "Network ACLs controlam o tráfego de entrada e saída no nível da sub-rede."
  },
  {
    id: 16,
    text: "Quais são características de uma sub-rede privada em uma VPC? (Escolha duas)",
    options: [
      "Pode acessar a internet diretamente via Internet Gateway",
      "Não pode acessar a internet diretamente",
      "Pode usar um NAT Gateway para acesso à internet",
      "Não pode ser associada a um Security Group"
    ],
    correctAnswer: [1, 2],
    explanation: "Sub-redes privadas não podem acessar a internet diretamente, mas podem usar um NAT Gateway."
  },
  {
    id: 17,
    text: "Qual é a função de um Internet Gateway (IGW) em uma VPC?",
    options: [
      "Permitir comunicação entre instâncias em sub-redes privadas",
      "Fornecer acesso à internet para instâncias em sub-redes públicas",
      "Criptografar o tráfego entre instâncias EC2",
      "Balancear carga entre múltiplas sub-redes"
    ],
    correctAnswer: 1,
    explanation: "O Internet Gateway permite que instâncias em sub-redes públicas acessem a internet."
  },
  {
    id: 18,
    text: "Quais são benefícios do AWS VPN? (Escolha duas)",
    options: [
      "Fornecer uma conexão segura entre a rede local e a VPC",
      "Reduzir custos de transferência de dados",
      "Substituir a necessidade de um Internet Gateway",
      "Criptografar o tráfego entre instâncias EC2"
    ],
    correctAnswer: [0, 1],
    explanation: "O AWS VPN fornece conexões seguras e pode reduzir custos de transferência de dados."
  },
  {
    id: 19,
    text: "Qual é a função de um Security Group em uma VPC?",
    options: [
      "Controlar o tráfego de entrada e saída no nível da sub-rede",
      "Controlar o tráfego de entrada e saída no nível da instância",
      "Fornecer balanceamento de carga entre instâncias EC2",
      "Criptografar o tráfego entre sub-redes"
    ],
    correctAnswer: 1,
    explanation: "Security Groups controlam o tráfego de entrada e saída no nível da instância."
  },
  {
    id: 20,
    text: "Qual é a função do Amazon Route 53?",
    options: [
      "Fornecer balanceamento de carga entre instâncias EC2",
      "Gerenciar domínios e rotear tráfego para recursos AWS",
      "Criptografar o tráfego entre sub-redes",
      "Automatizar a criação de sub-redes"
    ],
    correctAnswer: 1,
    explanation: "O Amazon Route 53 gerencia domínios e roteia tráfego para recursos AWS."
  }
];

// Lista de questões ativa (será embaralhada)
let questions = [...originalQuestions];

// Estado do simulado
const examState = {
  currentQuestionIndex: 0,
  answers: {},
  markedForReview: new Set(),
  timeRemaining: 30 * 60, // 90 minutos em segundos
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
  examState.timeRemaining = 90 * 60;
  examState.examFinished = false;

  // Reembaralhar questões usando original
  questions = shuffleArray([...originalQuestions]);

  // Resetar UI
  timerDisplay.textContent = formatTime(examState.timeRemaining);
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