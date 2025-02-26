const originalQuestions = [
  {
    id: 1,
    text: "Uma empresa deseja usar uma solução de rede da AWS que possa atuar como um gateway centralizado entre várias VPCs e redes locais. Qual serviço ou recurso da AWS atenderá a esse requisito?",
    options: [
      "Gateway VPC endpoint",
      "AWS Direct Connect",
      "AWS Transit Gateway",
      "VPC Peering"
    ],
    correctAnswer: 2,
    explanation: "O AWS Transit Gateway é um serviço que atua como um hub centralizado para conectar várias VPCs e redes locais, facilitando a comunicação entre elas de forma escalável e segura."
  },
  {
    id: 2,
    text: "Qual serviço ou ferramenta complementar da AWS cria casos de negócios baseados em dados para planejamento de nuvem?",
    options: [
      "Avaliador de migração (Migration Evaluator)",
      "Condutor de faturamento da AWS (AWS Billing Conductor)",
      "Console de faturamento da AWS (AWS Billing Console)",
      "Previsão da Forecast (Amazon Forecast)"
    ],
    correctAnswer: 0,
    explanation: "O Avaliador de Migração (Migration Evaluator) ajuda a criar casos de negócios baseados em dados para planejamento de migração para a nuvem, fornecendo insights sobre custos e benefícios."
  },
  {
    id: 3,
    text: "Um administrador observou que vários recursos da AWS foram excluídos ontem. Qual serviço da AWS ajudará a identificar a causa e determinar qual usuário excluiu os recursos?",
    options: [
      "AWS CloudTrail",
      "Amazon Inspector",
      "Amazon GuardDuty",
      "AWS Trusted Advisor"
    ],
    correctAnswer: 0,
    explanation: "O AWS CloudTrail registra todas as chamadas de API feitas na conta da AWS, permitindo rastrear quem realizou ações como a exclusão de recursos."
  },
  {
    id: 4,
    text: "Uma empresa de telecomunicações está procurando expandir sua cobertura 5G em todo o país e, como resultado, precisa provisionar e construir sua própria rede celular privada com a ajuda da AWS. Qual solução a AWS fornece para ajudar com isso?",
    options: [
      "AWS Private 5G",
      "AWS Wavelength",
      "AWS Outposts",
      "AWS Direct Connect"
    ],
    correctAnswer: 0,
    explanation: "O AWS Private 5G é uma solução que permite às empresas implantar e gerenciar suas próprias redes celulares privadas 5G de forma rápida e fácil."
  },
  {
    id: 5,
    text: "Qual é o volume total de dados que pode ser armazenado no Amazon S3?",
    options: [
      "10 PB",
      "50 PB",
      "100 PB",
      "ilimitado"
    ],
    correctAnswer: 3,
    explanation: "O Amazon S3 oferece armazenamento ilimitado, permitindo que os usuários armazenem qualquer quantidade de dados sem preocupação com limites de capacidade."
  },
  {
    id: 6,
    text: "Um aplicativo herdado de computação de alto desempenho (HPC) herdado será migrado para a AWS. Qual tipo de adaptador de rede deve ser usado?",
    options: [
      "Endereço IP elástico",
      "Elastic Network Adapter/ENA",
      "Elastic Fabric Adapter/EFA",
      "Elastic Network Interface/ENI"
    ],
    correctAnswer: 2,
    explanation: "O Elastic Fabric Adapter (EFA) é projetado para aplicativos de computação de alto desempenho (HPC), oferecendo baixa latência e alta taxa de transferência para comunicação entre instâncias."
  },
  {
    id: 7,
    text: "Qual entidade garante que seu aplicativo no Amazon Elastic Compute Cloud (Amazon EC2) sempre tenha a quantidade certa de capacidade para lidar com a demanda de tráfego atual?",
    options: [
      "Amazon EC2 Auto Scaling",
      "Multi-AZ deployment",
      "Network Load Balancer",
      "Application Load Balancer"
    ],
    correctAnswer: 0,
    explanation: "O Amazon EC2 Auto Scaling ajusta automaticamente o número de instâncias EC2 com base na demanda, garantindo que o aplicativo tenha capacidade suficiente para lidar com o tráfego."
  },
  {
    id: 8,
    text: "Uma empresa deseja configurar uma conexão de rede segura do local para a Nuvem AWS em até 1 semana. Qual solução atenderá a esses requisitos?",
    options: [
      "AWS Direct Connect",
      "Amazon VPC",
      "AWS Site-to-Site VPN",
      "Edge location"
    ],
    correctAnswer: 2,
    explanation: "O AWS Site-to-Site VPN permite configurar uma conexão segura entre a rede local e a AWS em poucos dias, sem a necessidade de hardware físico adicional."
  },
  {
    id: 9,
    text: "Quando um usuário deseja utilizar suas licenças de software existentes por soquete, por núcleo ou por máquina virtual para um servidor Microsoft Windows em execução na AWS, qual tipo de instância do Amazon EC2 é necessário?",
    options: [
      "Instâncias spot",
      "Instâncias Dedicadas",
      "Hosts Dedicados",
      "Instâncias Reservadas"
    ],
    correctAnswer: 2,
    explanation: "Os Hosts Dedicados permitem que os usuários utilizem suas licenças de software existentes por soquete, núcleo ou máquina virtual, atendendo a requisitos de licenciamento específicos."
  },
  {
    id: 10,
    text: "Qual princípio de design está relacionado ao pilar de confiabilidade de acordo com o AWS Well-Architected Framework?",
    options: [
      "Testar procedimentos de recuperação",
      "Realizar experimentos com mais frequência",
      "Expandir globalmente em minutos",
      "Analisar e atribuir despesas"
    ],
    correctAnswer: 0,
    explanation: "Testar procedimentos de recuperação é um princípio fundamental do pilar de Confiabilidade, garantindo que os sistemas possam se recuperar de falhas de forma eficaz."
  },
  {
    id: 11,
    text: "Uma empresa armazena dados em um bucket do Amazon S3. Qual tarefa é responsabilidade da AWS?",
    options: [
      "Configurar uma política de ciclo de vida do S3.",
      "Ativar o versionamento do S3.",
      "Configurar políticas de bucket do S3.",
      "Proteger a infraestrutura que suporta o armazenamento S3."
    ],
    correctAnswer: 3,
    explanation: "De acordo com o modelo de responsabilidade compartilhada, a AWS é responsável pela segurança da infraestrutura que suporta o armazenamento S3, enquanto o cliente é responsável por configurar políticas e versionamento."
  },
  {
    id: 12,
    text: "Qual serviço da AWS é um banco de dados NoSQL totalmente gerenciado?",
    options: [
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Aurora"
    ],
    correctAnswer: 2,
    explanation: "O Amazon DynamoDB é um banco de dados NoSQL totalmente gerenciado que oferece desempenho rápido e consistente com escalabilidade automática."
  },
  {
    id: 13,
    text: "Uma empresa deseja transferir um Windows Server 2022 virtual que está atualmente em execução em seu próprio data center para a AWS. A empresa quer converter automaticamente o servidor existente para rodar diretamente na infraestrutura da AWS em vez de em um hardware virtualizado. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      "AWS DataSync",
      "AWS Database Migration Service (AWS DMS)",
      "AWS Application Discovery Service",
      "AWS Application Migration Service"
    ],
    correctAnswer: 3,
    explanation: "O AWS Application Migration Service permite migrar servidores físicos ou virtuais para a AWS, convertendo automaticamente o sistema operacional e os aplicativos para rodar na infraestrutura da AWS."
  },
  {
    id: 14,
    text: "Uma empresa deseja migrar seu banco de dados SQL Server local para a AWS Cloud. A empresa quer que a AWS gerencie a administração diária do banco de dados. Qual serviço da AWS atenderá aos requisitos da empresa?",
    options: [
      "Amazon EC2 for Microsoft SQL Server",
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon Aurora"
    ],
    correctAnswer: 2,
    explanation: "O Amazon RDS é um serviço gerenciado que facilita a configuração, operação e escalabilidade de bancos de dados relacionais, como o SQL Server, sem a necessidade de gerenciar a infraestrutura subjacente."
  },
  {
    id: 15,
    text: "Uma empresa precisa de filtragem de rede sem estado para sua VPC. Qual serviço, ferramenta ou recurso da AWS atenderá a esse requisito?",
    options: [
      "VPC Peering",
      "Security Group",
      "Network ACL",
      "AWS WAF"
    ],
    correctAnswer: 2,
    explanation: "As Network ACLs (Listas de Controle de Acesso) fornecem filtragem de rede sem estado para controlar o tráfego de entrada e saída em uma VPC."
  }
];

// Lista de questões ativa (será embaralhada)
let questions = [...originalQuestions];

// Estado do simulado
const examState = {
  currentQuestionIndex: 0,
  answers: {},
  markedForReview: new Set(),
  timeRemaining: 90 * 60, // 90 minutos em segundos
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
      if (examState.answers[question.id] !== undefined) {
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
              <div class="option ${examState.answers[question.id] === idx ? 'selected' : ''}" data-index="${idx}">
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

// Selecionar uma resposta
function selectAnswer(questionId, answerIndex) {
  examState.answers[questionId] = answerIndex;
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

// Renderizar resultados (Função modificada)
function renderResults() {
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;
  
  questions.forEach(question => {
      if (examState.answers[question.id] === undefined) {
          unansweredCount++;
      } else if (examState.answers[question.id] === question.correctAnswer) {
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
      let status = 'unanswered';
      let statusText = 'Não Respondida';
      
      if (examState.answers[question.id] !== undefined) {
          status = examState.answers[question.id] === question.correctAnswer ? 'correct' : 'incorrect';
          statusText = examState.answers[question.id] === question.correctAnswer ? 'Correta' : 'Incorreta';
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
                      <div class="option ${idx === question.correctAnswer ? 'correct' : ''} ${(examState.answers[question.id] === idx && examState.answers[question.id] !== question.correctAnswer) ? 'incorrect' : ''}">
                          ${String.fromCharCode(65 + idx)}. ${option}
                          ${idx === question.correctAnswer ? ' ✓' : ''}
                          ${(examState.answers[question.id] === idx && examState.answers[question.id] !== question.correctAnswer) ? ' ✗' : ''}
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
