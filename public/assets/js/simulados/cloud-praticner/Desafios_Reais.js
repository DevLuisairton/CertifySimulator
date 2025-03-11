const originalQuestions = [
  {
    id: 1,
    text: "Qual pilar do Well-Architected Framework enfatiza a seleção de tipos de recursos adequados e a otimização de custos ao longo do ciclo de vida?",
    options: [
      "Segurança",
      "Confiabilidade",
      "Eficiência de Performance",
      "Excelência Operacional"
    ],
    correctAnswer: 2,
    explanation: "O pilar de *Eficiência de Performance* foca na escolha de recursos que atendam demandas com o menor custo possível."
  },
  {
    id: 2,
    text: "Quais são dois princípios do pilar de Segurança do Well-Architected Framework? (Escolha duas)",
    options: [
      "Implementar autenticação multifator (MFA) para todos os usuários",
      "Aplicar o princípio do menor privilégio",
      "Usar apenas instâncias spot para reduzir custos",
      "Habilitar rastreamento de atividades com AWS CloudTrail"
    ],
    correctAnswer: [1, 3],
    explanation: "O pilar de Segurança prioriza controle de acesso granular e monitoramento contínuo."
  },
  {
    id: 3,
    text: "Qual pilar recomenda projetar sistemas para se recuperar automaticamente de falhas?",
    options: [
      "Confiabilidade",
      "Sustentabilidade",
      "Otimização de Custos",
      "Excelência Operacional"
    ],
    correctAnswer: 0,
    explanation: "A *Confiabilidade* envolve tolerância a falhas e recuperação automatizada."
  },
  {
    id: 4,
    text: "No contexto de Sustentabilidade, qual prática ajuda a reduzir o impacto ambiental?",
    options: [
      "Usar apenas regiões com menor latência",
      "Consolidar cargas de trabalho subutilizadas",
      "Priorizar instâncias de GPU para todos os workloads",
      "Ignorar métricas de utilização de recursos"
    ],
    correctAnswer: 1,
    explanation: "Consolidar workloads reduz o consumo energético e otimiza recursos."
  },
  {
    id: 5,
    text: "Qual pilar do WAW orienta a realização de testes de carga para antecipar falhas?",
    options: [
      "Segurança",
      "Excelência Operacional",
      "Eficiência de Performance",
      "Confiabilidade"
    ],
    correctAnswer: 1,
    explanation: "A *Excelência Operacional* inclui práticas como testes de carga e procedimentos de recuperação."
  },
  {
    id: 6,
    text: "Qual das seguintes ações está alinhada ao pilar de Otimização de Custos?",
    options: [
      "Provisionar capacidade máxima para picos eventuais",
      "Usar instâncias reservadas para cargas de trabalho estáveis",
      "Armazenar dados frequentemente acessados no Amazon Glacier",
      "Ignorar relatórios de uso da AWS Cost Explorer"
    ],
    correctAnswer: 1,
    explanation: "Instâncias reservadas oferecem economia para workloads previsíveis."
  },
  {
    id: 7,
    text: "Qual pilar do AWS CAF está relacionado à transformação cultural e treinamento de equipes?",
    options: [
      "Governança",
      "Plataforma",
      "Pessoas",
      "Negócios"
    ],
    correctAnswer: 2,
    explanation: "O pilar *Pessoas* aborda habilidades, cultura e mudança organizacional."
  },
  {
    id: 8,
    text: "Quais são dois objetivos do pilar de Governança do AWS CAF? (Escolha duas)",
    options: [
      "Definir políticas de tagging de recursos",
      "Migrar todos os servidores para a nuvem em 24 horas",
      "Estabelecer controles de conformidade",
      "Substituir todas as soluções on-premises por SaaS"
    ],
    correctAnswer: [0, 2],
    explanation: "Governança envolve políticas, compliance e gestão de riscos."
  },
  {
    id: 9,
    text: "Qual pilar do CAF se concentra na arquitetura técnica da nuvem?",
    options: [
      "Negócios",
      "Plataforma",
      "Operações",
      "Segurança"
    ],
    correctAnswer: 1,
    explanation: "O pilar *Plataforma* trata da infraestrutura, rede e serviços AWS."
  },
  {
    id: 10,
    text: "No pilar de Negócios do CAF, qual é uma prática recomendada?",
    options: [
      "Ignorar métricas de ROI",
      "Alinhar iniciativas de TI às metas organizacionais",
      "Priorizar apenas redução de custos",
      "Evitar automação de processos"
    ],
    correctAnswer: 1,
    explanation: "O pilar de Negócios conecta estratégias de TI aos objetivos da empresa."
  },
  {
    id: 11,
    text: "Qual pilar do CAF define processos para monitoramento e gerenciamento de incidentes?",
    options: [
      "Segurança",
      "Governança",
      "Operações",
      "Pessoas"
    ],
    correctAnswer: 2,
    explanation: "O pilar *Operações* abarca monitoramento, resposta a incidentes e ITSM."
  },
  {
    id: 12,
    text: "Qual prática está associada ao pilar de Segurança do AWS CAF?",
    options: [
      "Usar senhas padrão para agilidade",
      "Criptografar dados em repouso e trânsito",
      "Desabilitar logs para reduzir custos",
      "Ignorar avaliações de vulnerabilidades"
    ],
    correctAnswer: 1,
    explanation: "Criptografia é uma das bases da segurança na nuvem."
  },
  {
    id: 13,
    text: "Qual estratégia de migração envolve mover aplicações sem modificações?",
    options: [
      "Replatform",
      "Rehost",
      "Refactor",
      "Retain"
    ],
    correctAnswer: 1,
    explanation: "*Rehost* (lift-and-shift) é usado para migrações rápidas sem alterações."
  },
  {
    id: 14,
    text: "Qual dos 6 Rs se aplica a substituir um sistema legado por uma solução SaaS?",
    options: [
      "Retire",
      "Retain",
      "Repurchase",
      "Replatform"
    ],
    correctAnswer: 2,
    explanation: "*Repurchase* envolve adotar soluções terceiras (ex: Salesforce)."
  },
  {
    id: 15,
    text: "Qual estratégia envolve otimizar aplicações para a nuvem sem alterar sua funcionalidade principal?",
    options: [
      "Rehost",
      "Replatform",
      "Refactor",
      "Retire"
    ],
    correctAnswer: 1,
    explanation: "*Replatform* (lift-tinker-and-shift) inclui ajustes menores, como migrar para RDS."
  },
  {
    id: 16,
    text: "Qual dos 6 Rs é recomendado para sistemas críticos que não podem ser migrados imediatamente?",
    options: [
      "Refactor",
      "Retain",
      "Retire",
      "Rehost"
    ],
    correctAnswer: 1,
    explanation: "*Retain* mantém sistemas on-premises temporariamente."
  },
  {
    id: 17,
    text: "Qual R envolve reescrever uma aplicação para usar serviços nativos da nuvem?",
    options: [
      "Rehost",
      "Replatform",
      "Refactor",
      "Repurchase"
    ],
    correctAnswer: 2,
    explanation: "*Refactor* (re-architect) moderniza aplicações usando serviços como Lambda."
  },
  {
    id: 18,
    text: "Qual estratégia é usada para eliminar sistemas obsoletos durante a migração?",
    options: [
      "Retain",
      "Retire",
      "Rehost",
      "Replatform"
    ],
    correctAnswer: 1,
    explanation: "*Retire* remove aplicações desnecessárias."
  },
  {
    id: 19,
    text: "Qual serviço é usado para gerenciar backups centralizados na AWS?",
    options: [
      "AWS Storage Gateway",
      "AWS Backup",
      "Amazon Lightsail",
      "AWS Direct Connect"
    ],
    correctAnswer: 1,
    explanation: "O *AWS Backup* unifica backups de serviços como EC2, RDS e DynamoDB."
  },
  {
    id: 20,
    text: "Quais são duas características do AWS Direct Connect? (Escolha duas)",
    options: [
      "Reduz a latência comparado à internet pública",
      "É totalmente gerenciado pela AWS sem custos de transferência",
      "Fornece conexão dedicada entre on-premises e a AWS",
      "Substitui a necessidade do Amazon VPC"
    ],
    correctAnswer: [0, 2],
    explanation: "Direct Connect oferece conexão privada e previsível, mas requer parceria com um provedor."
  },
  {
    id: 21,
    text: "Qual serviço fornece recomendações de otimização baseadas nos 6 pilares do Well-Architected Framework?",
    options: [
      "Amazon Inspector",
      "AWS Trusted Advisor",
      "AWS Shield",
      "AWS Config"
    ],
    correctAnswer: 1,
    explanation: "O Trusted Advisor analisa sua conta e sugere melhorias."
  },
  {
    id: 22,
    text: "Qual serviço é usado para proteger aplicações web contra ataques de SQL Injection?",
    options: [
      "AWS Shield",
      "AWS WAF",
      "Amazon GuardDuty",
      "AWS Backup"
    ],
    correctAnswer: 1,
    explanation: "O *AWS WAF* permite criar regras personalizadas para proteger aplicações web."
  },
  {
    id: 23,
    text: "Qual serviço da AWS é ideal para implantações simplificadas de aplicações em containers?",
    options: [
      "AWS Batch",
      "AWS Elastic Beanstalk",
      "Amazon Lightsail",
      "Amazon SageMaker"
    ],
    correctAnswer: 1,
    explanation: "O Elastic Beanstalk automatiza o deploy de apps em containers ou servidores web."
  },
  {
    id: 24,
    text: "Qual serviço é usado para executar jobs de processamento em lote na AWS?",
    options: [
      "AWS Batch",
      "Amazon ECS",
      "AWS Lambda",
      "AWS Step Functions"
    ],
    correctAnswer: 0,
    explanation: "O *AWS Batch* gerencia jobs batch de grande escala sem infraestrutura manual."
  },
  {
    id: 25,
    text: "Qual serviço fornece estações terrestres para comunicação com satélites?",
    options: [
      "AWS Snowball",
      "AWS Ground Station",
      "Amazon Outposts",
      "VMware Cloud on AWS"
    ],
    correctAnswer: 1,
    explanation: "O *AWS Ground Station* permite controlar satélites e processar dados via AWS."
  },
  {
    id: 26,
    text: "Qual serviço é usado para auditoria de conformidade e acesso a documentos como ISO 27001?",
    options: [
      "AWS Artifact",
      "AWS Certificate Manager",
      "Amazon Artifact",
      "AWS Config"
    ],
    correctAnswer: 2,
    explanation: "*Amazon Artifact* fornece relatórios de conformidade e contratos de segurança."
  },
  {
    id: 27,
    text: "Quais serviços são usados para detecção de ameaças na AWS? (Escolha duas)",
    options: [
      "Amazon GuardDuty",
      "AWS Shield Advanced",
      "Amazon Inspector",
      "AWS Direct Connect"
    ],
    correctAnswer: [0, 2],
    explanation: "GuardDuty (ameaças em tempo real) e Inspector (avaliação de vulnerabilidades)."
  },
  {
    id: 28,
    text: "Qual serviço permite executar workloads de VMware na nuvem AWS?",
    options: [
      "Amazon Outposts",
      "VMware Cloud on AWS",
      "AWS Storage Gateway",
      "AWS Backup"
    ],
    correctAnswer: 1,
    explanation: "*VMware Cloud on AWS* integra ambientes VMware à infraestrutura AWS."
  },
  {
    id: 29,
    text: "Qual serviço é usado para integração de revisões humanas em workflows de machine learning?",
    options: [
      "Amazon SageMaker",
      "Amazon Augmented AI",
      "Amazon CodeWhisperer",
      "Amazon Lex"
    ],
    correctAnswer: 1,
    explanation: "O *Augmented AI (A2I)* permite que humanos validem previsões de ML."
  },
  {
    id: 30,
    text: "Qual serviço fornece proteção contra DDoS na camada de rede (Layer 3/4)?",
    options: [
      "AWS Shield Standard",
      "AWS WAF",
      "Amazon Inspector",
      "AWS Secrets Manager"
    ],
    correctAnswer: 0,
    explanation: "O *AWS Shield Standard* protege contra ataques DDoS básicos automaticamente."
  },
  {
    id: 31,
    text: "Qual serviço é usado para estender a infraestrutura AWS para data centers locais?",
    options: [
      "AWS Storage Gateway",
      "Amazon Outposts",
      "AWS Direct Connect",
      "AWS Snowmobile"
    ],
    correctAnswer: 1,
    explanation: "*Amazon Outposts* permite executar serviços AWS em ambientes on-premises."
  },
  {
    id: 32,
    text: "Qual serviço é recomendado para implantações rápidas de aplicações em ambientes pré-configurados?",
    options: [
      "AWS Elastic Beanstalk",
      "Amazon Lightsail",
      "AWS Fargate",
      "AWS Batch"
    ],
    correctAnswer: 1,
    explanation: "O *Lightsail* oferece planos pré-definidos para apps simples."
  },
  {
    id: 33,
    text: "Qual serviço da AWS auxilia desenvolvedores a escrever código usando IA generativa?",
    options: [
      "Amazon Lex",
      "Amazon CodeWhisperer",
      "Amazon SageMaker",
      "AWS RoboMaker"
    ],
    correctAnswer: 1,
    explanation: "O *CodeWhisperer* sugere trechos de código em tempo real baseado em contexto."
  },
  {
    id: 34,
    text: "Qual plano do AWS Support inclui acesso a um Technical Account Manager (TAM)?",
    options: [
      "Basic",
      "Developer",
      "Business",
      "Enterprise"
    ],
    correctAnswer: 3,
    explanation: "O plano *Enterprise* oferece suporte 24/7 e um TAM dedicado."
  },
  {
    id: 35,
    text: "Qual serviço é usado para auditoria contínua de configurações de segurança?",
    options: [
      "AWS Shield",
      "AWS Config",
      "Amazon Inspector",
      "AWS Trusted Advisor"
    ],
    correctAnswer: 1,
    explanation: "O *AWS Config* monitora mudanças de configuração e compliance."
  },
  {
    id: 36,
    text: "Qual serviço é adequado para processar grandes volumes de dados financeiros em tempo real?",
    options: [
      "Amazon Ledger Database",
      "Amazon Aurora",
      "Amazon Redshift",
      "AWS Batch"
    ],
    correctAnswer: 1,
    explanation: "O *Amazon Aurora* é um banco relacional otimizado para transações críticas."
  },
  {
    id: 37,
    text: "Qual serviço é usado para treinar e implantar modelos de machine learning customizados?",
    options: [
      "Amazon SageMaker",
      "Amazon Rekognition",
      "AWS DeepRacer",
      "Amazon CodeGuru"
    ],
    correctAnswer: 0,
    explanation: "O *SageMaker* é uma plataforma completa para ML, do treinamento ao deploy."
  },
  {
    id: 38,
    text: "Qual serviço fornece recomendações de otimização baseadas em melhores práticas da AWS?",
    options: [
      "AWS Systems Manager",
      "AWS Trusted Advisor",
      "AWS CloudTrail",
      "Amazon CloudWatch"
    ],
    correctAnswer: 1,
    explanation: "O Trusted Advisor analisa sua conta e sugere melhorias de custo, segurança e performance."
  },
  {
    id: 39,
    text: "Qual serviço é usado para gerenciar ambientes híbridos com infraestrutura consistente AWS/on-premises?",
    options: [
      "AWS Outposts",
      "AWS Storage Gateway",
      "AWS Direct Connect",
      "AWS Snowball"
    ],
    correctAnswer: 0,
    explanation: "O *Outposts* executa serviços AWS em data centers locais."
  },
  {
    id: 40,
    text: "Qual serviço da AWS é usado para análise automatizada de vulnerabilidades em instâncias EC2?",
    options: [
      "AWS Shield",
      "Amazon Inspector",
      "Amazon GuardDuty",
      "AWS WAF"
    ],
    correctAnswer: 1,
    explanation: "O *Inspector* avalia vulnerabilidades em instâncias EC2 e containers."
  }
];

// Lista de questões ativa (será embaralhada)
let questions = [...originalQuestions];

// Estado do simulado
const examState = {
  currentQuestionIndex: 0,
  answers: {},
  markedForReview: new Set(),
  timeRemaining: 40 * 60, // 30 minutos em segundos
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