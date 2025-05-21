const originalQuestions = [
  {
    id: 1,
    text: "Você é responsável por otimizar o processo de implantação de uma aplicação utilizando o AWS CodePipeline. Atualmente, o processo de implantação falha ocasionalmente devido a testes de integração que não conseguem acessar recursos dependentes. Qual das seguintes abordagens é a mais apropriada para resolver este problema?",
    options: [
      "Modificar os scripts de teste para utilizar valores mockados ao invés de acessar os recursos reais.",
      "Utilizar o Amazon CloudWatch para monitorar as implantações e identificar a raiz do problema antes de falhar.",
      "Configurar o AWS CodePipeline para incluir uma etapa de aprovação manual antes de executar os testes de integração.",
      "Adicionar uma etapa no CodePipeline para configurar as políticas de IAM, garantindo que os testes de integração tenham as permissões corretas para acessar os recursos."
    ],
    correctAnswer: 3,
    explanation: "Correta. Configurando as políticas de IAM corretamente, você garante que os serviços e funções envolvidos nos testes de integração tenham acesso adequado aos recursos necessários, reduzindo assim as falhas relacionadas a permissões."
  },
  {
    id: 2,
    text: "Você está projetando uma solução para um aplicativo que terá uma carga de trabalho de leitura e gravação intensa. Decidiu usar o Amazon EBS para garantir a durabilidade e o desempenho necessários. Qual tipo de volume EBS você deve escolher para otimizar o desempenho de acesso ao disco?",
    options: [
      "EBS volumes magnéticos standard",
      "EBS Provisioned IOPS SSD (io1/io2)",
      "EBS Throughput Optimized HDD (st1)",
      "EBS General Purpose SSD (gp2/gp3)"
    ],
    correctAnswer: 1,
    explanation: "Correta. Os volumes Provisioned IOPS SSD (io1/io2) são ideais para cargas de trabalho intensivas de I/O, como bancos de dados de grande porte, que necessitam de mais de 16.000 IOPS ou 250 MiB/s de taxa de transferência. Este tipo de volume permite especificar uma taxa de IOPS garantida, e pode ser ajustado conforme a necessidade."
  },
  {
    id: 3,
    text: "Você está projetando uma aplicação que requer um armazenamento de sessão altamente disponível e rápido. Decidiu usar o Amazon ElastiCache para melhorar a performance. Neste contexto, qual das seguintes afirmações é verdadeira sobre a escolha entre Redis e Memcached no Amazon ElastiCache?",
    options: [
      "Memcached suporta transações, ao contrário do Redis.",
      "Redis suporta estruturas de dados complexas como lists e hashmaps, enquanto Memcached não.",
      "Redis não pode ser usado em um ambiente com múltiplas zonas de disponibilidade.",
      "Memcached fornece melhores funcionalidades de persistência de dados do que Redis."
    ],
    correctAnswer: 1,
    explanation: "Correta. Redis oferece suporte para estruturas de dados mais complexas, como strings, hashes, lists, sets, e sorted sets, o que pode ser vantajoso dependendo das necessidades de aplicação."
  },
  {
    id: 4,
    text: "Você está desenvolvendo uma aplicação na AWS e precisa garantir que os desenvolvedores tenham acesso somente leitura a todos os buckets S3, mas com permissões de escrita para um bucket específico. Qual é a melhor maneira de configurar as políticas IAM para atender a este requisito?",
    options: [
      "Criar uma policy de negação para escrita em todos os buckets, exceto no bucket específico, ao mesmo tempo que concede permissões de leitura geral.",
      "Utilizar a política AWS managed 'AmazonS3ReadOnlyAccess' para todos os desenvolvedores e modificar as permissões do bucket específico manualmente para permitir escrita.",
      "Conceder permissões de escrita a todos os buckets S3 e confiar na boa prática dos desenvolvedores para não modificar os outros buckets.",
      "Criar uma política IAM com permissões somente leitura para todos os buckets S3 e uma política separada com permissões de escrita para o bucket específico."
    ],
    correctAnswer: 3,
    explanation: "Correta. Esta abordagem é recomendada para conceder acesso granular e específico. Ao criar uma política de somente leitura aplicável a todos os buckets e uma política de escrita apenas para o bucket necessário, você atende ao requisito sem conceder permissões excessivas."
  },
  {
    id: 5,
    text: "Ao usar o AWS Step Functions, qual é a maneira mais eficiente de lidar com erros transientes em um estado de tarefa específico, garantindo a resiliência e excelente experiência do usuário?",
    options: [
      "Desativar a máquina de estados durante a ocorrência de erro e notificar o usuário manualmente.",
      "Utilizar o campo 'Retry' para definir políticas de retentativa específicas para erros transitórios.",
      "Implementar um loop infinito que tenta a tarefa até que seja bem-sucedida.",
      "Enviar a tarefa para uma fila SQS para tentativas posteriores."
    ],
    correctAnswer: 1,
    explanation: "Correta. A utilização de políticas de retentativa configuradas através do campo 'Retry' é uma prática recomendada para lidar com falhas transitórias, possibilitando a automatização do processo de recuperação de erro."
  },
  {
    id: 6,
    text: "Você está desenvolvendo uma aplicação GraphQL utilizando AWS AppSync e precisa garantir que apenas usuários autenticados possam acessar os dados. Qual das seguintes opções é o método recomendado para configurar a segurança em AWS AppSync para este cenário?",
    options: [
      "Usar assinaturas IP para restringir quem pode acessar a API.",
      "Configurar AWS IAM roles para autenticar e autorizar acessos à API.",
      "Habilitar o controle de acesso baseado em função no seu banco de dados, independentemente de AppSync.",
      "Utilizar chaves de API como método de autenticação e autorização."
    ],
    correctAnswer: 1,
    explanation: "Correta. AWS IAM roles são uma maneira eficaz de controlar quem pode acessar sua API AppSync, fornecendo autenticação e autorização seguras."
  },
  {
    id: 7,
    text: "Você está trabalhando como desenvolvedor AWS e precisa criar uma infraestrutura altamente disponível e resiliente usando o AWS CloudFormation. Qual das seguintes opções é a maneira mais eficaz de configurar uma política de atualização automatizada para uma Auto Scaling group que minimiza a interrupção durante atualizações?",
    options: [
      "Utilizar uma política de atualização que emprega Rolling updates com um Health Check substituindo instâncias em lotes.",
      "Associar a Auto Scaling group à uma política de substituição incondicional.",
      "Configurar as instâncias para serem terminadas e recriadas todas ao mesmo tempo durante a atualização.",
      "Ignorar as políticas de atualização e manualmente substituir instâncias durante uma janela de manutenção planejada."
    ],
    correctAnswer: 0,
    explanation: "Correta. As atualizações do tipo Rolling com Health Check permitem a substituição incremental de instâncias, reduzindo a interrupção do serviço verificando a saúde das novas instâncias antes de prosseguir para o próximo lote."
  },
  {
    id: 8,
    text: "Você está utilizando o Amazon SNS para enviar notificações de alerta de sistema. Por motivos de segurança, você precisa garantir que estas notificações sejam recebidas apenas por sistemas autorizados dentro de sua organização. Qual das seguintes abordagens seria a mais adequada para atingir este objetivo?",
    options: [
      "Criptografar as mensagens usando uma chave de criptografia de terceiros antes de enviá-las ao tópico SNS.",
      "Usar o AWS IAM para restringir quais usuários e sistemas podem publicar e se inscrever nos tópicos do SNS.",
      "Habilitar o VPC Endpoint para o SNS e restringir o acesso com base no VPC de origem.",
      "Configurar o Amazon SNS para enviar mensagens apenas durante um horário específico do dia."
    ],
    correctAnswer: 1,
    explanation: "Correta. Utilizando o AWS IAM (Identity and Access Management), você pode definir políticas específicas que controlam quem pode publicar no tópico SNS e quem pode se inscrever, garantindo que apenas sistemas autorizados recebam as notificações."
  },
  {
    id: 9,
    text: "Um desenvolvedor está trabalhando em uma aplicação que precisa lidar com um alto volume de transações escritas e consultas de leitura. Para maximizar a eficiência e a performance, o desenvolvedor está considerando usar Amazon Aurora. Qual das seguintes características do Amazon Aurora ajudaria especificamente a melhorar a performance e a escalabilidade da aplicação?",
    options: [
      "Replicação síncrona entre várias zonas de disponibilidade",
      "Armazenamento de instantâneos de banco de dados em S3",
      "Read replicas que permitem escalabilidade de leitura",
      "Uso de chaves SSH para criptografia de dados em repouso"
    ],
    correctAnswer: 2,
    explanation: "Correta. As read replicas do Amazon Aurora permitem escalar horizontalmente as operações de leitura ao distribuir as consultas de leitura entre várias instâncias de replica, melhorando assim a performance e a escalabilidade da aplicação."
  },
  {
    id: 10,
    text: "Você está utilizando o AWS AppConfig para gerenciar a configuração de uma aplicação crítica, permitindo atualizações de configuração em tempo real sem afetar o desempenho. Qual das seguintes práticas asseguraria a introdução mais segura de uma nova configuração?",
    options: [
      "Atualizar a configuração diretamente no ambiente de produção para garantir que ela seja implementada imediatamente.",
      "Utilizar a funcionalidade de validação de esquema do AppConfig para assegurar que a configuração está correta antes de ser implementada.",
      "Implementar as mudanças de configuração manualmente para evitar o uso de automações que poderiam falhar.",
      "Omitir a etapa de revisão da nova configuração para acelerar o processo de deployment."
    ],
    correctAnswer: 1,
    explanation: "Correta. A funcionalidade de validação de esquema do AppConfig ajuda a verificar se as configurações estão adequadas aos requisitos definidos antes de serem lançadas, reduzindo o risco de erros."
  },
  {
    id: 11,
    text: "Você está desenvolvendo uma aplicação na AWS que precisa acessar segredos armazenados no AWS Secrets Manager para se conectar a uma base de dados. Qual é a prática recomendada para gerenciar o acesso aos segredos de forma segura e eficiente?",
    options: [
      "Configurar o Secrets Manager para enviar segredos diretamente para o código da aplicação sem nenhuma política de acesso.",
      "Utilizar as políticas do IAM para conceder acesso ao Secrets Manager apenas para as roles específicas que precisam dos segredos.",
      "Habilitar o acesso direto ao Secrets Manager de qualquer instância EC2 sem restrições.",
      "Armazenar segredos em variáveis de ambiente para fácil acesso pelas aplicações."
    ],
    correctAnswer: 1,
    explanation: "Correta. Utilizar políticas do IAM para controlar o acesso ao Secrets Manager é a recomendação da AWS. Isso garante que apenas as entidades autorizadas (como funções do IAM) possam recuperar os segredos, respeitando o princípio de menor privilégio."
  },
  {
    id: 12,
    text: "Você está desenvolvendo uma aplicação que utiliza o Amazon Kinesis para processar grandes volumes de dados em streaming. A aplicação precisa consumir e processar os dados de forma eficiente, garantindo também que os dados não sejam lidos mais de uma vez pelo mesmo consumidor. Qual das seguintes abordagens você deve utilizar para alcançar esse objetivo?",
    options: [
      "Implementar uma fila SQS para armazenar temporariamente os dados antes de processá-los com instâncias EC2.",
      "Utilizar o AWS Lambda para processar os dados diretamente do Kinesis Data Streams, com uma função para cada mensagem.",
      "Utilizar um Amazon Kinesis Data Firehose para capturar e transformar os dados antes de armazená-los.",
      "Empregar o Amazon Kinesis Data Streams com um grupo de consumidores para o processamento."
    ],
    correctAnswer: 3,
    explanation: "Correta. Empregar o Amazon Kinesis Data Streams com um grupo de consumidores permite que múltiplos consumidores processam os dados simultaneamente sem ler os dados mais de uma vez. Isso usa o conceito de Sharding para dividir os dados e o Enhanced Fan-Out para performace de leitura."
  },
  {
    id: 13,
    text: "Uma empresa deseja otimizar o uso do AWS Lambda para processar arquivos carregados em um bucket do S3 de forma eficiente e segura. Qual deve ser a estratégia recomendada para minimizar o tempo de inatividade e melhorar o desempenho sem comprometer a segurança?",
    options: [
      "Configurar uma função Lambda para ser acionada por eventos de 'ObjectCreated' do S3.",
      "Habilitar o AWS Shield para todas as funções Lambda para garantir proteção contra ataques DDoS.",
      "Aumentar o número de instâncias EC2 para processar os arquivos de forma paralela.",
      "Utilizar uma política de segurança IAM menos restritiva para permitir que a função Lambda execute com mais rapidez."
    ],
    correctAnswer: 0,
    explanation: "Correta. Configurar triggers baseados em eventos 'ObjectCreated' do S3 para funções Lambda é uma abordagem eficaz para processar automaticamente arquivos à medida que são carregados, utilizando a escalabilidade e a eficiência do AWS Lambda."
  },
  {
    id: 14,
    text: "Ao utilizar o AWS CodeStar para gerenciar um projeto de desenvolvimento, qual das seguintes ações é essencial para garantir a segurança na distribuição dos acessos ao repositório do código-fonte?",
    options: [
      "Configurar alertas de segurança para qualquer acesso não autorizado aos repositórios do projeto.",
      "Utilizar chaves SSH públicas e privadas para cada commit no repositório.",
      "Habilitar o MFA (Multi-Factor Authentication) para o acesso ao console da AWS.",
      "Configurar políticas de IAM inline específicas para cada membro da equipe."
    ],
    correctAnswer: 3,
    explanation: "Correta. Configurar políticas de IAM (Identity and Access Management) especificamente para cada membro da equipe dentro do AWS CodeStar ajuda a controlar os níveis de acesso de forma granular, garantindo que cada usuário tenha apenas as permissões necessárias para suas tarefas."
  },
  {
    id: 15,
    text: "Um desenvolvedor está planejando utilizar o Amazon DynamoDB para armazenar dados de um aplicativo de comércio eletrônico, onde espera-se alta demanda durante lançamentos de novos produtos. Qual das seguintes opções é a melhor prática para assegurar o desempenho do banco de dados durante esses picos de carga?",
    options: [
      "Utilizar uma tabela do DynamoDB com um índice secundário global para cada atributo de item.",
      "Aumentar só a capacidade de leitura da tabela antes dos lançamentos de novos produtos.",
      "Manter uma capacidade fixa na tabela independente da previsão de carga.",
      "Configurar auto scaling para ajustar dinamicamente a capacidade de leitura e escrita da tabela conforme necessário."
    ],
    correctAnswer: 3,
    explanation: "Correta. O auto scaling ajuda a ajustar automaticamente as unidades de leitura e escrita com base no tráfego real, permitindo que o banco de dados lide eficientemente com picos de carga."
  },
  {
    id: 16,
    text: "Um desenvolvedor está configurando um Elastic Load Balancer (ELB) para distribuir o tráfego de entrada entre três diferentes instâncias EC2, que hospedam um aplicativo web crítico. Para garantir a alta disponibilidade e a tolerância a falhas, o ELB deve verificar de forma inteligente a saúde das instâncias EC2. Qual das seguintes configurações garantiria que o ELB realize verificações de saúde efetivas?",
    options: [
      "Configurar o ELB para usar o protocolo TCP para a verificação de saúde das instâncias.",
      "Configurar o ELB para realizar verificações de ping ICMP para determinar a disponibilidade das instâncias.",
      "Usar o tempo médio de resposta da instância como métrica para a verificação de saúde.",
      "Habilitar verificações de saúde HTTPS e validar a resposta do status de código 200 das páginas de destino específicas do aplicativo."
    ],
    correctAnswer: 3,
    explanation: "Correta. Verificações de saúde HTTPS que esperam um código de status 200 de páginas específicas garantem que o aplicativo web está não só rodando, mas também respondendo corretamente a solicitações, o que é crucial para a disponibilidade do serviço."
  },
  {
    id: 17,
    text: "Uma empresa utiliza o Elastic Load Balancing (ELB) para distribuir o tráfego entre múltiplas instâncias EC2 na aplicação de comércio eletrônico. Durante picos de tráfego, alguns clientes relatam erros de timeout. Qual das seguintes medidas pode ser mais adequada para resolver este problema?",
    options: [
      "Configurar o ELB para um modelo de processamento de aplicativo mais potente.",
      "Utilizar o Amazon CloudFront juntamente com o ELB.",
      "Adicionar mais instâncias EC2 atrás do ELB.",
      "Migrar o ELB para uma região AWS mais próxima dos clientes."
    ],
    correctAnswer: 2,
    explanation: "Correta. A adição de mais instâncias EC2 pode ajudar a distribuir o tráfego de forma mais eficaz, diminuindo a carga em cada instância e potencialmente reduzindo os erros de timeout."
  },
  {
    id: 18,
    text: "Suponha que você está utilizando o AWS Copilot para gerenciar e escalar aplicações conteinerizadas. Qual ação NÃO é possível realizar diretamente através do AWS Copilot?",
    options: [
      "Configurar e gerenciar instâncias de Banco de Dados SQL Server diretamente do ambiente.",
      "Criar um pipeline de CI/CD integrado para implantação contínua das aplicações.",
      "Monitorar o uso de recursos e a saúde dos serviços usando Amazon CloudWatch.",
      "Definir e aplicar políticas de Auto Scaling com base em métricas de utilização de CPU."
    ],
    correctAnswer: 0,
    explanation: "Correta. O AWS Copilot é utilizado principalmente para gerenciar aplicações conteinerizadas e serviços relacionados. Embora ajude na integração com alguns serviços da AWS, a configuração e gerenciamento direto de bancos de dados SQL Server não está dentro do escopo direto do Copilot."
  },
  {
    id: 19,
    text: "Você está desenvolvendo uma aplicação que precisa armazenar dados sensíveis de clientes de forma segura na AWS. Para isso, você decidiu usar o AWS Key Management Service (KMS) para criptografar os dados antes de armazená-los no Amazon S3. No entanto, é necessário que a chave de criptografia usada possa ser automaticamente rotacionada anualmente sem intervenção manual. Como você deve proceder para configurar essa funcionalidade corretamente no AWS KMS?",
    options: [
      "Habilitar a rotação automática de chaves para a chave mestra de cliente (CMK) durante a sua criação no AWS KMS.",
      "Criar uma função Lambda para rotacionar a chave manualmente no AWS KMS a cada ano.",
      "Utilizar o Amazon CloudWatch para monitorar a idade da chave e acionar um evento que rotaciona a chave no AWS KMS.",
      "Configurar a rotação de chaves para cada dois anos diretamente no IAM."
    ],
    correctAnswer: 0,
    explanation: "Correta. A configuração de rotação automática de chave é feita diretamente no AWS KMS, e pode ser habilitada durante a criação da chave mestra de cliente (CMK) ou posteriormente através da API ou do console AWS."
  },
  {
    id: 20,
    text: "Em um cenário em que um desenvolvedor precisa garantir que o AWS CodeBuild possa acessar recursos privados dentro de uma VPC sem expor tais recursos à internet, qual das seguintes configurações deve ser realizada para alcançar esse objetivo?",
    options: [
      "Associar a build project do CodeBuild a subnets específicas e grupos de segurança dentro da VPC.",
      "Utilizar uma VPC Endpoint para permitir que o CodeBuild acesse serviços da AWS internamente.",
      "Criar regras de segurança na VPC para permitir o acesso público aos recursos.",
      "Desativar todas as conexões de entrada e saída na VPC."
    ],
    correctAnswer: 0,
    explanation: "Correta. Associar o projeto de build do CodeBuild a subnets e grupos de segurança específicos dentro da VPC é a maneira correta de garantir o acesso privado aos recursos sem expor-nos à internet."
  },
  {
    id: 21,
    text: "Ao utilizar o AWS CDK para definir a infraestrutura necessária para um serviço web escalável na AWS, qual das seguintes práticas seria recomendada para otimizar o desempenho e reduzir custos?",
    options: [
      "Definir todos recursos no mesmo stack do CDK, independentemente do ambiente, para simplificar o gerenciamento.",
      "Hardcode de credenciais no código fonte do projeto para facilitar o acesso aos recursos AWS pela aplicação.",
      "Evitar o uso de parâmetros de ambiente no stack do CDK, mantendo uma configuração uniforme.",
      "Utilizar múltiplos stacks do CDK para representar diferentes ambientes como produção e desenvolvimento."
    ],
    correctAnswer: 3,
    explanation: "Utilizar múltiplos stacks do AWS CDK para separar ambientes, como produção e desenvolvimento, permite especificar recursos e configurações dedicados, otimizando a organização, escalabilidade e reduzindo custos ao ajustar os recursos para cada necessidade. Definir todos os recursos no mesmo stack pode levar a problemas de escalabilidade, hardcodar credenciais é uma prática de segurança fraca, e evitar parâmetros de ambiente resulta em uso ineficiente de recursos."
  },
  {
    id: 22,
    text: "Ao integrar o Amazon CodeGuru Reviewer no processo de CI/CD para um aplicativo, qual das seguintes afirmações melhor descreve um benefício direto dessa integração?",
    options: [
      "Administra a configuração de recursos de infraestrutura.",
      "Gera revisões automáticas de código para identificar problemas críticos e práticas recomendadas.",
      "Fornece uma plataforma para deployment automático de código.",
      "Acelera os testes de desempenho do aplicativo."
    ],
    correctAnswer: 1,
    explanation: "Amazon CodeGuru Reviewer analisa automaticamente o código e fornece recomendações para melhorar a qualidade e segurança, identificando problemas críticos antes do deployment. Não gerencia infraestrutura, não é uma plataforma de deployment, e não acelera diretamente testes de desempenho, mas sim otimiza o código."
  },
  {
    id: 23,
    text: "Em um cenário onde você está utilizando o AWS AppSync para criar uma API GraphQL que interage com diferentes fontes de dados e requer autenticação avançada, qual das seguintes soluções é a mais recomendada para gerenciar a segurança e acesso dos usuários de sua API?",
    options: [
      "Configurar rotas de API no Amazon API Gateway para autenticação.",
      "Habilitar logs detalhados no CloudWatch e monitorar as solicitações à API.",
      "Integrar com Amazon Cognito User Pools para gestão da autenticação e autorização dos usuários.",
      "Utilizar políticas de IAM para controlar o acesso à API."
    ],
    correctAnswer: 2,
    explanation: "Integrar o AWS AppSync com Amazon Cognito User Pools permite uma gestão robusta de autenticação e autorização diretamente na camada da API, suportando verificações complexas e condições específicas de segurança. Configurar rotas no API Gateway é menos eficaz para GraphQL, logs no CloudWatch não controlam acesso, e políticas de IAM não são tão específicas quanto o Cognito para APIs GraphQL."
  },
  {
    id: 24,
    text: "Você está programando uma aplicação web no Amazon EC2 que precisa responder aos picos de demanda automaticamente. Qual serviço ou recurso você deve utilizar para garantir a escalabilidade automática da capacidade da sua instância EC2, mantendo a segurança e a performance?",
    options: [
      "Amazon CloudFront",
      "Amazon Route 53",
      "Amazon EC2 Auto Scaling",
      "AWS Lambda"
    ],
    correctAnswer: 2,
    explanation: "O Amazon EC2 Auto Scaling adiciona ou remove instâncias EC2 automaticamente com base em condições definidas, garantindo escalabilidade conforme a demanda, mantendo performance e reduzindo custos. CloudFront é um CDN, Route 53 é um serviço de DNS, e Lambda é para computação sem servidor, não para escalar instâncias EC2."
  },
  {
    id: 25,
    text: "Você está desenvolvendo uma aplicação distribuída na AWS que utiliza múltiplas instâncias EC2. Como parte dos requisitos de segurança, você precisa garantir que as instâncias EC2 se comuniquem de forma segura e restrita entre elas, assim como o acesso de aplicativos cliente autorizados. Qual das seguintes opções é a estratégia mais eficaz para atingir este objetivo?",
    options: [
      "Configurar grupos de segurança para limitar o tráfego entre as instâncias EC2 específicas e subnets residuais na VPC.",
      "Usar uma instância EC2 em uma VPC com um grupo de segurança que permite tráfego apenas de IPs conhecidos.",
      "Implementar uma política de IAM para cada instância EC2, restringindo a comunicação entre as instâncias e com clientes autorizados.",
      "Usar ACLs de rede com regras baseadas em estado para permitir tráfego apenas entre instâncias EC2 específicas."
    ],
    correctAnswer: 0,
    explanation: "Configurar grupos de segurança para restringir tráfego entre instâncias EC2 específicas e subnets na VPC é a abordagem mais eficaz, pois os grupos de segurança são stateful e permitem controle granular de tráfego. Limitar por IPs conhecidos é menos abrangente, políticas de IAM não gerenciam tráfego de rede, e ACLs de rede são stateless, menos práticas para este caso."
  },
  {
    id: 26,
    text: "Como desenvolvedor, você está integrando o Amazon CodeWhisperer em um ambiente de desenvolvimento para melhorar a produtividade da equipe. Qual das seguintes ações é recomendada para garantir que o uso do CodeWhisperer siga as melhores práticas de segurança no desenvolvimento de aplicações na AWS?",
    options: [
      "Usar somente funções IAM com privilégios de administrador para operar o CodeWhisperer para evitar problemas de permissão durante o desenvolvimento.",
      "Configurar o CodeWhisperer para usar uma política de IAM restritiva que limite seus acessos somente aos recursos necessários.",
      "Desabilitar totalmente a funcionalidade de logging do CodeWhisperer para proteger os dados sensíveis.",
      "Habilitar as configurações padrão de segurança do CodeWhisperer sem revisões adicionais."
    ],
    correctAnswer: 1,
    explanation: "Configurar o CodeWhisperer com uma política de IAM restritiva segue o princípio do menor privilégio, garantindo acesso apenas aos recursos necessários e mantendo a segurança. Usar privilégios de administrador aumenta riscos, desabilitar logs dificulta auditorias, e configurações padrão sem revisão podem não atender aos requisitos específicos."
  },
  {
    id: 27,
    text: "Um desenvolvedor está projetando uma aplicação que precisa armazenar e recuperar sessões de usuário de forma altamente disponível e resiliente. A aplicação requer acesso de baixa latência aos dados e a capacidade de manter o estado mesmo após falhas de hardware. Em qual cenário o uso do Amazon MemoryDB é mais apropriado?",
    options: [
      "Armazenar dados altamente disponíveis requeridos para sessões de usuário com baixa latência.",
      "Executar análise de grandes volumes de dados em tempo real.",
      "Backup de longo prazo dos dados críticos da empresa.",
      "Armazenar arquivos de log para análise futura."
    ],
    correctAnswer: 0,
    explanation: "O Amazon MemoryDB é ideal para armazenar sessões de usuário com alta disponibilidade e baixa latência, sendo um banco de dados em memória compatível com Redis. Não é adequado para análise de grandes volumes de dados (melhor com Redshift/EMR), backups de longo prazo (melhor com S3), ou armazenamento de logs para análise futura."
  },
  {
    id: 28,
    text: "Um desenvolvedor está implementando um sistema de análise de dados em tempo real usando o Amazon Kinesis e precisa garantir a escalabilidade para lidar com picos de ingestão de dados. Qual das seguintes estratégias seria a mais apropriada para gerenciar dinamicamente o throughput do Amazon Kinesis Data Streams?",
    options: [
      "Modificar manualmente o número de shards no stream conforme necessário.",
      "Utilizar o AWS Auto Scaling associado ao monitoramento do CloudWatch.",
      "Configurar o balanço de carga clássico para distribuir as solicitações entre os shards.",
      "Implementar o Kinesis Data Streams On-Demand para escalonamento automático."
    ],
    correctAnswer: 3,
    explanation: "O Kinesis Data Streams On-Demand gerencia automaticamente a capacidade do stream, ajustando o throughput dinamicamente para picos e vales, sem intervenção manual. Modificar shards manualmente não é dinâmico, Auto Scaling não se aplica diretamente a Kinesis, e balanceadores de carga não são usados para shards."
  },
  {
    id: 29,
    text: "Em uma empresa que utiliza o AWS CodeBuild para automatizar a construção de seus aplicativos, os desenvolvedores estão enfrentando problemas com builds demorados e ineficientes. Qual das seguintes alternativas apresenta uma solução que melhoraria o desempenho dos builds no AWS CodeBuild?",
    options: [
      "Usar imagens Docker personalizadas que pré-carreguem todas as dependências necessárias.",
      "Reduzir a complexidade do código fonte dos aplicativos.",
      "Aumentar o intervalo entre builds sucessivos para diminuir o uso de recursos.",
      "Migrar todos os projetos para um ambiente de desenvolvimento serverless."
    ],
    correctAnswer: 0,
    explanation: "Usar imagens Docker personalizadas com dependências pré-carregadas reduz o tempo de download durante os builds, melhorando o desempenho no AWS CodeBuild. Reduzir a complexidade do código não impacta diretamente o build, aumentar intervalos atrasa entregas, e migrar para serverless não resolve o problema de build."
  },
  {
    id: 30,
    text: "Quando utilizar o AWS CloudShell, que fatores devem ser considerados ao escolher os comandos e ferramentas adequados para a gestão de recursos via linha de comando, visando manter a segurança e eficiência das operações?",
    options: [
      "Armazenar chaves de API e outros segredos diretamente no ambiente de script do CloudShell.",
      "Liberar aclamativamente o acesso ao CloudShell para todos os usuários dentro de uma organização.",
      "Uso indiscriminado de scripts de terceiros no CloudShell para agilizar a gestão de recursos.",
      "Utilização de comandos nativamente suportados pelo AWS CLI disponível no CloudShell para operações rotineiras."
    ],
    correctAnswer: 3,
    explanation: "Usar comandos nativos do AWS CLI no CloudShell garante segurança e eficiência, pois são mantidos pela AWS e seguem práticas recomendadas. Armazenar chaves no ambiente expõe riscos, liberar acesso total viola o menor privilégio, e scripts de terceiros sem revisão podem introduzir vulnerabilidades."
  },
  {
    id: 31,
    text: "Um desenvolvedor está implementando uma aplicação que utiliza o AWS Secrets Manager para gerenciar credenciais de banco de dados. A aplicação necessita recuperar as credenciais periodicamente, visando atualizar possíveis mudanças. Qual é a melhor prática para recuperar as credenciais armazenadas no Secrets Manager de forma segura e eficiente?",
    options: [
      "Implementar um cache local das credenciais e atualizá-lo a cada intervalo definido usando a API `GetSecretValue`.",
      "Solicitar ao AWS Secrets Manager que envie as credenciais diretamente ao banco de dados sempre que houver uma atualização.",
      "Usar a API `GetSecretValue` toda vez que a aplicação necessitar acessar o banco de dados.",
      "Armazenar uma cópia local das credenciais e atualizar apenas se a aplicação identificar erro de autenticação."
    ],
    correctAnswer: 0,
    explanation: "Implementar um cache local das credenciais, atualizando-o periodicamente com a API `GetSecretValue`, minimiza chamadas à API, reduz latência e custos, mantendo segurança. Enviar credenciais diretamente ao banco não é suportado, chamar a API a cada acesso é ineficiente, e armazenar localmente sem atualização proativa é arriscado."
  },
  {
    id: 32,
    text: "Uma empresa está implementando um sistema de notificação de urgências utilizando o Amazon SNS para alertar sistemas responsivos distribuídos em várias regiões geográficas. Qual estratégia de configuração assegura que as notificações sejam entregues de maneira eficaz e confiável em todas as regiões?",
    options: [
      "Configurar um único tópico SNS na região principal apenas, com assinantes globais.",
      "Utilizar Amazon SQS em vez de SNS, considerando que SQS oferece maior durabilidade e persistência.",
      "Criar um tópico SNS e habilitar o Access Point Alias para criar endereços URL de endpoint personalizados por região.",
      "Utilizar um tópico SNS em cada região e inscrever endpoints locais nesses tópicos."
    ],
    correctAnswer: 3,
    explanation: "Usar um tópico SNS por região com endpoints locais minimiza latência e aumenta a confiabilidade da entrega de notificações. Um único tópico global pode causar atrasos, SQS é para filas, não notificações, e Access Point Alias não resolve entrega regional."
  },
  {
    id: 33,
    text: "Um desenvolvedor está utilizando o AWS CloudFormation para automatizar a implementação de uma infraestrutura segura e resiliente. Qual das seguintes opções seria a melhor prática para garantir que os recursos sensíveis, como chaves de API e senhas, não sejam expostos no código do template?",
    options: [
      "Criar uma instância EC2 que armazene todas as chaves de API e configurar as políticas de IAM para controlar o acesso a essa instância.",
      "Inserir as chaves de API em descrições dentro do template do CloudFormation.",
      "Armazenar as chaves API diretamente no código do template do CloudFormation.",
      "Usar parâmetros com valores definidos no momento da execução do template."
    ],
    correctAnswer: 3,
    explanation: "Usar parâmetros com valores definidos em tempo de execução, combinados com a propriedade 'NoEcho', evita a exposição de informações sensíveis no template. Armazenar chaves em EC2 ou no template (diretamente ou em descrições) aumenta riscos de segurança."
  },
  {
    id: 34,
    text: "Um desenvolvedor está integrando um sistema de processamento de pedidos com o AWS Step Functions para coordenar várias etapas dos processos de verificação e atendimento dos pedidos. Qual das seguintes práticas é recomendada ao definir a função Amazon IAM para executar tarefas dentro de uma máquina de estados do AWS Step Functions?",
    options: [
      "Utilizar uma política inline específica para cada tipo de tarefa no estado da máquina.",
      "Usar uma única política IAM com permissões abrangentes que cubram todas as ações necessárias pelas tarefas.",
      "Evitar usar funções IAM e, em vez disso, controlar o acesso através de políticas de grupo diretamente ligadas aos recursos da AWS utilizados pelas tarefas.",
      "Configurar a função IAM para assumir permissões mais restritivas adaptadas às necessidades específicas de cada tarefa na máquina de estado."
    ],
    correctAnswer: 3,
    explanation: "Configurar uma função IAM com permissões restritivas adaptadas a cada tarefa segue o princípio do menor privilégio, aumentando a segurança. Políticas inline são complexas de gerenciar, permissões abrangentes aumentam riscos, e políticas de grupo não substituem funções IAM."
  },
  {
    id: 35,
    text: "Ao utilizar o AWS CodeDeploy para atualizar uma aplicação existente, você percebe que algumas instâncias falham ao realizar a implantação da nova versão da aplicação. Qual dos seguintes passos você deveria considerar para resolver esse problema?",
    options: [
      "Reverter imediatamente para a versão anterior da aplicação em todas as instâncias.",
      "Remover a autorização de acesso ao bucket do S3 que contém o artefato da aplicação.",
      "Aumentar a capacidade da instância para ter mais CPUs e memória.",
      "Verificar os logs de implantação para determinar causas de falhas específicas."
    ],
    correctAnswer: 3,
    explanation: "Verificar os logs de implantação é essencial para identificar a causa específica das falhas, permitindo ações corretivas direcionadas. Reverter imediatamente pode não ser necessário, remover acesso ao S3 piora o problema, e aumentar capacidade não resolve sem análise prévia."
  },
  {
    id: 36,
    text: "Uma empresa de comércio eletrônico deseja proteger sua aplicação web de tentativas comuns de ataques, como injeção de SQL e scripts entre sites (XSS). Eles decidiram implementar o AWS WAF para melhorar sua segurança. Qual das seguintes ações é recomendada para configurar o AWS WAF de forma eficaz?",
    options: [
      "Utilizar templates de regras gerenciadas pela AWS para proteção contra ataques comuns de web, como injeção de SQL e XSS.",
      "Definir regras que permitem tráfego de todas as fontes, exceto aquelas explicitamente bloqueadas.",
      "Ignorar o monitoramento de tráfego e confiar exclusivamente na configuração inicial das regras.",
      "Configurar o AWS WAF somente para logs de tráfego HTTPS, ignorando o HTTP."
    ],
    correctAnswer: 0,
    explanation: "Usar templates de regras gerenciadas pela AWS no WAF protege eficazmente contra ataques como SQL injection e XSS. Permitir tráfego de todas as fontes é arriscado, ignorar monitoramento não detecta novas ameaças, e proteger apenas HTTPS deixa HTTP vulnerável."
  },
  {
    id: 37,
    text: "Um desenvolvedor está utilizando o Amazon CloudFront para distribuição de conteúdo globalmente e quer aumentar a segurança ao acessar os objetos no bucket S3 que está configurado como origem. Qual das seguintes opções é a solução recomendada para restringir o acesso apenas ao CloudFront e prevenir o acesso direto ao bucket S3?",
    options: [
      "Configurar uma Origin Access Identity (OAI) e associá-la ao CloudFront, ajustando a política do bucket S3 para permitir acesso somente pela OAI.",
      "Utilizar Signed URLs ou Signed Cookies para restringir o acesso.",
      "Configurar o bucket S3 para aceitar conexões somente da VPC onde o CloudFront está configurado.",
      "Bloquear todos os IPs que não sejam os do CloudFront usando regras de bucket policy."
    ],
    correctAnswer: 0,
    explanation: "Configurar uma Origin Access Identity (OAI) e ajustar a política do bucket S3 para permitir apenas acessos via OAI restringe o acesso ao CloudFront, evitando acesso direto ao bucket. Signed URLs/Cookies são válidos, mas OAI é mais específico para este caso. Limitar por VPC ou IPs do CloudFront é impraticável."
  },
  {
    id: 38,
    text: "Você é um desenvolvedor trabalhando em uma aplicação que se integra a uma base de dados SQL hospedada na AWS. Você precisa armazenar de maneira segura as credenciais de acesso à base de dados, que são frequentemente rotacionadas. Qual das seguintes abordagens utilizando o AWS Secrets Manager é a mais recomendada para gerenciar as credenciais de banco de dados?",
    options: [
      "Utilizar variáveis de ambiente para armazenar as credenciais de acesso e atualizar manualmente quando houver rotacionamento.",
      "Armazenar as credenciais em um arquivo local seguro na instância EC2 e atualizar regularmente utilizando o AWS Secrets Manager.",
      "Armazenar as credenciais como valores simples no Secrets Manager e integrar a aplicação para recuperar as credenciais diretamente quando necessário.",
      "Codificar as credenciais na aplicação e usar o AWS Secrets Manager apenas para armazenar chave de criptografia."
    ],
    correctAnswer: 2,
    explanation: "Armazenar credenciais no Secrets Manager e recuperá-las diretamente pela aplicação é seguro e suporta rotações automáticas. Variáveis de ambiente e arquivos locais aumentam riscos, e codificar credenciais na aplicação é uma prática insegura."
  },
  {
    id: 39,
    text: "Um desenvolvedor está projetando uma solução de processamento de dados em tempo real usando o Amazon Kinesis. O sistema deve ser capaz de ingestão contínua de grandes volumes de dados de dispositivos IoT, com processamento e análise em tempo real para detectar anomalias. Qual das seguintes abordagens é recomendada para otimizar o desempenho e eficiência de custo?",
    options: [
      "Diminuir o intervalo de retenção dos dados no stream para reduzir custos.",
      "Evitar o uso de qualquer serviço de stream e processar dados diretamente no Amazon S3.",
      "Utilizar múltiplos shards para permitir maior paralelismo e taxa de transferência.",
      "Manter um único shard para todos os dispositivos IoT para simplificar o gerenciamento."
    ],
    correctAnswer: 2,
    explanation: "Usar múltiplos shards no Kinesis aumenta o paralelismo e a taxa de transferência, ideal para grandes volumes de dados de IoT. Reduzir retenção economiza custos, mas não melhora desempenho; processar diretamente no S3 adiciona latência; e um único shard limita a escalabilidade."
  },
  {
    id: 40,
    text: "Você está trabalhando em uma equipe de desenvolvimento e precisa executar scripts de automação para gerenciar recursos na AWS diretamente de um ambiente baseado em navegador. Qual dos seguintes métodos seria mais apropriado e seguro utilizando o AWS CloudShell para garantir a execução dos scripts?",
    options: [
      "Criar uma instância EC2 separada para configurar e rodar os scripts de automação, assegurando o isolamento e a segurança.",
      "Acessar o AWS CloudShell diretamente através do AWS Management Console e usar as credenciais temporárias do IAM role assumido pela sessão.",
      "Configurar as credenciais da AWS diretamente no código dos scripts para permitir a autenticação com os serviços da AWS.",
      "Utilizar AWS CLI configurada na própria máquina local e conectar-se via SSH ao AWS CloudShell para executar os scripts."
    ],
    correctAnswer: 1,
    explanation: "Acessar o CloudShell via AWS Management Console com credenciais temporárias do IAM é seguro e eficiente, eliminando a necessidade de gerenciar credenciais. Usar EC2 é menos prático, embutir credenciais no código é inseguro, e SSH não é suportado no CloudShell."
  },
  {
    id: 41,
    text: "Um desenvolvedor na AWS está projetando um sistema que necessita isolar ambientes de produção e desenvolvimento usando Amazon VPC. Qual estratégia recomendaria para garantir isolamento efetivo e eficiência em termos de custos e transformações?",
    options: [
      "Criar VPCs separadas para cada ambiente, cada uma com seu conjunto de sub-redes, grupos de segurança e gateways.",
      "Implementar um VPC peering entre a VPC de produção e a de desenvolvimento para facilitar a comunicação e o teste.",
      "Configurar uma VPC com sub-redes públicas para desenvolvimento e sub-redes privadas para produção.",
      "Usar uma única VPC com diferentes instâncias EC2 para cada ambiente, diferenciando-as por tags."
    ],
    correctAnswer: 0,
    explanation: "Criar VPCs separadas para cada ambiente garante isolamento total, permitindo políticas de segurança específicas e otimizando custos ao ajustar recursos por ambiente. VPC peering compromete o isolamento, usar sub-redes públicas/privadas na mesma VPC não isola completamente, e uma única VPC com tags não oferece segurança robusta."
  },
  {
    id: 42,
    text: "Um desenvolvedor está implementando um sistema que utiliza funções Lambda para processar dados provenientes de múltiplas contas da AWS. A solução requer que a função Lambda em uma conta principal acesse recursos em uma outra conta. Qual é a melhor maneira de configurar o acesso seguro entre as contas usando AWS STS?",
    options: [
      "Configurar uma função IAM de execução com permissões de administrador que permita a função Lambda da conta principal assumir essa função quando necessário.",
      "Estabelecer uma política de S3 Bucket que permita acesso público desde a função Lambda na conta principal.",
      "Criar uma VPC peering entre as duas contas e configurar as regras de segurança da rede para permitir a comunicação entre recursos.",
      "Utilizar AWS STS para gerar credenciais temporárias que permitam à função Lambda da conta principal acessar recursos específicos na outra conta."
    ],
    correctAnswer: 3,
    explanation: "Usar AWS STS para gerar credenciais temporárias segue o princípio do menor privilégio, permitindo acesso seguro e limitado entre contas. Permissões de administrador são arriscadas, acesso público a S3 é inseguro, e VPC peering é uma solução de rede, não de permissões."
  },
  {
    id: 43,
    text: "Um desenvolvedor está projetando um sistema de logs para uma aplicação web, utilizando o Amazon S3 para armazenar grandes volumes de dados de log de forma eficiente e econômica. Qual das seguintes opções é a estratégia mais apropriada para otimizar a performance e custo do armazenamento de longo prazo desses dados?",
    options: [
      "Mover os dados para o S3 Glacier após 30 dias para reduzir custos.",
      "Usar uma lifecycle policy para transferir dados automaticamente para o S3 One Zone-IA após 60 dias.",
      "Armazenar todos os dados de log no S3 Intelligent-Tiering desde o início.",
      "Utilizar o S3 Standard para todos os dados de log, independentemente da sua idade."
    ],
    correctAnswer: 0,
    explanation: "Mover dados para S3 Glacier após 30 dias reduz custos para logs raramente acessados. S3 One Zone-IA é menos econômico para alta durabilidade, S3 Intelligent-Tiering é mais caro para padrões previsíveis, e S3 Standard é caro para armazenamento de longo prazo."
  },
  {
    id: 44,
    text: "Como desenvolvedor, você precisa garantir que apenas containers confiáveis sejam executados no seu ambiente AWS, através do uso do Amazon ECR. Qual a melhor prática para implementar essa segurança?",
    options: [
      "Utilizar a verificação de conformidade integrada do AWS Trusted Advisor.",
      "Ativar a verificação de segurança de imagens no Amazon ECR e tratar as falhas encontradas.",
      "Restringir o acesso ao Amazon ECR usando uma Virtual Private Cloud (VPC).",
      "Configurar políticas de segurança no nível da instância EC2 que hospeda os containers."
    ],
    correctAnswer: 1,
    explanation: "Ativar a verificação de segurança de imagens no Amazon ECR escaneia vulnerabilidades, garantindo que apenas containers confiáveis sejam usados. Trusted Advisor não verifica imagens, VPCs limitam acesso, mas não segurança de imagens, e políticas de EC2 não abordam a confiabilidade do container."
  },
  {
    id: 45,
    text: "Um desenvolvedor está implantando uma aplicação de alta disponibilidade que utiliza o Amazon Aurora. A aplicação deve ser capaz de realizar leituras escaláveis e suportar possíveis falhas de uma instância de banco de dados sem interrupção do serviço. Qual das seguintes configurações o desenvolvedor deve implementar para alcançar esses requisitos?",
    options: [
      "Utilizar uma carga de trabalho serverless do Aurora.",
      "Criar uma instância Aurora com várias réplicas de leitura.",
      "Implementar Aurora Multi-Master.",
      "Usar uma instância Aurora standalone."
    ],
    correctAnswer: 1,
    explanation: "Criar uma instância Aurora com réplicas de leitura garante escalabilidade de leitura e alta disponibilidade via failover automático. Aurora Serverless não foca em réplicas, Multi-Master é para escrita simultânea, e standalone não suporta falhas ou escalabilidade."
  },
  {
    id: 46,
    text: "Você está configurando um cluster Amazon OpenSearch Service para uma aplicação de e-commerce que precisa escalar durante períodos de alta demanda, como vendas especiais. O objetivo é manter a estabilidade e a disponibilidade do serviço de busca durante esses picos. Qual das seguintes estratégias é a mais adequada para configurar o dimensionamento automático do cluster?",
    options: [
      "Aumentar o número de nodos manualmente antes de eventos de alta demanda.",
      "Utilizar um número fixo de nodos com capacidade elevada para lidar com qualquer pico.",
      "Configurar políticas de alerta para notificar quando o desempenho diminuir.",
      "Habilitar políticas de auto scaling baseadas no uso da CPU e na contagem de requisições."
    ],
    correctAnswer: 3,
    explanation: "Políticas de auto scaling baseadas em CPU e requisições ajustam o cluster dinamicamente, mantendo estabilidade e eficiência. Ajuste manual é ineficiente, nodos fixos desperdiçam recursos, e alertas apenas notificam sem escalonar."
  },
  {
    id: 47,
    text: "Você está desenvolvendo uma solução que utiliza a AWS CodeArtifact para compartilhar e gerenciar pacotes de software entre múltiplas equipes de desenvolvimento. No entanto, você precisa garantir que apenas usuários autorizados tenham acesso para baixar e publicar pacotes nesses repositórios. Qual das seguintes abordagens você deve utilizar para atender a este requisito de segurança?",
    options: [
      "Configurar políticas de bucket do Amazon S3 para restringir o acesso.",
      "Usar políticas de grupo de segurança para limitar o acesso baseado em IPs.",
      "Habilitar o AWS Shield para proteger os repositórios contra ataques DDoS.",
      "Aplicar políticas de IAM para definir permissões de acesso ao repositório CodeArtifact."
    ],
    correctAnswer: 3,
    explanation: "Políticas de IAM controlam o acesso ao CodeArtifact de forma granular, garantindo que apenas usuários autorizados publiquem ou consumam pacotes. Políticas de S3 não se aplicam, grupos de segurança são para rede, e AWS Shield protege contra DDoS, não controle de acesso."
  },
  {
    id: 48,
    text: "Ao configurar o Amazon OpenSearch Service para um aplicativo de e-commerce que precisa garantir alto desempenho e segurança, qual das seguintes configurações é recomendada para proteger o acesso ao domínio OpenSearch?",
    options: [
      "Habilitar o acesso público ao domínio OpenSearch sem restrições.",
      "Usar apenas o OpenSearch Service sem nenhum mecanismo de autenticação.",
      "Configurar um VPC com sub-redes privadas e um gateway NAT.",
      "Utilizar Security Groups abertos para 0.0.0.0/0."
    ],
    correctAnswer: 2,
    explanation: "Configurar o OpenSearch em um VPC com sub-redes privadas e um gateway NAT isola o tráfego, garantindo segurança e desempenho. Acesso público ou sem autenticação é inseguro, e Security Groups abertos comprometem a segurança."
  },
  {
    id: 49,
    text: "Você está desenvolvendo uma API para um serviço de e-commerce usando o Amazon API Gateway. Sua API precisa lidar com uma grande quantidade de acessos concorrentes, além de gerenciar taxas diferentes de requisições para clientes premium e regulares. Qual das seguintes opções é a mais adequada para controlar essas taxas de acesso de maneira eficaz?",
    options: [
      "Usar o Amazon CloudFront em conjunto com o API Gateway para caching de endpoints.",
      "Implementar ferramentas de terceiros para limitação de taxa de requisições antes que atinjam o API Gateway.",
      "Configurar múltiplas stages no API Gateway, cada uma com configurações distintas de throttling.",
      "Utilizar o recurso de Throttling do Amazon API Gateway para definir limites distintos para clientes premium e regulares."
    ],
    correctAnswer: 3,
    explanation: "O Throttling do API Gateway permite configurar limites de requisições por cliente, ideal para diferenciar premium e regulares. CloudFront foca em caching, ferramentas externas são menos integradas, e stages não controlam acesso por cliente."
  },
  {
    id: 50,
    text: "Você está desenvolvendo uma aplicação web moderna hospedada na AWS e precisa garantir que a comunicação entre os seus usuários e o servidor seja segura, utilizando HTTPS. Como o AWS Certificate Manager (ACM) pode ser utilizado para atender esse requisito?",
    options: [
      "Utilizar o ACM exclusivamente para gerar certificados autoassinados para uso interno.",
      "Criar e exportar um certificado gerado pelo ACM para ser utilizado em servidores fora da AWS.",
      "Solicitar um certificado público no ACM e usá-lo diretamente com um Elastic Load Balancer para servir tráfego HTTPS.",
      "Utilizar o ACM apenas para gerenciamento de renovação automática de certificados SSL adquiridos externamente."
    ],
    correctAnswer: 2,
    explanation: "Solicitar um certificado público no ACM e usá-lo com um Elastic Load Balancer garante HTTPS seguro. ACM não gera autoassinados, não permite exportação, e só gerencia renovação de seus próprios certificados."
  },
  {
    id: 51,
    text: "Você está desenvolvendo uma aplicação na AWS que precisa garantir a autenticidade e a segurança na comunicação entre seus microserviços internos. Por questões de conformidade e segurança, é essencial usar certificados SSL/TLS. Como você pode usar o AWS Private Certificate Authority (PCA) para gerenciar essa necessidade?",
    options: [
      "Usar o AWS PCA para criar uma Autoridade Certificadora pública e emitir certificados para os microserviços.",
      "Provisionar diretamente os certificados SSL/TLS do Amazon Certificate Manager, sem a necessidade de usar o AWS PCA.",
      "Configurar uma Autoridade Certificadora externa para emitir certificados autoassinados e utilizá-los nos microserviços.",
      "Usar o AWS PCA para criar uma Autoridade Certificadora privada para sua organização, responsável por emitir e gerenciar os certificados."
    ],
    correctAnswer: 3,
    explanation: "AWS PCA cria uma Autoridade Certificadora privada para emitir certificados SSL/TLS, ideal para microserviços internos e conformidade. PCA não é público, ACM é menos flexível para casos internos, e certificados autoassinados são menos seguros."
  },
  {
    id: 52,
    text: "Você está trabalhando em um projeto que utiliza o Amazon CodeGuru para melhorar a qualidade do código de uma aplicação AWS Lambda. Durante uma revisão de código, o CodeGuru identificou um problema de consumo excessivo de recursos. Como você pode integrar as recomendações do CodeGuru para otimizar o código da função Lambda?",
    options: [
      "Aumentar a memória alocada para a função Lambda sem revisar o código.",
      "Desativar o Amazon CodeGuru para evitar futuras interrupções no workflow de desenvolvimento.",
      "Aplicar as recomendações do CodeGuru para refatorar o código, reduzindo assim o uso desnecessário de recursos e otimizando a performance.",
      "Ignorar as recomendações do CodeGuru e aumentar o tempo de timeout da função Lambda."
    ],
    correctAnswer: 2,
    explanation: "Aplicar as recomendações do CodeGuru otimiza o código, reduzindo uso de recursos e custos. Aumentar memória ou timeout não resolve a causa raiz, e desativar o CodeGuru perde benefícios de análise."
  },
  {
    id: 53,
    text: "Um desenvolvedor está utilizando o AWS Lambda para processar eventos de upload de arquivos ao Amazon S3. O objetivo é redimensionar imagens para diferentes tamanhos logo após serem carregadas no bucket do S3. Qual é a maneira mais eficiente para lidar com erros temporários, como problemas de limite de taxa, que podem ocorrer durante a invocação de funções Lambda diretamente pelo S3?",
    options: [
      "Habilitar a política de repetição automática e ajuste de escalonamento na configuração da função Lambda.",
      "Configurar uma fila da Amazon SQS como destino de erro na configuração do gatilho do S3 para a função Lambda.",
      "Utilizar o Amazon CloudWatch Events para monitorar e reinvocar a função Lambda em caso de falha.",
      "Ajustar a política de retry no bucket do S3 para reenviar o evento após falhas."
    ],
    correctAnswer: 0,
    explanation: "Habilitar repetição automática e ajustar escalonamento no Lambda gerencia erros temporários como limites de taxa. SQS não é configurável diretamente como destino de erro para S3, CloudWatch Events não reinvoca automaticamente, e S3 não tem políticas de retry para eventos."
  },
  {
    id: 54,
    text: "Ao configurar um pipeline de integração contínua no AWS CodePipeline para um aplicativo web, que configurações você deve considerar para garantir a segurança ao longo do processo de entrega contínua?",
    options: [
      "Ativar a função de roll back automático no AWS CodeDeploy para atualizações mal sucedidas.",
      "Utilizar contas AWS IAM separadas para cada ambiente como desenvolvimento, teste e produção.",
      "Implementar revisões de código obrigatórias antes que as alterações sejam mescladas no branch principal.",
      "Configurar disparadores baseados em polling que verificam periodicamente mudanças no repositório de código fonte.",
      "Habilitar criptografia usando AWS KMS para artefatos armazenados no Amazon S3 usados pelo pipeline."
    ],
    correctAnswer: [1, 2, 4],
    explanation: "Contas IAM separadas por ambiente, revisões de código obrigatórias e criptografia com KMS garantem segurança no pipeline. Roll back é para estabilidade, não segurança, e polling é para automação, não segurança direta."
  },
  {
    id: 55,
    text: "Um desenvolvedor está utilizando o AWS Key Management Service (KMS) para gerenciar chaves de criptografia usadas na proteção de dados. Durante a implementação, surge a necessidade de garantir que as chaves possam ser utilizadas apenas por serviços e instâncias em regiões específicas da AWS. Como o desenvolvedor pode configurar essa restrição de uso de chaves de forma eficaz?",
    options: [
      "Habilitar o recurso de isolamento de região durante a criação da chave no AWS KMS.",
      "Configurar a chave para ser multidivisional e definir políticas baseadas em geolocalização para cada divisão.",
      "Criar chaves separadas para cada região especificada e controlar o acesso usando políticas de segurança.",
      "Utilizar políticas de IAM para restringir o acesso à chave de acordo com o parâmetro 'aws:RequestedRegion'."
    ],
    correctAnswer: 3,
    explanation: "Políticas de IAM com 'aws:RequestedRegion' restringem o uso de chaves KMS por região. Não há 'isolamento de região' no KMS, chaves multidivisionais não existem, e chaves separadas por região não são necessárias com IAM."
  },
  {
    id: 56,
    text: "Ao utilizar o AWS CodeDeploy para realizar a implantação de uma nova versão da aplicação em múltiplos ambientes, quais das seguintes afirmações são verdadeiras em relação ao uso de grupos de implantação?",
    options: [
      "Grupos de implantação podem ser configurados para usar hook scripts que executam tarefas automatizadas em estágios específicos da implantação.",
      "É possível especificar diferentes serviços de notificação para diferentes grupos de implantação, permitindo personalizar as notificações conforme o ambiente alvo.",
      "Os grupos de implantação são atrelados a um único ambiente e não podem ser reutilizados entre diferentes ambientes.",
      "Todos os grupos de implantação devem usar a mesma configuração de instância de computação, como tipo e tamanho."
    ],
    correctAnswer: [0, 1],
    explanation: "Grupos de implantação suportam hook scripts para tarefas automatizadas e notificações personalizadas por ambiente. Podem ser reutilizados entre ambientes compatíveis, e configurações de instância podem variar por grupo."
  },
  {
    id: 57,
    text: "Suponha que você está trabalhando como desenvolvedor na criação de uma solução de gerenciamento de pacotes de software com AWS CodeArtifact. Para garantir que apenas pacotes confiáveis e verificados sejam distribuídos, você precisa configurar políticas de autorização adequadas. Qual das seguintes ações deve ser realizada para atender a este requisito?",
    options: [
      "Configurar um bucket S3 para armazenar os pacotes e aplicar uma política de bucket para restringir o acesso.",
      "Aplicar políticas de domínio no CodeArtifact para especificar quais pacotes ou versões estão autorizadas para uso.",
      "Criar um NAT Gateway para gerenciar o tráfego entre os recursos da VPC e a internet.",
      "Ativar logs detalhados usando AWS CloudTrail para monitorar o acesso aos pacotes."
    ],
    correctAnswer: 1,
    explanation: "Políticas de domínio no CodeArtifact controlam quais pacotes/versões são autorizados, garantindo uso de pacotes confiáveis. S3 não armazena pacotes CodeArtifact, NAT Gateway é para rede, e CloudTrail é para auditoria, não restrição."
  },
  {
    id: 58,
    text: "Você está desenvolvendo uma aplicação que utiliza o Amazon ECS para gerenciar contêineres em um ambiente de produção. A aplicação requer que os contêineres se comuniquem seguramente entre diferentes serviços sem exibir os contêineres diretamente à internet. Qual das seguintes soluções é a mais adequada para garantir a comunicação segura interna entre os serviços no Amazon ECS?",
    options: [
      "Empregar AWS Shield para a proteção automática contra ataques DDoS.",
      "Utilizar Amazon Route 53 para o gerenciamento DNS dos serviços.",
      "Configurar um balanceador de carga Application Load Balancer com regras específicas.",
      "Criar uma VPC e utilizar grupos de segurança apropriados para controlar o tráfego de rede."
    ],
    correctAnswer: 3,
    explanation: "Usar uma VPC com grupos de segurança garante comunicação segura e isolada entre contêineres no ECS. AWS Shield protege contra DDoS, Route 53 gerencia DNS, e ALB é para tráfego externo, não comunicação interna."
  },
  {
    id: 59,
    text: "Considerando a necessidade de otimização de custos e acesso frequente a dados em um aplicativo na AWS, como você poderia configurar o ciclo de vida de objetos no Amazon S3 para atender essas necessidades?",
    options: [
      "Armazenando todos os objetos no S3 One Zone-IA para reduzir custos.",
      "Utilizando S3 Glacier Deep Archive para todos os objetos desde o início.",
      "Movendo objetos diretamente para o S3 Glacier após 30 dias.",
      "Mantendo objetos no S3 Standard por 60 dias, depois movendo para S3 Standard-IA e finalmente para S3 Glacier depois de um ano."
    ],
    correctAnswer: 3,
    explanation: "Manter objetos no S3 Standard por 60 dias, depois S3 Standard-IA e S3 Glacier após um ano otimiza custos e acesso. One Zone-IA é menos durável, Deep Archive é para acesso raro, e Glacier após 30 dias é lento para acesso frequente."
  },
  {
    id: 60,
    text: "Um desenvolvedor está planejando implementar o Amazon Aurora em um ambiente que requer alta disponibilidade e recuperação rápida de desastres. Qual das seguintes opções descreve a melhor prática para alcançar esse objetivo?",
    options: [
      "Implementar instâncias Reserved Instances do Aurora em uma política de Auto Scaling.",
      "Habilitar o Aurora Global Database para replicação de dados entre múltiplas regiões.",
      "Usar o Aurora Multi-Master para ter múltiplos nós de escrita em uma única região.",
      "Configurar backups automáticos e snapshots do banco de dados a cada 6 horas."
    ],
    correctAnswer: 1,
    explanation: "Aurora Global Database replica dados entre regiões, garantindo alta disponibilidade e recuperação de desastres. Reserved Instances são para custo, Multi-Master é para escrita, e backups não garantem recuperação rápida entre regiões."
  },
  {
    id: 61,
    text: "Ao desenvolver uma aplicação móvel que precisa interagir com um conjunto de dados hospedados em várias fontes de dados AWS, você decide usar o AWS AppSync para facilitar as operações GraphQL. Qual é a abordagem correta para implementar a autorização baseada em diferentes níveis de acesso usuário no AWS AppSync?",
    options: [
      "Habilitar a autorização baseada em OpenID Connect (OIDC) no AppSync para integrar com um provedor de identidade externa.",
      "Configurar uma VPC para limitar o acesso ao endpoint do AppSync apenas aos usuários dentro da rede corporativa.",
      "Armazenar as regras de acesso em tabelas do DynamoDB e consultar essas tabelas antes de cada operação no resolver do AppSync.",
      "Utilizar AWS IAM para gerenciar as permissões de acesso direto aos dados nas fontes, sem configurações específicas no AppSync."
    ],
    correctAnswer: 0,
    explanation: "Autorização OIDC no AppSync integra com provedores de identidade externos, permitindo controle granular de acesso. VPCs limitam rede, não níveis de usuário; DynamoDB é ineficiente; e IAM é para serviços, não APIs GraphQL."
  },
  {
    id: 62,
    text: "Seu aplicativo hospedado na AWS tem experimentado spikes de uso que afetam o desempenho. Você planeja usar o Amazon CloudWatch para monitorar e receber alertas. Qual das seguintes ações você pode realizar com o CloudWatch para gerenciar corretamente o desempenho da aplicação durante esses spikes?",
    options: [
      "Configurar alarmes no CloudWatch para escalonamento automático baseado na utilização de recursos.",
      "Utilizar CloudWatch Logs para armazenar e analisar automaticamente logs de segurança.",
      "Ajustar automaticamente a capacidade de computação usando o AWS CodeDeploy.",
      "Criar dashboards para visualizar em tempo real o uso de CPU e memória dos servidores."
    ],
    correctAnswer: [0, 3],
    explanation: "Configurar alarmes para escalonamento automático e dashboards para monitoramento em tempo real gerenciam spikes de uso. CloudWatch Logs é para segurança, não desempenho, e CodeDeploy não ajusta capacidade automaticamente."
  },
  {
    id: 63,
    text: "Uma empresa implementa um serviço web distribuído globalmente e deseja garantir alta disponibilidade e baixa latência para usuários em várias regiões geográficas. Como o Amazon Route 53 pode ser configurado para otimizar a experiência do usuário?",
    options: [
      "Utilizar registros de recurso CNAME para redirecionar tráfego.",
      "Implementar políticas de geolocalização.",
      "Configurar o balanceamento de carga baseado em latência.",
      "Aplicar o Route 53 Resolver para segurança de DNS."
    ],
    correctAnswer: 2,
    explanation: "Balanceamento de carga baseado em latência no Route 53 direciona requisições para a região com menor latência. CNAME é para redirecionamento, geolocalização foca em localização, e Resolver é para DNS interno."
  },
  {
    id: 64,
    text: "Você está desenvolvendo uma aplicação de comércio eletrônico que está enfrentando problemas de desempenho devido a um grande volume de consultas repetitivas ao banco de dados. Vocês decidem usar o Amazon ElastiCache para aliviar a carga no banco de dados. Qual das seguintes afirmações é verdadeira sobre a implementação do ElastiCache que beneficiaria mais diretamente o desempenho da aplicação?",
    options: [
      "Configurar o ElastiCache para realizar backups automáticos das informações armazenadas no cache diariamente.",
      "Utilizar o ElastiCache como um armazém de dados para análise de logs de acessos de produtos.",
      "Usar ElastiCache para armazenar sessões de usuário que são acessadas frequentemente.",
      "Implementar o ElastiCache com uma política de evicção 'allkeys-lru' para as consultas ao banco de dados."
    ],
    correctAnswer: 3,
    explanation: "A política 'allkeys-lru' no ElastiCache mantém dados frequentemente acessados, reduzindo consultas repetitivas ao banco. Backups não afetam desempenho, logs não são o foco, e sessões de usuário não resolvem consultas repetitivas diretamente."
  },
  {
    id: 65,
    text: "Uma empresa está desenvolvendo uma aplicação móvel que requer acesso seguro a uma API hospedada no Amazon API Gateway. Qual das seguintes opções é a maneira mais eficaz e segura de controlar o acesso dos usuários finais a essa API?",
    options: [
      "Utilizar Security Groups do Amazon EC2 para restringir o acesso.",
      "Habilitar logs de acesso no Amazon CloudWatch.",
      "Utilizar o AWS IAM com políticas de acesso baseadas em função.",
      "Implementar tokens de autenticação OAuth 2.0 através do Amazon Cognito."
    ],
    correctAnswer: 3,
    explanation: "Tokens OAuth 2.0 via Amazon Cognito gerenciam acesso seguro de usuários finais à API. Security Groups são para EC2, logs no CloudWatch são para monitoramento, e IAM é para serviços internos, não usuários finais."
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