const originalQuestions = [
  {
    id: 1,
    text: "Seu gerente atribuiu a você a tarefa de implementar a criptografia do lado do servidor com chaves de criptografia fornecidas pelo cliente (SSE-C) no seu bucket do S3, o que permitirá que você defina suas próprias chaves de criptografia. O Amazon S3 gerenciará o processo de criptografia e descriptografia usando sua chave quando você acessar seus objetos, o que eliminará a necessidade de manter qualquer código para executar a criptografia e a descriptografia de dados. Para carregar corretamente os dados neste bucket, qual dos seguintes cabeçalhos deve ser incluído na sua solicitação?",
    options: [
      "x-amz-server-side-encryption-customer-key somente cabeçalho",
      "x-amz-server-side-encryption, x-amz-server-side-encryption-customer-key e x-amz-server-side-encryption-customer-key-MD5 cabeçalhos",
      "x-amz-server-side-encryption e x-amz-server-side-encryption-aws-kms-key-id cabeçalhos",
      "x-amz-server-side-encryption-customer-algorithm, x-amz-server-side-encryption-customer-key e x-amz-server-side-encryption-customer-key-MD5 cabeçalhos"
    ],
    correctAnswer: 3,
    explanation: "Para SSE-C no Amazon S3, os cabeçalhos necessários são x-amz-server-side-encryption-customer-algorithm, x-amz-server-side-encryption-customer-key e x-amz-server-side-encryption-customer-key-MD5 para especificar o algoritmo, a chave e o hash MD5 da chave, respectivamente."
  },
  {
    id: 2,
    text: "Um desenvolvedor implantou recentemente uma aplicação hospedada em um grupo de Auto Scaling de instâncias do EC2 e que processa dados de um Amazon Kinesis Data Stream. Cada uma das instâncias do EC2 possui exatamente um trabalhador KCL processando um fluxo de dados do Kinesis com 10 fragmentos. Devido a problemas de desempenho, a equipe de operações de sistemas refragmentou o fluxo de dados para aumentar o número de fragmentos abertos para 20. Qual é o número máximo de instâncias do EC2 em execução que idealmente devem ser mantidas para manter o desempenho do aplicativo?",
    options: [
      "10",
      "20",
      "30",
      "40"
    ],
    correctAnswer: 1,
    explanation: "Para manter o desempenho ideal, o número de instâncias do EC2 deve corresponder ao número de fragmentos no Kinesis Data Stream, pois cada trabalhador KCL processa um fragmento. Com 20 fragmentos, 20 instâncias são ideais."
  },
  {
    id: 3,
    text: "Um aplicativo hospedado em um grupo de Auto Scaling de instâncias EC2 sob demanda é usado para processar dados coletados de uma fila SQS, e a saída gerada é armazenada em um bucket S3. Para aumentar a segurança, você foi encarregado de garantir que todos os objetos no bucket S3 sejam criptografados em repouso usando criptografia do lado do servidor com chaves AWS KMS. Qual das seguintes opções é necessária para implementar corretamente este requisito?",
    options: [
      "Adicione uma política de bucket que negue qualquer s3:PostObject ação, a menos que a solicitação inclua o x-amz-server-side-encryption cabeçalho.",
      "Adicione uma política de bucket que negue qualquer s3:PutObject ação, a menos que a solicitação inclua o x-amz-server-side-encryption-aws-kms-key-id cabeçalho.",
      "Adicione uma política de bucket que negue qualquer s3:PutObject ação, a menos que a solicitação inclua o x-amz-server-side-encryption cabeçalho.",
      "Adicione uma política de bucket que negue qualquer s3:PostObject ação, a menos que a solicitação inclua o x-amz-server-side-encryption-aws-kms-key-id cabeçalho."
    ],
    correctAnswer: 2,
    explanation: "Para garantir a criptografia do lado do servidor com AWS KMS, a política de bucket deve negar ações s3:PutObject que não incluam o cabeçalho x-amz-server-side-encryption, especificando que a criptografia KMS é obrigatória."
  },
  {
    id: 4,
    text: "Uma aplicação serverless composta por Lambda, API Gateway e DynamoDB está funcionando sem problemas há algum tempo. Como parte da conformidade de TI da empresa, um desenvolvedor foi instruído a garantir que todas as novas alterações feitas nos itens do DynamoDB sejam registradas e armazenadas em outra tabela do DynamoDB em outra região. Nesse cenário, qual das seguintes opções é a maneira MAIS ideal de atender aos requisitos?",
    options: [
      "Habilite a recuperação de ponto no tempo do DynamoDB para sincronizar automaticamente as duas tabelas.",
      "Crie uma regra do Amazon EventBridge (Amazon CloudWatch Events) que rastreie eventos em nível de tabela no DynamoDB. Defina uma função Lambda como destino da regra para processar e salvar novas alterações na outra tabela.",
      "Configurar o acelerador DynamoDB",
      "Habilite o DynamoDB Streams e configure uma função Lambda para processar e salvar novas alterações na outra tabela."
    ],
    correctAnswer: 3,
    explanation: "O DynamoDB Streams é a solução mais adequada para capturar alterações em itens de uma tabela DynamoDB e processá-las em tempo real, permitindo que uma função Lambda as salve em outra tabela em uma região diferente."
  },
  {
    id: 5,
    text: "Um aplicativo Docker hospedado em um cluster ECS apresentou problemas intermitentes de indisponibilidade e timeouts. O engenheiro líder de DevOps instruiu você a instrumentar o aplicativo para detectar onde estão ocorrendo altas latências e determinar os serviços e caminhos específicos que estão impactando o desempenho do aplicativo. Qual das seguintes etapas você deve seguir para realizar esta tarefa corretamente? (Selecione DUAS.)",
    options: [
      "Configure os mapeamentos de porta e as configurações do modo de rede no seu arquivo de definição de tarefa para permitir tráfego na porta UDP 2000.",
      "Adicione o xray-daemon.config arquivo de configuração na sua imagem do Docker",
      "Instale manualmente o daemon X-Ray nas instâncias por meio de um script de dados do usuário.",
      "Configure os mapeamentos de porta e as configurações do modo de rede no agente de contêiner para permitir o tráfego na porta TCP 2000.",
      "Crie uma imagem do Docker que execute o daemon X-Ray, carregue-a em um repositório de imagens do Docker e implante-a no seu cluster do Amazon ECS."
    ],
    correctAnswer: [4, 3],
    explanation: "Para instrumentar o aplicativo com o AWS X-Ray, você deve criar uma imagem Docker com o daemon X-Ray e implantá-la no cluster ECS, além de configurar os mapeamentos de porta no agente de contêiner para permitir tráfego na porta TCP 2000, que é usada pelo X-Ray."
  },
  {
    id: 6,
    text: "A empresa para a qual você trabalha decidiu recentemente migrar e transformar seu aplicativo monolítico local em um aplicativo Lambda. É sua responsabilidade garantir que o aplicativo funcione de forma eficaz na AWS. Quais das seguintes são as melhores práticas no desenvolvimento de funções Lambda? (Selecione DUAS.)",
    options: [
      "Use o Amazon Inspector para solução de problemas.",
      "Aproveite a reutilização do Contexto de Execução para melhorar o desempenho da sua função.",
      "Use as variáveis de ambiente do AWS Lambda para passar parâmetros operacionais para sua função.",
      "Use código recursivo.",
      "Inclua a lógica principal no manipulador Lambda."
    ],
    correctAnswer: [1, 2],
    explanation: "As melhores práticas para funções Lambda incluem aproveitar a reutilização do Contexto de Execução para melhorar o desempenho e usar variáveis de ambiente para passar parâmetros operacionais, garantindo flexibilidade e eficiência."
  },
  {
    id: 7,
    text: "Uma empresa está utilizando uma combinação dos serviços CodeBuild, CodePipeline e CodeDeploy para seu pipeline de integração e entrega contínuas (CI/CD) na AWS. A empresa deseja que alguém realize uma revisão de código antes que uma revisão seja permitida na próxima etapa do pipeline. Se a ação for aprovada, a execução do pipeline será retomada; caso contrário, a execução do pipeline não prosseguirá. Qual das seguintes opções é a solução MAIS adequada para implementar neste cenário?",
    options: [
      "Divida os processos em diferentes estados de tarefa usando Funções de Etapa. Use um estado de Espera para definir um tempo limite para aprovação.",
      "Implemente uma configuração de ações de aprovação manual no CodePipeline. Envie a solicitação de aprovação para uma fila do SQS.",
      "Remodele o pipeline usando o AWS Serverless Application Model (AWS SAM)",
      "Implemente uma configuração de ações de aprovação manual no CodePipeline. Envie a solicitação de aprovação para um tópico do SNS."
    ],
    correctAnswer: 3,
    explanation: "A configuração de ações de aprovação manual no CodePipeline com notificações enviadas para um tópico do SNS é a solução mais adequada, pois permite revisões manuais e notifica os revisores de forma eficiente."
  },
  {
    id: 8,
    text: "Uma desenvolvedora está projetando a arquitetura de nuvem de um aplicativo interno que será usado por cerca de cem funcionários. Ela precisa garantir que a arquitetura seja elástica o suficiente para adequar adequadamente a oferta de recursos à demanda, mantendo a relação custo-benefício. Qual dos seguintes serviços pode fornecer MAIOR elasticidade à arquitetura? (Selecione DOIS.)",
    options: [
      "Amazon CloudFront",
      "Frota Spot do Amazon EC2",
      "Amazon DynamoDB",
      "AWS WAF",
      "Amazon RDS"
    ],
    correctAnswer: [1, 2],
    explanation: "O Amazon DynamoDB oferece escalabilidade automática para tabelas, ajustando recursos com base na demanda, enquanto a Frota Spot do EC2 permite alocação elástica de instâncias com custo reduzido, ideal para cargas de trabalho flexíveis."
  },
  {
    id: 9,
    text: "Uma função Lambda foi integrada ao DynamoDB Streams como sua fonte de eventos. Há uma nova versão da função que precisa ser implantada usando o CodeDeploy, onde o tráfego deve ser deslocado em dois incrementos. Ela deve deslocar 10% do tráfego de entrada para a nova versão no primeiro incremento e os 90% restantes devem ser implantados cinco minutos depois. Qual das seguintes configurações de implantação é a MAIS adequada para atender a esse requisito?",
    options: [
      "Rolando com lote adicional",
      "Tudo de uma vez",
      "Canário",
      "Linear"
    ],
    correctAnswer: 2,
    explanation: "A configuração de implantação Canário no CodeDeploy permite deslocar o tráfego em incrementos, como 10% inicialmente e 90% após um intervalo, garantindo uma transição controlada para a nova versão da função Lambda."
  },
  {
    id: 10,
    text: "Um jogo para dispositivos móveis possui um backend sem servidor na AWS, composto por Lambda, API Gateway e DynamoDB. Ele grava 100 itens por segundo na tabela do DynamoDB, com tamanho de 1,5 KB por item. A tabela possui um WCU provisionado de 100, mas as solicitações de gravação ainda estão sendo controladas pelo DynamoDB. Qual é a solução MAIS adequada para corrigir esse problema de limitação?",
    options: [
      "Aumentar o WCU para 200.",
      "Habilitar o DynamoDB Accelerator (DAX).",
      "Implemente o cache de banco de dados com um cluster ElastiCache.",
      "Use consistência forte nas operações de gravação."
    ],
    correctAnswer: 0,
    explanation: "Cada item de 1,5 KB requer aproximadamente 2 WCUs (arredondado para cima). Para 100 itens por segundo, são necessários 200 WCUs. Aumentar o WCU para 200 resolve o problema de limitação."
  },
  {
    id: 11,
    text: "Uma aplicação sem servidor composta por funções Lambda integradas ao API Gateway e ao DynamoDB processa solicitações ad hoc enviadas por seus usuários. Devido ao recente pico no tráfego de entrada, alguns de seus clientes estão reclamando que estão recebendo erros HTTP 504 de tempos em tempos. Qual das seguintes opções é a causa MAIS provável desse problema?",
    options: [
      "A solicitação do API Gateway expirou porque a função Lambda subjacente estava em execução por mais de 29 segundos.",
      "Como as solicitações recebidas estão aumentando, o API Gateway habilitou automaticamente a limitação, o que causou os erros HTTP 504.",
      "A cota do plano de uso foi excedida para a função Lambda.",
      "Ocorreu uma falha de autorização entre o API Gateway e a função Lambda."
    ],
    correctAnswer: 0,
    explanation: "O API Gateway tem um tempo limite padrão de 29 segundos. Se a função Lambda exceder esse tempo, as solicitações expiram, resultando em erros HTTP 504."
  },
  {
    id: 12,
    text: "Um aplicativo foi migrado recentemente de um data center local para um ambiente de desenvolvimento do Elastic Beanstalk. Um desenvolvedor realizará testes iterativos e, portanto, precisa implementar as alterações no código e visualizá-las o mais rápido possível. Qual das seguintes opções leva MENOS tempo para concluir a implantação?",
    options: [
      "Tudo de uma vez",
      "Rolando",
      "Imutável",
      "Rolando com lote adicional"
    ],
    correctAnswer: 0,
    explanation: "A implantação 'Tudo de uma vez' no Elastic Beanstalk é a mais rápida, pois atualiza todas as instâncias simultaneamente, ideal para testes iterativos onde a velocidade é prioritária."
  },
  {
    id: 13,
    text: "Um desenvolvedor gerencia um sistema distribuído que consiste em um Application Load Balancer, uma fila SQS e um grupo de Auto Scaling de instâncias EC2. O sistema foi integrado ao CloudFront para melhor atender clientes em todo o mundo. Para aumentar a segurança dos dados em trânsito, o desenvolvedor foi instruído a estabelecer uma conexão SSL de ponta a ponta entre a origem e os usuários finais. Quais DUAS opções permitirão que o desenvolvedor atenda a esse requisito usando o CloudFront? (Selecione DUAS.)",
    options: [
      "Associe uma ACL da Web usando o AWS Web Application Firewall (WAF) à sua distribuição do CloudFront.",
      "Configurar uma configuração de Controle de Acesso de Origem (OAC)",
      "Configure a política de protocolo do visualizador para usar somente HTTPS",
      "Configure a política do protocolo de origem para usar somente HTTPS",
      "Configure seu ALB para permitir apenas tráfego na porta 443 usando um certificado SSL do AWS Config."
    ],
    correctAnswer: [2, 3],
    explanation: "Configurar a política de protocolo do visualizador para usar somente HTTPS garante que os usuários finais se conectem ao CloudFront via HTTPS, enquanto configurar a política do protocolo de origem para usar somente HTTPS assegura uma conexão segura entre o CloudFront e a origem."
  },
  {
    id: 14,
    text: "Uma aplicação hospedada em uma plataforma Docker multicontêiner no Elastic Beanstalk usa o DynamoDB para manipular os dados de sessão de seus usuários. Esses dados são usados apenas por um período específico e os dados obsoletos podem ser excluídos após o usuário efetuar logout do sistema. Qual das seguintes opções é a maneira mais adequada de excluir os dados da sessão?",
    options: [
      "Habilite o TTL para os dados da sessão na tabela do DynamoDB.",
      "Use conditional writes para adicionar os dados da sessão à tabela do DynamoDB e depois excluí-los automaticamente com base na condição especificada.",
      "Use atomic counters para rastrear a validade dos dados da sessão e excluí-los quando ficarem obsoletos.",
      "Exclua os dados obsoletos realizando regularmente uma varredura na tabela."
    ],
    correctAnswer: 0,
    explanation: "Habilitar o TTL (Time to Live) no DynamoDB é a maneira mais eficiente de excluir automaticamente dados de sessão obsoletos, definindo um tempo de expiração para cada item."
  },
  {
    id: 15,
    text: "Você está planejando criar uma tabela do DynamoDB para o seu site de perfil de funcionários. Ela será usada pelo departamento de Recursos Humanos para visualizar facilmente os detalhes de cada funcionário. Ao escolher a chave de partição da tabela, qual dos seguintes é o MELHOR atributo a ser usado?",
    options: [
      "employee_id porque cada ID de funcionário é único.",
      "position_id porque isso ajudará a classificar os registros por departamento.",
      "department_id já que os funcionários ficarão nesses departamentos.",
      "employee_name porque isso irá acelerar a busca de registros."
    ],
    correctAnswer: 0,
    explanation: "O employee_id é o melhor atributo para a chave de partição, pois é único para cada funcionário, garantindo uma distribuição uniforme dos dados e acesso eficiente."
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