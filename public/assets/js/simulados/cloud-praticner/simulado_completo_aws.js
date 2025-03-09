const originalQuestions = [
  {
    id: 1,
    text: "O que é computação em nuvem?",
    options: [
      "Faça backup de arquivos armazenados em dispositivos móveis e desktop para evitar a perda de dados",
      "Implantação de aplicativos conectados à infraestrutura local",
      "Execução de código sem a necessidade de gerenciar ou provisionar servidores",
      "Fornecimento sob demanda de recursos e aplicações de TI pela internet com o modelo de pagamento conforme o uso"
    ],
    correctAnswer: 3,
    explanation: "A computação em nuvem envolve o fornecimento sob demanda de recursos e aplicações de TI pela internet, com um modelo de pagamento conforme o uso."
  },
  {
    id: 2,
    text: "Qual é outro nome para implantação on-premises?",
    options: [
      "Implantação de nuvem privada",
      "Aplicativo baseado na nuvem",
      "Implantação híbrida",
      "Nuvem AWS"
    ],
    correctAnswer: 0,
    explanation: "A implantação on-premises também é conhecida como implantação de nuvem privada, onde a infraestrutura é mantida localmente."
  },
  {
    id: 3,
    text: "Como o scaling da computação em nuvem ajuda a economizar custos?",
    options: [
      "Você não precisa investir em recursos de tecnologia antes de usá-los.",
      "O uso agregado da nuvem por um grande número de clientes resulta em pagamento conforme o uso de preços mais baixos.",
      "O acesso a serviços sob demanda ajuda a evitar capacidade excessiva ou limitada.",
      "Você pode implantar aplicações rapidamente para os clientes e proporcionar baixa latência."
    ],
    correctAnswer: 1,
    explanation: "O scaling na nuvem permite que o uso agregado por muitos clientes resulte em custos mais baixos devido ao modelo de pagamento conforme o uso."
  },
  {
    id: 4,
    text: "Qual tipo de instância do Amazon EC2 oferece processadores de alto desempenho?",
    options: [
      "Otimizada para memória",
      "Otimizada para armazenamento",
      "Uso geral",
      "Otimizada para computação"
    ],
    correctAnswer: 3,
    explanation: "Instâncias otimizadas para computação são projetadas para oferecer processadores de alto desempenho, ideais para cargas de trabalho intensivas em CPU."
  },
  {
    id: 5,
    text: "Qual opção de preço do Amazon EC2 oferece um desconto quando você especifica um número de instâncias do EC2 para executar um sistema operacional, família e tamanho de instância e tenancy específicos em uma Região?",
    options: [
      "Instâncias reservadas conversíveis",
      "Savings Plans da instância do EC2",
      "Instâncias spot",
      "Standard Reserved Instances"
    ],
    correctAnswer: 3,
    explanation: "As Standard Reserved Instances oferecem descontos quando você especifica um número de instâncias do EC2 para executar um sistema operacional, família e tamanho de instância e tenancy específicos em uma Região."
  },
  {
    id: 6,
    text: "Qual opção de preço do Amazon EC2 oferece um desconto quando você assume um compromisso de gasto por hora com uma família de instância e uma Região por um período de vigência de um ou três anos?",
    options: [
      "Sob demanda",
      "Savings Plans da instância do EC2",
      "Instâncias spot",
      "Instâncias reservadas"
    ],
    correctAnswer: 1,
    explanation: "Os Savings Plans da instância do EC2 oferecem descontos quando você assume um compromisso de gasto por hora com uma família de instância e uma Região por um período de vigência de um ou três anos."
  },
  {
    id: 7,
    text: "Qual serviço da AWS é a melhor opção para publicar mensagens para assinantes?",
    options: [
      "Amazon Simple Queue Service (Amazon SQS)",
      "Amazon EC2 Auto Scaling",
      "Amazon Simple Notification Service (Amazon SNS)",
      "Elastic Load Balancing"
    ],
    correctAnswer: 2,
    explanation: "O Amazon Simple Notification Service (Amazon SNS) é o serviço ideal para publicar mensagens para assinantes, permitindo a comunicação assíncrona entre sistemas."
  },
  {
    id: 8,
    text: "Você deseja usar uma instância do Amazon EC2 para uma carga de trabalho de processamento em lote. Qual seria o melhor tipo de instância do Amazon EC2 a ser usado?",
    options: [
      "Uso geral",
      "Otimizada para memória",
      "Otimizada para computação",
      "Otimizada para armazenamento"
    ],
    correctAnswer: 2,
    explanation: "Instâncias otimizadas para computação são ideais para cargas de trabalho de processamento em lote, pois oferecem alto desempenho em tarefas intensivas em CPU."
  },
  {
    id: 9,
    text: "Quais são as opções de duração do contrato para instâncias reservadas do Amazon EC2? (Selecione DUAS opções.)",
    options: [
      "1 ano",
      "2 anos",
      "3 anos",
      "4 anos",
      "5 anos"
    ],
    correctAnswer: [0, 2],
    explanation: "As instâncias reservadas do Amazon EC2 oferecem opções de duração de contrato de 1 ano ou 3 anos."
  },
  {
    id: 10,
    text: "Você tem uma carga de trabalho que será executada por um total de seis meses e consegue suportar interrupções. Qual seria a opção de compra mais econômica do Amazon EC2?",
    options: [
      "Instância reservada",
      "Instância spot",
      "Instância dedicada",
      "Instância sob demanda"
    ],
    correctAnswer: 1,
    explanation: "As instâncias spot são a opção mais econômica para cargas de trabalho que podem suportar interrupções, pois oferecem custos significativamente menores em comparação com outras opções."
  },
  {
    id: 11,
    text: "Qual processo é um exemplo do Elastic Load Balancing?",
    options: [
      "Garantir que nenhuma instância única do Amazon EC2 tenha que suportar a carga de trabalho completa sozinha",
      "Remover instâncias desnecessárias do Amazon EC2 quando a demanda está baixa",
      "Adicionar uma segunda instância do Amazon EC2 durante a venda popular de uma loja on-line",
      "Ajustar automaticamente o número de instâncias do Amazon EC2 para atender à demanda"
    ],
    correctAnswer: 0,
    explanation: "O Elastic Load Balancing garante que nenhuma instância única do Amazon EC2 tenha que suportar a carga de trabalho completa sozinha, distribuindo o tráfego entre várias instâncias."
  },
  {
    id: 12,
    text: "Você deseja implantar e gerenciar aplicativos em contêineres. Qual serviço você deve usar?",
    options: [
      "AWS Lambda",
      "Amazon Simple Notification Service (Amazon SNS)",
      "Amazon Simple Queue Service (Amazon SQS)",
      "Amazon Elastic Kubernetes Service (Amazon EKS)"
    ],
    correctAnswer: 3,
    explanation: "O Amazon Elastic Kubernetes Service (Amazon EKS) é o serviço ideal para implantar e gerenciar aplicativos em contêineres, fornecendo uma plataforma gerenciada para o Kubernetes."
  },
  {
    id: 13,
    text: "Qual tipo de instância do Amazon EC2 é adequado para aplicações de data warehousing?",
    options: [
      "Otimizada para memória",
      "Otimizada para armazenamento",
      "Uso geral",
      "Otimizada para computação"
    ],
    correctAnswer: 1,
    explanation: "Instâncias otimizadas para armazenamento são ideais para aplicações de data warehousing, pois oferecem alto desempenho em operações de leitura/gravação de dados."
  },
  {
    id: 14,
    text: "Qual tipo de instância do Amazon EC2 equilibra os recursos de computação, memória e rede?",
    options: [
      "Otimizada para memória",
      "Otimizada para armazenamento",
      "Uso geral",
      "Otimizada para computação"
    ],
    correctAnswer: 2,
    explanation: "Instâncias de uso geral são projetadas para equilibrar recursos de computação, memória e rede, sendo adequadas para uma variedade de cargas de trabalho."
  },
  {
    id: 15,
    text: "Qual tipo de instância do Amazon EC2 é ideal para bancos de dados de alto desempenho?",
    options: [
      "Otimizada para memória",
      "Otimizada para armazenamento",
      "Uso geral",
      "Otimizada para computação"
    ],
    correctAnswer: 0,
    explanation: "Instâncias otimizadas para memória são ideais para bancos de dados de alto desempenho, pois oferecem grande capacidade de memória para processamento rápido de dados."
  },
  {
    id: 16,
    text: "Qual das afirmações a seguir melhor descreve as Zonas de Disponibilidade?",
    options: [
      "Uma área geográfica que contém recursos da AWS",
      "Um único data center ou grupo de data centers em uma Região",
      "Um data center usado por um serviço AWS para executar operações específicas do serviço",
      "Um serviço que você pode usar para executar a infraestrutura da AWS em seu próprio data center on-premises em uma abordagem híbrida"
    ],
    correctAnswer: 1,
    explanation: "As Zonas de Disponibilidade são um único data center ou grupo de data centers em uma Região, projetados para fornecer isolamento de falhas e alta disponibilidade."
  },
  {
    id: 17,
    text: "Qual declaração é VERDADEIRA para a infraestrutura global da AWS?",
    options: [
      "Uma Região consiste em uma única Zona de Disponibilidade.",
      "Uma Zona de Disponibilidade consiste em duas ou mais Regiões.",
      "Uma Região consiste em três ou mais Zonas de Disponibilidade.",
      "Uma Zona de Disponibilidade consiste em uma única Região."
    ],
    correctAnswer: 2,
    explanation: "Uma Região da AWS consiste em três ou mais Zonas de Disponibilidade, garantindo alta disponibilidade e resiliência."
  },
  {
    id: 18,
    text: "Quais fatores devem ser considerados ao selecionar uma Região? (Selecione DUAS opções.)",
    options: [
      "Conformidade com governança de dados e requisitos legais",
      "Proximidade com os clientes",
      "Acesso a suporte técnico 24 horas por dia",
      "Capacidade de atribuir permissões personalizadas a diferentes usuários",
      "Acesso à AWS Command Line Interface (AWS CLI)"
    ],
    correctAnswer: [0, 1],
    explanation: "Ao selecionar uma Região, é importante considerar a conformidade com governança de dados e requisitos legais, bem como a proximidade com os clientes para reduzir a latência."
  },
  {
    id: 19,
    text: "Qual declaração descreve melhor o Amazon CloudFront?",
    options: [
      "Um serviço que permite executar a infraestrutura em uma abordagem de nuvem híbrida",
      "Um mecanismo de computação sem servidor para contêineres",
      "Um serviço que permite enviar e receber mensagens entre componentes de software por uma fila",
      "Um serviço global de entrega de conteúdo"
    ],
    correctAnswer: 3,
    explanation: "O Amazon CloudFront é um serviço global de entrega de conteúdo (CDN) que acelera a distribuição de conteúdo para usuários em todo o mundo."
  },
  {
    id: 20,
    text: "Qual site o Amazon CloudFront usa para armazenar cópias de conteúdo em cache para entregá-los mais rapidamente aos usuários em qualquer local?",
    options: [
      "Região",
      "Zona de Disponibilidade",
      "Local de borda",
      "Origem"
    ],
    correctAnswer: 2,
    explanation: "O Amazon CloudFront usa Locais de Borda (Edge Locations) para armazenar cópias de conteúdo em cache, permitindo uma entrega mais rápida aos usuários finais."
  },
  {
    id: 21,
    text: "Qual ação você pode executar com o AWS Outposts?",
    options: [
      "Automatizar ações para serviços e aplicações da AWS por meio de scripts.",
      "Acessar assistentes e fluxos de trabalho automatizados para executar tarefas nos serviços da AWS.",
      "Desenvolver aplicações da AWS em linguagens de programação compatíveis.",
      "Estender a infraestrutura e os serviços da AWS para diferentes locais, incluindo um data center on-premises."
    ],
    correctAnswer: 3,
    explanation: "O AWS Outposts permite estender a infraestrutura e os serviços da AWS para diferentes locais, incluindo data centers on-premises, em uma abordagem híbrida."
  },
  {
    id: 22,
    text: "Qual declaração descreve melhor a lista de controle de acesso de rede-padrão de uma conta AWS?",
    options: [
      "Ela é stateless e nega todo o tráfego de entrada e saída.",
      "Ela é stateful e permite todo o tráfego de entrada e saída.",
      "Ela é stateless e permite todo o tráfego de entrada e saída.",
      "Ela é stateful e nega todo o tráfego de entrada e saída."
    ],
    correctAnswer: 2,
    explanation: "A lista de controle de acesso de rede-padrão (NACL) é stateless e permite todo o tráfego de entrada e saída por padrão, mas pode ser configurada para restringir o tráfego conforme necessário."
  },
  {
    id: 23,
    text: "Sua empresa tem um aplicativo que usa instâncias do Amazon EC2 para executar o site voltado para o cliente e instâncias de banco de dados do Amazon RDS para armazenar informações pessoais dos clientes. Como o desenvolvedor deve configurar a VPC de acordo com as práticas recomendadas?",
    options: [
      "Colocar as instâncias do Amazon EC2 em uma sub-rede privada e as instâncias de bancos de dados do Amazon RDS em uma sub-rede pública.",
      "Colocar as instâncias do Amazon EC2 em uma sub-rede pública e as instâncias de bancos de dados do Amazon RDS em uma sub-rede privada.",
      "Colocar as instâncias do Amazon EC2 e as instâncias de bancos de dados do Amazon RDS em uma sub-rede pública.",
      "Colocar as instâncias do Amazon EC2 e as instâncias de bancos de dados do Amazon RDS em uma sub-rede privada."
    ],
    correctAnswer: 1,
    explanation: "As práticas recomendadas sugerem colocar as instâncias do Amazon EC2 em uma sub-rede pública (para acesso à internet) e as instâncias de bancos de dados do Amazon RDS em uma sub-rede privada (para maior segurança)."
  },
  {
    id: 24,
    text: "Qual componente pode ser usado para estabelecer uma conexão privada dedicada entre o data center da sua empresa e a AWS?",
    options: [
      "Sub-rede privada",
      "DNS",
      "AWS Direct Connect",
      "Gateway privado virtual"
    ],
    correctAnswer: 2,
    explanation: "O AWS Direct Connect é usado para estabelecer uma conexão privada e dedicada entre o data center da sua empresa e a AWS, proporcionando maior largura de banda e menor latência."
  },
  {
    id: 25,
    text: "Qual declaração descreve melhor os grupos de segurança?",
    options: [
      "Eles são stateful e negam todo o tráfego de entrada por padrão.",
      "Eles são stateful e permitem todo o tráfego de entrada por padrão.",
      "Eles são stateless e negam todo o tráfego de entrada por padrão.",
      "Eles são stateless e permitem todo o tráfego de entrada por padrão."
    ],
    correctAnswer: 0,
    explanation: "Os grupos de segurança são stateful e negam todo o tráfego de entrada por padrão, permitindo apenas o tráfego explicitamente permitido por regras configuradas."
  },
  {
    id: 26,
    text: "Qual componente é usado para conectar uma VPC à internet?",
    options: [
      "Sub-rede pública",
      "Local de borda",
      "Grupo de segurança",
      "Gateway de internet"
    ],
    correctAnswer: 3,
    explanation: "O Gateway de Internet (Internet Gateway) é o componente usado para conectar uma VPC à internet, permitindo comunicação entre instâncias na VPC e a internet."
  },
  {
    id: 27,
    text: "Qual serviço é usado para gerenciar os registros de DNS para nomes de domínio?",
    options: [
      "Amazon Virtual Private Cloud",
      "AWS Direct Connect",
      "Amazon CloudFront",
      "Amazon Route 53"
    ],
    correctAnswer: 3,
    explanation: "O Amazon Route 53 é o serviço da AWS usado para gerenciar registros de DNS para nomes de domínio, fornecendo resolução de DNS confiável e escalável."
  },
  {
    id: 28,
    text: "Qual declaração melhor descreve a resolução de DNS?",
    options: [
      "Iniciar recursos em uma rede virtual definida por você",
      "Armazenar cópias locais de conteúdo em locais de borda em todo o mundo",
      "Conectar uma VPC à Internet",
      "Converter um nome de domínio em um endereço IP"
    ],
    correctAnswer: 3,
    explanation: "A resolução de DNS converte nomes de domínio (como www.example.com) em endereços IP (como 192.0.2.1), permitindo que os dispositivos se comuniquem na internet."
  },
  {
    id: 29,
    text: "Quais das seguintes opções são características do serviço Amazon EBS? (Selecione DUAS opções.)",
    options: [
      "Ideal para dados que precisam ser retidos",
      "Ideal para dados temporários que não são mantidos a longo prazo",
      "Unidades separadas do computador host de uma instância do EC2",
      "Conectado fisicamente ao computador host da instância do EC2",
      "Os dados são apagados quando uma instância do EC2 é encerrada"
    ],
    correctAnswer: [0, 2],
    explanation: "O Amazon EBS é ideal para dados que precisam ser retidos e são unidades de armazenamento separadas do computador host de uma instância do EC2, proporcionando persistência de dados."
  },
  {
    id: 30,
    text: "Você quer armazenar dados que são acessados com pouca frequência, mas devem estar imediatamente disponíveis quando necessário. Qual storage class do Amazon S3 você deve usar?",
    options: [
      "S3 Intelligent-Tiering",
      "S3 Glacier Deep Archive",
      "S3 Standard-IA",
      "S3 Glacier Flexible Retrieval"
    ],
    correctAnswer: 2,
    explanation: "O Amazon S3 Standard-IA (Infrequent Access) é ideal para dados acessados com pouca frequência, mas que precisam estar imediatamente disponíveis quando necessário, com custos reduzidos."
  },
  {
    id: 31,
    text: "Quais são os cenários em que você deve usar o Amazon Relational Database Service (Amazon RDS)? (Selecione DUAS opções.)",
    options: [
      "Ao executar um banco de dados sem servidor",
      "Ao usar SQL para organizar dados",
      "Ao armazenar dados em um banco de dados de chave-valor",
      "Ao dimensionar para 10 trilhões de solicitações por dia",
      "Ao armazenar dados em um banco de dados do Amazon Aurora"
    ],
    correctAnswer: [1, 4],
    explanation: "O Amazon RDS é ideal para cenários que envolvem o uso de SQL para organizar dados e para armazenar dados em bancos de dados relacionais, como o Amazon Aurora."
  },
  {
    id: 32,
    text: "Quais storage classes do Amazon S3 são otimizadas para dados de arquivamento? (Selecione DUAS opções.)",
    options: [
      "Amazon S3 Standard",
      "Amazon S3 Glacier Flexible Retrieval",
      "Amazon S3 Intelligent-Tiering",
      "Amazon S3 Standard-IA",
      "Amazon S3 Glacier Deep Archive"
    ],
    correctAnswer: [1, 4],
    explanation: "O Amazon S3 Glacier Flexible Retrieval e o Amazon S3 Glacier Deep Archive são otimizados para dados de arquivamento, oferecendo custos muito baixos para armazenamento de longo prazo."
  },
  {
    id: 33,
    text: "Qual(ais) afirmação(ões) é(são) VERDADEIRA(S) sobre os volumes do Amazon EBS e sistemas de arquivos do Amazon Elastic File System?",
    options: [
      "Os volumes do EBS armazenam dados em uma única Zona de Disponibilidade. Os sistemas de arquivos do Amazon EFS armazenam dados em várias Zonas de Disponibilidade.",
      "Os volumes do EBS armazenam dados em várias Zonas de Disponibilidade. Os sistemas de arquivos do Amazon EFS armazenam dados em uma única Zona de Disponibilidade.",
      "Os volumes do EBS e os sistemas de arquivos do Amazon EFS armazenam dados em uma única Zona de Disponibilidade.",
      "Os volumes do EBS e os sistemas de arquivos do Amazon Elastic File System armazenam dados em várias Zonas de Disponibilidade."
    ],
    correctAnswer: 0,
    explanation: "Os volumes do EBS são armazenados em uma única Zona de Disponibilidade, enquanto os sistemas de arquivos do Amazon EFS são armazenados em várias Zonas de Disponibilidade, proporcionando alta disponibilidade."
  },
  {
    id: 34,
    text: "Você quer armazenar dados em um serviço de armazenamento de objetos. Qual serviço da AWS é o melhor para esse tipo de armazenamento?",
    options: [
      "Amazon Managed Blockchain",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon Simple Storage Service (Amazon S3)"
    ],
    correctAnswer: 3,
    explanation: "O Amazon S3 é o serviço de armazenamento de objetos da AWS, ideal para armazenar e recuperar grandes quantidades de dados de qualquer lugar na internet."
  },
  {
    id: 35,
    text: "Qual afirmação melhor descreve o Amazon DynamoDB?",
    options: [
      "Um serviço que permite executar bancos de dados relacionais na nuvem AWS",
      "Um serviço de banco de dados de chave-valor sem servidor",
      "Um serviço que você pode usar para migrar bancos de dados relacionais e não relacionais e outros tipos de armazenamentos de dados",
      "Banco de dados relacional de nível empresarial"
    ],
    correctAnswer: 1,
    explanation: "O Amazon DynamoDB é um serviço de banco de dados de chave-valor sem servidor, altamente escalável e projetado para aplicações que exigem baixa latência e alta disponibilidade."
  },
  {
    id: 36,
    text: "Qual serviço é usado para consultar e analisar dados em um data warehouse?",
    options: [
      "Amazon Redshift",
      "Amazon Neptune",
      "Amazon DocumentDB",
      "Amazon ElastiCache"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Redshift é um serviço de data warehouse usado para consultar e analisar grandes volumes de dados com alta performance e escalabilidade."
  },
  {
    id: 37,
    text: "Quais tarefas são responsabilidades dos clientes? (Selecione DUAS opções.)",
    options: [
      "Manutenção da infraestrutura de rede",
      "Aplicação de patches em software em instâncias do Amazon EC2",
      "Implementação de controles de segurança física no data center",
      "Definição de permissões para objetos do Amazon S3",
      "Manutenção de servidores que executam instâncias do Amazon EC2"
    ],
    correctAnswer: [1, 3],
    explanation: "Os clientes são responsáveis por aplicar patches em software em instâncias do Amazon EC2 e definir permissões para objetos do Amazon S3. A infraestrutura física e de rede é gerenciada pela AWS."
  },
  {
    id: 38,
    text: "Você está configurando políticas de controle de serviço (SCPs) no AWS Organizations. A quais identidades e recursos as SCPs podem ser aplicadas? (Selecione DUAS opções.)",
    options: [
      "Usuários do IAM",
      "Grupos do IAM",
      "Uma conta de membro individual",
      "Funções do IAM",
      "Uma unidade organizacional (UO)"
    ],
    correctAnswer: [2, 4],
    explanation: "As SCPs (Políticas de Controle de Serviço) podem ser aplicadas a uma conta de membro individual ou a uma unidade organizacional (UO) no AWS Organizations."
  },
  {
    id: 39,
    text: "Quais tarefas você pode concluir no AWS Artifact? (Selecione DUAS opções.)",
    options: [
      "Acessar relatórios de conformidade da AWS sob demanda.",
      "Consolidar e gerenciar múltiplas contas AWS em um local central.",
      "Criar usuários para permitir que pessoas e aplicativos interajam com serviços e recursos AWS.",
      "Definir permissões para contas configurando as políticas de controle de serviço (SCPs).",
      "Analisar, aceitar e gerenciar seus contratos com a AWS."
    ],
    correctAnswer: [0, 4],
    explanation: "No AWS Artifact, você pode acessar relatórios de conformidade da AWS sob demanda e analisar, aceitar e gerenciar seus contratos com a AWS."
  },
  {
    id: 40,
    text: "Qual afirmativa descreve melhor uma política do IAM?",
    options: [
      "Um processo de autenticação que adiciona uma camada de proteção para sua conta AWS",
      "Um documento que concede ou nega permissões para serviços e recursos AWS",
      "Uma identidade que você pode assumir para obter acesso temporário a permissões",
      "A identidade que é estabelecida quando você cria pela primeira vez uma conta AWS"
    ],
    correctAnswer: 1,
    explanation: "Uma política do IAM é um documento que define permissões, especificando quais ações são permitidas ou negadas em recursos da AWS."
  },
  {
    id: 41,
    text: "Um funcionário precisa de acesso temporário para criar vários buckets do Amazon S3. Qual opção seria a melhor escolha para essa tarefa?",
    options: [
      "Usuário-raiz da conta AWS",
      "Grupo do IAM",
      "Função do IAM",
      "Política de controle de serviço (SCP)"
    ],
    correctAnswer: 2,
    explanation: "Uma função do IAM é a melhor escolha para fornecer acesso temporário, pois permite assumir permissões específicas por um período limitado."
  },
  {
    id: 42,
    text: "Qual afirmativa melhor descreve o princípio de menor privilégio?",
    options: [
      "Adicionar um usuário do IAM em pelo menos um grupo do IAM",
      "Verificar as permissões de um pacote em relação a uma lista de controle de acesso",
      "Conceder apenas as permissões necessárias para executar tarefas específicas",
      "Executar um ataque de negação de serviço originado de pelo menos um dispositivo"
    ],
    correctAnswer: 2,
    explanation: "O princípio de menor privilégio envolve conceder apenas as permissões necessárias para executar tarefas específicas, minimizando riscos de segurança."
  },
  {
    id: 43,
    text: "Qual serviço ajuda a proteger suas aplicações contra ataques distribuídos de negação de serviço (DDoS)?",
    options: [
      "Amazon GuardDuty",
      "Amazon Inspector",
      "AWS Artifact",
      "AWS Shield"
    ],
    correctAnswer: 3,
    explanation: "O AWS Shield é um serviço projetado para proteger aplicações contra ataques DDoS, oferecendo detecção e mitigação automáticas."
  },
  {
    id: 44,
    text: "Qual tarefa o AWS Key Management Service (AWS KMS) pode executar?",
    options: [
      "Configurar uma autenticação multifator (MFA).",
      "Atualizar a senha do usuário-raiz da conta AWS.",
      "Criar chaves de criptografia.",
      "Atribuir permissões a usuários e grupos."
    ],
    correctAnswer: 2,
    explanation: "O AWS KMS é usado para criar e gerenciar chaves de criptografia, permitindo a proteção de dados em repouso e em trânsito."
  },
  {
    id: 45,
    text: "Quais tarefas você pode executar usando o AWS CloudTrail? (Selecione DUAS opções.)",
    options: [
      "Monitorar sua infraestrutura e seus recursos AWS em tempo real",
      "Rastrear atividades do usuário e solicitações de API em toda a infraestrutura da AWS",
      "Exibir métricas e gráficos para monitorar o desempenho dos recursos",
      "Filtrar logs para auxiliar na análise operacional e na solução de problemas",
      "Configurar ações automáticas e alertas em resposta a métricas"
    ],
    correctAnswer: [1, 3],
    explanation: "O AWS CloudTrail permite rastrear atividades do usuário e solicitações de API, além de filtrar logs para auxiliar na análise operacional e na solução de problemas."
  },
  {
    id: 46,
    text: "Quais ações você pode executar usando o Amazon CloudWatch? (Selecione DUAS opções.)",
    options: [
      "Monitorar a utilização e o desempenho de seus recursos",
      "Receber orientações em tempo real para melhorar seu ambiente AWS",
      "Comparar sua infraestrutura com as práticas recomendadas da AWS em cinco categorias",
      "Acessar métricas em um único painel",
      "Detectar automaticamente atividades da conta incomuns"
    ],
    correctAnswer: [0, 3],
    explanation: "O Amazon CloudWatch permite monitorar a utilização e o desempenho de seus recursos e acessar métricas em um único painel para facilitar a visualização e análise."
  },
  {
    id: 47,
    text: "Qual serviço permite que você reveja a segurança de seus buckets do Amazon S3 verificando permissões de acesso aberto?",
    options: [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "Amazon GuardDuty"
    ],
    correctAnswer: 2,
    explanation: "O AWS Trusted Advisor fornece verificações de segurança, incluindo a revisão de permissões de acesso aberto em buckets do Amazon S3, para garantir boas práticas de segurança."
  },
  {
    id: 48,
    text: "Quais categorias estão inclusas no painel do AWS Trusted Advisor? (Selecione DUAS opções.)",
    options: [
      "Confiabilidade",
      "Desempenho",
      "Dimensionamento",
      "Elasticidade",
      "Tolerância a falhas"
    ],
    correctAnswer: [1, 4],
    explanation: "O painel do AWS Trusted Advisor inclui categorias como Desempenho e Tolerância a falhas, que ajudam a otimizar e garantir a resiliência de sua infraestrutura AWS."
  },
  {
    id: 49,
    text: "O nível gratuito da AWS inclui ofertas que ficam disponíveis para novos clientes AWS por um determinado período após a data de cadastro da AWS. Qual é a duração deste período?",
    options: [
      "3 meses",
      "6 meses",
      "9 meses",
      "12 meses"
    ],
    correctAnswer: 3,
    explanation: "O nível gratuito da AWS oferece benefícios por 12 meses a partir da data de cadastro, permitindo que novos clientes explorem e experimentem serviços da AWS sem custo."
  },
  {
    id: 50,
    text: "Qual plano do Support inclui todas as verificações do AWS Trusted Advisor pelo menor custo?",
    options: [
      "Basic",
      "Developer",
      "Business",
      "Empresarial de Grande Porte"
    ],
    correctAnswer: 2,
    explanation: "O plano Business do AWS Support inclui todas as verificações do AWS Trusted Advisor, oferecendo recomendações de otimização de custo, desempenho, segurança e muito mais."
  },
  {
    id: 51,
    text: "Qual ação você pode executar com a cobrança consolidada?",
    options: [
      "Analisar o custo em que seu uso previsto da AWS incorrerá até o final do mês.",
      "Criar uma estimativa de custo para seus casos de uso na AWS.",
      "Combinar o uso entre contas para obter descontos de preços por volume.",
      "Visualizar e gerenciar os custos e o uso da AWS ao longo do tempo."
    ],
    correctAnswer: 2,
    explanation: "A cobrança consolidada permite combinar o uso entre várias contas da AWS, possibilitando descontos de preços por volume e simplificando a gestão de custos."
  },
  {
    id: 52,
    text: "Qual ferramenta de definição de preço é usada para visualizar, entender e gerenciar o custo e o uso da AWS ao longo do tempo?",
    options: [
      "Calculadora de Preços da AWS",
      "AWS Budgets",
      "AWS Cost Explorer",
      "Nível gratuito da AWS"
    ],
    correctAnswer: 2,
    explanation: "O AWS Cost Explorer permite visualizar, entender e gerenciar os custos e o uso da AWS ao longo do tempo, fornecendo gráficos e relatórios detalhados."
  },
  {
    id: 53,
    text: "Qual ferramenta de preços permite receber alertas quando o uso do serviço excede um limite que você definiu?",
    options: [
      "Painel de cobrança no console de gerenciamento da AWS",
      "AWS Budgets",
      "Nível gratuito da AWS",
      "AWS Cost Explorer"
    ],
    correctAnswer: 1,
    explanation: "O AWS Budgets permite definir limites de custo e receber alertas quando o uso ou os custos excedem os valores configurados, ajudando no controle de gastos."
  },
  {
    id: 54,
    text: "Sua empresa deseja ter suporte de um technical account manager (TAM) da AWS. Qual plano de suporte você deve escolher?",
    options: [
      "Desenvolvedor",
      "Empresarial de Grande Porte",
      "Basic",
      "Empresarial"
    ],
    correctAnswer: 1,
    explanation: "O plano Empresarial de Grande Porte (Enterprise) inclui suporte de um Technical Account Manager (TAM), que oferece orientação personalizada e suporte proativo."
  },
  {
    id: 55,
    text: "Qual serviço ou recurso é usado para encontrar software de terceiros que pode ser executado na AWS?",
    options: [
      "AWS Marketplace",
      "Nível gratuito da AWS",
      "AWS Support",
      "Painel de cobrança no console de gerenciamento da AWS"
    ],
    correctAnswer: 0,
    explanation: "O AWS Marketplace é uma plataforma que oferece software de terceiros que pode ser executado na AWS, incluindo aplicações, serviços e soluções de diversos fornecedores."
  },
  {
    id: 56,
    text: "Qual serviço ajuda você a criar, treinar e implantar rapidamente modelos de machine learning?",
    options: [
      "Amazon Textract",
      "Amazon Lex",
      "AWS DeepRacer",
      "Amazon SageMaker"
    ],
    correctAnswer: 3,
    explanation: "O Amazon SageMaker é um serviço totalmente gerenciado que ajuda a criar, treinar e implantar modelos de machine learning de forma rápida e escalável."
  },
  {
    id: 57,
    text: "Qual perspectiva do AWS Cloud Adoption Framework ajuda você a elaborar, implementar e otimizar sua infraestrutura da AWS com base em suas metas e perspectivas de negócio?",
    options: [
      "Perspectiva de negócio",
      "Perspectiva de plataforma",
      "Perspectiva de operações",
      "Perspectiva de pessoas"
    ],
    correctAnswer: 1,
    explanation: "A Perspectiva de Plataforma do AWS Cloud Adoption Framework ajuda a projetar e otimizar a infraestrutura da AWS com base nas metas de negócio."
  },
  {
    id: 58,
    text: "Qual estratégia de migração envolve a mudança para um produto diferente?",
    options: [
      "Refatorar",
      "Retirar",
      "Redefinir plataforma",
      "Recomprar"
    ],
    correctAnswer: 3,
    explanation: "A estratégia de migração 'Recomprar' envolve a mudança para um produto diferente, como a substituição de um software local por uma solução SaaS."
  },
  {
    id: 59,
    text: "Qual é a capacidade de armazenamento do Snowball Edge Storage Optimized?",
    options: [
      "40 TB",
      "60 TB",
      "80 TB",
      "100 TB"
    ],
    correctAnswer: 2,
    explanation: "O Snowball Edge Storage Optimized tem uma capacidade de armazenamento de 80 TB, sendo ideal para transferência de grandes volumes de dados."
  },
  {
    id: 60,
    text: "Qual perspectiva do AWS Cloud Adoption Framework ajuda você a estruturar a seleção e a implementação de permissões?",
    options: [
      "Perspectiva de governança",
      "Perspectiva de segurança",
      "Perspectiva de operações",
      "Perspectiva de negócio"
    ],
    correctAnswer: 1,
    explanation: "A Perspectiva de Segurança do AWS Cloud Adoption Framework ajuda a estruturar a seleção e implementação de permissões para garantir a segurança dos recursos."
  },
  {
    id: 61,
    text: "Quais estratégias fazem parte das seis estratégias de migração de aplicativo? (Selecione DUAS opções.)",
    options: [
      "Revisitar",
      "Reter",
      "Lembrar",
      "Redesenvolver",
      "Redefinir hospedagem"
    ],
    correctAnswer: [1, 4],
    explanation: "As estratégias 'Reter' (manter o aplicativo como está) e 'Redefinir hospedagem' (mover o aplicativo sem alterações) fazem parte das seis estratégias de migração."
  },
  {
    id: 62,
    text: "Qual é a capacidade de armazenamento do AWS Snowmobile?",
    options: [
      "40 PB",
      "60 PB",
      "80 PB",
      "100 PB"
    ],
    correctAnswer: 3,
    explanation: "O AWS Snowmobile tem uma capacidade de armazenamento de 100 PB, sendo ideal para transferência de volumes extremamente grandes de dados."
  },
  {
    id: 63,
    text: "Qual declaração descreve melhor o Amazon Lex?",
    options: [
      "Um serviço para criação de interfaces de conversação usando voz e texto",
      "Um serviço de machine learning que extrai automaticamente texto e dados de documentos digitalizados",
      "Um serviço de banco de dados de documentos compatível com cargas de trabalho do MongoDB",
      "Um serviço que identifica atividades on-line potencialmente fraudulentas"
    ],
    correctAnswer: 0,
    explanation: "O Amazon Lex é um serviço que permite criar interfaces de conversação (chatbots) usando voz e texto, com base na mesma tecnologia do Alexa."
  },
  {
    id: 64,
    text: "Qual pilar do AWS Well-Architected Framework se concentra na capacidade de uma carga de trabalho executar de maneira consistente e correta as funções pretendidas?",
    options: [
      "Excelência operacional",
      "Eficiência de desempenho",
      "Segurança",
      "Confiabilidade"
    ],
    correctAnswer: 3,
    explanation: "O pilar de Confiabilidade do AWS Well-Architected Framework foca na capacidade de uma carga de trabalho executar suas funções de forma consistente e correta, garantindo alta disponibilidade e resiliência."
  },
  {
    id: 65,
    text: "Que processo é uma vantagem da grande economia em escala?",
    options: [
      "Implantação de uma aplicação em várias Regiões ao redor do mundo",
      "Fazer o pagamento conforme o uso de preços mais baixos em consequência do uso agregado de serviços dos clientes da AWS",
      "Pagar pelo tempo de computação à medida que você o usa, em vez de investir antecipadamente em data centers",
      "Aumentar ou diminuir a capacidade da infraestrutura para atender à demanda"
    ],
    correctAnswer: 1,
    explanation: "A grande economia em escala da AWS permite que os clientes se beneficiem de preços mais baixos devido ao uso agregado de serviços por todos os clientes da AWS."
  },
  {
    id: 66,
    text: "Qual pilar do AWS Well-Architected Framework inclui a capacidade de executar cargas de trabalho de maneira eficaz e obter informações sobre as operações?",
    options: [
      "Otimização de custos",
      "Excelência operacional",
      "Eficiência de desempenho",
      "Confiabilidade"
    ],
    correctAnswer: 1,
    explanation: "O pilar de Excelência Operacional do AWS Well-Architected Framework foca na execução eficaz de cargas de trabalho e na obtenção de insights sobre as operações para melhorar continuamente."
  },
  {
    id: 67,
    text: "Quais são os benefícios da computação em nuvem? (Selecione DUAS opções.)",
    options: [
      "Aumente a velocidade e a agilidade.",
      "Beneficiar-se de economias de escala.",
      "Trocar despesa variável por despesa antecipada.",
      "Manter a capacidade da infraestrutura.",
      "Parar de gastar dinheiro com execução e manutenção de data centers."
    ],
    correctAnswer: [0, 4],
    explanation: "A computação em nuvem oferece benefícios como o aumento da velocidade e agilidade, além de eliminar a necessidade de gastar com a execução e manutenção de data centers físicos."
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