const originalQuestions = [
  {
    id: 1,
    text: "Qual dos seguintes serviços da AWS permite criar, publicar, manter, monitorar e proteger APIs em qualquer escala?",
    options: [
      "Amazon API Gateway",
      "AWS Lambda",
      "Amazon S3",
      "Amazon EC2"
    ],
    correctAnswer: 0,
    explanation: "O Amazon API Gateway permite criar, publicar, manter, monitorar e proteger APIs em qualquer escala, facilitando a integração de aplicações com serviços da AWS."
  },
  {
    id: 2,
    text: "Qual dos seguintes é um benefício da migração para a nuvem AWS?",
    options: [
      "Custos fixos e previsíveis",
      "Menor flexibilidade",
      "Escalabilidade limitada",
      "Despesas de capital reduzidas"
    ],
    correctAnswer: 3,
    explanation: "A migração para a nuvem AWS reduz despesas de capital, pois os clientes pagam apenas pelo que usam, sem a necessidade de investir em infraestrutura física."
  },
  {
    id: 3,
    text: "Qual pilar do AWS Cloud Adoption Framework (AWS CAF) se concentra em garantir que os recursos de TI atendam aos requisitos de negócios?",
    options: [
      "Pilar de Negócios",
      "Pilar de Governança",
      "Pilar de Plataforma",
      "Pilar de Operações"
    ],
    correctAnswer: 0,
    explanation: "O Pilar de Negócios do AWS CAF concentra-se em garantir que os recursos de TI estejam alinhados com os objetivos e requisitos de negócios."
  },
  {
    id: 4,
    text: "Qual serviço da AWS ajuda os clientes a entender a conformidade de seus recursos com políticas internas e regulamentações externas?",
    options: [
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS CloudTrail",
      "AWS Shield"
    ],
    correctAnswer: 0,
    explanation: "O AWS Config permite monitorar e avaliar a configuração dos recursos da AWS, ajudando a garantir conformidade com políticas e regulamentações."
  },
  {
    id: 5,
    text: "Qual serviço da AWS permite executar código sem provisionar ou gerenciar servidores?",
    options: [
      "Amazon EC2",
      "AWS Lambda",
      "Amazon RDS",
      "Amazon ECS"
    ],
    correctAnswer: 1,
    explanation: "O AWS Lambda permite executar código sem a necessidade de provisionar ou gerenciar servidores, cobrando apenas pelo tempo de execução."
  },
  {
    id: 6,
    text: "Qual ferramenta da AWS permite estimar o custo de uso de serviços da AWS antes de implantá-los?",
    options: [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Trusted Advisor"
    ],
    correctAnswer: 2,
    explanation: "O AWS Pricing Calculator permite estimar o custo de uso de serviços da AWS antes de implantá-los, ajudando no planejamento financeiro."
  },
  {
    id: 7,
    text: "Qual serviço da AWS é um banco de dados relacional totalmente gerenciado?",
    options: [
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon Neptune"
    ],
    correctAnswer: 1,
    explanation: "O Amazon RDS é um serviço de banco de dados relacional totalmente gerenciado que suporta vários motores de banco de dados, como MySQL, PostgreSQL e Oracle."
  },
  {
    id: 8,
    text: "Qual tipo de instância do Amazon EC2 é mais adequado para cargas de trabalho que podem ser interrompidas sem aviso prévio?",
    options: [
      "Instâncias sob demanda",
      "Instâncias reservadas",
      "Instâncias spot",
      "Instâncias dedicadas"
    ],
    correctAnswer: 2,
    explanation: "As instâncias spot são ideais para cargas de trabalho que podem ser interrompidas sem aviso prévio, oferecendo custos significativamente mais baixos."
  },
  {
    id: 9,
    text: "Quantas Zonas de Disponibilidade uma Região AWS deve ter, no mínimo?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctAnswer: 1,
    explanation: "Uma Região AWS deve ter pelo menos duas Zonas de Disponibilidade para garantir alta disponibilidade e resiliência."
  },
  {
    id: 10,
    text: "Qual serviço da AWS permite definir e provisionar infraestrutura usando código?",
    options: [
      "AWS CloudFormation",
      "AWS CodeDeploy",
      "AWS OpsWorks",
      "AWS Systems Manager"
    ],
    correctAnswer: 0,
    explanation: "O AWS CloudFormation permite definir e provisionar infraestrutura como código, automatizando a criação e gerenciamento de recursos na AWS."
  },
  {
    id: 11,
    text: "Onde os usuários podem encontrar respostas para perguntas frequentes sobre serviços da AWS?",
    options: [
      "AWS re:Post",
      "AWS Knowledge Center",
      "AWS Support Center",
      "AWS Forums"
    ],
    correctAnswer: 1,
    explanation: "O AWS Knowledge Center é um recurso onde os usuários podem encontrar respostas para perguntas frequentes sobre serviços da AWS."
  },
  {
    id: 12,
    text: "Qual serviço da AWS permite criar modelos de machine learning sem necessidade de experiência prévia em ML?",
    options: [
      "Amazon SageMaker",
      "Amazon Comprehend",
      "Amazon Rekognition",
      "Amazon Polly"
    ],
    correctAnswer: 0,
    explanation: "O Amazon SageMaker permite criar, treinar e implantar modelos de machine learning de forma rápida e escalável, sem necessidade de experiência prévia em ML."
  },
  {
    id: 13,
    text: "Qual serviço da AWS fornece recomendações para otimizar custos, desempenho e segurança?",
    options: [
      "AWS Trusted Advisor",
      "AWS CloudTrail",
      "AWS Config",
      "AWS Systems Manager"
    ],
    correctAnswer: 0,
    explanation: "O AWS Trusted Advisor fornece recomendações personalizadas para otimizar custos, desempenho, segurança e confiabilidade dos recursos da AWS."
  },
  {
    id: 14,
    text: "Qual serviço da AWS é usado para migrar grandes volumes de dados para a nuvem de forma offline?",
    options: [
      "AWS Snowball",
      "AWS Direct Connect",
      "AWS DataSync",
      "AWS Transfer Family"
    ],
    correctAnswer: 0,
    explanation: "O AWS Snowball permite migrar grandes volumes de dados para a nuvem de forma offline, utilizando dispositivos físicos para transferência de dados."
  },
  {
    id: 15,
    text: "Qual serviço da AWS permite criar uma rede privada virtual (VPC) na nuvem?",
    options: [
      "Amazon VPC",
      "AWS Direct Connect",
      "Amazon Route 53",
      "AWS Global Accelerator"
    ],
    correctAnswer: 0,
    explanation: "O Amazon VPC permite criar uma rede privada virtual na nuvem, isolando recursos e controlando o tráfego de rede."
  },
  {
    id: 16,
    text: "Qual programa da AWS ajuda os clientes a encontrar parceiros certificados para implementar soluções na nuvem?",
    options: [
      "AWS Partner Network (APN)",
      "AWS Marketplace",
      "AWS Professional Services",
      "AWS Solutions Architects"
    ],
    correctAnswer: 0,
    explanation: "O AWS Partner Network (APN) conecta clientes a parceiros certificados que podem ajudar na implementação de soluções na nuvem."
  },
  {
    id: 17,
    text: "Qual serviço da AWS fornece recomendações personalizadas para melhorar a eficiência operacional?",
    options: [
      "AWS Trusted Advisor",
      "AWS Cost Explorer",
      "AWS Well-Architected Tool",
      "AWS Personal Health Dashboard"
    ],
    correctAnswer: 2,
    explanation: "O AWS Well-Architected Tool fornece recomendações personalizadas para melhorar a eficiência operacional, segurança, confiabilidade e otimização de custos."
  },
  {
    id: 18,
    text: "Qual é o principal objetivo do AWS Pricing Calculator?",
    options: [
      "Monitorar custos em tempo real",
      "Estimar custos de serviços da AWS",
      "Alertar sobre custos excessivos",
      "Otimizar o uso de recursos"
    ],
    correctAnswer: 1,
    explanation: "O AWS Pricing Calculator permite estimar o custo de uso de serviços da AWS antes de implantá-los, ajudando no planejamento financeiro."
  },
  {
    id: 19,
    text: "Qual é o papel da AWS Professional Services?",
    options: [
      "Fornecer suporte técnico básico",
      "Ajudar empresas a implementar soluções na nuvem",
      "Gerenciar infraestrutura de clientes",
      "Oferecer treinamentos gratuitos"
    ],
    correctAnswer: 1,
    explanation: "A AWS Professional Services ajuda empresas a implementar soluções na nuvem, oferecendo expertise e orientação técnica."
  },
  {
    id: 20,
    text: "O que é o AWS re:Post?",
    options: [
      "Um fórum de discussão da comunidade AWS",
      "Um serviço de migração de dados",
      "Uma ferramenta de monitoramento de custos",
      "Um banco de dados gerenciado"
    ],
    correctAnswer: 0,
    explanation: "O AWS re:Post é um fórum de discussão da comunidade AWS onde os usuários podem compartilhar conhecimentos e obter ajuda sobre serviços da AWS."
  },
  {
    id: 21,
    text: "Qual é a principal função dos SDKs da AWS?",
    options: [
      "Facilitar a integração de serviços AWS em aplicações",
      "Monitorar o desempenho de instâncias EC2",
      "Gerenciar permissões de usuários",
      "Fornecer suporte técnico"
    ],
    correctAnswer: 0,
    explanation: "Os SDKs da AWS facilitam a integração de serviços AWS em aplicações, fornecendo bibliotecas e ferramentas para diversas linguagens de programação."
  },
  {
    id: 22,
    text: "Qual serviço da AWS fornece proteção contra ataques DDoS?",
    options: [
      "AWS Shield",
      "AWS WAF",
      "Amazon GuardDuty",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O AWS Shield fornece proteção contra ataques DDoS, garantindo a disponibilidade e segurança de aplicações na nuvem."
  },
  {
    id: 23,
    text: "Onde os usuários podem encontrar atualizações e melhores práticas sobre segurança na AWS?",
    options: [
      "AWS Security Blog",
      "AWS Knowledge Center",
      "AWS re:Post",
      "AWS Support Center"
    ],
    correctAnswer: 0,
    explanation: "O AWS Security Blog é uma fonte confiável para atualizações e melhores práticas sobre segurança na AWS."
  },
  {
    id: 24,
    text: "Qual serviço da AWS centraliza o gerenciamento de segurança e conformidade?",
    options: [
      "AWS Security Hub",
      "AWS IAM",
      "AWS CloudTrail",
      "AWS Config"
    ],
    correctAnswer: 0,
    explanation: "O AWS Security Hub centraliza o gerenciamento de segurança e conformidade, fornecendo uma visão abrangente do estado de segurança dos recursos da AWS."
  },
  {
    id: 25,
    text: "No modelo de responsabilidade compartilhada, qual é a responsabilidade do cliente?",
    options: [
      "Gerenciar a segurança da nuvem",
      "Gerenciar a segurança na nuvem",
      "Manter a infraestrutura física",
      "Atualizar o hardware dos data centers"
    ],
    correctAnswer: 1,
    explanation: "No modelo de responsabilidade compartilhada, o cliente é responsável por gerenciar a segurança na nuvem, incluindo configurações de rede, sistemas operacionais e aplicativos."
  },
  {
    id: 26,
    text: "Qual é o papel de um Solutions Architect da AWS?",
    options: [
      "Projetar arquiteturas escaláveis e seguras na nuvem",
      "Fornecer suporte técnico básico",
      "Gerenciar instâncias EC2",
      "Monitorar custos de serviços"
    ],
    correctAnswer: 0,
    explanation: "O Solutions Architect da AWS é responsável por projetar arquiteturas escaláveis e seguras na nuvem, alinhadas com as necessidades de negócios dos clientes."
  },
  {
    id: 27,
    text: "Qual serviço da AWS oferece armazenamento de objetos altamente durável e escalável?",
    options: [
      "Amazon S3",
      "Amazon EBS",
      "Amazon Glacier",
      "Amazon RDS"
    ],
    correctAnswer: 0,
    explanation: "O Amazon S3 oferece armazenamento de objetos altamente durável e escalável, ideal para armazenar e recuperar grandes volumes de dados."
  },
  {
    id: 28,
    text: "Onde os clientes podem abrir tickets de suporte e gerenciar solicitações de ajuda?",
    options: [
      "AWS Support Center",
      "AWS re:Post",
      "AWS Knowledge Center",
      "AWS Forums"
    ],
    correctAnswer: 0,
    explanation: "O AWS Support Center é o local onde os clientes podem abrir tickets de suporte e gerenciar solicitações de ajuda relacionadas aos serviços da AWS."
  },
  {
    id: 29,
    text: "Qual plano de suporte da AWS oferece suporte técnico 24/7 com tempo de resposta de menos de 1 hora?",
    options: [
      "Basic",
      "Developer",
      "Business",
      "Enterprise"
    ],
    correctAnswer: 3,
    explanation: "O plano de suporte Enterprise da AWS oferece suporte técnico 24/7 com tempo de resposta de menos de 1 hora para casos críticos."
  },
  {
    id: 30,
    text: "Qual pilar do AWS Well-Architected Framework se concentra em proteger informações e sistemas?",
    options: [
      "Segurança",
      "Confiabilidade",
      "Eficiência de desempenho",
      "Otimização de custos"
    ],
    correctAnswer: 0,
    explanation: "O pilar de Segurança do AWS Well-Architected Framework concentra-se em proteger informações e sistemas, garantindo a confidencialidade, integridade e disponibilidade dos dados."
  },
  {
    id: 31,
    text: "Qual serviço da AWS melhora a disponibilidade e o desempenho de aplicativos usando endpoints globais?",
    options: [
      "AWS Global Accelerator",
      "Amazon CloudFront",
      "AWS Direct Connect",
      "AWS Transit Gateway"
    ],
    correctAnswer: 0,
    explanation: "O AWS Global Accelerator melhora a disponibilidade e o desempenho de aplicativos usando endpoints globais, direcionando o tráfego para o endpoint mais próximo do usuário."
  },
  {
    id: 32,
    text: "Qual serviço da AWS permite gerenciar múltiplas contas da AWS de forma centralizada?",
    options: [
      "AWS Organizations",
      "AWS Control Tower",
      "AWS Systems Manager",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O AWS Organizations permite gerenciar múltiplas contas da AWS de forma centralizada, facilitando a governança e o controle de custos."
  },
  {
    id: 33,
    text: "Qual serviço da AWS registra chamadas de API feitas em sua conta para auditoria e conformidade?",
    options: [
      "AWS CloudTrail",
      "AWS Config",
      "AWS CloudWatch",
      "AWS X-Ray"
    ],
    correctAnswer: 0,
    explanation: "O AWS CloudTrail registra todas as chamadas de API feitas em sua conta, fornecendo logs detalhados para auditoria e conformidade."
  },
  {
    id: 34,
    text: "Qual serviço da AWS gerencia permissões de usuários e recursos de forma segura?",
    options: [
      "AWS IAM",
      "AWS Secrets Manager",
      "AWS KMS",
      "AWS Certificate Manager"
    ],
    correctAnswer: 0,
    explanation: "O AWS IAM (Identity and Access Management) gerencia permissões de usuários e recursos de forma segura, controlando o acesso aos serviços da AWS."
  },
  {
    id: 35,
    text: "Qual serviço da AWS facilita a implantação e o gerenciamento de aplicativos em contêineres?",
    options: [
      "AWS Elastic Beanstalk",
      "AWS Fargate",
      "Amazon ECS",
      "AWS Lambda"
    ],
    correctAnswer: 0,
    explanation: "O AWS Elastic Beanstalk facilita a implantação e o gerenciamento de aplicativos em contêineres, automatizando a configuração e o dimensionamento de recursos."
  },
  {
    id: 36,
    text: "Qual serviço da AWS permite executar contêineres sem gerenciar servidores ou clusters?",
    options: [
      "AWS Fargate",
      "Amazon EKS",
      "AWS Batch",
      "AWS Elastic Beanstalk"
    ],
    correctAnswer: 0,
    explanation: "O AWS Fargate permite executar contêineres sem a necessidade de gerenciar servidores ou clusters, simplificando a operação de aplicações baseadas em contêineres."
  },
  {
    id: 37,
    text: "Qual serviço da AWS permite executar infraestrutura local usando os mesmos serviços da AWS?",
    options: [
      "AWS Outposts",
      "AWS Snowball",
      "AWS Direct Connect",
      "AWS Wavelength"
    ],
    correctAnswer: 0,
    explanation: "O AWS Outposts permite executar infraestrutura local usando os mesmos serviços da AWS, oferecendo uma experiência híbrida consistente com a nuvem."
  },
  {
    id: 38,
    text: "Qual serviço da AWS automatiza o backup de dados em serviços como Amazon EC2 e Amazon RDS?",
    options: [
      "AWS Backup",
      "AWS Snapshots",
      "AWS Storage Gateway",
      "AWS DataSync"
    ],
    correctAnswer: 0,
    explanation: "O AWS Backup automatiza o backup de dados em serviços como Amazon EC2 e Amazon RDS, garantindo a proteção e recuperação de dados."
  },
  {
    id: 39,
    text: "Qual serviço da AWS fornece acesso sob demanda a relatórios de conformidade e documentação?",
    options: [
      "AWS Artifact",
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS Security Hub"
    ],
    correctAnswer: 0,
    explanation: "O AWS Artifact fornece acesso sob demanda a relatórios de conformidade e documentação, ajudando os clientes a atender a requisitos regulatórios."
  },
  {
    id: 40,
    text: "Qual serviço da AWS ajuda a configurar e governar um ambiente de nuvem de forma automatizada?",
    options: [
      "AWS Control Tower",
      "AWS Organizations",
      "AWS Systems Manager",
      "AWS CloudFormation"
    ],
    correctAnswer: 0,
    explanation: "O AWS Control Tower ajuda a configurar e governar um ambiente de nuvem de forma automatizada, garantindo conformidade e boas práticas."
  },
  {
    id: 41,
    text: "Qual serviço da AWS ajuda a configurar e governar um ambiente de nuvem de forma automatizada?",
    options: [
      "AWS Control Tower",
      "AWS Organizations",
      "AWS Systems Manager",
      "AWS CloudFormation"
    ],
    correctAnswer: 0,
    explanation: "O AWS Control Tower ajuda a configurar e governar um ambiente de nuvem de forma automatizada, seguindo as melhores práticas da AWS."
  },
  {
    id: 42,
    text: "Qual serviço da AWS permite gerenciar recursos em escala e automatizar tarefas operacionais?",
    options: [
      "AWS Systems Manager",
      "AWS OpsWorks",
      "AWS Step Functions",
      "AWS Batch"
    ],
    correctAnswer: 0,
    explanation: "O AWS Systems Manager permite gerenciar recursos em escala e automatizar tarefas operacionais, como patches, configurações e monitoramento."
  },
  {
    id: 43,
    text: "Qual serviço da AWS permite orquestrar funções e serviços em workflows visuais?",
    options: [
      "AWS Step Functions",
      "AWS Data Pipeline",
      "AWS Glue",
      "AWS X-Ray"
    ],
    correctAnswer: 0,
    explanation: "O AWS Step Functions permite orquestrar funções e serviços em workflows visuais, facilitando a criação de aplicativos distribuídos e complexos."
  },
  {
    id: 44,
    text: "Qual serviço da AWS rastreia e analisa chamadas de aplicativos distribuídos?",
    options: [
      "AWS X-Ray",
      "AWS CloudTrail",
      "AWS CloudWatch",
      "AWS Config"
    ],
    correctAnswer: 0,
    explanation: "O AWS X-Ray rastreia e analisa chamadas de aplicativos distribuídos, ajudando a identificar gargalos e problemas de desempenho."
  },
  {
    id: 45,
    text: "Qual serviço da AWS monitora recursos e aplicativos em tempo real?",
    options: [
      "AWS CloudWatch",
      "AWS X-Ray",
      "AWS CloudTrail",
      "AWS Config"
    ],
    correctAnswer: 0,
    explanation: "O AWS CloudWatch monitora recursos e aplicativos em tempo real, fornecendo métricas, logs e alertas para ajudar na gestão operacional."
  },
  {
    id: 46,
    text: "Qual serviço da AWS distribui o tráfego de entrada entre várias instâncias EC2?",
    options: [
      "AWS Elastic Load Balancing (ELB)",
      "AWS Global Accelerator",
      "AWS Transit Gateway",
      "AWS Direct Connect"
    ],
    correctAnswer: 0,
    explanation: "O AWS Elastic Load Balancing (ELB) distribui o tráfego de entrada entre várias instâncias EC2, garantindo alta disponibilidade e escalabilidade."
  },
  {
    id: 47,
    text: "Qual serviço da AWS conecta redes virtuais (VPCs) e redes locais em uma única interface?",
    options: [
      "AWS Transit Gateway",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "AWS VPN"
    ],
    correctAnswer: 0,
    explanation: "O AWS Transit Gateway conecta redes virtuais (VPCs) e redes locais em uma única interface, simplificando a arquitetura de rede."
  },
  {
    id: 48,
    text: "Qual serviço da AWS fornece uma conexão dedicada entre a rede local e a AWS?",
    options: [
      "AWS Direct Connect",
      "AWS VPN",
      "AWS PrivateLink",
      "AWS Global Accelerator"
    ],
    correctAnswer: 0,
    explanation: "O AWS Direct Connect fornece uma conexão dedicada entre a rede local e a AWS, oferecendo maior largura de banda e menor latência."
  },
  {
    id: 49,
    text: "Qual serviço da AWS permite acessar serviços AWS de forma privada sem usar a internet pública?",
    options: [
      "AWS PrivateLink",
      "AWS Direct Connect",
      "AWS VPN",
      "AWS Transit Gateway"
    ],
    correctAnswer: 0,
    explanation: "O AWS PrivateLink permite acessar serviços AWS de forma privada sem usar a internet pública, aumentando a segurança e a privacidade."
  },
  {
    id: 50,
    text: "Qual serviço da AWS protege aplicativos web contra ataques comuns, como SQL injection?",
    options: [
      "AWS WAF (Web Application Firewall)",
      "AWS Shield",
      "AWS Firewall Manager",
      "AWS GuardDuty"
    ],
    correctAnswer: 0,
    explanation: "O AWS WAF (Web Application Firewall) protege aplicativos web contra ataques comuns, como SQL injection e cross-site scripting (XSS)."
  },
  {
    id: 51,
    text: "Qual serviço da AWS gerencia chaves de criptografia usadas para proteger dados?",
    options: [
      "AWS KMS (Key Management Service)",
      "AWS Secrets Manager",
      "AWS Certificate Manager",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O AWS KMS (Key Management Service) gerencia chaves de criptografia usadas para proteger dados, garantindo a segurança e a conformidade."
  },
  {
    id: 52,
    text: "Qual serviço da AWS armazena e gerencia segredos, como senhas e chaves de API?",
    options: [
      "AWS Secrets Manager",
      "AWS KMS",
      "AWS Certificate Manager",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O AWS Secrets Manager armazena e gerencia segredos, como senhas e chaves de API, de forma segura e centralizada."
  },
  {
    id: 53,
    text: "Qual serviço da AWS emite e gerencia certificados SSL/TLS?",
    options: [
      "AWS Certificate Manager",
      "AWS KMS",
      "AWS Secrets Manager",
      "AWS IAM"
    ],
    correctAnswer: 0,
    explanation: "O AWS Certificate Manager emite e gerencia certificados SSL/TLS, facilitando a proteção de aplicativos e serviços com criptografia."
  },
  {
    id: 54,
    text: "Qual serviço da AWS avalia automaticamente a segurança de recursos implantados?",
    options: [
      "AWS Inspector",
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS Security Hub"
    ],
    correctAnswer: 0,
    explanation: "O AWS Inspector avalia automaticamente a segurança de recursos implantados, identificando vulnerabilidades e desvios das melhores práticas."
  },
  {
    id: 55,
    text: "Qual serviço da AWS usa machine learning para descobrir e proteger dados confidenciais?",
    options: [
      "AWS Macie",
      "AWS GuardDuty",
      "AWS Inspector",
      "AWS Security Hub"
    ],
    correctAnswer: 0,
    explanation: "O AWS Macie usa machine learning para descobrir e proteger dados confidenciais, ajudando a garantir a conformidade com regulamentações de privacidade."
  },
  {
    id: 56,
    text: "Qual serviço da AWS permite gerenciar o acesso centralizado a múltiplas contas da AWS?",
    options: [
      "AWS Single Sign-On (SSO)",
      "AWS IAM",
      "AWS Organizations",
      "AWS Control Tower"
    ],
    correctAnswer: 0,
    explanation: "O AWS Single Sign-On (SSO) permite gerenciar o acesso centralizado a múltiplas contas da AWS, simplificando a gestão de identidades e permissões."
  },
  {
    id: 57,
    text: "Qual serviço da AWS orquestra a movimentação de dados entre diferentes serviços?",
    options: [
      "AWS Data Pipeline",
      "AWS Glue",
      "AWS Step Functions",
      "AWS Batch"
    ],
    correctAnswer: 0,
    explanation: "O AWS Data Pipeline orquestra a movimentação de dados entre diferentes serviços, automatizando o processamento e a transformação de dados."
  },
  {
    id: 58,
    text: "Qual serviço da AWS é um ETL (Extract, Transform, Load) totalmente gerenciado?",
    options: [
      "AWS Glue",
      "AWS Data Pipeline",
      "AWS Lake Formation",
      "AWS QuickSight"
    ],
    correctAnswer: 0,
    explanation: "O AWS Glue é um serviço ETL (Extract, Transform, Load) totalmente gerenciado, que facilita a preparação e transformação de dados para análise."
  },
  {
    id: 59,
    text: "Qual serviço da AWS ajuda a criar e gerenciar data lakes de forma segura?",
    options: [
      "AWS Lake Formation",
      "AWS Glue",
      "AWS Data Pipeline",
      "AWS QuickSight"
    ],
    correctAnswer: 0,
    explanation: "O AWS Lake Formation ajuda a criar e gerenciar data lakes de forma segura, fornecendo ferramentas para organizar, limpar e proteger dados."
  },
  {
    id: 60,
    text: "Qual serviço da AWS permite criar dashboards e visualizações de dados?",
    options: [
      "AWS QuickSight",
      "AWS Glue",
      "AWS Data Pipeline",
      "AWS Lake Formation"
    ],
    correctAnswer: 0,
    explanation: "O AWS QuickSight permite criar dashboards e visualizações de dados interativos, facilitando a análise e a tomada de decisões."
  },
  {
    id: 61,
    text: "Qual serviço da AWS permite conectar dispositivos IoT à nuvem?",
    options: [
      "AWS IoT Core",
      "AWS Ground Station",
      "AWS Elemental MediaConvert",
      "AWS Amplify"
    ],
    correctAnswer: 0,
    explanation: "O AWS IoT Core permite conectar dispositivos IoT à nuvem, facilitando a coleta, processamento e análise de dados de dispositivos."
  },
  {
    id: 62,
    text: "Qual serviço da AWS permite controlar satélites e processar dados de satélite?",
    options: [
      "AWS Ground Station",
      "AWS IoT Core",
      "AWS Elemental MediaConvert",
      "AWS Amplify"
    ],
    correctAnswer: 0,
    explanation: "O AWS Ground Station permite controlar satélites e processar dados de satélite, fornecendo uma solução completa para comunicações espaciais."
  },
  {
    id: 63,
    text: "Qual serviço da AWS converte arquivos de mídia para diferentes formatos?",
    options: [
      "AWS Elemental MediaConvert",
      "AWS Ground Station",
      "AWS IoT Core",
      "AWS Amplify"
    ],
    correctAnswer: 0,
    explanation: "O AWS Elemental MediaConvert converte arquivos de mídia para diferentes formatos, facilitando a distribuição de conteúdo em várias plataformas."
  },
  {
    id: 64,
    text: "Qual serviço da AWS facilita o desenvolvimento de aplicativos web e móveis?",
    options: [
      "AWS Amplify",
      "AWS AppSync",
      "AWS Lambda",
      "AWS Elastic Beanstalk"
    ],
    correctAnswer: 0,
    explanation: "O AWS Amplify facilita o desenvolvimento de aplicativos web e móveis, fornecendo ferramentas para autenticação, armazenamento e APIs."
  },
  {
    id: 65,
    text: "Qual serviço da AWS permite criar APIs GraphQL escaláveis?",
    options: [
      "AWS AppSync",
      "AWS Amplify",
      "AWS API Gateway",
      "AWS Lambda"
    ],
    correctAnswer: 0,
    explanation: "O AWS AppSync permite criar APIs GraphQL escaláveis, facilitando a integração de dados e a construção de aplicativos modernos."
  }
];

// Lista de questões ativa (será embaralhada)
let questions = [...originalQuestions];

// Estado do simulado
const examState = {
  currentQuestionIndex: 0,
  answers: {},
  markedForReview: new Set(),
  timeRemaining: 30 * 60, // 30 minutos em segundos
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
