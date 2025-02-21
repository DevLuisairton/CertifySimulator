const perguntas = [
  {
    pergunta: "Qual é um método comum de acessar e gerenciar serviços da AWS?",
    respostas: [
      "A) Console de Gerenciamento da AWS",
      "B) Acesso apenas por APIs",
      "C) Acesso apenas por CLI",
      "D) Acesso apenas por SDKs"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é um exemplo de infraestrutura como código (IaC) na AWS?",
    respostas: [
      "A) AWS CloudFormation",
      "B) AWS CLI",
      "C) AWS SDK",
      "D) AWS Management Console"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é um modelo de implantação na nuvem que combina infraestrutura local e na nuvem?",
    respostas: [
      "A) Nuvem híbrida",
      "B) Nuvem pública",
      "C) Nuvem privada",
      "D) Nuvem comunitária"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite conectar uma rede local à nuvem AWS de forma segura?",
    respostas: [
      "A) AWS VPN",
      "B) Amazon S3",
      "C) AWS Lambda",
      "D) Amazon EC2"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o componente básico da infraestrutura global da AWS que consiste em um conjunto de data centers em uma área geográfica?",
    respostas: [
      "A) Região AWS",
      "B) Zona de Disponibilidade",
      "C) Local de borda",
      "D) AWS Wavelength"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o benefício de usar múltiplas Zonas de Disponibilidade (AZs)?",
    respostas: [
      "A) Redundância e alta disponibilidade",
      "B) Redução de custos",
      "C) Diminuição da latência global",
      "D) Aumento da capacidade de armazenamento"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é usado para distribuir conteúdo globalmente com baixa latência?",
    respostas: [
      "A) Amazon CloudFront",
      "B) Amazon S3",
      "C) AWS Lambda",
      "D) Amazon EC2"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite executar aplicações em contêineres sem gerenciar servidores?",
    respostas: [
      "A) AWS Fargate",
      "B) Amazon ECS",
      "C) Amazon EKS",
      "D) AWS Lambda"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é um banco de dados relacional gerenciado?",
    respostas: [
      "A) Amazon RDS",
      "B) Amazon DynamoDB",
      "C) Amazon Redshift",
      "D) Amazon Aurora"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é um banco de dados NoSQL totalmente gerenciado?",
    respostas: [
      "A) Amazon DynamoDB",
      "B) Amazon RDS",
      "C) Amazon Redshift",
      "D) Amazon Aurora"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite migrar bancos de dados para a nuvem com mínimo tempo de inatividade?",
    respostas: [
      "A) AWS Database Migration Service (DMS)",
      "B) AWS Schema Conversion Tool (SCT)",
      "C) Amazon RDS",
      "D) Amazon Aurora"
    ],
    correta: 0
  },
  {
    pergunta: "Qual componente de uma VPC permite a comunicação entre sub-redes?",
    respostas: [
      "A) Gateway de Internet",
      "B) Tabela de rotas",
      "C) Grupo de segurança",
      "D) ACL de rede"
    ],
    correta: 1
  },
  {
    pergunta: "Qual serviço da AWS é usado para rotear tráfego de domínios para recursos da AWS?",
    respostas: [
      "A) Amazon Route 53",
      "B) Amazon CloudFront",
      "C) AWS Global Accelerator",
      "D) AWS Direct Connect"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é usado para armazenar objetos de forma durável e escalável?",
    respostas: [
      "A) Amazon S3",
      "B) Amazon EBS",
      "C) Amazon EFS",
      "D) Amazon FSx"
    ],
    correta: 0
  },
  {
    pergunta: "Qual storage class do Amazon S3 é projetada para dados acessados com pouca frequência?",
    respostas: [
      "A) S3 Standard-IA",
      "B) S3 Intelligent-Tiering",
      "C) S3 Glacier",
      "D) S3 One Zone-IA"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite criar backups automatizados de recursos?",
    respostas: [
      "A) AWS Backup",
      "B) Amazon S3",
      "C) Amazon EBS",
      "D) Amazon EFS"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é usado para criar, treinar e implantar modelos de machine learning?",
    respostas: [
      "A) Amazon SageMaker",
      "B) Amazon Rekognition",
      "C) Amazon Comprehend",
      "D) Amazon Lex"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite consultar dados diretamente no Amazon S3 usando SQL?",
    respostas: [
      "A) Amazon Athena",
      "B) Amazon Redshift",
      "C) AWS Glue",
      "D) Amazon EMR"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite orquestrar workflows de aplicativos distribuídos?",
    respostas: [
      "A) AWS Step Functions",
      "B) Amazon EventBridge",
      "C) Amazon SQS",
      "D) Amazon SNS"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é usado para enviar notificações push para aplicativos móveis?",
    respostas: [
      "A) Amazon Simple Notification Service (SNS)",
      "B) Amazon SQS",
      "C) Amazon EventBridge",
      "D) AWS Step Functions"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é um centro de contato na nuvem?",
    respostas: [
      "A) Amazon Connect",
      "B) Amazon SES",
      "C) Amazon SNS",
      "D) Amazon SQS"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite enviar e-mails em grande escala?",
    respostas: [
      "A) Amazon Simple Email Service (SES)",
      "B) Amazon SNS",
      "C) Amazon SQS",
      "D) Amazon Connect"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite gerenciar configurações de aplicativos?",
    respostas: [
      "A) AWS AppConfig",
      "B) AWS CLI",
      "C) AWS Cloud9",
      "D) AWS CloudShell"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é um ambiente de desenvolvimento integrado (IDE) baseado em nuvem?",
    respostas: [
      "A) AWS Cloud9",
      "B) AWS CLI",
      "C) AWS AppConfig",
      "D) AWS CloudShell"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite transmitir aplicativos para dispositivos de usuários finais?",
    respostas: [
      "A) Amazon AppStream 2.0",
      "B) Amazon WorkSpaces",
      "C) Amazon WorkSpaces Web",
      "D) AWS Amplify"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS facilita o desenvolvimento de aplicativos web e móveis?",
    respostas: [
      "A) AWS Amplify",
      "B) AWS AppSync",
      "C) AWS Device Farm",
      "D) Amazon WorkSpaces"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite criar APIs GraphQL escaláveis?",
    respostas: [
      "A) AWS AppSync",
      "B) AWS Amplify",
      "C) AWS Device Farm",
      "D) Amazon WorkSpaces"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite conectar dispositivos IoT à nuvem?",
    respostas: [
      "A) AWS IoT Core",
      "B) AWS IoT Greengrass",
      "C) AWS Amplify",
      "D) AWS AppSync"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite executar código sem provisionar ou gerenciar servidores?",
    respostas: [
      "A) AWS Lambda",
      "B) Amazon EC2",
      "C) AWS Fargate",
      "D) Amazon ECS"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é usado para balancear o tráfego entre várias instâncias EC2?",
    respostas: [
      "A) Elastic Load Balancing (ELB)",
      "B) Amazon Route 53",
      "C) AWS Global Accelerator",
      "D) Amazon CloudFront"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite armazenar dados em um sistema de arquivos compartilhado?",
    respostas: [
      "A) Amazon Elastic File System (EFS)",
      "B) Amazon S3",
      "C) Amazon EBS",
      "D) AWS Storage Gateway"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é usado para armazenar dados em blocos para instâncias EC2?",
    respostas: [
      "A) Amazon Elastic Block Store (EBS)",
      "B) Amazon S3",
      "C) Amazon EFS",
      "D) AWS Storage Gateway"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite armazenar dados em um sistema de arquivos compatível com Windows?",
    respostas: [
      "A) Amazon FSx",
      "B) Amazon EFS",
      "C) Amazon S3",
      "D) Amazon EBS"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite armazenar dados em cache para acesso rápido?",
    respostas: [
      "A) AWS Storage Gateway",
      "B) Amazon S3",
      "C) Amazon EFS",
      "D) Amazon EBS"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite analisar dados em tempo real?",
    respostas: [
      "A) Amazon Kinesis",
      "B) Amazon Athena",
      "C) AWS Glue",
      "D) Amazon Redshift"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite consultar dados diretamente no Amazon S3 usando SQL?",
    respostas: [
      "A) Amazon Athena",
      "B) Amazon Redshift",
      "C) AWS Glue",
      "D) Amazon EMR"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite criar pipelines de ETL (Extract, Transform, Load)?",
    respostas: [
      "A) AWS Glue",
      "B) Amazon Athena",
      "C) Amazon Redshift",
      "D) Amazon EMR"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite criar dashboards e visualizações de dados?",
    respostas: [
      "A) Amazon QuickSight",
      "B) AWS Glue",
      "C) Amazon Athena",
      "D) Amazon Redshift"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite criar chatbots conversacionais?",
    respostas: [
      "A) Amazon Lex",
      "B) Amazon Comprehend",
      "C) Amazon Polly",
      "D) Amazon Transcribe"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite converter texto em fala de forma realista?",
    respostas: [
      "A) Amazon Polly",
      "B) Amazon Comprehend",
      "C) Amazon Lex",
      "D) Amazon Transcribe"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite extrair texto e dados de documentos?",
    respostas: [
      "A) Amazon Textract",
      "B) Amazon Rekognition",
      "C) Amazon Transcribe",
      "D) Amazon Translate"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite traduzir texto entre idiomas?",
    respostas: [
      "A) Amazon Translate",
      "B) Amazon Transcribe",
      "C) Amazon Textract",
      "D) Amazon Rekognition"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite detectar objetos, pessoas e textos em imagens e vídeos?",
    respostas: [
      "A) Amazon Rekognition",
      "B) Amazon Textract",
      "C) Amazon Transcribe",
      "D) Amazon Translate"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite criar filas de mensagens para aplicações distribuídas?",
    respostas: [
      "A) Amazon Simple Queue Service (SQS)",
      "B) Amazon Simple Notification Service (SNS)",
      "C) Amazon EventBridge",
      "D) AWS Step Functions"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite criar workflows visuais para orquestrar serviços?",
    respostas: [
      "A) AWS Step Functions",
      "B) Amazon EventBridge",
      "C) Amazon SQS",
      "D) Amazon SNS"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite gerenciar dispositivos IoT e coletar dados deles?",
    respostas: [
      "A) AWS IoT Core",
      "B) AWS IoT Greengrass",
      "C) AWS Amplify",
      "D) AWS AppSync"
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

