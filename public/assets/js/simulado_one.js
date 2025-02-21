const perguntas = [
  {
    pergunta: "Um engenheiro de nuvem precisa baixar documentos de segurança e conformidade da AWS para uma auditoria futura. Qual serviço da AWS pode fornecer os documentos?",
    respostas: [
      "A) AWS Artifact",
      "B) AWS Trusted Advisor",
      "C) AWS Systems Manager",
      "D) AWS Well-Architected Tool"
    ],
    correta: 0
  },
  {
    pergunta: "Quais dos seguintes são benefícios que uma empresa recebe ao mover uma carga de trabalho de produção local para a AWS? (Selecione DUAS.)",
    respostas: [
      "A) A AWS fornece economias de escala.",
      "B) A AWS treina a equipe da empresa sobre o uso de todos os serviços da AWS.",
      "C) A AWS oferece alta disponibilidade.",
      "D) A AWS oferece suporte gratuito de gerentes técnicos de conta (TAMs).",
      "E) A AWS gerencia toda a segurança na nuvem."
    ],
    correta: [0, 2]
  },
  {
    pergunta: "Qual serviço ou ferramenta da AWS fornece recomendações para ajudar os usuários a dimensionar corretamente as instâncias Amazon EC2 com base em dados históricos de uso da carga de trabalho?",
    respostas: [
      "A) AWS App Runner",
      "B) AWS Compute Optimizer",
      "C) AWS Systems Manager",
      "D) AWS Pricing Calculator"
    ],
    correta: 1
  },
  {
    pergunta: "Qual plano de suporte da AWS oferece aos clientes acesso a um gerente de conta técnica (TAM) da AWS?",
    respostas: [
      "A) Suporte ao Desenvolvedor AWS",
      "B) Suporte Básico AWS",
      "C) Suporte Empresarial AWS",
      "D) Suporte Empresarial AWS"
    ],
    correta: 2
  },
  {
    pergunta: "Uma empresa quer gerenciar centralmente políticas de segurança e serviços de cobrança em um ambiente AWS com várias contas. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
    respostas: [
      "A) AWS Identity and Access Management (IAM)",
      "B) AWS Resource Access Manager (AWS RAM)",
      "C) AWS Config",
      "D) AWS Organizations"
    ],
    correta: 3
  },
  {
    pergunta: "Uma empresa planeja migrar para a AWS e quer criar estimativas de custo para seus casos de uso da AWS. Qual serviço ou ferramenta da AWS a empresa pode usar para atender a esses requisitos?",
    respostas: [
      "A) AWS Budgets",
      "B) Amazon CloudWatch",
      "C) AWS Cost Explorer",
      "D) AWS Pricing Calculator"
    ],
    correta: 3
  },
  {
    pergunta: "Qual recurso da Nuvem AWS dá aos usuários a capacidade de pagar com base nas necessidades atuais em vez das necessidades previstas?",
    respostas: [
      "A) Descontos por volume",
      "B) Preços pay-as-you-go (pague conforme o uso)",
      "C) Savings Plans",
      "D) AWS Budgets"
    ],
    correta: 1
  },
  {
    pergunta: "Qual dos seguintes é um princípio de eficiência de custos relacionado à Nuvem AWS?",
    respostas: [
      "A) Marcar todos os recursos da AWS.",
      "B) Usar AWS Organizations para combinar as despesas de várias contas em uma única fatura.",
      "C) Usar o Painel de Faturamento para acessar informações sobre faturas mensais.",
      "D) Dimensionar serviços com base nos requisitos de capacidade."
    ],
    correta: 3
  },
  {
    pergunta: "Qual prática recomendada de governança de custos este exemplo mostra?",
    respostas: [
      "A) Aplicação de marcação",
      "B) Controles de recursos",
      "C) Alocação de custos",
      "D) Otimização de arquitetura"
    ],
    correta: 3
  },
  {
    pergunta: "Qual princípio de design deve ser considerado ao arquitetar na Nuvem AWS?",
    respostas: [
      "A) Pensar nos servidores como recursos não descartáveis.",
      "B) Usar integração síncrona de serviços.",
      "C) Implementar as regras menos permissivas para grupos de segurança.",
      "D) Projetar componentes fracamente acoplados."
    ],
    correta: 3
  },
  {
    pergunta: "Uma empresa precisa de uma rede de entrega de conteúdo que forneça entrega segura de dados, vídeos, aplicativos e APIs para usuários globalmente com baixa latência e altas velocidades de transferência. Qual serviço da AWS atende a esses requisitos?",
    respostas: [
      "A) Amazon Elastic Transcoder",
      "B) Amazon CloudFront",
      "C) Elastic Load Balancing",
      "D) Amazon S3"
    ],
    correta: 1
  },
  {
    pergunta: "Qual tarefa requer o uso das credenciais do usuário root da conta AWS?",
    respostas: [
      "A) A criação de uma organização no AWS Organizations",
      "B) A mudança para um plano de Suporte AWS diferente",
      "C) A exclusão de instâncias Amazon EC2",
      "D) A exclusão de usuários IAM"
    ],
    correta: 0
  },
  {
    pergunta: "Quais são as vantagens de migrar para a nuvem da AWS? (Selecione DUAS.)",
    respostas: [
      "A) A capacidade de transferir a responsabilidade de toda a segurança para a AWS.",
      "B) Não precisar mais adivinhar a capacidade que será necessária.",
      "C) Não se preocupar mais com controles de acesso dos usuários.",
      "D) A capacidade de usar o modelo pay-as-you-go.",
      "E) A capacidade de ter controle total sobre a infraestrutura física."
    ],
    correta: [1, 3]
  },
  {
    pergunta: "Uma grande empresa tem uma carga de trabalho que requer que o hardware permaneça no local. A empresa quer usar os mesmos serviços de gerenciamento e controle que atualmente usa na AWS. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
    respostas: [
      "A) AWS Ground Station",
      "B) AWS Fargate",
      "C) AWS Device Farm",
      "D) AWS Outposts"
    ],
    correta: 3
  },
  {
    pergunta: "Qual serviço ou recurso da AWS é usado para solucionar problemas de conectividade de rede entre instâncias Amazon EC2?",
    respostas: [
      "A) AWS Certificate Manager (ACM)",
      "B) Internet gateway",
      "C) AWS CloudHSM",
      "D) VPC Flow Logs"
    ],
    correta: 3
  },
  {
    pergunta: "Uma empresa está projetando um aplicativo web que será executado em instâncias do Amazon EC2. Quais serviços e recursos da AWS melhorarão a disponibilidade e reduzirão o impacto de falhas para este aplicativo? (Selecione DUAS.)",
    respostas: [
      "A) Configuração do AWS Server Migration Service (AWS SMS) para mover as instâncias EC2 para uma região diferente da AWS.",
      "B) Recursos distribuídos por várias Zonas de Disponibilidade.",
      "C) Recursos que estão distribuídos em vários pontos de presença da AWS.",
      "D) ACLs de sub-rede VPC para verificar a integridade de um serviço.",
      "E) Amazon EC2 Auto Scaling para as instâncias EC2."
    ],
    correta: [1, 4]
  },
  {
    pergunta: "Qual benefício está incluído em um plano de Suporte Empresarial da AWS?",
    respostas: [
      "A) Suporte designado de um gerente técnico de conta (TAM) da AWS.",
      "B) Conformidade gerenciada como código com AWS Config.",
      "C) Suporte à Rede de Parceiros AWS (APN) sem custo.",
      "D) Suporte no local de engenheiros da AWS."
    ],
    correta: 0
  },
  {
    pergunta: "Uma empresa armazena dados em um bucket do Amazon S3. A empresa deve controlar quem tem permissão para ler, escrever ou excluir objetos que a empresa armazena no bucket do S3. Qual tarefa é responsabilidade da AWS, de acordo com o modelo de responsabilidade compartilhada da AWS?",
    respostas: [
      "A) Garantir a segurança e a proteção ambiental da infraestrutura da AWS que hospeda Workspaces.",
      "B) Fornecer segurança para contas de usuário do Workspaces através do AWS Identity and Access Management (IAM).",
      "C) Configurar o AWS CloudTrail para registrar chamadas de API e atividade de usuários.",
      "D) Configurar autenticação multifator (MFA) para cada conta de usuário do Workspaces."
    ],
    correta: 0
  },
  {
    pergunta: "Uma Zona de Disponibilidade consiste em:",
    respostas: [
      "A) um ou mais hosts físicos em um único data center.",
      "B) dois ou mais hosts físicos em múltiplos data centers.",
      "C) um ou mais data centers em uma única localização.",
      "D) dois ou mais data centers em várias localizações."
    ],
    correta: 2
  },
  {
    pergunta: "Um desenvolvedor precisa criar um aplicativo para uma empresa de varejo. O aplicativo deve fornecer recomendações de produtos em tempo real com base em aprendizado de máquina. Qual serviço da AWS o desenvolvedor deve usar para atender a esse requisito?",
    respostas: [
      "A) AWS Health Dashboard",
      "B) Amazon Transcribe",
      "C) Amazon Forecast",
      "D) Amazon Personalize"
    ],
    correta: 3
  },
  {
    pergunta: "Uma empresa implanta seu aplicativo em várias Regiões da AWS e configura failover automático entre essas Regiões. Qual conceito de nuvem essa arquitetura representa?",
    respostas: [
      "A) Escalabilidade",
      "B) Segurança",
      "C) Otimização de custos",
      "D) Confiabilidade"
    ],
    correta: 3
  },
  {
    pergunta: "Quais dos seguintes são serviços de autenticação de usuários gerenciados pela AWS? (Selecione DUAS.)",
    respostas: [
      "A) AWS License Manager",
      "B) Amazon Cognito",
      "C) AWS Lambda",
      "D) AWS CodeStar",
      "E) AWS Identity and Access Management (IAM)"
    ],
    correta: [1, 4]
  },
  {
    pergunta: "Qual dos seguintes promove as melhores práticas de arquitetura da Nuvem AWS para projetar e operar sistemas confiáveis, seguros, eficientes e econômicos?",
    respostas: [
      "A) AWS Serverless Application Model framework",
      "B) AWS Well-Architected Framework",
      "C) Suporte Empresarial AWS",
      "D) Princípio do menor privilégio"
    ],
    correta: 1
  },
  {
    pergunta: "Uma empresa recentemente migrou para a Nuvem AWS. A empresa precisa determinar se suas instâncias Amazon EC2 recém-importadas são do tamanho e tipo apropriados. Quais serviços da AWS podem fornecer essas informações para a empresa? (Selecione DUAS.)",
    respostas: [
      "A) AWS Compute Optimizer",
      "B) Amazon Forecast",
      "C) AWS Control Tower",
      "D) AWS Auto Scaling",
      "E) AWS Trusted Advisor"
    ],
    correta: [0, 4]
  },
  {
    pergunta: "De acordo com o modelo de responsabilidade compartilhada da AWS, quais das seguintes opções são responsabilidades da AWS? (Selecione DUAS.)",
    respostas: [
      "A) Credenciais e políticas",
      "B) Segurança física do hardware",
      "C) Sistemas operacionais convidados",
      "D) Infraestrutura de rede e virtualização de infraestrutura",
      "E) Segurança dos dados da aplicação"
    ],
    correta: [1, 3]
  },
  {
    pergunta: "Qual das seguintes é uma vantagem que os usuários experimentam ao mover cargas de trabalho on-premises para a Nuvem AWS?",
    respostas: [
      "A) Eliminação de despesas para operar e manter data centers.",
      "B) Eliminação de despesas operacionais.",
      "C) Descontos de preço que são idênticos aos descontos de provedores de hardware.",
      "D) Distribuição de todos os controles operacionais para a AWS."
    ],
    correta: 0
  },
  {
    pergunta: "Uma empresa usa Amazon Workspaces. O que um usuário pode realizar usando o AWS CloudTrail?",
    respostas: [
      "A) Avaliar a conformidade das configurações dos recursos da AWS com políticas e diretrizes.",
      "B) Garantir que as instâncias Amazon EC2 estejam atualizadas com os últimos patches de segurança.",
      "C) Registrar chamadas de API feitas para os serviços da AWS.",
      "D) Gerar um relatório de credenciais de usuários IAM."
    ],
    correta: 2
  },
  {
    pergunta: "Quais opções a AWS disponibiliza para clientes que desejam aprender sobre segurança na nuvem em um ambiente conduzido por instrutor? (Selecione DUAS.)",
    respostas: [
      "A) Fóruns da AWS",
      "B) AWS Online Tech Talks",
      "C) AWS Trusted Advisor",
      "D) Treinamento em Sala de Aula da AWS",
      "E) Blog da AWS"
    ],
    correta: [1, 3]
  },
  {
    pergunta: "Qual atividade as empresas podem realizar usando AWS Organizations?",
    respostas: [
      "A) Monitorar o desempenho de aplicativos.",
      "B) Gerenciar políticas de controle de serviço (SCPs).",
      "C) Migrar aplicativos para microservices.",
      "D) Solucionar problemas de desempenho de aplicativos."
    ],
    correta: 1
  },
  {
    pergunta: "Uma empresa tem duas contas AWS em uma organização no AWS Organizations para faturamento consolidado. Todos os recursos da AWS da empresa estão hospedados em uma Região AWS. A Conta A comprou cinco Instâncias Reservadas Padrão (RIs) da Amazon EC2 e tem quatro instâncias EC2 em execução. A Conta B não comprou nenhuma RI e também tem quatro instâncias EC2 em execução. Qual declaração é verdadeira sobre o preço dessas oito instâncias?",
    respostas: [
      "A) Cinco instâncias serão cobradas como RIs, e três serão cobradas como instâncias regulares.",
      "B) Quatro instâncias serão cobradas como RIs, e quatro serão cobradas como instâncias regulares.",
      "C) As oito instâncias serão cobradas como instâncias regulares.",
      "D) As oito instâncias serão cobradas como RIs."
    ],
    correta: 1
  },
  {
    pergunta: "Qual serviço ou ferramenta da AWS o AWS Control Tower usa para criar recursos?",
    respostas: [
      "A) AWS CloudFormation",
      "B) AWS Directory Service",
      "C) AWS Cost Explorer",
      "D) AWS Trusted Advisor"
    ],
    correta: 0
  },
  {
    pergunta: "Uma empresa precisa executar código em resposta a uma notificação de evento que ocorre quando objetos são carregados em um bucket do Amazon S3. Qual serviço da AWS se integrará diretamente com a notificação de evento?",
    respostas: [
      "A) AWS Lambda",
      "B) Amazon EC2",
      "C) Amazon Elastic Container Registry (Amazon ECR)",
      "D) AWS Elastic Beanstalk"
    ],
    correta: 0
  },
  {
    pergunta: "Uma empresa precisa usar painéis e gráficos para analisar insights a partir de dados de negócios. Qual serviço da AWS fornecerá os painéis e gráficos para esses insights?",
    respostas: [
      "A) Amazon Macie",
      "B) AWS CloudTrail",
      "C) Amazon QuickSight",
      "D) Amazon Aurora"
    ],
    correta: 2
  },
  {
    pergunta: "Uma empresa está hospedando um aplicativo web em um contêiner Docker no Amazon EC2. A AWS é responsável por qual das seguintes tarefas?",
    respostas: [
      "A) Gerenciar o sistema operacional convidado, incluindo atualizações e patches de segurança.",
      "B) Escalar a aplicação web e os serviços desenvolvidos com Docker.",
      "C) Realizar manutenção de hardware nas instalações da AWS que executam a Nuvem AWS.",
      "D) Provisionamento ou agendamento de contêineres para executar em clusters e manter sua disponibilidade."
    ],
    correta: 2
  },
  {
    pergunta: "O que a classe de armazenamento Amazon S3 Intelligent-Tiering oferece?",
    respostas: [
      "A) Flexibilidade de pagamento ao reservar capacidade de armazenamento.",
      "B) Armazenamento seguro, durável e de menor custo para arquivamento de dados.",
      "C) Retenção a longo prazo de dados copiando os dados para um volume Amazon Elastic Block Store (Amazon EBS) criptografado.",
      "D) Economia automática de custos movendo objetos entre camadas com base nas mudanças nos padrões de acesso."
    ],
    correta: 3
  },
  {
    pergunta: "Qual motor de banco de dados é compatível com o Amazon RDS?",
    respostas: [
      "A) Neo4j",
      "B) Apache Cassandra",
      "C) MongoDB",
      "D) PostgreSQL"
    ],
    correta: 3
  },
  {
    pergunta: "Qual serviço ou recurso da AWS pode ser usado para estimar custos antes da implantação?",
    respostas: [
      "A) AWS Free Tier",
      "B) Relatório de Custo e Uso da AWS",
      "C) AWS Billing and Cost Management",
      "D) AWS Pricing Calculator"
    ],
    correta: 3
  },
  {
    pergunta: "A base de usuários de uma empresa precisa acessar remotamente computadores de desktop virtual da internet. Qual serviço da AWS fornece essa funcionalidade?",
    respostas: [
      "A) Amazon Cognito",
      "B) Amazon Upstream 2.0",
      "C) Amazon Workspaces",
      "D) Amazon Connect"
    ],
    correta: 2
  },
  {
    pergunta: "Uma empresa quer proteger suas informações, sistemas e ativos na Nuvem AWS enquanto realiza tarefas de avaliação e mitigação de riscos. Qual pilar do AWS Well-Architected Framework é suportado por esses objetivos?",
    respostas: [
      "A) Segurança",
      "B) Eficiência de desempenho",
      "C) Excelência operacional",
      "D) Confiabilidade"
    ],
    correta: 0
  },
  {
    pergunta: "Uma empresa quer usar um serviço gerenciado para simplificar a configuração, operação e escalabilidade de seu banco de dados MySQL na Nuvem AWS. Qual serviço da AWS atenderá a esses requisitos?",
    respostas: [
      "A) Amazon Redshift",
      "B) Amazon DynamoDB",
      "C) Amazon EMR",
      "D) Amazon RDS"
    ],
    correta: 3
  },
  {
    pergunta: "Uma empresa está usando um serviço de terceiros para fazer backup de 10 TB de dados em uma biblioteca de fitas. O servidor de backup local está ficando sem espaço. A empresa quer usar os serviços da AWS para os backups sem alterar seus fluxos de trabalho de backup existentes. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
    respostas: [
      "A) AWS Storage Gateway",
      "B) Amazon Elastic Container Service (Amazon ECS)",
      "C) AWS Lambda",
      "D) Amazon Elastic Block Store (Amazon EBS)"
    ],
    correta: 0
  },
  {
    pergunta: "Quais princípios de design suportam o pilar de confiabilidade do AWS Well-Architected Framework? (Selecione DUAS.)",
    respostas: [
      "A) Recuperar automaticamente de falhas.",
      "B) Habilitar rastreabilidade.",
      "C) Escalar automaticamente para atender à demanda.",
      "D) Implantar recursos globalmente para melhorar o tempo de resposta.",
      "E) Executar operações como código."
    ],
    correta: [0, 2]
  },
  {
    pergunta: "Qual opção é uma vantagem da computação em nuvem da AWS que minimiza os custos variáveis?",
    respostas: [
      "A) Alta disponibilidade",
      "B) Agilidade",
      "C) Alcance global",
      "D) Economias de escala"
    ],
    correta: 3
  },
  {
    pergunta: "Quais fatores afetam os custos na Nuvem AWS? (Selecione DUAS.)",
    respostas: [
      "A) O número de funções AWS Lambda não utilizadas.",
      "B) Transferências de dados de entrada sem aceleração.",
      "C) Recursos de computação que estão atualmente em uso.",
      "D) Transferências de dados de saída sem aceleração.",
      "E) O número de buckets Amazon S3 configurados."
    ],
    correta: [2, 3]
  },
  {
    pergunta: "Uma empresa tem armazenado relatórios mensais em um bucket do Amazon S3. A empresa exporta os dados dos relatórios para arquivos de valores separados por vírgulas (.csv). Um desenvolvedor deseja escrever uma consulta simples que possa ler todos esses arquivos e gerar um relatório resumido. Qual serviço ou recurso da AWS o desenvolvedor deve usar para atender a esses requisitos com a MENOR quantidade de esforço operacional?",
    respostas: [
      "A) Amazon S3 Select",
      "B) Amazon Redshift",
      "C) Amazon Athena",
      "D) Amazon EC2"
    ],
    correta: 2
  },
  {
    pergunta: "Qual serviço ou ferramenta da AWS ajuda a gerenciar centralmente o faturamento e permitir o acesso controlado a recursos entre contas da AWS?",
    respostas: [
      "A) AWS Organizations",
      "B) AWS Cost Explorer",
      "C) AWS Budgets",
      "D) AWS Identity and Access Management (IAM)"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço ou recurso da AWS é usado para enviar mensagens de texto e e-mail a partir de aplicativos distribuídos?",
    respostas: [
      "A) Amazon Simple Email Service (Amazon SES)",
      "B) Amazon Simple Queue Service (Amazon SQS)",
      "C) Alertas do Amazon CloudWatch",
      "D) Amazon Simple Notification Service (Amazon SNS)"
    ],
    correta: 3
  },
  {
    pergunta: "Quando um usuário quer utilizar suas licenças de software existentes por soquete, por núcleo ou por máquina virtual para um servidor Microsoft Windows em execução na AWS, qual tipo de instância do Amazon EC2 é necessário?",
    respostas: [
      "A) Instâncias Dedicadas",
      "B) Instâncias Spot",
      "C) Instâncias Reservadas",
      "D) Hosts Dedicados"
    ],
    correta: 3
  },
  {
    pergunta: "Qual das seguintes opções descreve uma Região da AWS?",
    respostas: [
      "A) Uma visão global do ambiente de computação em nuvem de um usuário.",
      "B) Um conjunto de data centers abrangendo vários países.",
      "C) Uma localização específica dentro de uma área geográfica que fornece alta disponibilidade.",
      "D) Uma coleção de bancos de dados que podem ser acessados apenas a partir de uma área geográfica específica."
    ],
    correta: 2
  },
  {
    pergunta: "Qual serviço da AWS deve um engenheiro de nuvem usar para visualizar chamadas de API para serviços da AWS?",
    respostas: [
      "A) AWS Artifact",
      "B) Amazon CloudWatch",
      "C) AWS Config",
      "D) AWS CloudTrail"
    ],
    correta: 3
  },
  {
    pergunta: "Quais são as características das Zonas de Disponibilidade? (Selecione DUAS.)",
    respostas: [
      "A) Zonas de Disponibilidade dentro de uma região da AWS compartilham energia redundante, rede e conectividade.",
      "B) Todo o tráfego entre as Zonas de Disponibilidade é criptografado.",
      "C) Cada Zona de Disponibilidade contém um único data center.",
      "D) As Zonas de Disponibilidade são fisicamente separadas por uma distância mínima de 150 km (100 milhas).",
      "E) Todas as Zonas de Disponibilidade em uma Região da AWS são interconectadas com uma rede de alta largura de banda e baixa latência."
    ],
    correta: [0, 4]
  },
  {
    pergunta: "Uma empresa implanta seu aplicativo em instâncias do Amazon EC2. O aplicativo ocasionalmente experimenta aumentos súbitos na demanda. A empresa quer garantir que seu aplicativo possa responder a mudanças na demanda ao menor custo possível. Qual serviço ou ferramenta da AWS atenderá a esses requisitos?",
    respostas: [
      "A) AWS Well-Architected Framework",
      "B) AWS Compute Optimizer",
      "C) AWS Auto Scaling",
      "D) AWS Cost Explorer"
    ],
    correta: 2
  },
  {
    pergunta: "Qual serviço da AWS oferece aos usuários a capacidade de provisionar uma conexão de rede dedicada e privada da sua rede interna para a AWS?",
    respostas: [
      "A) AWS CloudHSM",
      "B) Amazon Connect",
      "C) AWS Direct Connect",
      "D) AWS VPN"
    ],
    correta: 2
  },
  {
    pergunta: "A equipe de TI de uma empresa está gerenciando clusters de servidores de banco de dados MySQL. A equipe de TI precisa aplicar patches no banco de dados e tirar snapshots de backup dos dados nos clusters. A empresa quer mover essa carga de trabalho para a AWS para que essas tarefas sejam realizadas automaticamente. O que a empresa deve fazer para atender a esses requisitos?",
    respostas: [
      "A) Usar um template do AWS CloudFormation para implantar servidores de banco de dados MySQL em instâncias Amazon EC2.",
      "B) Implantar clusters de servidor de banco de dados MySQL em instâncias Amazon EC2.",
      "C) Usar Amazon RDS com um banco de dados MySQL.",
      "D) Migrar todos os dados do banco de dados MySQL para o Amazon S3."
    ],
    correta: 2
  },
  {
    pergunta: "Uma empresa está configurando seu ambiente na Nuvem AWS. Os administradores da empresa precisam agrupar usuários e aplicar permissões ao grupo. Qual serviço ou recurso da AWS a empresa pode usar para atender a esses requisitos?",
    respostas: [
      "A) Grupos de recursos",
      "B) Marcação de recursos",
      "C) AWS Organizations",
      "D) AWS Identity and Access Management (IAM)"
    ],
    correta: 3
  },
  {
    pergunta: "Qual serviço da AWS um profissional de nuvem deve usar para receber orientações em tempo real para provisionamento de recursos, com base nas melhores práticas da AWS relacionadas à segurança, otimização de custos e limites de serviço?",
    respostas: [
      "A) AWS Systems Manager",
      "B) AWS Trusted Advisor",
      "C) AWS Security Hub",
      "D) AWS Config"
    ],
    correta: 1
  },
  {
    pergunta: "Amazon Elastic File System (Amazon EFS) e Amazon FSx oferecem que tipo de armazenamento?",
    respostas: [
      "A) Armazenamento de objetos",
      "B) Armazenamento de arquivos",
      "C) Armazenamento em bloco",
      "D) Armazenamento de instâncias"
    ],
    correta: 1
  },
  {
    pergunta: "Uma empresa tem uma plataforma de mídia social onde os usuários enviam e compartilham fotos com outros usuários. A empresa quer identificar e remover fotos inadequadas. A empresa não tem cientistas de aprendizado de máquina (ML) e deve construir essa capacidade de detecção sem expertise em ML. Qual serviço da AWS a empresa deve usar para construir essa capacidade?",
    respostas: [
      "A) Amazon SageMaker",
      "B) Amazon Textract",
      "C) Amazon Comprehend",
      "D) Amazon Rekognition"
    ],
    correta: 3
  },
  {
    pergunta: "Uma empresa quer hospedar seus bancos de dados relacionais na AWS. Os bancos de dados têm esquemas predefinidos que a empresa precisa replicar na AWS. Quais serviços da AWS a empresa poderia usar para os bancos de dados? (Selecione DUAS.)",
    respostas: [
      "A) Amazon Aurora",
      "B) Amazon DynamoDB",
      "C) Amazon Neptune",
      "D) Amazon DocumentDB (com compatibilidade com MongoDB)",
      "E) Amazon RDS"
    ],
    correta: [0, 4]
  },
  {
    pergunta: "Quais são algumas vantagens de usar instâncias do Amazon EC2 para hospedar aplicativos na Nuvem AWS em vez de localmente? (Selecione DUAS.)",
    respostas: [
      "A) EC2 tem um acordo de nível de serviço (SLA) de 100%.",
      "B) EC2 tem otimização automática de custo de armazenamento.",
      "C) EC2 possui um modelo de preços flexível, pay-as-you-go.",
      "D) EC2 integra-se com Amazon VPC, AWS CloudTrail e AWS Identity and Access Management (IAM).",
      "E) O EC2 inclui gerenciamento de patches do sistema operacional."
    ],
    correta: [2, 3]
  },
  {
    pergunta: "Qual dos seguintes é um benefício de desacoplar uma arquitetura de nuvem da AWS?",
    respostas: [
      "A) Custos reduzidos",
      "B) Capacidade de atualizar componentes independentemente",
      "C) Menos componentes para gerenciar",
      "D) Latência reduzida"
    ],
    correta: 1
  },
  {
    pergunta: "Um aplicativo está sendo executado em várias instâncias do Amazon EC2. A empresa quer tornar o aplicativo altamente disponível configurando um balanceador de carga com solicitações encaminhadas para as instâncias do EC2 com base nos caminhos de URL. Qual balanceador de carga da AWS atenderá a esses requisitos e exigirá o MENOR esforço para implantar?",
    respostas: [
      "A) AWS OpsWorks Load Balancer",
      "B) Network Load Balancer",
      "C) Load Balancer personalizado no Amazon EC2",
      "D) Application Load Balancer"
    ],
    correta: 3
  },
  {
    pergunta: "Qual pilar do AWS Well-Architected Framework se concentra na capacidade de executar cargas de trabalho de forma eficaz, obter insights sobre operações e melhorar continuamente os processos e procedimentos de suporte?",
    respostas: [
      "A) Excelência operacional",
      "B) Eficiência de desempenho",
      "C) Confiabilidade",
      "D) Otimização de custos"
    ],
    correta: 0
  },
  {
    pergunta: "Uma empresa quer garantir que duas instâncias do Amazon EC2 estejam em centros de dados separados com latência mínima de comunicação entre os centros de dados. Como a empresa pode atender a esse requisito?",
    respostas: [
      "A) Coloque as instâncias EC2 em duas Zonas de Disponibilidade separadas dentro da mesma Região da AWS.",
      "B) Coloque ambas as instâncias EC2 em um grupo de colocação para largura de banda dedicada.",
      "C) Coloque as instâncias EC2 em duas Regiões da AWS separadas, conectadas com uma conexão de peering VPC.",
      "D) Coloque uma instância EC2 on-premises e a outra em uma Região da AWS. Em seguida, conecte-as usando uma conexão VPN da AWS."
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

