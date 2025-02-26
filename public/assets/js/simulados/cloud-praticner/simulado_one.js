const originalQuestions = [
  {
    id: 1,
    text: "Um engenheiro de nuvem precisa baixar documentos de segurança e conformidade da AWS para uma auditoria futura. Qual serviço da AWS pode fornecer os documentos?",
    options: [
      "AWS Artifact",
      "AWS Trusted Advisor",
      "AWS Systems Manager",
      "AWS Well-Architected Tool"
    ],
    correctAnswer: 0,
    explanation: "O AWS Artifact é um serviço que fornece acesso sob demanda a documentos de segurança e conformidade da AWS, como relatórios de auditoria e certificações, que são essenciais para auditorias e verificações de conformidade."
  },
  {
    id: 2,
    text: "Quais dos seguintes são benefícios que uma empresa recebe ao mover uma carga de trabalho de produção local para a AWS? (Selecione DUAS.)",
    options: [
      "A AWS fornece economias de escala.",
      "A AWS treina a equipe da empresa sobre o uso de todos os serviços da AWS.",
      "A AWS oferece alta disponibilidade.",
      "A AWS oferece suporte gratuito de gerentes técnicos de conta (TAMs).",
      "A AWS gerencia toda a segurança na nuvem."
    ],
    correctAnswer: [0, 2],
    explanation: "A AWS oferece economias de escala, permitindo que as empresas reduzam custos ao compartilhar infraestrutura com outros clientes. Além disso, a AWS oferece alta disponibilidade, garantindo que as cargas de trabalho estejam acessíveis e operacionais com mínimo tempo de inatividade."
  },
  {
    id: 3,
    text: "Qual serviço ou ferramenta da AWS fornece recomendações para ajudar os usuários a dimensionar corretamente as instâncias Amazon EC2 com base em dados históricos de uso da carga de trabalho?",
    options: [
      "AWS App Runner",
      "AWS Compute Optimizer",
      "AWS Systems Manager",
      "AWS Pricing Calculator"
    ],
    correctAnswer: 1,
    explanation: "O AWS Compute Optimizer analisa os padrões de uso das instâncias EC2 e fornece recomendações para otimizar o dimensionamento, melhorando o desempenho e reduzindo custos."
  },
  {
    id: 4,
    text: "Qual plano de suporte da AWS oferece aos clientes acesso a um gerente de conta técnica (TAM) da AWS?",
    options: [
      "Suporte ao Desenvolvedor AWS",
      "Suporte Básico AWS",
      "Suporte Empresarial AWS",
      "Suporte Empresarial AWS"
    ],
    correctAnswer: 2,
    explanation: "O plano de Suporte Empresarial da AWS inclui acesso a um Gerente Técnico de Conta (TAM), que oferece suporte personalizado e orientação proativa para otimizar o uso dos serviços da AWS."
  },
  {
    id: 5,
    text: "Uma empresa quer gerenciar centralmente políticas de segurança e serviços de cobrança em um ambiente AWS com várias contas. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "AWS Identity and Access Management (IAM)",
      "AWS Resource Access Manager (AWS RAM)",
      "AWS Config",
      "AWS Organizations"
    ],
    correctAnswer: 3,
    explanation: "O AWS Organizations permite gerenciar múltiplas contas da AWS de forma centralizada, incluindo políticas de segurança e controle de custos, facilitando a governança e a conformidade."
  },
  {
    id: 6,
    text: "Uma empresa planeja migrar para a AWS e quer criar estimativas de custo para seus casos de uso da AWS. Qual serviço ou ferramenta da AWS a empresa pode usar para atender a esses requisitos?",
    options: [
      "AWS Budgets",
      "Amazon CloudWatch",
      "AWS Cost Explorer",
      "AWS Pricing Calculator"
    ],
    correctAnswer: 3,
    explanation: "O AWS Pricing Calculator é uma ferramenta que permite estimar os custos dos serviços da AWS com base no uso projetado, ajudando as empresas a planejar seus orçamentos antes da migração."
  },
  {
    id: 7,
    text: "Qual recurso da Nuvem AWS dá aos usuários a capacidade de pagar com base nas necessidades atuais em vez das necessidades previstas?",
    options: [
      "Descontos por volume",
      "Preços pay-as-you-go (pague conforme o uso)",
      "Savings Plans",
      "AWS Budgets"
    ],
    correctAnswer: 1,
    explanation: "O modelo de preços pay-as-you-go permite que os usuários paguem apenas pelos recursos que consomem, sem a necessidade de compromisso prévio ou planejamento de capacidade."
  },
  {
    id: 8,
    text: "Qual dos seguintes é um princípio de eficiência de custos relacionado à Nuvem AWS?",
    options: [
      "Marcar todos os recursos da AWS.",
      "Usar AWS Organizations para combinar as despesas de várias contas em uma única fatura.",
      "Usar o Painel de Faturamento para acessar informações sobre faturas mensais.",
      "Dimensionar serviços com base nos requisitos de capacidade."
    ],
    correctAnswer: 3,
    explanation: "Dimensionar serviços com base nos requisitos de capacidade é um princípio fundamental de eficiência de custos, pois evita o provisionamento excessivo de recursos e reduz custos desnecessários."
  },
  {
    id: 9,
    text: "Qual prática recomendada de governança de custos este exemplo mostra?",
    options: [
      "Aplicação de marcação",
      "Controles de recursos",
      "Alocação de custos",
      "Otimização de arquitetura"
    ],
    correctAnswer: 3,
    explanation: "A otimização de arquitetura envolve a revisão e o ajuste da infraestrutura para garantir que os recursos sejam utilizados de forma eficiente, reduzindo custos sem comprometer o desempenho."
  },
  {
    id: 10,
    text: "Qual princípio de design deve ser considerado ao arquitetar na Nuvem AWS?",
    options: [
      "Pensar nos servidores como recursos não descartáveis.",
      "Usar integração síncrona de serviços.",
      "Implementar as regras menos permissivas para grupos de segurança.",
      "Projetar componentes fracamente acoplados."
    ],
    correctAnswer: 3,
    explanation: "Projetar componentes fracamente acoplados é um princípio fundamental na arquitetura de nuvem, pois permite que os sistemas sejam mais resilientes, escaláveis e fáceis de manter."
  },
  {
    id: 11,
    text: "Uma empresa precisa de uma rede de entrega de conteúdo que forneça entrega segura de dados, vídeos, aplicativos e APIs para usuários globalmente com baixa latência e altas velocidades de transferência. Qual serviço da AWS atende a esses requisitos?",
    options: [
      "Amazon Elastic Transcoder",
      "Amazon CloudFront",
      "Elastic Load Balancing",
      "Amazon S3"
    ],
    correctAnswer: 1,
    explanation: "O Amazon CloudFront é uma rede de entrega de conteúdo (CDN) que acelera a distribuição de conteúdo estático e dinâmico, como vídeos, aplicativos e APIs, para usuários em todo o mundo com baixa latência."
  },
  {
    id: 12,
    text: "Qual tarefa requer o uso das credenciais do usuário root da conta AWS?",
    options: [
      "A criação de uma organização no AWS Organizations",
      "A mudança para um plano de Suporte AWS diferente",
      "A exclusão de instâncias Amazon EC2",
      "A exclusão de usuários IAM"
    ],
    correctAnswer: 0,
    explanation: "A criação de uma organização no AWS Organizations requer o uso das credenciais do usuário root, pois essa é uma operação sensível que afeta toda a conta AWS."
  },
  {
    id: 13,
    text: "Quais são as vantagens de migrar para a nuvem da AWS? (Selecione DUAS.)",
    options: [
      "A capacidade de transferir a responsabilidade de toda a segurança para a AWS.",
      "Não precisar mais adivinhar a capacidade que será necessária.",
      "Não se preocupar mais com controles de acesso dos usuários.",
      "A capacidade de usar o modelo pay-as-you-go.",
      "A capacidade de ter controle total sobre a infraestrutura física."
    ],
    correctAnswer: [1, 3],
    explanation: "A migração para a AWS elimina a necessidade de prever a capacidade necessária, pois os recursos podem ser escalados conforme a demanda. Além disso, o modelo pay-as-you-go permite pagar apenas pelo que é usado, reduzindo custos."
  },
  {
    id: 14,
    text: "Uma grande empresa tem uma carga de trabalho que requer que o hardware permaneça no local. A empresa quer usar os mesmos serviços de gerenciamento e controle que atualmente usa na AWS. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "AWS Ground Station",
      "AWS Fargate",
      "AWS Device Farm",
      "AWS Outposts"
    ],
    correctAnswer: 3,
    explanation: "O AWS Outposts permite que as empresas executem serviços da AWS em seu próprio data center, mantendo a mesma experiência de gerenciamento e controle que teriam na nuvem."
  },
  {
    id: 15,
    text: "Qual serviço ou recurso da AWS é usado para solucionar problemas de conectividade de rede entre instâncias Amazon EC2?",
    options: [
      "AWS Certificate Manager (ACM)",
      "Internet gateway",
      "AWS CloudHSM",
      "VPC Flow Logs"
    ],
    correctAnswer: 3,
    explanation: "O VPC Flow Logs captura informações sobre o tráfego IP que flui entre as interfaces de rede em uma VPC, ajudando a diagnosticar problemas de conectividade e monitorar o tráfego de rede."
  },
  {
    id: 16,
    text: "Uma empresa está projetando um aplicativo web que será executado em instâncias do Amazon EC2. Quais serviços e recursos da AWS melhorarão a disponibilidade e reduzirão o impacto de falhas para este aplicativo? (Selecione DUAS.)",
    options: [
      "Configuração do AWS Server Migration Service (AWS SMS) para mover as instâncias EC2 para uma região diferente da AWS.",
      "Recursos distribuídos por várias Zonas de Disponibilidade.",
      "Recursos que estão distribuídos em vários pontos de presença da AWS.",
      "ACLs de sub-rede VPC para verificar a integridade de um serviço.",
      "Amazon EC2 Auto Scaling para as instâncias EC2."
    ],
    correctAnswer: [1, 4],
    explanation: "Distribuir recursos por várias Zonas de Disponibilidade aumenta a resiliência do aplicativo, enquanto o EC2 Auto Scaling garante que o número de instâncias seja ajustado automaticamente para lidar com a demanda, mantendo a disponibilidade."
  },
  {
    id: 17,
    text: "Qual benefício está incluído em um plano de Suporte Empresarial da AWS?",
    options: [
      "Suporte designado de um gerente técnico de conta (TAM) da AWS.",
      "Conformidade gerenciada como código com AWS Config.",
      "Suporte à Rede de Parceiros AWS (APN) sem custo.",
      "Suporte no local de engenheiros da AWS."
    ],
    correctAnswer: 0,
    explanation: "O plano de Suporte Empresarial da AWS inclui um Gerente Técnico de Conta (TAM) dedicado, que oferece suporte personalizado e orientação proativa para otimizar o uso dos serviços da AWS."
  },
  {
    id: 18,
    text: "Uma empresa armazena dados em um bucket do Amazon S3. A empresa deve controlar quem tem permissão para ler, escrever ou excluir objetos que a empresa armazena no bucket do S3. Qual tarefa é responsabilidade da AWS, de acordo com o modelo de responsabilidade compartilhada da AWS?",
    options: [
      "Garantir a segurança e a proteção ambiental da infraestrutura da AWS que hospeda Workspaces.",
      "Fornecer segurança para contas de usuário do Workspaces através do AWS Identity and Access Management (IAM).",
      "Configurar o AWS CloudTrail para registrar chamadas de API e atividade de usuários.",
      "Configurar autenticação multifator (MFA) para cada conta de usuário do Workspaces."
    ],
    correctAnswer: 0,
    explanation: "De acordo com o modelo de responsabilidade compartilhada, a AWS é responsável pela segurança da infraestrutura física, incluindo a proteção ambiental dos data centers."
  },
  {
    id: 19,
    text: "Uma Zona de Disponibilidade consiste em:",
    options: [
      "um ou mais hosts físicos em um único data center.",
      "dois ou mais hosts físicos em múltiplos data centers.",
      "um ou mais data centers em uma única localização.",
      "dois ou mais data centers em várias localizações."
    ],
    correctAnswer: 2,
    explanation: "Uma Zona de Disponibilidade (AZ) é composta por um ou mais data centers independentes em uma única localização, projetados para fornecer alta disponibilidade e resiliência."
  },
  {
    id: 20,
    text: "Um desenvolvedor precisa criar um aplicativo para uma empresa de varejo. O aplicativo deve fornecer recomendações de produtos em tempo real com base em aprendizado de máquina. Qual serviço da AWS o desenvolvedor deve usar para atender a esse requisito?",
    options: [
      "AWS Health Dashboard",
      "Amazon Transcribe",
      "Amazon Forecast",
      "Amazon Personalize"
    ],
    correctAnswer: 3,
    explanation: "O Amazon Personalize é um serviço de aprendizado de máquina que permite criar recomendações personalizadas em tempo real com base no comportamento do usuário e nas preferências."
  },
  {
    id: 21,
    text: "Uma empresa implanta seu aplicativo em várias Regiões da AWS e configura failover automático entre essas Regiões. Qual conceito de nuvem essa arquitetura representa?",
    options: [
      "Escalabilidade",
      "Segurança",
      "Otimização de custos",
      "Confiabilidade"
    ],
    correctAnswer: 3,
    explanation: "A configuração de failover automático entre várias regiões aumenta a confiabilidade do aplicativo, garantindo que ele permaneça disponível mesmo em caso de falhas em uma região."
  },
  {
    id: 22,
    text: "Quais dos seguintes são serviços de autenticação de usuários gerenciados pela AWS? (Selecione DUAS.)",
    options: [
      "AWS License Manager",
      "Amazon Cognito",
      "AWS Lambda",
      "AWS CodeStar",
      "AWS Identity and Access Management (IAM)"
    ],
    correctAnswer: [1, 4],
    explanation: "O Amazon Cognito e o AWS IAM são serviços gerenciados pela AWS que fornecem autenticação e controle de acesso para usuários e aplicativos."
  },
  {
    id: 23,
    text: "Qual dos seguintes promove as melhores práticas de arquitetura da Nuvem AWS para projetar e operar sistemas confiáveis, seguros, eficientes e econômicos?",
    options: [
      "AWS Serverless Application Model framework",
      "AWS Well-Architected Framework",
      "Suporte Empresarial AWS",
      "Princípio do menor privilégio"
    ],
    correctAnswer: 1,
    explanation: "O AWS Well-Architected Framework fornece um conjunto de práticas recomendadas para projetar e operar sistemas na nuvem, focando em confiabilidade, segurança, eficiência de desempenho, otimização de custos e excelência operacional."
  },
  {
    id: 24,
    text: "Uma empresa recentemente migrou para a Nuvem AWS. A empresa precisa determinar se suas instâncias Amazon EC2 recém-importadas são do tamanho e tipo apropriados. Quais serviços da AWS podem fornecer essas informações para a empresa? (Selecione DUAS.)",
    options: [
      "AWS Compute Optimizer",
      "Amazon Forecast",
      "AWS Control Tower",
      "AWS Auto Scaling",
      "AWS Trusted Advisor"
    ],
    correctAnswer: [0, 4],
    explanation: "O AWS Compute Optimizer e o AWS Trusted Advisor fornecem recomendações para otimizar o dimensionamento e o tipo de instâncias EC2, ajudando a empresa a garantir que estejam adequadas às suas necessidades."
  },
  {
    id: 25,
    text: "De acordo com o modelo de responsabilidade compartilhada da AWS, quais das seguintes opções são responsabilidades da AWS? (Selecione DUAS.)",
    options: [
      "Credenciais e políticas",
      "Segurança física do hardware",
      "Sistemas operacionais convidados",
      "Infraestrutura de rede e virtualização de infraestrutura",
      "Segurança dos dados da aplicação"
    ],
    correctAnswer: [1, 3],
    explanation: "De acordo com o modelo de responsabilidade compartilhada, a AWS é responsável pela segurança física do hardware e pela infraestrutura de rede, enquanto o cliente é responsável pela segurança dos dados e sistemas operacionais convidados."
  },
  {
    id: 26,
    text: "Qual das seguintes é uma vantagem que os usuários experimentam ao mover cargas de trabalho on-premises para a Nuvem AWS?",
    options: [
      "Eliminação de despesas para operar e manter data centers.",
      "Eliminação de despesas operacionais.",
      "Descontos de preço que são idênticos aos descontos de provedores de hardware.",
      "Distribuição de todos os controles operacionais para a AWS."
    ],
    correctAnswer: 0,
    explanation: "Ao migrar para a AWS, as empresas eliminam a necessidade de investir em infraestrutura física e manutenção de data centers, reduzindo custos operacionais."
  },
  {
    id: 27,
    text: "Uma empresa usa Amazon Workspaces. O que um usuário pode realizar usando o AWS CloudTrail?",
    options: [
      "Avaliar a conformidade das configurações dos recursos da AWS com políticas e diretrizes.",
      "Garantir que as instâncias Amazon EC2 estejam atualizadas com os últimos patches de segurança.",
      "Registrar chamadas de API feitas para os serviços da AWS.",
      "Gerar um relatório de credenciais de usuários IAM."
    ],
    correctAnswer: 2,
    explanation: "O AWS CloudTrail registra chamadas de API feitas para os serviços da AWS, permitindo auditoria, monitoramento e solução de problemas de atividades na conta AWS."
  },
  {
    id: 28,
    text: "Quais opções a AWS disponibiliza para clientes que desejam aprender sobre segurança na nuvem em um ambiente conduzido por instrutor? (Selecione DUAS.)",
    options: [
      "Fóruns da AWS",
      "AWS Online Tech Talks",
      "AWS Trusted Advisor",
      "Treinamento em Sala de Aula da AWS",
      "Blog da AWS"
    ],
    correctAnswer: [1, 3],
    explanation: "A AWS oferece treinamentos em sala de aula e AWS Online Tech Talks para clientes que desejam aprender sobre segurança na nuvem com orientação de instrutores especializados."
  },
  {
    id: 29,
    text: "Qual atividade as empresas podem realizar usando AWS Organizations?",
    options: [
      "Monitorar o desempenho de aplicativos.",
      "Gerenciar políticas de controle de serviço (SCPs).",
      "Migrar aplicativos para microservices.",
      "Solucionar problemas de desempenho de aplicativos."
    ],
    correctAnswer: 1,
    explanation: "O AWS Organizations permite gerenciar políticas de controle de serviço (SCPs) para controlar o acesso e o uso de serviços da AWS em múltiplas contas."
  },
  {
    id: 30,
    text: "Uma empresa tem duas contas AWS em uma organização no AWS Organizations para faturamento consolidado. Todos os recursos da AWS da empresa estão hospedados em uma Região AWS. A Conta A comprou cinco Instâncias Reservadas Padrão (RIs) da Amazon EC2 e tem quatro instâncias EC2 em execução. A Conta B não comprou nenhuma RI e também tem quatro instâncias EC2 em execução. Qual declaração é verdadeira sobre o preço dessas oito instâncias?",
    options: [
      "Cinco instâncias serão cobradas como RIs, e três serão cobradas como instâncias regulares.",
      "Quatro instâncias serão cobradas como RIs, e quatro serão cobradas como instâncias regulares.",
      "As oito instâncias serão cobradas como instâncias regulares.",
      "As oito instâncias serão cobradas como RIs."
    ],
    correctAnswer: 1,
    explanation: "As Instâncias Reservadas (RIs) são compartilhadas entre contas na organização, mas apenas as instâncias em execução na Conta A serão cobradas como RIs. As instâncias na Conta B serão cobradas como instâncias regulares."
  },
  {
    id: 31,
    text: "Qual serviço ou ferramenta da AWS o AWS Control Tower usa para criar recursos?",
    options: [
      "AWS CloudFormation",
      "AWS Directory Service",
      "AWS Cost Explorer",
      "AWS Trusted Advisor"
    ],
    correctAnswer: 0,
    explanation: "O AWS Control Tower usa o AWS CloudFormation para criar e gerenciar recursos de forma automatizada e consistente em múltiplas contas da AWS."
  },
  {
    id: 32,
    text: "Uma empresa precisa executar código em resposta a uma notificação de evento que ocorre quando objetos são carregados em um bucket do Amazon S3. Qual serviço da AWS se integrará diretamente com a notificação de evento?",
    options: [
      "AWS Lambda",
      "Amazon EC2",
      "Amazon Elastic Container Registry (Amazon ECR)",
      "AWS Elastic Beanstalk"
    ],
    correctAnswer: 0,
    explanation: "O AWS Lambda pode ser acionado diretamente por eventos do Amazon S3, como o carregamento de objetos, permitindo a execução de código em resposta a esses eventos."
  },
  {
    id: 33,
    text: "Uma empresa precisa usar painéis e gráficos para analisar insights a partir de dados de negócios. Qual serviço da AWS fornecerá os painéis e gráficos para esses insights?",
    options: [
      "Amazon Macie",
      "AWS CloudTrail",
      "Amazon QuickSight",
      "Amazon Aurora"
    ],
    correctAnswer: 2,
    explanation: "O Amazon QuickSight é um serviço de business intelligence que permite criar painéis e gráficos interativos para analisar dados de negócios e obter insights."
  },
  {
    id: 34,
    text: "Uma empresa está hospedando um aplicativo web em um contêiner Docker no Amazon EC2. A AWS é responsável por qual das seguintes tarefas?",
    options: [
      "Gerenciar o sistema operacional convidado, incluindo atualizações e patches de segurança.",
      "Escalar a aplicação web e os serviços desenvolvidos com Docker.",
      "Realizar manutenção de hardware nas instalações da AWS que executam a Nuvem AWS.",
      "Provisionamento ou agendamento de contêineres para executar em clusters e manter sua disponibilidade."
    ],
    correctAnswer: 2,
    explanation: "De acordo com o modelo de responsabilidade compartilhada, a AWS é responsável pela manutenção do hardware e da infraestrutura física que suporta os serviços de nuvem."
  },
  {
    id: 35,
    text: "O que a classe de armazenamento Amazon S3 Intelligent-Tiering oferece?",
    options: [
      "Flexibilidade de pagamento ao reservar capacidade de armazenamento.",
      "Armazenamento seguro, durável e de menor custo para arquivamento de dados.",
      "Retenção a longo prazo de dados copiando os dados para um volume Amazon Elastic Block Store (Amazon EBS) criptografado.",
      "Economia automática de custos movendo objetos entre camadas com base nas mudanças nos padrões de acesso."
    ],
    correctAnswer: 3,
    explanation: "O Amazon S3 Intelligent-Tiering move automaticamente os objetos entre diferentes camadas de armazenamento com base nos padrões de acesso, otimizando os custos sem sacrificar a performance."
  },
  {
    id: 36,
    text: "Qual motor de banco de dados é compatível com o Amazon RDS?",
    options: [
      "Neo4j",
      "Apache Cassandra",
      "MongoDB",
      "PostgreSQL"
    ],
    correctAnswer: 3,
    explanation: "O Amazon RDS suporta vários motores de banco de dados, incluindo PostgreSQL, MySQL, Oracle, SQL Server e MariaDB."
  },
  {
    id: 37,
    text: "Qual serviço ou recurso da AWS pode ser usado para estimar custos antes da implantação?",
    options: [
      "AWS Free Tier",
      "Relatório de Custo e Uso da AWS",
      "AWS Billing and Cost Management",
      "AWS Pricing Calculator"
    ],
    correctAnswer: 3,
    explanation: "O AWS Pricing Calculator permite estimar os custos dos serviços da AWS antes da implantação, ajudando no planejamento orçamentário."
  },
  {
    id: 38,
    text: "A base de usuários de uma empresa precisa acessar remotamente computadores de desktop virtual da internet. Qual serviço da AWS fornece essa funcionalidade?",
    options: [
      "Amazon Cognito",
      "Amazon Upstream 2.0",
      "Amazon Workspaces",
      "Amazon Connect"
    ],
    correctAnswer: 2,
    explanation: "O Amazon Workspaces é um serviço de desktop virtual que permite aos usuários acessar seus desktops e aplicativos de qualquer lugar, via internet."
  },
  {
    id: 39,
    text: "Uma empresa quer proteger suas informações, sistemas e ativos na Nuvem AWS enquanto realiza tarefas de avaliação e mitigação de riscos. Qual pilar do AWS Well-Architected Framework é suportado por esses objetivos?",
    options: [
      "Segurança",
      "Eficiência de desempenho",
      "Excelência operacional",
      "Confiabilidade"
    ],
    correctAnswer: 0,
    explanation: "O pilar de Segurança do AWS Well-Architected Framework foca na proteção de informações, sistemas e ativos, além de realizar avaliações e mitigação de riscos."
  },
  {
    id: 40,
    text: "Uma empresa quer usar um serviço gerenciado para simplificar a configuração, operação e escalabilidade de seu banco de dados MySQL na Nuvem AWS. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon EMR",
      "Amazon RDS"
    ],
    correctAnswer: 3,
    explanation: "O Amazon RDS é um serviço gerenciado que simplifica a configuração, operação e escalabilidade de bancos de dados relacionais, como MySQL, PostgreSQL e Oracle."
  },
  {
    id: 41,
    text: "Uma empresa está usando um serviço de terceiros para fazer backup de 10 TB de dados em uma biblioteca de fitas. O servidor de backup local está ficando sem espaço. A empresa quer usar os serviços da AWS para os backups sem alterar seus fluxos de trabalho de backup existentes. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "AWS Storage Gateway",
      "Amazon Elastic Container Service (Amazon ECS)",
      "AWS Lambda",
      "Amazon Elastic Block Store (Amazon EBS)"
    ],
    correctAnswer: 0,
    explanation: "O AWS Storage Gateway permite integrar ambientes locais com o armazenamento em nuvem da AWS, facilitando backups sem alterar os fluxos de trabalho existentes."
  },
  {
    id: 42,
    text: "Quais princípios de design suportam o pilar de confiabilidade do AWS Well-Architected Framework? (Selecione DUAS.)",
    options: [
      "Recuperar automaticamente de falhas.",
      "Habilitar rastreabilidade.",
      "Escalar automaticamente para atender à demanda.",
      "Implantar recursos globalmente para melhorar o tempo de resposta.",
      "Executar operações como código."
    ],
    correctAnswer: [0, 2],
    explanation: "O pilar de Confiabilidade do AWS Well-Architected Framework inclui a capacidade de recuperar automaticamente de falhas e escalar automaticamente para atender à demanda, garantindo alta disponibilidade e resiliência."
  },
  {
    id: 43,
    text: "Qual opção é uma vantagem da computação em nuvem da AWS que minimiza os custos variáveis?",
    options: [
      "Alta disponibilidade",
      "Agilidade",
      "Alcance global",
      "Economias de escala"
    ],
    correctAnswer: 3,
    explanation: "As economias de escala permitem que a AWS ofereça preços competitivos, reduzindo os custos variáveis para os clientes ao compartilhar infraestrutura com múltiplos usuários."
  },
  {
    id: 44,
    text: "Quais fatores afetam os custos na Nuvem AWS? (Selecione DUAS.)",
    options: [
      "O número de funções AWS Lambda não utilizadas.",
      "Transferências de dados de entrada sem aceleração.",
      "Recursos de computação que estão atualmente em uso.",
      "Transferências de dados de saída sem aceleração.",
      "O número de buckets Amazon S3 configurados."
    ],
    correctAnswer: [2, 3],
    explanation: "Os custos na AWS são afetados pelos recursos de computação em uso e pelas transferências de dados de saída, que são cobradas com base no volume de dados transferidos."
  },
  {
    id: 45,
    text: "Uma empresa tem armazenado relatórios mensais em um bucket do Amazon S3. A empresa exporta os dados dos relatórios para arquivos de valores separados por vírgulas (.csv). Um desenvolvedor deseja escrever uma consulta simples que possa ler todos esses arquivos e gerar um relatório resumido. Qual serviço ou recurso da AWS o desenvolvedor deve usar para atender a esses requisitos com a MENOR quantidade de esforço operacional?",
    options: [
      "Amazon S3 Select",
      "Amazon Redshift",
      "Amazon Athena",
      "Amazon EC2"
    ],
    correctAnswer: 2,
    explanation: "O Amazon Athena permite consultar dados diretamente no Amazon S3 usando SQL, sem a necessidade de configurar ou gerenciar infraestrutura adicional."
  },
  {
    id: 46,
    text: "Qual serviço ou ferramenta da AWS ajuda a gerenciar centralmente o faturamento e permitir o acesso controlado a recursos entre contas da AWS?",
    options: [
      "AWS Organizations",
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Identity and Access Management (IAM)"
    ],
    correctAnswer: 0,
    explanation: "O AWS Organizations permite gerenciar centralmente o faturamento e o acesso a recursos em múltiplas contas da AWS, facilitando a governança e o controle de custos."
  },
  {
    id: 47,
    text: "Qual serviço ou recurso da AWS é usado para enviar mensagens de texto e e-mail a partir de aplicativos distribuídos?",
    options: [
      "Amazon Simple Email Service (Amazon SES)",
      "Amazon Simple Queue Service (Amazon SQS)",
      "Alertas do Amazon CloudWatch",
      "Amazon Simple Notification Service (Amazon SNS)"
    ],
    correctAnswer: 3,
    explanation: "O Amazon SNS é um serviço de mensagens que permite enviar notificações por SMS, e-mail e outros protocolos a partir de aplicativos distribuídos."
  },
  {
    id: 48,
    text: "Quando um usuário quer utilizar suas licenças de software existentes por soquete, por núcleo ou por máquina virtual para um servidor Microsoft Windows em execução na AWS, qual tipo de instância do Amazon EC2 é necessário?",
    options: [
      "Instâncias Dedicadas",
      "Instâncias Spot",
      "Instâncias Reservadas",
      "Hosts Dedicados"
    ],
    correctAnswer: 3,
    explanation: "Os Hosts Dedicados permitem que os usuários utilizem suas licenças de software existentes por soquete, núcleo ou máquina virtual, atendendo a requisitos de licenciamento específicos."
  },
  {
    id: 49,
    text: "Qual das seguintes opções descreve uma Região da AWS?",
    options: [
      "Uma visão global do ambiente de computação em nuvem de um usuário.",
      "Um conjunto de data centers abrangendo vários países.",
      "Uma localização específica dentro de uma área geográfica que fornece alta disponibilidade.",
      "Uma coleção de bancos de dados que podem ser acessados apenas a partir de uma área geográfica específica."
    ],
    correctAnswer: 2,
    explanation: "Uma Região da AWS é uma localização geográfica específica que contém múltiplos data centers interconectados, projetados para fornecer alta disponibilidade e resiliência."
  },
  {
    id: 50,
    text: "Qual serviço da AWS deve um engenheiro de nuvem usar para visualizar chamadas de API para serviços da AWS?",
    options: [
      "AWS Artifact",
      "Amazon CloudWatch",
      "AWS Config",
      "AWS CloudTrail"
    ],
    correctAnswer: 3,
    explanation: "O AWS CloudTrail registra todas as chamadas de API feitas para os serviços da AWS, permitindo auditoria, monitoramento e solução de problemas."
  },
  {
    id: 51,
    text: "Quais são as características das Zonas de Disponibilidade? (Selecione DUAS.)",
    options: [
      "Zonas de Disponibilidade dentro de uma região da AWS compartilham energia redundante, rede e conectividade.",
      "Todo o tráfego entre as Zonas de Disponibilidade é criptografado.",
      "Cada Zona de Disponibilidade contém um único data center.",
      "As Zonas de Disponibilidade são fisicamente separadas por uma distância mínima de 150 km (100 milhas).",
      "Todas as Zonas de Disponibilidade em uma Região da AWS são interconectadas com uma rede de alta largura de banda e baixa latência."
    ],
    correctAnswer: [0, 4],
    explanation: "As Zonas de Disponibilidade são projetadas para serem isoladas umas das outras, mas interconectadas com uma rede de alta largura de banda e baixa latência, garantindo alta disponibilidade e resiliência."
  },
  {
    id: 52,
    text: "Uma empresa implanta seu aplicativo em instâncias do Amazon EC2. O aplicativo ocasionalmente experimenta aumentos súbitos na demanda. A empresa quer garantir que seu aplicativo possa responder a mudanças na demanda ao menor custo possível. Qual serviço ou ferramenta da AWS atenderá a esses requisitos?",
    options: [
      "AWS Well-Architected Framework",
      "AWS Compute Optimizer",
      "AWS Auto Scaling",
      "AWS Cost Explorer"
    ],
    correctAnswer: 2,
    explanation: "O AWS Auto Scaling ajusta automaticamente o número de instâncias EC2 com base na demanda, garantindo que o aplicativo possa lidar com picos de tráfego sem provisionamento excessivo."
  },
  {
    id: 53,
    text: "Qual serviço da AWS oferece aos usuários a capacidade de provisionar uma conexão de rede dedicada e privada da sua rede interna para a AWS?",
    options: [
      "AWS CloudHSM",
      "Amazon Connect",
      "AWS Direct Connect",
      "AWS VPN"
    ],
    correctAnswer: 2,
    explanation: "O AWS Direct Connect permite estabelecer uma conexão de rede dedicada e privada entre a infraestrutura local e a AWS, melhorando a largura de banda e reduzindo os custos de rede."
  },
  {
    id: 54,
    text: "A equipe de TI de uma empresa está gerenciando clusters de servidores de banco de dados MySQL. A equipe de TI precisa aplicar patches no banco de dados e tirar snapshots de backup dos dados nos clusters. A empresa quer mover essa carga de trabalho para a AWS para que essas tarefas sejam realizadas automaticamente. O que a empresa deve fazer para atender a esses requisitos?",
    options: [
      "Usar um template do AWS CloudFormation para implantar servidores de banco de dados MySQL em instâncias Amazon EC2.",
      "Implantar clusters de servidor de banco de dados MySQL em instâncias Amazon EC2.",
      "Usar Amazon RDS com um banco de dados MySQL.",
      "Migrar todos os dados do banco de data MySQL para o Amazon S3."
    ],
    correctAnswer: 2,
    explanation: "O Amazon RDS é um serviço gerenciado que automatiza tarefas como aplicação de patches e backups, simplificando a administração de bancos de dados MySQL."
  },
  {
    id: 55,
    text: "Uma empresa está configurando seu ambiente na Nuvem AWS. Os administradores da empresa precisam agrupar usuários e aplicar permissões ao grupo. Qual serviço ou recurso da AWS a empresa pode usar para atender a esses requisitos?",
    options: [
      "Grupos de recursos",
      "Marcação de recursos",
      "AWS Organizations",
      "AWS Identity and Access Management (IAM)"
    ],
    correctAnswer: 3,
    explanation: "O AWS IAM permite criar grupos de usuários e aplicar políticas de permissão a esses grupos, facilitando o gerenciamento de acesso e segurança."
  },
  {
    id: 56,
    text: "Qual serviço da AWS um profissional de nuvem deve usar para receber orientações em tempo real para provisionamento de recursos, com base nas melhores práticas da AWS relacionadas à segurança, otimização de custos e limites de serviço?",
    options: [
      "AWS Systems Manager",
      "AWS Trusted Advisor",
      "AWS Security Hub",
      "AWS Config"
    ],
    correctAnswer: 1,
    explanation: "O AWS Trusted Advisor fornece orientações em tempo real para otimizar o uso dos serviços da AWS, com base em melhores práticas de segurança, custo e desempenho."
  },
  {
    id: 57,
    text: "Amazon Elastic File System (Amazon EFS) e Amazon FSx oferecem que tipo de armazenamento?",
    options: [
      "Armazenamento de objetos",
      "Armazenamento de arquivos",
      "Armazenamento em bloco",
      "Armazenamento de instâncias"
    ],
    correctAnswer: 1,
    explanation: "O Amazon EFS e o Amazon FSx são serviços de armazenamento de arquivos que permitem compartilhar dados entre múltiplas instâncias e aplicativos."
  },
  {
    id: 58,
    text: "Uma empresa tem uma plataforma de mídia social onde os usuários enviam e compartilham fotos com outros usuários. A empresa quer identificar e remover fotos inadequadas. A empresa não tem cientistas de aprendizado de máquina (ML) e deve construir essa capacidade de detecção sem expertise em ML. Qual serviço da AWS a empresa deve usar para construir essa capacidade?",
    options: [
      "Amazon SageMaker",
      "Amazon Textract",
      "Amazon Comprehend",
      "Amazon Rekognition"
    ],
    correctAnswer: 3,
    explanation: "O Amazon Rekognition é um serviço de análise de imagens que permite identificar conteúdo inadequado em fotos sem a necessidade de expertise em aprendizado de máquina."
  },
  {
    id: 59,
    text: "Uma empresa quer hospedar seus bancos de dados relacionais na AWS. Os bancos de dados têm esquemas predefinidos que a empresa precisa replicar na AWS. Quais serviços da AWS a empresa poderia usar para os bancos de dados? (Selecione DUAS.)",
    options: [
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon Neptune",
      "Amazon DocumentDB (com compatibilidade com MongoDB)",
      "Amazon RDS"
    ],
    correctAnswer: [0, 4],
    explanation: "O Amazon Aurora e o Amazon RDS são serviços gerenciados que suportam bancos de dados relacionais com esquemas predefinidos, facilitando a migração e o gerenciamento."
  },
  {
    id: 60,
    text: "Quais são algumas vantagens de usar instâncias do Amazon EC2 para hospedar aplicativos na Nuvem AWS em vez de localmente? (Selecione DUAS.)",
    options: [
      "EC2 tem um acordo de nível de serviço (SLA) de 100%.",
      "EC2 tem otimização automática de custo de armazenamento.",
      "EC2 possui um modelo de preços flexível, pay-as-you-go.",
      "EC2 integra-se com Amazon VPC, AWS CloudTrail e AWS Identity and Access Management (IAM).",
      "O EC2 inclui gerenciamento de patches do sistema operacional."
    ],
    correctAnswer: [2, 3],
    explanation: "O EC2 oferece um modelo de preços flexível, pay-as-you-go, e integração com serviços como Amazon VPC, AWS CloudTrail e IAM, facilitando a hospedagem de aplicativos na nuvem."
  },
  {
    id: 61,
    text: "Qual dos seguintes é um benefício de desacoplar uma arquitetura de nuvem da AWS?",
    options: [
      "Custos reduzidos",
      "Capacidade de atualizar componentes independentemente",
      "Menos componentes para gerenciar",
      "Latência reduzida"
    ],
    correctAnswer: 1,
    explanation: "Desacoplar uma arquitetura permite que os componentes sejam atualizados independentemente, aumentando a flexibilidade e reduzindo o impacto de mudanças em um único componente."
  },
  {
    id: 62,
    text: "Um aplicativo está sendo executado em várias instâncias do Amazon EC2. A empresa quer tornar o aplicativo altamente disponível configurando um balanceador de carga com solicitações encaminhadas para as instâncias do EC2 com base nos caminhos de URL. Qual balanceador de carga da AWS atenderá a esses requisitos e exigirá o MENOR esforço para implantar?",
    options: [
      "AWS OpsWorks Load Balancer",
      "Network Load Balancer",
      "Load Balancer personalizado no Amazon EC2",
      "Application Load Balancer"
    ],
    correctAnswer: 3,
    explanation: "O Application Load Balancer (ALB) permite rotear solicitações com base em caminhos de URL, oferecendo alta disponibilidade e facilidade de implantação."
  },
  {
    id: 63,
    text: "Qual pilar do AWS Well-Architected Framework se concentra na capacidade de executar cargas de trabalho de forma eficaz, obter insights sobre operações e melhorar continuamente os processos e procedimentos de suporte?",
    options: [
      "Excelência operacional",
      "Eficiência de desempenho",
      "Confiabilidade",
      "Otimização de custos"
    ],
    correctAnswer: 0,
    explanation: "O pilar de Excelência Operacional do AWS Well-Architected Framework foca na execução eficaz de cargas de trabalho, obtenção de insights e melhoria contínua dos processos."
  },
  {
    id: 64,
    text: "Uma empresa quer garantir que duas instâncias do Amazon EC2 estejam em centros de dados separados com latência mínima de comunicação entre os centros de dados. Como a empresa pode atender a esse requisito?",
    options: [
      "Coloque as instâncias EC2 em duas Zonas de Disponibilidade separadas dentro da mesma Região da AWS.",
      "Coloque ambas as instâncias EC2 em um grupo de colocação para largura de banda dedicada.",
      "Coloque as instâncias EC2 em duas Regiões da AWS separadas, conectadas com uma conexão de peering VPC.",
      "Coloque uma instância EC2 on-premises e a outra em uma Região da AWS. Em seguida, conecte-as usando uma conexão VPN da AWS."
    ],
    correctAnswer: 0,
    explanation: "Colocar as instâncias EC2 em duas Zonas de Disponibilidade separadas dentro da mesma região garante que estejam em data centers diferentes, com latência mínima de comunicação."
  }
];

// Lista de questões ativa (será embaralhada)
let questions = [...originalQuestions];

// Estado do simulado
const examState = {
  currentQuestionIndex: 0,
  answers: {},
  markedForReview: new Set(),
  timeRemaining: 90 * 60, // 90 minutos em segundos
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
      if (examState.answers[question.id] !== undefined) {
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
              <div class="option ${examState.answers[question.id] === idx ? 'selected' : ''}" data-index="${idx}">
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

// Selecionar uma resposta
function selectAnswer(questionId, answerIndex) {
  examState.answers[questionId] = answerIndex;
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

// Renderizar resultados (Função modificada)
function renderResults() {
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;
  
  questions.forEach(question => {
      if (examState.answers[question.id] === undefined) {
          unansweredCount++;
      } else if (examState.answers[question.id] === question.correctAnswer) {
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
      let status = 'unanswered';
      let statusText = 'Não Respondida';
      
      if (examState.answers[question.id] !== undefined) {
          status = examState.answers[question.id] === question.correctAnswer ? 'correct' : 'incorrect';
          statusText = examState.answers[question.id] === question.correctAnswer ? 'Correta' : 'Incorreta';
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
                      <div class="option ${idx === question.correctAnswer ? 'correct' : ''} ${(examState.answers[question.id] === idx && examState.answers[question.id] !== question.correctAnswer) ? 'incorrect' : ''}">
                          ${String.fromCharCode(65 + idx)}. ${option}
                          ${idx === question.correctAnswer ? ' ✓' : ''}
                          ${(examState.answers[question.id] === idx && examState.answers[question.id] !== question.correctAnswer) ? ' ✗' : ''}
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
