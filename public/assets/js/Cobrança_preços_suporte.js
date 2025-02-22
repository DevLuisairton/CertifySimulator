const perguntas = [
  {
    pergunta: "Qual é o modelo de preço da AWS que permite pagar apenas pelo tempo de uso, sem compromisso de longo prazo?",
    respostas: [
      "A) Instâncias sob demanda",
      "B) Instâncias reservadas",
      "C) Spot Instances",
      "D) Savings Plans"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o modelo de preço da AWS que oferece descontos significativos em troca de um compromisso de uso de 1 ou 3 anos?",
    respostas: [
      "A) Instâncias reservadas",
      "B) Instâncias sob demanda",
      "C) Spot Instances",
      "D) Savings Plans"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o modelo de preço da AWS que permite comprar capacidade de computação não utilizada a um custo reduzido?",
    respostas: [
      "A) Spot Instances",
      "B) Instâncias reservadas",
      "C) Instâncias sob demanda",
      "D) Savings Plans"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o modelo de preço da AWS que oferece descontos flexíveis em troca de um compromisso de gasto consistente?",
    respostas: [
      "A) Savings Plans",
      "B) Instâncias reservadas",
      "C) Instâncias sob demanda",
      "D) Spot Instances"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o custo associado à transferência de dados entre Regiões da AWS?",
    respostas: [
      "A) Cobrado por GB transferido",
      "B) Gratuito",
      "C) Cobrado apenas para transferências acima de 1 TB",
      "D) Cobrado apenas para transferências entre contas"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o custo associado à transferência de dados dentro da mesma Região da AWS?",
    respostas: [
      "A) Gratuito",
      "B) Cobrado por GB transferido",
      "C) Cobrado apenas para transferências acima de 1 TB",
      "D) Cobrado apenas para transferências entre contas"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite estimar o custo de uso de serviços antes de implantá-los?",
    respostas: [
      "A) AWS Pricing Calculator",
      "B) AWS Cost Explorer",
      "C) AWS Budgets",
      "D) AWS Billing Conductor"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite criar orçamentos e alertas de custo?",
    respostas: [
      "A) AWS Budgets",
      "B) AWS Cost Explorer",
      "C) AWS Pricing Calculator",
      "D) AWS Billing Conductor"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite analisar e visualizar custos e uso de serviços?",
    respostas: [
      "A) AWS Cost Explorer",
      "B) AWS Budgets",
      "C) AWS Pricing Calculator",
      "D) AWS Billing Conductor"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite consolidar a cobrança de múltiplas contas?",
    respostas: [
      "A) AWS Organizations",
      "B) AWS Cost Explorer",
      "C) AWS Budgets",
      "D) AWS Billing Conductor"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o benefício de usar tags de alocação de custos na AWS?",
    respostas: [
      "A) Organizar e rastrear custos por recurso ou projeto",
      "B) Reduzir automaticamente os custos",
      "C) Aumentar o desempenho dos recursos",
      "D) Melhorar a segurança dos recursos"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite gerenciar e distribuir descontos para contas vinculadas?",
    respostas: [
      "A) AWS Billing Conductor",
      "B) AWS Organizations",
      "C) AWS Cost Explorer",
      "D) AWS Budgets"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o plano de suporte da AWS que oferece suporte técnico 24/7 com tempo de resposta de menos de 1 hora?",
    respostas: [
      "A) Enterprise Support",
      "B) Business Support",
      "C) Developer Support",
      "D) Basic Support"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS fornece recomendações para otimizar custos, desempenho e segurança?",
    respostas: [
      "A) AWS Trusted Advisor",
      "B) AWS Cost Explorer",
      "C) AWS Budgets",
      "D) AWS Billing Conductor"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite monitorar a saúde e o desempenho de recursos em tempo real?",
    respostas: [
      "A) Amazon CloudWatch",
      "B) AWS Trusted Advisor",
      "C) AWS Health Dashboard",
      "D) AWS Cost Explorer"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite visualizar o status operacional e o desempenho dos serviços da AWS?",
    respostas: [
      "A) AWS Health Dashboard",
      "B) Amazon CloudWatch",
      "C) AWS Trusted Advisor",
      "D) AWS Cost Explorer"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite denunciar abusos de recursos, como uso malicioso ou violações de segurança?",
    respostas: [
      "A) AWS Abuse Team",
      "B) AWS Trusted Advisor",
      "C) AWS Support Center",
      "D) AWS Health Dashboard"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o benefício de ser um AWS Partner?",
    respostas: [
      "A) Acesso a treinamentos e certificações",
      "B) Descontos em serviços da AWS",
      "C) Suporte técnico prioritário",
      "D) Todas as opções acima"
    ],
    correta: 3
  },
  {
    pergunta: "Qual serviço da AWS permite comprar e vender software de terceiros?",
    respostas: [
      "A) AWS Marketplace",
      "B) AWS Organizations",
      "C) AWS Cost Explorer",
      "D) AWS Billing Conductor"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS oferece assistência técnica personalizada para projetos complexos?",
    respostas: [
      "A) AWS Professional Services",
      "B) AWS Support Center",
      "C) AWS Trusted Advisor",
      "D) AWS Health Dashboard"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite encontrar soluções pré-configuradas para necessidades específicas?",
    respostas: [
      "A) AWS Solutions Architects",
      "B) AWS Marketplace",
      "C) AWS Professional Services",
      "D) AWS Support Center"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite acessar documentação técnica, whitepapers e blogs?",
    respostas: [
      "A) AWS re:Post",
      "B) AWS Knowledge Center",
      "C) AWS Support Center",
      "D) AWS Documentation"
    ],
    correta: 3
  },
  {
    pergunta: "Qual serviço da AWS permite interagir com a comunidade para tirar dúvidas técnicas?",
    respostas: [
      "A) AWS re:Post",
      "B) AWS Knowledge Center",
      "C) AWS Support Center",
      "D) AWS Documentation"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite acessar recomendações personalizadas para otimizar recursos?",
    respostas: [
      "A) AWS Trusted Advisor",
      "B) AWS Cost Explorer",
      "C) AWS Budgets",
      "D) AWS Billing Conductor"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite monitorar e gerenciar o desempenho de aplicações distribuídas?",
    respostas: [
      "A) AWS X-Ray",
      "B) Amazon CloudWatch",
      "C) AWS Trusted Advisor",
      "D) AWS Health Dashboard"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite gerenciar e monitorar a conformidade de recursos?",
    respostas: [
      "A) AWS Config",
      "B) AWS Trusted Advisor",
      "C) AWS Cost Explorer",
      "D) AWS Billing Conductor"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite automatizar auditorias de conformidade?",
    respostas: [
      "A) AWS Audit Manager",
      "B) AWS Config",
      "C) AWS Trusted Advisor",
      "D) AWS Cost Explorer"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite gerenciar e distribuir certificados SSL/TLS?",
    respostas: [
      "A) AWS Certificate Manager (ACM)",
      "B) AWS KMS",
      "C) AWS IAM",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite detectar dados confidenciais em buckets do Amazon S3?",
    respostas: [
      "A) Amazon Macie",
      "B) AWS Config",
      "C) AWS CloudTrail",
      "D) AWS IAM"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite proteger aplicações web contra ataques de injeção de SQL?",
    respostas: [
      "A) AWS WAF (Web Application Firewall)",
      "B) AWS Shield",
      "C) Amazon GuardDuty",
      "D) AWS IAM"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS fornece proteção contra ataques DDoS em aplicações web?",
    respostas: [
      "A) AWS Shield",
      "B) AWS WAF",
      "C) Amazon GuardDuty",
      "D) AWS IAM"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite centralizar o gerenciamento de segurança e conformidade?",
    respostas: [
      "A) AWS Security Hub",
      "B) AWS IAM",
      "C) AWS CloudTrail",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite auditar e monitorar chamadas de API em sua conta?",
    respostas: [
      "A) AWS CloudTrail",
      "B) AWS Config",
      "C) AWS IAM",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite avaliar a conformidade de recursos com políticas internas?",
    respostas: [
      "A) AWS Config",
      "B) AWS CloudTrail",
      "C) AWS IAM",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite automatizar auditorias de conformidade e gerar relatórios?",
    respostas: [
      "A) AWS Audit Manager",
      "B) AWS Config",
      "C) AWS CloudTrail",
      "D) AWS IAM"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o custo associado à transferência de dados de saída para a internet?",
    respostas: [
      "A) Cobrado por GB transferido",
      "B) Gratuito",
      "C) Cobrado apenas para transferências acima de 1 TB",
      "D) Cobrado apenas para transferências entre contas"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o custo associado à transferência de dados de entrada para a AWS?",
    respostas: [
      "A) Gratuito",
      "B) Cobrado por GB transferido",
      "C) Cobrado apenas para transferências acima de 1 TB",
      "D) Cobrado apenas para transferências entre contas"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite criar orçamentos e alertas de custo?",
    respostas: [
      "A) AWS Budgets",
      "B) AWS Cost Explorer",
      "C) AWS Pricing Calculator",
      "D) AWS Billing Conductor"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite analisar e visualizar custos e uso de serviços?",
    respostas: [
      "A) AWS Cost Explorer",
      "B) AWS Budgets",
      "C) AWS Pricing Calculator",
      "D) AWS Billing Conductor"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite consolidar a cobrança de múltiplas contas?",
    respostas: [
      "A) AWS Organizations",
      "B) AWS Cost Explorer",
      "C) AWS Budgets",
      "D) AWS Billing Conductor"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o benefício de usar tags de alocação de custos na AWS?",
    respostas: [
      "A) Organizar e rastrear custos por recurso ou projeto",
      "B) Reduzir automaticamente os custos",
      "C) Aumentar o desempenho dos recursos",
      "D) Melhorar a segurança dos recursos"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite gerenciar e distribuir descontos para contas vinculadas?",
    respostas: [
      "A) AWS Billing Conductor",
      "B) AWS Organizations",
      "C) AWS Cost Explorer",
      "D) AWS Budgets"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o plano de suporte da AWS que oferece suporte técnico 24/7 com tempo de resposta de menos de 1 hora?",
    respostas: [
      "A) Enterprise Support",
      "B) Business Support",
      "C) Developer Support",
      "D) Basic Support"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS fornece recomendações para otimizar custos, desempenho e segurança?",
    respostas: [
      "A) AWS Trusted Advisor",
      "B) AWS Cost Explorer",
      "C) AWS Budgets",
      "D) AWS Billing Conductor"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite monitorar a saúde e o desempenho de recursos em tempo real?",
    respostas: [
      "A) Amazon CloudWatch",
      "B) AWS Trusted Advisor",
      "C) AWS Health Dashboard",
      "D) AWS Cost Explorer"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite visualizar o status operacional e o desempenho dos serviços da AWS?",
    respostas: [
      "A) AWS Health Dashboard",
      "B) Amazon CloudWatch",
      "C) AWS Trusted Advisor",
      "D) AWS Cost Explorer"
    ],
    correta: 0
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
