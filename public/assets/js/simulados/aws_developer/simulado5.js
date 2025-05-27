const originalQuestions = [
  {
    id: 1,
    text: "Uma tabela do DynamoDB está sendo usada para armazenar informações de sessão para usuários de um jogo online. Um desenvolvedor notou que o tamanho da tabela aumentou consideravelmente e muitos dos dados não são necessários após a conclusão de uma sessão de jogo. Qual é a abordagem mais econômica para reduzir o tamanho da mesa?",
    options: [
      "Usar a API de item de gravação em lote para excluir os dados",
      "Ative um Time To Live (TTL) na tabela e adicione um atributo timestamp em novos itens",
      "Criar uma função da AWS Lambda que limpe itens obsoletos da tabela diariamente",
      "Usar a API de item de exclusão para excluir os dados"
    ],
    correctAnswer: 1,
    explanation: "Habilitar o TTL (Time to Live) no DynamoDB é a abordagem mais econômica, pois exclui automaticamente itens obsoletos com base em um atributo timestamp, sem custos adicionais de execução."
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    text: "Um desenvolvedor está configurando um pipeline de implantação. O pipeline inclui uma etapa de compilação no AWS CodeBuild que requer acesso a um banco de dados para executar testes de integração. O desenvolvedor está usando um arquivo buildspec.yml para configurar a conexão com o banco de dados. A política da empresa exige rotação automática de todas as credenciais do banco de dados. Qual solução gerenciará as credenciais do banco de dados com mais segurança?",
    options: [
      "Recuperar as credenciais de variáveis hardcoded no buildspec.yml e configurar uma função AWS Lambda para rotacionar as credenciais.",
      "Recuperar as credenciais de uma variável de ambiente vinculada a um parâmetro SecureString no AWS Systems Manager Parameter Store e configurar a rotação automática.",
      "Recuperar as credenciais de uma variável de ambiente vinculada a um segredo no AWS Secrets Manager e configurar a rotação automática.",
      "Recuperar as credenciais de uma variável de ambiente que contém a string de conexão em texto plano e configurar um evento do Amazon EventBridge para rotacionar as credenciais."
    ],
    correctAnswer: 2,
    explanation: "O AWS Secrets Manager é a solução mais segura para gerenciar e rotacionar automaticamente credenciais de banco de dados, permitindo recuperação segura via variáveis de ambiente no CodeBuild."
  },
  {
    id: 5,
    text: "Um Amazon Kinesis Data Stream foi configurado recentemente para receber dados de sensores em uma fábrica. Uma instância de consumidor do EC2 é configurada para processar os dados a cada 48 horas e salvar os resultados do processamento em um data warehouse do Amazon RedShift. Os testes identificaram que uma grande quantidade de dados está faltando. Uma revisão dos logs de monitoramento identificou que os sensores estão enviando dados corretamente e a instância do EC2 está íntegra. Qual é a explicação MAIS provável para este problema?",
    options: [
      "Amazon RedShift não é adequado para armazenar dados de streaming.",
      "A instância do EC2 está falhando intermitentemente.",
      "Os registros são retidos por 24 horas no Kinesis Data Stream por padrão.",
      "Amazon Kinesis tem muitos shards provisionados."
    ],
    correctAnswer: 2,
    explanation: "O Kinesis Data Stream retém registros por 24 horas por padrão, mas o consumidor processa dados a cada 48 horas, resultando na perda de dados que expiram antes do processamento."
  },
  {
    id: 6,
    text: "Um desenvolvedor está fazendo algumas atualizações em uma função da AWS Lambda que faz parte de um aplicativo sem servidor e salvará uma nova versão. O aplicativo é usado por centenas de usuários e o desenvolvedor precisa ser capaz de testar as atualizações e poder reverter se houver algum problema com a experiência do usuário. Qual é a maneira MAIS SEGURA de fazer isso com alterações mínimas no código do aplicativo?",
    options: [
      "Criar um alias e apontá-lo para as versões novas e anteriores. Atribua um peso de 20% à nova versão para direcionar menos tráfego. Atualize o código do aplicativo para apontar para o novo alias.",
      "Atualizar o código do aplicativo para apontar para a nova versão.",
      "Criar registros A no Route 53 para o ARN de cada versão de função. Use uma política de roteamento ponderada para direcionar 20% do tráfego para a nova versão. Adicionar os registros DNS ao código do aplicativo.",
      "Criar um alias e apontá-lo para a nova versão. Atualize o código do aplicativo para apontar para o novo alias."
    ],
    correctAnswer: 0,
    explanation: "Criar um alias com roteamento ponderado (20% para a nova versão) permite testar a nova versão com tráfego limitado e reverter facilmente, minimizando alterações no código do aplicativo."
  },
  {
    id: 7,
    text: "Uma empresa tem um site desenvolvido em PHP e lançado usando o AWS Elastic Beanstalk. Há uma nova versão do site que precisa ser implantada no ambiente do Elastic Beanstalk. A empresa não pode tolerar que o site fique offline caso uma atualização falhe. As implantações devem ter impacto mínimo e permitir rollback o mais rápido possível. Qual método de implantação deve ser usado?",
    options: [
      "All at once (Tudo de uma vez)",
      "Rolling (Implantação em lotes)",
      "Snapshots (Instantâneos)",
      "Immutable (Imutável)"
    ],
    correctAnswer: 3,
    explanation: "A implantação Imutável no Elastic Beanstalk cria novas instâncias para a nova versão, garantindo zero tempo de inatividade e permitindo rollback rápido, atendendo aos requisitos da empresa."
  },
  {
    id: 8,
    text: "Um desenvolvedor deve executar um script de shell em instâncias Linux do Amazon EC2 sempre que forem executadas por um grupo do Amazon EC2 Auto Scaling. Qual é a maneira MAIS SIMPLES de executar o script?",
    options: [
      "Configurar eventos do Amazon CloudWatch para acionar a AWS CLI quando uma instância for iniciada e executar o script.",
      "Adicionar o script no user data ao criar a configuração de inicialização.",
      "Executar o script usando o comando Executar do AWS Systems Manager.",
      "Empacote o script em um arquivo zip com algum código-fonte do AWS Lambda. Faça upload para o Lambda e execute a função quando as instâncias forem iniciadas."
    ],
    correctAnswer: 1,
    explanation: "Adicionar o script no user data da configuração de inicialização é a maneira mais simples, pois ele é executado automaticamente quando cada instância do EC2 é iniciada pelo Auto Scaling."
  },
  {
    id: 9,
    text: "Um desenvolvedor está testando um aplicativo baseado em Docker que usa o AWS SDK para interagir com o Amazon DynamoDB. No ambiente de desenvolvimento local, o aplicativo usou chaves de acesso do IAM. O aplicativo agora está pronto para ser implantado em um cluster ECS. Como o aplicativo deve se autenticar com os serviços da AWS em produção?",
    options: [
      "Configurar uma função do IAM associada à tarefa do ECS (ECS task role), permitindo que o aplicativo a utilize automaticamente.",
      "Refatorar o aplicativo para chamar o AWS STS AssumeRole com base em uma função de instância.",
      "Configurar variáveis de ambiente AWS access key/secret access key com novas credenciais.",
      "Configurar o arquivo de credenciais com uma nova access key/secret access key."
    ],
    correctAnswer: 0,
    explanation: "Configurar uma função do IAM associada à tarefa do ECS permite que o aplicativo acesse serviços AWS de forma segura e automática, sem a necessidade de chaves de acesso hardcoded."
  },
  {
    id: 10,
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
    id: 11,
    text: "Um desenvolvedor tem um aplicativo legado hospedado on-premises (localmente). Outros aplicativos hospedados na AWS dependem do aplicativo on-premises para funcionar corretamente. Em caso de erros no aplicativo, o desenvolvedor deseja usar o Amazon CloudWatch para monitorar e solucionar problemas de todos os aplicativos em um único lugar. Como o desenvolvedor pode alcançar esse objetivo?",
    options: [
      "Instalar um AWS SDK no servidor on-premises para enviar automaticamente os logs para o CloudWatch.",
      "Baixar o CloudWatch Agent no servidor on-premises. Configurar o agente para usar credenciais de usuário IAM com permissões para o CloudWatch.",
      "Fazer upload dos arquivos de log do servidor on-premises para o Amazon S3 e configurar o CloudWatch para ler esses arquivos.",
      "Fazer upload dos arquivos de log do servidor on-premises para uma instância Amazon EC2 e configurar a instância para encaminhar os logs para o CloudWatch."
    ],
    correctAnswer: 1,
    explanation: "O CloudWatch Agent pode ser instalado no servidor on-premises para enviar logs diretamente ao CloudWatch, usando credenciais IAM com permissões adequadas, permitindo monitoramento centralizado."
  },
  {
    id: 12,
    text: "Um desenvolvedor está criando um aplicativo. Novos usuários do aplicativo devem ser capazes de criar uma conta e se registrar usando suas próprias contas de redes sociais. Qual serviço ou recurso da AWS o desenvolvedor deve usar para atender a esses requisitos?",
    options: [
      "Função do IAM",
      "Amazon Cognito Identity Pools",
      "Amazon Cognito User Pools",
      "AWS Directory Service"
    ],
    correctAnswer: 2,
    explanation: "O Amazon Cognito User Pools suporta registro e autenticação de usuários, incluindo integração com provedores de redes sociais, sendo a solução ideal para esse requisito."
  },
  {
    id: 13,
    text: "Uma empresa armazena seus dados em tabelas dentro de uma série de buckets do Amazon S3. A empresa recebeu um alerta de que informações de cartão de crédito de clientes podem ter sido expostas em uma tabela de dados em um dos aplicativos públicos da empresa. Um desenvolvedor precisa identificar todas as possíveis exposições dentro do ambiente do aplicativo. Qual solução atenderá a esses requisitos?",
    options: [
      "Usar o Amazon Athena para executar um job nos buckets do S3 que contêm os dados afetados. Filtrar os resultados usando o tipo de descoberta SensitiveData:S3Object/Personal.",
      "Usar o Amazon Macie para executar um job nos buckets do S3 que contêm os dados afetados. Filtrar os resultados usando o tipo de descoberta SensitiveData:S3Object/Financial.",
      "Usar o Amazon Macie para executar um job nos buckets do S3 que contêm os dados afetados. Filtrar os resultados usando o tipo de descoberta SensitiveData:S3Object/Personal.",
      "Usar o Amazon Athena para executar um job nos buckets do S3 que contêm os dados afetados. Filtrar os resultados usando o tipo de descoberta SensitiveData:S3Object/Financial."
    ],
    correctAnswer: 1,
    explanation: "O Amazon Macie é projetado para identificar dados sensíveis, como informações de cartão de crédito, em buckets S3. O filtro SensitiveData:S3Object/Financial é adequado para detectar dados financeiros."
  },
  {
    id: 14,
    text: "Um desenvolvedor está atualizando várias funções AWS Lambda e percebe que todas elas compartilham as mesmas bibliotecas personalizadas. O desenvolvedor deseja centralizar todas as bibliotecas, atualizá-las de maneira conveniente e mantê-las versionadas. Qual solução atenderá a esses requisitos com o menor esforço de desenvolvimento?",
    options: [
      "Criar um repositório AWS CodeArtifact que contenha todas as bibliotecas personalizadas.",
      "Criar uma imagem de contêiner personalizada para as funções Lambda para salvar todas as bibliotecas personalizadas.",
      "Criar uma camada Lambda (Lambda Layer) que contenha todas as bibliotecas personalizadas.",
      "Criar um sistema de arquivos Amazon Elastic File System (Amazon EFS) para armazenar todas as bibliotecas personalizadas."
    ],
    correctAnswer: 2,
    explanation: "Uma camada Lambda (Lambda Layer) permite centralizar, versionar e compartilhar bibliotecas personalizadas entre funções Lambda, reduzindo o esforço de desenvolvimento e manutenção."
  },
  {
    id: 15,
    text: "Um desenvolvedor deseja expandir um aplicativo para ser executado em múltiplas regiões da AWS. O desenvolvedor precisa copiar imagens de máquina da Amazon (AMIs) com as alterações mais recentes e criar um novo stack de aplicativo na região de destino. De acordo com os requisitos da empresa, todas as AMIs devem ser criptografadas em todas as regiões. No entanto, nem todas as AMIs que a empresa usa estão criptografadas. Como o desenvolvedor pode expandir o aplicativo para a região de destino enquanto atende ao requisito de criptografia?",
    options: [
      "Criar novas AMIs e especificar parâmetros de criptografia. Copiar as AMIs criptografadas para a região de destino. Excluir as AMIs não criptografadas.",
      "Usar o AWS Key Management Service (AWS KMS) para ativar a criptografia nas AMIs não criptografadas. Copiar as AMIs criptografadas para a região de destino.",
      "Usar o AWS Certificate Manager (ACM) para ativar a criptografia nas AMIs não criptografadas. Copiar as AMIs criptografadas para a região de destino.",
      "Copiar as AMIs não criptografadas para a região de destino. Habilitar a criptografia por padrão na região de destino."
    ],
    correctAnswer: 0,
    explanation: "Criar novas AMIs criptografadas e copiá-las para a região de destino atende ao requisito de criptografia, pois AMIs existentes não podem ser criptografadas diretamente; é necessário criar novas AMIs."
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