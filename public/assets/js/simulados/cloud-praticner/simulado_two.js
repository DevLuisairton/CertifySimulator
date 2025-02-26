const originalQuestions = [
  {
    id: 1,
    text: "Uma empresa possui uma única instância Amazon EC2. A empresa quer adotar uma arquitetura altamente disponível. O que a empresa pode fazer para atender a esse requisito?",
    options: [
      "Escalar verticalmente para um tamanho maior de instância EC2.",
      "Comprar uma Instância Dedicada do EC2.",
      "Mudar a família de instâncias do EC2 para uma instância otimizada para computação.",
      "Escalar horizontalmente em várias Zonas de Disponibilidade."
    ],
    correctAnswer: 3,
    explanation: "Escalar horizontalmente em várias Zonas de Disponibilidade aumenta a disponibilidade da aplicação, garantindo que ela continue funcionando mesmo em caso de falha em uma única zona."
  },
  {
    id: 2,
    text: "Qual serviço da AWS fornece a maneira MAIS SIMPLES para a empresa estabelecer um site na AWS?",
    options: [
      "AWS Lambda",
      "AWS Elastic Beanstalk",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Lightsail"
    ],
    correctAnswer: 3,
    explanation: "O Amazon Lightsail é projetado para ser uma solução simples e rápida para implantar sites e aplicativos, oferecendo planos pré-configurados com custo fixo."
  },
  {
    id: 3,
    text: "Uma empresa está planejando uma migração para a AWS Cloud e quer examinar os custos associados a diferentes cargas de trabalho. Qual ferramenta da AWS atenderá a esses requisitos?",
    options: [
      "AWS Budgets",
      "AWS Pricing Calculator",
      "Relatório de Custos e Uso da AWS",
      "AWS Cost Explorer"
    ],
    correctAnswer: 1,
    explanation: "O AWS Pricing Calculator permite estimar os custos de diferentes cargas de trabalho na AWS, ajudando no planejamento financeiro antes da migração."
  },
  {
    id: 4,
    text: "Quais ações são exemplos do esforço de uma empresa para dimensionar corretamente seus recursos AWS para controlar os custos da nuvem? (Selecione DUAS.)",
    options: [
      "Mudar de Amazon RDS para Amazon DynamoDB para acomodar conjuntos de dados NoSQL.",
      "Substituir instâncias existentes do Amazon EC2 pelo AWS Elastic Beanstalk.",
      "Usar políticas do ciclo de vida do Amazon S3 para mover objetos que os usuários acessam com pouca frequência para camadas de armazenamento de menor custo.",
      "Usar implantações Multi-AZ para o Amazon RDS.",
      "Basear a seleção de tipos de instâncias Amazon EC2 em padrões de utilização passada."
    ],
    correctAnswer: [2, 4],
    explanation: "Usar políticas de ciclo de vida do S3 e selecionar tipos de instâncias EC2 com base no uso passado são práticas eficazes para otimizar custos e dimensionar corretamente os recursos."
  },
  {
    id: 5,
    text: "Qual perspectiva do AWS Cloud Adoption Framework (AWS CAF) conecta tecnologia e negócios?",
    options: [
      "People",
      "Operações",
      "Segurança",
      "Governança"
    ],
    correctAnswer: 3,
    explanation: "A perspectiva de Governança do AWS CAF conecta tecnologia e negócios, garantindo que as decisões técnicas estejam alinhadas com os objetivos de negócios."
  },
  {
    id: 6,
    text: "Uma empresa precisa de ajuda para gerenciar várias contas AWS vinculadas que são relatadas em uma fatura consolidada. Qual plano de suporte da AWS inclui um concierge da AWS a quem a empresa pode pedir assistência?",
    options: [
      "AWS Developer Support",
      "AWS Business Support",
      "AWS Enterprise Support",
      "AWS Basic Support"
    ],
    correctAnswer: 2,
    explanation: "O plano de suporte Enterprise da AWS inclui um concierge que ajuda na gestão de contas e faturamento consolidado, além de suporte técnico 24/7."
  },
  {
    id: 7,
    text: "Como a empresa deve implantar a aplicação para atender a esses requisitos?",
    options: [
      "Em Instâncias Reservadas",
      "On AWS Direct Connect",
      "Em uma única Zona de Disponibilidade",
      "Em múltiplas Zonas de Disponibilidade"
    ],
    correctAnswer: 3,
    explanation: "Implantar em múltiplas Zonas de Disponibilidade garante alta disponibilidade e resiliência, reduzindo o risco de falhas em uma única zona."
  },
  {
    id: 8,
    text: "Uma empresa quer usar instâncias Amazon EC2 para uma carga de trabalho de produção estável que será executada por 1 ano. Qual opção de compra de instância atende a esses requisitos de forma mais econômica?",
    options: [
      "Instâncias On-Demand",
      "Dedicated Hosts",
      "Reserved Instances",
      "Instâncias Spot"
    ],
    correctAnswer: 2,
    explanation: "As Instâncias Reservadas oferecem descontos significativos para cargas de trabalho de longo prazo, como uma execução de 1 ano, em comparação com instâncias On-Demand ou Spot."
  },
  {
    id: 9,
    text: "Quais princípios de design uma empresa deve aplicar às cargas de trabalho da AWS Cloud para maximizar a sustentabilidade e minimizar o impacto ambiental? (Selecione DOIS.)",
    options: [
      "Forçar reinstalações frequentes de aplicativos pelos usuários.",
      "Minimizar o uso de serviços gerenciados.",
      "Reduzir a necessidade de reinstalações de aplicativos pelos usuários.",
      "Maximizar a utilização das instâncias do Amazon EC2.",
      "Minimizar a utilização das instâncias do Amazon EC2."
    ],
    correctAnswer: [2, 3],
    explanation: "Reduzir a necessidade de reinstalações e maximizar a utilização das instâncias EC2 ajudam a minimizar o desperdício de recursos e o impacto ambiental."
  },
  {
    id: 10,
    text: "Um usuário está movendo uma carga de trabalho de um data center local para uma arquitetura distribuída entre o data center local e a nuvem AWS. Que tipo de migração é essa?",
    options: [
      "Do local para nativo da nuvem",
      "Nativo da nuvem para híbrido",
      "De local para híbrido",
      "Hybrid to cloud native"
    ],
    correctAnswer: 2,
    explanation: "A migração de local para híbrido envolve a distribuição da carga de trabalho entre o data center local e a nuvem AWS, criando uma arquitetura híbrida."
  },
  {
    id: 11,
    text: "Qual serviço da AWS é projetado para ajudar os usuários a orquestrar um processo de fluxo de trabalho para um conjunto de funções AWS Lambda?",
    options: [
      "Amazon DynamoDB",
      "AWS CodePipeline",
      "AWS Batch",
      "AWS Step Functions"
    ],
    correctAnswer: 3,
    explanation: "O AWS Step Functions permite orquestrar fluxos de trabalho complexos envolvendo múltiplas funções Lambda, facilitando a automação de processos."
  },
  {
    id: 12,
    text: "Qual serviço ou ferramenta da AWS fornece acesso sob demanda a relatórios de segurança e conformidade da AWS e acordos online da AWS?",
    options: [
      "AWS Artifact",
      "Amazon Inspector",
      "Console de Faturamento da AWS",
      "AWS Trusted Advisor"
    ],
    correctAnswer: 0,
    explanation: "O AWS Artifact fornece acesso a relatórios de segurança, conformidade e acordos online, ajudando os usuários a atender a requisitos regulatórios."
  },
  {
    id: 13,
    text: "Uma empresa tem uma aplicação que é executada periodicamente em um ambiente on-premises. A aplicação é executada por algumas horas na maioria dos dias, mas é executada por 8 horas por dia durante uma semana no final de cada mês. Qual serviço ou recurso da AWS deve ser usado para hospedar a aplicação na AWS Cloud?",
    options: [
      "AWS Wavelength",
      "Amazon EC2 Standard Reserved Instances",
      "Application Load Balancer",
      "Amazon EC2 On-Demand Instances"
    ],
    correctAnswer: 3,
    explanation: "As instâncias On-Demand são ideais para cargas de trabalho intermitentes, pois permitem pagar apenas pelo tempo de uso, sem compromisso de longo prazo."
  },
  {
    id: 14,
    text: "Qual serviço da AWS está sempre disponível gratuitamente para os usuários?",
    options: [
      "AWS Identity and Access Management (IAM)",
      "Amazon ElastiCache",
      "AWS Secrets Manager",
      "Amazon Athena"
    ],
    correctAnswer: 0,
    explanation: "O AWS IAM é um serviço gratuito que permite gerenciar acesso e permissões para recursos da AWS."
  },
  {
    id: 15,
    text: "Qual princípio de design está incluído no pilar de excelência operacional do AWS Well-Architected Framework?",
    options: [
      "Criar documentação anotada.",
      "Garantir a eficiência do desempenho.",
      "Otimizar custos.",
      "Antecipar falhas."
    ],
    correctAnswer: 3,
    explanation: "Antecipar falhas é um princípio fundamental do pilar de Excelência Operacional, garantindo que os sistemas sejam resilientes e possam se recuperar de falhas."
  },
  {
    id: 16,
    text: "Uma empresa executa um banco de dados no Amazon Aurora na região us-east-1. A empresa tem um requisito de recuperação de desastres de que o banco de dados esteja disponível em outra região. Qual solução atende a esse requisito com mínima interrupção nas operações do banco de dados?",
    options: [
      "Implantar Réplicas Aurora.",
      "Criar snapshots de volumes do Amazon Elastic Block Store (Amazon EBS) para o Aurora e copiá-los para outra Região.",
      "Realizar uma implantação Multi-AZ do Aurora.",
      "Implantar réplicas de leitura Aurora cross-Region."
    ],
    correctAnswer: 3,
    explanation: "As réplicas de leitura cross-Region do Aurora permitem que o banco de dados esteja disponível em outra região com mínima interrupção, garantindo alta disponibilidade e recuperação de desastres."
  },
  {
    id: 17,
    text: "Qual serviço da AWS é usado para fornecer temporariamente credenciais de segurança federadas para um usuário ou aplicação?",
    options: [
      "AWS Certificate Manager",
      "Amazon GuardDuty",
      "AWS Simple Token Service (AWS STS)",
      "AWS Secrets Manager"
    ],
    correctAnswer: 2,
    explanation: "O AWS STS fornece credenciais de segurança temporárias e federadas, permitindo acesso seguro e controlado a recursos da AWS."
  },
  {
    id: 18,
    text: "Quais declarações explicam o valor comercial da migração para a nuvem AWS? (Selecione DUAS.)",
    options: [
      "A migração de aplicações empresariais para a AWS Cloud torna essas aplicações automaticamente disponíveis em dispositivos móveis.",
      "AWS availability and security provide the ability to improve service level agreements (SLAs) while reducing risk and unplanned downtime.",
      "Aplicativos são modernizados porque a migração para a AWS Cloud exige que as empresas re-arquitetem e reescrevam todos os aplicativos empresariais.",
      "Empresas que migram para a AWS Cloud reduzem custos de TI relacionados à infraestrutura, liberando orçamento para reinvestimento em outras áreas.",
      "Empresas que migram para a AWS Cloud eliminam a necessidade de planejar para alta disponibilidade e recuperação de desastres."
    ],
    correctAnswer: [1, 3],
    explanation: "A migração para a AWS Cloud melhora SLAs, reduz custos de infraestrutura e permite reinvestimento em outras áreas, além de aumentar a disponibilidade e segurança."
  },
  {
    id: 19,
    text: "Uma empresa quer mover suas atividades de desenvolvimento e compilação de aplicativos iOS para a AWS. Qual serviço ou recurso da AWS a empresa deve usar para essas atividades?",
    options: [
      "AWS CodeCommit",
      "AWS App Runner",
      "AWS Amplify",
      "Amazon EC2 M1 Mac instances"
    ],
    correctAnswer: 3,
    explanation: "As instâncias EC2 M1 Mac permitem compilar e desenvolver aplicativos iOS na AWS, oferecendo desempenho e compatibilidade com o ecossistema Apple."
  },
  {
    id: 20,
    text: "Quais opções são perspectivas que incluem capacidades fundamentais do AWS Cloud Adoption Framework (AWS CAF)? (Selecione DUAS.)",
    options: [
      "Eficiência de desempenho",
      "Sustentabilidade",
      "Segurança",
      "Confiabilidade",
      "Operações"
    ],
    correctAnswer: [0, 4],
    explanation: "Eficiência de desempenho e operações são perspectivas do AWS CAF que ajudam a garantir que as cargas de trabalho sejam otimizadas e gerenciadas de forma eficaz."
  },
  {
    id: 21,
    text: "Um usuário descobriu que uma instância Amazon EC2 está sem um volume de dados Amazon Elastic Block Store (Amazon EBS). O usuário quer determinar quando o volume EBS foi removido. Qual serviço da AWS fornecerá essa informação?",
    options: [
      "Amazon Timestream",
      "AWS Config",
      "Amazon QuickSight",
      "AWS Trusted Advisor"
    ],
    correctAnswer: 1,
    explanation: "O AWS Config rastreia alterações na configuração dos recursos da AWS, incluindo a remoção de volumes EBS, permitindo que o usuário determine quando o volume foi removido."
  },
  {
    id: 22,
    text: "Qual princípio de design da AWS Cloud uma empresa segue ao usar o AWS CloudTrail?",
    options: [
      "Recuperar automaticamente.",
      "Medir a eficiência.",
      "Garantir a rastreabilidade.",
      "Realizar operações como código."
    ],
    correctAnswer: 2,
    explanation: "O AWS CloudTrail garante a rastreabilidade ao registrar todas as chamadas de API feitas na conta da AWS, permitindo auditoria e monitoramento de atividades."
  },
  {
    id: 23,
    text: "Qual é a responsabilidade da AWS sob o modelo de responsabilidade compartilhada da AWS?",
    options: [
      "Aplicar os patches de segurança mais recentes no sistema operacional convidado no Amazon EC2.",
      "Ativar a criptografia no lado do servidor para buckets do Amazon S3.",
      "Configurar as regras do grupo de segurança que determinam quais portas estão abertas em uma instância Amazon EC2 Linux.",
      "Garantir a segurança da rede interna nos data centers da AWS."
    ],
    correctAnswer: 3,
    explanation: "De acordo com o modelo de responsabilidade compartilhada, a AWS é responsável pela segurança da infraestrutura física, incluindo a rede interna dos data centers."
  },
  {
    id: 24,
    text: "Uma empresa fornece uma aplicação de software como serviço (SaaS). A empresa tem um novo cliente baseado em um país diferente. Os dados do novo cliente precisam ser hospedados nesse país. Qual serviço ou componente de infraestrutura da AWS a empresa deve usar para atender a esse requisito?",
    options: [
      "Amazon S3 Object Lock",
      "Grupos de Colocação",
      "Regiões da AWS",
      "AWS Shield"
    ],
    correctAnswer: 2,
    explanation: "As Regiões da AWS permitem hospedar dados em locais geográficos específicos, atendendo a requisitos de soberania de dados e latência."
  },
  {
    id: 25,
    text: "Uma empresa está revisando o design de uma aplicação que será migrada de on-premises para uma única instância Amazon EC2. O que a empresa deve fazer para tornar a aplicação altamente disponível?",
    options: [
      "Provisionar instâncias adicionais do EC2 em outras Zonas de Disponibilidade.",
      "Provisionar a aplicação usando uma Instância Spot do EC2.",
      "Configurar um Application Load Balancer (ALB) e atribuir a instância EC2 como alvo do ALB.",
      "Usar uma Amazon Machine Image (AMI) para criar a instância EC2."
    ],
    correctAnswer: 0,
    explanation: "Provisionar instâncias em múltiplas Zonas de Disponibilidade aumenta a disponibilidade da aplicação, garantindo resiliência em caso de falha em uma única zona."
  },
  {
    id: 26,
    text: "Qual benefício da AWS Cloud ajuda as empresas a alcançar custos de uso mais baixos devido ao uso agregado de todos os usuários da AWS?",
    options: [
      "Maior velocidade e agilidade",
      "Sem necessidade de adivinhar a capacidade",
      "Economias de escala",
      "Capacidade de se tornar global em minutos"
    ],
    correctAnswer: 2,
    explanation: "As economias de escala permitem que a AWS ofereça preços mais baixos devido ao uso agregado de todos os clientes, reduzindo custos para cada usuário."
  },
  {
    id: 27,
    text: "Qual serviço da AWS é projetado para ajudar os usuários a criar interfaces de conversação em aplicativos usando voz e texto?",
    options: [
      "Amazon Comprehend",
      "Amazon Timestream",
      "Amazon Transcribe",
      "Amazon Lex"
    ],
    correctAnswer: 3,
    explanation: "O Amazon Lex permite criar interfaces de conversação (chatbots) usando voz e texto, integrando-se facilmente com outros serviços da AWS."
  },
  {
    id: 28,
    text: "Uma empresa quer orientação para otimizar o custo e o desempenho de seu ambiente AWS atual. Qual serviço ou ferramenta da AWS a empresa deve usar para identificar áreas de otimização?",
    options: [
      "Amazon QuickSight",
      "AWS Trusted Advisor",
      "AWS Organizations",
      "AWS Budgets"
    ],
    correctAnswer: 1,
    explanation: "O AWS Trusted Advisor fornece recomendações personalizadas para otimizar custos, desempenho, segurança e confiabilidade dos recursos da AWS."
  },
  {
    id: 29,
    text: "Qual serviço ou ferramenta da AWS fornece recomendações para ajudar os usuários a dimensionar corretamente as instâncias Amazon EC2 com base nos dados históricos de uso da carga de trabalho?",
    options: [
      "AWS Compute Optimizer",
      "AWS Pricing Calculator",
      "AWS App Runner",
      "AWS Systems Manager"
    ],
    correctAnswer: 0,
    explanation: "O AWS Compute Optimizer analisa padrões de uso e fornece recomendações para otimizar o dimensionamento das instâncias EC2, melhorando o desempenho e reduzindo custos."
  },
  {
    id: 30,
    text: "Uma empresa está usando o Amazon RDS. Uma empresa está lançando uma aplicação de negócios crítica em uma região AWS. Como a empresa pode aumentar a resiliência dessa aplicação?",
    options: [
      "Implantar a aplicação usando múltiplas VPCs.",
      "Implantar a aplicação usando múltiplas Zonas de Disponibilidade.",
      "Implantar a aplicação usando múltiplas sub-redes.",
      "Implantar uma cópia da aplicação em outra conta da AWS."
    ],
    correctAnswer: 1,
    explanation: "Implantar a aplicação em múltiplas Zonas de Disponibilidade aumenta a resiliência, garantindo que a aplicação continue funcionando mesmo em caso de falha em uma única zona."
  },
  {
    id: 31,
    text: "Uma empresa oferece um serviço de comércio eletrônico baseado na web que opera em duas Zonas de Disponibilidade dentro de uma única Região AWS. O serviço web distribui conteúdo armazenado na classe de armazenamento Amazon S3 Standard. A empresa deseja melhorar o desempenho do serviço web globalmente. O que a empresa deve fazer para atender a esse requisito?",
    options: [
      "Usar o Amazon API Gateway para o serviço web.",
      "Migrar os servidores de ecommerce do site para o Amazon EC2 com rede aprimorada.",
      "Mudar a classe de armazenamento do S3 para S3 Intelligent-Tiering.",
      "Implantar uma distribuição Amazon CloudFront para armazenar em cache o conteúdo do servidor web em locais de borda."
    ],
    correctAnswer: 3,
    explanation: "O Amazon CloudFront melhora o desempenho global ao armazenar em cache o conteúdo em locais de borda, reduzindo a latência para usuários em diferentes regiões."
  },
  {
    id: 32,
    text: "Uma empresa deve armazenar gravações de chamadas por 6 anos. O sistema de armazenamento deve ser altamente durável e econômico. Qual serviço da AWS atende a esses requisitos?",
    options: [
      "Amazon S3",
      "Amazon Kinesis",
      "AWS Snowball",
      "AWS Storage Gateway"
    ],
    correctAnswer: 0,
    explanation: "O Amazon S3 é altamente durável e econômico para armazenamento de longo prazo, especialmente com o uso de classes de armazenamento como S3 Glacier para reduzir custos."
  },
  {
    id: 33,
    text: "Quais serviços ou ferramentas da AWS são projetados para proteger uma carga de trabalho contra injeções de SQL, cross-site scripting e ataques DDoS? (Selecione DUAS.)",
    options: [
      "AWS WAF",
      "AWS Config",
      "Endpoint VPC",
      "AWS Shield Standard",
      "Virtual private gateway"
    ],
    correctAnswer: [0, 3],
    explanation: "O AWS WAF protege contra injeções de SQL e cross-site scripting, enquanto o AWS Shield Standard protege contra ataques DDoS."
  },
  {
    id: 34,
    text: "Uma empresa quer acessar um relatório sobre o impacto ambiental estimado do uso da AWS pela empresa. Qual serviço ou recurso da AWS a empresa deve usar para atender a esse requisito?",
    options: [
      "IAM policy",
      "Amazon Simple Notification Service (Amazon SNS)",
      "AWS Organizations",
      "Console de Faturamento da AWS"
    ],
    correctAnswer: 3,
    explanation: "O Console de Faturamento da AWS fornece relatórios sobre o impacto ambiental do uso da AWS, ajudando as empresas a monitorar sua pegada de carbono."
  },
  {
    id: 35,
    text: "Uma empresa quer executar suas cargas de trabalho de produção na AWS. A empresa precisa de um serviço de concierge, um gerente técnico de contas (TAM) designado pela AWS e suporte técnico disponível 24 horas por dia, 7 dias por semana. Qual plano de suporte da AWS atenderá a esses requisitos?",
    options: [
      "AWS Basic Support",
      "AWS Developer Support",
      "AWS Enterprise Support",
      "AWS Business Support"
    ],
    correctAnswer: 2,
    explanation: "O plano de suporte Enterprise da AWS inclui um concierge, um TAM dedicado e suporte técnico 24/7, atendendo às necessidades de cargas de trabalho críticas."
  },
  {
    id: 36,
    text: "Uma empresa está hospedando uma aplicação web em instâncias Amazon EC2. A empresa quer implementar condições personalizadas para filtrar e controlar o tráfego web de entrada. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      "Amazon GuardDuty",
      "AWS WAF",
      "AWS Shield",
      "Amazon Macie"
    ],
    correctAnswer: 1,
    explanation: "O AWS WAF permite criar regras personalizadas para filtrar e controlar o tráfego web de entrada, protegendo contra ataques comuns como injeção de SQL e cross-site scripting."
  },
  {
    id: 37,
    text: "Qual serviço da AWS fornece um serviço de busca empresarial altamente preciso e fácil de usar, alimentado por machine learning (ML)?",
    options: [
      "Amazon Polly",
      "Amazon Augmented AI (Amazon A2I)",
      "Amazon SageMaker",
      "Amazon Kendra"
    ],
    correctAnswer: 3,
    explanation: "O Amazon Kendra é um serviço de busca empresarial alimentado por ML que fornece resultados altamente precisos e fáceis de usar."
  },
  {
    id: 38,
    text: "Uma grande empresa tem vários departamentos. Cada departamento tem sua própria conta AWS. Cada departamento comprou instâncias reservadas Amazon EC2. Alguns departamentos não usam todas as instâncias reservadas que compraram, e outros departamentos precisam de mais instâncias reservadas do que compraram. A empresa precisa gerenciar as contas AWS de todos os departamentos para que os departamentos possam compartilhar as instâncias reservadas. Qual serviço ou ferramenta AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "AWS Trusted Advisor",
      "Cost Explorer",
      "AWS Organizations",
      "AWS Systems Manager"
    ],
    correctAnswer: 2,
    explanation: "O AWS Organizations permite gerenciar múltiplas contas AWS e compartilhar instâncias reservadas entre departamentos, otimizando custos e recursos."
  },
  {
    id: 39,
    text: "Uma empresa desenvolveu uma aplicação distribuída que se recupera de interrupções de forma graciosa. A aplicação processa periodicamente grandes volumes de dados usando várias instâncias Amazon EC2. A aplicação às vezes fica ociosa por meses. Qual opção de compra de instância EC2 é MAIS econômica para esse caso de uso?",
    options: [
      "Reserved Instances",
      "Instâncias Sob Demanda",
      "Spot Instances",
      "Instâncias Dedicadas"
    ],
    correctAnswer: 2,
    explanation: "As Spot Instances são ideais para cargas de trabalho intermitentes, pois oferecem custos significativamente mais baixos em comparação com instâncias On-Demand ou Reservadas."
  },
  {
    id: 40,
    text: "Um novo usuário da AWS que tem pouca experiência em nuvem quer construir uma aplicação usando os serviços da AWS. O usuário quer aprender como implementar serviços específicos da AWS a partir de exemplos de outros clientes. O usuário também quer fazer perguntas aos especialistas da AWS. Qual serviço ou recurso da AWS atenderá a esses requisitos?",
    options: [
      "AWS Marketplace",
      "AWS Health Dashboard",
      "AWS documentation",
      "AWS Online Tech Talks"
    ],
    correctAnswer: 3,
    explanation: "Os AWS Online Tech Talks oferecem webinars e sessões interativas onde os usuários podem aprender com exemplos de outros clientes e fazer perguntas a especialistas da AWS."
  },
  {
    id: 41,
    text: "Quais opções são partes interessadas comuns para a perspectiva de plataforma do AWS Cloud Adoption Framework (AWS CAF)? (Selecione DOIS.)",
    options: [
      "IT architects",
      "Engenheiros",
      "Diretores de Dados (CDOs)",
      "Diretores de Informação (CIOs)",
      "Diretores financeiros (CFOs)"
    ],
    correctAnswer: [0, 1],
    explanation: "Arquitetos de TI e engenheiros são partes interessadas comuns para a perspectiva de plataforma do AWS CAF, pois estão diretamente envolvidos na implementação e manutenção da infraestrutura técnica."
  },
  {
    id: 42,
    text: "Quais tarefas são responsabilidade da AWS de acordo com o modelo de responsabilidade compartilhada da AWS? (Selecione DOIS.)",
    options: [
      "Assegurar o acesso físico às instalações da AWS.",
      "Configurar o AWS Identity and Access Management (IAM).",
      "Configurar grupos de segurança em instâncias do Amazon EC2.",
      "Realizar patches e manutenção da infraestrutura.",
      "Aplicar patches em aplicativos que rodam em instâncias do Amazon EC2."
    ],
    correctAnswer: [0, 3],
    explanation: "A AWS é responsável pela segurança física das instalações e pela manutenção da infraestrutura subjacente, enquanto o cliente é responsável pela configuração de IAM, grupos de segurança e patches de aplicativos."
  },
  {
    id: 43,
    text: "Quais serviços da AWS uma empresa pode usar para hospedar e executar um banco de dados MySQL? (Selecione DUAS.)",
    options: [
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon EC2",
      "Amazon S3",
      "Amazon MQ"
    ],
    correctAnswer: [1, 2],
    explanation: "O Amazon RDS é um serviço gerenciado para bancos de dados relacionais como MySQL, enquanto o Amazon EC2 permite hospedar um banco de dados MySQL em instâncias personalizadas."
  },
  {
    id: 44,
    text: "Uma empresa quer migrar para a AWS Cloud. A empresa precisa da capacidade de adquirir recursos quando necessário. A empresa também precisa da capacidade de liberar esses recursos quando não forem mais necessários. Qual conceito de arquitetura da AWS Cloud atende a esses requisitos?",
    options: [
      "Confiabilidade",
      "Durabilidade",
      "Disponibilidade",
      "Elasticidade"
    ],
    correctAnswer: 3,
    explanation: "A elasticidade da AWS permite que os recursos sejam escalados para cima ou para baixo conforme a demanda, garantindo que a empresa pague apenas pelo que usar."
  },
  {
    id: 45,
    text: "Uma empresa está executando um sistema de processamento de pedidos em instâncias Amazon EC2. A empresa quer migrar para uma aplicação baseada em microsserviços. Qual combinação de serviços da AWS a aplicação pode usar para atender a esses requisitos? (Selecione DOIS.)",
    options: [
      "AWS AppSync",
      "AWS Application Migration Service",
      "Amazon Simple Queue Service (Amazon SQS)",
      "AWS Lambda",
      "AWS Migration Hub"
    ],
    correctAnswer: [2, 3],
    explanation: "O Amazon SQS permite a comunicação assíncrona entre microsserviços, enquanto o AWS Lambda permite executar código sem gerenciar servidores, ideal para arquiteturas baseadas em microsserviços."
  },
  {
    id: 46,
    text: "Uma empresa gerencia máquinas de fábrica em tempo real. A empresa quer usar a tecnologia da AWS para implantar suas aplicações de monitoramento o mais próximo possível das máquinas de fábrica. Qual solução da AWS atenderá a esses requisitos com a MENOR latência?",
    options: [
      "AWS Batch",
      "Amazon EC2",
      "AWS App Runner",
      "AWS Outposts"
    ],
    correctAnswer: 3,
    explanation: "O AWS Outposts permite executar serviços da AWS no local, reduzindo a latência ao processar dados próximos às máquinas de fábrica."
  },
  {
    id: 47,
    text: "Uma empresa quer que sua carga de trabalho tenha um desempenho consistente e correto. Qual benefício da computação em nuvem da AWS esse objetivo representa?",
    options: [
      "Confiabilidade",
      "Segurança",
      "Elasticidade",
      "Preço de pagamento conforme o uso"
    ],
    correctAnswer: 0,
    explanation: "A confiabilidade da AWS garante que as cargas de trabalho tenham desempenho consistente e correto, com alta disponibilidade e resiliência."
  },
  {
    id: 48,
    text: "Uma empresa quer mover sua aplicação de data warehouse para a AWS Cloud. A empresa quer executar e dimensionar seus serviços de análise sem precisar provisionar e gerenciar clusters de data warehouse. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      "Amazon S3",
      "Amazon Redshift Serverless",
      "Amazon Athena",
      "Armazém de dados provisionado do Amazon Redshift"
    ],
    correctAnswer: 1,
    explanation: "O Amazon Redshift Serverless permite executar e dimensionar serviços de análise sem a necessidade de gerenciar clusters, reduzindo a complexidade operacional."
  },
  {
    id: 49,
    text: "Uma empresa tem um site hospedado na AWS localizado atrás de um Application Load Balancer. A empresa quer proteger o site contra injeção de SQL ou scripting entre sites. Qual serviço da AWS a empresa deve usar?",
    options: [
      "AWS WAF",
      "Amazon GuardDuty",
      "AWS Trusted Advisor",
      "Amazon Inspector"
    ],
    correctAnswer: 0,
    explanation: "O AWS WAF protege aplicações web contra ataques comuns, como injeção de SQL e cross-site scripting, filtrando o tráfego HTTP/HTTPS."
  },
  {
    id: 50,
    text: "Uma empresa quer criar um chatbot e integrar o chatbot com sua aplicação web atual. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      "Amazon Polly",
      "Amazon Textract",
      "Amazon Kendra",
      "Amazon Lex"
    ],
    correctAnswer: 3,
    explanation: "O Amazon Lex permite criar chatbots com reconhecimento de voz e texto, integrando-se facilmente com aplicações web existentes."
  },
  {
    id: 51,
    text: "Uma empresa precisa de um repositório que armazene código-fonte. A empresa precisa de uma maneira de atualizar o software em execução quando o código for alterado. Qual combinação de serviços da AWS atenderá a esses requisitos? (Selecione DUAS.)",
    options: [
      "Amazon S3",
      "AWS CodeCommit",
      "AWS CodeDeploy",
      "Amazon DynamoDB",
      "Amazon Elastic Container Service (Amazon ECS)"
    ],
    correctAnswer: [1, 2],
    explanation: "O AWS CodeCommit armazena código-fonte, enquanto o AWS CodeDeploy automatiza a implantação de atualizações de software, garantindo uma integração contínua eficiente."
  },
  {
    id: 52,
    text: "Em quais categorias a AWS Trusted Advisor fornece ações recomendadas? (Selecione DUAS.)",
    options: [
      "Registros de atividade da conta",
      "Patches do sistema operacional",
      "Tarefas repetitivas",
      "Otimização de custos",
      "Cotas de serviço"
    ],
    correctAnswer: [3, 4],
    explanation: "O AWS Trusted Advisor fornece recomendações para otimização de custos e monitoramento de cotas de serviço, ajudando a melhorar a eficiência e evitar limites de uso."
  },
  {
    id: 53,
    text: "Uma empresa está executando uma aplicação que está hospedada em instâncias Amazon EC2. O uso das instâncias EC2 é maior durante o dia do que durante a noite. A empresa quer otimizar o número de instâncias EC2 com base nesse padrão de uso. Qual serviço ou opção de compra de instância da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "AWS CloudFormation",
      "Reserved Instances",
      "AWS Auto Scaling",
      "Spot Instances"
    ],
    correctAnswer: 2,
    explanation: "O AWS Auto Scaling ajusta automaticamente o número de instâncias EC2 com base na demanda, garantindo que a aplicação tenha recursos suficientes durante picos de uso."
  },
  {
    id: 54,
    text: "Quais serviços da AWS permitem que os usuários monitorem e mantenham registros das atividades da conta, incluindo governança, conformidade e auditoria? (Selecione DUAS.)",
    options: [
      "AWS WAF",
      "Amazon CloudWatch",
      "AWS Shield",
      "AWS CloudTrail",
      "Amazon GuardDuty"
    ],
    correctAnswer: [1, 3],
    explanation: "O Amazon CloudWatch monitora métricas e logs, enquanto o AWS CloudTrail registra todas as chamadas de API, facilitando a governança, conformidade e auditoria."
  },
  {
    id: 55,
    text: "Qual solução da AWS oferece a capacidade de uma empresa executar serviços da AWS no data center local da empresa?",
    options: [
      "AWS Outposts",
      "AWS Direct Connect",
      "Ativações híbridas do AWS Systems Manager",
      "AWS Storage Gateway"
    ],
    correctAnswer: 0,
    explanation: "O AWS Outposts permite executar serviços da AWS no data center local, oferecendo uma experiência híbrida consistente com a nuvem."
  },
  {
    id: 56,
    text: "Uma empresa quer migrar sua aplicação para a AWS. A empresa deseja substituir despesas antecipadas por pagamento variável baseado no uso. O que a empresa deve fazer para atender a esses requisitos?",
    options: [
      "Dimensionar corretamente as instâncias.",
      "Usar preços pay-as-you-go.",
      "Pague menos usando mais.",
      "Comprar Instâncias Reservadas."
    ],
    correctAnswer: 1,
    explanation: "O modelo de preços pay-as-you-go permite que a empresa pague apenas pelo que usar, eliminando despesas antecipadas e reduzindo custos."
  },
  {
    id: 57,
    text: "Uma empresa está executando cargas de trabalho para vários departamentos dentro de uma única VPC. A empresa precisa ser capaz de cobrar cada departamento pelo uso de seus recursos. Qual ação a empresa deve realizar para alcançar esse objetivo com o MENOR esforço operacional?",
    options: [
      "Mover cada recurso do departamento para sua própria VPC.",
      "Adicionar uma tag de departamento a cada recurso e configurar tags de alocação de custos.",
      "Usar AWS Organizations para obter um relatório de faturamento para cada departamento.",
      "Mover cada recurso do departamento para sua própria conta AWS."
    ],
    correctAnswer: 1,
    explanation: "Adicionar tags de departamento e configurar tags de alocação de custos permite rastrear e atribuir custos de forma eficiente, sem a necessidade de criar múltiplas VPCs ou contas."
  },
  {
    id: 58,
    text: "Uma empresa precisa hospedar um servidor web em instâncias Amazon EC2 por pelo menos 1 ano. O servidor web não pode tolerar interrupções. Qual opção de compra de instância EC2 atenderá a esses requisitos de forma mais econômica?",
    options: [
      "Instâncias Spot",
      "Instâncias Reservadas sem Pagamento Antecipado",
      "Instâncias On-Demand",
      "Instâncias Reservadas com Pagamento Parcial Antecipado"
    ],
    correctAnswer: 3,
    explanation: "As Instâncias Reservadas com Pagamento Parcial Antecipado oferecem descontos significativos para cargas de trabalho de longo prazo, como um servidor web que será executado por 1 ano."
  },
  {
    id: 59,
    text: "Uma empresa precisa hospedar uma aplicação altamente disponível na AWS Cloud. A aplicação é executada infrequentemente por curtos períodos de tempo. Qual serviço da AWS atenderá a esses requisitos com o MENOR esforço operacional?",
    options: [
      "Amazon EC2",
      "AWS Lambda",
      "AWS Fargate",
      "Amazon Aurora"
    ],
    correctAnswer: 1,
    explanation: "O AWS Lambda é ideal para aplicações que são executadas infrequentemente, pois permite executar código sem gerenciar servidores, com cobrança baseada no tempo de execução."
  },
  {
    id: 60,
    text: "Uma empresa de comércio eletrônico quer projetar uma aplicação altamente disponível que será hospedada em várias instâncias Amazon EC2. Como a empresa deve implantar as instâncias EC2 para atender a esses requisitos?",
    options: [
      "Em várias Zonas de Disponibilidade",
      "Em várias localizações de borda",
      "Em várias VPCs",
      "Em várias contas da AWS"
    ],
    correctAnswer: 0,
    explanation: "Implantar instâncias em múltiplas Zonas de Disponibilidade garante alta disponibilidade e resiliência, reduzindo o risco de falhas em uma única zona."
  },
  {
    id: 61,
    text: "Qual serviço da AWS exige que o cliente faça o patch do sistema operacional convidado?",
    options: [
      "AWS Lambda",
      "Amazon ElastiCache",
      "Amazon EC2",
      "Amazon OpenSearch Service"
    ],
    correctAnswer: 2,
    explanation: "No Amazon EC2, o cliente é responsável por aplicar patches no sistema operacional convidado, enquanto a AWS gerencia a infraestrutura subjacente."
  },
  {
    id: 62,
    text: "Qual é uma característica das Reserved Instances (RIs) Convertíveis?",
    options: [
      "Os usuários podem encurtar o prazo de suas RIs Convertíveis ao mesclá-las com outras RIs Convertíveis.",
      "Os usuários podem trocar RIs Convertíveis por outras RIs Convertíveis em diferentes Regiões da AWS.",
      "Os usuários podem vender e comprar RIs Convertíveis no AWS Marketplace.",
      "Os usuários podem trocar RIs Convertíveis por outras RIs Convertíveis de uma família de instância diferente."
    ],
    correctAnswer: 3,
    explanation: "As RIs Convertíveis permitem que os usuários troquem instâncias por outras de uma família diferente, oferecendo flexibilidade para mudanças nas necessidades de carga de trabalho."
  },
  {
    id: 63,
    text: "Qual serviço ou recurso da AWS pode ser usado para controlar o tráfego de entrada e saída em uma instância Amazon EC2?",
    options: [
      "AWS Identity and Access Management (IAM)",
      "Internet gateways",
      "ACLs de rede",
      "Grupos de Segurança"
    ],
    correctAnswer: 3,
    explanation: "Os Grupos de Segurança atuam como firewalls virtuais para controlar o tráfego de entrada e saída em instâncias EC2, permitindo regras personalizadas."
  },
  {
    id: 64,
    text: "Uma empresa de manufatura tem uma aplicação crítica que é executada em um local remoto que tem uma conexão de internet lenta. A empresa quer migrar a carga de trabalho para a AWS. A aplicação é sensível à latência e interrupções na conectividade. A empresa quer uma solução que possa hospedar essa aplicação com a menor latência possível. Qual serviço ou recurso da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "AWS Wavelength",
      "AWS Local Zones",
      "AWS Outposts",
      "Zonas de Disponibilidade"
    ],
    correctAnswer: 2,
    explanation: "O AWS Outposts permite executar serviços da AWS no local, reduzindo a latência ao processar dados próximos à aplicação crítica."
  },
  {
    id: 65,
    text: "Uma empresa quer desenvolver um aplicativo de compras que registre pedidos de clientes. O aplicativo precisa usar um serviço de banco de dados gerenciado pela AWS para armazenar dados. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "Amazon Neptune",
      "Amazon RDS",
      "Amazon ElastiCache",
      "Amazon Redshift"
    ],
    correctAnswer: 1,
    explanation: "O Amazon RDS é um serviço gerenciado para bancos de dados relacionais, como MySQL ou PostgreSQL, ideal para armazenar dados de pedidos de clientes."
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