const originalQuestions = [
  {
    id: 1,
    text: "Qual das seguintes opções descreve melhor o uso do AWS Fargate?",
    options: [
      "Um serviço que permite executar contêineres sem gerenciar servidores ou clusters",
      "Um serviço para provisionar instâncias EC2 de forma automática",
      "Um ambiente de execução para funções serverless",
      "Um serviço para deploy de aplicativos web em máquinas virtuais"
    ],
    correctAnswer: 0,
    explanation: "O AWS Fargate é um serviço que permite executar contêineres sem a necessidade de gerenciar servidores ou clusters, sendo uma opção para Amazon ECS e EKS."
  },
  {
    id: 2,
    text: "Quais das seguintes afirmações sobre o Amazon EKS estão corretas? (Escolha duas)",
    options: [
      "É um serviço gerenciado para executar Kubernetes na AWS",
      "Requer a configuração manual de nós de trabalho",
      "Integra-se nativamente com o AWS Fargate para execução de contêineres",
      "É uma solução ideal apenas para aplicativos monolíticos"
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon EKS é um serviço gerenciado para Kubernetes e integra-se com o AWS Fargate para execução de contêineres sem gerenciamento de servidores."
  },
  {
    id: 3,
    text: "Qual é a principal vantagem do AWS Lambda@Edge em comparação com o AWS Lambda tradicional?",
    options: [
      "Executa funções mais próximas aos usuários finais, reduzindo a latência",
      "Permite a execução de funções por períodos ilimitados",
      "Oferece maior capacidade de memória e CPU",
      "Não requer configuração de permissões IAM"
    ],
    correctAnswer: 0,
    explanation: "O AWS Lambda@Edge executa funções mais próximas aos usuários finais, reduzindo a latência ao processar solicitações na borda da rede da AWS."
  },
  {
    id: 4,
    text: "Quais das seguintes opções são casos de uso adequados para o AWS Batch? (Escolha duas)",
    options: [
      "Processamento de grandes volumes de dados em paralelo",
      "Execução de aplicativos web escaláveis",
      "Orquestração de contêineres em clusters Kubernetes",
      "Execução de jobs de computação de alta performance (HPC)"
    ],
    correctAnswer: [0, 3],
    explanation: "O AWS Batch é ideal para processamento de grandes volumes de dados em paralelo e execução de jobs de computação de alta performance (HPC)."
  },
  {
    id: 5,
    text: "Qual das seguintes opções descreve melhor o AWS Outposts?",
    options: [
      "Um serviço que estende a infraestrutura da AWS para o data center local",
      "Um serviço para deploy de aplicativos serverless",
      "Uma solução para gerenciamento de contêineres em nuvem híbrida",
      "Um serviço de armazenamento de objetos para ambientes locais"
    ],
    correctAnswer: 0,
    explanation: "O AWS Outposts estende a infraestrutura da AWS para o data center local, permitindo a execução de serviços AWS em ambientes on-premises."
  },
  {
    id: 6,
    text: "Quais das seguintes afirmações sobre o Amazon Lightsail estão corretas? (Escolha duas)",
    options: [
      "Oferece uma maneira simplificada de lançar instâncias virtuais privadas (VPS)",
      "É ideal para aplicativos que exigem alto desempenho e escalabilidade automática",
      "Inclui um plano de preços fixos com recursos pré-configurados",
      "Requer configuração manual de balanceadores de carga e auto scaling"
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon Lightsail oferece uma maneira simplificada de lançar VPS e inclui um plano de preços fixos com recursos pré-configurados."
  },
  {
    id: 7,
    text: "Qual das seguintes opções é uma característica do AWS Elastic Beanstalk?",
    options: [
      "Fornece um ambiente totalmente gerenciado para deploy de aplicativos web",
      "Permite a execução de contêineres sem gerenciamento de servidores",
      "É um serviço para orquestração de clusters Kubernetes",
      "Oferece armazenamento de objetos ilimitado para aplicativos"
    ],
    correctAnswer: 0,
    explanation: "O AWS Elastic Beanstalk fornece um ambiente totalmente gerenciado para deploy de aplicativos web, abstraindo a infraestrutura subjacente."
  },
  {
    id: 8,
    text: "Quais das seguintes afirmações sobre o Amazon ECS estão corretas? (Escolha duas)",
    options: [
      "É um serviço de orquestração de contêineres compatível com Docker",
      "Requer o uso exclusivo do AWS Fargate para execução de tarefas",
      "Permite a execução de contêineres em instâncias EC2 gerenciadas pelo usuário",
      "É uma solução apenas para aplicativos serverless"
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon ECS é um serviço de orquestração de contêineres compatível com Docker e permite a execução de contêineres em instâncias EC2 gerenciadas pelo usuário."
  },
  {
    id: 9,
    text: "Qual das seguintes opções descreve melhor o uso do AWS Lambda?",
    options: [
      "Execução de código em resposta a eventos sem gerenciamento de servidores",
      "Provisionamento automático de instâncias EC2 para aplicativos web",
      "Orquestração de contêineres em clusters Kubernetes",
      "Execução de jobs de longa duração com alto uso de CPU"
    ],
    correctAnswer: 0,
    explanation: "O AWS Lambda permite a execução de código em resposta a eventos sem a necessidade de gerenciamento de servidores."
  },
  {
    id: 10,
    text: "Quais das seguintes opções são benefícios do Amazon EC2 Spot Instances? (Escolha duas)",
    options: [
      "Custos significativamente reduzidos em comparação com instâncias On-Demand",
      "Garantia de disponibilidade contínua por 24 horas",
      "Ideal para workloads críticos que não toleram interrupções",
      "Permite a execução de workloads tolerantes a interrupções"
    ],
    correctAnswer: [0, 3],
    explanation: "As Spot Instances oferecem custos reduzidos e são ideais para workloads tolerantes a interrupções."
  },
  {
    id: 11,
    text: "Qual das seguintes opções descreve melhor o uso do AWS Batch?",
    options: [
      "Execução de jobs de computação em larga escala",
      "Gerenciamento de clusters Kubernetes",
      "Provisionamento automático de instâncias EC2 para aplicativos web",
      "Execução de funções serverless em resposta a eventos"
    ],
    correctAnswer: 0,
    explanation: "O AWS Batch é projetado para execução de jobs de computação em larga escala, como processamento de dados e HPC."
  },
  {
    id: 12,
    text: "Quais das seguintes afirmações sobre o AWS Lambda@Edge estão corretas? (Escolha duas)",
    options: [
      "Executa funções mais próximas aos usuários finais para reduzir a latência",
      "Permite a execução de funções por períodos ilimitados",
      "É integrado ao Amazon CloudFront para processamento na borda",
      "Requer o uso de instâncias EC2 para execução"
    ],
    correctAnswer: [0, 2],
    explanation: "O AWS Lambda@Edge executa funções mais próximas aos usuários finais e é integrado ao Amazon CloudFront."
  },
  {
    id: 13,
    text: "Qual das seguintes opções descreve melhor o uso do Amazon Lightsail?",
    options: [
      "Uma solução simplificada para lançar e gerenciar VPS",
      "Um serviço para orquestração de contêineres em clusters Kubernetes",
      "Um ambiente de execução para funções serverless",
      "Um serviço para deploy de aplicativos web altamente escaláveis"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Lightsail é uma solução simplificada para lançar e gerenciar VPS, ideal para workloads simples."
  },
  {
    id: 14,
    text: "Quais das seguintes afirmações sobre o AWS Outposts estão corretas? (Escolha duas)",
    options: [
      "Permite a execução de serviços AWS em ambientes on-premises",
      "É uma solução apenas para armazenamento de objetos locais",
      "Integra-se com a infraestrutura local e a nuvem da AWS",
      "Requer a configuração manual de todos os serviços AWS"
    ],
    correctAnswer: [0, 2],
    explanation: "O AWS Outposts permite a execução de serviços AWS em ambientes on-premises e integra-se com a infraestrutura local e a nuvem da AWS."
  },
  {
    id: 15,
    text: "Qual das seguintes opções descreve melhor o uso do AWS Elastic Beanstalk?",
    options: [
      "Um serviço para deploy e gerenciamento de aplicativos web",
      "Um serviço para execução de contêineres sem gerenciamento de servidores",
      "Um ambiente de execução para funções serverless",
      "Um serviço para orquestração de clusters Kubernetes"
    ],
    correctAnswer: 0,
    explanation: "O AWS Elastic Beanstalk é um serviço para deploy e gerenciamento de aplicativos web, abstraindo a infraestrutura subjacente."
  },
  {
    id: 16,
    text: "Quais das seguintes opções são características do Amazon EKS? (Escolha duas)",
    options: [
      "É um serviço gerenciado para Kubernetes na AWS",
      "Requer a configuração manual de todos os nós de trabalho",
      "Integra-se com o AWS Fargate para execução de contêineres",
      "É uma solução apenas para aplicativos monolíticos"
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon EKS é um serviço gerenciado para Kubernetes e integra-se com o AWS Fargate para execução de contêineres."
  },
  {
    id: 17,
    text: "Qual das seguintes opções descreve melhor o uso do AWS Fargate?",
    options: [
      "Execução de contêineres sem gerenciamento de servidores",
      "Provisionamento automático de instâncias EC2 para aplicativos web",
      "Orquestração de clusters Kubernetes",
      "Execução de funções serverless em resposta a eventos"
    ],
    correctAnswer: 0,
    explanation: "O AWS Fargate permite a execução de contêineres sem a necessidade de gerenciamento de servidores."
  },
  {
    id: 18,
    text: "Quais das seguintes afirmações sobre o Amazon EC2 Auto Scaling estão corretas? (Escolha duas)",
    options: [
      "Ajusta automaticamente a capacidade de instâncias para atender à demanda",
      "Garante alta disponibilidade e otimização de custos",
      "Requer configuração manual de cada instância adicionada",
      "É um serviço apenas para aplicativos serverless"
    ],
    correctAnswer: [0, 1],
    explanation: "O Amazon EC2 Auto Scaling ajusta automaticamente a capacidade de instâncias para atender à demanda, garantindo alta disponibilidade e otimização de custos."
  },
  {
    id: 19,
    text: "Qual das seguintes opções descreve melhor o uso do AWS Lambda?",
    options: [
      "Execução de código em resposta a eventos sem gerenciamento de servidores",
      "Provisionamento automático de instâncias EC2 para aplicativos web",
      "Orquestração de contêineres em clusters Kubernetes",
      "Execução de jobs de longa duração com alto uso de CPU"
    ],
    correctAnswer: 0,
    explanation: "O AWS Lambda permite a execução de código em resposta a eventos sem a necessidade de gerenciamento de servidores."
  },
  {
    id: 20,
    text: "Quais das seguintes opções são benefícios do AWS Fargate? (Escolha duas)",
    options: [
      "Elimina a necessidade de gerenciar servidores para contêineres",
      "Oferece maior controle sobre a infraestrutura subjacente",
      "É ideal apenas para aplicativos monolíticos",
      "Integra-se com Amazon ECS e EKS"
    ],
    correctAnswer: [0, 3],
    explanation: "O AWS Fargate elimina a necessidade de gerenciar servidores para contêineres e integra-se com Amazon ECS e EKS."
  },
  {
    id: 21,
    text: "Qual das seguintes famílias de instâncias EC2 é mais adequada para workloads que exigem alta capacidade de memória, como bancos de dados em memória e análises de big data?",
    options: [
      "Uso Geral (por exemplo, M5)",
      "Otimizado para Memória (por exemplo, R5)",
      "Otimizado para Computação (por exemplo, C5)",
      "Otimizado para Armazenamento (por exemplo, I3)"
    ],
    correctAnswer: 1,
    explanation: "As instâncias otimizadas para memória, como a família R5, são projetadas para workloads que exigem alta capacidade de memória, como bancos de dados em memória e análises de big data."
  },
  {
    id: 22,
    text: "Qual das seguintes opções de compra do Amazon EC2 permite que você pague por capacidade reservada com um compromisso de 1 ou 3 anos, oferecendo um desconto significativo em comparação com o modelo sob demanda?",
    options: [
      "Instâncias Spot",
      "Instâncias Reservadas",
      "Saving Plans",
      "Hosts Dedicados"
    ],
    correctAnswer: 1,
    explanation: "As Instâncias Reservadas permitem que você pague por capacidade reservada com um compromisso de 1 ou 3 anos, oferecendo um desconto significativo em comparação com o modelo sob demanda."
  },
  {
    id: 23,
    text: "Qual das seguintes afirmações sobre o Amazon SNS está correta?",
    options: [
      "O Amazon SNS é um serviço de fila de mensagens que permite o armazenamento temporário de mensagens.",
      "O Amazon SNS é um serviço de notificação que permite o envio de mensagens para múltiplos assinantes.",
      "O Amazon SNS é um serviço de banco de dados NoSQL.",
      "O Amazon SNS é um serviço de computação em nuvem."
    ],
    correctAnswer: 1,
    explanation: "O Amazon SNS (Simple Notification Service) é um serviço de notificação que permite o envio de mensagens para múltiplos assinantes, como endpoints HTTP, e-mails, ou dispositivos móveis."
  },
  {
    id: 24,
    text: "Qual das seguintes opções de compra do Amazon EC2 é mais adequada para workloads que podem ser interrompidas e não exigem tempo de execução contínuo?",
    options: [
      "Instâncias Sob Demanda",
      "Instâncias Reservadas",
      "Instâncias Spot",
      "Hosts Dedicados"
    ],
    correctAnswer: 2,
    explanation: "As Instâncias Spot são ideais para workloads que podem ser interrompidas e não exigem tempo de execução contínuo, oferecendo custos significativamente mais baixos em comparação com outras opções."
  },
  {
    id: 25,
    text: "Qual das seguintes famílias de instâncias EC2 é mais adequada para workloads que exigem alto desempenho de computação, como processamento de dados científicos e modelagem financeira?",
    options: [
      "Uso Geral (por exemplo, M5)",
      "Otimizado para Computação (por exemplo, C5)",
      "Otimizado para Armazenamento (por exemplo, I3)",
      "Computação Acelerada (por exemplo, P3)"
    ],
    correctAnswer: 1,
    explanation: "As instâncias otimizadas para computação, como a família C5, são projetadas para workloads que exigem alto desempenho de computação, como processamento de dados científicos e modelagem financeira."
  },
  {
    id: 26,
    text: "Qual das seguintes afirmações sobre o AWS Fargate está correta?",
    options: [
      "O AWS Fargate é um serviço que permite executar contêineres sem gerenciar servidores ou clusters.",
      "O AWS Fargate é um serviço de armazenamento de objetos.",
      "O AWS Fargate é um serviço de banco de dados relacional.",
      "O AWS Fargate é um serviço de fila de mensagens."
    ],
    correctAnswer: 0,
    explanation: "O AWS Fargate é um serviço que permite executar contêineres sem a necessidade de gerenciar servidores ou clusters, sendo uma opção para Amazon ECS e EKS."
  },
  {
    id: 27,
    text: "Qual das seguintes opções de compra do Amazon EC2 oferece a maior flexibilidade em termos de capacidade de computação, sem compromisso de longo prazo?",
    options: [
      "Instâncias Reservadas",
      "Instâncias Spot",
      "Saving Plans",
      "Instâncias Sob Demanda"
    ],
    correctAnswer: 3,
    explanation: "As Instâncias Sob Demanda oferecem a maior flexibilidade em termos de capacidade de computação, sem compromisso de longo prazo, permitindo que você pague apenas pelo tempo de uso."
  },
  {
    id: 28,
    text: "Qual das seguintes afirmações sobre o Amazon SQS está correta?",
    options: [
      "O Amazon SQS é um serviço de notificação que permite o envio de mensagens para múltiplos assinantes.",
      "O Amazon SQS é um serviço de fila de mensagens que permite o armazenamento temporário de mensagens.",
      "O Amazon SQS é um serviço de banco de dados NoSQL.",
      "O Amazon SQS é um serviço de computação em nuvem."
    ],
    correctAnswer: 1,
    explanation: "O Amazon SQS (Simple Queue Service) é um serviço de fila de mensagens que permite o armazenamento temporário de mensagens, garantindo que as mensagens sejam processadas de forma confiável."
  },
  {
    id: 29,
    text: "Qual das seguintes famílias de instâncias EC2 é mais adequada para workloads que exigem alto desempenho de armazenamento, como bancos de dados NoSQL e data warehouses?",
    options: [
      "Uso Geral (por exemplo, M5)",
      "Otimizado para Armazenamento (por exemplo, I3)",
      "Otimizado para Computação (por exemplo, C5)",
      "Computação Acelerada (por exemplo, P3)"
    ],
    correctAnswer: 1,
    explanation: "As instâncias otimizadas para armazenamento, como a família I3, são projetadas para workloads que exigem alto desempenho de armazenamento, como bancos de dados NoSQL e data warehouses."
  },
  {
    id: 30,
    text: "Qual das seguintes opções de compra do Amazon EC2 é mais adequada para empresas que precisam de isolamento físico de hardware para cumprir requisitos de conformidade?",
    options: [
      "Instâncias Spot",
      "Instâncias Reservadas",
      "Hosts Dedicados",
      "Saving Plans"
    ],
    correctAnswer: 2,
    explanation: "Os Hosts Dedicados são ideais para empresas que precisam de isolamento físico de hardware para cumprir requisitos de conformidade, oferecendo controle total sobre o posicionamento das instâncias."
  },
  {
    id: 31,
    text: "Qual das seguintes afirmações sobre o AWS Elastic Beanstalk está correta?",
    options: [
      "O AWS Elastic Beanstalk é um serviço que permite o deploy de aplicativos web sem gerenciar a infraestrutura subjacente.",
      "O AWS Elastic Beanstalk é um serviço de banco de dados relacional.",
      "O AWS Elastic Beanstalk é um serviço de fila de mensagens.",
      "O AWS Elastic Beanstalk é um serviço de armazenamento de objetos."
    ],
    correctAnswer: 0,
    explanation: "O AWS Elastic Beanstalk é um serviço que permite o deploy de aplicativos web sem a necessidade de gerenciar a infraestrutura subjacente, automatizando o provisionamento e a configuração."
  },
  {
    id: 32,
    text: "Qual das seguintes famílias de instâncias EC2 é mais adequada para workloads que exigem processamento de GPU, como machine learning e renderização de gráficos?",
    options: [
      "Uso Geral (por exemplo, M5)",
      "Otimizado para Computação (por exemplo, C5)",
      "Computação Acelerada (por exemplo, P3)",
      "Otimizado para Armazenamento (por exemplo, I3)"
    ],
    correctAnswer: 2,
    explanation: "As instâncias de computação acelerada, como a família P3, são projetadas para workloads que exigem processamento de GPU, como machine learning e renderização de gráficos."
  },
  {
    id: 33,
    text: "Qual das seguintes opções de compra do Amazon EC2 permite que você economize até 72% em comparação com o modelo sob demanda, com um compromisso de uso consistente de 1 ou 3 anos?",
    options: [
      "Instâncias Spot",
      "Instâncias Reservadas",
      "Saving Plans",
      "Hosts Dedicados"
    ],
    correctAnswer: 2,
    explanation: "Os Saving Plans permitem que você economize até 72% em comparação com o modelo sob demanda, com um compromisso de uso consistente de 1 ou 3 anos, aplicando-se a uma variedade de serviços da AWS."
  },
  {
    id: 34,
    text: "Qual das seguintes afirmações sobre o Amazon SNS e o Amazon SQS está correta?",
    options: [
      "O Amazon SNS é usado para armazenar mensagens temporariamente, enquanto o Amazon SQS é usado para notificar assinantes.",
      "O Amazon SNS é usado para notificar assinantes, enquanto o Amazon SQS é usado para armazenar mensagens temporariamente.",
      "Ambos são serviços de banco de dados NoSQL.",
      "Ambos são serviços de computação em nuvem."
    ],
    correctAnswer: 1,
    explanation: "O Amazon SNS é usado para notificar assinantes, enquanto o Amazon SQS é usado para armazenar mensagens temporariamente, garantindo que as mensagens sejam processadas de forma confiável."
  },
  {
    id: 35,
    text: "Qual das seguintes famílias de instâncias EC2 é mais adequada para workloads de uso geral, como servidores web e aplicativos empresariais?",
    options: [
      "Uso Geral (por exemplo, M5)",
      "Otimizado para Computação (por exemplo, C5)",
      "Otimizado para Armazenamento (por exemplo, I3)",
      "Computação Acelerada (por exemplo, P3)"
    ],
    correctAnswer: 0,
    explanation: "As instâncias de uso geral, como a família M5, são projetadas para workloads de uso geral, como servidores web e aplicativos empresariais, oferecendo um equilíbrio entre computação, memória e rede."
  }
];

// Lista de questões ativa (será embaralhada)
let questions = [...originalQuestions];

// Estado do simulado
const examState = {
  currentQuestionIndex: 0,
  answers: {},
  markedForReview: new Set(),
  timeRemaining: 35 * 60, // 30 minutos em segundos
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