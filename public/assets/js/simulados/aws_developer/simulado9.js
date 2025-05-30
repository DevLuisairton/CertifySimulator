const originalQuestions = [
      {
    id: 1,
    text: `Um desenvolvedor está projetando um aplicativo sem servidor para um jogo no qual os usuários se registram e fazem login através de um navegador web. O aplicativo faz solicitações em nome dos usuários para um conjunto de funções AWS Lambda que são executadas por trás de uma API Gateway HTTP.
O desenvolvedor precisa implementar uma solução para registrar e logar usuários na página de login do aplicativo. A solução deve minimizar a sobrecarga operacional e a gestão contínua de identidades de usuários.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Criar pools de usuários do Amazon Cognito para provedores de identidade social. Configurar funções IAM para os pools de identidade.",
      "Programar a página de login para criar grupos IAM de usuários com as funções IAM anexadas aos grupos.",
      "Criar uma instância de banco de dados Amazon RDS para SQL Server para armazenar os usuários e gerenciar as permissões para os recursos de backend na AWS.",
      "Configurar a página de login para registrar e armazenar os usuários e suas senhas em uma tabela do Amazon DynamoDB com uma política IAM anexada."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. O Amazon Cognito user pools gerencia identidades com suporte a provedores sociais, reduzindo a sobrecarga operacional. A opção B é insegura e complexa. A opção C requer gerenciamento manual de banco de dados. A opção D não é segura para armazenar senhas diretamente."
  },
  {
    id: 2,
    text: `Uma empresa tem um aplicativo web hospedado em instâncias do Amazon EC2. As instâncias EC2 estão configuradas para transmitir logs para o Amazon CloudWatch Logs. A empresa precisa receber uma notificação do Amazon Simple Notification Service (Amazon SNS) quando o número de mensagens de erro do aplicativo exceder um limite definido em um período de 5 minutos.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Reescrever o código do aplicativo para transmitir logs do aplicativo para o Amazon SNS. Configurar um tópico SNS para enviar uma notificação quando o número de erros exceder o limite definido em um período de 5 minutos.",
      "Configurar um filtro de assinatura no grupo de logs do CloudWatch Logs. Configurar o filtro para enviar uma notificação SNS quando o número de erros exceder o limite definido em um período de 5 minutos.",
      "Instalar e configurar o agente do Amazon Inspector nas instâncias EC2 para monitorar erros. Configurar o Amazon Inspector para enviar uma notificação SNS quando o número de erros exceder o limite definido em um período de 5 minutos.",
      "Criar um filtro de métrica do CloudWatch para corresponder ao padrão de erro do aplicativo nos dados de log. Configurar um alarme do CloudWatch com base na nova métrica personalizada. Configurar o alarme para enviar uma notificação SNS quando o número de erros exceder o limite definido em um período de 5 minutos."
    ],
    correctAnswer: 3,
    explanation: "A opção D é a correta. Um filtro de métrica do CloudWatch monitora erros nos logs e aciona um alarme SNS quando o limite é excedido. A opção A exige reescrita desnecessária. A opção B (filtro de assinatura) não existe para logs. A opção C usa Inspector para vulnerabilidades, não logs."
  },
  {
    id: 3,
    text: `Um aplicativo de compartilhamento de fotos usa o Amazon S3 para armazenar arquivos de imagem. Todas as imagens dos usuários são auditadas manualmente quanto a conteúdo impróprio por uma empresa terceirizada. As auditorias são concluídas de 1 a 24 horas após o upload do usuário, e os resultados são gravados em uma tabela do Amazon DynamoDB, que usa a chave do objeto S3 como chave primária. Os itens do banco de dados podem ser consultados usando uma API REST criada pela empresa terceirizada.
Um desenvolvedor de aplicativos precisa implementar um processo automatizado para marcar todos os objetos S3 com os resultados da auditoria de conteúdo.
O que o desenvolvedor deve fazer para atender a esses requisitos da maneira MAIS eficiente operacionalmente?`,
    options: [
      "Criar uma função AWS Lambda para ser executada em resposta ao tipo de evento s3:ObjectCreated. Gravar a chave S3 em uma fila do Amazon Simple Queue Service (Amazon SQS) com um tempo limite de visibilidade de 24 horas. Criar e configurar uma segunda função Lambda para ler itens da fila. Recuperar os resultados para cada item da tabela DynamoDB. Marcar cada objeto S3 de acordo.",
      "Criar uma função AWS Lambda para ser executada em resposta ao tipo de evento s3:ObjectCreated. Integrar a função em um fluxo de trabalho padrão do AWS Step Functions. Definir um estado de espera do AWS Step Functions e definir o valor para 24 horas. Criar e configurar uma segunda função Lambda para recuperar os resultados da auditoria e marcar os objetos S3 após o estado de espera terminar.",
      "Criar uma função AWS Lambda para carregar todos os objetos S3 não marcados. Recuperar os resultados para cada item da API REST e marcar cada objeto S3 de acordo. Criar e configurar uma regra do Amazon EventBridge para ser executada em intervalos regulares. Definir a função Lambda como alvo para a regra do EventBridge.",
      "Iniciar uma instância do Amazon EC2. Implantar um script na instância EC2 para usar os resultados do banco de dados externo para marcar os objetos S3 de acordo. Configurar um arquivo crontab para executar o script em intervalos regulares."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a mais eficiente. Usar SQS com um tempo limite de visibilidade de 24 horas garante que os resultados da auditoria estejam disponíveis antes de marcar os objetos S3, com mínima sobrecarga. A opção B (Step Functions) é mais complexa. A opção C é menos eficiente devido a verificações periódicas. A opção D requer gerenciamento de EC2."
  },
  {
    id: 4,
    text: `Uma empresa hospeda um aplicativo web do lado do cliente para uma de suas subsidiárias no Amazon S3. O aplicativo web pode ser acessado através do Amazon CloudFront em https://www.example.com. Após um lançamento bem-sucedido, a empresa deseja hospedar mais três aplicativos web do lado do cliente para suas subsidiárias restantes em três buckets S3 separados.
Para atingir esse objetivo, um desenvolvedor move todos os arquivos JavaScript comuns e fontes web para um bucket S3 central que serve os aplicativos web. No entanto, durante os testes, o desenvolvedor nota que o navegador bloqueia os arquivos JavaScript e as fontes web.
O que o desenvolvedor deve fazer para evitar que o navegador bloqueie os arquivos JavaScript e as fontes web?`,
    options: [
      "Criar quatro pontos de acesso que permitam acesso ao bucket S3 central. Atribuir um ponto de acesso a cada bucket de aplicativo web.",
      "Criar uma política de bucket que permita acesso ao bucket S3 central. Anexar a política de bucket ao bucket S3 central.",
      "Criar uma configuração de compartilhamento de recursos entre origens (CORS) que permita acesso ao bucket S3 central. Adicionar a configuração CORS ao bucket S3 central.",
      "Criar um cabeçalho Content-MD5 que forneça uma verificação de integridade de mensagem para o bucket S3 central. Inserir o cabeçalho Content-MD5 para cada solicitação de aplicativo web."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a correta. Uma configuração CORS no bucket S3 central permite que navegadores acessem recursos de domínios diferentes, resolvendo o bloqueio. A opção A (pontos de acesso) não resolve CORS. A opção B não aborda restrições do navegador. A opção D (Content-MD5) é irrelevante para CORS."
  },
  {
    id: 5,
    text: `Uma empresa construiu uma função AWS Lambda para converter arquivos de imagem grandes em arquivos de saída que podem ser usados em um aplicativo de visualização de terceiros. Recentemente, a empresa adicionou um novo módulo à função para melhorar a saída dos arquivos gerados. No entanto, o novo módulo aumentou o tamanho do pacote e o tempo necessário para implantar alterações no código da função.
Como um desenvolvedor pode aumentar a velocidade da implantação da função Lambda?`,
    options: [
      "Usar o AWS CodeDeploy para implantar o código da função.",
      "Usar camadas Lambda para empacotar e carregar dependências.",
      "Aumentar o tamanho da memória da função.",
      "Usar o Amazon S3 para hospedar as dependências da função."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. Camadas Lambda permitem separar dependências, reduzindo o tamanho do pacote e acelerando a implantação. A opção A (CodeDeploy) não é usada para Lambda. A opção C não afeta a implantação. A opção D adiciona complexidade sem acelerar a implantação."
  },
  {
    id: 6,
    text: `Um desenvolvedor cria um site estático para seu departamento. O desenvolvedor implanta os ativos estáticos do site em um bucket do Amazon S3 e os serve com o Amazon CloudFront. O desenvolvedor usa o controle de acesso de origem (OAC) na distribuição do CloudFront para acessar o bucket S3.
O desenvolvedor nota que os usuários podem acessar a URL raiz e páginas específicas, mas não podem acessar diretórios sem especificar um nome de arquivo. Por exemplo, /products/index.html funciona, mas /products/ retorna um erro. O desenvolvedor precisa habilitar o acesso a diretórios sem especificar um nome de arquivo sem expor o bucket S3 publicamente.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Atualizar as configurações da distribuição do CloudFront para definir index.html como o objeto raiz padrão.",
      "Atualizar as configurações do bucket do Amazon S3 e habilitar a hospedagem de sites estáticos. Especificar index.html como o documento de índice. Atualizar a política do bucket S3 para permitir acesso. Atualizar a origem da distribuição do CloudFront para usar o endpoint do site S3.",
      "Criar uma função do CloudFront que examine a URL da solicitação e anexe index.html quando diretórios estiverem sendo acessados. Adicionar a função como uma função de solicitação de visualização do CloudFront ao comportamento da distribuição do CloudFront.",
      "Criar uma resposta de erro personalizada na distribuição do CloudFront com o código de erro HTTP definido como HTTP 404 Not Found e o caminho da página de resposta como /index.html. Definir o código de resposta HTTP como HTTP 200 OK."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a correta. Uma função do CloudFront pode modificar solicitações para anexar index.html, permitindo acesso a diretórios sem expor o bucket. A opção A não resolve diretórios. A opção B expõe o bucket publicamente. A opção D trata erros, mas não resolve o acesso direto."
  },
  {
    id: 7,
    text: `Um desenvolvedor está testando um aplicativo RESTful implantado usando o Amazon API Gateway e AWS Lambda. Quando o desenvolvedor testa o login do usuário usando credenciais inválidas, o desenvolvedor recebe um erro HTTP 405: METHOD_NOT_ALLOWED. O desenvolvedor verificou que o teste está enviando a solicitação correta para o recurso.
Qual erro HTTP o aplicativo deve retornar em resposta à solicitação?`,
    options: [
      "HTTP 401",
      "HTTP 404",
      "HTTP 503",
      "HTTP 505"
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. Credenciais inválidas devem retornar HTTP 401 (Unauthorized). A opção B (404) é para recursos não encontrados. A opção C (503) é para indisponibilidade do serviço. A opção D (505) é para versões HTTP não suportadas."
  },
  {
    id: 8,
    text: `Um desenvolvedor deve usar autenticação multifator (MFA) para acessar dados em um bucket do Amazon S3 que está em outra conta AWS.
Qual operação da API do AWS Security Token Service (AWS STS) o desenvolvedor deve usar com as informações do MFA para atender a esse requisito?`,
    options: [
      "AssumeRoleWithWebIdentity",
      "GetFederationToken",
      "AssumeRoleWithSAML",
      "AssumeRole"
    ],
    correctAnswer: 3,
    explanation: "A opção D é a correta. A operação AssumeRole suporta MFA para acessar recursos em outra conta. A opção A é para identidades web. A opção B não suporta MFA. A opção C é para autenticação SAML."
  },
  {
    id: 9,
    text: `Um desenvolvedor projetou um aplicativo em uma instância do Amazon EC2. O aplicativo faz solicitações de API para objetos em um bucket do Amazon S3.
Qual combinação de etapas garantirá que o aplicativo faça as solicitações de API da maneira MAIS segura? (Escolha duas.)`,
    options: [
      "Criar um usuário IAM com permissões para o bucket S3. Adicionar o usuário a um grupo IAM.",
      "Criar uma função IAM com permissões para o bucket S3.",
      "Adicionar a função IAM a um perfil de instância. Anexar o perfil de instância à instância EC2.",
      "Criar uma função IAM com permissões para o bucket S3. Atribuir a função a um grupo IAM.",
      "Armazenar as credenciais do usuário IAM nas variáveis de ambiente na instância EC2."
    ],
    correctAnswer: [1, 2],
    explanation: "As opções B e C são corretas. Criar uma função IAM (B) e anexá-la a um perfil de instância associado ao EC2 (C) permite acesso seguro sem credenciais fixas. A opção A não é aplicada à instância. A opção D é inválida, pois funções não são atribuídas a grupos. A opção E é insegura."
  },
  {
    id: 10,
    text: `Uma função AWS Lambda requer acesso de leitura a um bucket do Amazon S3 e acesso de leitura/escrita a uma tabela do Amazon DynamoDB. A política IAM correta já existe.
Qual é a maneira MAIS segura de conceder à função Lambda acesso ao bucket S3 e à tabela DynamoDB?`,
    options: [
      "Anexar a política IAM existente à função Lambda.",
      "Criar uma função IAM para a função Lambda. Anexar a política IAM existente à função. Anexar a função à função Lambda.",
      "Criar um usuário IAM com acesso programático. Anexar a política IAM existente ao usuário. Adicionar o ID da chave de acesso do usuário e a chave de acesso secreta como variáveis de ambiente na função Lambda.",
      "Adicionar o ID da chave de acesso do usuário root da conta AWS e a chave de acesso secreta como variáveis de ambiente criptografadas na função Lambda."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. Anexar a política a uma função IAM e associar a função à Lambda é o método mais seguro, evitando credenciais fixas. A opção A não é válida diretamente. A opção C usa credenciais de usuário, menos seguras. A opção D é extremamente insegura."
  },
  {
    id: 11,
    text: `Um desenvolvedor está usando o AWS Step Functions para automatizar um fluxo de trabalho. O fluxo de trabalho define cada etapa como uma tarefa de função AWS Lambda. O desenvolvedor nota que as execuções da máquina de estados do Step Functions falham na tarefa GetResource com um erro IllegalArgumentException ou TooManyRequestsException.
O desenvolvedor deseja que a máquina de estados pare de executar quando encontrar um erro IllegalArgumentException. A máquina de estados precisa tentar novamente a tarefa GetResource uma vez após 10 segundos se encontrar um erro TooManyRequestsException. Se a segunda tentativa falhar, o desenvolvedor deseja que a máquina de estados pare de executar.
Como o desenvolvedor pode implementar a funcionalidade de repetição do Lambda sem adicionar complexidade desnecessária à máquina de estados?`,
    options: [
      "Adicionar uma tarefa de atraso após a tarefa GetResource. Adicionar um catcher à tarefa GetResource. Configurar o catcher com um tipo de erro TooManyRequestsException. Configurar o próximo passo como a tarefa de atraso. Configurar a tarefa de atraso para esperar por um intervalo de 10 segundos. Configurar o próximo passo como a tarefa GetResource.",
      "Adicionar um catcher à tarefa GetResource. Configurar o catcher com um tipo de erro TooManyRequestsException, um intervalo de 10 segundos e um valor máximo de tentativas de 1. Configurar o próximo passo como a tarefa GetResource.",
      "Adicionar um retrier à tarefa GetResource. Configurar o retrier com um tipo de erro TooManyRequestsException, um intervalo de 10 segundos e um valor máximo de tentativas de 1.",
      "Duplicar a tarefa GetResource. Renomear a nova tarefa GetResource para TryAgain. Adicionar um catcher à tarefa GetResource original. Configurar o catcher com um tipo de erro TooManyRequestsException. Configurar o próximo passo como TryAgain."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a correta. Um retrier no Step Functions lida com TooManyRequestsException com uma tentativa após 10 segundos, minimizando complexidade. A opção A adiciona tarefas desnecessárias. A opção B configura catcher incorretamente. A opção D duplica tarefas, aumentando complexidade."
  },
  {
    id: 12,
    text: `Um desenvolvedor está criando um aplicativo sem servidor que usa uma função AWS Lambda. O desenvolvedor usará o AWS CloudFormation para implantar o aplicativo. O aplicativo gravará logs no Amazon CloudWatch Logs. O desenvolvedor criou um grupo de logs em um modelo do CloudFormation para o aplicativo usar. O desenvolvedor precisa modificar o modelo do CloudFormation para tornar o nome do grupo de logs disponível para o aplicativo em tempo de execução.
Qual solução atenderá a esse requisito?`,
    options: [
      "Usar a transformação AWS::Include no CloudFormation para fornecer o nome do grupo de logs ao aplicativo.",
      "Passar o nome do grupo de logs para o aplicativo na seção de dados do usuário do modelo do CloudFormation.",
      "Usar a seção Mappings do modelo do CloudFormation para especificar o nome do grupo de logs para o aplicativo.",
      "Passar o Amazon Resource Name (ARN) do grupo de logs como uma variável de ambiente para a função Lambda."
    ],
    correctAnswer: 3,
    explanation: "A opção D é a correta. Passar o ARN do grupo de logs como variável de ambiente permite que a Lambda acesse o nome em tempo de execução. A opção A (AWS::Include) é para importar modelos. A opção B é inválida para Lambda. A opção C (Mappings) não é usada para passar valores dinâmicos."
  },
  {
    id: 13,
    text: `Um desenvolvedor está criando uma tabela do Amazon DynamoDB usando a AWS CLI. A tabela do DynamoDB deve usar criptografia do lado do servidor com uma chave de criptografia pertencente à AWS.
Como o desenvolvedor deve criar a tabela do DynamoDB para atender a esses requisitos?`,
    options: [
      "Criar uma chave gerenciada pelo cliente do AWS Key Management Service (AWS KMS). Fornecer o ARN da chave no parâmetro KMSMasterKeyId durante a criação da tabela DynamoDB.",
      "Criar uma chave gerenciada pela AWS do KMS. Fornecer o ARN da chave no parâmetro KMSMasterKeyId durante a criação da tabela DynamoDB.",
      "Criar uma chave pertencente à AWS. Fornecer o ARN da chave no parâmetro KMSMasterKeyId durante a criação da tabela DynamoDB.",
      "Criar a tabela DynamoDB com as opções de criptografia padrão."
    ],
    correctAnswer: 3,
    explanation: "A opção D é a correta. A criptografia padrão do DynamoDB usa uma chave pertencente à AWS, sem necessidade de especificar KMSMasterKeyId. As opções A e B usam chaves KMS, não exigidas. A opção C é inválida, pois chaves pertencentes à AWS não são gerenciadas pelo usuário."
  },
  {
    id: 14,
    text: `Uma empresa tem um aplicativo que é executado em várias regiões AWS. O aplicativo está enfrentando problemas de desempenho em intervalos irregulares. Um desenvolvedor deve usar o AWS X-Ray para implementar rastreamento distribuído para o aplicativo para solucionar a causa raiz dos problemas de desempenho.
O que o desenvolvedor deve fazer para atender a esse requisito?`,
    options: [
      "Usar o console do X-Ray para adicionar anotações para serviços AWS e serviços definidos pelo usuário.",
      "Usar a anotação de região que o X-Ray adiciona automaticamente para serviços AWS. Adicionar anotação de região para serviços definidos pelo usuário.",
      "Usar o daemon do X-Ray para adicionar anotações para serviços AWS e serviços definidos pelo usuário.",
      "Usar a anotação de região que o X-Ray adiciona automaticamente para serviços definidos pelo usuário. Configurar o X-Ray para adicionar anotação de região para serviços AWS."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a correta. O daemon do X-Ray coleta dados de rastreamento e adiciona anotações para serviços AWS e definidos pelo usuário. A opção A (console) não adiciona anotações dinamicamente. As opções B e D são inválidas, pois o X-Ray não adiciona anotações de região automaticamente."
  },
  {
    id: 15,
    text: `Um aplicativo está processando dados de fluxo de cliques usando o Amazon Kinesis. O fluxo de dados de cliques no Kinesis experimenta picos periódicos. A chamada da API PutRecords ocasionalmente falha e os logs mostram que a chamada falhada retorna a resposta mostrada abaixo:
 
Quais técnicas ajudarão a mitigar essa exceção? (Escolha duas.)`,
    options: [
      "Implementar tentativas com retrocesso exponencial.",
      "Usar a API PutRecord em vez de PutRecords.",
      "Reduzir a frequência e/ou tamanho das solicitações.",
      "Usar o Amazon SNS em vez do Kinesis.",
      "Reduzir o número de consumidores KCL."
    ],
    correctAnswer: [0, 2],
    explanation: "As opções A e C são corretas. Tentativas com retrocesso exponencial (A) lidam com falhas temporárias. Reduzir a frequência/tamanho das solicitações (C) evita sobrecarga. A opção B é menos eficiente. A opção D altera a arquitetura desnecessariamente. A opção E não resolve falhas de PutRecords."
  },
  {
    id: 16,
    text: `Uma empresa executa um aplicativo na AWS. O aplicativo usa uma função AWS Lambda configurada com uma fila do Amazon Simple Queue Service (Amazon SQS) chamada high priority queue como fonte de evento. Um desenvolvedor está atualizando a função Lambda com outra fila SQS chamada low priority queue como fonte de evento. A função Lambda deve sempre ler até 10 mensagens simultâneas da fila de alta prioridade antes de processar mensagens da fila de baixa prioridade. A função Lambda deve ser limitada a 100 invocações simultâneas.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Definir o tamanho do lote de mapeamento de origem de evento como 10 para a fila de alta prioridade e 90 para a fila de baixa prioridade.",
      "Definir o atraso de entrega como 0 segundos para a fila de alta prioridade e 10 segundos para a fila de baixa prioridade.",
      "Definir a concorrência máxima de mapeamento de origem de evento como 10 para a fila de alta prioridade e 90 para a fila de baixa prioridade.",
      "Definir a janela de lote de mapeamento de origem de evento como 10 para a fila de alta prioridade e 90 para a fila de baixa prioridade."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a correta. Definir a concorrência máxima do mapeamento de evento como 10 para a fila de alta prioridade e 90 para a baixa prioridade garante a prioridade e limita a 100 invocações. A opção A controla o tamanho do lote, não a prioridade. A opção B afeta a entrega, não a simultaneidade. A opção D controla o tempo de espera, não a prioridade."
  },
  {
    id: 17,
    text: `Uma empresa de visualização de dados deseja fortalecer a segurança de seus aplicativos principais. Os aplicativos são implantados na AWS em seus ambientes de desenvolvimento, teste, pré-produção e produção. A empresa precisa criptografar todas as credenciais sensíveis armazenadas. As credenciais sensíveis precisam ser rotacionadas automaticamente. Uma versão das credenciais sensíveis precisa ser armazenada para cada ambiente.
Qual solução atenderá a esses requisitos da maneira MAIS eficiente operacionalmente?`,
    options: [
      "Configurar versões do AWS Secrets Manager para armazenar diferentes cópias das mesmas credenciais em vários ambientes.",
      "Criar uma nova versão de parâmetro no AWS Systems Manager Parameter Store para cada ambiente. Armazenar as credenciais específicas do ambiente na versão do parâmetro.",
      "Configurar as variáveis de ambiente no código do aplicativo. Usar nomes diferentes para cada tipo de ambiente.",
      "Configurar o AWS Secrets Manager para criar um novo segredo para cada tipo de ambiente. Armazenar as credenciais específicas do ambiente no segredo."
    ],
    correctAnswer: 3,
    explanation: "A opção D é a correta. Criar segredos separados no Secrets Manager para cada ambiente permite rotação automática e gerenciamento eficiente. A opção A usa versões incorretamente. A opção B não suporta rotação automática. A opção C é insegura e não gerenciável."
  },
  {
    id: 18,
    text: `Um desenvolvedor está investigando um problema em parte de um aplicativo da empresa. No aplicativo, as mensagens são enviadas para uma fila do Amazon Simple Queue Service (Amazon SQS). A função AWS Lambda consulta mensagens da fila SQS e envia mensagens de e-mail usando o Amazon Simple Email Service (Amazon SES). Os usuários têm recebido mensagens de e-mail duplicadas durante períodos de alto tráfego.
Quais razões podem explicar as mensagens de e-mail duplicadas? (Escolha duas.)`,
    options: [
      "Filas SQS padrão suportam entrega de mensagens pelo menos uma vez.",
      "Filas SQS padrão suportam processamento exatamente uma vez, então as mensagens de e-mail duplicadas são devido a erro do usuário.",
      "O Amazon SES tem a autenticação DomainKeys Identified Mail (DKIM) configurada incorretamente.",
      "O tempo limite de visibilidade da fila SQS é menor ou igual ao tempo limite da função Lambda.",
      "A métrica de taxa de rejeição do Amazon SES é muito alta."
    ],
    correctAnswer: [0, 3],
    explanation: "As opções A e D são corretas. Filas SQS padrão entregam mensagens pelo menos uma vez (A), podendo causar duplicatas. Um tempo limite de visibilidade menor que o tempo limite da Lambda (D) pode fazer mensagens serem reprocessadas. A opção B é falsa, pois SQS padrão não garante exatamente uma vez. As opções C e E não causam duplicatas."
  },
  {
    id: 19,
    text: `Um desenvolvedor está construindo uma aplicação serverless que processa pedidos de clientes em tempo real usando o Amazon API Gateway e AWS Lambda. Os pedidos são armazenados em uma tabela do Amazon DynamoDB. Durante picos de tráfego, a aplicação enfrenta erros de limitação (throttling) no DynamoDB, causando falhas em algumas solicitações. O desenvolvedor deseja implementar uma solução que minimize esses erros sem alterar o código da aplicação e garanta que as solicitações sejam processadas de forma confiável.
Qual solução atenderá a esses requisitos com o MENOR esforço operacional?`,
    options: [
      "Aumentar o limite de capacidade provisionada da tabela DynamoDB para lidar com picos de tráfego.",
      "Habilitar o modo de capacidade sob demanda para a tabela DynamoDB.",
      "Criar uma fila do Amazon Simple Queue Service (Amazon SQS) para armazenar temporariamente as solicitações antes de gravá-las no DynamoDB.",
      "Configurar um cache do Amazon ElastiCache para armazenar pedidos frequentes e reduzir as gravações no DynamoDB."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. O modo de capacidade sob demanda do DynamoDB ajusta automaticamente a capacidade para picos de tráfego, eliminando erros de limitação sem alterações no código ou infraestrutura adicional. A opção A exige ajustes manuais ou automação complexa. A opção C adiciona complexidade com SQS. A opção D não resolve gravações intensivas."
  },
  {
    id: 20,
    text: `Uma empresa utiliza o AWS CloudFormation para gerenciar sua infraestrutura, incluindo uma aplicação web hospedada em instâncias do Amazon EC2 atrás de um Application Load Balancer (ALB). O time de desenvolvimento precisa implementar um mecanismo que envie notificações via Amazon Simple Notification Service (Amazon SNS) sempre que uma nova versão da aplicação for implantada com sucesso em um ambiente específico, como produção. O desenvolvedor deseja que a solução seja integrada ao CloudFormation e exija o mínimo de configuração manual.
Qual abordagem atenderá a esses requisitos da maneira MAIS eficiente?`,
    options: [
      "Criar uma função AWS Lambda que publique uma mensagem no tópico SNS. Configurar uma notificação de pilha do CloudFormation para invocar a função Lambda quando a pilha for atualizada no ambiente de produção.",
      "Configurar um alarme do Amazon CloudWatch para monitorar eventos de atualização da pilha do CloudFormation e acionar uma notificação SNS quando a atualização for concluída.",
      "Adicionar um script personalizado nas instâncias EC2 para publicar uma mensagem no tópico SNS após a implantação. Atualizar o modelo do CloudFormation para incluir o script no user data das instâncias.",
      "Criar uma regra do Amazon EventBridge que monitore eventos do CloudFormation para atualizações de pilha. Configurar a regra para publicar diretamente no tópico SNS."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. Configurar uma notificação de pilha do CloudFormation para invocar uma função Lambda é uma integração nativa, eficiente e requer configuração mínima. A opção B (CloudWatch) é menos direta e mais complexa. A opção C exige scripts adicionais nas instâncias. A opção D (EventBridge) é viável, mas menos integrada ao CloudFormation que a notificação de pilha."
  }
];

// Lista de questões ativa (será embaralhada)
let questions = [...originalQuestions];

// Estado do simulado
const examState = {
  currentQuestionIndex: 0,
  answers: {},
  markedForReview: new Set(),
  timeRemaining: 40 * 60, 
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