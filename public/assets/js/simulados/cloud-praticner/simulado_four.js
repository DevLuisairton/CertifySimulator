const originalQuestions = [
  {
    id: 1,
    text: "De acordo com as práticas recomendadas de segurança, como uma instância do Amazon EC2 deve receber acesso a um bucket do Amazon S3?",
    options: [
      "Codifique a chave secreta e a chave de acesso de um usuário IAM diretamente no aplicativo e faça upload do arquivo.",
      "Armazene a chave secreta e a chave de acesso do usuário IAM em um arquivo de texto na instância EC2, leia as chaves e faça upload do arquivo.",
      "Modifique a política do bucket S3 para que qualquer serviço possa fazer upload para ela a qualquer momento.",
      "Faça com que a instância do EC2 assuma uma função(role) para obter os privilégios para fazer upload do arquivo."
    ],
    correctAnswer: 3,
    explanation: "A melhor prática de segurança é usar uma função IAM (role) para conceder permissões temporárias à instância EC2, evitando o armazenamento de credenciais fixas no código ou na instância."
  },
  {
    id: 2,
    text: "Qual opção é uma perspectiva que inclui recursos básicos do AWS Cloud Adoption Framework (AWS CAF)?",
    options: [
      "Sustentabilidade",
      "Eficiência de desempenho",
      "Governança",
      "Confiabilidade"
    ],
    correctAnswer: 2,
    explanation: "A perspectiva de Governança no AWS CAF inclui recursos para garantir que os recursos de TI atendam aos requisitos de negócios e regulamentações."
  },
  {
    id: 3,
    text: "Uma empresa está executando e gerenciando seu próprio ambiente Docker em instâncias do Amazon EC2. A empresa deseja uma alternativa para ajudar a gerenciar o tamanho do cluster, a programação e a manutenção do ambiente. Qual serviço da AWS atende a esses requisitos?",
    options: [
      "AWS Lambda",
      "Amazon RDS",
      "AWS Fargate",
      "Amazon Athena"
    ],
    correctAnswer: 2,
    explanation: "O AWS Fargate é um serviço que permite executar contêineres sem gerenciar servidores ou clusters, ideal para simplificar a execução de aplicativos em contêineres."
  },
  {
    id: 4,
    text: "Uma empresa deseja executar um banco de dados NoSQL em instâncias do Amazon EC2. Qual tarefa é de responsabilidade da AWS neste cenário?",
    options: [
      "Atualizar o sistema operacional convidado das instâncias EC2.",
      "Manter a alta disponibilidade na camada de banco de dados.",
      "Corrigir a infraestrutura física que hospeda as instâncias do EC2.",
      "Configurar o firewall do grupo de segurança."
    ],
    correctAnswer: 2,
    explanation: "No modelo de responsabilidade compartilhada, a AWS é responsável pela infraestrutura física, incluindo hardware e data centers."
  },
  {
    id: 5,
    text: "Quais das opções a seguir são benefícios de usar o AWS Trusted Advisor? (Escolha dois.)",
    options: [
      "Fornecimento de orquestração de contêineres de alto desempenho.",
      "Criação e rotação de chaves de criptografia.",
      "Detectando recursos subutilizados para economizar custos.",
      "Melhorar a segurança monitorando proativamente o ambiente AWS.",
      "Implementação de marcação forçada em recursos da AWS."
    ],
    correctAnswer: [2, 3],
    explanation: "O AWS Trusted Advisor ajuda a otimizar custos detectando recursos subutilizados e melhora a segurança monitorando proativamente o ambiente AWS."
  },
  {
    id: 6,
    text: "Qual das opções a seguir é uma vantagem que os usuários experimentam ao migrar cargas de trabalho locais para a Nuvem AWS?",
    options: [
      "Eliminação de despesas com operação e manutenção de data centers.",
      "Descontos de preço idênticos aos descontos de fornecedores de hardware.",
      "Distribuição de todos os controles operacionais para AWS.",
      "Eliminação de despesas operacionais."
    ],
    correctAnswer: 0,
    explanation: "Ao migrar para a AWS, as empresas eliminam a necessidade de operar e manter data centers locais, reduzindo custos de infraestrutura física."
  },
  {
    id: 7,
    text: "Qual serviço ou ferramenta da AWS ajuda os usuários a visualizar, compreender e gerenciar gastos e uso ao longo do tempo?",
    options: [
      "AWS Organizations",
      "AWS Pricing Calculator",
      "AWS Cost Explorer",
      "AWS Service Catalog"
    ],
    correctAnswer: 2,
    explanation: "O AWS Cost Explorer permite visualizar e analisar custos e uso da AWS ao longo do tempo, ajudando na gestão de gastos."
  },
  {
    id: 8,
    text: "Uma plataforma de e-learning precisa executar um aplicativo durante 2 meses por ano. O aplicativo será implantado em instâncias do Amazon EC2. Qualquer tempo de inatividade do aplicativo durante esses 2 meses deve ser evitado. Qual opção de compra do EC2 atenderá a esses requisitos de maneira MAIS econômica?",
    options: [
      "Instâncias Reservadas",
      "Hosts Dedicados",
      "Instâncias Spot",
      "Instâncias Sob Demanda"
    ],
    correctAnswer: 0,
    explanation: "Instâncias Reservadas oferecem descontos significativos em comparação com instâncias sob demanda, sendo ideais para cargas de trabalho previsíveis e de longo prazo."
  },
  {
    id: 9,
    text: "Um desenvolvedor deseja implantar um aplicativo rapidamente na AWS sem criar manualmente os recursos necessários. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      "Amazon EC2",
      "AWS Elastic Beanstalk",
      "AWS CodeBuild",
      "Amazon Personalize"
    ],
    correctAnswer: 1,
    explanation: "O AWS Elastic Beanstalk automatiza a implantação e o gerenciamento de aplicativos, permitindo que os desenvolvedores se concentrem no código."
  },
  {
    id: 10,
    text: "Uma empresa está armazenando dados confidenciais de clientes em um bucket do Amazon S3. A empresa deseja proteger os dados contra exclusão ou substituição acidental. Qual recurso do S3 a empresa deve usar para atender a esses requisitos?",
    options: [
      "Regras do ciclo de vida",
      "Versionamento",
      "Políticas de bucket",
      "Criptografia do lado do servidor"
    ],
    correctAnswer: 1,
    explanation: "O versionamento do S3 permite manter várias versões de um objeto, protegendo contra exclusão ou substituição acidental."
  },
  {
    id: 11,
    text: "Qual opção é uma localização física da infraestrutura global da AWS?",
    options: [
      "AWS DataSync",
      "Região AWS",
      "Amazon Connect",
      "AWS Organizations"
    ],
    correctAnswer: 1,
    explanation: "Uma Região AWS é uma localização física composta por múltiplas Zonas de Disponibilidade, onde a infraestrutura da AWS está hospedada."
  },
  {
    id: 12,
    text: "Uma empresa deseja proteger suas informações, sistemas e ativos da Nuvem AWS enquanto executa tarefas de avaliação e mitigação de riscos. Qual pilar do AWS Well-Architected Framework é apoiado por essas metas?",
    options: [
      "Segurança",
      "Confiabilidade",
      "Excelência operacional",
      "Eficiência de desempenho"
    ],
    correctAnswer: 0,
    explanation: "O pilar de Segurança do AWS Well-Architected Framework foca na proteção de informações, sistemas e ativos, além de avaliação e mitigação de riscos."
  },
  {
    id: 13,
    text: "Qual é o propósito de ter um gateway de internet dentro de uma VPC?",
    options: [
      "Para criar uma conexão VPN com a VPC.",
      "Para impor restrições de largura de banda ao tráfego da Internet.",
      "Para balancear a carga do tráfego da Internet nas instâncias do Amazon EC2.",
      "Para permitir a comunicação entre a VPC e a Internet."
    ],
    correctAnswer: 3,
    explanation: "Um gateway de internet permite que instâncias em uma VPC se comuniquem com a Internet, fornecendo conectividade pública."
  },
  {
    id: 14,
    text: "Uma empresa está executando um aplicativo local monolítico que não é escalonável e é difícil de manter. A empresa tem um plano para migrar o aplicativo para AWS e dividir o aplicativo em microsserviços. Qual prática recomendada do AWS Well-Architected Framework a empresa está seguindo com este plano?",
    options: [
      "Integre testes funcionais como parte da implantação da AWS.",
      "Use a automação para implantar mudanças.",
      "Implante o aplicativo em vários locais.",
      "Implementar dependências fracamente acopladas."
    ],
    correctAnswer: 3,
    explanation: "Dividir um aplicativo monolítico em microsserviços com dependências fracamente acopladas melhora a escalabilidade e a manutenção."
  },
  {
    id: 15,
    text: "Quais tarefas são responsabilidades do cliente, de acordo com o modelo de responsabilidade compartilhada da AWS? (Escolha dois.)",
    options: [
      "Configurar o grupo de segurança fornecido pela AWS.",
      "Classificar os ativos da empresa na Nuvem AWS.",
      "Determine quais zonas de disponibilidade usar para buckets do Amazon S3.",
      "Corrigir ou atualizar o Amazon DynamoDB.",
      "Selecione instâncias do Amazon EC2 para executar o AWS Lambda."
    ],
    correctAnswer: [0, 1],
    explanation: "No modelo de responsabilidade compartilhada, o cliente é responsável por configurar grupos de segurança e classificar ativos, enquanto a AWS gerencia a infraestrutura física."
  },
  {
    id: 16,
    text: "Quais das alternativas a seguir são pilares do AWS Well-Architected Framework? (Escolha dois.)",
    options: [
      "Disponibilidade",
      "Confiabilidade",
      "Escalabilidade",
      "Design responsivo",
      "Excelência operacional"
    ],
    correctAnswer: [1, 4],
    explanation: "Os pilares do AWS Well-Architected Framework incluem Confiabilidade e Excelência Operacional, entre outros."
  },
  {
    id: 17,
    text: "Qual serviço ou recurso da AWS é usado para enviar mensagens de texto e e-mail de aplicativos distribuídos?",
    options: [
      "Amazon EC2",
      "Amazon Simple Notification Service (Amazon SNS)",
      "Alertas do Amazon CloudWatch",
      "Amazon Simple Queue Service (Amazon SQS)"
    ],
    correctAnswer: 1,
    explanation: "O Amazon SNS permite enviar mensagens de texto, e-mails e notificações push para aplicativos distribuídos."
  },
  {
    id: 18,
    text: "Um usuário precisa de acesso programático aos recursos da AWS por meio da AWS CLI ou da API da AWS. Qual opção fornecerá ao usuário o acesso apropriado?",
    options: [
      "Access keys (Chaves de Acesso)",
      "Amazon Inspector",
      "SSH Public Keys (Chaves Púbicas SSH)",
      "Chaves do AWS Key Management Service (AWS KMS)"
    ],
    correctAnswer: 0,
    explanation: "As chaves de acesso (Access keys) são usadas para acesso programático via AWS CLI ou API."
  },
  {
    id: 19,
    text: "Uma empresa executa milhares de simulações simultâneas usando o AWS Batch. Cada simulação não tem estado, é tolerante a falhas e dura até 3 horas. Qual modelo de precificação permite à empresa otimizar custos e atender a esses requisitos?",
    options: [
      "Instâncias Reservadas",
      "Instâncias Spot",
      "Instâncias Sob Demanda",
      "Instâncias Dedicadas"
    ],
    correctAnswer: 1,
    explanation: "Instâncias Spot são ideais para cargas de trabalho tolerantes a falhas e de curta duração, oferecendo custos significativamente menores."
  },
  {
    id: 20,
    text: "Qual serviço permite que os clientes auditem chamadas de API em suas contas da AWS?",
    options: [
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "Amazon Inspector",
      "AWS X-Ray"
    ],
    correctAnswer: 0,
    explanation: "O AWS CloudTrail registra todas as chamadas de API feitas em uma conta da AWS, permitindo auditoria e conformidade."
  },
  {
    id: 21,
    text: "Um engenheiro de rede precisa construir uma arquitetura de nuvem híbrida conectando redes locais à Nuvem AWS usando o AWS Direct Connect. A empresa possui algumas VPCs em uma única região da AWS e espera aumentar o número de VPCs para centenas ao longo do tempo. Qual serviço ou recurso da AWS o engenheiro deve usar para simplificar e dimensionar essa conectividade à medida que o número de VPCs aumenta?",
    options: [
      "VPC endpoints",
      "AWS Transit Gateway",
      "Amazon Route 53",
      "AWS Secrets Manager"
    ],
    correctAnswer: 1,
    explanation: "O AWS Transit Gateway simplifica a conectividade entre VPCs e redes locais, permitindo escalabilidade à medida que o número de VPCs aumenta."
  },
  {
    id: 22,
    text: "Qual serviço AWS é usado para fornecer criptografia para Amazon EBS?",
    options: [
      "AWS KMS",
      "AWS Config",
      "AWS Certificate Manager",
      "AWS Systems Manager"
    ],
    correctAnswer: 0,
    explanation: "O AWS Key Management Service (KMS) é usado para gerenciar chaves de criptografia e fornecer criptografia para volumes do Amazon EBS."
  },
  {
    id: 23,
    text: "Uma empresa deseja gerenciar seus recursos da Nuvem AWS por meio de uma interface web. Qual serviço da AWS atenderá a esse requisito?",
    options: [
      "AWS Management Console",
      "AWS CLI",
      "AWS SDK",
      "AWS Cloud9"
    ],
    correctAnswer: 0,
    explanation: "O AWS Management Console é uma interface web que permite gerenciar recursos da AWS de forma visual e intuitiva."
  },
  {
    id: 24,
    text: "Uma empresa possui 5 TB de dados armazenados no Amazon S3. A empresa planeja ocasionalmente realizar consultas nos dados para análise. Qual serviço da AWS a empresa deve usar para executar essas consultas da maneira MAIS econômica?",
    options: [
      "Amazon Redshift",
      "Amazon Athena",
      "Amazon Kinesis",
      "Amazon RDS"
    ],
    correctAnswer: 1,
    explanation: "O Amazon Athena permite consultar dados diretamente no Amazon S3 usando SQL, sem a necessidade de provisionar infraestrutura, sendo uma opção econômica para análises ocasionais."
  },
  {
    id: 25,
    text: "Quais das opções a seguir são vantagens da Nuvem AWS? (Escolha dois.)",
    options: [
      "Trocar despesas variáveis por despesas de capital",
      "Elevadas economias de escala",
      "Lançar globalmente em minutos",
      "Foco no gerenciamento da infraestrutura de hardware",
      "Superprovisão para garantir capacidade"
    ],
    correctAnswer: [1, 2],
    explanation: "A AWS oferece economias de escala e a capacidade de lançar globalmente em minutos, eliminando a necessidade de gerenciar infraestrutura de hardware."
  },
  {
    id: 26,
    text: "Qual benefício da Nuvem AWS é demonstrado pela capacidade de uma arquitetura de resistir a falhas com tempo de inatividade mínimo?",
    options: [
      "Agilidade",
      "Elasticidade",
      "Escalabilidade",
      "Alta disponibilidade"
    ],
    correctAnswer: 3,
    explanation: "A alta disponibilidade refere-se à capacidade de uma arquitetura resistir a falhas com tempo de inatividade mínimo, garantindo continuidade dos serviços."
  },
  {
    id: 27,
    text: "Um desenvolvedor precisa manter uma infraestrutura de ambiente de desenvolvimento e uma infraestrutura de ambiente de produção de forma repetível. Qual serviço AWS o desenvolvedor deve usar para atender a esses requisitos?",
    options: [
      "AWS Ground Station",
      "AWS Shield",
      "AWS IoT Device Defender",
      "AWS CloudFormation"
    ],
    correctAnswer: 3,
    explanation: "O AWS CloudFormation permite criar e gerenciar infraestrutura como código, facilitando a replicação de ambientes de forma repetível."
  },
  {
    id: 28,
    text: "Qual tarefa é de responsabilidade do cliente, de acordo com o modelo de responsabilidade compartilhada da AWS?",
    options: [
      "Mantenha a segurança da Nuvem AWS.",
      "Configurar firewalls e redes.",
      "Aplicar patch no sistema operacional das instâncias do Amazon RDS.",
      "Implementar controles físicos e ambientais."
    ],
    correctAnswer: 1,
    explanation: "No modelo de responsabilidade compartilhada, o cliente é responsável por configurar firewalls e redes, enquanto a AWS gerencia a segurança da nuvem."
  },
  {
    id: 29,
    text: "Quais são os benefícios do faturamento consolidado para serviços de nuvem AWS? (Escolha dois.)",
    options: [
      "Descontos por volume",
      "Uma taxa adicional mínima para uso",
      "Uma fatura para várias contas",
      "Opções de parcelamento",
      "Custo personalizado e criação de orçamento de uso"
    ],
    correctAnswer: [2, 4],
    explanation: "O faturamento consolidado permite uma única fatura para várias contas e facilita a criação de orçamentos personalizados."
  },
  {
    id: 30,
    text: "Qual é o melhor recurso para um usuário encontrar informações e relatórios relacionados à conformidade sobre a AWS?",
    options: [
      "AWS Artifact",
      "AWS Marketplace",
      "Amazon Inspector",
      "AWS Support"
    ],
    correctAnswer: 0,
    explanation: "O AWS Artifact fornece acesso a relatórios de conformidade e documentação relacionados à segurança e conformidade da AWS."
  },
  {
    id: 31,
    text: "Qual serviço da AWS permite que as empresas implantem um aplicativo próximo aos usuários finais?",
    options: [
      "Amazon CloudFront",
      "AWS Auto Scaling",
      "AWS AppSync",
      "Amazon Route 53"
    ],
    correctAnswer: 0,
    explanation: "O Amazon CloudFront é uma rede de entrega de conteúdo (CDN) que permite implantar aplicativos próximos aos usuários finais, reduzindo a latência."
  },
  {
    id: 32,
    text: "Qual serviço ou recurso da AWS melhora o desempenho da rede enviando tráfego através da infraestrutura de rede mundial da AWS?",
    options: [
      "Route table",
      "AWS Transit Gateway",
      "AWS Global Accelerator",
      "Amazon VPC"
    ],
    correctAnswer: 2,
    explanation: "O AWS Global Accelerator melhora o desempenho da rede ao rotear o tráfego através da infraestrutura global da AWS, reduzindo a latência."
  },
  {
    id: 33,
    text: "Qual serviço da AWS oferece armazenamento de objetos altamente durável?",
    options: [
      "Amazon S3",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon FSx"
    ],
    correctAnswer: 0,
    explanation: "O Amazon S3 é um serviço de armazenamento de objetos altamente durável, projetado para oferecer 99,999999999% de durabilidade."
  },
  {
    id: 34,
    text: "Uma empresa planeja migrar para a AWS e deseja criar estimativas de custos para seus casos de uso da AWS. Qual serviço ou ferramenta da AWS a empresa pode usar para atender a esses requisitos?",
    options: [
      "AWS Budgets",
      "AWS Cost Explorer",
      "Amazon CloudWatch",
      "AWS Pricing Calculator"
    ],
    correctAnswer: 3,
    explanation: "O AWS Pricing Calculator permite estimar custos de serviços da AWS antes de implantá-los, ajudando no planejamento financeiro."
  },
  {
    id: 35,
    text: "Qual ferramenta um desenvolvedor deve usar para integrar recursos de serviços da AWS diretamente em um aplicativo?",
    options: [
      "AWS Software Development Kit (SDK)",
      "AWS CodeDeploy",
      "AWS Lambda",
      "AWS Batch"
    ],
    correctAnswer: 0,
    explanation: "O AWS SDK permite integrar recursos da AWS diretamente em aplicativos, fornecendo bibliotecas para várias linguagens de programação."
  },
  {
    id: 36,
    text: "Usar o AWS Identity and Access Management (IAM) para conceder acesso apenas aos recursos necessários para executar uma tarefa é um conceito conhecido como:",
    options: [
      "Acesso com privilégios mínimos.",
      "Acesso restrito.",
      "Acesso conforme necessário.",
      "Acesso simbólico."
    ],
    correctAnswer: 0,
    explanation: "O princípio de privilégio mínimo garante que os usuários tenham apenas as permissões necessárias para realizar suas tarefas, aumentando a segurança."
  },
  {
    id: 37,
    text: "Uma empresa possui 5 TB de dados armazenados no Amazon S3. A empresa planeja ocasionalmente realizar consultas nos dados para análise. Qual serviço da AWS a empresa deve usar para executar essas consultas da maneira MAIS econômica?",
    options: [
      "Amazon Redshift",
      "Amazon Kinesis",
      "Amazon RDS",
      "Amazon Athena"
    ],
    correctAnswer: 3,
    explanation: "O Amazon Athena permite consultar dados diretamente no Amazon S3 usando SQL, sem a necessidade de provisionar infraestrutura, sendo uma opção econômica para análises ocasionais."
  },
  {
    id: 38,
    text: "Uma empresa está explorando o uso da Nuvem AWS e precisa criar uma estimativa de custo para um projeto antes que a infraestrutura seja provisionada. Qual serviço ou recurso da AWS pode ser usado para estimar custos antes da implantação?",
    options: [
      "Nível gratuito da AWS",
      "AWS Pricing Calculator",
      "AWS Billing and Cost Management (Gerenciamento de Faturamento e Custos da AWS)",
      "AWS Cost and Usage Report (Relatório de custos e uso da AWS)"
    ],
    correctAnswer: 1,
    explanation: "O AWS Pricing Calculator permite estimar custos de serviços da AWS antes de implantá-los, ajudando no planejamento financeiro."
  },
  {
    id: 39,
    text: "Uma empresa está construindo um aplicativo que precisa entregar imagens e vídeos globalmente com latência mínima. Que abordagem a empresa pode usar para conseguir isso de maneira econômica?",
    options: [
      "Entregue o conteúdo por meio do Amazon CloudFront.",
      "Armazene o conteúdo no Amazon S3 e habilite a replicação entre regiões do S3.",
      "Implementar uma VPN em várias regiões da AWS.",
      "Entregue o conteúdo por meio do AWS PrivateLink."
    ],
    correctAnswer: 0,
    explanation: "O Amazon CloudFront é uma CDN que entrega conteúdo com baixa latência globalmente, sendo a opção mais econômica para distribuição de mídia."
  },
  {
    id: 40,
    text: "Qual serviço da AWS é sempre fornecido gratuitamente?",
    options: [
      "AWS WAF",
      "Elastic Load Balancers",
      "Amazon S3",
      "AWS Identity and Access Management (IAM)"
    ],
    correctAnswer: 3,
    explanation: "O AWS IAM é um serviço gratuito que permite gerenciar acesso e permissões para recursos da AWS."
  },
  {
    id: 41,
    text: "Para reduzir custos, uma empresa planeja migrar um banco de dados NoSQL para AWS. Qual serviço da AWS é totalmente gerenciado e pode dimensionar automaticamente a capacidade de transferência para atender às demandas de carga de trabalho do banco de dados?",
    options: [
      "Amazon Redshift",
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon RDS"
    ],
    correctAnswer: 2,
    explanation: "O Amazon DynamoDB é um banco de dados NoSQL totalmente gerenciado que dimensiona automaticamente a capacidade de transferência para atender às demandas da carga de trabalho."
  },
  {
    id: 42,
    text: "Uma empresa deseja monitorar grupos de segurança mal configurados que permitem acesso irrestrito a portas específicas. Qual serviço da AWS atenderá a esse requisito?",
    options: [
      "AWS Trusted Advisor",
      "Amazon CloudWatch",
      "Amazon GuardDuty",
      "AWS Health Dashboard"
    ],
    correctAnswer: 0,
    explanation: "O AWS Trusted Advisor monitora grupos de segurança e fornece recomendações para melhorar a configuração e a segurança."
  },
  {
    id: 43,
    text: "Qual serviço da Nuvem AWS pode enviar alertas aos clientes se os limites de gastos personalizados forem excedidos?",
    options: [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Cost Allocation Tags",
      "AWS Organizations"
    ],
    correctAnswer: 0,
    explanation: "O AWS Budgets permite definir limites de gastos personalizados e enviar alertas quando esses limites são excedidos."
  },
  {
    id: 44,
    text: "Uma empresa precisa executar continuamente uma carga de trabalho experimental em uma instância do Amazon EC2 e interrompê-la após 12 horas. Qual opção de compra de instância atenderá a esse requisito de maneira MAIS econômica?",
    options: [
      "Instâncias Dedicadas",
      "Instâncias spot",
      "Instâncias sob demanda",
      "Instâncias Reservadas"
    ],
    correctAnswer: 1,
    explanation: "Instâncias Spot são ideais para cargas de trabalho experimentais de curta duração, oferecendo custos significativamente menores."
  },
  {
    id: 45,
    text: "Uma empresa deseja que suas instâncias do Amazon EC2 operem em um ambiente altamente disponível, mesmo que haja um desastre natural em uma área geográfica específica. Qual abordagem alcançará esse objetivo?",
    options: [
      "Use instâncias EC2 em várias regiões da AWS.",
      "Use instâncias EC2 em vários locais do Amazon CloudFront.",
      "Use instâncias EC2 em vários pontos de presença(edge locations).",
      "Use instâncias EC2 em zonas locais(local zones) da AWS."
    ],
    correctAnswer: 0,
    explanation: "Distribuir instâncias EC2 em várias regiões da AWS garante alta disponibilidade, mesmo em caso de desastres naturais em uma região específica."
  },
  {
    id: 46,
    text: "Um administrador de sistemas criou um novo usuário IAM para um desenvolvedor e atribuiu ao usuário uma chave de acesso em vez de um nome de usuário e uma senha. Para que serve a chave de acesso?",
    options: [
      "Para acessar a conta da AWS como usuário raiz da conta da AWS",
      "Para acessar a conta da AWS por meio do AWS Management Console",
      "Para acessar a conta AWS por meio de uma CLI",
      "Para acessar todas as contas AWS de uma empresa"
    ],
    correctAnswer: 2,
    explanation: "As chaves de acesso são usadas para acesso programático via AWS CLI ou API, enquanto o nome de usuário e senha são usados para o AWS Management Console."
  },
  {
    id: 47,
    text: "Qual opção é um ambiente que consiste em um ou mais data centers?",
    options: [
      "Amazon CloudFront",
      "Zona de disponibilidade",
      "VPC",
      "AWS Outposts"
    ],
    correctAnswer: 1,
    explanation: "Uma Zona de Disponibilidade (AZ) é um ou mais data centers isolados dentro de uma região da AWS, projetados para alta disponibilidade."
  },
  {
    id: 48,
    text: "Uma empresa deseja consultar os logs de seu servidor para obter insights sobre as experiências de seus clientes. Qual serviço da AWS armazenará esses dados de maneira MAIS econômica?",
    options: [
      "Amazon S3",
      "Amazon Aurora",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Elastic Block Store (Amazon EBS)"
    ],
    correctAnswer: 0,
    explanation: "O Amazon S3 é a opção mais econômica para armazenar logs, especialmente para grandes volumes de dados."
  },
  {
    id: 49,
    text: "Qual serviço da AWS ajuda os usuários a auditar a atividade da API em suas contas da AWS?",
    options: [
      "AWS CloudTrail",
      "Amazon Inspector",
      "AWS WAF",
      "AWS Config"
    ],
    correctAnswer: 0,
    explanation: "O AWS CloudTrail registra todas as chamadas de API feitas em uma conta da AWS, permitindo auditoria e conformidade."
  },
  {
    id: 50,
    text: "Uma empresa deseja adicionar e remover automaticamente instâncias do Amazon EC2. A empresa deseja que as instâncias EC2 se ajustem dinamicamente a diversas cargas de trabalho. Qual serviço ou recurso atenderá a esses requisitos?",
    options: [
      "Amazon DynamoDB",
      "Instâncias spot do Amazon EC2",
      "Família AWS Snow",
      "Amazon EC2 Auto Scaling"
    ],
    correctAnswer: 3,
    explanation: "O Amazon EC2 Auto Scaling ajusta automaticamente o número de instâncias EC2 com base na demanda, garantindo escalabilidade e eficiência de custos."
  },
  {
    id: 51,
    text: "Quais ações são práticas recomendadas para um usuário root de conta da AWS? (Escolha dois.)",
    options: [
      "Compartilhe credenciais de usuário root com membros da equipe.",
      "Crie vários usuários root para a conta, separados por ambiente.",
      "Habilite a autenticação multifator (MFA) no usuário root.",
      "Crie um usuário IAM com privilégios de administrador para tarefas administrativas diárias, em vez de usar o usuário root.",
      "Use acesso programático em vez do usuário root e senha."
    ],
    correctAnswer: [2, 3],
    explanation: "É recomendável habilitar a autenticação multifator (MFA) no usuário root e criar um usuário IAM com privilégios de administrador para tarefas diárias, reduzindo o uso do usuário root."
  },
  {
    id: 52,
    text: "Uma empresa está executando uma carga de trabalho crítica em uma instância de banco de dados do Amazon RDS. A empresa precisa que a instância de banco de dados esteja altamente disponível com um tempo de recuperação inferior a 5 minutos. Qual solução atenderá a esses requisitos?",
    options: [
      "Crie uma réplica de leitura da instância de banco de dados.",
      "Crie um modelo da instância de banco de dados usando AWS CloudFormation.",
      "Tire snapshots frequentes da instância de banco de dados. Armazene os snapshots no Amazon S3.",
      "Modifique a instância de banco de dados para ser uma implantação Multi-AZ."
    ],
    correctAnswer: 3,
    explanation: "A implantação Multi-AZ do Amazon RDS garante alta disponibilidade e tempo de recuperação inferior a 5 minutos em caso de falha."
  },
  {
    id: 53,
    text: "Qual pilar do AWS Well-Architected Framework se refere à capacidade de um sistema se recuperar de interrupções de infraestrutura ou serviço e adquirir recursos de computação dinamicamente para atender à demanda?",
    options: [
      "Segurança",
      "Confiabilidade",
      "Eficiência de desempenho",
      "Otimização de custos"
    ],
    correctAnswer: 1,
    explanation: "O pilar de Confiabilidade do AWS Well-Architected Framework foca na capacidade de um sistema se recuperar de falhas e dimensionar recursos dinamicamente."
  },
  {
    id: 54,
    text: "Qual ação é uma prática recomendada de segurança para acesso a dados confidenciais armazenados em um bucket do Amazon S3?",
    options: [
      "Habilite a replicação entre regiões (CRR) do S3 no bucket S3.",
      "Use funções do IAM para aplicativos que exigem acesso ao bucket S3.",
      "Configure o AWS WAF para evitar acesso não autorizado ao bucket S3.",
      "Configure o Amazon GuardDuty para evitar acesso não autorizado ao bucket S3."
    ],
    correctAnswer: 1,
    explanation: "Usar funções do IAM para conceder acesso temporário e controlado a aplicativos é uma prática recomendada de segurança para dados confidenciais no Amazon S3."
  },
  {
    id: 55,
    text: "Qual das alternativas a seguir descreve algumas das principais funcionalidades do Amazon S3?",
    options: [
      "O Amazon S3 é um serviço de armazenamento em blocos de alto desempenho projetado para uso com o Amazon EC2.",
      "Amazon S3 é um serviço de armazenamento de objetos que oferece desempenho, segurança, escalabilidade e disponibilidade de dados de alto nível.",
      "O Amazon S3 é um sistema de armazenamento de arquivos totalmente gerenciado, altamente confiável e escalável, acessível por meio do protocolo SMB padrão do setor.",
      "O Amazon S3 é um NFS elástico escalável e totalmente gerenciado para uso com serviços da Nuvem AWS e recursos locais."
    ],
    correctAnswer: 1,
    explanation: "O Amazon S3 é um serviço de armazenamento de objetos que oferece alta durabilidade, escalabilidade e segurança para dados."
  },
  {
    id: 56,
    text: "Um usuário precisa implantar rapidamente um banco de dados não relacional na AWS. O usuário não deseja gerenciar o hardware subjacente ou o software de banco de dados. Qual serviço AWS pode ser usado para fazer isso?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon Redshift"
    ],
    correctAnswer: 1,
    explanation: "O Amazon DynamoDB é um banco de dados NoSQL totalmente gerenciado que não requer gerenciamento de hardware ou software."
  },
  {
    id: 57,
    text: "Qual serviço ou recurso da AWS uma empresa pode usar para aplicar regras de segurança a instâncias específicas do Amazon EC2?",
    options: [
      "ACLs de rede",
      "Grupos de segurança",
      "AWS Trusted Advisor",
      "AWS WAF"
    ],
    correctAnswer: 1,
    explanation: "Grupos de segurança atuam como firewalls virtuais para instâncias do EC2, permitindo a aplicação de regras de segurança específicas."
  },
  {
    id: 58,
    text: "Uma empresa deseja migrar seu banco de dados para um serviço gerenciado da AWS compatível com PostgreSQL. Quais serviços da AWS atenderão a esses requisitos? (Escolha dois.)",
    options: [
      "Amazon Athena",
      "Amazon RDS",
      "Amazon EC2",
      "Amazon DynamoDB",
      "Amazon Aurora"
    ],
    correctAnswer: [1, 4],
    explanation: "O Amazon RDS e o Amazon Aurora são serviços de banco de dados gerenciados compatíveis com PostgreSQL."
  },
  {
    id: 59,
    text: "Uma empresa precisa usar software de terceiros para sua carga de trabalho na AWS. Qual serviço ou recurso da AWS a empresa pode usar para adquirir o software?",
    options: [
      "AWS Marketplace",
      "AWS Resource Access Manager",
      "AWS Managed Service",
      "AWS License Manager"
    ],
    correctAnswer: 0,
    explanation: "O AWS Marketplace oferece uma variedade de software de terceiros que pode ser adquirido e implantado diretamente na AWS."
  },
  {
    id: 60,
    text: "Uma empresa possui uma instância do Amazon EC2 em uma sub-rede privada. A empresa deseja iniciar uma conexão com a Internet para obter atualizações do sistema operacional e, ao mesmo tempo, impedir que o tráfego da Internet acesse a instância do EC2. Qual serviço gerenciado pela AWS permite isso?",
    options: [
      "VPC endpoint",
      "NAT gateway",
      "Amazon PrivateLink",
      "VPC peering"
    ],
    correctAnswer: 1,
    explanation: "Um NAT gateway permite que instâncias em uma sub-rede privada se conectem à Internet para atualizações, mas impede o acesso externo à instância."
  },
  {
    id: 61,
    text: "Qual serviço de segurança da AWS protege aplicativos contra ataques distribuídos de negação de serviço com detecção sempre ativa e mitigações automáticas em linha?",
    options: [
      "Amazon Inspector",
      "AWS Web Application Firewall (AWS WAF)",
      "Elastic Load Balancing (ELB)",
      "AWS Shield"
    ],
    correctAnswer: 3,
    explanation: "O AWS Shield protege aplicativos contra ataques DDoS com detecção sempre ativa e mitigações automáticas."
  },
  {
    id: 62,
    text: "O site de uma empresa está enfrentando ataques DDoS. Qual serviço da AWS pode ajudar a proteger o site da empresa contra esses ataques?",
    options: [
      "AWS Resource Access Manager",
      "AWS Amplify",
      "AWS Shield",
      "Amazon GuardDuty"
    ],
    correctAnswer: 2,
    explanation: "O AWS Shield protege aplicativos e sites contra ataques DDoS, oferecendo mitigação automática."
  },
  {
    id: 63,
    text: "Qual serviço ou recurso da AWS permite que os usuários criem novas contas da AWS, agrupem várias contas para organizar fluxos de trabalho e apliquem políticas a grupos de contas?",
    options: [
      "AWS Identity and Access Management (IAM)",
      "AWS Trusted Advisor",
      "AWS CloudFormation",
      "AWS Organizations"
    ],
    correctAnswer: 3,
    explanation: "O AWS Organizations permite criar e gerenciar múltiplas contas da AWS, aplicando políticas e organizando fluxos de trabalho."
  },
  {
    id: 64,
    text: "Uma empresa que possui diversas unidades de negócios deseja gerenciar e governar centralmente seus ambientes da Nuvem AWS. A empresa deseja automatizar a criação de contas AWS, aplicar políticas de controle de serviço (SCPs) e simplificar os processos de faturamento. Qual serviço ou ferramenta da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "AWS Organizations",
      "Cost Explorer",
      "AWS Budgets",
      "AWS Trusted Advisor"
    ],
    correctAnswer: 0,
    explanation: "O AWS Organizations permite gerenciar e governar centralmente múltiplas contas da AWS, incluindo a aplicação de políticas de controle de serviço (SCPs) e a consolidação de faturas."
  },
  {
    id: 65,
    text: "Em que nível de suporte os usuários recebem acesso a um concierge de suporte?",
    options: [
      "Basic Support",
      "Developer Support",
      "Business Support",
      "Enterprise Support"
    ],
    correctAnswer: 3,
    explanation: "O nível Enterprise Support oferece acesso a um concierge de suporte, além de suporte técnico 24/7 e consultoria especializada."
  }
];

// Lista de questões ativa (será embaralhada)
let questions = [...originalQuestions];

// Estado do simulado
const examState = {
  currentQuestionIndex: 0,
  answers: {},
  markedForReview: new Set(),
  timeRemaining: 30 * 60, // 90 minutos em segundos
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
  examState.timeRemaining = 90 * 60;
  examState.examFinished = false;

  // Reembaralhar questões usando original
  questions = shuffleArray([...originalQuestions]);

  // Resetar UI
  timerDisplay.textContent = formatTime(examState.timeRemaining);
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