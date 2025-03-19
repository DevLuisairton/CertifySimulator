const originalQuestions = [
  {
    id: 1,
    text: "Em que etapa do Launch Wizard do Amazon EC2 o desenvolvedor escolhe o sistema operacional a ser executado em sua instância?",
    options: [
      "Amazon Machine Image (AMI)",
      "Os detalhes avançados",
      "As configurações de rede",
      "O tipo de instância"
    ],
    correctAnswer: 0,
    explanation: "A Amazon Machine Image (AMI) é um modelo que contém uma configuração de software (por exemplo, um sistema operacional, um servidor de aplicativos e aplicativos) necessária para iniciar sua instância. Você especifica uma AMI quando lança uma instância, o que permite que você tenha várias instâncias com a mesma configuração."
  },
  {
    id: 2,
    text: "Qual definição melhor descreve o AWS Marketplace?",
    options: [
      "Um catálogo digital que inclui milhares de listas de software",
      "Um painel para usuários gerenciarem seus custos de instâncias",
      "Um catálogo digital que inclui milhares de tipos de instâncias do EC2 que os usuários podem utilizar",
      "Um catálogo digital que inclui milhares de perfis do AWS Identity and Access Management (IAM) prontos para uso"
    ],
    correctAnswer: 0,
    explanation: "O AWS Marketplace é um catálogo digital com milhares de ofertas de software de fornecedores independentes de software que facilitam encontrar, testar, comprar e implantar software executado na AWS."
  },
  {
    id: 3,
    text: "Quais afirmações sobre os volumes de armazenamento de instâncias do Amazon EC2 são verdadeiras? (Selecione DUAS respostas.)",
    options: [
      "Os volumes podem ser retidos depois que a instância for encerrada.",
      "Os volumes podem ser criptografados.",
      "Os volumes podem ser reiniciados e ainda reter dados no volume.",
      "Os volumes podem ser interrompidos e ainda reter dados no volume.",
      "Os volumes podem atuar como um volume-raiz."
    ],
    correctAnswer: [1, 4],
    explanation: "Os volumes de armazenamento de instâncias do Amazon EC2 (EBS volumes) podem ser criptografados para proteger os dados em repouso e em trânsito. Eles também podem atuar como um volume raiz para uma instância EC2, permitindo que o sistema operacional seja armazenado no volume EBS."
  },
  {
    id: 4,
    text: "Um desenvolvedor está prestes a iniciar uma instância do EC2 no console de gerenciamento da AWS. Que opção de configuração deve ser selecionada primeiro antes de iniciar o Launch Wizard do EC2?",
    options: [
      "A Amazon Machine Image (AMI)",
      "A nuvem privada virtual (VPC)",
      "A Região",
      "O par de chaves"
    ],
    correctAnswer: 0,
    explanation: "A Amazon Machine Image (AMI) é o primeiro passo no Launch Wizard do EC2. Ela define o sistema operacional e outros softwares que serão executados na sua instância."
  },
  {
    id: 5,
    text: "Um desenvolvedor deseja reter os dados depois que uma instância for deletada. Qual opção de armazenamento deve ser escolhida?",
    options: [
      "AWS Lambda",
      "Perfis do AWS Identity and Access Management (IAM)",
      "Armazenamento de instâncias do Amazon EC2",
      "Amazon Elastic Block Store (Amazon EBS)"
    ],
    correctAnswer: 3,
    explanation: "O Amazon Elastic Block Store (EBS) é um serviço de armazenamento de blocos persistente para uso com instâncias do Amazon EC2 na nuvem AWS. Os volumes do EBS são independentes do ciclo de vida de uma instância EC2, o que significa que os dados armazenados em um volume do EBS persistem mesmo após o término da instância."
  },
  {
    id: 6,
    text: "Quais opções são componentes de um tipo de instância? (Selecione TRÊS respostas.)",
    options: [
      "Sistema operacional",
      "Endereço IP público",
      "Software do servidor de aplicativos",
      "Memória",
      "CPU",
      "Desempenho de rede"
    ],
    correctAnswer: [3, 4, 5],
    explanation: "Os tipos de instância do EC2 são definidos por sua combinação de CPU, memória e desempenho de rede. Eles determinam a capacidade de computação, a memória e a largura de banda de rede que sua instância terá."
  },
  {
    id: 7,
    text: "Um desenvolvedor tem uma carga de trabalho que usará o Auto Scaling do Amazon EC2 para iniciar instâncias adicionais quando a carga de trabalho aumentar e encerrar essas instâncias quando a carga de trabalho diminuir. Qual seria a opção de compra do Amazon EC2 com melhor custo-benefício para as instâncias que serão iniciadas e encerradas?",
    options: [
      "Instâncias de Savings Plans",
      "Instâncias sob demanda",
      "Instâncias spot",
      "Instâncias reservadas"
    ],
    correctAnswer: 2,
    explanation: "Instâncias spot oferecem grandes descontos em comparação com os preços sob demanda e são ideais para cargas de trabalho que podem ser interrompidas. O Auto Scaling do EC2 pode usar instâncias spot para iniciar e encerrar instâncias dinamicamente com base na demanda, otimizando os custos para cargas de trabalho variáveis."
  },
  {
    id: 8,
    text: "Qual definição melhor descreve o Elastic Load Balancing (ELB)?",
    options: [
      "Um serviço que monitora aplicativos e automaticamente adiciona ou remove capacidade dos Resource Groups em resposta a mudanças na demanda.",
      "Um serviço que fornece dados que podem ser utilizados para monitorar aplicativos, otimizar a utilização dos recursos, e responder a mudanças sistêmicas de desempenho.",
      "Um serviço que distribui o tráfego de entrada para múltiplos destinos, tais como instâncias do EC2.",
      "Um serviço que pode ser utilizado para configurar, gerenciar e dimensionar na nuvem um ambiente de cache ou em memória distribuído."
    ],
    correctAnswer: 2,
    explanation: "O Elastic Load Balancing (ELB) distribui automaticamente o tráfego de entrada de aplicativos em várias instâncias do Amazon EC2, contêineres, endereços IP e funções Lambda. Ele pode lidar com as variações no tráfego do aplicativo em uma única zona de disponibilidade ou em várias zonas de disponibilidade."
  },
  {
    id: 9,
    text: "O Amazon EC2 Auto Scaling pode ajudar a dimensionar as instâncias do EC2. Que tipo de metodologia de dimensionamento é suportada pelo Auto Scaling do Amazon EC2?",
    options: [
      "Aumento vertical, mas sem aumento da quantidade",
      "Scaling horizontal",
      "Scaling vertical",
      "Scaling horizontal e vertical"
    ],
    correctAnswer: 1,
    explanation: "O Amazon EC2 Auto Scaling suporta o dimensionamento horizontal, que envolve adicionar ou remover instâncias do EC2 com base na demanda. O dimensionamento vertical, que envolve aumentar ou diminuir o tamanho das instâncias existentes, não é suportado pelo Auto Scaling do EC2."
  },
  {
    id: 10,
    text: "Quais afirmações sobre os grupos de segurança são verdadeiras? (Selecione DUAS respostas.)",
    options: [
      "Os grupos de segurança podem ser modificados a qualquer momento.",
      "Os grupos de segurança não podem ser modificados.",
      "Os grupos de segurança atuam como um firewall para proteger uma instância.",
      "Os grupos de segurança podem ser modificados, mas o usuário deve primeiramente interromper a instância.",
      "Os grupos de segurança atuam como um firewall para proteger uma sub-rede."
    ],
    correctAnswer: [0, 2],
    explanation: "Os grupos de segurança atuam como um firewall virtual para controlar o tráfego de entrada e saída para uma ou mais instâncias do EC2. Eles podem ser modificados a qualquer momento, e as alterações são aplicadas imediatamente às instâncias associadas."
  },
  {
    id: 11,
    text: "Que opções de configuração afetam o preço de uma instância do EC2? (Selecione TRÊS respostas.)",
    options: [
      "O grupo de segurança",
      "O par de chaves",
      "O perfil do AWS Identity and Access Management (IAM)",
      "O tipo de instância",
      "A Amazon Machine Image (AMI)",
      "A configuração do armazenamento"
    ],
    correctAnswer: [3, 4, 5],
    explanation: "O tipo de instância (que define a quantidade de CPU, memória e outras características), a Amazon Machine Image (AMI) (que define o sistema operacional e outros softwares) e a configuração do armazenamento (tipo e tamanho do volume) são os principais fatores que determinam o preço de uma instância do EC2."
  },
  [
    {
      id: 12,
      text: "Um desenvolvedor tem uma carga de trabalho que será executada ao longo de seis meses e é capaz de suportar interrupções. Qual seria a opção de compra do Amazon EC2 com melhor custo-benefício?",
      options: [
        "Instâncias de Savings Plans",
        "Instâncias reservadas",
        "Instâncias spot",
        "Instâncias sob demanda"
      ],
      correctAnswer: 2,
      explanation: "Instâncias spot oferecem grandes descontos em comparação com os preços sob demanda e são ideais para cargas de trabalho que podem ser interrompidas. Como a carga de trabalho do desenvolvedor pode suportar interrupções e será executada por seis meses, as instâncias spot seriam a opção de compra mais econômica."
    },
    {
      id: 13,
      text: "Qual afirmação sobre a arquitetura de uma instância do EC2 está correta?",
      options: [
        "A instância está em uma nuvem privada virtual (VPC), em um grupo de segurança, em uma sub-rede, em uma Região.",
        "A instância está em um grupo de segurança, em uma sub-rede, em uma nuvem privada virtual (VPC), em uma Região.",
        "A instância está em uma sub-rede, em um grupo de segurança, em uma nuvem privada virtual (VPC), em uma Região.",
        "A instância está em um grupo de segurança, em uma sub-rede, em uma Região, em uma nuvem privada virtual (VPC)."
      ],
      correctAnswer: 0,
      explanation: "A arquitetura correta de uma instância do EC2 é: a instância está dentro de uma Região, dentro de uma Virtual Private Cloud (VPC), dentro de uma sub-rede, e dentro de um grupo de segurança. A Região é a área geográfica geral, a VPC é a rede privada isolada, a sub-rede é uma subdivisão da VPC, e o grupo de segurança atua como um firewall para a instância."
    },
    {
      id: 14,
      text: "Um desenvolvedor deseja implantar e gerenciar aplicativos em contêineres. Qual serviço deve ser utilizado?",
      options: [
        "AWS Elastic Beanstalk",
        "AWS Lambda",
        "Amazon Elastic Compute Cloud (Amazon EC2)",
        "Amazon Elastic Kubernetes Service (Amazon EKS)"
      ],
      correctAnswer: 3,
      explanation: "O Amazon Elastic Kubernetes Service (EKS) é um serviço gerenciado que facilita a execução do Kubernetes na AWS, permitindo que você implante, gerencie e dimensione aplicativos em contêineres."
    },
    {
      id: 15,
      text: "Uma empresa precisa de uma solução de armazenamento altamente durável e escalável para armazenar dados de backup de longo prazo com acesso infrequente. Qual serviço da AWS seria mais adequado para essa necessidade?",
      options: [
        "Amazon Elastic Block Store (EBS)",
        "Amazon Simple Storage Service (S3) Glacier Deep Archive",
        "Amazon Relational Database Service (RDS)",
        "AWS Lambda"
      ],
      correctAnswer: 1,
      explanation: "O Amazon S3 Glacier Deep Archive é projetado especificamente para armazenamento de dados de longo prazo com acesso infrequente, oferecendo o menor custo de armazenamento na AWS. Ele é ideal para backups de longo prazo, arquivamento de dados regulatórios e recuperação de desastres, atendendo aos requisitos de alta durabilidade e escalabilidade mencionados na pergunta."
    }
];

// Lista de questões ativa (será embaralhada)
let questions = [...originalQuestions];

// Estado do simulado
const examState = {
  currentQuestionIndex: 0,
  answers: {},
  markedForReview: new Set(),
  timeRemaining: 10 * 60, // 30 minutos em segundos
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