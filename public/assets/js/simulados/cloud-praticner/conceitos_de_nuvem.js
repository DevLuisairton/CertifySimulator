const originalQuestions = [
  {
    id: 1,
    text: "Qual é um dos principais benefícios da nuvem AWS em termos de custos?",
    options: [
      "Custos fixos e previsíveis",
      "Redução de despesas de capital (CapEx)",
      "Necessidade de investimento inicial em hardware",
      "Custos operacionais mais altos"
    ],
    correctAnswer: 1,
    explanation: "A AWS reduz despesas de capital (CapEx) ao eliminar a necessidade de investimento inicial em hardware, permitindo que os usuários paguem apenas pelo que utilizam."
  },
  {
    id: 2,
    text: "Qual é um benefício da infraestrutura global da AWS?",
    options: [
      "Limitação geográfica",
      "Velocidade de implantação reduzida",
      "Alcance global e baixa latência",
      "Dependência de data centers locais"
    ],
    correctAnswer: 2,
    explanation: "A infraestrutura global da AWS oferece alcance global e baixa latência, permitindo que aplicações atendam usuários em todo o mundo de forma eficiente."
  },
  {
    id: 3,
    text: "O que a elasticidade na nuvem AWS permite?",
    options: [
      "Manter recursos fixos independentemente da demanda",
      "Escalar recursos para cima ou para baixo conforme a necessidade",
      "Limitar o crescimento da infraestrutura",
      "Aumentar custos operacionais"
    ],
    correctAnswer: 1,
    explanation: "A elasticidade permite escalar recursos para cima ou para baixo conforme a necessidade, garantindo que você pague apenas pelo que usar e evite desperdícios."
  },
  {
    id: 4,
    text: "Qual pilar do AWS Well-Architected Framework se concentra em proteger informações e sistemas?",
    options: [
      "Excelência operacional",
      "Segurança",
      "Confiabilidade",
      "Eficiência de desempenho"
    ],
    correctAnswer: 1,
    explanation: "O pilar de Segurança do AWS Well-Architected Framework foca em proteger informações e sistemas, garantindo a confidencialidade, integridade e disponibilidade dos dados."
  },
  {
    id: 5,
    text: "Qual pilar do AWS Well-Architected Framework se concentra em garantir que os sistemas funcionem conforme o esperado?",
    options: [
      "Excelência operacional",
      "Segurança",
      "Confiabilidade",
      "Otimização de custos"
    ],
    correctAnswer: 2,
    explanation: "O pilar de Confiabilidade garante que os sistemas funcionem conforme o esperado, com alta disponibilidade, recuperação de desastres e escalabilidade."
  },
  {
    id: 6,
    text: "Qual é um dos benefícios do AWS Cloud Adoption Framework (AWS CAF)?",
    options: [
      "Aumento do risco comercial",
      "Redução da eficiência operacional",
      "Melhoria do desempenho em ESG (ambiental, social e de governança)",
      "Diminuição da receita"
    ],
    correctAnswer: 2,
    explanation: "O AWS CAF ajuda as empresas a melhorar seu desempenho em ESG, alinhando práticas de negócios com princípios de sustentabilidade e governança."
  },
  {
    id: 7,
    text: "Qual estratégia de migração para a nuvem AWS envolve a replicação de bancos de dados?",
    options: [
      "Rehosting (lift-and-shift)",
      "Replatforming",
      "Refactoring",
      "Retire"
    ],
    correctAnswer: 1,
    explanation: "O Replatforming envolve a replicação de bancos de dados e a otimização de aplicações para a nuvem, sem uma reescrita completa."
  },
  {
    id: 8,
    text: "Qual serviço da AWS é usado para migrar grandes volumes de dados para a nuvem de forma offline?",
    options: [
      "AWS Snowball",
      "AWS Direct Connect",
      "AWS DataSync",
      "AWS Transfer Family"
    ],
    correctAnswer: 0,
    explanation: "O AWS Snowball é usado para migrar grandes volumes de dados para a nuvem de forma offline, ideal para transferências de dados em larga escala."
  },
  {
    id: 9,
    text: "Qual é a diferença entre custos fixos e custos variáveis na nuvem?",
    options: [
      "Custos fixos mudam com o uso, enquanto custos variáveis são constantes",
      "Custos fixos são constantes, enquanto custos variáveis mudam com o uso",
      "Ambos são sempre constantes",
      "Ambos mudam com o uso"
    ],
    correctAnswer: 1,
    explanation: "Custos fixos são constantes, enquanto custos variáveis mudam com o uso. Na nuvem, a maioria dos custos é variável, permitindo maior flexibilidade."
  },
  {
    id: 10,
    text: "Qual é um dos benefícios da automação na nuvem AWS?",
    options: [
      "Aumento do tempo de provisionamento",
      "Redução da eficiência operacional",
      "Gerenciamento simplificado de provisionamento e configuração",
      "Dependência de intervenção manual"
    ],
    correctAnswer: 2,
    explanation: "A automação na AWS simplifica o gerenciamento de provisionamento e configuração, reduzindo erros humanos e aumentando a eficiência operacional."
  },
  {
    id: 11,
    text: "Qual serviço da AWS é um exemplo de serviço gerenciado?",
    options: [
      "Amazon EC2",
      "Amazon RDS",
      "AWS Lambda",
      "Amazon S3"
    ],
    correctAnswer: 1,
    explanation: "O Amazon RDS é um exemplo de serviço gerenciado, onde a AWS cuida da administração do banco de dados, como backups, patches e escalabilidade."
  },
  {
    id: 12,
    text: "Qual é um dos benefícios do modelo Bring-Your-Own-License (BYOL)?",
    options: [
      "Necessidade de comprar novas licenças",
      "Uso de licenças existentes na nuvem",
      "Limitação de flexibilidade",
      "Aumento de custos de licenciamento"
    ],
    correctAnswer: 1,
    explanation: "O modelo BYOL permite o uso de licenças existentes na nuvem, reduzindo custos e maximizando o investimento em software já adquirido."
  },
  {
    id: 13,
    text: "O que significa dimensionamento correto (right-sizing) na nuvem AWS?",
    options: [
      "Provisionar mais recursos do que o necessário",
      "Ajustar os recursos para atender às necessidades reais",
      "Ignorar a otimização de custos",
      "Manter recursos subutilizados"
    ],
    correctAnswer: 1,
    explanation: "Dimensionamento correto significa ajustar os recursos para atender às necessidades reais, evitando desperdícios e otimizando custos."
  },
  {
    id: 14,
    text: "Qual é um dos benefícios da alta disponibilidade na nuvem AWS?",
    options: [
      "Tempo de inatividade prolongado",
      "Redundância e tolerância a falhas",
      "Dependência de um único data center",
      "Aumento do risco de falhas"
    ],
    correctAnswer: 1,
    explanation: "A alta disponibilidade na AWS é alcançada através de redundância e tolerância a falhas, garantindo que os sistemas permaneçam operacionais mesmo em caso de falhas."
  },
  {
    id: 15,
    text: "Qual pilar do AWS Well-Architected Framework se concentra em otimizar o uso de recursos para reduzir custos?",
    options: [
      "Excelência operacional",
      "Segurança",
      "Confiabilidade",
      "Otimização de custos"
    ],
    correctAnswer: 3,
    explanation: "O pilar de Otimização de Custos foca em otimizar o uso de recursos para reduzir custos, garantindo que você pague apenas pelo que realmente precisa."
  },
  {
    id: 16,
    text: "Qual é um dos benefícios da agilidade na nuvem AWS?",
    options: [
      "Lentidão na implementação de mudanças",
      "Capacidade de inovar e experimentar rapidamente",
      "Dependência de processos manuais",
      "Aumento do tempo de lançamento no mercado"
    ],
    correctAnswer: 1,
    explanation: "A agilidade na AWS permite que as empresas inovem e experimentem rapidamente, reduzindo o tempo de lançamento de novos produtos e serviços."
  },
  {
    id: 17,
    text: "Qual é um dos benefícios do AWS Cloud Adoption Framework (AWS CAF) para empresas?",
    options: [
      "Aumento do risco comercial",
      "Redução da eficiência operacional",
      "Melhoria do desempenho em ESG (ambiental, social e de governança)",
      "Diminuição da receita"
    ],
    correctAnswer: 2,
    explanation: "O AWS CAF ajuda as empresas a melhorar seu desempenho em ESG, alinhando práticas de negócios com princípios de sustentabilidade e governança."
  },
  {
    id: 18,
    text: "Qual é um dos benefícios da infraestrutura global da AWS para empresas?",
    options: [
      "Limitação geográfica",
      "Velocidade de implantação reduzida",
      "Alcance global e baixa latência",
      "Dependência de data centers locais"
    ],
    correctAnswer: 2,
    explanation: "A infraestrutura global da AWS oferece alcance global e baixa latência, permitindo que as empresas atendam clientes em todo o mundo de forma eficiente."
  },
  {
    id: 19,
    text: "Qual é um dos benefícios da elasticidade na nuvem AWS para empresas?",
    options: [
      "Manter recursos fixos independentemente da demanda",
      "Escalar recursos para cima ou para baixo conforme a necessidade",
      "Limitar o crescimento da infraestrutura",
      "Aumentar custos operacionais"
    ],
    correctAnswer: 1,
    explanation: "A elasticidade permite que as empresas escalem recursos conforme a demanda, garantindo eficiência e redução de custos."
  },
  {
    id: 20,
    text: "Qual é um dos benefícios da automação na nuvem AWS para empresas?",
    options: [
      "Aumento do tempo de provisionamento",
      "Redução da eficiência operacional",
      "Gerenciamento simplificado de provisionamento e configuração",
      "Dependência de intervenção manual"
    ],
    correctAnswer: 2,
    explanation: "A automação simplifica o gerenciamento de provisionamento e configuração, aumentando a eficiência operacional e reduzindo erros humanos."
  },
  {
    id: 21,
    text: "Qual é um dos benefícios do modelo Bring-Your-Own-License (BYOL) para empresas?",
    options: [
      "Necessidade de comprar novas licenças",
      "Uso de licenças existentes na nuvem",
      "Limitação de flexibilidade",
      "Aumento de custos de licenciamento"
    ],
    correctAnswer: 1,
    explanation: "O modelo BYOL permite que as empresas utilizem licenças de software já adquiridas na nuvem, reduzindo custos e maximizando o investimento existente."
  },
  {
    id: 22,
    text: "O que significa dimensionamento correto (right-sizing) na nuvem AWS para empresas?",
    options: [
      "Provisionar mais recursos do que o necessário",
      "Ajustar os recursos para atender às necessidades reais",
      "Ignorar a otimização de custos",
      "Manter recursos subutilizados"
    ],
    correctAnswer: 1,
    explanation: "O dimensionamento correto (right-sizing) envolve ajustar os recursos para atender às necessidades reais, evitando desperdícios e otimizando custos."
  },
  {
    id: 23,
    text: "Qual é um dos benefícios da alta disponibilidade na nuvem AWS para empresas?",
    options: [
      "Tempo de inatividade prolongado",
      "Redundância e tolerância a falhas",
      "Dependência de um único data center",
      "Aumento do risco de falhas"
    ],
    correctAnswer: 1,
    explanation: "A alta disponibilidade na AWS é alcançada através de redundância e tolerância a falhas, garantindo que os sistemas permaneçam operacionais mesmo em caso de falhas."
  },
  {
    id: 24,
    text: "Qual pilar do AWS Well-Architected Framework se concentra em otimizar o uso de recursos para reduzir custos?",
    options: [
      "Excelência operacional",
      "Segurança",
      "Confiabilidade",
      "Otimização de custos"
    ],
    correctAnswer: 3,
    explanation: "O pilar de Otimização de Custos foca em otimizar o uso de recursos para reduzir custos, garantindo que você pague apenas pelo que realmente precisa."
  },
  {
    id: 25,
    text: "Qual é um dos benefícios da agilidade na nuvem AWS para empresas?",
    options: [
      "Lentidão na implementação de mudanças",
      "Capacidade de inovar e experimentar rapidamente",
      "Dependência de processos manuais",
      "Aumento do tempo de lançamento no mercado"
    ],
    correctAnswer: 1,
    explanation: "A agilidade na AWS permite que as empresas inovem e experimentem rapidamente, reduzindo o tempo de lançamento de novos produtos e serviços."
  },
  {
    id: 26,
    text: "Qual é um dos principais benefícios da nuvem AWS em termos de escalabilidade?",
    options: [
      "Limitação de recursos",
      "Capacidade de escalar verticalmente e horizontalmente",
      "Dependência de hardware físico",
      "Necessidade de planejamento de capacidade a longo prazo"
    ],
    correctAnswer: 1,
    explanation: "A AWS oferece escalabilidade vertical e horizontal, permitindo que os recursos sejam ajustados conforme a demanda, sem a necessidade de investimento em hardware físico."
  },
  {
    id: 27,
    text: "Qual é um dos benefícios da infraestrutura global da AWS para aplicações distribuídas?",
    options: [
      "Aumento da latência",
      "Redução do alcance global",
      "Melhoria da experiência do usuário com baixa latência",
      "Dependência de um único data center"
    ],
    correctAnswer: 2,
    explanation: "A infraestrutura global da AWS melhora a experiência do usuário com baixa latência, garantindo que aplicações distribuídas atendam usuários em todo o mundo de forma eficiente."
  },
  {
    id: 28,
    text: "Qual é um dos pilares do AWS Well-Architected Framework que se concentra em operações eficientes?",
    options: [
      "Segurança",
      "Excelência operacional",
      "Confiabilidade",
      "Sustentabilidade"
    ],
    correctAnswer: 1,
    explanation: "O pilar de Excelência Operacional foca em operações eficientes, garantindo que os sistemas sejam executados e monitorados de forma otimizada."
  },
  {
    id: 29,
    text: "Qual é um dos benefícios do AWS Cloud Adoption Framework (AWS CAF) para a governança de TI?",
    options: [
      "Aumento da complexidade operacional",
      "Redução da visibilidade dos recursos",
      "Melhoria da governança e conformidade",
      "Diminuição da eficiência operacional"
    ],
    correctAnswer: 2,
    explanation: "O AWS CAF ajuda a melhorar a governança e conformidade, fornecendo diretrizes para alinhar a infraestrutura de TI com as necessidades de negócios e regulamentações."
  },
  {
    id: 30,
    text: "Qual estratégia de migração para a nuvem AWS envolve a reescrita completa de um aplicativo?",
    options: [
      "Rehosting (lift-and-shift)",
      "Replatforming",
      "Refactoring",
      "Retire"
    ],
    correctAnswer: 2,
    explanation: "O Refactoring envolve a reescrita completa de um aplicativo para aproveitar ao máximo os benefícios da nuvem, como escalabilidade e serviços gerenciados."
  },
  {
    id: 31,
    text: "Qual serviço da AWS é usado para migrar grandes volumes de dados para a nuvem de forma offline?",
    options: [
      "AWS Snowball",
      "AWS Direct Connect",
      "AWS DataSync",
      "AWS Transfer Family"
    ],
    correctAnswer: 0,
    explanation: "O AWS Snowball é usado para migrar grandes volumes de dados para a nuvem de forma offline, ideal para transferências de dados em larga escala."
  },
  {
    id: 32,
    text: "Qual é um dos benefícios da automação na nuvem AWS?",
    options: [
      "Aumento do tempo de provisionamento",
      "Redução da eficiência operacional",
      "Gerenciamento simplificado de provisionamento e configuração",
      "Dependência de intervenção manual"
    ],
    correctAnswer: 2,
    explanation: "A automação na AWS simplifica o gerenciamento de provisionamento e configuração, reduzindo erros humanos e aumentando a eficiência operacional."
  },
  {
    id: 33,
    text: "Qual é um dos benefícios do modelo Bring-Your-Own-License (BYOL)?",
    options: [
      "Necessidade de comprar novas licenças",
      "Uso de licenças existentes na nuvem",
      "Limitação de flexibilidade",
      "Aumento de custos de licenciamento"
    ],
    correctAnswer: 1,
    explanation: "O modelo BYOL permite o uso de licenças de software já adquiridas na nuvem, reduzindo custos e maximizando o investimento existente."
  },
  {
    id: 34,
    text: "O que significa dimensionamento correto (right-sizing) na nuvem AWS?",
    options: [
      "Provisionar mais recursos do que o necessário",
      "Ajustar os recursos para atender às necessidades reais",
      "Ignorar a otimização de custos",
      "Manter recursos subutilizados"
    ],
    correctAnswer: 1,
    explanation: "O dimensionamento correto (right-sizing) envolve ajustar os recursos para atender às necessidades reais, evitando desperdícios e otimizando custos."
  },
  {
    id: 35,
    text: "Qual é um dos benefícios da alta disponibilidade na nuvem AWS?",
    options: [
      "Tempo de inatividade prolongado",
      "Redundância e tolerância a falhas",
      "Dependência de um único data center",
      "Aumento do risco de falhas"
    ],
    correctAnswer: 1,
    explanation: "A alta disponibilidade na AWS é alcançada através de redundância e tolerância a falhas, garantindo que os sistemas permaneçam operacionais mesmo em caso de falhas."
  },
  {
    id: 36,
    text: "Qual pilar do AWS Well-Architected Framework se concentra em otimizar o uso de recursos para reduzir custos?",
    options: [
      "Excelência operacional",
      "Segurança",
      "Confiabilidade",
      "Otimização de custos"
    ],
    correctAnswer: 3,
    explanation: "O pilar de Otimização de Custos foca em otimizar o uso de recursos para reduzir custos, garantindo que você pague apenas pelo que realmente precisa."
  },
  {
    id: 37,
    text: "Qual é um dos benefícios da agilidade na nuvem AWS?",
    options: [
      "Lentidão na implementação de mudanças",
      "Capacidade de inovar e experimentar rapidamente",
      "Dependência de processos manuais",
      "Aumento do tempo de lançamento no mercado"
    ],
    correctAnswer: 1,
    explanation: "A agilidade na AWS permite que as empresas inovem e experimentem rapidamente, reduzindo o tempo de lançamento de novos produtos e serviços."
  },
  {
    id: 38,
    text: "Qual é um dos benefícios do AWS Cloud Adoption Framework (AWS CAF) para empresas?",
    options: [
      "Aumento do risco comercial",
      "Redução da eficiência operacional",
      "Melhoria do desempenho em ESG (ambiental, social e de governança)",
      "Diminuição da receita"
    ],
    correctAnswer: 2,
    explanation: "O AWS CAF ajuda as empresas a melhorar seu desempenho em ESG, alinhando práticas de negócios com princípios de sustentabilidade e governança."
  },
  {
    id: 39,
    text: "Qual é um dos benefícios da infraestrutura global da AWS para empresas?",
    options: [
      "Limitação geográfica",
      "Velocidade de implantação reduzida",
      "Alcance global e baixa latência",
      "Dependência de data centers locais"
    ],
    correctAnswer: 2,
    explanation: "A infraestrutura global da AWS oferece alcance global e baixa latência, permitindo que as empresas atendam clientes em todo o mundo de forma eficiente."
  },
  {
    id: 40,
    text: "Qual é um dos benefícios da elasticidade na nuvem AWS para empresas?",
    options: [
      "Manter recursos fixos independentemente da demanda",
      "Escalar recursos para cima ou para baixo conforme a necessidade",
      "Limitar o crescimento da infraestrutura",
      "Aumentar custos operacionais"
    ],
    correctAnswer: 1,
    explanation: "A elasticidade permite que as empresas escalem recursos conforme a demanda, garantindo eficiência e redução de custos."
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
