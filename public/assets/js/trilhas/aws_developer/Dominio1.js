// Dados dos serviços - Domínio 1: Development with AWS Services (32%)
const awsServices = [
  {
    id: 1,
    name: "Padrões de Arquitetura (Event-driven, Microservices, Monolítico)",
    category: "architecturePatterns",
    categoryLabel: "Padrões de Arquitetura",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "São abordagens fundamentais para estruturar suas aplicações na nuvem. A arquitetura Event-driven (orientada a eventos) permite que sistemas reajam a ocorrências, como um upload de arquivo no S3 disparando uma função Lambda. Microservices dividem a aplicação em componentes menores, independentes e especializados, facilitando a escalabilidade e manutenção de cada parte. Já a arquitetura Monolítica integra todas as funcionalidades em um único bloco de código, sendo mais simples inicialmente, mas podendo apresentar desafios de escalabilidade e agilidade em projetos maiores.",
    useCase: "Para um novo projeto com escopo limitado, uma arquitetura Monolítica pode ser um bom ponto de partida pela sua simplicidade. À medida que a aplicação cresce em complexidade e usuários, migrar para Microservices (ex: separar o carrinho de compras do catálogo de produtos em um e-commerce) permite escalar e atualizar cada serviço de forma independente. Para tarefas assíncronas e reativas, como gerar thumbnails de imagens automaticamente após o upload, uma arquitetura Event-driven utilizando S3 e Lambda é altamente eficiente."
  },
  {
    id: 2,
    name: "Aplicações Stateful vs. Stateless",
    category: "architectureConcepts",
    categoryLabel: "Conceitos de Arquitetura",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Aplicações Stateful (com estado) armazenam dados da sessão ou contexto do usuário diretamente na instância do servidor que processa a requisição. Isso pode complicar a escalabilidade horizontal, pois requisições subsequentes do mesmo usuário precisariam ser direcionadas para a mesma instância. Aplicações Stateless (sem estado) tratam cada requisição como uma transação independente, externalizando qualquer estado necessário para serviços como bancos de dados (DynamoDB) ou caches distribuídos (ElastiCache). Essa abordagem é crucial para facilitar o auto scaling e aumentar a resiliência.",
    useCase: "Um sistema de chat que armazena o histórico da conversa na memória do servidor que o usuário está conectado é Stateful. Se esse servidor falhar, a conversa pode ser perdida. Uma abordagem Stateless armazenaria o histórico em um banco de dados como o DynamoDB. Assim, qualquer servidor da aplicação poderia continuar a conversa, tornando o sistema mais robusto e escalável, especialmente com balanceadores de carga."
  },
  {
    id: 3,
    name: "Idempotência em Operações",
    category: "architectureConcepts",
    categoryLabel: "Conceitos de Arquitetura",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Idempotência é um princípio crucial que garante que realizar a mesma operação múltiplas vezes com os mesmos parâmetros produza sempre o mesmo resultado, sem causar efeitos colaterais indesejados a partir da segunda execução. Isso é vital em sistemas distribuídos onde mensagens podem ser reprocessadas devido a falhas de rede ou retries automáticos (como em filas SQS), prevenindo a duplicação de dados ou ações.",
    useCase: "Imagine um serviço que processa um pedido de compra. Se o cliente clicar no botão 'comprar' duas vezes rapidamente, ou se houver uma falha de rede e a requisição for reenviada automaticamente, a operação de processamento do pedido deve ser idempotente. Utilizando um ID de transação único, o sistema pode identificar que o pedido já foi processado e não criar um novo pedido ou cobrar o cliente novamente."
  },
  {
    id: 4,
    name: "Comunicação Síncrona vs. Assíncrona",
    category: "architectureConcepts",
    categoryLabel: "Conceitos de Arquitetura",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Na comunicação Síncrona, o solicitante envia uma requisição e bloqueia sua execução até receber uma resposta do serviço invocado. É direto, mas pode gerar acoplamento e gargalos se o serviço demorar. Na comunicação Assíncrona, o solicitante envia a requisição (geralmente para uma fila ou tópico de mensagens) e continua seu processamento sem esperar uma resposta imediata. Isso promove desacoplamento, resiliência e escalabilidade, sendo ideal para tarefas que podem ser executadas em segundo plano.",
    useCase: "Verificar a disponibilidade de um produto em estoque ao adicionar ao carrinho pode ser uma operação síncrona, pois o usuário espera essa informação para prosseguir. Já o envio de um e-mail de confirmação após a finalização da compra é um candidato perfeito para comunicação assíncrona: a ordem é registrada, uma mensagem é enviada para uma fila (SQS), e um serviço de e-mail (Lambda) processa o envio posteriormente, sem fazer o usuário esperar."
  },
  {
    id: 5,
    name: "AWS Lambda",
    category: "serverlessCompute",
    categoryLabel: "Computação Serverless",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "É um serviço de computação serverless que permite executar código em resposta a diversos eventos (gatilhos), como alterações em buckets S3, requisições a um API Gateway, ou mensagens em filas SQS, sem a necessidade de provisionar ou gerenciar servidores. Você paga apenas pelo tempo de computação consumido. Suas configurações principais incluem a escolha do runtime (linguagem de programação), alocação de memória, tempo limite de execução (timeout) e variáveis de ambiente. Lambda Layers permitem compartilhar bibliotecas, e a Concorrência Provisionada ajuda a reduzir a latência de inicialização (cold starts) para funções críticas.",
    useCase: "Uma aplicação precisa processar automaticamente cada nova imagem enviada para um bucket S3: redimensioná-la, aplicar um filtro e salvá-la em outro bucket. Uma função AWS Lambda pode ser configurada para ser acionada pelo evento de upload no S3, executar esse processamento e finalizar, tudo de forma escalável e sem gerenciamento de infraestrutura."
  },
  {
    id: 6,
    name: "Amazon SNS (Simple Notification Service)",
    category: "messagingEvents",
    categoryLabel: "Mensageria e Eventos",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Serviço de mensagens totalmente gerenciado para comunicação entre aplicações (A2A) e com usuários (A2P). Utiliza o padrão de publicação/assinatura (pub/sub): publicadores enviam mensagens para 'tópicos', e múltiplos 'assinantes' (como funções Lambda, filas SQS, endpoints HTTP/S, e-mails, SMS) recebem essas mensagens. É ideal para o padrão fan-out, onde uma única mensagem precisa ser distribuída para diversos sistemas ou processos de forma desacoplada.",
    useCase: "Quando um novo produto é cadastrado em um sistema de e-commerce, uma mensagem sobre este evento é publicada em um tópico SNS. Diferentes microsserviços podem assinar este tópico: um para atualizar o índice de busca, outro para notificar a equipe de marketing, e um terceiro para iniciar um processo de recomendação, todos reagindo ao mesmo evento de forma independente."
  },
  {
    id: 7,
    name: "Amazon SQS (Simple Queue Service)",
    category: "messagingEvents",
    categoryLabel: "Mensageria e Eventos",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Serviço de enfileiramento de mensagens totalmente gerenciado que permite desacoplar e escalar componentes de aplicações. Produtores enviam mensagens para uma fila, e consumidores as processam de forma independente. Oferece dois tipos de filas: Standard (alta taxa de transferência, entrega 'pelo menos uma vez', ordem não garantida) e FIFO (First-In-First-Out: entrega 'exatamente uma vez', ordem preservada). Suporta Dead-Letter Queues (DLQs) para isolar mensagens que não puderam ser processadas com sucesso.",
    useCase: "Uma aplicação de processamento de pedidos recebe um grande volume de solicitações. Cada pedido pode ser enviado como uma mensagem para uma fila SQS. Um conjunto de workers (escaláveis, como funções Lambda ou contêineres ECS) consome as mensagens da fila no seu próprio ritmo, processando os pedidos de forma assíncrona. Se um pedido falhar no processamento repetidamente, ele é movido para uma DLQ para análise, sem parar o fluxo principal."
  },
  {
    id: 8,
    name: "Amazon API Gateway",
    category: "apiManagement",
    categoryLabel: "Gerenciamento de APIs",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Serviço totalmente gerenciado que atua como a 'porta de entrada' para suas aplicações, permitindo criar, publicar, manter, monitorar e proteger APIs em qualquer escala. Ele gerencia todo o tráfego de requisições para serviços backend, como AWS Lambda, instâncias EC2, ou qualquer endpoint HTTP. Oferece recursos como gerenciamento de tráfego, controle de acesso e autorização, monitoramento e versionamento de API. Suporta APIs RESTful e WebSocket.",
    useCase: "Para expor funcionalidades de um microsserviço (rodando em Lambda ou ECS) para uma aplicação mobile, o API Gateway pode ser usado para criar um endpoint HTTP seguro. Ele pode lidar com a autenticação do usuário, validar as requisições, transformar os dados e rotear a chamada para o serviço backend apropriado, retornando a resposta para o mobile."
  },
  {
    id: 9,
    name: "Amazon EC2 (Elastic Compute Cloud)",
    category: "compute",
    categoryLabel: "Computação",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "É o serviço central da AWS para fornecer capacidade computacional na nuvem sob demanda. Permite lançar servidores virtuais, conhecidos como 'instâncias', com uma variedade de sistemas operacionais e configurações de CPU, memória, armazenamento e rede. Oferece controle granular sobre a infraestrutura, sendo ideal para aplicações que exigem configurações específicas, software legado ou para quem prefere gerenciar seus próprios servidores.",
    useCase: "Uma empresa precisa executar uma aplicação de software tradicional que requer um sistema operacional Windows Server e acesso direto ao sistema de arquivos para configurações específicas. Eles podem provisionar uma instância EC2 com as especificações necessárias, instalar a aplicação e ter controle total sobre o ambiente do servidor."
  },
  {
    id: 10,
    name: "AWS Elastic Beanstalk",
    category: "platformAsAService",
    categoryLabel: "Plataforma como Serviço (PaaS)",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Serviço de orquestração que simplifica o processo de implantação e escalabilidade de aplicações web e serviços. Você simplesmente faz o upload do seu código (para linguagens como Java, .NET, PHP, Node.js, Python, Ruby, Go, Docker), e o Elastic Beanstalk automaticamente gerencia o provisionamento da infraestrutura, incluindo instâncias EC2, balanceamento de carga, auto scaling, monitoramento da saúde da aplicação e logs. Ideal para desenvolvedores que querem focar no código sem se preocupar com a infraestrutura.",
    useCase: "Um desenvolvedor criou uma aplicação web em Node.js e quer implantá-la na AWS sem ter que configurar manualmente servidores, load balancers ou grupos de auto scaling. Ele utiliza o Elastic Beanstalk, envia seu código, e o serviço provisiona e gerencia todo o ambiente necessário para rodar a aplicação de forma escalável e resiliente."
  },
  {
    id: 11,
    name: "Amazon S3 (Simple Storage Service)",
    category: "storage",
    categoryLabel: "Armazenamento",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Serviço de armazenamento de objetos altamente escalável, durável e seguro. Permite armazenar e recuperar qualquer quantidade de dados, a qualquer momento, de qualquer lugar na web. Os dados são organizados em 'buckets' e armazenados como 'objetos'. É amplamente utilizado para backup e restauração, arquivamento de dados, hospedagem de sites estáticos, data lakes e como repositório para big data analytics.",
    useCase: "Uma aplicação web precisa armazenar imagens de perfil enviadas pelos usuários, arquivos de log e conteúdo estático do site (HTML, CSS, JS). O Amazon S3 é a escolha ideal, oferecendo baixo custo, alta durabilidade e fácil integração. As imagens e logs podem ser armazenados em buckets privados, enquanto o conteúdo estático pode ser servido publicamente ou via CloudFront."
  },
  {
    id: 12,
    name: "Amazon Cognito",
    category: "securityIdentity",
    categoryLabel: "Segurança e Identidade",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Serviço que facilita a adição de funcionalidades de cadastro, login e controle de acesso a aplicações web e móveis. Gerencia identidades de usuários através dos 'User Pools' (diretórios de usuários próprios) ou permite federação com provedores de identidade externos como Google, Facebook, Apple ou provedores corporativos via SAML 2.0 e OpenID Connect. Os 'Identity Pools' permitem conceder aos usuários autenticados acesso temporário e limitado a outros serviços AWS.",
    useCase: "Uma nova aplicação móvel precisa permitir que usuários se cadastrem com e-mail e senha ou façam login usando suas contas Google. Amazon Cognito User Pools podem gerenciar o diretório de usuários e o processo de login. Após a autenticação, Cognito Identity Pools podem fornecer credenciais temporárias para que a aplicação acesse, por exemplo, um bucket S3 específico do usuário para armazenar suas preferências."
  },
  {
    id: 13,
    name: "AWS SDKs (Software Development Kits)",
    category: "developerTools",
    categoryLabel: "Ferramentas de Desenvolvimento",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "São bibliotecas e ferramentas específicas para diversas linguagens de programação (como Python/Boto3, JavaScript, Java, .NET, Go) que simplificam a interação programática com os serviços da AWS. Eles abstraem a complexidade das chamadas de API diretas, gerenciando autenticação, serialização de dados e tratamento de erros, permitindo que os desenvolvedores integrem funcionalidades da AWS em suas aplicações de forma mais eficiente.",
    useCase: "Um desenvolvedor está construindo um script em Python para automatizar o backup diário de dados de instâncias EC2 para o S3. Ele utiliza o AWS SDK para Python (Boto3) para listar instâncias, criar snapshots EBS e copiar esses snapshots para um bucket S3, tudo de forma programática."
  },
  {
    id: 14,
    name: "AWS Key Management Service (KMS)",
    category: "securityIdentity",
    categoryLabel: "Segurança e Identidade",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Serviço gerenciado que facilita a criação, o controle e o gerenciamento de chaves de criptografia usadas para proteger dados em repouso e em trânsito. Ele se integra com a maioria dos serviços AWS (como S3, EBS, RDS) para simplificar a criptografia. Permite o uso de chaves gerenciadas pela AWS, chaves gerenciadas pelo cliente (CMKs) ou a importação de suas próprias chaves. Oferece um módulo de segurança de hardware (HSM) validado pelo FIPS 140-2 para proteção das chaves.",
    useCase: "Uma aplicação armazena informações financeiras sensíveis em um bucket S3 e em um banco de dados RDS. Para atender a requisitos de conformidade, o AWS KMS é utilizado para criar e gerenciar chaves de criptografia (CMKs) que são usadas pela S3 (via SSE-KMS) e pelo RDS para criptografar os dados em repouso, garantindo que apenas usuários autorizados possam descriptografá-los."
  },
  {
    id: 15,
    name: "AWS Secrets Manager",
    category: "securityIdentity",
    categoryLabel: "Segurança e Identidade",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Serviço dedicado ao gerenciamento seguro de segredos, como senhas de banco de dados, chaves de API e outros tokens. Permite armazenar, recuperar e rotacionar segredos de forma programática e segura, ajudando a substituir credenciais embutidas no código por chamadas de API. Suporta rotação automática de credenciais para serviços como RDS, Redshift e DocumentDB.",
    useCase: "Uma aplicação precisa se conectar a um banco de dados Amazon RDS. Em vez de armazenar o nome de usuário e senha do banco no código fonte ou em arquivos de configuração, essas credenciais são armazenadas como um segredo no AWS Secrets Manager. A aplicação, em tempo de execução, solicita essas credenciais ao Secrets Manager usando permissões IAM. O serviço também pode ser configurado para rotacionar automaticamente a senha do banco periodicamente."
  },
  {
    id: 16,
    name: "SSM Parameter Store (AWS Systems Manager)",
    category: "developerTools",
    categoryLabel: "Ferramentas de Desenvolvimento",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Componente do AWS Systems Manager que oferece armazenamento seguro e hierárquico para dados de configuração e segredos. Você pode armazenar valores como senhas, strings de conexão de banco de dados, chaves de licença e outros dados de configuração como parâmetros. Suporta parâmetros padrão (texto plano) e seguros (criptografados com KMS). É uma opção mais simples para gerenciamento de configuração, enquanto o Secrets Manager é mais focado em rotação e gerenciamento de ciclo de vida de segredos.",
    useCase: "Uma função Lambda precisa da URL de um endpoint de API externa e de uma chave de API para acessá-la. Essas informações podem ser armazenadas no SSM Parameter Store (a chave de API como um SecureString). A função Lambda, em tempo de execução, recupera esses parâmetros para configurar suas chamadas, evitando que fiquem expostos no código."
  },
  {
    id: 17,
    name: "Amazon CloudWatch",
    category: "monitoringObservability",
    categoryLabel: "Monitoramento e Observabilidade",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Serviço de monitoramento e observabilidade abrangente para recursos e aplicações na AWS e on-premises. Coleta métricas de performance, logs de aplicação e sistema, e eventos. Permite visualizar dados através de dashboards, definir alarmes para notificar sobre condições específicas (ex: alta utilização de CPU, erros em Lambda) e automatizar ações em resposta a esses alarmes. É fundamental para entender a saúde e o desempenho das suas soluções.",
    useCase: "Para uma aplicação web rodando em EC2, o CloudWatch coleta métricas como utilização de CPU, I/O de disco e tráfego de rede. Os logs da aplicação são enviados para o CloudWatch Logs. Alarmes são configurados para notificar a equipe de operações se a CPU ultrapassar 80% por 5 minutos ou se um número excessivo de erros 5xx for detectado nos logs, permitindo uma resposta rápida a problemas."
  },
  {
    id: 18,
    name: "AWS X-Ray",
    category: "monitoringObservability",
    categoryLabel: "Monitoramento e Observabilidade",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Serviço que ajuda desenvolvedores a analisar e depurar aplicações distribuídas, como aquelas construídas com arquiteturas de microsserviços. Ele rastreia as requisições à medida que elas viajam através dos vários componentes da sua aplicação (ex: API Gateway, Lambda, SQS, DynamoDB), fornecendo um mapa de serviço visual, identificando gargalos de performance, erros e anomalias. Essencial para entender o comportamento ponta a ponta de sistemas complexos.",
    useCase: "Uma requisição de usuário para uma aplicação de e-commerce passa por vários microsserviços: autenticação, catálogo, carrinho e pagamento. Se uma requisição estiver lenta, o AWS X-Ray pode mostrar o tempo gasto em cada serviço e em chamadas a bancos de dados, ajudando a identificar rapidamente qual componente está causando o atraso para que possa ser otimizado."
  },
  {
    id: 19,
    name: "AWS Step Functions",
    category: "orchestration",
    categoryLabel: "Orquestração de Workflows",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Serviço de orquestração serverless que permite coordenar múltiplos serviços AWS (como Lambda, SQS, SNS, Fargate) em fluxos de trabalho visuais e resilientes. Você define seus workflows como máquinas de estado, onde cada passo (estado) pode executar uma tarefa, tomar uma decisão, esperar ou ramificar a execução. Gerencia o estado, retries, tratamento de erros e paralelização, simplificando a construção de aplicações distribuídas complexas.",
    useCase: "Um processo de processamento de um pedido de e-commerce envolve várias etapas: validar o pedido (Lambda), verificar o estoque (Lambda), processar o pagamento (integração com API de terceiros), e enviar um e-mail de confirmação (SNS/Lambda). O AWS Step Functions pode orquestrar essa sequência, gerenciando a lógica de retentativas em caso de falha no pagamento e garantindo que todas as etapas sejam executadas na ordem correta e com tratamento de erros."
  },
  {
    id: 20,
    name: "Amazon DynamoDB",
    category: "databaseNoSQL",
    categoryLabel: "Banco de Dados NoSQL",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Banco de dados NoSQL chave-valor e de documentos totalmente gerenciado, projetado para performance de milissegundos de um dígito em qualquer escala. Oferece alta disponibilidade, durabilidade e escalabilidade massiva. Possui esquema flexível, ideal para aplicações com requisitos de dados que evoluem rapidamente. Suporta consistência eventual (padrão) e leituras fortemente consistentes. Recursos importantes incluem Índices Secundários Globais (GSI) e Locais (LSI) para consultas flexíveis, e modo de capacidade provisionada ou sob demanda (On-Demand).",
    useCase: "Uma aplicação de rede social precisa armazenar perfis de usuários, posts e listas de amigos, com necessidade de leituras e escritas rápidas para milhões de usuários ativos. O Amazon DynamoDB é usado devido à sua capacidade de escalar horizontalmente, baixa latência e flexibilidade para armazenar diferentes tipos de dados de perfil e atividade."
  },
  {
    id: 21,
    name: "Amazon RDS (Relational Database Service)",
    category: "databaseRelational",
    categoryLabel: "Banco de Dados Relacional",
    image: "https://www.mindmajix.com/blogs/images/what-is-amazon-rds-080820.png",
    description: "Serviço gerenciado que simplifica a configuração, operação e escalabilidade de bancos de dados relacionais na nuvem. Automatiza tarefas como provisionamento de hardware, patches de software, backups e recuperação. Suporta diversos motores de banco de dados populares como MySQL, PostgreSQL, MariaDB, Oracle e SQL Server, além do Amazon Aurora, que é otimizado para a nuvem.",
    useCase: "Uma empresa está migrando sua aplicação de contabilidade existente, que depende de um banco de dados MySQL com esquema relacional complexo e transações ACID, para a nuvem. Eles escolhem o Amazon RDS for MySQL para reduzir a carga administrativa de gerenciamento do banco de dados, enquanto mantêm a compatibilidade com sua aplicação."
  },
  {
    id: 22,
    name: "Amazon Aurora",
    category: "databaseRelational",
    categoryLabel: "Banco de Dados Relacional",
    image: "https://images.ctfassets.net/1khq4uysbvty/2P2QO9zHhz9z0wYfC93fR2/11067375805a6a627f92700a9e9c7203/serverless-aurora.png",
    description: "Banco de dados relacional de alta performance, totalmente gerenciado e compatível com MySQL e PostgreSQL, projetado especificamente para a nuvem AWS. Oferece maior throughput e disponibilidade do que as versões padrão desses motores no RDS, com recursos como armazenamento auto-escalável, replicação entre múltiplas AZs, e failover rápido. Integra-se com outros serviços AWS, como Lambda e S3.",
    useCase: "Uma plataforma de e-commerce de grande porte com picos de tráfego sazonais precisa de um banco de dados relacional que ofereça performance superior e escalabilidade para seu catálogo de produtos e transações de pedidos. Eles optam pelo Amazon Aurora (compatível com MySQL) para obter melhor desempenho, resiliência e capacidade de lidar com cargas de trabalho intensas."
  },
  {
    id: 23,
    name: "Amazon ElastiCache",
    category: "caching",
    categoryLabel: "Caching em Memória",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*XJd_nB2QjizL8bwv53mE_g.png",
    description: "Serviço de caching na memória totalmente gerenciado que facilita a implantação, operação e escalabilidade de caches distribuídos. Suporta dois motores populares: Redis (armazenamento de dados na memória rico em recursos, com persistência opcional, replicação e alta disponibilidade) e Memcached (cache de objetos na memória simples e de alta performance). Usado para acelerar aplicações, reduzindo a latência de acesso a dados e aliviando a carga sobre bancos de dados.",
    useCase: "Um site de notícias com milhões de visualizações diárias armazena os artigos mais lidos e os comentários recentes em um cluster Amazon ElastiCache for Redis. Isso permite que as páginas carreguem muito mais rápido para os usuários, pois os dados são recuperados da memória em vez de consultar o banco de dados principal a cada requisição, melhorando significativamente a experiência do usuário e a escalabilidade do site."
  },
  {
    id: 24,
    name: "AWS SAM (Serverless Application Model)",
    category: "developerTools",
    categoryLabel: "Ferramentas de Desenvolvimento",
    image: "https://miro.medium.com/max/1000/1*YH5QG1hwiO30L2rgX2Lh0A.png",
    description: "Framework de infraestrutura como código (IaC) de código aberto, construído sobre o AWS CloudFormation, especificamente projetado para simplificar o desenvolvimento e a implantação de aplicações serverless. Usa uma sintaxe YAML ou JSON concisa para definir funções Lambda, APIs do API Gateway, tabelas DynamoDB e outras fontes de eventos. A AWS SAM CLI permite construir, testar localmente (simulando Lambda e API Gateway) e implantar aplicações serverless de forma eficiente.",
    useCase: "Um desenvolvedor está construindo um backend serverless para uma aplicação, consistindo em várias funções Lambda e um API Gateway. Ele utiliza o AWS SAM para definir todos esses recursos em um arquivo `template.yaml`. Com a SAM CLI, ele pode testar as funções e a API localmente antes de usar o comando `sam deploy` para provisionar e atualizar a aplicação na nuvem AWS de forma automatizada."
  }
];

document.addEventListener('DOMContentLoaded', function () {
  const servicesGrid = document.getElementById('servicesGrid');
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const expandAllBtn = document.getElementById('expandAllBtn');
  const collapseAllBtn = document.getElementById('collapseAllBtn');
  const progressText = document.getElementById('progressText');
  const progressBar = document.getElementById('progressBar');

  let readServices = new Set(); // Armazena os IDs dos serviços lidos

  // Atualiza o texto do progresso para refletir o total de serviços neste domínio
  progressText.textContent = `0 de ${awsServices.length} serviços concluídos`;


  // Renderiza todos os serviços inicialmente
  renderServices(awsServices);

  // Event listeners
  searchInput.addEventListener('input', filterServices);
  categoryFilter.addEventListener('change', filterServices);
  expandAllBtn.addEventListener('click', expandAllServices);
  collapseAllBtn.addEventListener('click', collapseAllServices);

  // Função para renderizar os serviços
  function renderServices(services) {
    servicesGrid.innerHTML = '';

    if (services.length === 0) {
      servicesGrid.innerHTML = '<div class="no-results">Nenhum serviço encontrado. Tente outros critérios de busca.</div>';
      return;
    }

    services.forEach(service => {
      const serviceCard = document.createElement('div');
      serviceCard.className = 'service-card';
      serviceCard.dataset.id = service.id;

      serviceCard.innerHTML = `
        <div class="service-image-container">
          <span class="service-category">${service.categoryLabel}</span>
          <img src="${service.image}" alt="${service.name}" class="service-image">
        </div>
        <div class="service-name">${service.name}</div>
        <div class="service-details">
          <div class="service-description">
            <h3>O que é</h3>
            <p>${service.description}</p>
          </div>
          <div class="service-use-case">
            <h3>Caso de uso</h3>
            <p>${service.useCase}</p>
          </div>
        </div>
      `;

      const imageContainer = serviceCard.querySelector('.service-image-container');
      const serviceName = serviceCard.querySelector('.service-name');

      // Adiciona evento de clique na imagem e no nome do serviço
      const toggleDetails = () => {
        // Fecha todos os outros cards abertos
        document.querySelectorAll('.service-card.expanded').forEach(card => {
          if (card !== serviceCard) {
            card.classList.remove('expanded');
          }
        });

        // Abre/fecha o card clicado
        serviceCard.classList.toggle('expanded');

        // Atualiza o progresso se o card foi aberto
        if (serviceCard.classList.contains('expanded')) {
          readServices.add(service.id);
          updateProgress();
        }
      };

      imageContainer.addEventListener('click', toggleDetails);
      serviceName.addEventListener('click', toggleDetails);

      servicesGrid.appendChild(serviceCard);
    });
  }

  // Função para filtrar serviços
  function filterServices() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value; // Embora aqui só tenhamos 'development'

    const filteredServices = awsServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm) ||
        service.description.toLowerCase().includes(searchTerm) ||
        service.useCase.toLowerCase().includes(searchTerm); // Adicionado caso de uso na busca
      const matchesCategory = category === 'all' || service.category === category;

      return matchesSearch && matchesCategory;
    });

    renderServices(filteredServices);
  }

  // Função para expandir todos os serviços
  function expandAllServices() {
    document.querySelectorAll('.service-card').forEach(card => {
      card.classList.add('expanded');
      readServices.add(Number(card.dataset.id));
    });
    updateProgress();
  }

  // Função para recolher todos os serviços
  function collapseAllServices() {
    document.querySelectorAll('.service-card').forEach(card => {
      card.classList.remove('expanded');
    });
  }

  // Atualiza o progresso de leitura
  function updateProgress() {
    const totalServices = awsServices.length;
    const readCount = readServices.size;
    const progressPercentage = (readCount / totalServices) * 100;

    progressText.textContent = `${readCount} de ${totalServices} serviços concluídos`;
    progressBar.style.width = `${progressPercentage}%`;
  }

  // Inicializa o progresso
  updateProgress();
});