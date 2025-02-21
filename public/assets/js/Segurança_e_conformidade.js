const perguntas = [
  {
    pergunta: "Qual é o conceito central do Modelo de Responsabilidade Compartilhada da AWS?",
    respostas: [
      "A) A AWS é responsável por toda a segurança da nuvem",
      "B) O cliente é responsável por toda a segurança da nuvem",
      "C) A segurança é dividida entre a AWS e o cliente",
      "D) A segurança é de responsabilidade exclusiva de terceiros"
    ],
    correta: 2
  },
  {
    pergunta: "No Modelo de Responsabilidade Compartilhada, qual é uma responsabilidade do cliente?",
    respostas: [
      "A) Manter a segurança física dos data centers",
      "B) Gerenciar a segurança dos dados armazenados na nuvem",
      "C) Atualizar o hardware da infraestrutura da AWS",
      "D) Gerenciar a infraestrutura global da AWS"
    ],
    correta: 1
  },
  {
    pergunta: "No Modelo de Responsabilidade Compartilhada, qual é uma responsabilidade da AWS?",
    respostas: [
      "A) Gerenciar a segurança dos dados do cliente",
      "B) Manter a segurança física dos data centers",
      "C) Configurar firewalls para aplicações do cliente",
      "D) Gerenciar as credenciais de acesso do cliente"
    ],
    correta: 1
  },
  {
    pergunta: "Qual serviço da AWS permite aos clientes gerenciar identidades e permissões de acesso?",
    respostas: [
      "A) AWS IAM",
      "B) Amazon S3",
      "C) AWS CloudTrail",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o princípio de segurança que recomenda conceder apenas as permissões necessárias para realizar uma tarefa?",
    respostas: [
      "A) Princípio do menor privilégio",
      "B) Princípio do acesso universal",
      "C) Princípio da segurança máxima",
      "D) Princípio da responsabilidade compartilhada"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite autenticação multifator (MFA) para aumentar a segurança das contas?",
    respostas: [
      "A) AWS IAM",
      "B) Amazon S3",
      "C) AWS CloudTrail",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é usado para armazenar e gerenciar segredos, como senhas e chaves de API?",
    respostas: [
      "A) AWS Secrets Manager",
      "B) AWS IAM",
      "C) AWS CloudTrail",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite monitorar e auditar chamadas de API feitas em sua conta?",
    respostas: [
      "A) AWS CloudTrail",
      "B) Amazon S3",
      "C) AWS IAM",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS fornece recomendações de segurança para otimizar a configuração de recursos?",
    respostas: [
      "A) AWS Trusted Advisor",
      "B) Amazon Inspector",
      "C) AWS Security Hub",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é usado para detectar ameaças e atividades maliciosas em sua conta?",
    respostas: [
      "A) Amazon GuardDuty",
      "B) AWS IAM",
      "C) AWS CloudTrail",
      "D) Amazon Inspector"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite criptografar dados em repouso e em trânsito?",
    respostas: [
      "A) AWS KMS (Key Management Service)",
      "B) Amazon S3",
      "C) AWS IAM",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é usado para proteger aplicações web contra ataques comuns, como SQL injection?",
    respostas: [
      "A) AWS WAF (Web Application Firewall)",
      "B) AWS Shield",
      "C) Amazon GuardDuty",
      "D) AWS IAM"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS fornece proteção contra ataques DDoS?",
    respostas: [
      "A) AWS Shield",
      "B) AWS WAF",
      "C) Amazon GuardDuty",
      "D) AWS IAM"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS centraliza o gerenciamento de segurança e conformidade?",
    respostas: [
      "A) AWS Security Hub",
      "B) AWS IAM",
      "C) AWS CloudTrail",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite avaliar a conformidade de recursos com políticas internas e regulamentações externas?",
    respostas: [
      "A) AWS Config",
      "B) AWS CloudTrail",
      "C) AWS IAM",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite automatizar auditorias de conformidade?",
    respostas: [
      "A) AWS Audit Manager",
      "B) AWS Config",
      "C) AWS CloudTrail",
      "D) AWS IAM"
    ],
    correta: 0
  },
  {
    pergunta: "Onde os clientes podem encontrar relatórios de conformidade e documentação da AWS?",
    respostas: [
      "A) AWS Artifact",
      "B) AWS Config",
      "C) AWS CloudTrail",
      "D) AWS IAM"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite monitorar o desempenho e a saúde de recursos em tempo real?",
    respostas: [
      "A) Amazon CloudWatch",
      "B) AWS Config",
      "C) AWS CloudTrail",
      "D) AWS IAM"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite criar políticas de segurança personalizadas para usuários e grupos?",
    respostas: [
      "A) AWS IAM",
      "B) AWS Config",
      "C) AWS CloudTrail",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite autenticação única (SSO) para múltiplas contas e aplicações?",
    respostas: [
      "A) AWS IAM Identity Center (AWS Single Sign-On)",
      "B) AWS IAM",
      "C) AWS Config",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite gerenciar grupos de segurança para instâncias EC2?",
    respostas: [
      "A) Amazon VPC",
      "B) AWS IAM",
      "C) AWS Config",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite bloquear tráfego indesejado em nível de rede?",
    respostas: [
      "A) ACLs de rede (Network ACLs)",
      "B) AWS IAM",
      "C) AWS Config",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite inspecionar automaticamente aplicações em busca de vulnerabilidades?",
    respostas: [
      "A) Amazon Inspector",
      "B) AWS Config",
      "C) AWS CloudTrail",
      "D) AWS IAM"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite criptografar dados em trânsito?",
    respostas: [
      "A) AWS Certificate Manager (ACM)",
      "B) AWS KMS",
      "C) AWS IAM",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite gerenciar certificados SSL/TLS?",
    respostas: [
      "A) AWS Certificate Manager (ACM)",
      "B) AWS KMS",
      "C) AWS IAM",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite detectar dados confidenciais usando machine learning?",
    respostas: [
      "A) Amazon Macie",
      "B) AWS Config",
      "C) AWS CloudTrail",
      "D) AWS IAM"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite gerenciar firewalls de rede centralizados?",
    respostas: [
      "A) AWS Network Firewall",
      "B) AWS WAF",
      "C) AWS Shield",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite compartilhar recursos entre contas da AWS de forma segura?",
    respostas: [
      "A) AWS Resource Access Manager (RAM)",
      "B) AWS IAM",
      "C) AWS Config",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite monitorar e analisar logs de segurança?",
    respostas: [
      "A) Amazon CloudWatch Logs",
      "B) AWS Config",
      "C) AWS CloudTrail",
      "D) AWS IAM"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite gerenciar e auditar configurações de recursos?",
    respostas: [
      "A) AWS Config",
      "B) AWS CloudTrail",
      "C) AWS IAM",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite proteger a conta de usuário-raiz com autenticação multifator (MFA)?",
    respostas: [
      "A) AWS IAM",
      "B) AWS Config",
      "C) AWS CloudTrail",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite gerenciar identidades federadas?",
    respostas: [
      "A) AWS IAM Identity Center (AWS Single Sign-On)",
      "B) AWS IAM",
      "C) AWS Config",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite gerenciar e rotacionar credenciais de banco de dados de forma segura?",
    respostas: [
      "A) AWS Secrets Manager",
      "B) AWS IAM",
      "C) AWS CloudTrail",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite criar políticas de segurança baseadas em tags para recursos?",
    respostas: [
      "A) AWS IAM",
      "B) AWS Config",
      "C) AWS CloudTrail",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite monitorar alterações em recursos e avaliar a conformidade com políticas?",
    respostas: [
      "A) AWS Config",
      "B) AWS CloudTrail",
      "C) AWS IAM",
      "D) Amazon GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite detectar atividades anômalas em contas da AWS?",
    respostas: [
      "A) Amazon GuardDuty",
      "B) AWS Config",
      "C) AWS CloudTrail",
      "D) AWS IAM"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite inspecionar automaticamente instâncias EC2 em busca de vulnerabilidades?",
    respostas: [
      "A) Amazon Inspector",
      "B) AWS Config",
      "C) AWS CloudTrail",
      "D) AWS IAM"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite criptografar dados em repouso usando chaves gerenciadas pelo cliente?",
    respostas: [
      "A) AWS KMS (Key Management Service)",
      "B) AWS Secrets Manager",
      "C) AWS IAM",
      "D) Amazon GuardDuty"
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

