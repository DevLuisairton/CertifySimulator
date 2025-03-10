const originalQuestions = [
  {
    id: 1,
    text: "Qual das seguintes opções descreve corretamente uma vantagem do Amazon S3?",
    options: [
      "Armazena dados em blocos para acesso de baixa latência",
      "Oferece armazenamento distribuído e escalável para objetos",
      "Requer provisionamento prévio de capacidade",
      "É um banco de dados NoSQL altamente escalável"
    ],
    correctAnswer: 1,
    explanation: "O Amazon S3 é um serviço de armazenamento de objetos altamente escalável e distribuído, ideal para armazenar grandes quantidades de dados."
  },
  {
    id: 2,
    text: "Quais das seguintes características são verdadeiras sobre o Amazon RDS? (Escolha duas)",
    options: [
      "Suporta bancos de dados relacionais como MySQL, PostgreSQL e SQL Server",
      "Permite dimensionamento automático horizontal nativo",
      "Gerencia backups, atualizações e failover automaticamente",
      "Usa apenas armazenamento baseado em objetos"
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon RDS suporta vários bancos de dados relacionais e gerencia tarefas operacionais como backups e failover de forma automática."
  },
  {
    id: 3,
    text: "Qual é a principal diferença entre Amazon EBS e Amazon S3?",
    options: [
      "Amazon EBS é um serviço de armazenamento de blocos, enquanto Amazon S3 é um serviço de armazenamento de objetos",
      "Amazon EBS é usado apenas para backups, enquanto Amazon S3 é usado para bancos de dados",
      "Amazon EBS é escalável globalmente, enquanto Amazon S3 é limitado a uma única região",
      "Amazon EBS é um banco de dados NoSQL, enquanto Amazon S3 é um banco de dados relacional"
    ],
    correctAnswer: 0,
    explanation: "O Amazon EBS é um serviço de armazenamento de blocos para instâncias EC2, enquanto o Amazon S3 é um serviço de armazenamento de objetos."
  },
  {
    id: 4,
    text: "Quais são características do Amazon DynamoDB? (Escolha duas)",
    options: [
      "Banco de dados NoSQL gerenciado e altamente escalável",
      "Suporta apenas consultas SQL tradicionais",
      "Oferece desempenho de milissegundos de latência única dígito",
      "Requer provisionamento manual de capacidade de armazenamento"
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon DynamoDB é um banco de dados NoSQL gerenciado e altamente escalável, com desempenho de milissegundos de latência única dígito."
  },
  {
    id: 5,
    text: "Qual é a principal vantagem do Amazon Aurora em relação ao Amazon RDS?",
    options: [
      "Oferece desempenho e escalabilidade superiores com compatibilidade MySQL e PostgreSQL",
      "É um banco de dados NoSQL altamente escalável",
      "Não requer backups automáticos",
      "É mais barato que todas as outras opções de banco de dados na AWS"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Aurora oferece desempenho e escalabilidade superiores, sendo compatível com MySQL e PostgreSQL."
  },
  {
    id: 6,
    text: "Quais são benefícios do Amazon Redshift? (Escolha duas)",
    options: [
      "Data warehouse escalável para análise de grandes volumes de dados",
      "Banco de dados relacional para transações online",
      "Integração nativa com ferramentas de BI como Tableau e Power BI",
      "Ideal para aplicativos que exigem baixa latência de milissegundos"
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon Redshift é um data warehouse escalável para análise de dados e integra-se com ferramentas de BI."
  },
  {
    id: 7,
    text: "Qual é a principal função do Amazon Glacier?",
    options: [
      "Armazenamento de objetos de baixo custo para dados acessados com frequência",
      "Armazenamento de longo prazo e baixo custo para arquivamento de dados",
      "Banco de dados NoSQL para grandes volumes de dados",
      "Armazenamento de blocos para instâncias EC2"
    ],
    correctAnswer: 1,
    explanation: "O Amazon Glacier é projetado para armazenamento de longo prazo e baixo custo, ideal para arquivamento de dados."
  },
  {
    id: 8,
    text: "Quais são características do AWS Backup? (Escolha duas)",
    options: [
      "Oferece backup centralizado para múltiplos serviços AWS",
      "Requer configuração manual para cada recurso",
      "Permite agendamento e políticas de retenção de backups",
      "Funciona apenas com Amazon S3"
    ],
    correctAnswer: [0, 2],
    explanation: "O AWS Backup oferece backup centralizado e permite agendamento e políticas de retenção."
  },
  {
    id: 9,
    text: "Qual é a principal vantagem do Amazon EFS em relação ao Amazon EBS?",
    options: [
      "Oferece armazenamento de arquivos compartilhados e escalável",
      "É mais barato que o Amazon EBS",
      "Funciona apenas com instâncias EC2 em uma única sub-rede",
      "Não requer configuração de permissões"
    ],
    correctAnswer: 0,
    explanation: "O Amazon EFS oferece armazenamento de arquivos compartilhados e escalável, ao contrário do Amazon EBS, que é baseado em blocos."
  },
  {
    id: 10,
    text: "Quais são benefícios do Amazon DocumentDB? (Escolha duas)",
    options: [
      "Banco de dados NoSQL compatível com MongoDB",
      "Suporta apenas consultas SQL tradicionais",
      "Oferece escalabilidade automática e alta disponibilidade",
      "Requer provisionamento manual de capacidade de armazenamento"
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon DocumentDB é compatível com MongoDB e oferece escalabilidade automática e alta disponibilidade."
  },
  {
    id: 11,
    text: "Qual é a principal função do Amazon S3 Glacier Deep Archive?",
    options: [
      "Armazenamento de objetos para dados acessados com frequência",
      "Armazenamento de longo prazo com o menor custo da AWS",
      "Banco de dados relacional para análise de dados",
      "Armazenamento de blocos para instâncias EC2"
    ],
    correctAnswer: 1,
    explanation: "O Amazon S3 Glacier Deep Archive é a opção de armazenamento de longo prazo com o menor custo da AWS."
  },
  {
    id: 12,
    text: "Quais são características do Amazon Aurora? (Escolha duas)",
    options: [
      "Compatível com MySQL e PostgreSQL",
      "Banco de dados NoSQL altamente escalável",
      "Oferece replicação automática em três zonas de disponibilidade",
      "Requer configuração manual de backups"
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon Aurora é compatível com MySQL e PostgreSQL e oferece replicação automática em três zonas de disponibilidade."
  },
  {
    id: 13,
    text: "Qual é a principal vantagem do Amazon DynamoDB em relação a bancos de dados relacionais?",
    options: [
      "Oferece desempenho de milissegundos de latência única dígito para qualquer escala",
      "Suporta consultas SQL complexas",
      "Requer provisionamento manual de capacidade",
      "É mais barato que todos os bancos de dados relacionais"
    ],
    correctAnswer: 0,
    explanation: "O Amazon DynamoDB oferece desempenho de milissegundos de latência única dígito, independentemente da escala."
  },
  {
    id: 14,
    text: "Quais são benefícios do Amazon EBS? (Escolha duas)",
    options: [
      "Armazenamento de blocos persistente para instâncias EC2",
      "Oferece armazenamento compartilhado entre múltiplas instâncias",
      "Permite snapshots para backups",
      "É um serviço de armazenamento de objetos"
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon EBS fornece armazenamento de blocos persistente para instâncias EC2 e permite snapshots para backups."
  },
  {
    id: 15,
    text: "Qual é a principal função do Amazon Redshift?",
    options: [
      "Banco de dados relacional para transações online",
      "Data warehouse para análise de grandes volumes de dados",
      "Armazenamento de objetos para dados não estruturados",
      "Banco de dados NoSQL para aplicativos de baixa latência"
    ],
    correctAnswer: 1,
    explanation: "O Amazon Redshift é um data warehouse projetado para análise de grandes volumes de dados."
  },
  {
    id: 16,
    text: "Quais são características do Amazon S3 Intelligent-Tiering? (Escolha duas)",
    options: [
      "Move objetos automaticamente entre camadas de armazenamento com base no acesso",
      "Oferece apenas uma camada de armazenamento de baixo custo",
      "Requer configuração manual para mover objetos entre camadas",
      "Ideal para dados com padrões de acesso desconhecidos ou variáveis"
    ],
    correctAnswer: [0, 3],
    explanation: "O Amazon S3 Intelligent-Tiering move objetos automaticamente entre camadas e é ideal para dados com padrões de acesso desconhecidos."
  },
  {
    id: 17,
    text: "Qual é a principal vantagem do Amazon EFS em relação ao Amazon S3?",
    options: [
      "Oferece armazenamento de arquivos compartilhados e escalável",
      "É mais barato que o Amazon S3",
      "Funciona apenas com instâncias EC2 em uma única sub-rede",
      "Não requer configuração de permissões"
    ],
    correctAnswer: 0,
    explanation: "O Amazon EFS oferece armazenamento de arquivos compartilhados e escalável, ao contrário do Amazon S3, que é baseado em objetos."
  },
  {
    id: 18,
    text: "Quais são benefícios do Amazon RDS? (Escolha duas)",
    options: [
      "Gerencia backups, patches e failover automaticamente",
      "Oferece dimensionamento automático horizontal nativo",
      "Suporta apenas bancos de dados NoSQL",
      "Requer configuração manual de backups"
    ],
    correctAnswer: [0, 1],
    explanation: "O Amazon RDS gerencia backups, patches e failover automaticamente e oferece dimensionamento automático."
  },
  {
    id: 19,
    text: "Qual é a principal função do Amazon DocumentDB?",
    options: [
      "Banco de dados relacional para análise de dados",
      "Banco de dados NoSQL compatível com MongoDB",
      "Armazenamento de objetos para dados não estruturados",
      "Data warehouse para grandes volumes de dados"
    ],
    correctAnswer: 1,
    explanation: "O Amazon DocumentDB é um banco de dados NoSQL compatível com MongoDB."
  },
  {
    id: 20,
    text: "Quais são características do Amazon S3? (Escolha duas)",
    options: [
      "Armazenamento de objetos altamente escalável",
      "Oferece apenas uma camada de armazenamento de baixo custo",
      "Ideal para armazenar grandes volumes de dados não estruturados",
      "Requer provisionamento manual de capacidade"
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon S3 é um serviço de armazenamento de objetos altamente escalável e ideal para dados não estruturados."
  },
  {
    id: 21,
    text: "Quais das seguintes afirmações sobre o Amazon EFS estão corretas? (Escolha duas)",
    options: [
      "O Amazon EFS é um serviço de armazenamento de blocos projetado para uso com instâncias EC2.",
      "O Amazon EFS oferece escalabilidade automática e é compatível com o protocolo NFS.",
      "O Amazon EFS é ideal para workloads que exigem baixa latência e alto desempenho de IOPS.",
      "O Amazon EFS pode ser montado em várias instâncias EC2 simultaneamente, permitindo compartilhamento de arquivos."
    ],
    correctAnswer: [1, 3],
    explanation: "O Amazon EFS é um serviço de armazenamento de arquivos escalável e compatível com o protocolo NFS, que pode ser montado em várias instâncias EC2 simultaneamente, permitindo o compartilhamento de arquivos."
  },
  {
    id: 22,
    text: "Quais das seguintes afirmações sobre o Amazon Aurora estão corretas? (Escolha duas)",
    options: [
      "O Amazon Aurora é compatível com os motores de banco de dados MySQL e PostgreSQL.",
      "O Amazon Aurora oferece desempenho semelhante ao de bancos de dados comerciais, mas com custos mais altos.",
      "O Amazon Aurora armazena dados em um único volume, o que limita sua escalabilidade.",
      "O Amazon Aurora replica automaticamente os dados em três zonas de disponibilidade para alta disponibilidade."
    ],
    correctAnswer: [0, 3],
    explanation: "O Amazon Aurora é compatível com MySQL e PostgreSQL, oferece alto desempenho e replica automaticamente os dados em três zonas de disponibilidade para alta disponibilidade."
  },
  {
    id: 23,
    text: "Quais das seguintes afirmações sobre o AWS DMS estão corretas? (Escolha duas)",
    options: [
      "O AWS DMS pode migrar bancos de dados entre diferentes engines, como Oracle para MySQL.",
      "O AWS DMS é usado apenas para migrar dados para o Amazon S3.",
      "O AWS DMS suporta migrações contínuas com replicação em tempo real.",
      "O AWS DMS não suporta migrações de bancos de dados on-premises para a nuvem."
    ],
    correctAnswer: [0, 2],
    explanation: "O AWS DMS pode migrar bancos de dados entre diferentes engines e suporta migrações contínuas com replicação em tempo real."
  },
  {
    id: 24,
    text: "Quais das seguintes afirmações sobre o Amazon DocumentDB estão corretas? (Escolha duas)",
    options: [
      "O Amazon DocumentDB é compatível com o MongoDB, permitindo a migração de aplicativos existentes.",
      "O Amazon DocumentDB é um banco de dados relacional que usa SQL como linguagem de consulta.",
      "O Amazon DocumentDB oferece escalabilidade automática e alta disponibilidade.",
      "O Amazon DocumentDB é otimizado para workloads de data warehousing."
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon DocumentDB é compatível com o MongoDB e oferece escalabilidade automática e alta disponibilidade, sendo ideal para workloads de documentos JSON."
  },
  {
    id: 25,
    text: "Quais das seguintes afirmações sobre o Amazon Neptune estão corretas? (Escolha duas)",
    options: [
      "O Amazon Neptune é um banco de dados de grafos que suporta consultas em grafos usando Gremlin e SPARQL.",
      "O Amazon Neptune é otimizado para workloads de análise de dados estruturados.",
      "O Amazon Neptune oferece alta disponibilidade com replicação em múltiplas zonas de disponibilidade.",
      "O Amazon Neptune é um banco de dados relacional que usa SQL como linguagem de consulta."
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon Neptune é um banco de dados de grafos que suporta consultas em grafos usando Gremlin e SPARQL e oferece alta disponibilidade com replicação em múltiplas zonas de disponibilidade."
  },
  {
    id: 26,
    text: "Quais das seguintes afirmações sobre o Amazon Managed Blockchain estão corretas? (Escolha duas)",
    options: [
      "O Amazon Managed Blockchain suporta frameworks como Hyperledger Fabric e Ethereum.",
      "O Amazon Managed Blockchain é usado apenas para armazenar dados estruturados.",
      "O Amazon Managed Blockchain permite a criação de redes blockchain escaláveis e gerenciadas.",
      "O Amazon Managed Blockchain não oferece integração com outros serviços da AWS."
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon Managed Blockchain suporta frameworks como Hyperledger Fabric e Ethereum e permite a criação de redes blockchain escaláveis e gerenciadas."
  },
  {
    id: 27,
    text: "Quais das seguintes afirmações sobre o Amazon QLDB estão corretas? (Escolha duas)",
    options: [
      "O Amazon QLDB é um banco de dados de ledger que fornece um registro imutável e verificável de transações.",
      "O Amazon QLDB é otimizado para workloads de análise de big data.",
      "O Amazon QLDB usa SQL como linguagem de consulta para acessar dados.",
      "O Amazon QLDB é um banco de dados relacional que suporta transações ACID."
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon QLDB é um banco de dados de ledger que fornece um registro imutável e verificável de transações e usa SQL como linguagem de consulta."
  },
  {
    id: 28,
    text: "Quais das seguintes afirmações sobre o Amazon ElastiCache estão corretas? (Escolha duas)",
    options: [
      "O Amazon ElastiCache suporta os motores Redis e Memcached.",
      "O Amazon ElastiCache é usado apenas para armazenamento de dados persistentes.",
      "O Amazon ElastiCache melhora o desempenho de aplicativos ao armazenar dados em memória.",
      "O Amazon ElastiCache não oferece alta disponibilidade ou escalabilidade."
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon ElastiCache suporta Redis e Memcached e melhora o desempenho de aplicativos ao armazenar dados em memória."
  },
  {
    id: 29,
    text: "Quais das seguintes afirmações sobre o Amazon DynamoDB Accelerator (DAX) estão corretas? (Escolha duas)",
    options: [
      "O DAX é um cache em memória que reduz a latência de leitura do DynamoDB.",
      "O DAX é usado apenas para melhorar o desempenho de operações de escrita no DynamoDB.",
      "O DAX é compatível com todas as APIs do DynamoDB.",
      "O DAX não oferece suporte a alta disponibilidade ou escalabilidade."
    ],
    correctAnswer: [0, 2],
    explanation: "O DAX é um cache em memória que reduz a latência de leitura do DynamoDB e é compatível com todas as APIs do DynamoDB."
  },
  {
    id: 30,
    text: "Quais das seguintes afirmações sobre o Amazon Aurora Global Database estão corretas? (Escolha duas)",
    options: [
      "O Aurora Global Database permite replicação de dados entre regiões com latência mínima.",
      "O Aurora Global Database é usado apenas para workloads de análise de big data.",
      "O Aurora Global Database oferece recuperação de desastres em nível global.",
      "O Aurora Global Database não suporta replicação assíncrona."
    ],
    correctAnswer: [0, 2],
    explanation: "O Aurora Global Database permite replicação de dados entre regiões com latência mínima e oferece recuperação de desastres em nível global."
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