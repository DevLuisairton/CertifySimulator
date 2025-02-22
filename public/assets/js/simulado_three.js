const perguntas = [
  {
    pergunta: "Uma empresa deseja usar uma solução de rede da AWS que possa atuar como um gateway centralizado entre várias VPCs e redes locais. Qual serviço ou recurso da AWS atenderá a esse requisito?",
    respostas: [
      "A) Gateway VPC endpoint",
      "B) AWS Direct Connect",
      "C) AWS Transit Gateway",
      "D) VPC Peering"
    ],
    correta: 2
  },
  {
    pergunta: "Qual serviço ou ferramenta complementar da AWS cria casos de negócios baseados em dados para planejamento de nuvem?",
    respostas: [
      "A) Avaliador de migração (Migration Evaluator)",
      "B) Condutor de faturamento da AWS (AWS Billing Conductor)",
      "C) Console de faturamento da AWS (AWS Billing Console)",
      "D) Previsão da Forecast (Amazon Forecast)"
    ],
    correta: 0
  },
  {
    pergunta: "Um administrador observou que vários recursos da AWS foram excluídos ontem. Qual serviço da AWS ajudará a identificar a causa e determinar qual usuário excluiu os recursos?",
    respostas: [
      "A) AWS CloudTrail",
      "B) Amazon Inspector",
      "C) Amazon GuardDuty",
      "D) AWS Trusted Advisor"
    ],
    correta: 0
  },
  {
    pergunta: "Uma empresa de telecomunicações está procurando expandir sua cobertura 5G em todo o país e, como resultado, precisa provisionar e construir sua própria rede celular privada com a ajuda da AWS. Qual solução a AWS fornece para ajudar com isso?",
    respostas: [
      "A) AWS Private 5G",
      "B) AWS Wavelength",
      "C) AWS Outposts",
      "D) AWS Direct Connect"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o volume total de dados que pode ser armazenado no Amazon S3?",
    respostas: [
      "A) 10 PB",
      "B) 50 PB",
      "C) 100 PB",
      "D) ilimitado"
    ],
    correta: 3
  },
  {
    pergunta: "Um aplicativo herdado de computação de alto desempenho (HPC) herdado será migrado para a AWS. Qual tipo de adaptador de rede deve ser usado?",
    respostas: [
      "A) Endereço IP elástico",
      "B) Elastic Network Adapter/ENA",
      "C) Elastic Fabric Adapter/EFA",
      "D) Elastic Network Interface/ENI"
    ],
    correta: 2
  },
  {
    pergunta: "Qual entidade garante que seu aplicativo no Amazon Elastic Compute Cloud (Amazon EC2) sempre tenha a quantidade certa de capacidade para lidar com a demanda de tráfego atual?",
    respostas: [
      "A) Amazon EC2 Auto Scaling",
      "B) Multi-AZ deployment",
      "C) Network Load Balancer",
      "D) Application Load Balancer"
    ],
    correta: 0
  },
  {
    pergunta: "Uma empresa deseja configurar uma conexão de rede segura do local para a Nuvem AWS em até 1 semana. Qual solução atenderá a esses requisitos?",
    respostas: [
      "A) AWS Direct Connect",
      "B) Amazon VPC",
      "C) AWS Site-to-Site VPN",
      "D) Edge location"
    ],
    correta: 2
  },
  {
    pergunta: "Quando um usuário deseja utilizar suas licenças de software existentes por soquete, por núcleo ou por máquina virtual para um servidor Microsoft Windows em execução na AWS, qual tipo de instância do Amazon EC2 é necessário?",
    respostas: [
      "A) Instâncias spot",
      "B) Instâncias Dedicadas",
      "C) Hosts Dedicados",
      "D) Instâncias Reservadas"
    ],
    correta: 2
  },
  {
    pergunta: "Qual princípio de design está relacionado ao pilar de confiabilidade de acordo com o AWS Well-Architected Framework?",
    respostas: [
      "A) Testar procedimentos de recuperação",
      "B) Realizar experimentos com mais frequência",
      "C) Expandir globalmente em minutos",
      "D) Analisar e atribuir despesas"
    ],
    correta: 0
  },
  {
    pergunta: "Uma empresa armazena dados em um bucket do Amazon S3. Qual tarefa é responsabilidade da AWS?",
    respostas: [
      "A) Configurar uma política de ciclo de vida do S3.",
      "B) Ativar o versionamento do S3.",
      "C) Configurar políticas de bucket do S3.",
      "D) Proteger a infraestrutura que suporta o armazenamento S3."
    ],
    correta: 3
  },
  {
    pergunta: "Qual serviço da AWS é um banco de dados NoSQL totalmente gerenciado?",
    respostas: [
      "A) Amazon RDS",
      "B) Amazon Redshift",
      "C) Amazon DynamoDB",
      "D) Amazon Aurora"
    ],
    correta: 2
  },
  {
    pergunta: "Uma empresa deseja transferir um Windows Server 2022 virtual que está atualmente em execução em seu próprio data center para a AWS. A empresa quer converter automaticamente o servidor existente para rodar diretamente na infraestrutura da AWS em vez de em um hardware virtualizado. Qual serviço da AWS atenderá a esses requisitos?",
    respostas: [
      "A) AWS DataSync",
      "B) AWS Database Migration Service (AWS DMS)",
      "C) AWS Application Discovery Service",
      "D) AWS Application Migration Service"
    ],
    correta: 3
  },
  {
    pergunta: "Uma empresa deseja migrar seu banco de dados SQL Server local para a AWS Cloud. A empresa quer que a AWS gerencie a administração diária do banco de dados. Qual serviço da AWS atenderá aos requisitos da empresa?",
    respostas: [
      "A) Amazon EC2 for Microsoft SQL Server",
      "B) Amazon DynamoDB",
      "C) Amazon RDS",
      "D) Amazon Aurora"
    ],
    correta: 2
  },
  {
    pergunta: "Uma empresa precisa de filtragem de rede sem estado para sua VPC. Qual serviço, ferramenta ou recurso da AWS atenderá a esse requisito?",
    respostas: [
      "A) VPC Peering",
      "B) Security Group",
      "C) Network ACL",
      "D) AWS WAF"
    ],
    correta: 2
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
  window.location.reload(); // Recarrega a página para reiniciar o simulado
});

