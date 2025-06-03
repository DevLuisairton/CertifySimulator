// Dados dos serviços - Domínio 2: Security (26%) - Developer Associate
const awsServices = [
  {
    id: 1, // Mantendo o original para referência, você substituirá pelos seus 24 itens
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
    name: "Amazon Cognito", // Já existe no Domínio 1, mas com foco em segurança aqui
    category: "securityIdentity",
    categoryLabel: "Segurança e Identidade",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Gerencia identidades de usuários para suas aplicações, facilitando a autenticação (quem é você?) e autorização (o que você pode fazer?). Permite criar diretórios de usuários (User Pools) ou federar com provedores de identidade externos (Google, Facebook, SAML). Emite tokens (JWT) que suas aplicações podem usar para controlar o acesso a recursos backend e serviços AWS (via Identity Pools).",
    useCase: "Uma aplicação móvel precisa permitir que usuários se cadastrem com e-mail/senha ou façam login via Facebook. Amazon Cognito User Pools gerencia esses usuários. Após o login, Cognito Identity Pools pode fornecer credenciais AWS temporárias para que o app do usuário acesse, de forma segura, um bucket S3 específico para suas fotos."
  },
  {
    id: 13,
    name: "AWS SDKs (Software Development Kits)", // Já existe no Domínio 1
    category: "developerTools",
    categoryLabel: "Ferramentas de Desenvolvimento",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "São bibliotecas e ferramentas específicas para diversas linguagens de programação (como Python/Boto3, JavaScript, Java, .NET, Go) que simplificam a interação programática com os serviços da AWS. Eles abstraem a complexidade das chamadas de API diretas, gerenciando autenticação, serialização de dados e tratamento de erros, permitindo que os desenvolvedores integrem funcionalidades da AWS em suas aplicações de forma mais eficiente.",
    useCase: "Um desenvolvedor está construindo um script em Python para automatizar o backup diário de dados de instâncias EC2 para o S3. Ele utiliza o AWS SDK para Python (Boto3) para listar instâncias, criar snapshots EBS e copiar esses snapshots para um bucket S3, tudo de forma programática."
  },
  {
    id: 14,
    name: "AWS Key Management Service (KMS)", // Já existe no Domínio 1, mas com foco em segurança aqui
    category: "encryptionKeys",
    categoryLabel: "Criptografia e Chaves",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Serviço gerenciado para criar e controlar chaves de criptografia (Customer Master Keys - CMKs) usadas para proteger seus dados. Integrado com a maioria dos serviços AWS (S3, EBS, RDS) para criptografia do lado do servidor. Permite definir políticas de uso das chaves, auditar seu uso (via CloudTrail) e suporta rotação de chaves. Você pode usar chaves gerenciadas pela AWS, chaves gerenciadas por você ou importar suas próprias chaves.",
    useCase: "Para proteger dados sensíveis de clientes armazenados em um bucket S3, a criptografia do lado do servidor com chaves gerenciadas pelo KMS (SSE-KMS) é habilitada. O KMS controla o acesso à chave de criptografia, garantindo que apenas entidades autorizadas possam descriptografar os dados. A rotação automática da chave também pode ser habilitada para aumentar a segurança."
  },
  {
    id: 15,
    name: "AWS Secrets Manager", // Já existe no Domínio 1, mas com foco em segurança aqui
    category: "secretsManagement",
    categoryLabel: "Gerenciamento de Segredos",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Serviço para gerenciar, recuperar e rotacionar segredos como senhas de banco de dados, chaves de API e outros tokens de forma segura. Ajuda a evitar o 'hardcoding' de credenciais em aplicações. Integra-se com o AWS KMS para criptografar os segredos armazenados e suporta a rotação automática de credenciais para serviços como RDS, Redshift e DocumentDB, melhorando a postura de segurança.",
    useCase: "Uma aplicação necessita de credenciais para acessar um banco de dados Amazon RDS. Em vez de armazenar a senha no código ou em arquivos de configuração, ela é guardada no AWS Secrets Manager. A aplicação, em tempo de execução, recupera a senha do Secrets Manager. O serviço pode ser configurado para rotacionar automaticamente essa senha no banco de dados e no segredo armazenado, sem intervenção manual."
  },
  {
    id: 16,
    name: "SSM Parameter Store (AWS Systems Manager)", // Já existe no Domínio 1, mas com foco em segurança aqui
    category: "secretsManagement",
    categoryLabel: "Gerenciamento de Segredos",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Oferece armazenamento hierárquico e seguro para dados de configuração e segredos. Você pode armazenar strings de texto plano (Standard) ou dados criptografados (SecureString, usando AWS KMS). É útil para armazenar senhas, strings de conexão de banco de dados, chaves de licença e outros dados de configuração que suas aplicações podem referenciar. É uma boa opção para gerenciamento de configuração, com o Secrets Manager sendo mais especializado para segredos que exigem rotação e ciclo de vida complexo.",
    useCase: "Uma função Lambda precisa de uma chave de API para se comunicar com um serviço externo. Essa chave pode ser armazenada como um parâmetro do tipo 'SecureString' no SSM Parameter Store. A função Lambda, com as devidas permissões IAM, recupera e descriptografa essa chave em tempo de execução, evitando que ela seja exposta no código da função."
  },
  {
    id: 17,
    name: "Amazon CloudWatch", // Já existe no Domínio 1, mas pode ter foco em logs de segurança aqui
    category: "monitoringObservability",
    categoryLabel: "Monitoramento e Observabilidade",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Serviço de monitoramento e observabilidade abrangente para recursos e aplicações na AWS e on-premises. Coleta métricas de performance, logs de aplicação e sistema, e eventos. Permite visualizar dados através de dashboards, definir alarmes para notificar sobre condições específicas (ex: alta utilização de CPU, erros em Lambda) e automatizar ações em resposta a esses alarmes. É fundamental para entender a saúde e o desempenho das suas soluções. No contexto de segurança, CloudWatch Logs pode ser usado para armazenar logs de auditoria e ser integrado com KMS para criptografia de logs.",
    useCase: "Para uma aplicação web rodando em EC2, o CloudWatch coleta métricas como utilização de CPU, I/O de disco e tráfego de rede. Os logs da aplicação são enviados para o CloudWatch Logs. Alarmes são configurados para notificar a equipe de operações se a CPU ultrapassar 80% por 5 minutos ou se um número excessivo de erros 5xx for detectado nos logs, permitindo uma resposta rápida a problemas."
  },
  {
    id: 18,
    name: "AWS X-Ray", // Já existe no Domínio 1
    category: "monitoringObservability",
    categoryLabel: "Monitoramento e Observabilidade",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Serviço que ajuda desenvolvedores a analisar e depurar aplicações distribuídas, como aquelas construídas com arquiteturas de microsserviços. Ele rastreia as requisições à medida que elas viajam através dos vários componentes da sua aplicação (ex: API Gateway, Lambda, SQS, DynamoDB), fornecendo um mapa de serviço visual, identificando gargalos de performance, erros e anomalias. Essencial para entender o comportamento ponta a ponta de sistemas complexos.",
    useCase: "Uma requisição de usuário para uma aplicação de e-commerce passa por vários microsserviços: autenticação, catálogo, carrinho e pagamento. Se uma requisição estiver lenta, o AWS X-Ray pode mostrar o tempo gasto em cada serviço e em chamadas a bancos de dados, ajudando a identificar rapidamente qual componente está causando o atraso para que possa ser otimizado."
  },
  {
    id: 19,
    name: "AWS Step Functions", // Já existe no Domínio 1
    category: "orchestration",
    categoryLabel: "Orquestração de Workflows",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Serviço de orquestração serverless que permite coordenar múltiplos serviços AWS (como Lambda, SQS, SNS, Fargate) em fluxos de trabalho visuais e resilientes. Você define seus workflows como máquinas de estado, onde cada passo (estado) pode executar uma tarefa, tomar uma decisão, esperar ou ramificar a execução. Gerencia o estado, retries, tratamento de erros e paralelização, simplificando a construção de aplicações distribuídas complexas.",
    useCase: "Um processo de processamento de um pedido de e-commerce envolve várias etapas: validar o pedido (Lambda), verificar o estoque (Lambda), processar o pagamento (integração com API de terceiros), e enviar um e-mail de confirmação (SNS/Lambda). O AWS Step Functions pode orquestrar essa sequência, gerenciando a lógica de retentativas em caso de falha no pagamento e garantindo que todas as etapas sejam executadas na ordem correta e com tratamento de erros."
  },
  {
    id: 20,
    name: "Amazon DynamoDB", // Já existe no Domínio 1
    category: "databaseNoSQL",
    categoryLabel: "Banco de Dados NoSQL",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Banco de dados NoSQL chave-valor e de documentos totalmente gerenciado, projetado para performance de milissegundos de um dígito em qualquer escala. Oferece alta disponibilidade, durabilidade e escalabilidade massiva. Possui esquema flexível, ideal para aplicações com requisitos de dados que evoluem rapidamente. Suporta consistência eventual (padrão) e leituras fortemente consistentes. Recursos importantes incluem Índices Secundários Globais (GSI) e Locais (LSI) para consultas flexíveis, e modo de capacidade provisionada ou sob demanda (On-Demand).",
    useCase: "Uma aplicação de rede social precisa armazenar perfis de usuários, posts e listas de amigos, com necessidade de leituras e escritas rápidas para milhões de usuários ativos. O Amazon DynamoDB é usado devido à sua capacidade de escalar horizontalmente, baixa latência e flexibilidade para armazenar diferentes tipos de dados de perfil e atividade."
  },
  {
    id: 21,
    name: "Amazon RDS (Relational Database Service)", // Já existe no Domínio 1
    category: "databaseRelational",
    categoryLabel: "Banco de Dados Relacional",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Serviço gerenciado que simplifica a configuração, operação e escalabilidade de bancos de dados relacionais na nuvem. Automatiza tarefas como provisionamento de hardware, patches de software, backups e recuperação. Suporta diversos motores de banco de dados populares como MySQL, PostgreSQL, MariaDB, Oracle e SQL Server, além do Amazon Aurora, que é otimizado para a nuvem.",
    useCase: "Uma empresa está migrando sua aplicação de contabilidade existente, que depende de um banco de dados MySQL com esquema relacional complexo e transações ACID, para a nuvem. Eles escolhem o Amazon RDS for MySQL para reduzir a carga administrativa de gerenciamento do banco de dados, enquanto mantêm a compatibilidade com sua aplicação."
  },
  {
    id: 22,
    name: "Amazon Aurora", // Já existe no Domínio 1
    category: "databaseRelational",
    categoryLabel: "Banco de Dados Relacional",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Banco de dados relacional de alta performance, totalmente gerenciado e compatível com MySQL e PostgreSQL, projetado especificamente para a nuvem AWS. Oferece maior throughput e disponibilidade do que as versões padrão desses motores no RDS, com recursos como armazenamento auto-escalável, replicação entre múltiplas AZs, e failover rápido. Integra-se com outros serviços AWS, como Lambda e S3.",
    useCase: "Uma plataforma de e-commerce de grande porte com picos de tráfego sazonais precisa de um banco de dados relacional que ofereça performance superior e escalabilidade para seu catálogo de produtos e transações de pedidos. Eles optam pelo Amazon Aurora (compatível com MySQL) para obter melhor desempenho, resiliência e capacidade de lidar com cargas de trabalho intensas."
  },
  {
    id: 23,
    name: "Amazon ElastiCache", // Já existe no Domínio 1
    category: "caching",
    categoryLabel: "Caching em Memória",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Serviço de caching na memória totalmente gerenciado que facilita a implantação, operação e escalabilidade de caches distribuídos. Suporta dois motores populares: Redis (armazenamento de dados na memória rico em recursos, com persistência opcional, replicação e alta disponibilidade) e Memcached (cache de objetos na memória simples e de alta performance). Usado para acelerar aplicações, reduzindo a latência de acesso a dados e aliviando a carga sobre bancos de dados.",
    useCase: "Um site de notícias com milhões de visualizações diárias armazena os artigos mais lidos e os comentários recentes em um cluster Amazon ElastiCache for Redis. Isso permite que as páginas carreguem muito mais rápido para os usuários, pois os dados são recuperados da memória em vez de consultar o banco de dados principal a cada requisição, melhorando significativamente a experiência do usuário e a escalabilidade do site."
  },
  {
    id: 24,
    name: "AWS SAM (Serverless Application Model)", // Já existe no Domínio 1
    category: "developerTools",
    categoryLabel: "Ferramentas de Desenvolvimento",
    image: "/assets/img/AWS-Certified-Developer-Associate.png",
    description: "Framework de infraestrutura como código (IaC) de código aberto, construído sobre o AWS CloudFormation, especificamente projetado para simplificar o desenvolvimento e a implantação de aplicações serverless. Usa uma sintaxe YAML ou JSON concisa para definir funções Lambda, APIs do API Gateway, tabelas DynamoDB e outras fontes de eventos. A AWS SAM CLI permite construir, testar localmente (simulando Lambda e API Gateway) e implantar aplicações serverless de forma eficiente.",
    useCase: "Um desenvolvedor está construindo um backend serverless para uma aplicação, consistindo em várias funções Lambda e um API Gateway. Ele utiliza o AWS SAM para definir todos esses recursos em um arquivo `template.yaml`. Com a SAM CLI, ele pode testar as funções e a API localmente antes de usar o comando `sam deploy` para provisionar e atualizar a aplicação na nuvem AWS de forma automatizada."
  },
  // --- NOVOS ITENS DO DOMÍNIO 2 (SEGURANÇA) ---
  {
    id: 25,
    name: "AWS IAM (Identity and Access Management)",
    category: "securityIdentityCore",
    categoryLabel: "IAM e Acesso Central",
    image: "/assets/img/AWS-Certified-Developer-Associate.png", // Placeholder
    description: "Serviço fundamental da AWS para gerenciar o acesso aos seus recursos de forma segura. Permite criar e gerenciar usuários, grupos de usuários e 'roles' (funções) com permissões específicas. As permissões são definidas através de 'políticas' JSON, que determinam quais ações podem ser realizadas em quais recursos. O IAM é crucial para implementar o princípio do menor privilégio.",
    useCase: "Uma empresa cria um usuário IAM para um novo desenvolvedor, adiciona-o a um grupo 'Desenvolvedores' e anexa uma política a esse grupo que concede permissões para criar e gerenciar funções Lambda e tabelas DynamoDB, mas não para excluir instâncias EC2 de produção, seguindo o princípio do menor privilégio."
  },
  {
    id: 26,
    name: "AWS STS (Security Token Service)",
    category: "securityIdentityCore",
    categoryLabel: "IAM e Acesso Central",
    image: "/assets/img/AWS-Certified-Developer-Associate.png", // Placeholder
    description: "Serviço web global que permite solicitar credenciais temporárias com privilégios limitados para usuários IAM ou para usuários que você autentica (identidades federadas). Essas credenciais temporárias (compostas por um ID de chave de acesso, uma chave de acesso secreta e um token de sessão) são válidas por um período definido, aumentando a segurança ao evitar o uso de chaves de acesso de longa duração.",
    useCase: "Uma aplicação rodando em uma instância EC2 precisa acessar um bucket S3 para ler arquivos. Em vez de armazenar credenciais IAM de longa duração na instância, uma IAM Role é associada à instância. A aplicação usa o SDK da AWS para 'assumir' essa role via STS, obtendo credenciais temporárias para acessar o S3 de forma segura e com as permissões definidas na role."
  },
  {
    id: 27,
    name: "Políticas de Acesso (Baseadas em Identidade vs. Recursos)",
    category: "iamConcepts",
    categoryLabel: "Conceitos do IAM",
    image: "/assets/img/AWS-Certified-Developer-Associate.png", // Placeholder
    description: "Políticas IAM definem permissões. Políticas baseadas em identidade são anexadas a usuários, grupos ou roles IAM e especificam o que essa identidade pode fazer. Políticas baseadas em recursos são anexadas diretamente a recursos (ex: políticas de bucket S3, políticas de tópico SNS) e especificam quem (quais principais) tem acesso a esse recurso e sob quais condições. Ambas interagem para determinar o acesso final.",
    useCase: "Para permitir que uma função Lambda leia de um bucket S3: uma política baseada em identidade pode ser anexada à role da Lambda permitindo `s3:GetObject`. Alternativamente ou complementarmente, uma política baseada em recurso (política de bucket) no S3 pode permitir explicitamente que a role da Lambda realize a ação `s3:GetObject` no bucket."
  },
  {
    id: 28,
    name: "Tokens e Protocolos de Federação (JWT, OAuth 2.0, OIDC)",
    category: "authenticationAuthorization",
    categoryLabel: "Autenticação e Autorização",
    image: "/assets/img/AWS-Certified-Developer-Associate.png", // Placeholder
    description: "Tokens são credenciais digitais usadas para autenticação e autorização. JWT (JSON Web Tokens) são um padrão compacto para transmitir informações de forma segura. OAuth 2.0 é um framework de autorização que permite que aplicações de terceiros acessem recursos de um usuário sem expor suas credenciais. OIDC (OpenID Connect) é uma camada de identidade construída sobre o OAuth 2.0, permitindo que clientes verifiquem a identidade de um usuário final com base na autenticação realizada por um servidor de autorização.",
    useCase: "Uma aplicação web permite 'Login com Google' usando OIDC. O Google (provedor de identidade) autentica o usuário e retorna um ID Token (JWT) para a aplicação. A aplicação valida o token e pode usá-lo para criar uma sessão local ou para obter credenciais AWS temporárias via Amazon Cognito Identity Pools para acessar recursos AWS."
  },
  {
    id: 29,
    name: "AWS Managed Policies vs. Customer Managed Policies",
    category: "iamConcepts",
    categoryLabel: "Conceitos do IAM",
    image: "/assets/img/AWS-Certified-Developer-Associate.png", // Placeholder
    description: "AWS Managed Policies são políticas de permissão predefinidas e mantidas pela AWS, cobrindo casos de uso comuns (ex: `AmazonS3ReadOnlyAccess`). Elas simplificam a atribuição de permissões. Customer Managed Policies são políticas criadas e gerenciadas por você na sua conta AWS, oferecendo controle granular e personalização total para atender requisitos específicos de segurança, seguindo o princípio do menor privilégio.",
    useCase: "Para um administrador de banco de dados, a AWS Managed Policy `AmazonRDSFullAccess` pode ser um bom começo. No entanto, para um analista de dados que só precisa executar consultas `SELECT` em tabelas específicas, uma Customer Managed Policy seria criada para conceder apenas essas permissões mínimas necessárias, em vez de acesso total ao RDS."
  },
  {
    id: 30,
    name: "Acesso Programático e RBAC (Role-Based Access Control)",
    category: "iamConcepts",
    categoryLabel: "Conceitos do IAM",
    image: "/assets/img/AWS-Certified-Developer-Associate.png", // Placeholder
    description: "Acesso Programático permite que aplicações, scripts e ferramentas de CLI interajam com serviços AWS usando chaves de acesso (ID e chave secreta) ou roles IAM. RBAC é um modelo de controle de acesso onde permissões são atribuídas a 'roles' (funções) e os usuários ou serviços assumem essas roles para obter as permissões necessárias para suas tarefas, em vez de terem permissões diretamente atribuídas. Isso simplifica o gerenciamento de permissões e promove o menor privilégio.",
    useCase: "Em uma empresa, são definidas roles como 'DesenvolvedorAppX', 'AuditorDeSeguranca', 'AdministradorDeBancoDeDados'. Cada role tem um conjunto específico de permissões. Desenvolvedores assumem a role 'DesenvolvedorAppX' para implantar suas aplicações. Scripts de automação para auditoria assumem a role 'AuditorDeSeguranca' para ler logs e configurações, utilizando acesso programático com as credenciais temporárias da role."
  },
  {
    id: 31,
    name: "Criptografia em Repouso (Data at Rest)",
    category: "encryption",
    categoryLabel: "Criptografia",
    image: "/assets/img/AWS-Certified-Developer-Associate.png", // Placeholder
    description: "Protege os dados armazenados fisicamente em mídias como discos (EBS), armazenamento de objetos (S3) ou bancos de dados (RDS, DynamoDB). Envolve a cifragem dos dados antes de serem gravados e a decifragem quando são lidos. Serviços AWS frequentemente se integram com o AWS KMS para gerenciar as chaves de criptografia usadas para proteger os dados em repouso, ajudando a prevenir o acesso não autorizado aos dados mesmo que o meio físico seja comprometido.",
    useCase: "Ao criar um novo volume Amazon EBS para uma instância EC2, a opção de criptografia pode ser habilitada. O EBS então usa uma chave do AWS KMS para criptografar todos os dados gravados no volume. Se alguém obtivesse acesso físico ao disco subjacente, os dados estariam ilegíveis sem a chave de decriptografia."
  },
  {
    id: 32,
    name: "Criptografia em Trânsito (Data in Transit)",
    category: "encryption",
    categoryLabel: "Criptografia",
    image: "/assets/img/AWS-Certified-Developer-Associate.png", // Placeholder
    description: "Protege os dados enquanto são transferidos entre sistemas, como entre sua aplicação e um serviço AWS, ou entre serviços AWS. Comumente implementada usando protocolos como TLS/SSL (HTTPS) para criptografar a comunicação pela rede, prevenindo que os dados sejam interceptados ou alterados por terceiros durante a transmissão. AWS Certificate Manager (ACM) pode ser usado para provisionar e gerenciar certificados SSL/TLS.",
    useCase: "Quando um usuário acessa um site hospedado na AWS e envia informações de login, a conexão entre o navegador do usuário e o servidor web (ex: EC2 atrás de um Application Load Balancer) deve ser protegida usando HTTPS. O Application Load Balancer pode usar um certificado SSL/TLS do AWS Certificate Manager (ACM) para criptografar esses dados em trânsito."
  },
  {
    id: 33,
    name: "AWS CloudTrail (para Auditoria de Segurança)",
    category: "auditingLogging",
    categoryLabel: "Auditoria e Logs de Segurança",
    image: "/assets/img/AWS-Certified-Developer-Associate.png", // Placeholder
    description: "Serviço que registra todas as chamadas de API feitas na sua conta AWS, incluindo chamadas feitas pelo console, SDKs, CLI e outros serviços AWS. Esses registros (logs do CloudTrail) fornecem um histórico detalhado de quem fez o quê, quando, de onde e em quais recursos. É essencial para auditoria de segurança, análise de conformidade, solução de problemas operacionais e rastreamento de atividades não autorizadas ou anômalas. Pode ser usado para auditar o uso de chaves KMS, por exemplo.",
    useCase: "Uma empresa precisa monitorar quem está acessando ou modificando chaves criptográficas importantes no AWS KMS. Os logs do AWS CloudTrail são configurados para capturar todas as chamadas de API para o KMS (ex: `CreateKey`, `Encrypt`, `Decrypt`, `DisableKey`). Esses logs podem ser analisados para detectar atividades suspeitas ou para fins de auditoria de conformidade."
  },
  {
    id: 34,
    name: "AWS Certificate Manager (ACM)",
    category: "encryption",
    categoryLabel: "Criptografia",
    image: "/assets/img/AWS-Certified-Developer-Associate.png", // Placeholder
    description: "Serviço que simplifica o provisionamento, gerenciamento e implantação de certificados SSL/TLS públicos e privados para uso com serviços AWS e seus recursos internos conectados. Automatiza a criação e a renovação de certificados, eliminando processos manuais propensos a erros. Integra-se facilmente com serviços como Elastic Load Balancing (ELB) e Amazon CloudFront para habilitar HTTPS.",
    useCase: "Para proteger um site hospedado em instâncias EC2 atrás de um Application Load Balancer (ALB), um certificado SSL/TLS público é provisionado através do ACM para o domínio do site. O ACM gerencia a renovação automática desse certificado, e ele é associado ao listener HTTPS do ALB, garantindo que todo o tráfego entre os usuários e o site seja criptografado."
  },
  {
    id: 35,
    name: "AWS CloudHSM",
    category: "encryptionKeys",
    categoryLabel: "Criptografia e Chaves",
    image: "/assets/img/AWS-Certified-Developer-Associate.png", // Placeholder
    description: "Serviço de nuvem que fornece Módulos de Segurança de Hardware (HSMs) dedicados, permitindo que você gere e use suas próprias chaves de criptografia na nuvem AWS com validação FIPS 140-2 Nível 3. Oferece controle total sobre as chaves e operações criptográficas, sendo ideal para organizações com requisitos rigorosos de conformidade ou que precisam proteger chaves de alta sensibilidade. É mais complexo de gerenciar que o AWS KMS.",
    useCase: "Uma instituição financeira precisa armazenar e gerenciar chaves criptográficas para suas operações de pagamento em um ambiente que atenda a regulamentações estritas de segurança e que exija que eles tenham controle exclusivo das chaves em um HSM dedicado. Eles utilizam o AWS CloudHSM para criar um cluster de HSMs onde podem gerar, armazenar e usar suas chaves com alto nível de segurança e conformidade."
  },
  {
    id: 36,
    name: "Classificação de Dados e Sanitização (PII, PHI)",
    category: "dataProtection",
    categoryLabel: "Proteção de Dados Sensíveis",
    image: "/assets/img/AWS-Certified-Developer-Associate.png", // Placeholder
    description: "Classificação de dados envolve identificar e categorizar informações com base em sua sensibilidade, como Informações Pessoais Identificáveis (PII) ou Informações de Saúde Protegidas (PHI). Sanitização de dados é o processo de modificar ou remover dados sensíveis de um conjunto de dados antes de seu uso ou armazenamento, para proteger a privacidade e reduzir riscos. Técnicas incluem mascaramento, tokenização, pseudonimização ou remoção. Ambos são cruciais para conformidade com regulamentações como GDPR e HIPAA.",
    useCase: "Uma empresa de saúde coleta dados de pacientes (PHI). Antes de usar esses dados para análise ou em ambientes de teste, eles classificam quais campos contêm PHI (ex: nome, CPF, diagnóstico). Em seguida, aplicam técnicas de sanitização, como mascarar os últimos dígitos do CPF e substituir nomes por IDs anônimos, para proteger a privacidade dos pacientes enquanto ainda permitem que os dados sejam úteis para os propósitos definidos."
  },
  {
    id: 37,
    name: "Integração KMS com Secrets Manager para Criptografia de Segredos",
    category: "secretsManagement",
    categoryLabel: "Gerenciamento de Segredos",
    image: "/assets/img/AWS-Certified-Developer-Associate.png", // Placeholder
    description: "O AWS Secrets Manager pode ser configurado para usar uma chave gerenciada pelo cliente (CMK) do AWS KMS para fornecer uma camada adicional de criptografia para os segredos que ele armazena. Por padrão, o Secrets Manager criptografa segredos com uma chave gerenciada pela AWS. Usar uma CMK do KMS dá a você mais controle sobre a chave de criptografia, incluindo sua política de acesso e rotação, e permite auditar seu uso via CloudTrail. Isso é importante para atender a requisitos de conformidade e segurança mais rigorosos.",
    useCase: "Uma organização precisa armazenar credenciais de banco de dados altamente sensíveis no AWS Secrets Manager. Para ter controle total sobre a criptografia desses segredos, eles configuram o Secrets Manager para usar uma Customer Managed Key (CMK) específica do AWS KMS. As políticas dessa CMK são definidas para restringir quem pode usar a chave para descriptografar os segredos, adicionando uma camada extra de proteção e controle."
  },
  {
    id: 38,
    name: "Criptografia de Logs do CloudWatch com KMS",
    category: "auditingLogging",
    categoryLabel: "Auditoria e Logs de Segurança",
    image: "/assets/img/AWS-Certified-Developer-Associate.png", // Placeholder
    description: "Os logs armazenados no Amazon CloudWatch Logs podem ser criptografados em repouso para proteger informações sensíveis que possam estar contidas neles. Essa criptografia é realizada usando chaves do AWS Key Management Service (KMS). Você pode usar uma chave gerenciada pela AWS para CloudWatch Logs ou especificar uma chave gerenciada pelo cliente (CMK) do KMS. Isso garante que os dados de log sejam protegidos e ajuda a atender a requisitos de conformidade.",
    useCase: "Uma aplicação registra informações detalhadas sobre transações financeiras nos logs do CloudWatch. Para proteger esses dados sensíveis, o grupo de logs do CloudWatch é configurado para usar uma chave CMK do AWS KMS para criptografia. Isso garante que, mesmo que alguém obtenha acesso não autorizado aos arquivos de log, os dados estarão criptografados e ilegíveis sem as permissões adequadas para usar a chave KMS."
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