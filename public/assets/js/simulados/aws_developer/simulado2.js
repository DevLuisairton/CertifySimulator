const originalQuestions = [
  {
    id: 1,
    text: "Um aplicativo protótipo está hospedado em uma instância do EC2, que possui uma função do IAM atribuída para armazenar dados dos buckets de desenvolvimento e produção do S3. A instância também possui uma chave secreta/de acesso à CLI da AWS instalada para lidar com outras tarefas ad hoc. Você atribuiu uma nova função do IAM à instância, que tem permissão para acessar apenas o bucket de desenvolvimento. No entanto, após os testes, a instância ainda pode armazenar arquivos em ambos os buckets. Qual é a causa raiz MAIS provável desse problema?",
    options: [
      "A função de perfil de instância de uma instância EC2 em execução é estática e não pode ser substituída.",
      "Devido à consistência eventual, você deve aguardar 24 horas para que a alteração apareça em toda a AWS.",
      "A nova função do IAM tem uma política inline anexada.",
      "O aplicativo ainda está usando a função do IAM configurada para a chave da AWS CLI."
    ],
    correctAnswer: 3,
    explanation: "A instância do EC2 ainda pode acessar ambos os buckets porque o aplicativo está usando as credenciais da chave de acesso da CLI da AWS, que estão associadas a uma função do IAM com permissões mais amplas, em vez de usar a nova função do IAM atribuída ao perfil da instância."
  },
  {
    id: 2,
    text: "Um desenvolvedor possui um conjunto de instâncias do EC2 que executa a Biblioteca de Cliente do Amazon Kinesis para processar um fluxo de dados na AWS. Com base nas métricas personalizadas, o conjunto mostra que as instâncias estão atingindo o limite de utilização da CPU e que não há shards do Kinesis suficientes para lidar com a taxa de dados que flui pelo fluxo. Qual das seguintes opções é o MELHOR curso de ação que o desenvolvedor deve tomar para resolver esse problema e evitar que essa situação ocorra novamente no futuro?",
    options: [
      "Aumente o tamanho da instância para um tipo maior.",
      "Aumentar o número de fragmentos.",
      "Aumente o tamanho da instância e o número de fragmentos abertos.",
      "Aumente o número de instâncias até o número de fragmentos abertos."
    ],
    correctAnswer: 2,
    explanation: "Aumentar o número de shards do Kinesis é a melhor solução para lidar com a taxa de dados, enquanto aumentar o tamanho da instância pode resolver a utilização da CPU. Combinar ambas as ações aborda os dois problemas de forma eficaz."
  },
  {
    id: 3,
    text: "Você desenvolveu um script de shell que usa a AWS CLI para criar uma nova função do Lambda. No entanto, você recebeu uma mensagem de erro InvalidParameterValueException após executar o script. Qual é a causa MAIS provável desse problema?",
    options: [
      "Você excedeu o tamanho máximo de código total por conta.",
      "O serviço AWS Lambda encontrou um erro interno.",
      "O recurso já existe.",
      "Você forneceu uma função do IAM na CreateFunction API que o AWS Lambda não consegue assumir."
    ],
    correctAnswer: 3,
    explanation: "O erro InvalidParameterValueException geralmente ocorre quando a função do IAM fornecida para a CreateFunction API não tem as permissões necessárias ou não pode ser assumida pelo AWS Lambda, como a falta de uma política de confiança correta."
  },
  {
    id: 4,
    text: "Você está desenvolvendo um aplicativo que coleta continuamente dados sobre as interações entre jogadores e jogos e os alimenta em tempo real na sua plataforma de jogos. É necessário tornar o sistema altamente escalável para acomodar o fluxo repentino de jogadores que usarão a plataforma. Qual serviço da AWS ajudará você a conseguir isso?",
    options: [
      "AWS Elastic Map Reduce",
      "AWS Redshift",
      "Fluxo de dados do AWS Kinesis",
      "AWS DynamoDB"
    ],
    correctAnswer: 2,
    explanation: "O AWS Kinesis Data Streams é projetado para processar e analisar grandes volumes de dados em tempo real, sendo ideal para lidar com fluxos de dados de interações de jogadores de forma escalável."
  },
  {
    id: 5,
    text: "Um desenvolvedor está refatorando uma função Lambda que atualmente processa dados usando uma API GraphQL pública. Há um novo requisito para armazenar os resultados da consulta em um banco de dados hospedado em uma VPC. A função foi configurada com informações adicionais específicas da VPC e a conexão com o banco de dados foi estabelecida com sucesso. No entanto, o engenheiro descobriu que a função não consegue mais se conectar à internet após os testes. Qual das seguintes opções o desenvolvedor deve fazer para corrigir esse problema? (Selecione DUAS.)",
    options: [
      "Certifique-se de que o grupo de segurança associado da função Lambda permita conexões de saída.",
      "Configure interfaces de rede elásticas (ENIs) para permitir que sua função Lambda se conecte com segurança a outros recursos dentro de sua VPC privada.",
      "Configure sua função para encaminhar cargas que não foram processadas para uma fila de mensagens mortas (DLQ) usando o Amazon SQS.",
      "Adicione um gateway NAT à sua VPC.",
      "Envie uma solicitação de aumento de limite à AWS para aumentar o limite de execuções simultâneas da sua função Lambda."
    ],
    correctAnswer: [0, 3],
    explanation: "Para permitir que a função Lambda em uma VPC acesse a internet, é necessário garantir que o grupo de segurança permita conexões de saída e que um gateway NAT esteja configurado na VPC para rotear o tráfego para a internet."
  },
  {
    id: 6,
    text: "Um desenvolvedor implantou recentemente uma aplicação serverless, que consiste em uma função Lambda, um API Gateway e o DynamoDB usando o comando sam deploy CLI. A função Lambda é invocada por meio do API Gateway e, em seguida, processa e armazena os dados em uma tabela do DynamoDB com um tempo médio de 20 minutos. No entanto, a equipe de Suporte de TI notou que há várias invocações do Lambda encerradas todos os dias, o que está causando discrepâncias nos dados. Qual das seguintes opções é a causa raiz MAIS provável desse problema?",
    options: [
      "O limite de execução simultânea foi atingido.",
      "As invocações do Lambda com falha estão em execução há mais de 15 minutos e atingiram o tempo máximo de execução.",
      "A função Lambda contém um código recursivo e está em execução há mais de 15 minutos.",
      "O aplicativo sem servidor deve ser implantado usando o comando sam publish CLI."
    ],
    correctAnswer: 1,
    explanation: "O AWS Lambda tem um tempo limite máximo de 15 minutos. Como a função está levando em média 20 minutos, as invocações estão sendo encerradas devido ao limite de tempo, causando discrepâncias nos dados."
  },
  {
    id: 7,
    text: "Para melhorar seu sistema de gerenciamento de segurança da informação (SGSI), uma empresa lançou recentemente uma nova política que exige que todas as credenciais do banco de dados sejam criptografadas e rotacionadas automaticamente para evitar acesso não autorizado. Qual das seguintes opções é a solução MAIS apropriada para proteger as credenciais?",
    options: [
      "Crie um parâmetro para o Systems Manager Parameter Store usando a API PutParameter com um tipo de SecureString.",
      "Crie um segredo no AWS Secrets Manager e ative a rotação automática das credenciais do banco de dados.",
      "Habilite a autenticação do IAM DB que rotaciona as credenciais por padrão.",
      "Crie uma função do IAM com acesso total ao banco de dados. Anexe a função aos serviços que exigem acesso."
    ],
    correctAnswer: 1,
    explanation: "O AWS Secrets Manager é a melhor solução para armazenar e rotacionar automaticamente credenciais de banco de dados de forma segura, atendendo aos requisitos de criptografia e rotação automática."
  },
  {
    id: 8,
    text: "Uma empresa oferece um serviço de Inteligência Artificial (IA) Generativa, exposto por meio de uma API REST gerenciada pelo Amazon API Gateway. Recentemente, eles lançaram um plano de assinatura em que os usuários recebem chaves de API para acessar recursos premium. A empresa usa a CreateApiKey API para gerar essas chaves. Durante os testes, os desenvolvedores notaram que, embora os usuários existentes possam acessar o serviço sem problemas, novos assinantes premium recebem um 403 Forbidden erro ao usar suas chaves de API. O que deve ser feito para dar acesso ao serviço a novos usuários?",
    options: [
      "Use a UpdateAuthorizer operação para modificar as configurações de autorização. Promova as alterações na fase de produção chamando a CreateDeployment operação.",
      "Instrua os usuários a enviarem suas chaves de API em um cabeçalho personalizado. Na solicitação de integração, ajuste o modelo de mapeamento para extrair e avaliar esse cabeçalho e distinguir entre assinantes gratuitos e premium.",
      "Use a ImportApiKeys operação para importar as chaves dos usuários premium e, em seguida, aplique a UpdateUsagePlan operação para definir o novo nível de acesso.",
      "Associe as chaves de API dos usuários premium ao plano de uso pretendido usando a CreateUsagePlanKey operação."
    ],
    correctAnswer: 3,
    explanation: "Para conceder acesso a novos usuários premium, as chaves de API geradas precisam ser associadas a um plano de uso que permita acesso aos recursos premium, usando a operação CreateUsagePlanKey."
  },
  {
    id: 9,
    text: "Uma organização possui uma aplicação serverless que utiliza AWS Lambda e Amazon API Gateway. Recentemente, a equipe de DevOps descobriu que as funções do IAM associadas às funções do Lambda foram modificadas manualmente. A organização precisa identificar essas alterações não autorizadas e garantir que todos os recursos estejam sincronizados com a pilha do CloudFormation. Qual solução ajudará a empresa a identificar essas mudanças?",
    options: [
      "Analise os logs do CloudWatch para identificar alterações nas permissões da função do IAM.",
      "Execute uma verificação de detecção de desvio na pilha do CloudFormation.",
      "Use o AWS Config para monitorar atualizações feitas nas funções do Lambda e nas funções do IAM.",
      "Revise os logs do CloudTrail para rastrear atualizações de função do IAM para as funções do Lambda."
    ],
    correctAnswer: 1,
    explanation: "A detecção de desvio do CloudFormation permite identificar alterações manuais nos recursos gerenciados pela pilha, garantindo que todos os recursos estejam sincronizados com a configuração definida."
  },
  {
    id: 10,
    text: "Uma empresa possui um aplicativo que utiliza o CloudFront para disponibilizar conteúdo estático a usuários em todo o mundo. Ultimamente, a empresa vem recebendo diversas avaliações negativas de seus clientes, pois o acesso ao site demora muito. Às vezes, os usuários também recebem erros HTTP 504. Qual das seguintes combinações de opções o desenvolvedor deve usar para configurar uma solução econômica para esse cenário? (Selecione DUAS.)",
    options: [
      "Personalize o conteúdo que a distribuição web do CloudFront entrega aos seus usuários usando o Lambda@Edge, o que permite que suas funções do Lambda executem o processo de autenticação em locais da AWS mais próximos dos usuários.",
      "Adicione uma Cache-Control max-age diretiva aos seus objetos no CloudFront e especifique o maior valor prático para max-age aumentar a taxa de acertos do cache da sua distribuição do CloudFront.",
      "Configure um failover de origem criando um grupo de origem com duas origens. Especifique uma como a origem primária e a outra como a segunda origem, para a qual o CloudFront alterna automaticamente quando a origem primária retorna respostas de falha de código de status HTTP específicas.",
      "Inicie sua aplicação em várias VPCs geograficamente dispersas em diferentes regiões da AWS e crie uma VPC de trânsito para conectar facilmente todos os seus recursos. Use várias funções Lambda em cada região usando o serviço AWS Serverless Application Model (SAM) para melhorar o desempenho geral da aplicação.",
      "Inicie seu aplicativo em várias regiões da AWS para atender seus usuários globais. Use um registro do Route 53 com política de roteamento de latência para rotear o tráfego de entrada para a região com a melhor latência para o usuário."
    ],
    correctAnswer: [1, 2],
    explanation: "Adicionar uma diretiva Cache-Control max-age aumenta a taxa de acertos do cache, reduzindo a latência, enquanto configurar um failover de origem ajuda a evitar erros HTTP 504, garantindo maior disponibilidade."
  },
  {
    id: 11,
    text: "Uma aplicação web está usando um cluster ElastiCache que está sofrendo com rotatividade de cache. Um desenvolvedor precisa reconfigurar a aplicação para que os dados sejam recuperados do banco de dados apenas em caso de perda de cache. Qual pseudocódigo ilustra a estratégia de cache que o desenvolvedor precisa implementar?",
    options: [
      "obter_item(item_id):\n  item_valor = banco de dados.consulta('SELECIONE * DE Itens ONDE id = ?', item_id)\n  se item_valor for Nenhum:\n    item_valor = cache.definir(item_id, item_valor)\n    cache.adicionar(item_id, item_valor)\n  retornar item_valor",
      "get_item(item_id, item_value):\n  item_value = database.query('ATUALIZAR Itens ONDE id = ?', item_id, item_value)\n  cache.add(item_id, item_value)\n  retornar 'ok'",
      "obter_item(item_id):\n  item_value = cache.obter(item_id)\n  se item_value for Nenhum:\n    item_value = database.query('SELECIONE * DE Itens ONDE id = ?', item_id)\n    cache.adicionar(item_id, item_value)\n  retornar item_value",
      "obter_item(item_id):\n  item_value = cache.obter(item_id)\n  se item_value não for Nenhum:\n    item_value = database.query('SELECIONE * DE Itens ONDE id = ?', item_id)\n    cache.adicionar(item_id, item_value)\n  retornar item_value\n  senão:\n    retornar item_value"
    ],
    correctAnswer: 2,
    explanation: "A estratégia de cache 'cache-aside' é ilustrada pelo pseudocódigo que verifica primeiro o cache, recupera do banco de dados apenas se o item não estiver no cache e, em seguida, armazena o resultado no cache para futuras consultas."
  },
  {
    id: 12,
    text: "Você está desenvolvendo uma função Lambda que processa notificações de eventos do Amazon S3. Espera-se que a função tenha: 50 solicitações por segundo, 100 segundos para concluir cada solicitação. O que você deve fazer para evitar problemas quando a função for implantada e se tornar operacional?",
    options: [
      "Solicite à AWS que aumente o limite de suas execuções simultâneas.",
      "Aumentar o limite de simultaneidade da função.",
      "Implemente o backoff exponencial em seu aplicativo.",
      "Nenhuma ação adicional é necessária, pois o Lambda será dimensionado automaticamente com base nas solicitações recebidas."
    ],
    correctAnswer: 0,
    explanation: "Com 50 solicitações por segundo, cada uma levando 100 segundos, a função pode exceder o limite padrão de execuções simultâneas do Lambda. Solicitar um aumento de limite à AWS é necessário para evitar problemas de escalabilidade."
  },
  {
    id: 13,
    text: "Um desenvolvedor está trabalhando com uma aplicação AWS Serverless Application Model (AWS SAM) composta por diversas funções do AWS Lambda. O desenvolvedor executa a aplicação localmente em seu laptop usando comandos sam local. Durante os testes, uma das funções retorna Access denied erros. Após investigação, o desenvolvedor descobriu que a função Lambda está usando o AWS SDK para fazer chamadas de API em uma conta AWS em sandbox. Qual combinação de etapas o desenvolvedor deve executar para resolver o problema? (Selecione DUAS.)",
    options: [
      "Use o comando aws configure com o parâmetro --profile para adicionar um perfil nomeado com as credenciais da conta sandbox da AWS.",
      "Execute a função usando sam local invoke com o parâmetro --profile.",
      "Execute a função usando sam local invoke com o parâmetro --parameter-overrides.",
      "Adicione as credenciais da AWS da conta sandbox da AWS à seção Globals do arquivo template.yml e referencie-as na seção de propriedades AWS::Serverless::Function da função Lambda.",
      "Crie um arquivo de configuração da CLI do AWS SAM na raiz da pasta do projeto SAM. Adicione as variáveis de ambiente AWS_ACCESS_KEY_ID e AWS_SECRET_ACCESS_KEY a ele."
    ],
    correctAnswer: [0, 1],
    explanation: "Para resolver o erro de 'Access denied', o desenvolvedor deve configurar um perfil nomeado com as credenciais da conta sandbox usando aws configure --profile e, em seguida, usar o parâmetro --profile com sam local invoke para garantir que as credenciais corretas sejam usadas durante os testes locais."
  },
  {
    id: 14,
    text: "Um desenvolvedor está migrando uma aplicação web legada de seu data center local para a AWS. A aplicação é usada simultaneamente por milhares de usuários, e seus estados de sessão são armazenados na memória. O servidor local geralmente atinge 100% de utilização da CPU sempre que há um aumento repentino no número de pessoas acessando a aplicação. Qual das opções a seguir é a melhor maneira de reavaliar o desempenho e a disponibilidade do gerenciamento de sessão do aplicativo depois que ele for migrado para a AWS?",
    options: [
      "Use um cluster ElastiCache for Memcached para armazenar o estado da sessão do usuário do aplicativo.",
      "Armazene o estado da sessão do usuário do aplicativo usando o CloudFront.",
      "Use um cluster ElastiCache for Redis para armazenar o estado da sessão do usuário do aplicativo.",
      "Use sessões persistentes com cache de sessão local."
    ],
    correctAnswer: 2,
    explanation: "O ElastiCache for Redis é ideal para armazenar estados de sessão devido ao seu suporte a estruturas de dados avançadas, alta disponibilidade e escalabilidade, sendo mais adequado que o Memcached para aplicações com grandes picos de uso."
  },
  {
    id: 15,
    text: "Um site está hospedado em um grupo de instâncias EC2 de Auto Scaling, atrás de um Application Load Balancer. Ele também utiliza o CloudFront com um nome de domínio padrão para distribuir seus ativos estáticos e conteúdos dinâmicos. No entanto, o site tem uma classificação de busca ruim, pois não utiliza HTTPS/SSL seguro. Quais são as soluções possíveis que o desenvolvedor pode implementar para configurar a comunicação HTTPS entre os visualizadores e o CloudFront? (Selecione DUAS.)",
    options: [
      "Use um certificado SSL/TLS autoassinado no ALB que é armazenado em um bucket S3 privado.",
      "Defina Viewer Protocol Policy para usar HTTPS Only.",
      "Use um certificado autoassinado no ALB.",
      "Configure o ALB para usar seu certificado SSL/TLS padrão.",
      "Defina Viewer Protocol Policy para usar Redirect HTTP to HTTPS."
    ],
    correctAnswer: [1, 4],
    explanation: "Configurar a Viewer Protocol Policy para 'HTTPS Only' ou 'Redirect HTTP to HTTPS' no CloudFront garante que a comunicação com os visualizadores use HTTPS, melhorando a segurança e a classificação de busca."
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