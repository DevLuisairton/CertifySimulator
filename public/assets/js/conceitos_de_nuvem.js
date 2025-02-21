const perguntas = [
    {
      pergunta: "Qual é um dos principais benefícios da nuvem AWS em termos de custos?",
      respostas: [
        "A) Custos fixos e previsíveis",
        "B) Redução de despesas de capital (CapEx)",
        "C) Necessidade de investimento inicial em hardware",
        "D) Custos operacionais mais altos"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é um benefício da infraestrutura global da AWS?",
      respostas: [
        "A) Limitação geográfica",
        "B) Velocidade de implantação reduzida",
        "C) Alcance global e baixa latência",
        "D) Dependência de data centers locais"
      ],
      correta: 2
    },
    {
      pergunta: "O que a elasticidade na nuvem AWS permite?",
      respostas: [
        "A) Manter recursos fixos independentemente da demanda",
        "B) Escalar recursos para cima ou para baixo conforme a necessidade",
        "C) Limitar o crescimento da infraestrutura",
        "D) Aumentar custos operacionais"
      ],
      correta: 1
    },
    {
      pergunta: "Qual pilar do AWS Well-Architected Framework se concentra em proteger informações e sistemas?",
      respostas: [
        "A) Excelência operacional",
        "B) Segurança",
        "C) Confiabilidade",
        "D) Eficiência de desempenho"
      ],
      correta: 1
    },
    {
      pergunta: "Qual pilar do AWS Well-Architected Framework se concentra em garantir que os sistemas funcionem conforme o esperado?",
      respostas: [
        "A) Excelência operacional",
        "B) Segurança",
        "C) Confiabilidade",
        "D) Otimização de custos"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é um dos benefícios do AWS Cloud Adoption Framework (AWS CAF)?",
      respostas: [
        "A) Aumento do risco comercial",
        "B) Redução da eficiência operacional",
        "C) Melhoria do desempenho em ESG (ambiental, social e de governança)",
        "D) Diminuição da receita"
      ],
      correta: 2
    },
    {
      pergunta: "Qual estratégia de migração para a nuvem AWS envolve a replicação de bancos de dados?",
      respostas: [
        "A) Rehosting (lift-and-shift)",
        "B) Replatforming",
        "C) Refactoring",
        "D) Retire"
      ],
      correta: 1
    },
    {
      pergunta: "Qual serviço da AWS é usado para migrar grandes volumes de dados para a nuvem de forma offline?",
      respostas: [
        "A) AWS Snowball",
        "B) AWS Direct Connect",
        "C) AWS DataSync",
        "D) AWS Transfer Family"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre custos fixos e custos variáveis na nuvem?",
      respostas: [
        "A) Custos fixos mudam com o uso, enquanto custos variáveis são constantes",
        "B) Custos fixos são constantes, enquanto custos variáveis mudam com o uso",
        "C) Ambos são sempre constantes",
        "D) Ambos mudam com o uso"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é um dos benefícios da automação na nuvem AWS?",
      respostas: [
        "A) Aumento do tempo de provisionamento",
        "B) Redução da eficiência operacional",
        "C) Gerenciamento simplificado de provisionamento e configuração",
        "D) Dependência de intervenção manual"
      ],
      correta: 2
    },
    {
      pergunta: "Qual serviço da AWS é um exemplo de serviço gerenciado?",
      respostas: [
        "A) Amazon EC2",
        "B) Amazon RDS",
        "C) AWS Lambda",
        "D) Amazon S3"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é um dos benefícios do modelo Bring-Your-Own-License (BYOL)?",
      respostas: [
        "A) Necessidade de comprar novas licenças",
        "B) Uso de licenças existentes na nuvem",
        "C) Limitação de flexibilidade",
        "D) Aumento de custos de licenciamento"
      ],
      correta: 1
    },
    {
      pergunta: "O que significa dimensionamento correto (right-sizing) na nuvem AWS?",
      respostas: [
        "A) Provisionar mais recursos do que o necessário",
        "B) Ajustar os recursos para atender às necessidades reais",
        "C) Ignorar a otimização de custos",
        "D) Manter recursos subutilizados"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é um dos benefícios da alta disponibilidade na nuvem AWS?",
      respostas: [
        "A) Tempo de inatividade prolongado",
        "B) Redundância e tolerância a falhas",
        "C) Dependência de um único data center",
        "D) Aumento do risco de falhas"
      ],
      correta: 1
    },
    {
      pergunta: "Qual pilar do AWS Well-Architected Framework se concentra em otimizar o uso de recursos para reduzir custos?",
      respostas: [
        "A) Excelência operacional",
        "B) Segurança",
        "C) Confiabilidade",
        "D) Otimização de custos"
      ],
      correta: 3
    },
    {
      pergunta: "Qual é um dos benefícios da agilidade na nuvem AWS?",
      respostas: [
        "A) Lentidão na implementação de mudanças",
        "B) Capacidade de inovar e experimentar rapidamente",
        "C) Dependência de processos manuais",
        "D) Aumento do tempo de lançamento no mercado"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é um dos benefícios do AWS Cloud Adoption Framework (AWS CAF) para empresas?",
      respostas: [
        "A) Aumento do risco comercial",
        "B) Redução da eficiência operacional",
        "C) Melhoria do desempenho em ESG (ambiental, social e de governança)",
        "D) Diminuição da receita"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é um dos benefícios da infraestrutura global da AWS para empresas?",
      respostas: [
        "A) Limitação geográfica",
        "B) Velocidade de implantação reduzida",
        "C) Alcance global e baixa latência",
        "D) Dependência de data centers locais"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é um dos benefícios da elasticidade na nuvem AWS para empresas?",
      respostas: [
        "A) Manter recursos fixos independentemente da demanda",
        "B) Escalar recursos para cima ou para baixo conforme a necessidade",
        "C) Limitar o crescimento da infraestrutura",
        "D) Aumentar custos operacionais"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é um dos benefícios da automação na nuvem AWS para empresas?",
      respostas: [
        "A) Aumento do tempo de provisionamento",
        "B) Redução da eficiência operacional",
        "C) Gerenciamento simplificado de provisionamento e configuração",
        "D) Dependência de intervenção manual"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é um dos benefícios do modelo Bring-Your-Own-License (BYOL) para empresas?",
      respostas: [
        "A) Necessidade de comprar novas licenças",
        "B) Uso de licenças existentes na nuvem",
        "C) Limitação de flexibilidade",
        "D) Aumento de custos de licenciamento"
      ],
      correta: 1
    },
    {
      pergunta: "O que significa dimensionamento correto (right-sizing) na nuvem AWS para empresas?",
      respostas: [
        "A) Provisionar mais recursos do que o necessário",
        "B) Ajustar os recursos para atender às necessidades reais",
        "C) Ignorar a otimização de custos",
        "D) Manter recursos subutilizados"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é um dos benefícios da alta disponibilidade na nuvem AWS para empresas?",
      respostas: [
        "A) Tempo de inatividade prolongado",
        "B) Redundância e tolerância a falhas",
        "C) Dependência de um único data center",
        "D) Aumento do risco de falhas"
      ],
      correta: 1
    },
    {
      pergunta: "Qual pilar do AWS Well-Architected Framework se concentra em otimizar o uso de recursos para reduzir custos?",
      respostas: [
        "A) Excelência operacional",
        "B) Segurança",
        "C) Confiabilidade",
        "D) Otimização de custos"
      ],
      correta: 3
    },
    {
      pergunta: "Qual é um dos benefícios da agilidade na nuvem AWS para empresas?",
      respostas: [
        "A) Lentidão na implementação de mudanças",
        "B) Capacidade de inovar e experimentar rapidamente",
        "C) Dependência de processos manuais",
        "D) Aumento do tempo de lançamento no mercado"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é um dos principais benefícios da nuvem AWS em termos de escalabilidade?",
      respostas: [
        "A) Limitação de recursos",
        "B) Capacidade de escalar verticalmente e horizontalmente",
        "C) Dependência de hardware físico",
        "D) Necessidade de planejamento de capacidade a longo prazo"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é um dos benefícios da infraestrutura global da AWS para aplicações distribuídas?",
      respostas: [
        "A) Aumento da latência",
        "B) Redução do alcance global",
        "C) Melhoria da experiência do usuário com baixa latência",
        "D) Dependência de um único data center"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é um dos pilares do AWS Well-Architected Framework que se concentra em operações eficientes?",
      respostas: [
        "A) Segurança",
        "B) Excelência operacional",
        "C) Confiabilidade",
        "D) Sustentabilidade"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é um dos benefícios do AWS Cloud Adoption Framework (AWS CAF) para a governança de TI?",
      respostas: [
        "A) Aumento da complexidade operacional",
        "B) Redução da visibilidade dos recursos",
        "C) Melhoria da governança e conformidade",
        "D) Diminuição da eficiência operacional"
      ],
      correta: 2
    },
    {
      pergunta: "Qual estratégia de migração para a nuvem AWS envolve a reescrita completa de um aplicativo?",
      respostas: [
        "A) Rehosting (lift-and-shift)",
        "B) Replatforming",
        "C) Refactoring",
        "D) Retire"
      ],
      correta: 2
    },
    {
      pergunta: "Qual serviço da AWS é usado para migrar grandes volumes de dados para a nuvem de forma offline?",
      respostas: [
        "A) AWS Snowball",
        "B) AWS Direct Connect",
        "C) AWS DataSync",
        "D) AWS Transfer Family"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é um dos benefícios da automação na nuvem AWS?",
      respostas: [
        "A) Aumento do tempo de provisionamento",
        "B) Redução da eficiência operacional",
        "C) Gerenciamento simplificado de provisionamento e configuração",
        "D) Dependência de intervenção manual"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é um dos benefícios do modelo Bring-Your-Own-License (BYOL)?",
      respostas: [
        "A) Necessidade de comprar novas licenças",
        "B) Uso de licenças existentes na nuvem",
        "C) Limitação de flexibilidade",
        "D) Aumento de custos de licenciamento"
      ],
      correta: 1
    },
    {
      pergunta: "O que significa dimensionamento correto (right-sizing) na nuvem AWS?",
      respostas: [
        "A) Provisionar mais recursos do que o necessário",
        "B) Ajustar os recursos para atender às necessidades reais",
        "C) Ignorar a otimização de custos",
        "D) Manter recursos subutilizados"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é um dos benefícios da alta disponibilidade na nuvem AWS?",
      respostas: [
        "A) Tempo de inatividade prolongado",
        "B) Redundância e tolerância a falhas",
        "C) Dependência de um único data center",
        "D) Aumento do risco de falhas"
      ],
      correta: 1
    },
    {
      pergunta: "Qual pilar do AWS Well-Architected Framework se concentra em otimizar o uso de recursos para reduzir custos?",
      respostas: [
        "A) Excelência operacional",
        "B) Segurança",
        "C) Confiabilidade",
        "D) Otimização de custos"
      ],
      correta: 3
    },
    {
      pergunta: "Qual é um dos benefícios da agilidade na nuvem AWS?",
      respostas: [
        "A) Lentidão na implementação de mudanças",
        "B) Capacidade de inovar e experimentar rapidamente",
        "C) Dependência de processos manuais",
        "D) Aumento do tempo de lançamento no mercado"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é um dos benefícios do AWS Cloud Adoption Framework (AWS CAF) para empresas?",
      respostas: [
        "A) Aumento do risco comercial",
        "B) Redução da eficiência operacional",
        "C) Melhoria do desempenho em ESG (ambiental, social e de governança)",
        "D) Diminuição da receita"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é um dos benefícios da infraestrutura global da AWS para empresas?",
      respostas: [
        "A) Limitação geográfica",
        "B) Velocidade de implantação reduzida",
        "C) Alcance global e baixa latência",
        "D) Dependência de data centers locais"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é um dos benefícios da elasticidade na nuvem AWS para empresas?",
      respostas: [
        "A) Manter recursos fixos independentemente da demanda",
        "B) Escalar recursos para cima ou para baixo conforme a necessidade",
        "C) Limitar o crescimento da infraestrutura",
        "D) Aumentar custos operacionais"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é um dos benefícios da automação na nuvem AWS para empresas?",
      respostas: [
        "A) Aumento do tempo de provisionamento",
        "B) Redução da eficiência operacional",
        "C) Gerenciamento simplificado de provisionamento e configuração",
        "D) Dependência de intervenção manual"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é um dos benefícios do modelo Bring-Your-Own-License (BYOL) para empresas?",
      respostas: [
        "A) Necessidade de comprar novas licenças",
        "B) Uso de licenças existentes na nuvem",
        "C) Limitação de flexibilidade",
        "D) Aumento de custos de licenciamento"
      ],
      correta: 1
    },
    {
      pergunta: "O que significa dimensionamento correto (right-sizing) na nuvem AWS para empresas?",
      respostas: [
        "A) Provisionar mais recursos do que o necessário",
        "B) Ajustar os recursos para atender às necessidades reais",
        "C) Ignorar a otimização de custos",
        "D) Manter recursos subutilizados"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é um dos benefícios da alta disponibilidade na nuvem AWS para empresas?",
      respostas: [
        "A) Tempo de inatividade prolongado",
        "B) Redundância e tolerância a falhas",
        "C) Dependência de um único data center",
        "D) Aumento do risco de falhas"
      ],
      correta: 1
    },
    {
      pergunta: "Qual pilar do AWS Well-Architected Framework se concentra em otimizar o uso de recursos para reduzir custos?",
      respostas: [
        "A) Excelência operacional",
        "B) Segurança",
        "C) Confiabilidade",
        "D) Otimização de custos"
      ],
      correta: 3
    },
    {
      pergunta: "Qual é um dos benefícios da agilidade na nuvem AWS para empresas?",
      respostas: [
        "A) Lentidão na implementação de mudanças",
        "B) Capacidade de inovar e experimentar rapidamente",
        "C) Dependência de processos manuais",
        "D) Aumento do tempo de lançamento no mercado"
      ],
      correta: 1
    }
];

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos span")
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

// loop ou laço de repetição 
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector("h3").textContent = item.pergunta

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = resposta
    dt.querySelector("input").setAttribute("name", "perguntas-" + perguntas.indexOf(item))
    dt.querySelector("input").value = item.respostas.indexOf(resposta)
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
     
      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
    }

    quizItem.querySelector("dl").appendChild(dt)
  }

  quizItem.querySelector("dl dt").remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}

