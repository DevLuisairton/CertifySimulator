// Dados dos serviços - Domínio 1: Development with AWS Services (32%)
const awsServices = [
  {
    id: 1,
    name: "Arquiteturas e Paradigmas de Software (Event-driven, Microservices, Monolítico)",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*iR3hT2G2q8q7q2Gj_0_9_A.png", // Placeholder
    description: "Abordagens para estruturar aplicações. Event-driven reage a eventos (ex: upload no S3 dispara Lambda)[cite: 315, 316]. Microservices dividem a aplicação em serviços menores e independentes (ex: serviço de pedidos, serviço de pagamentos)[cite: 322, 323]. Monolítico integra toda a funcionalidade em um único bloco de código[cite: 330].",
    useCase: "Uma empresa pode iniciar com uma arquitetura monolítica para um novo produto simples[cite: 338]. Com o crescimento, pode migrar para microservices para escalar e manter componentes individualmente (ex: serviço de checkout em um e-commerce)[cite: 325, 326]. Para processamento assíncrono e reativo, como redimensionar imagens após o upload, uma arquitetura event-driven com Lambda e S3 é ideal[cite: 317]."
  },
  {
    id: 2,
    name: "Stateful vs. Stateless",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*f_8FfL0gsoXfY4R52M6YgA.png", // Placeholder
    description: "Aplicações stateful mantêm o estado internamente (ex: sessão de usuário na memória do servidor), o que pode dificultar a escalabilidade horizontal[cite: 341, 343]. Aplicações stateless processam cada requisição de forma independente, externalizando o estado (ex: em DynamoDB ou ElastiCache), facilitando o auto scaling e a resiliência[cite: 346, 347].",
    useCase: "Uma aplicação web que armazena sessões de usuário localmente no servidor é stateful[cite: 344]. Para alta escalabilidade, é melhor torná-la stateless, armazenando as sessões em um serviço externo como Amazon DynamoDB ou ElastiCache, permitindo que qualquer instância da aplicação atenda às requisições[cite: 349, 350, 460]."
  },
  {
    id: 3,
    name: "Idempotência",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://miro.medium.com/max/1200/1*sZ6k3a2s2bY7q8WH0BAgXQ.png", // Placeholder
    description: "Garante que múltiplas chamadas com os mesmos parâmetros resultem no mesmo efeito, sem causar efeitos colaterais adicionais[cite: 351]. Essencial em cenários de reexecução automática (ex: retries em filas SQS) para evitar duplicação de dados[cite: 352, 462].",
    useCase: "Ao processar um pagamento, se uma API for chamada múltiplas vezes devido a um retry, a idempotência (usando uma chave de transação única, por exemplo) garante que o pagamento seja processado apenas uma vez, evitando cobranças duplicadas[cite: 354]."
  },
  {
    id: 4,
    name: "Síncrono vs. Assíncrono",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://static.semrush.com/blog/uploads/media/c9/41/c9418dd751e750853028e3c5a95e238e/original.png", // Placeholder
    description: "Operações síncronas exigem que o chamador aguarde a resposta imediata (ex: chamada REST para obter detalhes de um pedido)[cite: 362, 364]. Operações assíncronas permitem que o chamador envie a requisição e continue sem esperar uma resposta imediata, ideal para tarefas em segundo plano (ex: enviar uma mensagem para SQS para processamento posterior)[cite: 369, 373].",
    useCase: "Consultar o saldo de uma conta bancária geralmente é uma operação síncrona, pois o usuário precisa da resposta imediatamente[cite: 364]. Enviar um e-mail de notificação após um cadastro pode ser uma operação assíncrona: a aplicação envia a tarefa para uma fila (SQS) e um worker (Lambda) processa o envio do e-mail depois, liberando a aplicação principal[cite: 373]."
  },
  {
    id: 5,
    name: "AWS Lambda",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://static.semrush.com/blog/uploads/media/1f/75/1f75db3289ddc63394e86008f68a6405/original.png", // Placeholder
    description: "Serviço de computação serverless que executa código em resposta a eventos (ex: upload no S3, chamada de API Gateway) sem a necessidade de gerenciar servidores[cite: 377, 383]. Configurações incluem runtime, memória, timeout, e variáveis de ambiente[cite: 378, 777]. Suporta layers para dependências [cite: 796] e provisioned concurrency para mitigar cold starts[cite: 379, 386].",
    useCase: "Uma função Lambda pode ser acionada por um evento do S3 quando uma imagem é carregada. A função então redimensiona a imagem automaticamente e a salva em outro bucket S3, tudo sem provisionar ou gerenciar servidores[cite: 317, 377]."
  },
  {
    id: 6,
    name: "Amazon SNS (Simple Notification Service)",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*xK4xYIsj3g__9Zf4LhLw8w.png", // Placeholder
    description: "Serviço de notificação totalmente gerenciado que permite desacoplar microserviços, sistemas distribuídos e aplicações serverless[cite: 387]. Ele distribui mensagens para diversos endpoints (e-mail, SMS, HTTP/S, SQS, funções Lambda) usando um modelo de publicação/assinatura (pub/sub) através de tópicos[cite: 387, 388]. Ideal para o padrão fan-out[cite: 389].",
    useCase: "Quando um novo pedido é criado em um sistema de e-commerce, uma mensagem pode ser publicada em um tópico SNS[cite: 390]. Múltiplos serviços, como um sistema de faturamento (assinado via HTTPS) e uma função Lambda para atualizar o inventário, podem receber essa notificação simultaneamente[cite: 389, 393]."
  },
  {
    id: 7,
    name: "Amazon SQS (Simple Queue Service)",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://d1.awsstatic.com/product-marketing/Messaging/Amazon-SQS-Product-Page-Diagram_How-It-Works.cd97b8a902272a56334774c1079463312f89e0cf.png", // Placeholder
    description: "Serviço de enfileiramento de mensagens totalmente gerenciado que permite desacoplar e escalar microserviços, sistemas distribuídos e aplicações serverless[cite: 394]. Oferece filas Standard (alta taxa de transferência, entrega pelo menos uma vez, melhor esforço na ordem) e FIFO (entrega exatamente uma vez, ordem preservada)[cite: 396, 398, 401]. Suporta Dead-Letter Queues (DLQs) para tratamento de mensagens com falha[cite: 399, 402].",
    useCase: "Uma aplicação web pode enviar tarefas de processamento de vídeo para uma fila SQS Standard[cite: 373, 375]. Workers (ex: instâncias EC2 ou funções Lambda) consomem as mensagens da fila e processam os vídeos de forma assíncrona e escalável. Se um vídeo falhar no processamento repetidamente, a mensagem pode ser movida para uma DLQ para análise[cite: 399, 501]."
  },
  {
    id: 8,
    name: "Amazon API Gateway",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://d1.awsstatic.com/product-marketing/APIGateway/diagram_Amazon-API-Gateway_how-it-works.c142cac3853486137f40c68067a891723247984f.png", // Placeholder
    description: "Serviço totalmente gerenciado que facilita a criação, publicação, manutenção, monitoramento e proteção de APIs em qualquer escala[cite: 405, 406]. Atua como 'porta da frente' para aplicações acessarem dados, lógica de negócios ou funcionalidades de serviços backend, como AWS Lambda, Amazon EC2 ou código em contêineres[cite: 406, 413]. Suporta APIs RESTful e WebSocket[cite: 405].",
    useCase: "Uma empresa desenvolve uma aplicação móvel que precisa buscar dados de produtos de um backend. O API Gateway pode ser usado para criar um endpoint RESTful que, quando chamado, aciona uma função AWS Lambda para buscar os dados no DynamoDB e retorná-los para a aplicação móvel, com tratamento de autenticação e throttling[cite: 407, 409, 416]."
  },
  {
    id: 9,
    name: "Amazon EC2 (Elastic Compute Cloud)",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://miro.medium.com/max/1200/1*3Z_m8KDbR59GRYy6G3vOQQ.png", // Placeholder
    description: "Serviço web que fornece capacidade computacional segura e redimensionável na nuvem (servidores virtuais, conhecidos como instâncias)[cite: 417]. Permite controle total sobre os recursos de computação e é útil para aplicações monolíticas ou que exigem um ambiente específico[cite: 418, 419, 423].",
    useCase: "Uma empresa precisa hospedar um servidor de banco de dados legado que requer uma configuração de sistema operacional específica e controle total sobre o ambiente. Eles podem lançar uma instância Amazon EC2, instalar o software do banco de dados e configurar a rede conforme necessário[cite: 420, 421]."
  },
  {
    id: 10,
    name: "AWS Elastic Beanstalk",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://d2908q01vomqb2.cloudfront.net/fc074d501302eb2b93e2554793fcaf50b3bf7291/2022/09/02/Extending-Elastic-Beanstalk-instance-profile-permissions-1065x630.png", // Placeholder
    description: "Serviço fácil de usar para implantar e escalar aplicações e serviços web desenvolvidos com Java, .NET, PHP, Node.js, Python, Ruby, Go e Docker em servidores familiares como Apache, Nginx, Passenger e IIS[cite: 423]. Ele abstrai a infraestrutura subjacente (EC2, S3, ELB, Auto Scaling, RDS), automatizando o provisionamento, balanceamento de carga, auto scaling e monitoramento da saúde da aplicação[cite: 423, 424, 427].",
    useCase: "Um desenvolvedor web criou uma aplicação em Python e quer implantá-la rapidamente sem se preocupar com a configuração de servidores, balanceadores de carga ou auto scaling. Ele pode usar o AWS Elastic Beanstalk, fazer o upload do código, e o serviço cuida do provisionamento e gerenciamento da infraestrutura necessária[cite: 426, 430]."
  },
  {
    id: 11,
    name: "Amazon S3 (Simple Storage Service)",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://media.licdn.com/dms/image/D4D12AQEQg6FFX5u7sA/article-cover_image-shrink_720_1280/0/1687773752393?e=2147483647&v=beta&t=jLGFqV02o9_7_S3uV1Z0zWkH5v3R0zQvYvQxYlV_j8w", // Placeholder
    description: "Serviço de armazenamento de objetos que oferece escalabilidade, disponibilidade de dados, segurança e performance líderes do setor[cite: 431]. Permite armazenar e proteger qualquer quantidade de dados para casos de uso como data lakes, aplicações web e móveis, backup e restauração, arquivamento e análise de big data[cite: 431, 432]. Os dados são armazenados como objetos dentro de recursos chamados 'buckets'[cite: 432].",
    useCase: "Uma empresa de mídia precisa armazenar grandes volumes de arquivos de vídeo e imagem de forma segura e acessível. Eles usam o Amazon S3 para armazenar esses arquivos, aproveitando sua durabilidade e escalabilidade, e podem usar políticas de ciclo de vida para mover arquivos mais antigos para classes de armazenamento mais baratas[cite: 433, 434, 437]."
  },
  {
    id: 12,
    name: "Amazon Cognito",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*3n8zVnMSztX9ZkGov3hJvA.png", // Placeholder
    description: "Serviço que permite adicionar cadastro, login e controle de acesso de usuários a aplicações web e móveis de forma rápida e fácil[cite: 438]. Ele suporta login com provedores de identidade social (como Apple, Facebook, Google, Amazon) e provedores de identidade SAML 2.0 ou OpenID Connect (OIDC)[cite: 438]. Cognito User Pools são diretórios de usuários, e Identity Pools concedem aos usuários acesso a outros serviços AWS[cite: 438, 439].",
    useCase: "Uma startup está construindo uma nova aplicação móvel e precisa de um sistema de autenticação de usuários. Eles usam Amazon Cognito User Pools para gerenciar o cadastro e login dos usuários com e-mail e senha, e também permitem login via Google. Cognito Identity Pools são usados para conceder aos usuários autenticados permissões para acessar recursos específicos no S3[cite: 439, 440]."
  },
  {
    id: 13,
    name: "AWS SDKs (ex: Boto3 para Python)",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://miro.medium.com/max/2000/1*MaaAD9hX2ar23qQ1yP3j7g.png", // Placeholder
    description: "Software Development Kits que simplificam o uso de serviços AWS em suas aplicações, fornecendo uma API para a linguagem de programação de sua escolha[cite: 677]. O Boto3 é o SDK da AWS para Python, permitindo que desenvolvedores Python criem, configurem e gerenciem serviços AWS como EC2 e S3[cite: 685].",
    useCase: "Um desenvolvedor precisa automatizar o processo de upload de arquivos para um bucket S3 a partir de uma aplicação Python. Ele utiliza o Boto3 para interagir com o S3, realizando o upload dos arquivos de forma programática[cite: 689, 690]."
  },
  {
    id: 14,
    name: "AWS Key Management Service (KMS)",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://logz.io/wp-content/uploads/2020/08/image1-1-1024x633.png", // Placeholder
    description: "Serviço gerenciado que facilita a criação e o controle das chaves de criptografia usadas para proteger seus dados[cite: 703]. Permite criar, importar e gerenciar chaves simétricas e assimétricas. Integrado com muitos serviços AWS para criptografia de dados em repouso e em trânsito[cite: 85, 704].",
    useCase: "Uma aplicação precisa criptografar dados sensíveis armazenados em um bucket S3. O AWS KMS pode ser usado para criar e gerenciar a chave de criptografia (CMK), e o S3 usa essa chave para criptografar os objetos do lado do servidor (SSE-KMS)[cite: 705, 706]."
  },
  {
    id: 15,
    name: "AWS Secrets Manager",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://d1.awsstatic.com/products/Secrets%20Manager/diagram_Secrets-Manager_how-it-works.c1493267c29d90035492836f6291a44a3f5e08b6.png", // Placeholder
    description: "Serviço que ajuda a proteger o acesso a suas aplicações, serviços e recursos de TI, permitindo que você rotacione, gerencie e recupere credenciais de banco de dados, chaves de API e outros segredos durante todo o ciclo de vida[cite: 89, 91].",
    useCase: "Uma aplicação precisa se conectar a um banco de dados RDS. Em vez de embutir as credenciais do banco de dados no código, elas são armazenadas no AWS Secrets Manager. A aplicação recupera as credenciais do Secrets Manager em tempo de execução, e o Secrets Manager pode ser configurado para rotacionar automaticamente essas credenciais[cite: 92, 708]."
  },
  {
    id: 16,
    name: "SSM Parameter Store (AWS Systems Manager Parameter Store)",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://miro.medium.com/max/1400/0*s8yZt5K7jC322m_R.png", // Placeholder
    description: "Fornece armazenamento seguro e hierárquico para gerenciamento de configuração e segredos[cite: 90]. Você pode armazenar dados como senhas, strings de banco de dados, IDs de AMI e códigos de licença como valores de parâmetro[cite: 90, 91].",
    useCase: "Uma função Lambda precisa de uma chave de API para interagir com um serviço de terceiros. Essa chave de API pode ser armazenada como um parâmetro seguro no SSM Parameter Store, e a função Lambda pode recuperá-la em tempo de execução, evitando que a chave seja codificada diretamente na função[cite: 90]."
  },
  {
    id: 17,
    name: "AWS CloudWatch",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://d1.awsstatic.com/product-marketing/CloudWatch/diagram_CloudWatch_how-it-works_Dashboard.c060cef091e02e97093f402f5680c8e741c34f3a.png", // Placeholder
    description: "Serviço de monitoramento e observabilidade para recursos AWS e aplicações executadas na AWS[cite: 40, 490, 499, 526]. Coleta e rastreia métricas, coleta e monitora arquivos de log, define alarmes e reage automaticamente a alterações em seus recursos AWS[cite: 527, 528].",
    useCase: "Um desenvolvedor usa o CloudWatch Logs para armazenar e analisar logs de uma função Lambda[cite: 527]. Eles configuram um Alarme do CloudWatch para notificar a equipe de operações se a taxa de erros da função Lambda exceder um determinado limite por um período específico[cite: 528, 529]."
  },
  {
    id: 18,
    name: "AWS X-Ray",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://miro.medium.com/max/1024/1*O-7K6mX2L9sC0A_bsfQ5rQ.png", // Placeholder
    description: "Ajuda desenvolvedores a analisar e depurar aplicações distribuídas de produção, como aquelas construídas usando uma arquitetura de microsserviços[cite: 41, 533]. Fornece uma visão ponta a ponta de como as requisições viajam por sua aplicação e mostra um mapa dos componentes subjacentes da sua aplicação[cite: 533, 534].",
    useCase: "Em uma aplicação de microsserviços, uma requisição de um usuário está demorando muito. O AWS X-Ray pode ser usado para rastrear a requisição através de todos os serviços envolvidos (API Gateway, Lambda, DynamoDB), identificar qual serviço está causando o gargalo de latência e ajudar a otimizar o desempenho[cite: 534, 536]."
  },
  {
    id: 19,
    name: "AWS Step Functions",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://d2908q01vomqb2.cloudfront.net/672889c643f20c87595ca47053a8b4c649e0910a/2023/02/08/Step-Functions-distributed-map-diagram-1024x536.png", // Placeholder
    description: "Serviço de orquestração serverless que permite que você combine funções AWS Lambda e outros serviços AWS para construir aplicações resilientes e orientadas a fluxo de trabalho[cite: 41, 538]. Você define seus fluxos de trabalho como máquinas de estado, onde cada estado representa uma tarefa ou uma lógica de ramificação[cite: 539]. Suporta políticas de retry robustas[cite: 538, 539].",
    useCase: "Um processo de processamento de pedidos de e-commerce envolve várias etapas: validar o pedido, verificar o estoque, processar o pagamento e enviar uma notificação. O AWS Step Functions pode orquestrar esse fluxo, chamando diferentes funções Lambda para cada etapa, gerenciando retries se uma etapa falhar (ex: falha temporária no processamento do pagamento) e garantindo que todo o processo seja concluído corretamente[cite: 540, 544]."
  },
  {
    id: 20,
    name: "Amazon DynamoDB",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*9Hll2j652O2c8cRSLPwwuw.png", // Placeholder
    description: "Serviço de banco de dados NoSQL chave-valor e de documentos totalmente gerenciado que oferece performance de milissegundos de um dígito em qualquer escala[cite: 356, 884]. É altamente escalável, flexível e oferece consistência eventual por padrão, com opção de leituras fortemente consistentes[cite: 885, 886, 919, 921]. Suporta índices secundários (GSI e LSI) [cite: 906] e modo de capacidade sob demanda[cite: 927].",
    useCase: "Uma aplicação de jogos online precisa armazenar perfis de jogadores, pontuações e dados de sessão com acesso de baixa latência e alta escalabilidade para milhões de usuários. Amazon DynamoDB é usado para armazenar esses dados, aproveitando sua flexibilidade de esquema e capacidade de escalar horizontalmente[cite: 885, 886, 890]."
  },
  {
    id: 21,
    name: "Amazon RDS (Relational Database Service)",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://www.mindmajix.com/blogs/images/what-is-amazon-rds-080820.png", // Placeholder
    description: "Facilita a configuração, operação e escalabilidade de um banco de dados relacional na nuvem AWS[cite: 875]. Automatiza tarefas administrativas demoradas, como provisionamento de hardware, configuração de banco de dados, patches e backups[cite: 954]. Suporta vários motores de banco de dados como MySQL, PostgreSQL, Oracle, SQL Server e MariaDB, além do Amazon Aurora[cite: 875, 954].",
    useCase: "Uma empresa precisa de um banco de dados relacional para sua aplicação de CRM, que requer transações ACID e a capacidade de executar consultas SQL complexas. Eles usam Amazon RDS com o motor PostgreSQL, e a AWS gerencia a infraestrutura, patches e backups do banco de dados[cite: 875, 879, 955]."
  },
  {
    id: 22,
    name: "Amazon Aurora",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://images.ctfassets.net/1khq4uysbvty/2P2QO9zHhz9z0wYfC93fR2/11067375805a6a627f92700a9e9c7203/serverless-aurora.png", // Placeholder
    description: "Banco de dados relacional compatível com MySQL e PostgreSQL construído para a nuvem, combinando a performance e disponibilidade de bancos de dados comerciais tradicionais com a simplicidade e economia de bancos de dados de código aberto[cite: 882, 875]. É totalmente gerenciado pelo Amazon RDS[cite: 876, 882].",
    useCase: "Uma aplicação financeira que exige alta performance, durabilidade e escalabilidade para seu banco de dados relacional, com compatibilidade com MySQL, pode usar o Amazon Aurora. Ele oferece melhor performance que o MySQL padrão no RDS e recursos como replicação entre AZs e auto-healing[cite: 875, 955]."
  },
  {
    id: 23,
    name: "Amazon ElastiCache",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*XJd_nB2QjizL8bwv53mE_g.png", // Placeholder
    description: "Serviço web que facilita a implantação, operação e escalabilidade de um cache na memória na nuvem[cite: 943, 959]. Melhora a performance de aplicações web, permitindo que você recupere informações de caches na memória rápidos e gerenciados, em vez de depender inteiramente de bancos de dados mais lentos baseados em disco[cite: 943, 960]. Suporta Redis e Memcached[cite: 943, 959].",
    useCase: "Um site de notícias com alto tráfego precisa exibir rapidamente as últimas manchetes e artigos populares. Amazon ElastiCache for Redis é usado para armazenar em cache esses dados frequentemente acessados, reduzindo a carga no banco de dados principal e diminuindo a latência de carregamento da página para os usuários[cite: 943, 946, 960]."
  },
  {
    id: 24,
    name: "AWS SAM (Serverless Application Model)",
    category: "development",
    categoryLabel: "Desenvolvimento com Serviços AWS",
    image: "https://miro.medium.com/max/1000/1*YH5QG1hwiO30L2rgX2Lh0A.png", // Placeholder
    description: "Framework de código aberto para construir aplicações serverless na AWS[cite: 599, 831]. Fornece uma sintaxe abreviada para expressar funções, APIs, bancos de dados e mapeamentos de origem de eventos[cite: 831]. Com apenas algumas linhas por recurso, você pode definir a aplicação que deseja e modelá-la usando YAML ou JSON[cite: 832]. Permite simulação local de Lambda e API Gateway[cite: 832, 833, 835].",
    useCase: "Um desenvolvedor está construindo uma API serverless usando API Gateway e Lambda. Ele usa o AWS SAM para definir a infraestrutura da aplicação em um template, testar as funções Lambda e os endpoints da API localmente usando `sam local invoke` e `sam local start-api`, e depois implantar a aplicação na AWS com `sam deploy`[cite: 833, 835, 853]."
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