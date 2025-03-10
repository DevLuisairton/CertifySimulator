const originalQuestions = [
  {
    id: 1,
    text: "Qual modelo de precificação da AWS permite pagar apenas pelo que for consumido, sem compromissos de longo prazo?",
    options: [
      "Instâncias Reservadas (RIs)",
      "Pay-as-you-go",
      "Spot Instances",
      "Savings Plans"
    ],
    correctAnswer: 1,
    explanation: "O modelo Pay-as-you-go permite pagar apenas pelo que for consumido, oferecendo flexibilidade sem compromissos de longo prazo."
  },
  {
    id: 2,
    text: "Quais são benefícios do AWS Cost Explorer? (Escolha duas)",
    options: [
      "Permite visualizar e analisar padrões de gastos na AWS",
      "Oferece recomendações para reduzir custos com instâncias EC2",
      "Garante acesso gratuito a suporte técnico 24/7",
      "Automatiza a aplicação de limites de orçamento e alertas"
    ],
    correctAnswer: [0, 1],
    explanation: "O AWS Cost Explorer permite visualizar e analisar padrões de gastos, além de fornecer recomendações para otimização de custos."
  },
  {
    id: 3,
    text: "Qual é a principal vantagem das Instâncias Reservadas (RIs)?",
    options: [
      "Permitem pagar apenas pelo que for consumido",
      "Oferecem descontos significativos em troca de compromissos de longo prazo",
      "São ideais para workloads imprevisíveis",
      "Não exigem pagamento antecipado"
    ],
    correctAnswer: 1,
    explanation: "As Instâncias Reservadas oferecem descontos significativos em troca de compromissos de longo prazo, como pagamento antecipado ou termos de 1 ou 3 anos."
  },
  {
    id: 4,
    text: "Quais são características dos Savings Plans? (Escolha duas)",
    options: [
      "Oferecem descontos em troca de compromissos de uso contínuo",
      "São aplicáveis apenas a instâncias EC2",
      "Permitem flexibilidade para mudar tipos de instâncias e regiões",
      "Não exigem pagamento antecipado"
    ],
    correctAnswer: [0, 2],
    explanation: "Os Savings Plans oferecem descontos em troca de compromissos de uso contínuo e permitem flexibilidade para mudar tipos de instâncias e regiões."
  },
  {
    id: 5,
    text: "Qual é a principal vantagem das Spot Instances?",
    options: [
      "Garantia de disponibilidade contínua por 24 horas",
      "Custos significativamente reduzidos em comparação com instâncias On-Demand",
      "Ideal para workloads críticos que não toleram interrupções",
      "Descontos em troca de compromissos de longo prazo"
    ],
    correctAnswer: 1,
    explanation: "As Spot Instances oferecem custos significativamente reduzidos, mas podem ser interrompidas pela AWS se a capacidade for necessária para outros clientes."
  },
  {
    id: 6,
    text: "Quais são benefícios do AWS Budgets? (Escolha duas)",
    options: [
      "Permite definir limites de orçamento e receber alertas",
      "Oferece descontos automáticos em instâncias EC2",
      "Automatiza a aplicação de Savings Plans",
      "Ajuda a monitorar e controlar gastos na AWS"
    ],
    correctAnswer: [0, 3],
    explanation: "O AWS Budgets permite definir limites de orçamento, receber alertas e monitorar gastos na AWS."
  },
  {
    id: 7,
    text: "Qual é a principal função do AWS Cost and Usage Report (CUR)?",
    options: [
      "Fornecer recomendações para otimização de custos",
      "Detalhar o uso e os custos de todos os serviços da AWS",
      "Automatizar a aplicação de Savings Plans",
      "Garantir acesso gratuito a suporte técnico"
    ],
    correctAnswer: 1,
    explanation: "O AWS Cost and Usage Report detalha o uso e os custos de todos os serviços da AWS, permitindo análises detalhadas."
  },
  {
    id: 8,
    text: "Quais são benefícios do AWS Pricing Calculator? (Escolha duas)",
    options: [
      "Permite estimar custos de serviços AWS antes de usá-los",
      "Oferece descontos automáticos em instâncias EC2",
      "Automatiza a aplicação de Savings Plans",
      "Ajuda a comparar custos entre diferentes configurações de serviços"
    ],
    correctAnswer: [0, 3],
    explanation: "O AWS Pricing Calculator permite estimar custos e comparar diferentes configurações de serviços antes de usá-los."
  },
  {
    id: 9,
    text: "Qual é a principal característica do Plano Básico (Gratuito) da AWS?",
    options: [
      "Oferece acesso gratuito a suporte técnico 24/7",
      "Permite uso gratuito de serviços populares dentro de limites específicos",
      "Garante descontos automáticos em instâncias EC2",
      "Automatiza a aplicação de Savings Plans"
    ],
    correctAnswer: 1,
    explanation: "O Plano Básico (Gratuito) permite uso gratuito de serviços populares da AWS dentro de limites específicos por 12 meses."
  },
  {
    id: 10,
    text: "Quais são características do Pay-as-you-go? (Escolha duas)",
    options: [
      "Permite pagar apenas pelo que for consumido",
      "Exige compromissos de longo prazo",
      "Oferece descontos significativos em troca de uso contínuo",
      "É ideal para workloads imprevisíveis"
    ],
    correctAnswer: [0, 3],
    explanation: "O Pay-as-you-go permite pagar apenas pelo que for consumido e é ideal para workloads imprevisíveis."
  },
  {
    id: 11,
    text: "Qual é a principal vantagem das Savings Plans em relação às Instâncias Reservadas (RIs)?",
    options: [
      "Oferecem descontos maiores",
      "Permitem flexibilidade para mudar tipos de instâncias e regiões",
      "Não exigem pagamento antecipado",
      "São ideais para workloads de curta duração"
    ],
    correctAnswer: 1,
    explanation: "Os Savings Plans permitem flexibilidade para mudar tipos de instâncias e regiões, ao contrário das RIs, que são mais rígidas."
  },
  {
    id: 12,
    text: "Quais são benefícios das Spot Instances? (Escolha duas)",
    options: [
      "Custos significativamente reduzidos",
      "Garantia de disponibilidade contínua por 24 horas",
      "Ideal para workloads tolerantes a interrupções",
      "Descontos em troca de compromissos de longo prazo"
    ],
    correctAnswer: [0, 2],
    explanation: "As Spot Instances oferecem custos reduzidos e são ideais para workloads tolerantes a interrupções."
  },
  {
    id: 13,
    text: "Qual é a principal função do AWS Budgets?",
    options: [
      "Fornecer recomendações para otimização de custos",
      "Definir limites de orçamento e alertas para gastos na AWS",
      "Automatizar a aplicação de Savings Plans",
      "Garantir acesso gratuito a suporte técnico"
    ],
    correctAnswer: 1,
    explanation: "O AWS Budgets permite definir limites de orçamento e alertas para monitorar e controlar gastos na AWS."
  },
  {
    id: 14,
    text: "Quais são características do AWS Cost and Usage Report (CUR)? (Escolha duas)",
    options: [
      "Detalha o uso e os custos de todos os serviços da AWS",
      "Oferece descontos automáticos em instâncias EC2",
      "Permite análises detalhadas e personalizadas",
      "Automatiza a aplicação de Savings Plans"
    ],
    correctAnswer: [0, 2],
    explanation: "O AWS Cost and Usage Report detalha o uso e os custos de serviços AWS e permite análises personalizadas."
  },
  {
    id: 15,
    text: "Qual é a principal vantagem do AWS Pricing Calculator?",
    options: [
      "Oferece descontos automáticos em instâncias EC2",
      "Permite estimar custos de serviços AWS antes de usá-los",
      "Automatiza a aplicação de Savings Plans",
      "Garante acesso gratuito a suporte técnico"
    ],
    correctAnswer: 1,
    explanation: "O AWS Pricing Calculator permite estimar custos de serviços AWS antes de usá-los, ajudando no planejamento financeiro."
  },
  {
    id: 16,
    text: "Quais são benefícios do Plano Básico (Gratuito) da AWS? (Escolha duas)",
    options: [
      "Permite uso gratuito de serviços populares dentro de limites específicos",
      "Oferece acesso gratuito a suporte técnico 24/7",
      "Garante descontos automáticos em instâncias EC2",
      "É válido por 12 meses"
    ],
    correctAnswer: [0, 3],
    explanation: "O Plano Básico (Gratuito) permite uso gratuito de serviços populares dentro de limites específicos por 12 meses."
  },
  {
    id: 17,
    text: "Qual é a principal vantagem do Pay-as-you-go?",
    options: [
      "Descontos significativos em troca de compromissos de longo prazo",
      "Flexibilidade para pagar apenas pelo que for consumido",
      "Ideal para workloads de longa duração",
      "Garantia de disponibilidade contínua por 24 horas"
    ],
    correctAnswer: 1,
    explanation: "O Pay-as-you-go oferece flexibilidade para pagar apenas pelo que for consumido, sem compromissos de longo prazo."
  },
  {
    id: 18,
    text: "Quais são características das Instâncias Reservadas (RIs)? (Escolha duas)",
    options: [
      "Oferecem descontos em troca de compromissos de longo prazo",
      "Permitem pagar apenas pelo que for consumido",
      "São ideais para workloads imprevisíveis",
      "Podem ser adquiridas com termos de 1 ou 3 anos"
    ],
    correctAnswer: [0, 3],
    explanation: "As Instâncias Reservadas oferecem descontos em troca de compromissos de longo prazo, como termos de 1 ou 3 anos."
  },
  {
    id: 19,
    text: "Qual é a principal vantagem das Savings Plans?",
    options: [
      "Descontos maiores que as Instâncias Reservadas",
      "Flexibilidade para mudar tipos de instâncias e regiões",
      "Ideal para workloads de curta duração",
      "Não exigem pagamento antecipado"
    ],
    correctAnswer: 1,
    explanation: "Os Savings Plans oferecem flexibilidade para mudar tipos de instâncias e regiões, ao contrário das RIs."
  },
  {
    id: 20,
    text: "Quais são benefícios do AWS Cost Explorer? (Escolha duas)",
    options: [
      "Permite visualizar e analisar padrões de gastos na AWS",
      "Oferece recomendações para otimização de custos",
      "Automatiza a aplicação de Savings Plans",
      "Garante acesso gratuito a suporte técnico"
    ],
    correctAnswer: [0, 1],
    explanation: "O AWS Cost Explorer permite visualizar padrões de gastos e oferece recomendações para otimização de custos."
  },
  {
    id: 21,
    text: "Quais das seguintes afirmações sobre a Cobrança Consolidada da AWS estão corretas? (Escolha duas)",
    options: [
      "A Cobrança Consolidada permite consolidar os custos de várias contas da AWS em uma única fatura.",
      "A Cobrança Consolidada é disponível apenas para contas empresariais com suporte premium.",
      "A Cobrança Consolidada oferece descontos automáticos para todas as instâncias reservadas.",
      "A Cobrança Consolidada facilita a alocação de custos entre diferentes departamentos ou projetos."
    ],
    correctAnswer: [0, 3],
    explanation: "A Cobrança Consolidada permite consolidar os custos de várias contas da AWS em uma única fatura e facilita a alocação de custos entre diferentes departamentos ou projetos."
  },
  {
    id: 22,
    text: "Quais das seguintes afirmações sobre o AWS Cost Explorer estão corretas? (Escolha duas)",
    options: [
      "O AWS Cost Explorer permite visualizar e analisar custos e uso da AWS até os últimos 12 meses.",
      "O AWS Cost Explorer só pode ser usado por contas com plano de suporte empresarial.",
      "O AWS Cost Explorer oferece previsões de custos com base no uso histórico.",
      "O AWS Cost Explorer não permite a criação de relatórios personalizados."
    ],
    correctAnswer: [0, 2],
    explanation: "O AWS Cost Explorer permite visualizar e analisar custos e uso da AWS até os últimos 12 meses e oferece previsões de custos com base no uso histórico."
  },
  {
    id: 23,
    text: "Quais das seguintes afirmações sobre os Planos de Suporte da AWS estão corretas? (Escolha duas)",
    options: [
      "O plano Basic Support inclui acesso a um Technical Account Manager (TAM).",
      "O plano Enterprise Support oferece tempo de resposta de menos de 15 minutos para casos críticos.",
      "O plano Developer Support é recomendado para workloads de produção.",
      "O plano Business Support inclui orientação proativa sobre melhorias de arquitetura."
    ],
    correctAnswer: [1, 3],
    explanation: "O plano Enterprise Support oferece tempo de resposta de menos de 15 minutos para casos críticos, e o plano Business Support inclui orientação proativa sobre melhorias de arquitetura."
  },
  {
    id: 24,
    text: "Quais das seguintes afirmações sobre o pilar de Segurança do Well-Architected Framework estão corretas? (Escolha duas)",
    options: [
      "Aplicar o princípio de menor privilégio ajuda a reduzir riscos de segurança.",
      "A segurança deve ser tratada apenas na fase final do desenvolvimento de uma aplicação.",
      "A AWS é responsável por garantir a segurança dos dados do cliente armazenados na nuvem.",
      "A criptografia de dados em repouso e em trânsito é uma prática recomendada."
    ],
    correctAnswer: [0, 3],
    explanation: "Aplicar o princípio de menor privilégio e a criptografia de dados em repouso e em trânsito são práticas recomendadas no pilar de Segurança."
  },
  {
    id: 25,
    text: "Quais das seguintes afirmações sobre o pilar de Confiabilidade do Well-Architected Framework estão corretas? (Escolha duas)",
    options: [
      "A recuperação de desastres deve ser planejada apenas para workloads críticos.",
      "A utilização de múltiplas zonas de disponibilidade aumenta a confiabilidade de uma aplicação.",
      "A AWS é responsável por garantir a confiabilidade de todas as aplicações dos clientes.",
      "Testes de recuperação de falhas devem ser realizados regularmente."
    ],
    correctAnswer: [1, 3],
    explanation: "A utilização de múltiplas zonas de disponibilidade e a realização regular de testes de recuperação de falhas são práticas recomendadas no pilar de Confiabilidade."
  },
  {
    id: 26,
    text: "Quais das seguintes afirmações sobre o pilar de Excelência Operacional do Well-Architected Framework estão corretas? (Escolha duas)",
    options: [
      "A automação de processos é uma prática recomendada para melhorar a excelência operacional.",
      "A excelência operacional deve ser tratada apenas pela equipe de operações.",
      "A documentação de procedimentos e a realização de post-mortems são práticas recomendadas.",
      "A AWS é responsável por garantir a excelência operacional de todas as aplicações dos clientes."
    ],
    correctAnswer: [0, 2],
    explanation: "A automação de processos e a documentação de procedimentos, juntamente com a realização de post-mortems, são práticas recomendadas no pilar de Excelência Operacional."
  },
  {
    id: 27,
    text: "Quais das seguintes afirmações sobre o pilar de Eficiência de Performance do Well-Architected Framework estão corretas? (Escolha duas)",
    options: [
      "A escolha do tipo de instância EC2 adequado é crucial para a eficiência de performance.",
      "A eficiência de performance deve ser tratada apenas após a aplicação estar em produção.",
      "O uso de serviços gerenciados, como o Amazon RDS, pode melhorar a eficiência de performance.",
      "A AWS é responsável por otimizar o desempenho de todas as aplicações dos clientes."
    ],
    correctAnswer: [0, 2],
    explanation: "A escolha do tipo de instância EC2 adequado e o uso de serviços gerenciados, como o Amazon RDS, são práticas recomendadas no pilar de Eficiência de Performance."
  },
  {
    id: 28,
    text: "Quais das seguintes afirmações sobre o pilar de Otimização de Custos do Well-Architected Framework estão corretas? (Escolha duas)",
    options: [
      "A utilização de instâncias reservadas pode reduzir custos em workloads previsíveis.",
      "A otimização de custos deve ser tratada apenas após a aplicação estar em produção.",
      "O uso do AWS Cost Explorer ajuda a identificar oportunidades de redução de custos.",
      "A AWS é responsável por garantir a otimização de custos de todas as aplicações dos clientes."
    ],
    correctAnswer: [0, 2],
    explanation: "A utilização de instâncias reservadas e o uso do AWS Cost Explorer são práticas recomendadas no pilar de Otimização de Custos."
  },
  {
    id: 29,
    text: "Quais das seguintes afirmações sobre o pilar de Sustentabilidade do Well-Architected Framework estão corretas? (Escolha duas)",
    options: [
      "A escolha de regiões da AWS com fontes de energia renovável pode melhorar a sustentabilidade.",
      "A sustentabilidade deve ser tratada apenas pela equipe de infraestrutura.",
      "A AWS é responsável por garantir a sustentabilidade de todas as aplicações dos clientes.",
      "A otimização de recursos e a redução de desperdícios são práticas recomendadas."
    ],
    correctAnswer: [0, 3],
    explanation: "A escolha de regiões da AWS com fontes de energia renovável e a otimização de recursos são práticas recomendadas no pilar de Sustentabilidade."
  },
  {
    id: 30,
    text: "Quais das seguintes afirmações sobre o AWS Marketplace estão corretas? (Escolha duas)",
    options: [
      "O AWS Marketplace oferece soluções de software de terceiros que podem ser implantadas diretamente na AWS.",
      "O AWS Marketplace é exclusivo para produtos desenvolvidos pela AWS.",
      "O AWS Marketplace permite a compra de licenças de software com cobrança consolidada na fatura da AWS.",
      "O AWS Marketplace não oferece suporte para soluções de machine learning."
    ],
    correctAnswer: [0, 2],
    explanation: "O AWS Marketplace oferece soluções de software de terceiros que podem ser implantadas diretamente na AWS e permite a compra de licenças de software com cobrança consolidada na fatura da AWS."
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