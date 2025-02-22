const perguntas = [
  {
    pergunta: "Uma empresa possui uma única instância Amazon EC2. A empresa quer adotar uma arquitetura altamente disponível. O que a empresa pode fazer para atender a esse requisito?",
    respostas: [
      "A) Escalar verticalmente para um tamanho maior de instância EC2.",
      "B) Comprar uma Instância Dedicada do EC2.",
      "C) Mudar a família de instâncias do EC2 para uma instância otimizada para computação.",
      "D) Escalar horizontalmente em várias Zonas de Disponibilidade."
    ],
    correta: 3
  },
  {
    pergunta: "Qual serviço da AWS fornece a maneira MAIS SIMPLES para a empresa estabelecer um site na AWS?",
    respostas: [
      "A) AWS Lambda",
      "B) AWS Elastic Beanstalk",
      "C) Amazon Elastic File System (Amazon EFS)",
      "D) Amazon Lightsail"
    ],
    correta: 3
  },
  {
    pergunta: "Uma empresa está planejando uma migração para a AWS Cloud e quer examinar os custos associados a diferentes cargas de trabalho. Qual ferramenta da AWS atenderá a esses requisitos?",
    respostas: [
      "A) AWS Budgets",
      "B) AWS Pricing Calculator",
      "C) Relatório de Custos e Uso da AWS",
      "D) AWS Cost Explorer"
    ],
    correta: 1
  },
  {
    pergunta: "Quais ações são exemplos do esforço de uma empresa para dimensionar corretamente seus recursos AWS para controlar os custos da nuvem? (Selecione DUAS.)",
    respostas: [
      "A) Mudar de Amazon RDS para Amazon DynamoDB para acomodar conjuntos de dados NoSQL.",
      "B) Substituir instâncias existentes do Amazon EC2 pelo AWS Elastic Beanstalk.",
      "C) Usar políticas do ciclo de vida do Amazon S3 para mover objetos que os usuários acessam com pouca frequência para camadas de armazenamento de menor custo.",
      "D) Usar implantações Multi-AZ para o Amazon RDS.",
      "E) Basear a seleção de tipos de instâncias Amazon EC2 em padrões de utilização passada."
    ],
    correta: [2, 4]
  },
  {
    pergunta: "Qual perspectiva do AWS Cloud Adoption Framework (AWS CAF) conecta tecnologia e negócios?",
    respostas: [
      "A) People",
      "B) Operações",
      "C) Segurança",
      "D) Governança"
    ],
    correta: 3
  },
  {
    pergunta: "Uma empresa precisa de ajuda para gerenciar várias contas AWS vinculadas que são relatadas em uma fatura consolidada. Qual plano de suporte da AWS inclui um concierge da AWS a quem a empresa pode pedir assistência?",
    respostas: [
      "A) AWS Developer Support",
      "B) AWS Business Support",
      "C) AWS Enterprise Support",
      "D) AWS Basic Support"
    ],
    correta: 2
  },
  {
    pergunta: "Como a empresa deve implantar a aplicação para atender a esses requisitos?",
    respostas: [
      "A) Em Instâncias Reservadas",
      "B) On AWS Direct Connect",
      "C) Em uma única Zona de Disponibilidade",
      "D) Em múltiplas Zonas de Disponibilidade"
    ],
    correta: 3
  },
  {
    pergunta: "Uma empresa quer usar instâncias Amazon EC2 para uma carga de trabalho de produção estável que será executada por 1 ano. Qual opção de compra de instância atende a esses requisitos de forma mais econômica?",
    respostas: [
      "A) Instâncias On-Demand",
      "B) Dedicated Hosts",
      "C) Reserved Instances",
      "D) Instâncias Spot"
    ],
    correta: 2
  },
  {
    pergunta: "Quais princípios de design uma empresa deve aplicar às cargas de trabalho da AWS Cloud para maximizar a sustentabilidade e minimizar o impacto ambiental? (Selecione DOIS.)",
    respostas: [
      "A) Forçar reinstalações frequentes de aplicativos pelos usuários.",
      "B) Minimizar o uso de serviços gerenciados.",
      "C) Reduzir a necessidade de reinstalações de aplicativos pelos usuários.",
      "D) Maximizar a utilização das instâncias do Amazon EC2.",
      "E) Minimizar a utilização das instâncias do Amazon EC2."
    ],
    correta: [2, 3]
  },
  {
    pergunta: "Um usuário está movendo uma carga de trabalho de um data center local para uma arquitetura distribuída entre o data center local e a nuvem AWS. Que tipo de migração é essa?",
    respostas: [
      "A) Do local para nativo da nuvem",
      "B) Nativo da nuvem para híbrido",
      "C) De local para híbrido",
      "D) Hybrid to cloud native"
    ],
    correta: 2
  },
  {
    pergunta: "Qual serviço da AWS é projetado para ajudar os usuários a orquestrar um processo de fluxo de trabalho para um conjunto de funções AWS Lambda?",
    respostas: [
      "A) Amazon DynamoDB",
      "B) AWS CodePipeline",
      "C) AWS Batch",
      "D) AWS Step Functions"
    ],
    correta: 3
  },
  {
    pergunta: "Qual serviço ou ferramenta da AWS fornece acesso sob demanda a relatórios de segurança e conformidade da AWS e acordos online da AWS?",
    respostas: [
      "A) AWS Artifact",
      "B) Amazon Inspector",
      "C) Console de Faturamento da AWS",
      "D) AWS Trusted Advisor"
    ],
    correta: 0
  },
  {
    pergunta: "Uma empresa tem uma aplicação que é executada periodicamente em um ambiente on-premises. A aplicação é executada por algumas horas na maioria dos dias, mas é executada por 8 horas por dia durante uma semana no final de cada mês. Qual serviço ou recurso da AWS deve ser usado para hospedar a aplicação na AWS Cloud?",
    respostas: [
      "A) AWS Wavelength",
      "B) Amazon EC2 Standard Reserved Instances",
      "C) Application Load Balancer",
      "D) Amazon EC2 On-Demand Instances"
    ],
    correta: 3
  },
  {
    pergunta: "Qual serviço da AWS está sempre disponível gratuitamente para os usuários?",
    respostas: [
      "A) AWS Identity and Access Management (IAM)",
      "B) Amazon ElastiCache",
      "C) AWS Secrets Manager",
      "D) Amazon Athena"
    ],
    correta: 0
  },
  {
    pergunta: "Qual princípio de design está incluído no pilar de excelência operacional do AWS Well-Architected Framework?",
    respostas: [
      "A) Criar documentação anotada.",
      "B) Garantir a eficiência do desempenho.",
      "C) Otimizar custos.",
      "D) Antecipar falhas."
    ],
    correta: 3
  },
  {
    pergunta: "Uma empresa executa um banco de dados no Amazon Aurora na região us-east-1. A empresa tem um requisito de recuperação de desastres de que o banco de dados esteja disponível em outra região. Qual solução atende a esse requisito com mínima interrupção nas operações do banco de dados?",
    respostas: [
      "A) Implantar Réplicas Aurora.",
      "B) Criar snapshots de volumes do Amazon Elastic Block Store (Amazon EBS) para o Aurora e copiá-los para outra Região.",
      "C) Realizar uma implantação Multi-AZ do Aurora.",
      "D) Implantar réplicas de leitura Aurora cross-Region."
    ],
    correta: 3
  },
  {
    pergunta: "Qual serviço da AWS é usado para fornecer temporariamente credenciais de segurança federadas para um usuário ou aplicação?",
    respostas: [
      "A) AWS Certificate Manager",
      "B) Amazon GuardDuty",
      "C) AWS Simple Token Service (AWS STS)",
      "D) AWS Secrets Manager"
    ],
    correta: 2
  },
  {
    pergunta: "Quais declarações explicam o valor comercial da migração para a nuvem AWS? (Selecione DUAS.)",
    respostas: [
      "A) A migração de aplicações empresariais para a AWS Cloud torna essas aplicações automaticamente disponíveis em dispositivos móveis.",
      "B) AWS availability and security provide the ability to improve service level agreements (SLAs) while reducing risk and unplanned downtime.",
      "C) Aplicativos são modernizados porque a migração para a AWS Cloud exige que as empresas re-arquitetem e reescrevam todos os aplicativos empresariais.",
      "D) Empresas que migram para a AWS Cloud reduzem custos de TI relacionados à infraestrutura, liberando orçamento para reinvestimento em outras áreas.",
      "E) Empresas que migram para a AWS Cloud eliminam a necessidade de planejar para alta disponibilidade e recuperação de desastres."
    ],
    correta: [1, 3]
  },
  {
    pergunta: "Uma empresa quer mover suas atividades de desenvolvimento e compilação de aplicativos iOS para a AWS. Qual serviço ou recurso da AWS a empresa deve usar para essas atividades?",
    respostas: [
      "A) AWS CodeCommit",
      "B) AWS App Runner",
      "C) AWS Amplify",
      "D) Amazon EC2 M1 Mac instances"
    ],
    correta: 3
  },
  {
    pergunta: "Quais opções são perspectivas que incluem capacidades fundamentais do AWS Cloud Adoption Framework (AWS CAF)? (Selecione DUAS.)",
    respostas: [
      "A) Eficiência de desempenho",
      "B) Sustentabilidade",
      "C) Segurança",
      "D) Confiabilidade",
      "E) Operações"
    ],
    correta: [0, 4]
  },
  {
    pergunta: "Um usuário descobriu que uma instância Amazon EC2 está sem um volume de dados Amazon Elastic Block Store (Amazon EBS). O usuário quer determinar quando o volume EBS foi removido. Qual serviço da AWS fornecerá essa informação?",
    respostas: [
      "A) Amazon Timestream",
      "B) AWS Config",
      "C) Amazon QuickSight",
      "D) AWS Trusted Advisor"
    ],
    correta: 1
  },
  {
    pergunta: "Qual princípio de design da AWS Cloud uma empresa segue ao usar o AWS CloudTrail?",
    respostas: [
      "A) Recuperar automaticamente.",
      "B) Medir a eficiência.",
      "C) Garantir a rastreabilidade.",
      "D) Realizar operações como código."
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a responsabilidade da AWS sob o modelo de responsabilidade compartilhada da AWS?",
    respostas: [
      "A) Aplicar os patches de segurança mais recentes no sistema operacional convidado no Amazon EC2.",
      "B) Ativar a criptografia no lado do servidor para buckets do Amazon S3.",
      "C) Configurar as regras do grupo de segurança que determinam quais portas estão abertas em uma instância Amazon EC2 Linux.",
      "D) Garantir a segurança da rede interna nos data centers da AWS."
    ],
    correta: 3
  },
  {
    pergunta: "Uma empresa fornece uma aplicação de software como serviço (SaaS). A empresa tem um novo cliente baseado em um país diferente. Os dados do novo cliente precisam ser hospedados nesse país. Qual serviço ou componente de infraestrutura da AWS a empresa deve usar para atender a esse requisito?",
    respostas: [
      "A) Amazon S3 Object Lock",
      "B) Grupos de Colocação",
      "C) Regiões da AWS",
      "D) AWS Shield"
    ],
    correta: 2
  },
  {
    pergunta: "Uma empresa está revisando o design de uma aplicação que será migrada de on-premises para uma única instância Amazon EC2. O que a empresa deve fazer para tornar a aplicação altamente disponível?",
    respostas: [
      "A) Provisionar instâncias adicionais do EC2 em outras Zonas de Disponibilidade.",
      "B) Provisionar a aplicação usando uma Instância Spot do EC2.",
      "C) Configurar um Application Load Balancer (ALB) e atribuir a instância EC2 como alvo do ALB.",
      "D) Usar uma Amazon Machine Image (AMI) para criar a instância EC2."
    ],
    correta: 0
  },
  {
    pergunta: "Qual benefício da AWS Cloud ajuda as empresas a alcançar custos de uso mais baixos devido ao uso agregado de todos os usuários da AWS?",
    respostas: [
      "A) Maior velocidade e agilidade",
      "B) Sem necessidade de adivinhar a capacidade",
      "C) Economias de escala",
      "D) Capacidade de se tornar global em minutos"
    ],
    correta: 2
  },
  {
    pergunta: "Qual serviço da AWS é projetado para ajudar os usuários a criar interfaces de conversação em aplicativos usando voz e texto?",
    respostas: [
      "A) Amazon Comprehend",
      "B) Amazon Timestream",
      "C) Amazon Transcribe",
      "D) Amazon Lex"
    ],
    correta: 3
  },
  {
    pergunta: "Uma empresa quer orientação para otimizar o custo e o desempenho de seu ambiente AWS atual. Qual serviço ou ferramenta da AWS a empresa deve usar para identificar áreas de otimização?",
    respostas: [
      "A) Amazon QuickSight",
      "B) AWS Trusted Advisor",
      "C) AWS Organizations",
      "D) AWS Budgets"
    ],
    correta: 1
  },
  {
    pergunta: "Qual serviço ou ferramenta da AWS fornece recomendações para ajudar os usuários a dimensionar corretamente as instâncias Amazon EC2 com base nos dados históricos de uso da carga de trabalho?",
    respostas: [
      "A) AWS Compute Optimizer",
      "B) AWS Pricing Calculator",
      "C) AWS App Runner",
      "D) AWS Systems Manager"
    ],
    correta: 0
  },
  {
    pergunta: "Uma empresa está usando o Amazon RDS. Uma empresa está lançando uma aplicação de negócios crítica em uma região AWS. Como a empresa pode aumentar a resiliência dessa aplicação?",
    respostas: [
      "A) Implantar a aplicação usando múltiplas VPCs.",
      "B) Implantar a aplicação usando múltiplas Zonas de Disponibilidade.",
      "C) Implantar a aplicação usando múltiplas sub-redes.",
      "D) Implantar uma cópia da aplicação em outra conta da AWS."
    ],
    correta: 1
  },
  {
    pergunta: "Uma empresa oferece um serviço de comércio eletrônico baseado na web que opera em duas Zonas de Disponibilidade dentro de uma única Região AWS. O serviço web distribui conteúdo armazenado na classe de armazenamento Amazon S3 Standard. A empresa deseja melhorar o desempenho do serviço web globalmente. O que a empresa deve fazer para atender a esse requisito?",
    respostas: [
      "A) Usar o Amazon API Gateway para o serviço web.",
      "B) Migrar os servidores de ecommerce do site para o Amazon EC2 com rede aprimorada.",
      "C) Mudar a classe de armazenamento do S3 para S3 Intelligent-Tiering.",
      "D) Implantar uma distribuição Amazon CloudFront para armazenar em cache o conteúdo do servidor web em locais de borda."
    ],
    correta: 3
  },
  {
    pergunta: "Uma empresa deve armazenar gravações de chamadas por 6 anos. O sistema de armazenamento deve ser altamente durável e econômico. Qual serviço da AWS atende a esses requisitos?",
    respostas: [
      "A) Amazon S3",
      "B) Amazon Kinesis",
      "C) AWS Snowball",
      "D) AWS Storage Gateway"
    ],
    correta: 0
  },
  {
    pergunta: "Quais serviços ou ferramentas da AWS são projetados para proteger uma carga de trabalho contra injeções de SQL, cross-site scripting e ataques DDoS? (Selecione DUAS.)",
    respostas: [
      "A) AWS WAF",
      "B) AWS Config",
      "C) Endpoint VPC",
      "D) AWS Shield Standard",
      "E) Virtual private gateway"
    ],
    correta: [0, 3]
  },
  {
    pergunta: "Uma empresa quer acessar um relatório sobre o impacto ambiental estimado do uso da AWS pela empresa. Qual serviço ou recurso da AWS a empresa deve usar para atender a esse requisito?",
    respostas: [
      "A) IAM policy",
      "B) Amazon Simple Notification Service (Amazon SNS)",
      "C) AWS Organizations",
      "D) Console de Faturamento da AWS"
    ],
    correta: 3
  },
  {
    pergunta: "Uma empresa quer executar suas cargas de trabalho de produção na AWS. A empresa precisa de um serviço de concierge, um gerente técnico de contas (TAM) designado pela AWS e suporte técnico disponível 24 horas por dia, 7 dias por semana. Qual plano de suporte da AWS atenderá a esses requisitos?",
    respostas: [
      "A) AWS Basic Support",
      "B) AWS Developer Support",
      "C) AWS Enterprise Support",
      "D) AWS Business Support"
    ],
    correta: 2
  },
  {
    pergunta: "Uma empresa está hospedando uma aplicação web em instâncias Amazon EC2. A empresa quer implementar condições personalizadas para filtrar e controlar o tráfego web de entrada. Qual serviço da AWS atenderá a esses requisitos?",
    respostas: [
      "A) Amazon GuardDuty",
      "B) AWS WAF",
      "C) AWS Shield",
      "D) Amazon Macie"
    ],
    correta: 1
  },
  {
    pergunta: "Qual serviço da AWS fornece um serviço de busca empresarial altamente preciso e fácil de usar, alimentado por machine learning (ML)?",
    respostas: [
      "A) Amazon Polly",
      "B) Amazon Augmented AI (Amazon A2I)",
      "C) Amazon SageMaker",
      "D) Amazon Kendra"
    ],
    correta: 3
  },
  {
    pergunta: "Uma grande empresa tem vários departamentos. Cada departamento tem sua própria conta AWS. Cada departamento comprou instâncias reservadas Amazon EC2. Alguns departamentos não usam todas as instâncias reservadas que compraram, e outros departamentos precisam de mais instâncias reservadas do que compraram. A empresa precisa gerenciar as contas AWS de todos os departamentos para que os departamentos possam compartilhar as instâncias reservadas. Qual serviço ou ferramenta AWS a empresa deve usar para atender a esses requisitos?",
    respostas: [
      "A) AWS Trusted Advisor",
      "B) Cost Explorer",
      "C) AWS Organizations",
      "D) AWS Systems Manager"
    ],
    correta: 2
  },
  {
    pergunta: "Uma empresa desenvolveu uma aplicação distribuída que se recupera de interrupções de forma graciosa. A aplicação processa periodicamente grandes volumes de dados usando várias instâncias Amazon EC2. A aplicação às vezes fica ociosa por meses. Qual opção de compra de instância EC2 é MAIS econômica para esse caso de uso?",
    respostas: [
      "A) Reserved Instances",
      "B) Instâncias Sob Demanda",
      "C) Spot Instances",
      "D) Instâncias Dedicadas"
    ],
    correta: 2
  },
  {
    pergunta: "Um novo usuário da AWS que tem pouca experiência em nuvem quer construir uma aplicação usando os serviços da AWS. O usuário quer aprender como implementar serviços específicos da AWS a partir de exemplos de outros clientes. O usuário também quer fazer perguntas aos especialistas da AWS. Qual serviço ou recurso da AWS atenderá a esses requisitos?",
    respostas: [
      "A) AWS Marketplace",
      "B) AWS Health Dashboard",
      "C) AWS documentation",
      "D) AWS Online Tech Talks"
    ],
    correta: 3
  },
  {
    pergunta: "Quais opções são partes interessadas comuns para a perspectiva de plataforma do AWS Cloud Adoption Framework (AWS CAF)? (Selecione DOIS.)",
    respostas: [
      "A) IT architects",
      "B) Engenheiros",
      "C) Diretores de Dados (CDOs)",
      "D) Diretores de Informação (CIOs)",
      "E) Diretores financeiros (CFOs)"
    ],
    correta: [0, 1]
  },
  {
    pergunta: "Quais tarefas são responsabilidade da AWS de acordo com o modelo de responsabilidade compartilhada da AWS? (Selecione DOIS.)",
    respostas: [
      "A) Assegurar o acesso físico às instalações da AWS.",
      "B) Configurar o AWS Identity and Access Management (IAM).",
      "C) Configurar grupos de segurança em instâncias do Amazon EC2.",
      "D) Realizar patches e manutenção da infraestrutura.",
      "E) Aplicar patches em aplicativos que rodam em instâncias do Amazon EC2."
    ],
    correta: [0, 3]
  },
  {
    pergunta: "Quais serviços da AWS uma empresa pode usar para hospedar e executar um banco de dados MySQL? (Selecione DUAS.)",
    respostas: [
      "A) Amazon DynamoDB",
      "B) Amazon RDS",
      "C) Amazon EC2",
      "D) Amazon S3",
      "E) Amazon MQ"
    ],
    correta: [1, 2]
  },
  {
    pergunta: "Uma empresa quer migrar para a AWS Cloud. A empresa precisa da capacidade de adquirir recursos quando necessário. A empresa também precisa da capacidade de liberar esses recursos quando não forem mais necessários. Qual conceito de arquitetura da AWS Cloud atende a esses requisitos?",
    respostas: [
      "A) Confiabilidade",
      "B) Durabilidade",
      "C) Disponibilidade",
      "D) Elasticidade"
    ],
    correta: 3
  },
  {
    pergunta: "Uma empresa está executando um sistema de processamento de pedidos em instâncias Amazon EC2. A empresa quer migrar para uma aplicação baseada em microsserviços. Qual combinação de serviços da AWS a aplicação pode usar para atender a esses requisitos? (Selecione DOIS.)",
    respostas: [
      "A) AWS AppSync",
      "B) AWS Application Migration Service",
      "C) Amazon Simple Queue Service (Amazon SQS)",
      "D) AWS Lambda",
      "E) AWS Migration Hub"
    ],
    correta: [2, 3]
  },
  {
    pergunta: "Uma empresa gerencia máquinas de fábrica em tempo real. A empresa quer usar a tecnologia da AWS para implantar suas aplicações de monitoramento o mais próximo possível das máquinas de fábrica. Qual solução da AWS atenderá a esses requisitos com a MENOR latência?",
    respostas: [
      "A) AWS Batch",
      "B) Amazon EC2",
      "C) AWS App Runner",
      "D) AWS Outposts"
    ],
    correta: 3
  },
  {
    pergunta: "Uma empresa quer que sua carga de trabalho tenha um desempenho consistente e correto. Qual benefício da computação em nuvem da AWS esse objetivo representa?",
    respostas: [
      "A) Confiabilidade",
      "B) Segurança",
      "C) Elasticidade",
      "D) Preço de pagamento conforme o uso"
    ],
    correta: 0
  },
  {
    pergunta: "Uma empresa quer mover sua aplicação de data warehouse para a AWS Cloud. A empresa quer executar e dimensionar seus serviços de análise sem precisar provisionar e gerenciar clusters de data warehouse. Qual serviço da AWS atenderá a esses requisitos?",
    respostas: [
      "A) Amazon S3",
      "B) Amazon Redshift Serverless",
      "C) Amazon Athena",
      "D) Armazém de dados provisionado do Amazon Redshift"
    ],
    correta: 1
  },
  {
    pergunta: "Uma empresa tem um site hospedado na AWS localizado atrás de um Application Load Balancer. A empresa quer proteger o site contra injeção de SQL ou scripting entre sites. Qual serviço da AWS a empresa deve usar?",
    respostas: [
      "A) AWS WAF",
      "B) Amazon GuardDuty",
      "C) AWS Trusted Advisor",
      "D) Amazon Inspector"
    ],
    correta: 0
  },
  {
    pergunta: "Uma empresa quer criar um chatbot e integrar o chatbot com sua aplicação web atual. Qual serviço da AWS atenderá a esses requisitos?",
    respostas: [
      "A) Amazon Polly",
      "B) Amazon Textract",
      "C) Amazon Kendra",
      "D) Amazon Lex"
    ],
    correta: 3
  },
  {
    pergunta: "Uma empresa precisa de um repositório que armazene código-fonte. A empresa precisa de uma maneira de atualizar o software em execução quando o código for alterado. Qual combinação de serviços da AWS atenderá a esses requisitos? (Selecione DUAS.)",
    respostas: [
      "A) Amazon S3",
      "B) AWS CodeCommit",
      "C) AWS CodeDeploy",
      "D) Amazon DynamoDB",
      "E) Amazon Elastic Container Service (Amazon ECS)"
    ],
    correta: [1, 2]
  },
  {
    pergunta: "Em quais categorias a AWS Trusted Advisor fornece ações recomendadas? (Selecione DUAS.)",
    respostas: [
      "A) Registros de atividade da conta",
      "B) Patches do sistema operacional",
      "C) Tarefas repetitivas",
      "D) Otimização de custos",
      "E) Cotas de serviço"
    ],
    correta: [3, 4]
  },
  {
    pergunta: "Uma empresa está executando uma aplicação que está hospedada em instâncias Amazon EC2. O uso das instâncias EC2 é maior durante o dia do que durante a noite. A empresa quer otimizar o número de instâncias EC2 com base nesse padrão de uso. Qual serviço ou opção de compra de instância da AWS a empresa deve usar para atender a esses requisitos?",
    respostas: [
      "A) AWS CloudFormation",
      "B) Reserved Instances",
      "C) AWS Auto Scaling",
      "D) Spot Instances"
    ],
    correta: 2
  },
  {
    pergunta: "Quais serviços da AWS permitem que os usuários monitorem e mantenham registros das atividades da conta, incluindo governança, conformidade e auditoria? (Selecione DUAS.)",
    respostas: [
      "A) AWS WAF",
      "B) Amazon CloudWatch",
      "C) AWS Shield",
      "D) AWS CloudTrail",
      "E) Amazon GuardDuty"
    ],
    correta: [1, 3]
  },
  {
    pergunta: "Qual solução da AWS oferece a capacidade de uma empresa executar serviços da AWS no data center local da empresa?",
    respostas: [
      "A) AWS Outposts",
      "B) AWS Direct Connect",
      "C) Ativações híbridas do AWS Systems Manager",
      "D) AWS Storage Gateway"
    ],
    correta: 0
  },
  {
    pergunta: "Uma empresa quer migrar sua aplicação para a AWS. A empresa deseja substituir despesas antecipadas por pagamento variável baseado no uso. O que a empresa deve fazer para atender a esses requisitos?",
    respostas: [
      "A) Dimensionar corretamente as instâncias.",
      "B) Usar preços pay-as-you-go.",
      "C) Pague menos usando mais.",
      "D) Comprar Instâncias Reservadas."
    ],
    correta: 1
  },
  {
    pergunta: "Uma empresa está executando cargas de trabalho para vários departamentos dentro de uma única VPC. A empresa precisa ser capaz de cobrar cada departamento pelo uso de seus recursos. Qual ação a empresa deve realizar para alcançar esse objetivo com o MENOR esforço operacional?",
    respostas: [
      "A) Mover cada recurso do departamento para sua própria VPC.",
      "B) Adicionar uma tag de departamento a cada recurso e configurar tags de alocação de custos.",
      "C) Usar AWS Organizations para obter um relatório de faturamento para cada departamento.",
      "D) Mover cada recurso do departamento para sua própria conta AWS."
    ],
    correta: 1
  },
  {
    pergunta: "Uma empresa precisa hospedar um servidor web em instâncias Amazon EC2 por pelo menos 1 ano. O servidor web não pode tolerar interrupções. Qual opção de compra de instância EC2 atenderá a esses requisitos de forma mais econômica?",
    respostas: [
      "A) Instâncias Spot",
      "B) Instâncias Reservadas sem Pagamento Antecipado",
      "C) Instâncias On-Demand",
      "D) Instâncias Reservadas com Pagamento Parcial Antecipado"
    ],
    correta: 3
  },
  {
    pergunta: "Uma empresa precisa hospedar uma aplicação altamente disponível na AWS Cloud. A aplicação é executada infrequentemente por curtos períodos de tempo. Qual serviço da AWS atenderá a esses requisitos com o MENOR esforço operacional?",
    respostas: [
      "A) Amazon EC2",
      "B) AWS Lambda",
      "C) AWS Fargate",
      "D) Amazon Aurora"
    ],
    correta: 1
  },
  {
    pergunta: "Uma empresa de comércio eletrônico quer projetar uma aplicação altamente disponível que será hospedada em várias instâncias Amazon EC2. Como a empresa deve implantar as instâncias EC2 para atender a esses requisitos?",
    respostas: [
      "A) Em várias Zonas de Disponibilidade",
      "B) Em várias localizações de borda",
      "C) Em várias VPCs",
      "D) Em várias contas da AWS"
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS exige que o cliente faça o patch do sistema operacional convidado?",
    respostas: [
      "A) AWS Lambda",
      "B) Amazon ElastiCache",
      "C) Amazon EC2",
      "D) Amazon OpenSearch Service"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é uma característica das Reserved Instances (RIs) Convertíveis?",
    respostas: [
      "A) Os usuários podem encurtar o prazo de suas RIs Convertíveis ao mesclá-las com outras RIs Convertíveis.",
      "B) Os usuários podem trocar RIs Convertíveis por outras RIs Convertíveis em diferentes Regiões da AWS.",
      "C) Os usuários podem vender e comprar RIs Convertíveis no AWS Marketplace.",
      "D) Os usuários podem trocar RIs Convertíveis por outras RIs Convertíveis de uma família de instância diferente."
    ],
    correta: 3
  },
  {
    pergunta: "Qual serviço ou recurso da AWS pode ser usado para controlar o tráfego de entrada e saída em uma instância Amazon EC2?",
    respostas: [
      "A) AWS Identity and Access Management (IAM)",
      "B) Internet gateways",
      "C) ACLs de rede",
      "D) Grupos de Segurança"
    ],
    correta: 3
  },
  {
    pergunta: "Uma empresa de manufatura tem uma aplicação crítica que é executada em um local remoto que tem uma conexão de internet lenta. A empresa quer migrar a carga de trabalho para a AWS. A aplicação é sensível à latência e interrupções na conectividade. A empresa quer uma solução que possa hospedar essa aplicação com a menor latência possível. Qual serviço ou recurso da AWS a empresa deve usar para atender a esses requisitos?",
    respostas: [
      "A) AWS Wavelength",
      "B) AWS Local Zones",
      "C) AWS Outposts",
      "D) Zonas de Disponibilidade"
    ],
    correta: 2
  },
  {
    pergunta: "Uma empresa quer desenvolver um aplicativo de compras que registre pedidos de clientes. O aplicativo precisa usar um serviço de banco de dados gerenciado pela AWS para armazenar dados. Qual serviço da AWS a empresa deve usar para atender a esses requisitos?",
    respostas: [
      "A) Amazon Neptune",
      "B) Amazon RDS",
      "C) Amazon ElastiCache",
      "D) Amazon Redshift"
    ],
    correta: 1
  }
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");
const finalizarBtn = document.querySelector("#finalizar");
const reiniciarBtn = document.querySelector("#reiniciar");

const corretas = new Set();
const marcadas = new Set();
const totalDePerguntas = perguntas.length;

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.pergunta;

  // Adicionar bandeirinha
  const bandeirinha = document.createElement("span");
  bandeirinha.textContent = "🚩";
  bandeirinha.style.cursor = "pointer";
  bandeirinha.style.marginLeft = "auto";
  bandeirinha.style.opacity = "0.5";
  bandeirinha.onclick = () => {
    if (marcadas.has(item)) {
      marcadas.delete(item);
      bandeirinha.style.opacity = "0.5";
    } else {
      marcadas.add(item);
      bandeirinha.style.opacity = "1";
    }
  };
  quizItem.querySelector("h3").appendChild(bandeirinha);

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = resposta;
    dt.querySelector("input").setAttribute("name", "perguntas-" + perguntas.indexOf(item));
    dt.querySelector("input").value = item.respostas.indexOf(resposta);
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;

      corretas.delete(item);
      if (estaCorreta) {
        corretas.add(item);
      }
    };

    quizItem.querySelector("dl").appendChild(dt);
  }

  quizItem.querySelector("dl dt").remove();

  // coloca a pergunta na tela
  quiz.appendChild(quizItem);
}

// Função para finalizar o simulado
finalizarBtn.addEventListener("click", () => {
  const resumo = document.querySelector("#resumo");
  resumo.innerHTML = ""; // Limpa o conteúdo anterior

  const acertos = corretas.size;
  const erros = totalDePerguntas - acertos;
  const porcentagemAcertos = Math.round((acertos / totalDePerguntas) * 100);

  // Exibe o resumo
  resumo.innerHTML += `
    <h2>Resumo do Simulado</h2>
    <p>✅ Acertos: ${acertos}</p>
    <p>❌ Erros: ${erros}</p>
    <p>📊 Porcentagem de Acertos: <strong style="color: #82027b;">${porcentagemAcertos}%</strong></p>
    <h3>Detalhes das Questões:</h3>
  `;

  // Percorre todas as questões para mostrar o resultado
  perguntas.forEach((item, index) => {
    const respostaUsuario = document.querySelector(`input[name="perguntas-${index}"]:checked`);
    const acertou = respostaUsuario && respostaUsuario.value == item.correta;
    const respostaCorreta = item.respostas[item.correta];
    const respostaSelecionada = respostaUsuario ? item.respostas[respostaUsuario.value] : "Nenhuma resposta selecionada";

    resumo.innerHTML += `
      <div class="questao-resumo">
        <p><strong>Questão ${index + 1}:</strong> ${item.pergunta}</p>
        <p>${acertou ? "✅ Acertou" : "❌ Errou"}</p>
        <p>Sua resposta: ${respostaSelecionada}</p>
        <p>Resposta correta: ${respostaCorreta}</p>
      </div>
    `;
  });

  // Exibe o resumo e o botão de reiniciar
  resumo.style.display = "block";
  reiniciarBtn.style.display = "block";
  finalizarBtn.style.display = "none";
});

// Função para reiniciar o simulado
reiniciarBtn.addEventListener("click", () => {
  // Rola a página até a primeira questão
  const primeiraQuestao = document.querySelector(".quiz-item");
  if (primeiraQuestao) {
    primeiraQuestao.scrollIntoView({ behavior: "smooth" });
  }

  // Recarrega a página após um pequeno delay para garantir que a rolagem ocorra
  setTimeout(() => {
    window.location.reload();
  }, 500); // 500ms de delay
});
