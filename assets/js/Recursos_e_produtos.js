const perguntas = [
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
    pergunta: "Qual serviço da AWS facilita a descoberta, assinatura e uso de dados de terceiros na nuvem?",
    respostas: [
      "A) AWS Data Exchange",
      "B) Amazon S3",
      "C) Amazon Kinesis",
      "D) Amazon QuickSight"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é usado para processamento de big data usando frameworks como Hadoop e Spark?",
    respostas: [
      "A) Amazon EMR",
      "B) AWS Glue",
      "C) Amazon Redshift",
      "D) Amazon Athena"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é um ETL (Extract, Transform, Load) totalmente gerenciado?",
    respostas: [
      "A) AWS Glue",
      "B) Amazon EMR",
      "C) Amazon Kinesis",
      "D) Amazon Redshift"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite coletar, processar e analisar dados em tempo real?",
    respostas: [
      "A) Amazon Kinesis",
      "B) Amazon Athena",
      "C) Amazon Redshift",
      "D) AWS Glue"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é uma plataforma gerenciada para Apache Kafka?",
    respostas: [
      "A) Amazon Managed Streaming for Apache Kafka (Amazon MSK)",
      "B) Amazon Kinesis",
      "C) Amazon SQS",
      "D) Amazon SNS"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS oferece um mecanismo de busca e análise de dados em tempo real?",
    respostas: [
      "A) Amazon OpenSearch Service",
      "B) Amazon Athena",
      "C) Amazon Redshift",
      "D) AWS Glue"
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
    pergunta: "Qual serviço da AWS é um data warehouse totalmente gerenciado?",
    respostas: [
      "A) Amazon Redshift",
      "B) Amazon Athena",
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
      "A) Amazon Simple Notification Service (Amazon SNS)",
      "B) Amazon SQS",
      "C) Amazon EventBridge",
      "D) AWS Step Functions"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é uma fila de mensagens altamente escalável?",
    respostas: [
      "A) Amazon Simple Queue Service (Amazon SQS)",
      "B) Amazon SNS",
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
      "A) Amazon Simple Email Service (Amazon SES)",
      "B) Amazon SNS",
      "C) Amazon SQS",
      "D) Amazon Connect"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS ajuda a gerenciar e otimizar custos na nuvem?",
    respostas: [
      "A) AWS Cost Explorer",
      "B) AWS Budgets",
      "C) AWS Billing Conductor",
      "D) AWS Marketplace"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite criar orçamentos e alertas de custo?",
    respostas: [
      "A) AWS Budgets",
      "B) AWS Cost Explorer",
      "C) AWS Billing Conductor",
      "D) AWS Marketplace"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite executar jobs de computação em lote?",
    respostas: [
      "A) AWS Batch",
      "B) Amazon EC2",
      "C) AWS Elastic Beanstalk",
      "D) Amazon Lightsail"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite implantar aplicativos web e móveis de forma fácil?",
    respostas: [
      "A) AWS Elastic Beanstalk",
      "B) Amazon EC2",
      "C) AWS Batch",
      "D) Amazon Lightsail"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS oferece instâncias de computação pré-configuradas?",
    respostas: [
      "A) Amazon Lightsail",
      "B) Amazon EC2",
      "C) AWS Batch",
      "D) AWS Elastic Beanstalk"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite executar workloads em locais específicos com baixa latência?",
    respostas: [
      "A) Zonas Locais da AWS",
      "B) AWS Outposts",
      "C) AWS Wavelength",
      "D) Amazon EC2"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite executar infraestrutura local usando serviços da AWS?",
    respostas: [
      "A) AWS Outposts",
      "B) Zonas Locais da AWS",
      "C) AWS Wavelength",
      "D) Amazon EC2"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite implantar aplicativos em redes 5G?",
    respostas: [
      "A) AWS Wavelength",
      "B) AWS Outposts",
      "C) Zonas Locais da AWS",
      "D) Amazon EC2"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é um registro de contêineres gerenciado?",
    respostas: [
      "A) Amazon Elastic Container Registry (Amazon ECR)",
      "B) Amazon ECS",
      "C) Amazon EKS",
      "D) AWS Fargate"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é um orquestrador de contêineres gerenciado?",
    respostas: [
      "A) Amazon Elastic Container Service (Amazon ECS)",
      "B) Amazon ECR",
      "C) Amazon EKS",
      "D) AWS Fargate"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite executar Kubernetes gerenciado?",
    respostas: [
      "A) Amazon Elastic Kubernetes Service (Amazon EKS)",
      "B) Amazon ECS",
      "C) Amazon ECR",
      "D) AWS Fargate"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS oferece suporte para startups com créditos e treinamento?",
    respostas: [
      "A) AWS Activate para startups",
      "B) AWS IQ",
      "C) AWS Managed Services (AMS)",
      "D) AWS Support"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite contratar especialistas certificados para projetos?",
    respostas: [
      "A) AWS IQ",
      "B) AWS Activate para startups",
      "C) AWS Managed Services (AMS)",
      "D) AWS Support"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS oferece gerenciamento de infraestrutura por especialistas?",
    respostas: [
      "A) AWS Managed Services (AMS)",
      "B) AWS IQ",
      "C) AWS Activate para startups",
      "D) AWS Support"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS oferece suporte técnico para clientes da AWS?",
    respostas: [
      "A) AWS Support",
      "B) AWS Managed Services (AMS)",
      "C) AWS IQ",
      "D) AWS Activate para startups"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é um banco de dados relacional compatível com MySQL e PostgreSQL?",
    respostas: [
      "A) Amazon Aurora",
      "B) Amazon DynamoDB",
      "C) Amazon RDS",
      "D) Amazon Neptune"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é um banco de dados NoSQL totalmente gerenciado?",
    respostas: [
      "A) Amazon DynamoDB",
      "B) Amazon Aurora",
      "C) Amazon RDS",
      "D) Amazon Neptune"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é um banco de dados em memória compatível com Redis?",
    respostas: [
      "A) Amazon MemoryDB para Redis",
      "B) Amazon DynamoDB",
      "C) Amazon Aurora",
      "D) Amazon RDS"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é um banco de dados de grafos totalmente gerenciado?",
    respostas: [
      "A) Amazon Neptune",
      "B) Amazon DynamoDB",
      "C) Amazon Aurora",
      "D) Amazon RDS"
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
    pergunta: "Qual serviço da AWS é uma interface de linha de comando para gerenciar serviços da AWS?",
    respostas: [
      "A) AWS CLI",
      "B) AWS AppConfig",
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
    pergunta: "Qual serviço da AWS permite acessar um shell baseado em navegador para gerenciar recursos da AWS?",
    respostas: [
      "A) AWS CloudShell",
      "B) AWS CLI",
      "C) AWS AppConfig",
      "D) AWS Cloud9"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é um repositório de artefatos de desenvolvimento?",
    respostas: [
      "A) AWS CodeArtifact",
      "B) AWS CodeBuild",
      "C) AWS CodeCommit",
      "D) AWS CodeDeploy"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é um serviço de integração contínua (CI) totalmente gerenciado?",
    respostas: [
      "A) AWS CodeBuild",
      "B) AWS CodeArtifact",
      "C) AWS CodeCommit",
      "D) AWS CodeDeploy"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é um repositório de código gerenciado?",
    respostas: [
      "A) AWS CodeCommit",
      "B) AWS CodeArtifact",
      "C) AWS CodeBuild",
      "D) AWS CodeDeploy"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS automatiza a implantação de aplicativos?",
    respostas: [
      "A) AWS CodeDeploy",
      "B) AWS CodeArtifact",
      "C) AWS CodeBuild",
      "D) AWS CodeCommit"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite criar pipelines de entrega contínua?",
    respostas: [
      "A) AWS CodePipeline",
      "B) AWS CodeStar",
      "C) AWS CodeBuild",
      "D) AWS CodeCommit"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite rastrear e analisar chamadas de aplicativos distribuídos?",
    respostas: [
      "A) AWS X-Ray",
      "B) AWS CodePipeline",
      "C) AWS CodeStar",
      "D) AWS CodeBuild"
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
    pergunta: "Qual serviço da AWS oferece desktops virtuais na nuvem?",
    respostas: [
      "A) Amazon WorkSpaces",
      "B) Amazon AppStream 2.0",
      "C) Amazon WorkSpaces Web",
      "D) AWS Amplify"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite acessar aplicativos web de forma segura?",
    respostas: [
      "A) Amazon WorkSpaces Web",
      "B) Amazon AppStream 2.0",
      "C) Amazon WorkSpaces",
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
    pergunta: "Qual serviço da AWS permite testar aplicativos em dispositivos reais na nuvem?",
    respostas: [
      "A) AWS Device Farm",
      "B) AWS Amplify",
      "C) AWS AppSync",
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
    pergunta: "Qual serviço da AWS permite executar computação local em dispositivos IoT?",
    respostas: [
      "A) AWS IoT Greengrass",
      "B) AWS IoT Core",
      "C) AWS Amplify",
      "D) AWS AppSync"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS usa machine learning para análise de texto?",
    respostas: [
      "A) Amazon Comprehend",
      "B) Amazon Kendra",
      "C) Amazon Lex",
      "D) Amazon Polly"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é um mecanismo de busca inteligente?",
    respostas: [
      "A) Amazon Kendra",
      "B) Amazon Comprehend",
      "C) Amazon Lex",
      "D) Amazon Polly"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite converter texto em fala de forma realista?",
    respostas: [
      "A) Amazon Polly",
      "B) Amazon Comprehend",
      "C) Amazon Lex",
      "D) Amazon Kendra"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS usa machine learning para análise de imagens e vídeos?",
    respostas: [
      "A) Amazon Rekognition",
      "B) Amazon Textract",
      "C) Amazon Transcribe",
      "D) Amazon Translate"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite criar, treinar e implantar modelos de machine learning?",
    respostas: [
      "A) Amazon SageMaker",
      "B) Amazon Rekognition",
      "C) Amazon Textract",
      "D) Amazon Transcribe"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS extrai texto e dados de documentos?",
    respostas: [
      "A) Amazon Textract",
      "B) Amazon Rekognition",
      "C) Amazon Transcribe",
      "D) Amazon Translate"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS converte fala em texto?",
    respostas: [
      "A) Amazon Transcribe",
      "B) Amazon Textract",
      "C) Amazon Rekognition",
      "D) Amazon Translate"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS traduz texto entre idiomas?",
    respostas: [
      "A) Amazon Translate",
      "B) Amazon Transcribe",
      "C) Amazon Textract",
      "D) Amazon Rekognition"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite ajustar automaticamente a capacidade de recursos para atender à demanda?",
    respostas: [
      "A) AWS Auto Scaling",
      "B) AWS CloudFormation",
      "C) Amazon CloudWatch",
      "D) AWS Compute Optimizer"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite modelar e provisionar recursos da AWS usando código?",
    respostas: [
      "A) AWS CloudFormation",
      "B) AWS Auto Scaling",
      "C) Amazon CloudWatch",
      "D) AWS Compute Optimizer"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS monitora recursos e aplicativos em tempo real?",
    respostas: [
      "A) Amazon CloudWatch",
      "B) AWS CloudFormation",
      "C) AWS Auto Scaling",
      "D) AWS Compute Optimizer"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS fornece recomendações para otimizar o desempenho e o custo de instâncias EC2?",
    respostas: [
      "A) AWS Compute Optimizer",
      "B) AWS Auto Scaling",
      "C) AWS CloudFormation",
      "D) Amazon CloudWatch"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS permite gerenciar licenças de software na nuvem?",
    respostas: [
      "A) AWS License Manager",
      "B) AWS Service Catalog",
      "C) AWS Systems Manager",
      "D) AWS Trusted Advisor"
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

