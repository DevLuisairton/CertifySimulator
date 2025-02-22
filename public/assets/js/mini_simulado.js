const perguntas = [
  {
    pergunta: "Por que a AWS é mais econômica do que os data centers tradicionais para aplicações com cargas de trabalho de computação variáveis?",
    respostas: [
      "A) Os custos do Amazon Elastic Compute Cloud (Amazon EC2) são faturados mensalmente.",
      "B) Os clientes mantêm acesso administrativo total às suas instâncias do Amazon EC2.",
      "C) As instâncias do Amazon EC2 podem ser lançadas sob demanda quando necessário.",
      "D) Os clientes podem executar permanentemente instâncias suficientes para lidar com cargas de trabalho de pico."
    ],
    correta: 2
  },
  {
    pergunta: "Qual serviço da AWS simplificaria a migração de um banco de dados para a AWS?",
    respostas: [
      "A) AWS Storage Gateway",
      "B) AWS Database Migration Service (AWS DMS)",
      "C) Amazon Elastic Compute Cloud (Amazon EC2)",
      "D) Amazon AppStream 2.0"
    ],
    correta: 1
  },
  {
    pergunta: "Qual oferta da AWS permite que os clientes encontrem, comprem e comecem a usar imediatamente soluções de software em seu ambiente AWS?",
    respostas: [
      "A) AWS Config",
      "B) AWS OpsWorks",
      "C) AWS SDK",
      "D) AWS Marketplace"
    ],
    correta: 3
  },
  {
    pergunta: "Qual serviço de rede da AWS permite que uma empresa crie uma rede virtual dentro da AWS?",
    respostas: [
      "A) AWS Config",
      "B) Amazon Route 53",
      "C) AWS Direct Connect",
      "D) Amazon Virtual Private Cloud (Amazon VPC)"
    ],
    correta: 3
  },
  {
    pergunta: "Qual das seguintes opções é responsabilidade da AWS sob o modelo de responsabilidade compartilhada da AWS?",
    respostas: [
      "A) Configurar aplicativos de terceiros",
      "B) Manter hardware físico",
      "C) Proteger o acesso e os dados do aplicativo",
      "D) Gerenciar Amazon Machine Images (AMIs) personalizadas"
    ],
    correta: 1
  },
  {
    pergunta: "Qual componente da infraestrutura global da AWS o Amazon CloudFront usa para garantir a entrega de baixa latência?",
    respostas: [
      "A) Regiões da AWS",
      "B) Localizações de borda da AWS",
      "C) Zonas de disponibilidade da AWS",
      "D) Amazon Virtual Private Cloud (Amazon VPC)"
    ],
    correta: 1
  },
  {
    pergunta: "Como um administrador de sistema adicionaria uma camada adicional de segurança de login ao AWS Management Console de um usuário?",
    respostas: [
      "A) Usar AWS Cloud Directory",
      "B) Auditar funções do AWS Identity and Access Management (IAM)",
      "C) Habilitar autenticação multifator",
      "D) Habilitar AWS CloudTrail"
    ],
    correta: 2
  },
  {
    pergunta: "Qual serviço pode identificar o usuário que fez a chamada de API quando uma instância do Amazon Elastic Compute Cloud (Amazon EC2) é encerrada?",
    respostas: [
      "A) Amazon CloudWatch",
      "B) AWS CloudTrail",
      "C) AWS X-Ray",
      "D) AWS Identity and Access Management (AWS IAM)"
    ],
    correta: 1
  },
  {
    pergunta: "Qual serviço você usaria para enviar alertas com base em alarmes do Amazon CloudWatch?",
    respostas: [
      "A) Amazon Simple Notification Service (Amazon SNS)",
      "B) AWS CloudTrail",
      "C) AWS Trusted Advisor",
      "D) Amazon Route 53"
    ],
    correta: 0
  },
  {
    pergunta: "Onde um cliente pode encontrar informações sobre ações proibidas na infraestrutura da AWS?",
    respostas: [
      "A) AWS Trusted Advisor",
      "B) AWS Identity and Access Management (IAM)",
      "C) Console de faturamento da AWS",
      "D) Política de Uso Aceitável da AWS"
    ],
    correta: 3
  }
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");
const finalizarBtn = document.querySelector("#finalizar");
const reiniciarBtn = document.querySelector("#reiniciar");

const corretas = new Set();
const marcadas = new Set();
const totalDePerguntas = perguntas.length;

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.pergunta;

  // Adicionar bandeirinha
  const bandeirinha = document.createElement("span");
  bandeirinha.textContent = "🚩";
  bandeirinha.style.cursor = "pointer";
  bandeirinha.style.marginLeft = "auto";
  bandeirinha.style.opacity = "0.5";
  bandeirinha.onclick = () => {
    if (marcadas.has(item)) {
      marcadas.delete(item);
      bandeirinha.style.opacity = "0.5";
    } else {
      marcadas.add(item);
      bandeirinha.style.opacity = "1";
    }
  };
  quizItem.querySelector("h3").appendChild(bandeirinha);

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = resposta;
    dt.querySelector("input").setAttribute("name", "perguntas-" + perguntas.indexOf(item));
    dt.querySelector("input").value = item.respostas.indexOf(resposta);
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;

      corretas.delete(item);
      if (estaCorreta) {
        corretas.add(item);
      }
    };

    quizItem.querySelector("dl").appendChild(dt);
  }

  quizItem.querySelector("dl dt").remove();

  // coloca a pergunta na tela
  quiz.appendChild(quizItem);
}

// Função para finalizar o simulado
finalizarBtn.addEventListener("click", () => {
  const resumo = document.querySelector("#resumo");
  resumo.innerHTML = ""; // Limpa o conteúdo anterior

  const acertos = corretas.size;
  const erros = totalDePerguntas - acertos;
  const porcentagemAcertos = Math.round((acertos / totalDePerguntas) * 100);

  // Exibe o resumo
  resumo.innerHTML += `
    <h2>Resumo do Simulado</h2>
    <p>✅ Acertos: ${acertos}</p>
    <p>❌ Erros: ${erros}</p>
    <p>📊 Porcentagem de Acertos: <strong style="color: #82027b;">${porcentagemAcertos}%</strong></p>
    <h3>Detalhes das Questões:</h3>
  `;

  // Percorre todas as questões para mostrar o resultado
  perguntas.forEach((item, index) => {
    const respostaUsuario = document.querySelector(`input[name="perguntas-${index}"]:checked`);
    const acertou = respostaUsuario && respostaUsuario.value == item.correta;
    const respostaCorreta = item.respostas[item.correta];
    const respostaSelecionada = respostaUsuario ? item.respostas[respostaUsuario.value] : "Nenhuma resposta selecionada";

    resumo.innerHTML += `
      <div class="questao-resumo">
        <p><strong>Questão ${index + 1}:</strong> ${item.pergunta}</p>
        <p>${acertou ? "✅ Acertou" : "❌ Errou"}</p>
        <p>Sua resposta: ${respostaSelecionada}</p>
        <p>Resposta correta: ${respostaCorreta}</p>
      </div>
    `;
  });

  // Exibe o resumo e o botão de reiniciar
  resumo.style.display = "block";
  reiniciarBtn.style.display = "block";
  finalizarBtn.style.display = "none";
});

// Função para reiniciar o simulado
reiniciarBtn.addEventListener("click", () => {
  // Rola a página até a primeira questão
  const primeiraQuestao = document.querySelector(".quiz-item");
  if (primeiraQuestao) {
    primeiraQuestao.scrollIntoView({ behavior: "smooth" });
  }

  // Recarrega a página após um pequeno delay para garantir que a rolagem ocorra
  setTimeout(() => {
    window.location.reload();
  }, 500); // 500ms de delay
});

