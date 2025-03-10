const originalQuestions = [
  {
    id: 1,
    text: "Quais são os dois pilares do AWS Cloud Adoption Framework (CAF) que se concentram em pessoas e processos? (Escolha duas)",
    options: [
      "Pilar de Negócios",
      "Pilar de Governança",
      "Pilar de Operações",
      "Pilar de Plataforma"
    ],
    correctAnswer: [0, 1],
    explanation: "O pilar de Negócios e o pilar de Governança do AWS CAF focam em pessoas e processos, ajudando as organizações a alinhar estratégias de negócios e governança com a adoção da nuvem."
  },
  {
    id: 2,
    text: "Quais dos seguintes são dois dos 6 Rs de migração para a nuvem? (Escolha duas)",
    options: [
      "Rehost (Lift and Shift)",
      "Reinvent",
      "Retain",
      "Replicate"
    ],
    correctAnswer: [0, 2],
    explanation: "Rehost (Lift and Shift) e Retain são dois dos 6 Rs de migração. Rehost envolve mover aplicações sem modificações, enquanto Retain significa manter a aplicação no ambiente atual."
  },
  {
    id: 3,
    text: "Quais das seguintes afirmações sobre a família AWS Snow estão corretas? (Escolha duas)",
    options: [
      "O AWS Snowball é usado para transferir grandes volumes de dados para a nuvem.",
      "O AWS Snowcone é projetado para ambientes com espaço limitado e baixa largura de banda.",
      "O AWS Snowmobile é usado apenas para transferir dados para o Google Cloud.",
      "O AWS Snowball Edge não suporta processamento de dados local."
    ],
    correctAnswer: [0, 1],
    explanation: "O AWS Snowball é usado para transferir grandes volumes de dados, e o AWS Snowcone é projetado para ambientes com espaço limitado e baixa largura de banda."
  },
  {
    id: 4,
    text: "Quais das seguintes afirmações sobre o Amazon SageMaker estão corretas? (Escolha duas)",
    options: [
      "O Amazon SageMaker é um serviço totalmente gerenciado para machine learning.",
      "O Amazon SageMaker não suporta frameworks de deep learning como TensorFlow e PyTorch.",
      "O Amazon SageMaker inclui ferramentas para preparação de dados, treinamento e implantação de modelos.",
      "O Amazon SageMaker é usado apenas para análise de dados em tempo real."
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon SageMaker é um serviço totalmente gerenciado para machine learning e inclui ferramentas para preparação de dados, treinamento e implantação de modelos."
  },
  {
    id: 5,
    text: "Quais das seguintes afirmações sobre o Amazon Augmented AI (A2I) estão corretas? (Escolha duas)",
    options: [
      "O Amazon A2I permite adicionar revisão humana a previsões de machine learning.",
      "O Amazon A2I é usado apenas para automação de processos sem intervenção humana.",
      "O Amazon A2I integra-se com serviços como Amazon Rekognition e Amazon Textract.",
      "O Amazon A2I não suporta workflows personalizados."
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon A2I permite adicionar revisão humana a previsões de machine learning e integra-se com serviços como Amazon Rekognition e Amazon Textract."
  },
  {
    id: 6,
    text: "Quais das seguintes afirmações sobre o Amazon Lex estão corretas? (Escolha duas)",
    options: [
      "O Amazon Lex é usado para criar chatbots e interfaces de voz.",
      "O Amazon Lex não suporta integração com o Amazon Polly.",
      "O Amazon Lex é baseado na mesma tecnologia do Alexa.",
      "O Amazon Lex é usado apenas para análise de dados estruturados."
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon Lex é usado para criar chatbots e interfaces de voz e é baseado na mesma tecnologia do Alexa."
  },
  {
    id: 7,
    text: "Quais das seguintes afirmações sobre o Amazon Textract estão corretas? (Escolha duas)",
    options: [
      "O Amazon Textract é usado para extrair texto e dados de documentos.",
      "O Amazon Textract não suporta documentos em PDF.",
      "O Amazon Textract pode identificar campos e tabelas em formulários.",
      "O Amazon Textract é usado apenas para processamento de imagens."
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon Textract é usado para extrair texto e dados de documentos e pode identificar campos e tabelas em formulários."
  },
  {
    id: 8,
    text: "Quais das seguintes afirmações sobre o AWS DeepRacer estão corretas? (Escolha duas)",
    options: [
      "O AWS DeepRacer é uma plataforma de aprendizado por reforço para machine learning.",
      "O AWS DeepRacer é usado apenas para treinamento de modelos de visão computacional.",
      "O AWS DeepRacer inclui competições para aprimorar habilidades em machine learning.",
      "O AWS DeepRacer não suporta integração com o Amazon SageMaker."
    ],
    correctAnswer: [0, 2],
    explanation: "O AWS DeepRacer é uma plataforma de aprendizado por reforço e inclui competições para aprimorar habilidades em machine learning."
  },
  {
    id: 9,
    text: "Quais das seguintes afirmações sobre o AWS IoT estão corretas? (Escolha duas)",
    options: [
      "O AWS IoT Core permite conectar dispositivos IoT à nuvem.",
      "O AWS IoT não suporta integração com o Amazon S3.",
      "O AWS IoT Greengrass permite processamento de dados local em dispositivos IoT.",
      "O AWS IoT é usado apenas para análise de dados em batch."
    ],
    correctAnswer: [0, 2],
    explanation: "O AWS IoT Core permite conectar dispositivos IoT à nuvem, e o AWS IoT Greengrass permite processamento de dados local em dispositivos IoT."
  },
  {
    id: 10,
    text: "Quais das seguintes afirmações sobre o AWS Ground Station estão corretas? (Escolha duas)",
    options: [
      "O AWS Ground Station é usado para receber e processar dados de satélites.",
      "O AWS Ground Station não suporta integração com o Amazon S3.",
      "O AWS Ground Station permite controle de satélites em órbita.",
      "O AWS Ground Station é usado apenas para comunicações terrestres."
    ],
    correctAnswer: [0, 2],
    explanation: "O AWS Ground Station é usado para receber e processar dados de satélites e permite controle de satélites em órbita."
  },
  {
    id: 11,
    text: "Quais das seguintes afirmações sobre o VMware Cloud on AWS estão corretas? (Escolha duas)",
    options: [
      "O VMware Cloud on AWS permite executar workloads VMware na nuvem da AWS.",
      "O VMware Cloud on AWS não suporta migração de máquinas virtuais do VMware.",
      "O VMware Cloud on AWS é uma solução híbrida que integra data centers locais com a AWS.",
      "O VMware Cloud on AWS é usado apenas para desenvolvimento de aplicativos nativos da AWS."
    ],
    correctAnswer: [0, 2],
    explanation: "O VMware Cloud on AWS permite executar workloads VMware na nuvem da AWS e é uma solução híbrida que integra data centers locais com a AWS."
  },
  {
    id: 12,
    text: "Quais das seguintes afirmações sobre o AWS CodeWhisperer estão corretas? (Escolha duas)",
    options: [
      "O AWS CodeWhisperer é uma ferramenta de desenvolvimento assistido por IA.",
      "O AWS CodeWhisperer não suporta linguagens de programação como Python e Java.",
      "O AWS CodeWhisperer sugere trechos de código com base no contexto do desenvolvedor.",
      "O AWS CodeWhisperer é usado apenas para análise de código estático."
    ],
    correctAnswer: [0, 2],
    explanation: "O AWS CodeWhisperer é uma ferramenta de desenvolvimento assistido por IA e sugere trechos de código com base no contexto do desenvolvedor."
  },
  {
    id: 13,
    text: "Quais dos seguintes são dois pilares do AWS Cloud Adoption Framework (CAF) que se concentram em tecnologia? (Escolha duas)",
    options: [
      "Pilar de Plataforma",
      "Pilar de Segurança",
      "Pilar de Operações",
      "Pilar de Negócios"
    ],
    correctAnswer: [0, 1],
    explanation: "O pilar de Plataforma e o pilar de Segurança do AWS CAF focam em tecnologia, ajudando a garantir que a infraestrutura e a segurança estejam alinhadas com a adoção da nuvem."
  },
  {
    id: 14,
    text: "Quais dos seguintes são dois dos 6 Rs de migração para a nuvem? (Escolha duas)",
    options: [
      "Replatform",
      "Refactor",
      "Replicate",
      "Retain"
    ],
    correctAnswer: [0, 1],
    explanation: "Replatform e Refactor são dois dos 6 Rs de migração. Replatform envolve fazer ajustes mínimos para otimizar a aplicação na nuvem, enquanto Refactor envolve reescrever partes da aplicação para aproveitar os serviços da nuvem."
  },
  {
    id: 15,
    text: "Quais das seguintes afirmações sobre o AWS CAF estão corretas? (Escolha duas)",
    options: [
      "O AWS CAF ajuda as organizações a planejar e implementar a adoção da nuvem.",
      "O AWS CAF é focado apenas em aspectos técnicos da migração.",
      "O AWS CAF inclui seis perspectivas que abrangem pessoas, processos e tecnologia.",
      "O AWS CAF não oferece orientação sobre governança de nuvem."
    ],
    correctAnswer: [0, 2],
    explanation: "O AWS CAF ajuda as organizações a planejar e implementar a adoção da nuvem e inclui seis perspectivas que abrangem pessoas, processos e tecnologia."
  },
  {
    id: 16,
    text: "Qual dos seguintes serviços da AWS é usado para treinar e implantar modelos de machine learning?",
    options: [
      "Amazon SageMaker",
      "Amazon Lex",
      "Amazon Textract",
      "AWS DeepRacer"
    ],
    correctAnswer: 0,
    explanation: "O Amazon SageMaker é usado para treinar e implantar modelos de machine learning."
  },
  {
    id: 17,
    text: "Qual dos seguintes serviços da AWS é usado para criar chatbots e interfaces de voz?",
    options: [
      "Amazon Lex",
      "Amazon Augmented AI",
      "Amazon Textract",
      "AWS IoT"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Lex é usado para criar chatbots e interfaces de voz."
  },
  {
    id: 18,
    text: "Qual dos seguintes serviços da AWS é usado para extrair texto e dados de documentos?",
    options: [
      "Amazon Textract",
      "Amazon SageMaker",
      "Amazon Augmented AI",
      "AWS DeepRacer"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Textract é usado para extrair texto e dados de documentos."
  },
  {
    id: 19,
    text: "Qual dos seguintes serviços da AWS é usado para conectar dispositivos IoT à nuvem?",
    options: [
      "AWS IoT Core",
      "AWS Ground Station",
      "VMware Cloud on AWS",
      "AWS CodeWhisperer"
    ],
    correctAnswer: 0,
    explanation: "O AWS IoT Core é usado para conectar dispositivos IoT à nuvem."
  },
  {
    id: 20,
    text: "Qual dos seguintes serviços da AWS é usado para receber e processar dados de satélites?",
    options: [
      "AWS Ground Station",
      "AWS IoT",
      "Amazon SageMaker",
      "Amazon Lex"
    ],
    correctAnswer: 0,
    explanation: "O AWS Ground Station é usado para receber e processar dados de satélites."
  },
  {
    id: 21,
    text: "Qual dos seguintes serviços da AWS é usado para executar workloads VMware na nuvem?",
    options: [
      "VMware Cloud on AWS",
      "AWS CodeWhisperer",
      "AWS DeepRacer",
      "Amazon Augmented AI"
    ],
    correctAnswer: 0,
    explanation: "O VMware Cloud on AWS é usado para executar workloads VMware na nuvem."
  },
  {
    id: 22,
    text: "Qual dos seguintes serviços da AWS é uma ferramenta de desenvolvimento assistido por IA?",
    options: [
      "AWS CodeWhisperer",
      "Amazon SageMaker",
      "Amazon Lex",
      "Amazon Textract"
    ],
    correctAnswer: 0,
    explanation: "O AWS CodeWhisperer é uma ferramenta de desenvolvimento assistido por IA."
  },
  {
    id: 23,
    text: "Qual dos seguintes serviços da AWS é usado para treinar modelos de machine learning em um carro de corrida virtual?",
    options: [
      "AWS DeepRacer",
      "Amazon SageMaker",
      "Amazon Lex",
      "Amazon Textract"
    ],
    correctAnswer: 0,
    explanation: "O AWS DeepRacer é usado para treinar modelos de machine learning em um carro de corrida virtual."
  },
  {
    id: 24,
    text: "Qual dos seguintes serviços da AWS é usado para adicionar revisão humana a previsões de machine learning?",
    options: [
      "Amazon Augmented AI",
      "Amazon SageMaker",
      "Amazon Lex",
      "Amazon Textract"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Augmented AI é usado para adicionar revisão humana a previsões de machine learning."
  },
  {
    id: 25,
    text: "Qual dos seguintes serviços da AWS é usado para processamento de dados local em dispositivos IoT?",
    options: [
      "AWS IoT Greengrass",
      "AWS IoT Core",
      "AWS Ground Station",
      "VMware Cloud on AWS"
    ],
    correctAnswer: 0,
    explanation: "O AWS IoT Greengrass é usado para processamento de dados local em dispositivos IoT."
  },
  {
    id: 26,
    text: "Qual dos seguintes serviços da AWS é usado para transferir grandes volumes de dados para a nuvem?",
    options: [
      "AWS Snowball",
      "AWS Ground Station",
      "AWS IoT Core",
      "AWS CodeWhisperer"
    ],
    correctAnswer: 0,
    explanation: "O AWS Snowball é usado para transferir grandes volumes de dados para a nuvem."
  },
  {
    id: 27,
    text: "Qual dos seguintes serviços da AWS é usado para criar e gerenciar redes blockchain?",
    options: [
      "Amazon Managed Blockchain",
      "AWS IoT",
      "Amazon SageMaker",
      "Amazon Lex"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Managed Blockchain é usado para criar e gerenciar redes blockchain."
  },
  {
    id: 28,
    text: "Qual dos seguintes serviços da AWS é usado para análise de dados em tempo real?",
    options: [
      "Amazon Kinesis",
      "Amazon SageMaker",
      "Amazon Lex",
      "Amazon Textract"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Kinesis é usado para análise de dados em tempo real."
  },
  {
    id: 29,
    text: "Qual dos seguintes serviços da AWS é usado para armazenamento de objetos escalável?",
    options: [
      "Amazon S3",
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Redshift"
    ],
    correctAnswer: 0,
    explanation: "O Amazon S3 é usado para armazenamento de objetos escalável."
  },
  {
    id: 30,
    text: "Qual dos seguintes serviços da AWS é usado para banco de dados relacional gerenciado?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Neptune"
    ],
    correctAnswer: 0,
    explanation: "O Amazon RDS é usado para banco de dados relacional gerenciado."
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