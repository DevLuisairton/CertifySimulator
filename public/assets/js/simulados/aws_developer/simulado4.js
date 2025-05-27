const originalQuestions = [
  {
    id: 1,
    text: "Uma empresa tem um aplicativo que armazena dados em instâncias do Amazon RDS. O aplicativo periodicamente enfrenta picos de tráfego elevado que causam problemas de desempenho. Durante os períodos de tráfego máximo, um desenvolvedor percebe uma redução na velocidade das consultas em todas as consultas ao banco de dados. O líder técnico da equipe determina que uma solução de cache multi-threaded e escalável deve ser usada para descarregar o tráfego intenso de leitura. A solução precisa melhorar o desempenho. Qual solução atenderá a esses requisitos com a MENOR complexidade?",
    options: [
      "Use o Amazon ElastiCache para Memcached para descarregar as solicitações de leitura do banco de dados principal.",
      "Replique os dados para o Amazon DynamoDB. Configure um cluster do DynamoDB Accelerator (DAX).",
      "Configure as instâncias do Amazon RDS para usar a implantação Multi-AZ com uma instância em espera. Descarregue as solicitações de leitura do banco de dados principal para a instância em espera.",
      "Use o Amazon ElastiCache para Redis para descarregar as solicitações de leitura do banco de dados principal."
    ],
    correctAnswer: 0,
    explanation: "O Amazon ElastiCache para Memcached é uma solução de cache multi-threaded e escalável que descarrega leituras do banco de dados com baixa complexidade, sendo mais simples de configurar em comparação com Redis ou replicação para DynamoDB."
  },
  {
    id: 2,
    text: "Um aplicativo deve ser refatorado para a nuvem. Os dados do aplicativo são armazenados em uma tabela do Amazon DynamoDB e são processados por uma função do Lambda que prepara os dados para análise. Atualmente, o processamento de dados ocorre uma vez por dia, mas os analistas de dados exigem que seja realizado quase em tempo real. Qual padrão de arquitetura pode ser usado para permitir que os dados sejam processados à medida que são recebidos?",
    options: [
      "Usar uma arquitetura orientada a eventos",
      "Usar uma arquitetura de microsserviços",
      "Usar uma arquitetura agendada",
      "Usar uma arquitetura de distribuição"
    ],
    correctAnswer: 0,
    explanation: "Uma arquitetura orientada a eventos, como o uso de DynamoDB Streams com Lambda, permite processar dados em tempo real à medida que são recebidos, atendendo ao requisito de processamento quase em tempo real."
  },
  {
    id: 3,
    text: "Um desenvolvedor está configurando a infraestrutura usando o AWS CloudFormation. Se ocorrer um erro ao provisionar os recursos descritos no template do CloudFormation, os recursos provisionados com sucesso devem ser preservados. O desenvolvedor deve provisionar e atualizar o stack do CloudFormation usando o AWS CLI. Qual solução atenderá a esses requisitos?",
    options: [
      "Adicione a opção de linha de comando --enable-termination-protection ao comando create-stack e ao comando update-stack.",
      "Adicione a opção de linha de comando --disable-rollback ao comando create-stack e ao comando update-stack.",
      "Adicione a opção de linha de comando --parameters ParameterKey=PreserveResources,ParameterValue=True ao comando create-stack e ao comando update-stack.",
      "Adicione a opção de linha de comando --tags Key=PreserveResources,Value=True ao comando create-stack e ao comando update-stack."
    ],
    correctAnswer: 1,
    explanation: "A opção --disable-rollback no AWS CLI impede que o CloudFormation reverta e exclua recursos provisionados com sucesso em caso de erro, preservando os recursos criados."
  },
  {
    id: 4,
    text: "Uma função do Lambda está demorando muito para ser concluída. O desenvolvedor descobriu que a capacidade de computação inadequada está sendo alocada para a função. Como o desenvolvedor pode garantir que mais capacidade de computação seja alocada para a função?",
    options: [
      "Usar um tipo de instância com mais CPU",
      "Aumentar o tempo máximo de execução",
      "Aumentar o paralelismo reservado",
      "Alocar mais memória para a função"
    ],
    correctAnswer: 3,
    explanation: "No AWS Lambda, alocar mais memória para a função aumenta automaticamente a capacidade de computação (CPU), pois a CPU é proporcional à memória alocada, melhorando o desempenho."
  },
  {
    id: 5,
    text: "Um desenvolvedor está criando uma aplicação serverless que se conecta a um banco de dados Amazon Aurora PostgreSQL. A aplicação serverless consiste em centenas de funções AWS Lambda. Durante cada escalonamento das funções Lambda, uma nova conexão com o banco de dados é feita, aumentando o consumo de recursos do banco de dados. O desenvolvedor precisa diminuir o número de conexões feitas ao banco de dados. A solução não deve impactar a escalabilidade das funções Lambda. Qual solução atenderá a esses requisitos?",
    options: [
      "Configure a simultaneidade provisionada para cada função Lambda, definindo o parâmetro ProvisionedConcurrentExecutions como 10.",
      "Habilite o gerenciamento de cache do cluster para o Aurora PostgreSQL. Altere a string de conexão de cada função Lambda para apontar para o gerenciamento de cache do cluster.",
      "Use o Amazon RDS Proxy para criar um pool de conexões para gerenciar as conexões com o banco de dados. Altere a string de conexão de cada função Lambda para referenciar o proxy.",
      "Configure a simultaneidade reservada para cada função Lambda, definindo o parâmetro ReservedConcurrentExecutions como 10."
    ],
    correctAnswer: 2,
    explanation: "O Amazon RDS Proxy gerencia um pool de conexões, reduzindo o número de conexões diretas ao banco de dados sem impactar a escalabilidade das funções Lambda, sendo a solução ideal."
  },
  {
    id: 6,
    text: "Uma tabela do DynamoDB está sendo usada para armazenar informações de sessão para usuários de um jogo online. Um desenvolvedor notou que o tamanho da tabela aumentou consideravelmente e muitos dos dados não são necessários após a conclusão de uma sessão de jogo. Qual é a abordagem mais econômica para reduzir o tamanho da mesa?",
    options: [
      "Usar a API de item de gravação em lote para excluir os dados",
      "Ative um Time To Live (TTL) na tabela e adicione um atributo timestamp em novos itens",
      "Criar uma função do AWS Lambda que limpe itens obsoletos da tabela diariamente",
      "Usar a API de item de exclusão para excluir os dados"
    ],
    correctAnswer: 1,
    explanation: "Habilitar o TTL (Time to Live) no DynamoDB é a abordagem mais econômica, pois exclui automaticamente itens obsoletos com base em um atributo timestamp, sem custos adicionais de execução."
  },
  {
    id: 7,
    text: "Um site está sendo executado em uma única instância do Amazon EC2. Um desenvolvedor deseja publicar o site na Internet e está criando um registro A no Amazon Route 53 para o nome DNS público do site. Que tipo de endereço IP DEVE ser atribuído à instância do EC2 e usado no registro A para garantir a conectividade contínua?",
    options: [
      "Endereço IP elástico",
      "Endereço IP público",
      "Endereço IP dinâmico",
      "Endereço IP privado"
    ],
    correctAnswer: 0,
    explanation: "Um endereço IP elástico é necessário para garantir conectividade contínua, pois ele permanece associado à instância do EC2 mesmo após reinicializações, ao contrário de um IP público dinâmico."
  },
  {
    id: 8,
    text: "Uma equipe de desenvolvimento está migrando dados de vários compartilhamentos de arquivos para a AWS no local. Os dados serão migrados para um único bucket do Amazon S3. Qual é o método MAIS SIMPLES para garantir que os dados sejam criptografados em repouso no bucket do S3?",
    options: [
      "Ativar criptografia padrão ao criar o bucket",
      "Garantir que todas as solicitações usem o cabeçalho x-amz-server-side-encryption-customer-key",
      "Garantir que todas as solicitações usem o cabeçalho x-amz-server-side-encryption",
      "Usar SSL para transmitir os dados pela Internet"
    ],
    correctAnswer: 0,
    explanation: "Ativar a criptografia padrão (SSE-S3) ao criar o bucket do S3 é o método mais simples, pois criptografa automaticamente todos os objetos em repouso sem exigir cabeçalhos adicionais nas solicitações."
  },
  {
    id: 9,
    text: "Um desenvolvedor está implantando uma aplicação serverless que usa o AWS API Gateway para expor endpoints RESTful, integrados com funções AWS Lambda. A aplicação precisa restringir o acesso a apenas usuários autenticados via Amazon Cognito. Qual é a configuração mais adequada para implementar essa restrição de acesso no API Gateway?",
    options: [
      "Configurar um autorizador Lambda personalizado no API Gateway para validar tokens do Amazon Cognito.",
      "Usar uma política de bucket S3 para restringir o acesso às funções Lambda.",
      "Habilitar a autenticação IAM no API Gateway e associar uma função IAM com permissões do Amazon Cognito.",
      "Configurar um autorizador Cognito User Pools diretamente no API Gateway."
    ],
    correctAnswer: 3,
    explanation: "Configurar um autorizador Cognito User Pools no API Gateway é a maneira mais direta e nativa de restringir o acesso a usuários autenticados, pois integra diretamente com o Amazon Cognito para validar tokens JWT."
  },
  {
    id: 10,
    text: "Uma aplicação serverless utiliza o AWS Lambda e o Amazon SQS para processar mensagens assíncronas. Durante picos de tráfego, algumas mensagens estão sendo descartadas devido ao limite de simultaneidade da função Lambda. Qual é a solução mais eficiente para evitar a perda de mensagens sem alterar o código da aplicação?",
    options: [
      "Aumentar a memória alocada para a função Lambda para melhorar o desempenho.",
      "Configurar uma Fila de Mensagens Mortas (DLQ) no Amazon SQS para capturar mensagens não processadas.",
      "Habilitar o DynamoDB Streams para processar mensagens em vez do SQS.",
      "Aumentar o limite de simultaneidade reservada para a função Lambda."
    ],
    correctAnswer: 3,
    explanation: "Aumentar o limite de simultaneidade reservada para a função Lambda permite que mais mensagens sejam processadas simultaneamente, evitando a perda de mensagens durante picos de tráfego sem necessidade de alterações no código."
  }
];

// Lista de questões ativa (será embaralhada)
let questions = [...originalQuestions];

// Estado do simulado
const examState = {
  currentQuestionIndex: 0,
  answers: {},
  markedForReview: new Set(),
  timeRemaining: 20 * 60, // 30 minutos em segundos
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