const originalQuestions = [
  {
    id: 1,
    text: "Qual é um método comum de acessar e gerenciar serviços da AWS?",
    options: [
      "Console de Gerenciamento da AWS",
      "Acesso apenas por APIs",
      "Acesso apenas por CLI",
      "Acesso apenas por SDKs"
    ],
    correctAnswer: 0,
    explanation: "O Console de Gerenciamento da AWS é uma interface gráfica que permite acessar e gerenciar serviços da AWS de forma fácil e intuitiva."
  },
  {
    id: 2,
    text: "Qual é um exemplo de infraestrutura como código (IaC) na AWS?",
    options: [
      "AWS CloudFormation",
      "AWS CLI",
      "AWS SDK",
      "AWS Management Console"
    ],
    correctAnswer: 0,
    explanation: "O AWS CloudFormation permite definir e provisionar infraestrutura como código, automatizando a criação e gerenciamento de recursos na AWS."
  },
  {
    id: 3,
    text: "Qual é um modelo de implantação na nuvem que combina infraestrutura local e na nuvem?",
    options: [
      "Nuvem híbrida",
      "Nuvem pública",
      "Nuvem privada",
      "Nuvem comunitária"
    ],
    correctAnswer: 0,
    explanation: "A nuvem híbrida combina infraestrutura local com serviços de nuvem pública, permitindo maior flexibilidade e integração entre ambientes."
  },
  {
    id: 4,
    text: "Qual serviço da AWS permite conectar uma rede local à nuvem AWS de forma segura?",
    options: [
      "AWS VPN",
      "Amazon S3",
      "AWS Lambda",
      "Amazon EC2"
    ],
    correctAnswer: 0,
    explanation: "O AWS VPN permite criar uma conexão segura entre uma rede local e a nuvem AWS, garantindo comunicação criptografada."
  },
  {
    id: 5,
    text: "Qual é o componente básico da infraestrutura global da AWS que consiste em um conjunto de data centers em uma área geográfica?",
    options: [
      "Região AWS",
      "Zona de Disponibilidade",
      "Local de borda",
      "AWS Wavelength"
    ],
    correctAnswer: 0,
    explanation: "Uma Região AWS é uma área geográfica que contém múltiplos data centers interconectados, projetados para alta disponibilidade e resiliência."
  },
  {
    id: 6,
    text: "Qual é o benefício de usar múltiplas Zonas de Disponibilidade (AZs)?",
    options: [
      "Redundância e alta disponibilidade",
      "Redução de custos",
      "Diminuição da latência global",
      "Aumento da capacidade de armazenamento"
    ],
    correctAnswer: 0,
    explanation: "Usar múltiplas Zonas de Disponibilidade aumenta a redundância e a disponibilidade, garantindo que as aplicações continuem funcionando mesmo em caso de falha em uma única zona."
  },
  {
    id: 7,
    text: "Qual serviço da AWS é usado para distribuir conteúdo globalmente com baixa latência?",
    options: [
      "Amazon CloudFront",
      "Amazon S3",
      "AWS Lambda",
      "Amazon EC2"
    ],
    correctAnswer: 0,
    explanation: "O Amazon CloudFront é uma rede de entrega de conteúdo (CDN) que distribui conteúdo globalmente com baixa latência e altas velocidades de transferência."
  },
  {
    id: 8,
    text: "Qual serviço da AWS permite executar aplicações em contêineres sem gerenciar servidores?",
    options: [
      "AWS Fargate",
      "Amazon ECS",
      "Amazon EKS",
      "AWS Lambda"
    ],
    correctAnswer: 0,
    explanation: "O AWS Fargate permite executar contêineres sem a necessidade de gerenciar servidores, simplificando a operação de aplicações baseadas em contêineres."
  },
  {
    id: 9,
    text: "Qual serviço da AWS é um banco de dados relacional gerenciado?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Aurora"
    ],
    correctAnswer: 0,
    explanation: "O Amazon RDS é um serviço gerenciado que facilita a configuração, operação e escalabilidade de bancos de dados relacionais, como MySQL, PostgreSQL e Oracle."
  },
  {
    id: 10,
    text: "Qual serviço da AWS é um banco de dados NoSQL totalmente gerenciado?",
    options: [
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon Aurora"
    ],
    correctAnswer: 0,
    explanation: "O Amazon DynamoDB é um banco de dados NoSQL totalmente gerenciado que oferece desempenho rápido e consistente com escalabilidade automática."
  },
  {
    id: 11,
    text: "Qual serviço da AWS permite migrar bancos de dados para a nuvem com mínimo tempo de inatividade?",
    options: [
      "AWS Database Migration Service (DMS)",
      "AWS Schema Conversion Tool (SCT)",
      "Amazon RDS",
      "Amazon Aurora"
    ],
    correctAnswer: 0,
    explanation: "O AWS DMS permite migrar bancos de dados para a nuvem com mínimo tempo de inatividade, garantindo continuidade das operações durante a migração."
  },
  {
    id: 12,
    text: "Qual componente de uma VPC permite a comunicação entre sub-redes?",
    options: [
      "Gateway de Internet",
      "Tabela de rotas",
      "Grupo de segurança",
      "ACL de rede"
    ],
    correctAnswer: 1,
    explanation: "A tabela de rotas define como o tráfego é direcionado entre sub-redes em uma VPC, permitindo a comunicação entre elas."
  },
  {
    id: 13,
    text: "Qual serviço da AWS é usado para rotear tráfego de domínios para recursos da AWS?",
    options: [
      "Amazon Route 53",
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "AWS Direct Connect"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Route 53 é um serviço de DNS que permite rotear tráfego de domínios para recursos da AWS, como instâncias EC2 ou balanceadores de carga."
  },
  {
    id: 14,
    text: "Qual serviço da AWS é usado para armazenar objetos de forma durável e escalável?",
    options: [
      "Amazon S3",
      "Amazon EBS",
      "Amazon EFS",
      "Amazon FSx"
    ],
    correctAnswer: 0,
    explanation: "O Amazon S3 é um serviço de armazenamento de objetos que oferece durabilidade, escalabilidade e alta disponibilidade para armazenar e recuperar dados."
  },
  {
    id: 15,
    text: "Qual storage class do Amazon S3 é projetada para dados acessados com pouca frequência?",
    options: [
      "S3 Standard-IA",
      "S3 Intelligent-Tiering",
      "S3 Glacier",
      "S3 One Zone-IA"
    ],
    correctAnswer: 0,
    explanation: "O S3 Standard-IA (Infrequent Access) é projetado para dados acessados com pouca frequência, oferecendo custos mais baixos em comparação com o S3 Standard."
  },
  {
    id: 16,
    text: "Qual serviço da AWS permite criar backups automatizados de recursos?",
    options: [
      "AWS Backup",
      "Amazon S3",
      "Amazon EBS",
      "Amazon EFS"
    ],
    correctAnswer: 0,
    explanation: "O AWS Backup permite criar backups automatizados e gerenciados de recursos da AWS, como instâncias EC2, bancos de dados RDS e volumes EBS."
  },
  {
    id: 17,
    text: "Qual serviço da AWS é usado para criar, treinar e implantar modelos de machine learning?",
    options: [
      "Amazon SageMaker",
      "Amazon Rekognition",
      "Amazon Comprehend",
      "Amazon Lex"
    ],
    correctAnswer: 0,
    explanation: "O Amazon SageMaker é um serviço completo para criar, treinar e implantar modelos de machine learning de forma rápida e escalável."
  },
  {
    id: 18,
    text: "Qual serviço da AWS permite consultar dados diretamente no Amazon S3 usando SQL?",
    options: [
      "Amazon Athena",
      "Amazon Redshift",
      "AWS Glue",
      "Amazon EMR"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Athena permite consultar dados diretamente no Amazon S3 usando SQL, sem a necessidade de configurar ou gerenciar infraestrutura."
  },
  {
    id: 19,
    text: "Qual serviço da AWS permite orquestrar workflows de aplicativos distribuídos?",
    options: [
      "AWS Step Functions",
      "Amazon EventBridge",
      "Amazon SQS",
      "Amazon SNS"
    ],
    correctAnswer: 0,
    explanation: "O AWS Step Functions permite orquestrar workflows complexos de aplicativos distribuídos, integrando-se facilmente com outros serviços da AWS."
  },
  {
    id: 20,
    text: "Qual serviço da AWS é usado para enviar notificações push para aplicativos móveis?",
    options: [
      "Amazon Simple Notification Service (SNS)",
      "Amazon SQS",
      "Amazon EventBridge",
      "AWS Step Functions"
    ],
    correctAnswer: 0,
    explanation: "O Amazon SNS permite enviar notificações push para aplicativos móveis, além de suportar mensagens SMS, e-mail e outros protocolos."
  },
  {
    id: 21,
    text: "Qual serviço da AWS é um centro de contato na nuvem?",
    options: [
      "Amazon Connect",
      "Amazon SES",
      "Amazon SNS",
      "Amazon SQS"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Connect é um serviço de centro de contato na nuvem que permite criar e gerenciar call centers de forma escalável e econômica."
  },
  {
    id: 22,
    text: "Qual serviço da AWS permite enviar e-mails em grande escala?",
    options: [
      "Amazon Simple Email Service (SES)",
      "Amazon SNS",
      "Amazon SQS",
      "Amazon Connect"
    ],
    correctAnswer: 0,
    explanation: "O Amazon SES permite enviar e-mails em grande escala com alta taxa de entrega, ideal para campanhas de marketing e notificações."
  },
  {
    id: 23,
    text: "Qual serviço da AWS permite gerenciar configurações de aplicativos?",
    options: [
      "AWS AppConfig",
      "AWS CLI",
      "AWS Cloud9",
      "AWS CloudShell"
    ],
    correctAnswer: 0,
    explanation: "O AWS AppConfig permite gerenciar configurações de aplicativos em tempo real, garantindo que as mudanças sejam aplicadas de forma segura e controlada."
  },
  {
    id: 24,
    text: "Qual serviço da AWS é um ambiente de desenvolvimento integrado (IDE) baseado em nuvem?",
    options: [
      "AWS Cloud9",
      "AWS CLI",
      "AWS AppConfig",
      "AWS CloudShell"
    ],
    correctAnswer: 0,
    explanation: "O AWS Cloud9 é um IDE baseado em nuvem que permite desenvolver, depurar e executar código diretamente no navegador."
  },
  {
    id: 25,
    text: "Qual serviço da AWS permite transmitir aplicativos para dispositivos de usuários finais?",
    options: [
      "Amazon AppStream 2.0",
      "Amazon WorkSpaces",
      "Amazon WorkSpaces Web",
      "AWS Amplify"
    ],
    correctAnswer: 0,
    explanation: "O Amazon AppStream 2.0 permite transmitir aplicativos para dispositivos de usuários finais, sem a necessidade de instalação local."
  },
  {
    id: 26,
    text: "Qual serviço da AWS facilita o desenvolvimento de aplicativos web e móveis?",
    options: [
      "AWS Amplify",
      "AWS AppSync",
      "AWS Device Farm",
      "Amazon WorkSpaces"
    ],
    correctAnswer: 0,
    explanation: "O AWS Amplify facilita o desenvolvimento de aplicativos web e móveis, oferecendo ferramentas para autenticação, armazenamento e APIs."
  },
  {
    id: 27,
    text: "Qual serviço da AWS permite criar APIs GraphQL escaláveis?",
    options: [
      "AWS AppSync",
      "AWS Amplify",
      "AWS Device Farm",
      "Amazon WorkSpaces"
    ],
    correctAnswer: 0,
    explanation: "O AWS AppSync permite criar APIs GraphQL escaláveis, integrando-se facilmente com outros serviços da AWS, como DynamoDB e Lambda."
  },
  {
    id: 28,
    text: "Qual serviço da AWS permite conectar dispositivos IoT à nuvem?",
    options: [
      "AWS IoT Core",
      "AWS IoT Greengrass",
      "AWS Amplify",
      "AWS AppSync"
    ],
    correctAnswer: 0,
    explanation: "O AWS IoT Core permite conectar dispositivos IoT à nuvem, coletar dados e interagir com outros serviços da AWS."
  },
  {
    id: 29,
    text: "Qual serviço da AWS permite executar código sem provisionar ou gerenciar servidores?",
    options: [
      "AWS Lambda",
      "Amazon EC2",
      "AWS Fargate",
      "Amazon ECS"
    ],
    correctAnswer: 0,
    explanation: "O AWS Lambda permite executar código sem a necessidade de provisionar ou gerenciar servidores, cobrando apenas pelo tempo de execução."
  },
  {
    id: 30,
    text: "Qual serviço da AWS é usado para balancear o tráfego entre várias instâncias EC2?",
    options: [
      "Elastic Load Balancing (ELB)",
      "Amazon Route 53",
      "AWS Global Accelerator",
      "Amazon CloudFront"
    ],
    correctAnswer: 0,
    explanation: "O Elastic Load Balancing (ELB) distribui o tráfego entre várias instâncias EC2, garantindo alta disponibilidade e escalabilidade."
  },
  {
    id: 31,
    text: "Qual serviço da AWS permite armazenar dados em um sistema de arquivos compartilhado?",
    options: [
      "Amazon Elastic File System (EFS)",
      "Amazon S3",
      "Amazon EBS",
      "AWS Storage Gateway"
    ],
    correctAnswer: 0,
    explanation: "O Amazon EFS é um serviço de sistema de arquivos compartilhado que permite armazenar e acessar dados de forma escalável e durável."
  },
  {
    id: 32,
    text: "Qual serviço da AWS é usado para armazenar dados em blocos para instâncias EC2?",
    options: [
      "Amazon Elastic Block Store (EBS)",
      "Amazon S3",
      "Amazon EFS",
      "AWS Storage Gateway"
    ],
    correctAnswer: 0,
    explanation: "O Amazon EBS fornece armazenamento em blocos de alto desempenho para instâncias EC2, ideal para cargas de trabalho que exigem baixa latência."
  },
  {
    id: 33,
    text: "Qual serviço da AWS permite armazenar dados em um sistema de arquivos compatível com Windows?",
    options: [
      "Amazon FSx",
      "Amazon EFS",
      "Amazon S3",
      "Amazon EBS"
    ],
    correctAnswer: 0,
    explanation: "O Amazon FSx oferece sistemas de arquivos compatíveis com Windows, permitindo integração perfeita com aplicativos baseados em Windows."
  },
  {
    id: 34,
    text: "Qual serviço da AWS permite armazenar dados em cache para acesso rápido?",
    options: [
      "Amazon ElastiCache",
      "Amazon S3",
      "Amazon EFS",
      "Amazon EBS"
    ],
    correctAnswer: 0,
    explanation: "O Amazon ElastiCache é um serviço de cache em memória que melhora o desempenho de aplicativos ao armazenar dados em cache para acesso rápido."
  },
  {
    id: 35,
    text: "Qual serviço da AWS permite analisar dados em tempo real?",
    options: [
      "Amazon Kinesis",
      "Amazon Athena",
      "AWS Glue",
      "Amazon Redshift"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Kinesis permite coletar, processar e analisar dados em tempo real, ideal para aplicações que exigem insights imediatos."
  },
  {
    id: 36,
    text: "Qual serviço da AWS permite criar pipelines de ETL (Extract, Transform, Load)?",
    options: [
      "AWS Glue",
      "Amazon Athena",
      "Amazon Redshift",
      "Amazon EMR"
    ],
    correctAnswer: 0,
    explanation: "O AWS Glue é um serviço de ETL totalmente gerenciado que permite criar pipelines para transformar e mover dados entre diferentes fontes."
  },
  {
    id: 37,
    text: "Qual serviço da AWS permite criar dashboards e visualizações de dados?",
    options: [
      "Amazon QuickSight",
      "AWS Glue",
      "Amazon Athena",
      "Amazon Redshift"
    ],
    correctAnswer: 0,
    explanation: "O Amazon QuickSight permite criar dashboards e visualizações interativas de dados, facilitando a análise e tomada de decisões."
  },
  {
    id: 38,
    text: "Qual serviço da AWS permite criar chatbots conversacionais?",
    options: [
      "Amazon Lex",
      "Amazon Comprehend",
      "Amazon Polly",
      "Amazon Transcribe"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Lex permite criar chatbots conversacionais com reconhecimento de voz e texto, integrando-se facilmente com outros serviços da AWS."
  },
  {
    id: 39,
    text: "Qual serviço da AWS permite converter texto em fala de forma realista?",
    options: [
      "Amazon Polly",
      "Amazon Comprehend",
      "Amazon Lex",
      "Amazon Transcribe"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Polly converte texto em fala de forma realista, oferecendo vozes naturais e suportando múltiplos idiomas."
  },
  {
    id: 40,
    text: "Qual serviço da AWS permite extrair texto e dados de documentos?",
    options: [
      "Amazon Textract",
      "Amazon Rekognition",
      "Amazon Transcribe",
      "Amazon Translate"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Textract extrai texto e dados estruturados de documentos, como PDFs e imagens, sem a necessidade de configuração manual."
  },
  {
    id: 41,
    text: "Qual serviço da AWS permite traduzir texto entre idiomas?",
    options: [
      "Amazon Translate",
      "Amazon Transcribe",
      "Amazon Textract",
      "Amazon Rekognition"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Translate permite traduzir texto entre diferentes idiomas de forma rápida e precisa, utilizando machine learning."
  },
  {
    id: 42,
    text: "Qual serviço da AWS permite detectar objetos, pessoas e textos em imagens e vídeos?",
    options: [
      "Amazon Rekognition",
      "Amazon Textract",
      "Amazon Transcribe",
      "Amazon Translate"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Rekognition permite detectar objetos, pessoas e textos em imagens e vídeos, utilizando machine learning para análise visual."
  },
  {
    id: 43,
    text: "Qual serviço da AWS permite criar filas de mensagens para aplicações distribuídas?",
    options: [
      "Amazon Simple Queue Service (SQS)",
      "Amazon Simple Notification Service (SNS)",
      "Amazon EventBridge",
      "AWS Step Functions"
    ],
    correctAnswer: 0,
    explanation: "O Amazon SQS permite criar filas de mensagens para aplicações distribuídas, garantindo comunicação assíncrona e confiável entre componentes."
  },
  {
    id: 44,
    text: "Qual serviço da AWS permite gerenciar dispositivos IoT e coletar dados deles?",
    options: [
      "AWS IoT Core",
      "AWS IoT Greengrass",
      "AWS Amplify",
      "AWS AppSync"
    ],
    correctAnswer: 0,
    explanation: "O AWS IoT Core permite gerenciar dispositivos IoT e coletar dados deles, integrando-se com outros serviços da AWS para análise e processamento."
  },
  {
    id: 45,
    text: "Qual serviço da AWS permite criar workflows visuais para orquestrar serviços?",
    options: [
      "AWS Step Functions",
      "Amazon EventBridge",
      "Amazon SQS",
      "Amazon SNS"
    ],
    correctAnswer: 0,
    explanation: "O AWS Step Functions permite criar workflows visuais para orquestrar serviços da AWS, facilitando a automação de processos complexos."
  },
  {
    id: 46,
    text: "Qual serviço da AWS permite transmitir aplicativos para dispositivos de usuários finais?",
    options: [
      "Amazon AppStream 2.0",
      "Amazon WorkSpaces",
      "Amazon WorkSpaces Web",
      "AWS Amplify"
    ],
    correctAnswer: 0,
    explanation: "O Amazon AppStream 2.0 permite transmitir aplicativos para dispositivos de usuários finais, sem a necessidade de instalação local."
  },
  {
    id: 47,
    text: "Qual serviço da AWS facilita o desenvolvimento de aplicativos web e móveis?",
    options: [
      "AWS Amplify",
      "AWS AppSync",
      "AWS Device Farm",
      "Amazon WorkSpaces"
    ],
    correctAnswer: 0,
    explanation: "O AWS Amplify facilita o desenvolvimento de aplicativos web e móveis, oferecendo ferramentas para autenticação, armazenamento e APIs."
  },
  {
    id: 48,
    text: "Qual serviço da AWS permite criar APIs GraphQL escaláveis?",
    options: [
      "AWS AppSync",
      "AWS Amplify",
      "AWS Device Farm",
      "Amazon WorkSpaces"
    ],
    correctAnswer: 0,
    explanation: "O AWS AppSync permite criar APIs GraphQL escaláveis, integrando-se facilmente com outros serviços da AWS, como DynamoDB e Lambda."
  },
  {
    id: 49,
    text: "Qual serviço da AWS permite conectar dispositivos IoT à nuvem?",
    options: [
      "AWS IoT Core",
      "AWS IoT Greengrass",
      "AWS Amplify",
      "AWS AppSync"
    ],
    correctAnswer: 0,
    explanation: "O AWS IoT Core permite conectar dispositivos IoT à nuvem, coletar dados e interagir com outros serviços da AWS."
  },
  {
    id: 50,
    text: "Qual serviço da AWS permite executar código sem provisionar ou gerenciar servidores?",
    options: [
      "AWS Lambda",
      "Amazon EC2",
      "AWS Fargate",
      "Amazon ECS"
    ],
    correctAnswer: 0,
    explanation: "O AWS Lambda permite executar código sem a necessidade de provisionar ou gerenciar servidores, cobrando apenas pelo tempo de execução."
  },
  {
    id: 51,
    text: "Qual serviço da AWS é usado para balancear o tráfego entre várias instâncias EC2?",
    options: [
      "Elastic Load Balancing (ELB)",
      "Amazon Route 53",
      "AWS Global Accelerator",
      "Amazon CloudFront"
    ],
    correctAnswer: 0,
    explanation: "O Elastic Load Balancing (ELB) distribui o tráfego entre várias instâncias EC2, garantindo alta disponibilidade e escalabilidade."
  },
  {
    id: 52,
    text: "Qual serviço da AWS permite armazenar dados em um sistema de arquivos compartilhado?",
    options: [
      "Amazon Elastic File System (EFS)",
      "Amazon S3",
      "Amazon EBS",
      "AWS Storage Gateway"
    ],
    correctAnswer: 0,
    explanation: "O Amazon EFS é um serviço de sistema de arquivos compartilhado que permite armazenar e acessar dados de forma escalável e durável."
  },
  {
    id: 53,
    text: "Qual serviço da AWS é usado para armazenar dados em blocos para instâncias EC2?",
    options: [
      "Amazon Elastic Block Store (EBS)",
      "Amazon S3",
      "Amazon EFS",
      "AWS Storage Gateway"
    ],
    correctAnswer: 0,
    explanation: "O Amazon EBS fornece armazenamento em blocos de alto desempenho para instâncias EC2, ideal para cargas de trabalho que exigem baixa latência."
  },
  {
    id: 54,
    text: "Qual serviço da AWS permite armazenar dados em um sistema de arquivos compatível com Windows?",
    options: [
      "Amazon FSx",
      "Amazon EFS",
      "Amazon S3",
      "Amazon EBS"
    ],
    correctAnswer: 0,
    explanation: "O Amazon FSx oferece sistemas de arquivos compatíveis com Windows, permitindo integração perfeita com aplicativos baseados em Windows."
  },
  {
    id: 55,
    text: "Qual serviço da AWS permite armazenar dados em cache para acesso rápido?",
    options: [
      "Amazon ElastiCache",
      "Amazon S3",
      "Amazon EFS",
      "Amazon EBS"
    ],
    correctAnswer: 0,
    explanation: "O Amazon ElastiCache é um serviço de cache em memória que melhora o desempenho de aplicativos ao armazenar dados em cache para acesso rápido."
  },
  {
    id: 56,
    text: "Qual serviço da AWS permite analisar dados em tempo real?",
    options: [
      "Amazon Kinesis",
      "Amazon Athena",
      "AWS Glue",
      "Amazon Redshift"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Kinesis permite coletar, processar e analisar dados em tempo real, ideal para aplicações que exigem insights imediatos."
  },
  {
    id: 57,
    text: "Qual serviço da AWS permite criar pipelines de ETL (Extract, Transform, Load)?",
    options: [
      "AWS Glue",
      "Amazon Athena",
      "Amazon Redshift",
      "Amazon EMR"
    ],
    correctAnswer: 0,
    explanation: "O AWS Glue é um serviço de ETL totalmente gerenciado que permite criar pipelines para transformar e mover dados entre diferentes fontes."
  },
  {
    id: 58,
    text: "Qual serviço da AWS permite criar dashboards e visualizações de dados?",
    options: [
      "Amazon QuickSight",
      "AWS Glue",
      "Amazon Athena",
      "Amazon Redshift"
    ],
    correctAnswer: 0,
    explanation: "O Amazon QuickSight permite criar dashboards e visualizações interativas de dados, facilitando a análise e tomada de decisões."
  },
  {
    id: 59,
    text: "Qual serviço da AWS permite criar chatbots conversacionais?",
    options: [
      "Amazon Lex",
      "Amazon Comprehend",
      "Amazon Polly",
      "Amazon Transcribe"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Lex permite criar chatbots conversacionais com reconhecimento de voz e texto, integrando-se facilmente com outros serviços da AWS."
  },
  {
    id: 60,
    text: "Qual serviço da AWS permite converter texto em fala de forma realista?",
    options: [
      "Amazon Polly",
      "Amazon Comprehend",
      "Amazon Lex",
      "Amazon Transcribe"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Polly converte texto em fala de forma realista, oferecendo vozes naturais e suportando múltiplos idiomas."
  },
  {
    id: 61,
    text: "Qual serviço da AWS permite extrair texto e dados de documentos?",
    options: [
      "Amazon Textract",
      "Amazon Rekognition",
      "Amazon Transcribe",
      "Amazon Translate"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Textract extrai texto e dados estruturados de documentos, como PDFs e imagens, sem a necessidade de configuração manual."
  },
  {
    id: 62,
    text: "Qual serviço da AWS permite traduzir texto entre idiomas?",
    options: [
      "Amazon Translate",
      "Amazon Transcribe",
      "Amazon Textract",
      "Amazon Rekognition"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Translate permite traduzir texto entre diferentes idiomas de forma rápida e precisa, utilizando machine learning."
  },
  {
    id: 63,
    text: "Qual serviço da AWS permite detectar objetos, pessoas e textos em imagens e vídeos?",
    options: [
      "Amazon Rekognition",
      "Amazon Textract",
      "Amazon Transcribe",
      "Amazon Translate"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Rekognition permite detectar objetos, pessoas e textos em imagens e vídeos, utilizando machine learning para análise visual."
  },
  {
    id: 64,
    text: "Qual serviço da AWS permite criar filas de mensagens para aplicações distribuídas?",
    options: [
      "Amazon Simple Queue Service (SQS)",
      "Amazon Simple Notification Service (SNS)",
      "Amazon EventBridge",
      "AWS Step Functions"
    ],
    correctAnswer: 0,
    explanation: "O Amazon SQS permite criar filas de mensagens para aplicações distribuídas, garantindo comunicação assíncrona e confiável entre componentes."
  },
  {
    id: 65,
    text: "Qual serviço da AWS permite gerenciar dispositivos IoT e coletar dados deles?",
    options: [
      "AWS IoT Core",
      "AWS IoT Greengrass",
      "AWS Amplify",
      "AWS AppSync"
    ],
    correctAnswer: 0,
    explanation: "O AWS IoT Core permite gerenciar dispositivos IoT e coletar dados deles, integrando-se com outros serviços da AWS para análise e processamento."
  }
];



// Lista de questões ativa (será embaralhada)
let questions = [...originalQuestions];

// Estado do simulado
const examState = {
  currentQuestionIndex: 0,
  answers: {},
  markedForReview: new Set(),
  timeRemaining: 90 * 60, // 30 minutos em segundos
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
