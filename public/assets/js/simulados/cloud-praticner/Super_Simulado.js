const originalQuestions = [
  {
    id: 1,
    text: "Qual pilar do AWS Cloud Adoption Framework (CAF) é responsável por garantir que a governança, a gestão de riscos e a conformidade sejam integradas às operações de nuvem?",
    options: [
      "Perspectiva de Negócios",
      "Perspectiva de Plataforma",
      "Perspectiva de Segurança",
      "Perspectiva de Governança",
      "Perspectiva de Operações"
    ],
    correctAnswer: 3,
    explanation: "A Perspectiva de Governança no AWS CAF é responsável por garantir que a governança, a gestão de riscos e a conformidade sejam integradas às operações de nuvem."
  },
  {
    id: 2,
    text: "Qual princípio do Well-Architected Framework recomenda a separação de componentes em estágios distintos para permitir atualizações sem impacto global?",
    options: [
      "Executar experimentos em produção",
      "Automatizar mudanças",
      "Arquitetura orientada a serviços",
      "Permitir falhas",
      "Adotar uma arquitetura multicamadas"
    ],
    correctAnswer: 2,
    explanation: "O princípio de 'Arquitetura orientada a serviços' recomenda a separação de componentes em estágios distintos para permitir atualizações sem impacto global."
  },
  {
    id: 3,
    text: "Uma empresa deseja migrar um aplicativo legado para a AWS com mínimas alterações, aproveitando recursos como o Amazon RDS. Qual estratégia dos 6 Rs está sendo aplicada?",
    options: [
      "Rehost (Relocação)",
      "Replatform (Replataforma)",
      "Refactor (Refatoração)",
      "Retire (Desativação)",
      "Retain (Retenção)"
    ],
    correctAnswer: 1,
    explanation: "A estratégia de 'Replatform' (Replataforma) é usada quando uma aplicação é migrada com mínimas alterações, aproveitando serviços gerenciados como o Amazon RDS."
  },
  {
    id: 4,
    text: "Qual recurso do AWS Enterprise Support NÃO está disponível no plano Business Support?",
    options: [
      "Suporte 24/7 por chat, e-mail e telefone",
      "Technical Account Manager (TAM)",
      "Consultas ao Trusted Advisor de custo",
      "Gerenciamento de crises via Concierge Support",
      "Infrastructure Event Management"
    ],
    correctAnswer: 1,
    explanation: "O Technical Account Manager (TAM) é um recurso exclusivo do plano Enterprise Support e não está disponível no plano Business Support."
  },
  {
    id: 5,
    text: "Em qual cenário o Amazon A2I é mais adequado?",
    options: [
      "Treinar modelos de ML com dados rotulados automaticamente",
      "Revisar previsões de modelos de ML com baixa confiança via humanos",
      "Implantar modelos de ML em dispositivos IoT",
      "Monitorar o desempenho de inferência em tempo real",
      "Gerar relatórios de conformidade para auditorias"
    ],
    correctAnswer: 1,
    explanation: "O Amazon A2I é usado para revisar previsões de modelos de machine learning com baixa confiança, envolvendo humanos no processo de validação."
  },
  {
    id: 6,
    text: "Qual recurso do Amazon Lex permite personalizar respostas dinâmicas com base em intents e slots?",
    options: [
      "AWS Lambda Integration",
      "Amazon Polly Voice Synthesis",
      "Contextual Conversations",
      "Multi-language Support",
      "Slot Elicitation"
    ],
    correctAnswer: 0,
    explanation: "A integração com AWS Lambda permite personalizar respostas dinâmicas com base em intents e slots no Amazon Lex."
  },
  {
    id: 7,
    text: "Uma empresa precisa extrair tabelas e campos de formulários PDF não estruturados. Qual serviço AWS é mais adequado?",
    options: [
      "Amazon Rekognition",
      "Amazon Comprehend",
      "Amazon Textract",
      "Amazon Kendra",
      "AWS Glue"
    ],
    correctAnswer: 2,
    explanation: "O Amazon Textract é especializado em extrair texto, tabelas e campos de formulários de documentos PDF não estruturados."
  },
  {
    id: 8,
    text: "Qual componente do Amazon DeepRacer é usado para treinar modelos de reinforcement learning?",
    options: [
      "AWS RoboMaker",
      "Amazon SageMaker",
      "Amazon EC2 P3 Instances",
      "AWS Batch",
      "Amazon S3"
    ],
    correctAnswer: 1,
    explanation: "O Amazon SageMaker é usado para treinar modelos de reinforcement learning no Amazon DeepRacer."
  },
  {
    id: 9,
    text: "Qual serviço AWS permite o gerenciamento de dispositivos IoT em escala global, incluindo autenticação e autorização?",
    options: [
      "AWS IoT Core",
      "AWS IoT Greengrass",
      "AWS IoT Analytics",
      "AWS IoT Device Defender",
      "Amazon Kinesis Data Firehose"
    ],
    correctAnswer: 0,
    explanation: "O AWS IoT Core gerencia dispositivos IoT em escala global, incluindo autenticação e autorização."
  },
  {
    id: 10,
    text: "Ao usar o AWS IoT Core, qual protocolo é suportado nativamente para comunicação com dispositivos restritos (low-power)?",
    options: [
      "HTTP",
      "MQTT",
      "WebSocket",
      "LoRaWAN",
      "Zigbee"
    ],
    correctAnswer: 1,
    explanation: "O protocolo MQTT é suportado nativamente pelo AWS IoT Core para comunicação com dispositivos de baixo consumo de energia."
  },
  {
    id: 11,
    text: "Uma empresa de satélites precisa processar dados de telemetria em tempo real na AWS após o downlink. Qual serviço permite isso?",
    options: [
      "Amazon Kinesis Data Streams",
      "AWS Ground Station",
      "Amazon S3 Glacier",
      "AWS Snowball Edge",
      "Amazon EC2 Spot Instances"
    ],
    correctAnswer: 1,
    explanation: "O AWS Ground Station permite processar dados de telemetria em tempo real após o downlink de satélites."
  },
  {
    id: 12,
    text: "Qual benefício principal o VMware Cloud on AWS oferece para ambientes híbridos?",
    options: [
      "Migração de VMs sem modificação usando VMware vMotion",
      "Substituição total de licenças VMware por soluções nativas AWS",
      "Gerenciamento unificado via AWS Management Console",
      "Redução de custos com instâncias Spot",
      "Integração direta com Amazon EKS"
    ],
    correctAnswer: 0,
    explanation: "O VMware Cloud on AWS permite a migração de VMs sem modificação usando VMware vMotion, ideal para ambientes híbridos."
  },
  {
    id: 13,
    text: "Qual é a principal funcionalidade do Amazon CodeWhisperer?",
    options: [
      "Gerenciar pipelines de CI/CD",
      "Sugerir trechos de código em tempo real durante o desenvolvimento",
      "Monitorar o desempenho de aplicações em produção",
      "Automatizar a criação de infraestrutura como código",
      "Realizar análise estática de código para vulnerabilidades"
    ],
    correctAnswer: 1,
    explanation: "O Amazon CodeWhisperer sugere trechos de código em tempo real durante o desenvolvimento, aumentando a produtividade dos desenvolvedores."
  },
  {
    id: 14,
    text: "Qual tipo de documento NÃO está disponível no Amazon Artifact?",
    options: [
      "Relatórios de conformidade (SOC, ISO, PCI DSS)",
      "Termos de uso de serviços AWS",
      "Acordos de Nível de Serviço (SLAs)",
      "Políticas de segurança personalizadas",
      "Documentação técnica de APIs"
    ],
    correctAnswer: 4,
    explanation: "O Amazon Artifact fornece relatórios de conformidade, termos de uso e SLAs, mas não documentação técnica de APIs."
  },
  {
    id: 15,
    text: "Qual recomendação do AWS Trusted Advisor está relacionada à otimização de custos?",
    options: [
      "Habilitar o versionamento no Amazon S3",
      "Redimensionar instâncias EC2 subutilizadas",
      "Configurar backups automatizados no Amazon RDS",
      "Habilitar o AWS Shield Advanced",
      "Usar VPC Flow Logs para monitorar tráfego"
    ],
    correctAnswer: 1,
    explanation: "O AWS Trusted Advisor recomenda redimensionar instâncias EC2 subutilizadas para otimizar custos."
  },
  {
    id: 16,
    text: "Qual etapa do AWS CodePipeline é responsável por executar testes automatizados em um ambiente de staging?",
    options: [
      "Source",
      "Build",
      "Test",
      "Deploy",
      "Approval"
    ],
    correctAnswer: 2,
    explanation: "A etapa 'Test' no AWS CodePipeline é responsável por executar testes automatizados em um ambiente de staging."
  },
  {
    id: 17,
    text: "Qual serviço AWS é usado pelo AWS Batch para gerenciar a execução de jobs em contêineres?",
    options: [
      "Amazon ECS",
      "Amazon EKS",
      "AWS Fargate",
      "Amazon EC2 Spot Instances",
      "AWS Lambda"
    ],
    correctAnswer: 0,
    explanation: "O AWS Batch usa o Amazon ECS para gerenciar a execução de jobs em contêineres."
  },
  {
    id: 18,
    text: "Qual cenário é mais adequado para o uso do Amazon Lightsail?",
    options: [
      "Execução de aplicações distribuídas em múltiplas regiões",
      "Hospedagem de um site simples com custo previsível",
      "Processamento de big data usando Hadoop",
      "Treinamento de modelos de machine learning",
      "Gerenciamento de clusters Kubernetes"
    ],
    correctAnswer: 1,
    explanation: "O Amazon Lightsail é ideal para hospedar sites simples com custo previsível e fácil gerenciamento."
  },
  {
    id: 19,
    text: "Qual é a principal vantagem do Amazon Outposts para empresas que precisam de baixa latência?",
    options: [
      "Executar cargas de trabalho localmente com serviços AWS",
      "Reduzir custos com infraestrutura de borda",
      "Eliminar a necessidade de conexão com a AWS",
      "Substituir servidores locais por soluções totalmente na nuvem",
      "Usar instâncias EC2 com desconto"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Outposts permite executar cargas de trabalho localmente com serviços AWS, ideal para cenários que exigem baixa latência."
  },
  {
    id: 20,
    text: "Qual recurso do AWS Direct Connect ajuda a garantir a resiliência de conexões?",
    options: [
      "Usar uma única conexão dedicada",
      "Configurar múltiplos locais de conexão (locations)",
      "Habilitar o AWS Global Accelerator",
      "Usar o Amazon CloudFront para cache",
      "Reduzir a largura de banda para economizar custos"
    ],
    correctAnswer: 1,
    explanation: "Configurar múltiplos locais de conexão no AWS Direct Connect ajuda a garantir a resiliência de conexões."
  },
  {
    id: 21,
    text: "Qual recurso do AWS Elastic Beanstalk permite personalizar a configuração de instâncias EC2?",
    options: [
      "Ambiente multicontêiner",
      "Arquivos de configuração (.ebextensions)",
      "Integração com AWS CodePipeline",
      "Deployment policies",
      "Load balancer automático"
    ],
    correctAnswer: 1,
    explanation: "Os arquivos de configuração (.ebextensions) permitem personalizar a configuração de instâncias EC2 no AWS Elastic Beanstalk."
  },
  {
    id: 22,
    text: "Qual serviço AWS NÃO é suportado nativamente pelo AWS Backup?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon EFS",
      "Amazon S3",
      "AWS Storage Gateway"
    ],
    correctAnswer: 3,
    explanation: "O Amazon S3 não é suportado nativamente pelo AWS Backup."
  },
  {
    id: 23,
    text: "Qual característica do Amazon Ledger Database garante a imutabilidade dos dados?",
    options: [
      "Replicação automática entre regiões",
      "Uso de blockchain para validação",
      "Registros criptograficamente verificáveis",
      "Integração com Amazon QLDB",
      "Backup contínuo para o Amazon S3"
    ],
    correctAnswer: 2,
    explanation: "Os registros criptograficamente verificáveis garantem a imutabilidade dos dados no Amazon Ledger Database."
  },
  {
    id: 24,
    text: "Qual tipo de ataque é mitigado pelo AWS Shield Advanced?",
    options: [
      "Ataques de injeção SQL",
      "Ataques de negação de serviço (DDoS)",
      "Ataques de phishing",
      "Ataques de força bruta",
      "Ataques de cross-site scripting (XSS)"
    ],
    correctAnswer: 1,
    explanation: "O AWS Shield Advanced mitiga ataques de negação de serviço (DDoS)."
  },
  {
    id: 25,
    text: "Qual condição NÃO pode ser usada em uma regra do AWS WAF?",
    options: [
      "Bloquear tráfego de um país específico",
      "Detectar padrões de SQL injection",
      "Limitar a taxa de requisições por IP",
      "Bloquear tráfego com base em headers HTTP",
      "Criptografar dados em trânsito"
    ],
    correctAnswer: 4,
    explanation: "O AWS WAF não pode criptografar dados em trânsito, mas pode bloquear tráfego com base em condições como país, SQL injection e headers HTTP."
  },
  {
    id: 26,
    text: "Qual tipo de vulnerabilidade o Amazon Inspector NÃO identifica?",
    options: [
      "Vulnerabilidades de rede",
      "Configurações inseguras de instâncias EC2",
      "Vulnerabilidades em aplicações web",
      "Problemas de conformidade com políticas de segurança",
      "Vulnerabilidades em contêineres Docker"
    ],
    correctAnswer: 2,
    explanation: "O Amazon Inspector não identifica vulnerabilidades em aplicações web, mas foca em vulnerabilidades de rede, configurações de instâncias EC2 e contêineres."
  },
  {
    id: 27,
    text: "Qual tipo de ameaça o Amazon GuardDuty pode detectar?",
    options: [
      "Acesso não autorizado a buckets do S3",
      "Uso excessivo de recursos do RDS",
      "Tráfego de rede incomum entre instâncias EC2",
      "Falhas de autenticação no IAM",
      "Todas as alternativas anteriores"
    ],
    correctAnswer: 4,
    explanation: "O Amazon GuardDuty pode detectar todas as ameaças mencionadas, incluindo acesso não autorizado, tráfego incomum e falhas de autenticação."
  },
  {
    id: 28,
    text: "Qual componente do Amazon SageMaker é usado para treinar modelos de machine learning em escala?",
    options: [
      "SageMaker Studio",
      "SageMaker Autopilot",
      "SageMaker Ground Truth",
      "SageMaker Training Jobs",
      "SageMaker Neo"
    ],
    correctAnswer: 3,
    explanation: "O SageMaker Training Jobs é usado para treinar modelos de machine learning em escala."
  },
  {
    id: 29,
    text: "Qual é o foco principal do Amazon Braket?",
    options: [
      "Desenvolvimento de aplicações de realidade aumentada",
      "Computação quântica",
      "Análise de big data",
      "Processamento de linguagem natural",
      "Gerenciamento de dispositivos IoT"
    ],
    correctAnswer: 1,
    explanation: "O Amazon Braket é focado em computação quântica."
  },
  {
    id: 30,
    text: "Qual programa AWS ajuda startups a crescer com créditos e suporte técnico?",
    options: [
      "AWS Activate",
      "AWS Partner Network",
      "AWS Marketplace",
      "AWS IQ",
      "AWS Managed Services"
    ],
    correctAnswer: 0,
    explanation: "O AWS Activate oferece créditos e suporte técnico para startups."
  },
  {
    id: 31,
    text: "Qual é o principal benefício do AWS IQ para desenvolvedores?",
    options: [
      "Acesso a especialistas certificados da AWS para projetos sob demanda",
      "Gerenciamento automatizado de infraestrutura",
      "Treinamento gratuito em machine learning",
      "Integração com o GitHub para CI/CD",
      "Monitoramento de custos em tempo real"
    ],
    correctAnswer: 0,
    explanation: "O AWS IQ permite que desenvolvedores acessem especialistas certificados da AWS para projetos sob demanda."
  },
  {
    id: 32,
    text: "Qual serviço NÃO é gerenciado pelo AWS Managed Services (AMS)?",
    options: [
      "Amazon EC2",
      "Amazon RDS",
      "AWS Lambda",
      "Amazon S3",
      "AWS IAM"
    ],
    correctAnswer: 2,
    explanation: "O AWS Lambda não é gerenciado pelo AWS Managed Services (AMS)."
  },
  {
    id: 33,
    text: "Qual é a duração máxima de uma sessão temporária gerada pelo Amazon STS?",
    options: [
      "1 hora",
      "6 horas",
      "12 horas",
      "24 horas",
      "36 horas"
    ],
    correctAnswer: 4,
    explanation: "A duração máxima de uma sessão temporária gerada pelo Amazon STS é de 36 horas."
  },
  {
    id: 34,
    text: "Qual tipo de teste NÃO é suportado pelo AWS Device Farm?",
    options: [
      "Testes de interface de usuário (UI)",
      "Testes de desempenho de rede",
      "Testes de compatibilidade com dispositivos",
      "Testes de carga em APIs",
      "Testes de integração contínua"
    ],
    correctAnswer: 3,
    explanation: "O AWS Device Farm não suporta testes de carga em APIs."
  },
  {
    id: 35,
    text: "Qual protocolo é suportado nativamente pelo AWS AppSync para APIs GraphQL?",
    options: [
      "HTTP",
      "WebSocket",
      "MQTT",
      "FTP",
      "SMTP"
    ],
    correctAnswer: 1,
    explanation: "O AWS AppSync suporta nativamente o protocolo WebSocket para APIs GraphQL."
  },
  {
    id: 36,
    text: "Qual recurso do AWS Amplify é usado para implantar aplicações web e móveis?",
    options: [
      "Amplify Console",
      "Amplify CLI",
      "Amplify Libraries",
      "Amplify Hosting",
      "Amplify Analytics"
    ],
    correctAnswer: 3,
    explanation: "O Amplify Hosting é usado para implantar aplicações web e móveis."
  },
  {
    id: 37,
    text: "Qual serviço AWS é integrado ao AWS AppFlow para transferência de dados entre aplicações SaaS e AWS?",
    options: [
      "Amazon S3",
      "Amazon Redshift",
      "Amazon RDS",
      "Amazon DynamoDB",
      "Todas as alternativas anteriores"
    ],
    correctAnswer: 4,
    explanation: "O AWS AppFlow integra-se com Amazon S3, Redshift, RDS e DynamoDB para transferência de dados."
  },
  {
    id: 38,
    text: "Qual é o principal uso do AWS AppStream 2.0?",
    options: [
      "Streaming de vídeos sob demanda",
      "Fornecimento de aplicações desktop virtuais",
      "Processamento de big data em tempo real",
      "Gerenciamento de dispositivos IoT",
      "Hospedagem de sites estáticos"
    ],
    correctAnswer: 1,
    explanation: "O AWS AppStream 2.0 fornece aplicações desktop virtuais para usuários."
  },
  {
    id: 39,
    text: "Qual recurso do Amazon Kendra permite melhorar a precisão das respostas em pesquisas?",
    options: [
      "Integração com Amazon S3",
      "Uso de machine learning para entender o contexto",
      "Indexação automática de documentos",
      "Suporte a múltiplos idiomas",
      "Gerenciamento de permissões via IAM"
    ],
    correctAnswer: 1,
    explanation: "O Amazon Kendra usa machine learning para entender o contexto e melhorar a precisão das respostas."
  },
  {
    id: 40,
    text: "Qual tarefa NÃO é realizada pelo Amazon Comprehend?",
    options: [
      "Análise de sentimentos",
      "Tradução automática de textos",
      "Extração de frases-chave",
      "Detecção de entidades",
      "Classificação de documentos"
    ],
    correctAnswer: 1,
    explanation: "O Amazon Comprehend não realiza tradução automática de textos."
  },
  {
    id: 41,
    text: "Qual recurso do Amazon Polly permite personalizar a pronúncia de palavras específicas?",
    options: [
      "Lexicons",
      "Speech Marks",
      "Neural Text-to-Speech",
      "SSML (Speech Synthesis Markup Language)",
      "Voice ID"
    ],
    correctAnswer: 0,
    explanation: "Os Lexicons permitem personalizar a pronúncia de palavras específicas no Amazon Polly."
  },
  {
    id: 42,
    text: "Qual benefício principal o AWS Service Catalog oferece para organizações?",
    options: [
      "Gerenciamento centralizado de recursos AWS",
      "Automação de pipelines de CI/CD",
      "Controle de custos com orçamentos",
      "Monitoramento de desempenho em tempo real",
      "Gerenciamento de permissões via IAM"
    ],
    correctAnswer: 0,
    explanation: "O AWS Service Catalog oferece gerenciamento centralizado de recursos AWS para organizações."
  },
  {
    id: 43,
    text: "Qual problema o AWS PrivateLink resolve?",
    options: [
      "Expor serviços publicamente na internet",
      "Conectar VPCs sem usar a internet",
      "Reduzir a latência de conexões globais",
      "Gerenciar tráfego entre regiões AWS",
      "Criptografar dados em trânsito"
    ],
    correctAnswer: 1,
    explanation: "O AWS PrivateLink permite conectar VPCs sem usar a internet, garantindo segurança e privacidade."
  },
  {
    id: 44,
    text: "Qual tipo de tráfego NÃO pode ser monitorado com VPC Flow Logs?",
    options: [
      "Tráfego entre instâncias EC2",
      "Tráfego de e para uma interface de rede",
      "Tráfego DNS dentro de uma VPC",
      "Tráfego rejeitado por um security group",
      "Tráfego aceito por um NACL"
    ],
    correctAnswer: 2,
    explanation: "O tráfego DNS dentro de uma VPC não pode ser monitorado com VPC Flow Logs."
  },
  {
    id: 45,
    text: "Qual tipo de VPC Endpoint é usado para acessar serviços AWS como o Amazon S3?",
    options: [
      "Interface Endpoint",
      "Gateway Endpoint",
      "PrivateLink Endpoint",
      "Direct Connect Endpoint",
      "Transit Gateway Endpoint"
    ],
    correctAnswer: 1,
    explanation: "O Gateway Endpoint é usado para acessar serviços como o Amazon S3."
  },
  {
    id: 46,
    text: "Qual recurso do Amazon EC2 permite aumentar o desempenho de EBS volumes?",
    options: [
      "Placement Groups",
      "Elastic Network Interfaces",
      "Enhanced Networking",
      "Elastic Fabric Adapter",
      "Provisioned IOPS (PIOPS)"
    ],
    correctAnswer: 4,
    explanation: "O Provisioned IOPS (PIOPS) aumenta o desempenho de volumes EBS."
  },
  {
    id: 47,
    text: "Qual serviço AWS é usado para acionar uma função Lambda em resposta a eventos do Amazon S3?",
    options: [
      "Amazon EventBridge",
      "Amazon S3 Event Notifications",
      "AWS Step Functions",
      "Amazon CloudWatch Events",
      "AWS Config"
    ],
    correctAnswer: 1,
    explanation: "O Amazon S3 Event Notifications aciona funções Lambda em resposta a eventos no S3."
  },
  {
    id: 48,
    text: "Qual recurso do Amazon ECS permite escalar automaticamente tarefas com base na utilização de CPU?",
    options: [
      "Service Auto Scaling",
      "Cluster Auto Scaling",
      "Task Placement Policies",
      "Capacity Providers",
      "Launch Types"
    ],
    correctAnswer: 0,
    explanation: "O Service Auto Scaling no Amazon ECS permite escalar tarefas com base na utilização de CPU."
  },
  {
    id: 49,
    text: "Qual componente do Amazon EKS gerencia a comunicação entre pods Kubernetes?",
    options: [
      "kube-proxy",
      "CNI (Container Network Interface)",
      "etcd",
      "Control Plane",
      "Worker Nodes"
    ],
    correctAnswer: 1,
    explanation: "O CNI (Container Network Interface) gerencia a comunicação entre pods no Amazon EKS."
  },
  {
    id: 50,
    text: "Qual benefício principal o AWS Fargate oferece em relação ao Amazon ECS?",
    options: [
      "Gerenciamento automático de servidores",
      "Suporte a contêineres Windows",
      "Integração com o Amazon EKS",
      "Redução de custos com instâncias Spot",
      "Escalonamento horizontal automático"
    ],
    correctAnswer: 0,
    explanation: "O AWS Fargate oferece gerenciamento automático de servidores, eliminando a necessidade de gerenciar instâncias EC2."
  },
  {
    id: 51,
    text: "Qual recurso do Amazon S3 permite armazenar dados com acesso imediato, mas custo reduzido?",
    options: [
      "S3 Intelligent-Tiering",
      "S3 Standard",
      "S3 Glacier",
      "S3 One Zone-IA",
      "S3 Outposts"
    ],
    correctAnswer: 3,
    explanation: "O S3 One Zone-IA oferece acesso imediato com custo reduzido, armazenando dados em uma única zona de disponibilidade."
  },
  {
    id: 52,
    text: "Qual tipo de volume EBS é recomendado para cargas de trabalho de alta performance, como bancos de dados?",
    options: [
      "gp2",
      "io1",
      "st1",
      "sc1",
      "standard"
    ],
    correctAnswer: 1,
    explanation: "O volume io1 é recomendado para cargas de trabalho de alta performance, como bancos de dados."
  },
  {
    id: 53,
    text: "Qual recurso do Amazon EFS permite acesso simultâneo a arquivos de múltiplas instâncias EC2?",
    options: [
      "Multi-AZ",
      "Lifecycle Management",
      "Throughput Mode",
      "Performance Mode",
      "Access Points"
    ],
    correctAnswer: 4,
    explanation: "Os Access Points no Amazon EFS permitem acesso simultâneo a arquivos de múltiplas instâncias EC2."
  },
  {
    id: 54,
    text: "Qual serviço AWS NÃO é suportado pelo AWS Backup?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon EFS",
      "Amazon S3",
      "AWS Storage Gateway"
    ],
    correctAnswer: 3,
    explanation: "O Amazon S3 não é suportado pelo AWS Backup."
  },
  {
    id: 55,
    text: "Qual recurso do Amazon RDS permite criar réplicas de leitura para escalonamento horizontal?",
    options: [
      "Multi-AZ",
      "Read Replicas",
      "Automated Backups",
      "Parameter Groups",
      "Option Groups"
    ],
    correctAnswer: 1,
    explanation: "As Read Replicas no Amazon RDS permitem escalonamento horizontal de leitura."
  },
  {
    id: 56,
    text: "Qual recurso do Amazon DynamoDB permite recuperar itens em ordem com base em uma chave de partição?",
    options: [
      "Query",
      "Scan",
      "BatchGetItem",
      "GetItem",
      "TransactWriteItems"
    ],
    correctAnswer: 0,
    explanation: "O recurso Query no Amazon DynamoDB permite recuperar itens em ordem com base em uma chave de partição."
  },
  {
    id: 57,
    text: "Qual recurso do Amazon Aurora permite escalonamento horizontal de leitura?",
    options: [
      "Aurora Replicas",
      "Aurora Global Database",
      "Aurora Serverless",
      "Aurora Backtrack",
      "Aurora Multi-Master"
    ],
    correctAnswer: 0,
    explanation: "As Aurora Replicas permitem escalonamento horizontal de leitura no Amazon Aurora."
  },
  {
    id: 58,
    text: "Qual recurso do Amazon Redshift permite distribuir dados uniformemente entre nós?",
    options: [
      "DISTKEY",
      "SORTKEY",
      "ENCODE",
      "COMPROWS",
      "COPY"
    ],
    correctAnswer: 0,
    explanation: "O DISTKEY no Amazon Redshift distribui dados uniformemente entre nós."
  },
  {
    id: 59,
    text: "Qual mecanismo de cache NÃO é suportado pelo Amazon ElastiCache?",
    options: [
      "Redis",
      "Memcached",
      "Hazelcast",
      "Redis Cluster",
      "Memcached Cluster"
    ],
    correctAnswer: 2,
    explanation: "O Hazelcast não é suportado pelo Amazon ElastiCache."
  },
  {
    id: 60,
    text: "Qual recurso do Amazon VPC permite conectar redes locais à AWS?",
    options: [
      "Internet Gateway",
      "NAT Gateway",
      "VPN Gateway",
      "Direct Connect Gateway",
      "Transit Gateway"
    ],
    correctAnswer: 2,
    explanation: "O VPN Gateway permite conectar redes locais à AWS."
  },
  {
    id: 61,
    text: "Qual recurso do AWS Direct Connect permite conectar múltiplas VPCs a uma conexão dedicada?",
    options: [
      "Direct Connect Gateway",
      "VPN Gateway",
      "Transit Gateway",
      "Virtual Interface",
      "Private Virtual Interface"
    ],
    correctAnswer: 0,
    explanation: "O Direct Connect Gateway permite conectar múltiplas VPCs a uma conexão dedicada."
  },
  {
    id: 62,
    text: "Qual recurso do Amazon CloudFront permite personalizar o comportamento de cache com base em headers HTTP?",
    options: [
      "Cache Policies",
      "Origin Request Policies",
      "Lambda@Edge",
      "Field-Level Encryption",
      "Real-Time Logs"
    ],
    correctAnswer: 0,
    explanation: "As Cache Policies permitem personalizar o comportamento de cache com base em headers HTTP."
  },
  {
    id: 63,
    text: "Qual tipo de ELB é recomendado para aplicações que exigem baixa latência e alta performance?",
    options: [
      "Application Load Balancer (ALB)",
      "Network Load Balancer (NLB)",
      "Classic Load Balancer (CLB)",
      "Gateway Load Balancer (GWLB)",
      "Internal Load Balancer"
    ],
    correctAnswer: 1,
    explanation: "O Network Load Balancer (NLB) é recomendado para aplicações que exigem baixa latência e alta performance."
  },
  {
    id: 64,
    text: "Qual recurso do AWS Route 53 permite rotear tráfego com base na localização geográfica do usuário?",
    options: [
      "Latency-Based Routing",
      "Geolocation Routing",
      "Weighted Routing",
      "Failover Routing",
      "Multivalue Answer Routing"
    ],
    correctAnswer: 1,
    explanation: "O Geolocation Routing no AWS Route 53 permite rotear tráfego com base na localização geográfica do usuário."
  },
  {
    id: 65,
    text: "Qual recurso do AWS IAM permite conceder permissões temporárias a recursos?",
    options: [
      "IAM Roles",
      "IAM Policies",
      "IAM Groups",
      "IAM Users",
      "IAM Temporary Security Credentials"
    ],
    correctAnswer: 4,
    explanation: "O IAM Temporary Security Credentials permite conceder permissões temporárias a recursos."
  },
  {
    id: 66,
    text: "Qual recurso do AWS KMS permite gerenciar chaves de criptografia em múltiplas contas AWS?",
    options: [
      "Key Policies",
      "Customer Master Keys (CMKs)",
      "Key Rotation",
      "Multi-Region Keys",
      "AWS KMS Grants"
    ],
    correctAnswer: 3,
    explanation: "As Multi-Region Keys permitem gerenciar chaves de criptografia em múltiplas contas AWS."
  },
  {
    id: 67,
    text: "Qual recurso do Amazon CloudWatch permite criar alarmes com base em métricas personalizadas?",
    options: [
      "CloudWatch Logs",
      "CloudWatch Events",
      "CloudWatch Metrics",
      "CloudWatch Alarms",
      "CloudWatch Dashboards"
    ],
    correctAnswer: 3,
    explanation: "O CloudWatch Alarms permite criar alarmes com base em métricas personalizadas."
  },
  {
    id: 68,
    text: "Qual recurso do AWS CloudTrail permite rastrear alterações em recursos AWS?",
    options: [
      "CloudTrail Insights",
      "CloudTrail Logs",
      "CloudTrail Events",
      "CloudTrail Trails",
      "CloudTrail Alerts"
    ],
    correctAnswer: 2,
    explanation: "O CloudTrail Events permite rastrear alterações em recursos AWS."
  },
  {
    id: 69,
    text: "Qual recurso do AWS Config permite avaliar a conformidade de recursos com políticas personalizadas?",
    options: [
      "Config Rules",
      "Config Aggregator",
      "Config Recorder",
      "Config History",
      "Config Dashboard"
    ],
    correctAnswer: 0,
    explanation: "As Config Rules permitem avaliar a conformidade de recursos com políticas personalizadas."
  },
  {
    id: 70,
    text: "Qual recomendação do AWS Trusted Advisor está relacionada à segurança?",
    options: [
      "Habilitar o versionamento no Amazon S3",
      "Redimensionar instâncias EC2 subutilizadas",
      "Configurar backups automatizados no Amazon RDS",
      "Habilitar o AWS Shield Advanced",
      "Usar VPC Flow Logs para monitorar tráfego"
    ],
    correctAnswer: 3,
    explanation: "Habilitar o AWS Shield Advanced é uma recomendação do AWS Trusted Advisor relacionada à segurança."
  },
  {
    id: 71,
    text: "Qual pilar do AWS Well-Architected Framework é focado em otimizar custos sem sacrificar performance?",
    options: [
      "Segurança",
      "Confiabilidade",
      "Excelência operacional",
      "Eficiência de performance",
      "Otimização de custos"
    ],
    correctAnswer: 4,
    explanation: "O pilar de 'Otimização de custos' no AWS Well-Architected Framework foca em otimizar custos sem sacrificar performance."
  },
  {
    id: 72,
    text: "Qual recurso do Amazon SQS (Simple Queue Service) permite garantir que uma mensagem seja processada apenas uma vez, mesmo que seja entregue múltiplas vezes?",
    options: [
      "Visibilidade de mensagem",
      "FIFO (First-In-First-Out)",
      "DLQ (Dead Letter Queue)",
      "Long Polling",
      "Filtros de mensagem"
    ],
    correctAnswer: 1,
    explanation: "O recurso FIFO (First-In-First-Out) do Amazon SQS garante que as mensagens sejam processadas na ordem correta e apenas uma vez, mesmo que sejam entregues múltiplas vezes."
  },
  {
    id: 73,
    text: "Qual recurso do AWS CloudFormation permite reutilizar templates para criar stacks em múltiplas contas ou regiões?",
    options: [
      "Change Sets",
      "Nested Stacks",
      "StackSets",
      "Drift Detection",
      "Custom Resources"
    ],
    correctAnswer: 2,
    explanation: "Os StackSets permitem reutilizar templates do CloudFormation para criar e gerenciar stacks em múltiplas contas ou regiões de forma centralizada."
  },
  {
    id: 74,
    text: "Qual recurso do Amazon SNS (Simple Notification Service) permite enviar notificações para dispositivos móveis?",
    options: [
      "Tópicos",
      "Mobile Push Notifications",
      "Filtros de mensagem",
      "DLQ (Dead Letter Queue)",
      "Long Polling"
    ],
    correctAnswer: 1,
    explanation: "O recurso Mobile Push Notifications do Amazon SNS permite enviar notificações para dispositivos móveis, como iOS e Android."
  },
  {
    id: 75,
    text: "Qual recurso do AWS Secrets Manager permite rotacionar automaticamente credenciais de banco de dados?",
    options: [
      "Políticas de segredo",
      "Rotação automática de segredos",
      "Integração com Amazon RDS",
      "Versões de segredo",
      "Criptografia de segredo"
    ],
    correctAnswer: 1,
    explanation: "A rotação automática de segredos no AWS Secrets Manager permite rotacionar credenciais de banco de dados automaticamente, garantindo maior segurança."
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