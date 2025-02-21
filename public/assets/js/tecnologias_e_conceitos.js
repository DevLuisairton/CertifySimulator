const perguntas = [
  {
    pergunta: "Qual dos seguintes serviços da AWS permite criar, publicar, manter, monitorar e proteger APIs em qualquer escala?",
    respostas: [
      "A) Amazon API Gateway",
      "B) AWS Lambda",
      "C) Amazon S3",
      "D) Amazon EC2"
    ],
    correta: 0
  },
  {
    pergunta: "Qual dos seguintes é um benefício da migração para a nuvem AWS?",
    respostas: [
      "A) Custos fixos e previsíveis",
      "B) Menor flexibilidade",
      "C) Escalabilidade limitada",
      "D) Despesas de capital reduzidas"
    ],
    correta: 3
  },
  {
    pergunta: "Qual pilar do AWS Cloud Adoption Framework (AWS CAF) se concentra em garantir que os recursos de TI atendam aos requisitos de negócios?",
    respostas: [
      "A) Pilar de Negócios",
      "B) Pilar de Governança",
      "C) Pilar de Plataforma",
      "D) Pilar de Operações"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS ajuda os clientes a entender a conformidade de seus recursos com políticas internas e regulamentações externas?",
    respostas: [
      "A) AWS Config",
      "B) AWS Trusted Advisor",
      "C) AWS CloudTrail",
      "D) AWS Shield"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite executar código sem provisionar ou gerenciar servidores?",
    respostas: [
      "A) Amazon EC2",
      "B) AWS Lambda",
      "C) Amazon RDS",
      "D) Amazon ECS"
    ],
    correta: 1
  },
  {
    pergunta: "Qual ferramenta da AWS permite estimar o custo de uso de serviços da AWS antes de implantá-los?",
    respostas: [
      "A) AWS Budgets",
      "B) AWS Cost Explorer",
      "C) AWS Pricing Calculator",
      "D) AWS Trusted Advisor"
    ],
    correta: 2
  },
  {
    pergunta: "Qual serviço da AWS é um banco de dados relacional totalmente gerenciado?",
    respostas: [
      "A) Amazon DynamoDB",
      "B) Amazon RDS",
      "C) Amazon Redshift",
      "D) Amazon Neptune"
    ],
    correta: 1
  },
  {
    pergunta: "Qual tipo de instância do Amazon EC2 é mais adequado para cargas de trabalho que podem ser interrompidas sem aviso prévio?",
    respostas: [
      "A) Instâncias sob demanda",
      "B) Instâncias reservadas",
      "C) Instâncias spot",
      "D) Instâncias dedicadas"
    ],
    correta: 2
  },
  {
    pergunta: "Quantas Zonas de Disponibilidade uma Região AWS deve ter, no mínimo?",
    respostas: [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    correta: 1
  },
  {
    pergunta: "Qual serviço da AWS permite definir e provisionar infraestrutura usando código?",
    respostas: [
      "A) AWS CloudFormation",
      "B) AWS CodeDeploy",
      "C) AWS OpsWorks",
      "D) AWS Systems Manager"
    ],
    correta: 0
  },
  {
    pergunta: "Onde os usuários podem encontrar respostas para perguntas frequentes sobre serviços da AWS?",
    respostas: [
      "A) AWS re:Post",
      "B) AWS Knowledge Center",
      "C) AWS Support Center",
      "D) AWS Forums"
    ],
    correta: 1
  },
  {
    pergunta: "Qual serviço da AWS permite criar modelos de machine learning sem necessidade de experiência prévia em ML?",
    respostas: [
      "A) Amazon SageMaker",
      "B) Amazon Comprehend",
      "C) Amazon Rekognition",
      "D) Amazon Polly"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS fornece recomendações para otimizar custos, desempenho e segurança?",
    respostas: [
      "A) AWS Trusted Advisor",
      "B) AWS CloudTrail",
      "C) AWS Config",
      "D) AWS Systems Manager"
    ],
    correta: 0
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
    pergunta: "Qual serviço da AWS permite criar uma rede privada virtual (VPC) na nuvem?",
    respostas: [
      "A) Amazon VPC",
      "B) AWS Direct Connect",
      "C) Amazon Route 53",
      "D) AWS Global Accelerator"
    ],
    correta: 0
  },
  {
    pergunta: "Qual programa da AWS ajuda os clientes a encontrar parceiros certificados para implementar soluções na nuvem?",
    respostas: [
      "A) AWS Partner Network (APN)",
      "B) AWS Marketplace",
      "C) AWS Professional Services",
      "D) AWS Solutions Architects"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS fornece recomendações personalizadas para melhorar a eficiência operacional?",
    respostas: [
      "A) AWS Trusted Advisor",
      "B) AWS Cost Explorer",
      "C) AWS Well-Architected Tool",
      "D) AWS Personal Health Dashboard"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o principal objetivo do AWS Pricing Calculator?",
    respostas: [
      "A) Monitorar custos em tempo real",
      "B) Estimar custos de serviços da AWS",
      "C) Alertar sobre custos excessivos",
      "D) Otimizar o uso de recursos"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o papel da AWS Professional Services?",
    respostas: [
      "A) Fornecer suporte técnico básico",
      "B) Ajudar empresas a implementar soluções na nuvem",
      "C) Gerenciar infraestrutura de clientes",
      "D) Oferecer treinamentos gratuitos"
    ],
    correta: 1
  },
  {
    pergunta: "O que é o AWS re:Post?",
    respostas: [
      "A) Um fórum de discussão da comunidade AWS",
      "B) Um serviço de migração de dados",
      "C) Uma ferramenta de monitoramento de custos",
      "D) Um banco de dados gerenciado"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a principal função dos SDKs da AWS?",
    respostas: [
      "A) Facilitar a integração de serviços AWS em aplicações",
      "B) Monitorar o desempenho de instâncias EC2",
      "C) Gerenciar permissões de usuários",
      "D) Fornecer suporte técnico"
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
    pergunta: "Onde os usuários podem encontrar atualizações e melhores práticas sobre segurança na AWS?",
    respostas: [
      "A) AWS Security Blog",
      "B) AWS Knowledge Center",
      "C) AWS re:Post",
      "D) AWS Support Center"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS centraliza o gerenciamento de segurança e conformidade?",
    respostas: [
      "A) AWS Security Hub",
      "B) AWS IAM",
      "C) AWS CloudTrail",
      "D) AWS Config"
    ],
    correta: 0
  },
  {
    pergunta: "No modelo de responsabilidade compartilhada, qual é a responsabilidade do cliente?",
    respostas: [
      "A) Gerenciar a segurança da nuvem",
      "B) Gerenciar a segurança na nuvem",
      "C) Manter a infraestrutura física",
      "D) Atualizar o hardware dos data centers"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o papel de um Solutions Architect da AWS?",
    respostas: [
      "A) Projetar arquiteturas escaláveis e seguras na nuvem",
      "B) Fornecer suporte técnico básico",
      "C) Gerenciar instâncias EC2",
      "D) Monitorar custos de serviços"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS oferece armazenamento de objetos altamente durável e escalável?",
    respostas: [
      "A) Amazon S3",
      "B) Amazon EBS",
      "C) Amazon Glacier",
      "D) Amazon RDS"
    ],
    correta: 0
  },
  {
    pergunta: "Onde os clientes podem abrir tickets de suporte e gerenciar solicitações de ajuda?",
    respostas: [
      "A) AWS Support Center",
      "B) AWS re:Post",
      "C) AWS Knowledge Center",
      "D) AWS Forums"
    ],
    correta: 0
  },
  {
    pergunta: "Qual plano de suporte da AWS oferece suporte técnico 24/7 com tempo de resposta de menos de 1 hora?",
    respostas: [
      "A) Basic",
      "B) Developer",
      "C) Business",
      "D) Enterprise"
    ],
    correta: 3
  },
  {
    pergunta: "Qual pilar do AWS Well-Architected Framework se concentra em proteger informações e sistemas?",
    respostas: [
      "A) Segurança",
      "B) Confiabilidade",
      "C) Eficiência de desempenho",
      "D) Otimização de custos"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS melhora a disponibilidade e o desempenho de aplicativos usando endpoints globais?",
    respostas: [
      "A) AWS Global Accelerator",
      "B) Amazon CloudFront",
      "C) AWS Direct Connect",
      "D) AWS Transit Gateway"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite gerenciar múltiplas contas da AWS de forma centralizada?",
    respostas: [
      "A) AWS Organizations",
      "B) AWS Control Tower",
      "C) AWS Systems Manager",
      "D) AWS IAM"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS registra chamadas de API feitas em sua conta para auditoria e conformidade?",
    respostas: [
      "A) AWS CloudTrail",
      "B) AWS Config",
      "C) AWS CloudWatch",
      "D) AWS X-Ray"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS gerencia permissões de usuários e recursos de forma segura?",
    respostas: [
      "A) AWS IAM",
      "B) AWS Secrets Manager",
      "C) AWS KMS",
      "D) AWS Certificate Manager"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS facilita a implantação e o gerenciamento de aplicativos em contêineres?",
    respostas: [
      "A) AWS Elastic Beanstalk",
      "B) AWS Fargate",
      "C) Amazon ECS",
      "D) AWS Lambda"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite executar contêineres sem gerenciar servidores ou clusters?",
    respostas: [
      "A) AWS Fargate",
      "B) Amazon EKS",
      "C) AWS Batch",
      "D) AWS Elastic Beanstalk"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite executar infraestrutura local usando os mesmos serviços da AWS?",
    respostas: [
      "A) AWS Outposts",
      "B) AWS Snowball",
      "C) AWS Direct Connect",
      "D) AWS Wavelength"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS automatiza o backup de dados em serviços como Amazon EC2 e Amazon RDS?",
    respostas: [
      "A) AWS Backup",
      "B) AWS Snapshots",
      "C) AWS Storage Gateway",
      "D) AWS DataSync"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS fornece acesso sob demanda a relatórios de conformidade e documentação?",
    respostas: [
      "A) AWS Artifact",
      "B) AWS Config",
      "C) AWS Trusted Advisor",
      "D) AWS Security Hub"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS ajuda a configurar e governar um ambiente de nuvem de forma automatizada?",
    respostas: [
      "A) AWS Control Tower",
      "B) AWS Organizations",
      "C) AWS Systems Manager",
      "D) AWS CloudFormation"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite gerenciar recursos em escala e automatizar tarefas operacionais?",
    respostas: [
      "A) AWS Systems Manager",
      "B) AWS OpsWorks",
      "C) AWS Step Functions",
      "D) AWS Batch"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite orquestrar funções e serviços em workflows visuais?",
    respostas: [
      "A) AWS Step Functions",
      "B) AWS Data Pipeline",
      "C) AWS Glue",
      "D) AWS X-Ray"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS rastreia e analisa chamadas de aplicativos distribuídos?",
    respostas: [
      "A) AWS X-Ray",
      "B) AWS CloudTrail",
      "C) AWS CloudWatch",
      "D) AWS Config"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS monitora recursos e aplicativos em tempo real?",
    respostas: [
      "A) AWS CloudWatch",
      "B) AWS X-Ray",
      "C) AWS CloudTrail",
      "D) AWS Config"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS distribui o tráfego de entrada entre várias instâncias EC2?",
    respostas: [
      "A) AWS Elastic Load Balancing (ELB)",
      "B) AWS Global Accelerator",
      "C) AWS Transit Gateway",
      "D) AWS Direct Connect"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS conecta redes virtuais (VPCs) e redes locais em uma única interface?",
    respostas: [
      "A) AWS Transit Gateway",
      "B) AWS Direct Connect",
      "C) AWS PrivateLink",
      "D) AWS VPN"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS fornece uma conexão dedicada entre a rede local e a AWS?",
    respostas: [
      "A) AWS Direct Connect",
      "B) AWS VPN",
      "C) AWS PrivateLink",
      "D) AWS Global Accelerator"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite acessar serviços AWS de forma privada sem usar a internet pública?",
    respostas: [
      "A) AWS PrivateLink",
      "B) AWS Direct Connect",
      "C) AWS VPN",
      "D) AWS Transit Gateway"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS protege aplicativos web contra ataques comuns, como SQL injection?",
    respostas: [
      "A) AWS WAF (Web Application Firewall)",
      "B) AWS Shield",
      "C) AWS Firewall Manager",
      "D) AWS GuardDuty"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS gerencia chaves de criptografia usadas para proteger dados?",
    respostas: [
      "A) AWS KMS (Key Management Service)",
      "B) AWS Secrets Manager",
      "C) AWS Certificate Manager",
      "D) AWS IAM"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS armazena e gerencia segredos, como senhas e chaves de API?",
    respostas: [
      "A) AWS Secrets Manager",
      "B) AWS KMS",
      "C) AWS Certificate Manager",
      "D) AWS IAM"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS emite e gerencia certificados SSL/TLS?",
    respostas: [
      "A) AWS Certificate Manager",
      "B) AWS KMS",
      "C) AWS Secrets Manager",
      "D) AWS IAM"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS avalia automaticamente a segurança de recursos implantados?",
    respostas: [
      "A) AWS Inspector",
      "B) AWS Config",
      "C) AWS Trusted Advisor",
      "D) AWS Security Hub"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS usa machine learning para descobrir e proteger dados confidenciais?",
    respostas: [
      "A) AWS Macie",
      "B) AWS GuardDuty",
      "C) AWS Inspector",
      "D) AWS Security Hub"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite gerenciar o acesso centralizado a múltiplas contas da AWS?",
    respostas: [
      "A) AWS Single Sign-On (SSO)",
      "B) AWS IAM",
      "C) AWS Organizations",
      "D) AWS Control Tower"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS orquestra a movimentação de dados entre diferentes serviços?",
    respostas: [
      "A) AWS Data Pipeline",
      "B) AWS Glue",
      "C) AWS Step Functions",
      "D) AWS Batch"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é um ETL (Extract, Transform, Load) totalmente gerenciado?",
    respostas: [
      "A) AWS Glue",
      "B) AWS Data Pipeline",
      "C) AWS Lake Formation",
      "D) AWS QuickSight"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS ajuda a criar e gerenciar data lakes de forma segura?",
    respostas: [
      "A) AWS Lake Formation",
      "B) AWS Glue",
      "C) AWS Data Pipeline",
      "D) AWS QuickSight"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite criar dashboards e visualizações de dados?",
    respostas: [
      "A) AWS QuickSight",
      "B) AWS Glue",
      "C) AWS Data Pipeline",
      "D) AWS Lake Formation"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite conectar dispositivos IoT à nuvem?",
    respostas: [
      "A) AWS IoT Core",
      "B) AWS Ground Station",
      "C) AWS Elemental MediaConvert",
      "D) AWS Amplify"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite controlar satélites e processar dados de satélite?",
    respostas: [
      "A) AWS Ground Station",
      "B) AWS IoT Core",
      "C) AWS Elemental MediaConvert",
      "D) AWS Amplify"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS converte arquivos de mídia para diferentes formatos?",
    respostas: [
      "A) AWS Elemental MediaConvert",
      "B) AWS Ground Station",
      "C) AWS IoT Core",
      "D) AWS Amplify"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS facilita o desenvolvimento de aplicativos web e móveis?",
    respostas: [
      "A) AWS Amplify",
      "B) AWS AppSync",
      "C) AWS Lambda",
      "D) AWS Elastic Beanstalk"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite criar APIs GraphQL escaláveis?",
    respostas: [
      "A) AWS AppSync",
      "B) AWS Amplify",
      "C) AWS API Gateway",
      "D) AWS Lambda"
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

