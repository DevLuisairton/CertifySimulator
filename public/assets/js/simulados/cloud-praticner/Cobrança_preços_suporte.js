const originalQuestions = [
  {
    id: 1,
    text: "Qual é o modelo de preço da AWS que permite pagar apenas pelo tempo de uso, sem compromisso de longo prazo?",
    options: [
      "Instâncias sob demanda",
      "Instâncias reservadas",
      "Spot Instances",
      "Savings Plans"
    ],
    correctAnswer: 0,
    explanation: "As instâncias sob demanda permitem pagar apenas pelo tempo de uso, sem compromisso de longo prazo. Isso é ideal para cargas de trabalho imprevisíveis ou de curta duração."
  },
  {
    id: 2,
    text: "Qual é o modelo de preço da AWS que oferece descontos significativos em troca de um compromisso de uso de 1 ou 3 anos?",
    options: [
      "Instâncias reservadas",
      "Instâncias sob demanda",
      "Spot Instances",
      "Savings Plans"
    ],
    correctAnswer: 0,
    explanation: "As instâncias reservadas oferecem descontos significativos em troca de um compromisso de uso de 1 ou 3 anos. Isso é ideal para cargas de trabalho previsíveis e de longo prazo."
  },
  {
    id: 3,
    text: "Qual é o modelo de preço da AWS que permite comprar capacidade de computação não utilizada a um custo reduzido?",
    options: [
      "Spot Instances",
      "Instâncias reservadas",
      "Instâncias sob demanda",
      "Savings Plans"
    ],
    correctAnswer: 0,
    explanation: "As Spot Instances permitem comprar capacidade de computação não utilizada a um custo reduzido. No entanto, elas podem ser interrompidas pela AWS com pouco aviso."
  },
  {
    id: 4,
    text: "Qual é o modelo de preço da AWS que oferece descontos flexíveis em troca de um compromisso de gasto consistente?",
    options: [
      "Savings Plans",
      "Instâncias reservadas",
      "Instâncias sob demanda",
      "Spot Instances"
    ],
    correctAnswer: 0,
    explanation: "Os Savings Plans oferecem descontos flexíveis em troca de um compromisso de gasto consistente. Eles se aplicam a diferentes tipos de instâncias e serviços, proporcionando economia sem restrições rígidas."
  },
  {
    id: 5,
    text: "Qual é o custo associado à transferência de dados entre Regiões da AWS?",
    options: [
      "Cobrado por GB transferido",
      "Gratuito",
      "Cobrado apenas para transferências acima de 1 TB",
      "Cobrado apenas para transferências entre contas"
    ],
    correctAnswer: 0,
    explanation: "A transferência de dados entre Regiões da AWS é cobrada por GB transferido. Isso ocorre porque a AWS precisa gerenciar a infraestrutura global para garantir a transferência segura e eficiente dos dados."
  },
  {
    id: 6,
    text: "Qual é o custo associado à transferência de dados dentro da mesma Região da AWS?",
    options: [
      "Gratuito",
      "Cobrado por GB transferido",
      "Cobrado apenas para transferências acima de 1 TB",
      "Cobrado apenas para transferências entre contas"
    ],
    correctAnswer: 0,
    explanation: "A transferência de dados dentro da mesma Região da AWS é gratuita. Isso incentiva a otimização de recursos e a redução de custos ao manter os dados próximos aos usuários e aplicações."
  },
  {
    id: 7,
    text: "Qual serviço da AWS permite estimar o custo de uso de serviços antes de implantá-los?",
    options: [
      "AWS Pricing Calculator",
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Billing Conductor"
    ],
    correctAnswer: 0,
    explanation: "O AWS Pricing Calculator permite estimar o custo de uso de serviços antes de implantá-los. Ele ajuda os usuários a planejar e orçar seus gastos na AWS."
  },
  {
    id: 8,
    text: "Qual serviço da AWS permite criar orçamentos e alertas de custo?",
    options: [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Billing Conductor"
    ],
    correctAnswer: 0,
    explanation: "O AWS Budgets permite criar orçamentos e alertas de custo, ajudando os usuários a monitorar e controlar seus gastos na AWS."
  },
  {
    id: 9,
    text: "Qual serviço da AWS permite analisar e visualizar custos e uso de serviços?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Pricing Calculator",
      "AWS Billing Conductor"
    ],
    correctAnswer: 0,
    explanation: "O AWS Cost Explorer permite analisar e visualizar custos e uso de serviços, fornecendo insights detalhados para otimização de gastos."
  },
  {
    id: 10,
    text: "Qual serviço da AWS permite consolidar a cobrança de múltiplas contas?",
    options: [
      "AWS Organizations",
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Billing Conductor"
    ],
    correctAnswer: 0,
    explanation: "O AWS Organizations permite consolidar a cobrança de múltiplas contas, simplificando o gerenciamento financeiro e a alocação de custos."
  },
  {
    id: 11,
    text: "Qual é o benefício de usar tags de alocação de custos na AWS?",
    options: [
      "Organizar e rastrear custos por recurso ou projeto",
      "Reduzir automaticamente os custos",
      "Aumentar o desempenho dos recursos",
      "Melhorar a segurança dos recursos"
    ],
    correctAnswer: 0,
    explanation: "As tags de alocação de custos ajudam a organizar e rastrear custos por recurso ou projeto, facilitando a análise e a otimização de gastos."
  },
  {
    id: 12,
    text: "Qual serviço da AWS permite gerenciar e distribuir descontos para contas vinculadas?",
    options: [
      "AWS Billing Conductor",
      "AWS Organizations",
      "AWS Cost Explorer",
      "AWS Budgets"
    ],
    correctAnswer: 0,
    explanation: "O AWS Billing Conductor permite gerenciar e distribuir descontos para contas vinculadas, simplificando a gestão financeira em ambientes multi-conta."
  },
  {
    id: 13,
    text: "Qual é o plano de suporte da AWS que oferece suporte técnico 24/7 com tempo de resposta de menos de 1 hora?",
    options: [
      "Enterprise Support",
      "Business Support",
      "Developer Support",
      "Basic Support"
    ],
    correctAnswer: 0,
    explanation: "O Enterprise Support oferece suporte técnico 24/7 com tempo de resposta de menos de 1 hora, ideal para empresas com cargas de trabalho críticas."
  },
  {
    id: 14,
    text: "Qual serviço da AWS fornece recomendações para otimizar custos, desempenho e segurança?",
    options: [
      "AWS Trusted Advisor",
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Billing Conductor"
    ],
    correctAnswer: 0,
    explanation: "O AWS Trusted Advisor fornece recomendações personalizadas para otimizar custos, desempenho e segurança, ajudando os usuários a melhorar a eficiência de seus recursos."
  },
  {
    id: 15,
    text: "Qual serviço da AWS permite monitorar a saúde e o desempenho de recursos em tempo real?",
    options: [
      "Amazon CloudWatch",
      "AWS Trusted Advisor",
      "AWS Health Dashboard",
      "AWS Cost Explorer"
    ],
    correctAnswer: 0,
    explanation: "O Amazon CloudWatch permite monitorar a saúde e o desempenho de recursos em tempo real, fornecendo métricas e alertas para garantir a disponibilidade e eficiência das aplicações."
  },
  {
    id: 16,
    text: "Qual serviço da AWS permite visualizar o status operacional e o desempenho dos serviços da AWS?",
    options: [
      "AWS Health Dashboard",
      "Amazon CloudWatch",
      "AWS Trusted Advisor",
      "AWS Cost Explorer"
    ],
    correctAnswer: 0,
    explanation: "O AWS Health Dashboard permite visualizar o status operacional e o desempenho dos serviços da AWS, fornecendo transparência sobre a saúde dos recursos."
  },
  {
    id: 17,
    text: "Qual serviço da AWS permite denunciar abusos de recursos, como uso malicioso ou violações de segurança?",
    options: [
      "AWS Abuse Team",
      "AWS Trusted Advisor",
      "AWS Support Center",
      "AWS Health Dashboard"
    ],
    correctAnswer: 0,
    explanation: "O AWS Abuse Team permite denunciar abusos de recursos, como uso malicioso ou violações de segurança. Isso ajuda a manter a infraestrutura da AWS segura e confiável."
  },
  {
    id: 18,
    text: "Qual é o benefício de ser um AWS Partner?",
    options: [
      "Acesso a treinamentos e certificações",
      "Descontos em serviços da AWS",
      "Suporte técnico prioritário",
      "Todas as opções acima"
    ],
    correctAnswer: 3,
    explanation: "Ser um AWS Partner oferece benefícios como acesso a treinamentos e certificações, descontos em serviços da AWS e suporte técnico prioritário, entre outros."
  },
  {
    id: 19,
    text: "Qual serviço da AWS permite comprar e vender software de terceiros?",
    options: [
      "AWS Marketplace",
      "AWS Organizations",
      "AWS Cost Explorer",
      "AWS Billing Conductor"
    ],
    correctAnswer: 0,
    explanation: "O AWS Marketplace permite comprar e vender software de terceiros que são pré-configurados para funcionar na AWS, facilitando a integração e o uso de soluções de terceiros."
  },
  {
    id: 20,
    text: "Qual serviço da AWS oferece assistência técnica personalizada para projetos complexos?",
    options: [
      "AWS Professional Services",
      "AWS Support Center",
      "AWS Trusted Advisor",
      "AWS Health Dashboard"
    ],
    correctAnswer: 0,
    explanation: "O AWS Professional Services oferece assistência técnica personalizada para projetos complexos, ajudando os clientes a implementar soluções de maneira eficiente e segura."
  },
  {
    id: 21,
    text: "Qual serviço da AWS permite encontrar soluções pré-configuradas para necessidades específicas?",
    options: [
      "AWS Solutions Architects",
      "AWS Marketplace",
      "AWS Professional Services",
      "AWS Support Center"
    ],
    correctAnswer: 0,
    explanation: "Os AWS Solutions Architects ajudam a encontrar soluções pré-configuradas para necessidades específicas, garantindo que os clientes obtenham o máximo valor dos serviços da AWS."
  },
  {
    id: 22,
    text: "Qual serviço da AWS permite acessar documentação técnica, whitepapers e blogs?",
    options: [
      "AWS re:Post",
      "AWS Knowledge Center",
      "AWS Support Center",
      "AWS Documentation"
    ],
    correctAnswer: 3,
    explanation: "A AWS Documentation fornece acesso a documentação técnica, whitepapers e blogs, ajudando os usuários a entender e utilizar os serviços da AWS de maneira eficaz."
  },
  {
    id: 23,
    text: "Qual serviço da AWS permite interagir com a comunidade para tirar dúvidas técnicas?",
    options: [
      "AWS re:Post",
      "AWS Knowledge Center",
      "AWS Support Center",
      "AWS Documentation"
    ],
    correctAnswer: 0,
    explanation: "O AWS re:Post permite interagir com a comunidade para tirar dúvidas técnicas, compartilhar conhecimentos e obter ajuda de outros usuários da AWS."
  },
  {
    id: 24,
    text: "Qual serviço da AWS permite acessar recomendações personalizadas para otimizar recursos?",
    options: [
      "AWS Trusted Advisor",
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Billing Conductor"
    ],
    correctAnswer: 0,
    explanation: "O AWS Trusted Advisor fornece recomendações personalizadas para otimizar recursos, ajudando a melhorar o desempenho, a segurança e a eficiência de custos."
  },
  {
    id: 25,
    text: "Qual serviço da AWS permite monitorar e gerenciar o desempenho de aplicações distribuídas?",
    options: [
      "AWS X-Ray",
      "Amazon CloudWatch",
      "AWS Trusted Advisor",
      "AWS Health Dashboard"
    ],
    correctAnswer: 0,
    explanation: "O AWS X-Ray permite monitorar e gerenciar o desempenho de aplicações distribuídas, identificando gargalos e melhorando a experiência do usuário."
  },
  {
    id: 26,
    text: "Qual serviço da AWS permite gerenciar e monitorar a conformidade de recursos?",
    options: [
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS Cost Explorer",
      "AWS Billing Conductor"
    ],
    correctAnswer: 0,
    explanation: "O AWS Config permite gerenciar e monitorar a conformidade de recursos, garantindo que eles estejam em conformidade com políticas internas e regulamentações externas."
  },
  {
    id: 27,
    text: "Qual serviço da AWS permite automatizar auditorias de conformidade?",
    options: [
      "AWS Audit Manager",
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS Cost Explorer"
    ],
    correctAnswer: 0,
    explanation: "O AWS Audit Manager permite automatizar auditorias de conformidade, simplificando o processo de coleta de evidências e geração de relatórios."
  },
  {
    id: 28,
    text: "Qual serviço da AWS permite gerenciar e distribuir certificados SSL/TLS?",
    options: [
      "AWS Certificate Manager (ACM)",
      "AWS KMS",
      "AWS IAM",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Certificate Manager (ACM) permite gerenciar e distribuir certificados SSL/TLS, facilitando a implementação de conexões seguras para aplicações e sites."
  },
  {
    id: 29,
    text: "Qual serviço da AWS permite detectar dados confidenciais em buckets do Amazon S3?",
    options: [
      "Amazon Macie",
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Macie permite detectar dados confidenciais em buckets do Amazon S3, ajudando a proteger informações sensíveis e a garantir a conformidade com regulamentações."
  },
  {
    id: 30,
    text: "Qual serviço da AWS permite proteger aplicações web contra ataques de injeção de SQL?",
    options: [
      "AWS WAF (Web Application Firewall)",
      "AWS Shield",
      "Amazon GuardDuty",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O AWS WAF (Web Application Firewall) permite proteger aplicações web contra ataques de injeção de SQL, cross-site scripting e outros exploits comuns."
  },
  {
    id: 31,
    text: "Qual serviço da AWS fornece proteção contra ataques DDoS em aplicações web?",
    options: [
      "AWS Shield",
      "AWS WAF",
      "Amazon GuardDuty",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O AWS Shield fornece proteção contra ataques DDoS em aplicações web, garantindo a disponibilidade e a continuidade dos serviços."
  },
  {
    id: 32,
    text: "Qual serviço da AWS permite centralizar o gerenciamento de segurança e conformidade?",
    options: [
      "AWS Security Hub",
      "AWS IAM",
      "AWS CloudTrail",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Security Hub permite centralizar o gerenciamento de segurança e conformidade, fornecendo uma visão unificada do estado de segurança dos recursos da AWS."
  },
  {
    id: 33,
    text: "Qual serviço da AWS permite auditar e monitorar chamadas de API em sua conta?",
    options: [
      "AWS CloudTrail",
      "AWS Config",
      "AWS IAM",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS CloudTrail permite auditar e monitorar chamadas de API em sua conta, fornecendo um registro detalhado de todas as atividades realizadas."
  },
  {
    id: 34,
    text: "Qual serviço da AWS permite avaliar a conformidade de recursos com políticas internas?",
    options: [
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM",
      "Amazon GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS Config permite avaliar a conformidade de recursos com políticas internas, ajudando a garantir que os recursos estejam configurados de acordo com as melhores práticas."
  },
  {
    id: 35,
    text: "Qual serviço da AWS permite automatizar auditorias de conformidade e gerar relatórios?",
    options: [
      "AWS Audit Manager",
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O AWS Audit Manager permite automatizar auditorias de conformidade e gerar relatórios, simplificando o processo de auditoria e garantindo a conformidade com regulamentações."
  },
  {
    id: 36,
    text: "Qual é o custo associado à transferência de dados de saída para a internet?",
    options: [
      "Cobrado por GB transferido",
      "Gratuito",
      "Cobrado apenas para transferências acima de 1 TB",
      "Cobrado apenas para transferências entre contas"
    ],
    correctAnswer: 0,
    explanation: "A transferência de dados de saída para a internet é cobrada por GB transferido. Isso ocorre porque a AWS precisa gerenciar a infraestrutura para garantir a entrega eficiente dos dados."
  },
  {
    id: 37,
    text: "Qual é o custo associado à transferência de dados de entrada para a AWS?",
    options: [
      "Gratuito",
      "Cobrado por GB transferido",
      "Cobrado apenas para transferências acima de 1 TB",
      "Cobrado apenas para transferências entre contas"
    ],
    correctAnswer: 0,
    explanation: "A transferência de dados de entrada para a AWS é gratuita, incentivando os usuários a migrar dados para a nuvem sem custos adicionais."
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