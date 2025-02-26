const originalQuestions = [
  {
    id: 1,
    text: "Qual serviço da AWS permite consultar dados diretamente no Amazon S3 usando SQL?",
    options: [
      "Amazon Athena",
      "Amazon Redshift",
      "AWS Glue",
      "Amazon EMR"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Athena permite consultar dados diretamente no Amazon S3 usando SQL, sem a necessidade de configurar ou gerenciar infraestrutura."
  },
  {
    id: 2,
    text: "Qual serviço da AWS facilita a descoberta, assinatura e uso de dados de terceiros na nuvem?",
    options: [
      "AWS Data Exchange",
      "Amazon S3",
      "Amazon Kinesis",
      "Amazon QuickSight"
    ],
    correctAnswer: 0,
    explanation: "O AWS Data Exchange facilita a descoberta, assinatura e uso de dados de terceiros na nuvem, permitindo que empresas acessem dados externos de forma simples."
  },
  {
    id: 3,
    text: "Qual serviço da AWS é usado para processamento de big data usando frameworks como Hadoop e Spark?",
    options: [
      "Amazon EMR",
      "AWS Glue",
      "Amazon Redshift",
      "Amazon Athena"
    ],
    correctAnswer: 0,
    explanation: "O Amazon EMR (Elastic MapReduce) é usado para processamento de big data usando frameworks populares como Hadoop e Spark."
  },
  {
    id: 4,
    text: "Qual serviço da AWS é um ETL (Extract, Transform, Load) totalmente gerenciado?",
    options: [
      "AWS Glue",
      "Amazon EMR",
      "Amazon Kinesis",
      "Amazon Redshift"
    ],
    correctAnswer: 0,
    explanation: "O AWS Glue é um serviço de ETL totalmente gerenciado que facilita a preparação e transformação de dados para análise."
  },
  {
    id: 5,
    text: "Qual serviço da AWS permite coletar, processar e analisar dados em tempo real?",
    options: [
      "Amazon Kinesis",
      "Amazon Athena",
      "Amazon Redshift",
      "AWS Glue"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Kinesis permite coletar, processar e analisar dados em tempo real, ideal para aplicações que exigem baixa latência."
  },
  {
    id: 6,
    text: "Qual serviço da AWS é uma plataforma gerenciada para Apache Kafka?",
    options: [
      "Amazon Managed Streaming for Apache Kafka (Amazon MSK)",
      "Amazon Kinesis",
      "Amazon SQS",
      "Amazon SNS"
    ],
    correctAnswer: 0,
    explanation: "O Amazon MSK é uma plataforma gerenciada para Apache Kafka, facilitando a construção e execução de aplicações que usam streaming de dados."
  },
  {
    id: 7,
    text: "Qual serviço da AWS oferece um mecanismo de busca e análise de dados em tempo real?",
    options: [
      "Amazon OpenSearch Service",
      "Amazon Athena",
      "Amazon Redshift",
      "AWS Glue"
    ],
    correctAnswer: 0,
    explanation: "O Amazon OpenSearch Service oferece um mecanismo de busca e análise de dados em tempo real, baseado no Elasticsearch."
  },
  {
    id: 8,
    text: "Qual serviço da AWS permite criar dashboards e visualizações de dados?",
    options: [
      "Amazon QuickSight",
      "AWS Glue",
      "Amazon Athena",
      "Amazon Redshift"
    ],
    correctAnswer: 0,
    explanation: "O Amazon QuickSight permite criar dashboards e visualizações de dados interativos, facilitando a análise de negócios."
  },
  {
    id: 9,
    text: "Qual serviço da AWS é um data warehouse totalmente gerenciado?",
    options: [
      "Amazon Redshift",
      "Amazon Athena",
      "AWS Glue",
      "Amazon EMR"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Redshift é um data warehouse totalmente gerenciado, projetado para análise de grandes volumes de dados."
  },
  {
    id: 10,
    text: "Qual serviço da AWS permite orquestrar workflows de aplicativos distribuídos?",
    options: [
      "AWS Step Functions",
      "Amazon EventBridge",
      "Amazon SQS",
      "Amazon SNS"
    ],
    correctAnswer: 0,
    explanation: "O AWS Step Functions permite orquestrar workflows de aplicativos distribuídos, facilitando a coordenação de microsserviços."
  },
  {
    id: 11,
    text: "Qual serviço da AWS é usado para enviar notificações push para aplicativos móveis?",
    options: [
      "Amazon Simple Notification Service (Amazon SNS)",
      "Amazon SQS",
      "Amazon EventBridge",
      "AWS Step Functions"
    ],
    correctAnswer: 0,
    explanation: "O Amazon SNS é usado para enviar notificações push para aplicativos móveis, além de suportar mensagens SMS e e-mail."
  },
  {
    id: 12,
    text: "Qual serviço da AWS é uma fila de mensagens altamente escalável?",
    options: [
      "Amazon Simple Queue Service (Amazon SQS)",
      "Amazon SNS",
      "Amazon EventBridge",
      "AWS Step Functions"
    ],
    correctAnswer: 0,
    explanation: "O Amazon SQS é uma fila de mensagens altamente escalável, permitindo a comunicação assíncrona entre componentes de aplicativos."
  },
  {
    id: 13,
    text: "Qual serviço da AWS é um centro de contato na nuvem?",
    options: [
      "Amazon Connect",
      "Amazon SES",
      "Amazon SNS",
      "Amazon SQS"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Connect é um centro de contato na nuvem, permitindo que empresas criem e gerenciem call centers de forma fácil e escalável."
  },
  {
    id: 14,
    text: "Qual serviço da AWS permite enviar e-mails em grande escala?",
    options: [
      "Amazon Simple Email Service (Amazon SES)",
      "Amazon SNS",
      "Amazon SQS",
      "Amazon Connect"
    ],
    correctAnswer: 0,
    explanation: "O Amazon SES permite enviar e-mails em grande escala, com alta taxa de entrega e baixo custo."
  },
  {
    id: 15,
    text: "Qual serviço da AWS ajuda a gerenciar e otimizar custos na nuvem?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Billing Conductor",
      "AWS Marketplace"
    ],
    correctAnswer: 0,
    explanation: "O AWS Cost Explorer ajuda a gerenciar e otimizar custos na nuvem, fornecendo insights detalhados sobre o uso e os gastos."
  },
  {
    id: 16,
    text: "Qual serviço da AWS permite criar orçamentos e alertas de custo?",
    options: [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Billing Conductor",
      "AWS Marketplace"
    ],
    correctAnswer: 0,
    explanation: "O AWS Budgets permite criar orçamentos e alertas de custo, ajudando a monitorar e controlar os gastos na AWS."
  },
  {
    id: 17,
    text: "Qual serviço da AWS permite executar jobs de computação em lote?",
    options: [
      "AWS Batch",
      "Amazon EC2",
      "AWS Elastic Beanstalk",
      "Amazon Lightsail"
    ],
    correctAnswer: 0,
    explanation: "O AWS Batch permite executar jobs de computação em lote, escalando automaticamente os recursos conforme a demanda."
  },
  {
    id: 18,
    text: "Qual serviço da AWS permite implantar aplicativos web e móveis de forma fácil?",
    options: [
      "AWS Elastic Beanstalk",
      "Amazon EC2",
      "AWS Batch",
      "Amazon Lightsail"
    ],
    correctAnswer: 0,
    explanation: "O AWS Elastic Beanstalk facilita a implantação de aplicativos web e móveis, gerenciando automaticamente a infraestrutura subjacente."
  },
  {
    id: 19,
    text: "Qual serviço da AWS oferece instâncias de computação pré-configuradas?",
    options: [
      "Amazon Lightsail",
      "Amazon EC2",
      "AWS Batch",
      "AWS Elastic Beanstalk"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Lightsail oferece instâncias de computação pré-configuradas, ideal para aplicações simples e de baixo custo."
  },
  {
    id: 20,
    text: "Qual serviço da AWS permite executar workloads em locais específicos com baixa latência?",
    options: [
      "Zonas Locais da AWS",
      "AWS Outposts",
      "AWS Wavelength",
      "Amazon EC2"
    ],
    correctAnswer: 0,
    explanation: "As Zonas Locais da AWS permitem executar workloads em locais específicos com baixa latência, ideal para aplicações sensíveis a atrasos."
  },
  {
    id: 21,
    text: "Qual serviço da AWS permite executar infraestrutura local usando serviços da AWS?",
    options: [
      "AWS Outposts",
      "Zonas Locais da AWS",
      "AWS Wavelength",
      "Amazon EC2"
    ],
    correctAnswer: 0,
    explanation: "O AWS Outposts permite executar infraestrutura local usando serviços da AWS, oferecendo uma experiência híbrida consistente."
  },
  {
    id: 22,
    text: "Qual serviço da AWS permite implantar aplicativos em redes 5G?",
    options: [
      "AWS Wavelength",
      "AWS Outposts",
      "Zonas Locais da AWS",
      "Amazon EC2"
    ],
    correctAnswer: 0,
    explanation: "O AWS Wavelength permite implantar aplicativos em redes 5G, reduzindo a latência para aplicações sensíveis a atrasos."
  },
  {
    id: 23,
    text: "Qual serviço da AWS é um registro de contêineres gerenciado?",
    options: [
      "Amazon Elastic Container Registry (Amazon ECR)",
      "Amazon ECS",
      "Amazon EKS",
      "AWS Fargate"
    ],
    correctAnswer: 0,
    explanation: "O Amazon ECR é um registro de contêineres gerenciado que permite armazenar, gerenciar e implantar imagens de contêineres Docker."
  },
  {
    id: 24,
    text: "Qual serviço da AWS é um orquestrador de contêineres gerenciado?",
    options: [
      "Amazon Elastic Container Service (Amazon ECS)",
      "Amazon ECR",
      "Amazon EKS",
      "AWS Fargate"
    ],
    correctAnswer: 0,
    explanation: "O Amazon ECS é um orquestrador de contêineres gerenciado que facilita a execução de aplicações em contêineres na AWS."
  },
  {
    id: 25,
    text: "Qual serviço da AWS permite executar Kubernetes gerenciado?",
    options: [
      "Amazon Elastic Kubernetes Service (Amazon EKS)",
      "Amazon ECS",
      "Amazon ECR",
      "AWS Fargate"
    ],
    correctAnswer: 0,
    explanation: "O Amazon EKS permite executar Kubernetes gerenciado, facilitando a execução de aplicações em contêineres usando Kubernetes."
  },
  {
    id: 26,
    text: "Qual serviço da AWS oferece suporte para startups com créditos e treinamento?",
    options: [
      "AWS Activate para startups",
      "AWS IQ",
      "AWS Managed Services (AMS)",
      "AWS Support"
    ],
    correctAnswer: 0,
    explanation: "O AWS Activate oferece suporte para startups com créditos, treinamento e recursos para ajudar no crescimento e na adoção da nuvem."
  },
  {
    id: 27,
    text: "Qual serviço da AWS permite contratar especialistas certificados para projetos?",
    options: [
      "AWS IQ",
      "AWS Activate para startups",
      "AWS Managed Services (AMS)",
      "AWS Support"
    ],
    correctAnswer: 0,
    explanation: "O AWS IQ permite contratar especialistas certificados da AWS para ajudar em projetos específicos."
  },
  {
    id: 28,
    text: "Qual serviço da AWS oferece gerenciamento de infraestrutura por especialistas?",
    options: [
      "AWS Managed Services (AMS)",
      "AWS IQ",
      "AWS Activate para startups",
      "AWS Support"
    ],
    correctAnswer: 0,
    explanation: "O AWS Managed Services (AMS) oferece gerenciamento de infraestrutura por especialistas, ajudando a operar e otimizar a infraestrutura na AWS."
  },
  {
    id: 29,
    text: "Qual serviço da AWS oferece suporte técnico para clientes da AWS?",
    options: [
      "AWS Support",
      "AWS Managed Services (AMS)",
      "AWS IQ",
      "AWS Activate para startups"
    ],
    correctAnswer: 0,
    explanation: "O AWS Support oferece suporte técnico para clientes da AWS, com diferentes níveis de suporte para atender às necessidades dos usuários."
  },
  {
    id: 30,
    text: "Qual serviço da AWS é um banco de dados relacional compatível com MySQL e PostgreSQL?",
    options: [
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon Neptune"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Aurora é um banco de dados relacional compatível com MySQL e PostgreSQL, oferecendo desempenho e escalabilidade superiores."
  },
  {
    id: 31,
    text: "Qual serviço da AWS é um banco de dados NoSQL totalmente gerenciado?",
    options: [
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon RDS",
      "Amazon Neptune"
    ],
    correctAnswer: 0,
    explanation: "O Amazon DynamoDB é um banco de dados NoSQL totalmente gerenciado, projetado para aplicações que exigem baixa latência e alta escalabilidade."
  },
  {
    id: 32,
    text: "Qual serviço da AWS é um banco de dados em memória compatível com Redis?",
    options: [
      "Amazon MemoryDB para Redis",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon RDS"
    ],
    correctAnswer: 0,
    explanation: "O Amazon MemoryDB para Redis é um banco de dados em memória compatível com Redis, oferecendo desempenho e durabilidade."
  },
  {
    id: 33,
    text: "Qual serviço da AWS é um banco de dados de grafos totalmente gerenciado?",
    options: [
      "Amazon Neptune",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon RDS"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Neptune é um banco de dados de grafos totalmente gerenciado, ideal para aplicações que exigem consultas complexas em dados relacionais."
  },
  {
    id: 34,
    text: "Qual serviço da AWS permite gerenciar configurações de aplicativos?",
    options: [
      "AWS AppConfig",
      "AWS CLI",
      "AWS Cloud9",
      "AWS CloudShell"
    ],
    correctAnswer: 0,
    explanation: "O AWS AppConfig permite gerenciar configurações de aplicativos, facilitando a atualização e o gerenciamento de configurações em tempo real."
  },
  {
    id: 35,
    text: "Qual serviço da AWS é uma interface de linha de comando para gerenciar serviços da AWS?",
    options: [
      "AWS CLI",
      "AWS AppConfig",
      "AWS Cloud9",
      "AWS CloudShell"
    ],
    correctAnswer: 0,
    explanation: "O AWS CLI é uma interface de linha de comando que permite gerenciar serviços da AWS diretamente do terminal."
  },
  {
    id: 36,
    text: "Qual serviço da AWS é um ambiente de desenvolvimento integrado (IDE) baseado em nuvem?",
    options: [
      "AWS Cloud9",
      "AWS CLI",
      "AWS AppConfig",
      "AWS CloudShell"
    ],
    correctAnswer: 0,
    explanation: "O AWS Cloud9 é um IDE baseado em nuvem que permite desenvolver, depurar e executar código diretamente no navegador."
  },
  {
    id: 37,
    text: "Qual serviço da AWS permite acessar um shell baseado em navegador para gerenciar recursos da AWS?",
    options: [
      "AWS CloudShell",
      "AWS CLI",
      "AWS AppConfig",
      "AWS Cloud9"
    ],
    correctAnswer: 0,
    explanation: "O AWS CloudShell permite acessar um shell baseado em navegador para gerenciar recursos da AWS, sem a necessidade de instalar software local."
  },
  {
    id: 38,
    text: "Qual serviço da AWS é um repositório de artefatos de desenvolvimento?",
    options: [
      "AWS CodeArtifact",
      "AWS CodeBuild",
      "AWS CodeCommit",
      "AWS CodeDeploy"
    ],
    correctAnswer: 0,
    explanation: "O AWS CodeArtifact é um repositório de artefatos de desenvolvimento que facilita o armazenamento e o gerenciamento de dependências de software."
  },
  {
    id: 39,
    text: "Qual serviço da AWS é um serviço de integração contínua (CI) totalmente gerenciado?",
    options: [
      "AWS CodeBuild",
      "AWS CodeArtifact",
      "AWS CodeCommit",
      "AWS CodeDeploy"
    ],
    correctAnswer: 0,
    explanation: "O AWS CodeBuild é um serviço de integração contínua totalmente gerenciado que compila código, executa testes e produz pacotes prontos para implantação."
  },
  {
    id: 40,
    text: "Qual serviço da AWS é um repositório de código gerenciado?",
    options: [
      "AWS CodeCommit",
      "AWS CodeArtifact",
      "AWS CodeBuild",
      "AWS CodeDeploy"
    ],
    correctAnswer: 0,
    explanation: "O AWS CodeCommit é um repositório de código gerenciado que permite armazenar e gerenciar código-fonte de forma segura e escalável."
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

