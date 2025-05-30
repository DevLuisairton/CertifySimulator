const originalQuestions = [
  {
    id: 1,
    text: "Uma aplicação de comércio eletrônico está sendo executada atrás de um Application Load Balancer. Um desenvolvedor observa uma carga inesperada na aplicação durante horários fora de pico. O desenvolvedor deseja analisar padrões para os endereços IP dos clientes que usam a aplicação. Qual cabeçalho HTTP o desenvolvedor deve usar para essa análise?",
    options: [
      "O cabeçalho X-Forwarded-Proto",
      "O cabeçalho X-Forwarded-Host",
      "O cabeçalho X-Forwarded-For",
      "O cabeçalho X-Forwarded-Port"
    ],
    correctAnswer: 2,
    explanation: "A opção C é a correta. O cabeçalho X-Forwarded-For contém o endereço IP do cliente que faz a solicitação, permitindo ao desenvolvedor analisar os padrões de IPs. A opção A indica o protocolo (HTTP/HTTPS), a opção B o host solicitado e a opção D a porta, nenhum dos quais fornece o IP do cliente."
  },
  {
    id: 2,
    text: "Um desenvolvedor migrou uma aplicação legada para uma função AWS Lambda. A função usa um serviço de terceiros para obter dados com uma série de chamadas de API no final de cada mês. A função processa os dados para gerar relatórios mensais. A função tem funcionado sem problemas até agora. O serviço de terceiros recentemente impôs uma restrição para permitir um número fixo de chamadas de API por minuto e por dia. Se as chamadas de API excederem o limite por minuto ou por dia, o serviço produzirá erros. A API também fornece os limites de minuto e diário no cabeçalho de resposta. Essa restrição pode estender o processo geral para vários dias, pois o processo consome mais chamadas de API do que o limite disponível. Qual é a maneira MAIS eficiente operacionalmente de refatorar a aplicação sem servidor para acomodar essa mudança?",
    options: [
      "Usar uma máquina de estados do AWS Step Functions para monitorar falhas de API. Usar o estado Wait para atrasar a chamada da função Lambda.",
      "Usar uma fila do Amazon Simple Queue Service (Amazon SQS) para armazenar as chamadas de API. Configurar a função Lambda para consultar a fila dentro dos limites de threshold da API.",
      "Usar uma métrica do Amazon CloudWatch Logs para contar o número de chamadas de API. Configurar um alarme do Amazon CloudWatch que pare a instância em execução da função Lambda quando a métrica exceder os limites de threshold da API.",
      "Usar o Amazon Kinesis Data Firehose para agrupar as chamadas de API e entregá-las a um bucket do Amazon S3 com uma notificação de evento para invocar a função Lambda."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a mais eficiente. Usar uma fila SQS para armazenar as chamadas de API permite que a função Lambda processe as chamadas dentro dos limites de taxa, controlando o ritmo das solicitações. A opção A adiciona complexidade com Step Functions. A opção C interrompe a função, mas não gerencia as taxas de chamadas. A opção D é inadequada, pois o Kinesis Data Firehose é para streaming de dados, não para controle de chamadas de API."
  },
  {
    id: 3,
    text: "Um desenvolvedor escreveu uma função AWS Lambda que é limitada por CPU. O desenvolvedor deseja garantir que a função retorne respostas rapidamente. Como o desenvolvedor pode melhorar o desempenho da função?",
    options: [
      "Aumentar a contagem de núcleos de CPU da função.",
      "Aumentar a memória da função.",
      "Aumentar a concorrência reservada da função.",
      "Aumentar o tempo limite da função."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. Aumentar a memória da função Lambda também aumenta proporcionalmente a alocação de CPU, melhorando o desempenho para funções limitadas por CPU. A opção A não é possível, pois o número de núcleos não é configurável diretamente. A opção C afeta a escalabilidade, não o desempenho individual. A opção D apenas permite que a função execute por mais tempo, sem melhorar a velocidade."
  },
  {
    id: 4,
    text: "Um desenvolvedor deve analisar problemas de desempenho com aplicações distribuídas em produção escritas como funções AWS Lambda. Essas aplicações Lambda distribuídas invocam outros componentes que compõem as aplicações. Como o desenvolvedor deve identificar e solucionar a causa raiz dos problemas de desempenho em produção?",
    options: [
      "Adicionar instruções de log às funções Lambda e usar o Amazon CloudWatch para visualizar os logs.",
      "Usar o AWS CloudTrail e examinar os logs.",
      "Usar o AWS X-Ray e examinar os segmentos e erros.",
      "Executar agentes do Amazon Inspector e analisar o desempenho."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a correta. O AWS X-Ray é projetado para rastrear e analisar solicitações em aplicações distribuídas, permitindo identificar gargalos e erros em funções Lambda. A opção A pode ajudar, mas logs do CloudWatch são menos detalhados. A opção B (CloudTrail) é para auditoria de APIs, não para desempenho. A opção D (Inspector) é para segurança, não para desempenho."
  },
  {
    id: 5,
    text: "Um desenvolvedor deseja implantar uma nova versão de uma aplicação AWS Elastic Beanstalk. Durante a implantação, a aplicação deve manter a capacidade total e evitar interrupções no serviço. Além disso, o desenvolvedor deve minimizar o custo de recursos adicionais que suportam a implantação. Qual método de implantação o desenvolvedor deve usar para atender a esses requisitos?",
    options: [
      "Tudo de uma vez",
      "Rolante com lote adicional",
      "Azul/verde",
      "Imutável"
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. A implantação 'Rolante com lote adicional' mantém a capacidade total ao adicionar instâncias temporárias durante a atualização, evitando interrupções e minimizando custos extras em comparação com azul/verde ou imutável. A opção A causa tempo de inatividade. As opções C e D requerem mais recursos, aumentando os custos."
  },
  {
    id: 6,
    text: "Um desenvolvedor observou um aumento de bugs nas funções AWS Lambda que uma equipe de desenvolvimento implantou em sua aplicação Node.js. Para minimizar esses bugs, o desenvolvedor deseja implementar testes automatizados das funções Lambda em um ambiente que simule de perto o ambiente Lambda. O desenvolvedor precisa permitir que outros desenvolvedores executem os testes localmente. O desenvolvedor também precisa integrar os testes ao pipeline de integração contínua e entrega contínua (CI/CD) da equipe antes da implantação do AWS Cloud Development Kit (AWS CDK). Qual solução atenderá a esses requisitos?",
    options: [
      "Criar eventos de amostra baseados na documentação do Lambda. Criar scripts de teste automatizados que usem o comando cdk local invoke para invocar as funções Lambda. Verificar a resposta. Documentar os scripts de teste para os outros desenvolvedores da equipe. Atualizar o pipeline CI/CD para executar os scripts de teste.",
      "Instalar um framework de teste unitário que reproduza o ambiente de execução Lambda. Criar eventos de amostra baseados na documentação do Lambda. Invocar a função handler usando um framework de teste unitário. Verificar a resposta. Documentar como executar o framework de teste unitário para os outros desenvolvedores da equipe. Atualizar o pipeline CI/CD para executar o framework de teste unitário.",
      "Instalar a ferramenta CLI do AWS Serverless Application Model (AWS SAM). Usar o comando sam local generate-event para gerar eventos de amostra para os testes automatizados. Criar scripts de teste automatizados que usem o comando sam local invoke para invocar as funções Lambda. Verificar a resposta. Documentar os scripts de teste para os outros desenvolvedores da equipe. Atualizar o pipeline CI/CD para executar os scripts de teste.",
      "Criar eventos de amostra baseados na documentação do Lambda. Criar um contêiner Docker a partir da imagem base Node.js para invocar as funções Lambda. Verificar a resposta. Documentar como executar o contêiner Docker para os outros desenvolvedores da equipe. Atualizar o pipeline CI/CD para executar o contêiner Docker."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a mais eficiente. O AWS SAM CLI permite simular o ambiente Lambda localmente com comandos como sam local invoke e sam local generate-event, facilitando testes realistas. A integração com CI/CD é direta, e a documentação para outros desenvolvedores é simples. A opção A usa CDK, que não é ideal para testes locais de Lambda. A opção B é menos precisa, pois frameworks de teste unitário não simulam o ambiente Lambda completamente. A opção D adiciona complexidade com Docker."
  },
  {
    id: 7,
    text: "Um desenvolvedor está solucionando problemas em uma aplicação que usa o Amazon DynamoDB na região us-west-2. A aplicação é implantada em uma instância do Amazon EC2. A aplicação requer permissões somente de leitura para uma tabela chamada Cars. A instância EC2 tem uma função IAM anexada com a seguinte política IAM: [Política fornecida]. Quando a aplicação tenta ler da tabela Cars, ocorre um erro de Acesso Negado. Como o desenvolvedor pode resolver esse erro?",
    options: [
      "Modificar o recurso da política IAM para ser 'arn:aws:dynamodb:us-west-2:account-id:table/*'.",
      "Modificar a política IAM para incluir a ação dynamodb:*.",
      "Criar uma política de confiança que especifique o principal do serviço EC2. Associar a função à política.",
      "Criar um relacionamento de confiança entre a função e dynamodb.amazonaws.com."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. O erro ocorre porque a política IAM provavelmente especifica um recurso incorreto. Alterar o recurso para 'arn:aws:dynamodb:us-west-2:account-id:table/*' concede acesso de leitura à tabela Cars. A opção B concede permissões excessivas, violando o princípio do menor privilégio. As opções C e D são irrelevantes, pois o problema não está relacionado à política de confiança."
  },
  {
    id: 8,
    text: "Ao usar o AWS Encryption SDK, como o desenvolvedor acompanha as chaves de criptografia de dados usadas para criptografar os dados?",
    options: [
      "O desenvolvedor deve rastrear manualmente as chaves de criptografia de dados usadas para cada objeto de dados.",
      "O SDK criptografa a chave de criptografia de dados e a armazena (criptografada) como parte do texto cifrado retornado.",
      "O SDK armazena as chaves de criptografia de dados automaticamente no Amazon S3.",
      "A chave de criptografia de dados é armazenada nos Userdata da instância EC2."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. O AWS Encryption SDK criptografa a chave de criptografia de dados e a inclui no texto cifrado retornado, eliminando a necessidade de rastreamento manual. A opção A é impraticável. A opção C é falsa, pois o S3 não é usado automaticamente. A opção D é irrelevante, pois Userdata não é usado para chaves."
  },
  {
    id: 9,
    text: "Uma aplicação que é executada no AWS Lambda requer acesso a objetos altamente confidenciais específicos em um bucket do Amazon S3. De acordo com o princípio do menor privilégio, a empresa concede acesso ao bucket S3 usando apenas credenciais temporárias. Como o desenvolvedor pode configurar o acesso ao bucket S3 da maneira MAIS segura?",
    options: [
      "Codificar diretamente as credenciais necessárias para acessar os objetos S3 no código da aplicação. Usar as credenciais para acessar os objetos S3 necessários.",
      "Criar uma chave de acesso secreta e um ID de chave de acesso com permissão para acessar o bucket S3. Armazenar a chave e o ID no AWS Secrets Manager. Configurar a aplicação para recuperar o segredo do Secrets Manager e usar as credenciais para acessar os objetos S3.",
      "Criar uma função de execução para a função Lambda. Anexar uma política à função que concede acesso a objetos específicos no bucket S3.",
      "Criar uma chave de acesso secreta e um ID de chave de acesso com permissão para acessar o bucket S3. Armazenar a chave e o ID como variáveis de ambiente no Lambda. Usar as variáveis de ambiente para acessar os objetos S3 necessários."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a mais segura. Usar uma função de execução Lambda com uma política IAM que concede acesso apenas aos objetos S3 específicos segue o princípio do menor privilégio e elimina a necessidade de gerenciar credenciais. A opção A é insegura devido à codificação direta. As opções B e D armazenam credenciais de longo prazo, o que é menos seguro."
  },
  {
    id: 10,
    text: "Um desenvolvedor tem código armazenado em um bucket do Amazon S3. O código deve ser implantado como uma função AWS Lambda em várias contas na mesma região AWS que o bucket S3. Um modelo do AWS CloudFormation que é executado para cada conta implantará a função Lambda. Qual é a maneira MAIS segura de permitir que o CloudFormation acesse o código Lambda no bucket S3?",
    options: [
      "Conceder à função de serviço do CloudFormation as permissões S3 ListBucket e GetObject. Adicionar uma política de bucket ao Amazon S3 com o principal 'AWS': [números das contas].",
      "Conceder à função de serviço do CloudFormation a permissão S3 GetObject. Adicionar uma política de bucket ao Amazon S3 com o principal '*'.",
      "Usar um link baseado em serviço para conceder à função Lambda as permissões S3 ListBucket e GetObject, adicionando explicitamente o número da conta do bucket S3 no recurso.",
      "Usar um link baseado em serviço para conceder à função Lambda a permissão S3 GetObject. Adicionar um recurso '*' para permitir acesso ao bucket S3."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a mais segura. Conceder permissões específicas (ListBucket e GetObject) à função do CloudFormation e usar uma política de bucket com os números das contas como principal garante acesso controlado. A opção B é insegura devido ao principal '*'. As opções C e D mencionam 'link baseado em serviço', que não é aplicável ao CloudFormation ou S3."
  },
  {
    id: 11,
    text: "Um desenvolvedor em uma empresa precisa criar uma pequena aplicação que faz a mesma chamada de API uma vez por dia em um horário designado. A empresa ainda não possui infraestrutura na Nuvem AWS, mas deseja implementar essa funcionalidade na AWS. Qual solução atende a esses requisitos da maneira mais eficiente operacionalmente?",
    options: [
      "Usar um job cron do Kubernetes que é executado no Amazon Elastic Kubernetes Service (Amazon EKS).",
      "Usar um job agendado crontab no Linux Amazon que é executado no Amazon EC2.",
      "Usar uma função AWS Lambda que é invocada por um evento agendado do Amazon EventBridge.",
      "Usar um job do AWS Batch que é submetido a uma fila de jobs do AWS Batch."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a mais eficiente. Usar uma função Lambda com um evento agendado do EventBridge é uma solução sem servidor, simples e de baixa manutenção para executar uma chamada de API diariamente. As opções A e B exigem gerenciamento de infraestrutura (EKS ou EC2). A opção D é mais complexa, adequada para processamento em lote, não para uma única chamada de API."
  },
  {
    id: 12,
    text: "Um desenvolvedor está construindo uma aplicação sem servidor baseada no AWS Lambda. O desenvolvedor inicializa o kit de desenvolvimento de software (SDK) da AWS fora da função handler do Lambda. Qual é o benefício PRINCIPAL dessa ação?",
    options: [
      "Melhora a legibilidade e a convenção estilística.",
      "Aproveita a reutilização do ambiente de execução.",
      "Fornece melhor tratamento de erros.",
      "Cria uma nova instância do SDK para cada invocação."
    ],
    correctAnswer: "B",
    explanation: "A opção B é a correta. Inicializar o SDK fora da função handler permite reutilizar a instância do SDK em invocações subsequentes no mesmo ambiente de execução, reduzindo o tempo de inicialização e melhorando a eficiência no código reutilizado. A opção A é secundária, a opção C não é diretamente afetada, e a opção D é incorreta, pois a reutilização é o objetivo."
  },
  {
    id: 13,
    text: "Uma empresa está usando o Amazon RDS como banco de dados backend para sua aplicação. Após uma campanha de marketing recente, um aumento nas solicitações de leitura ao banco de dados aumentou a latência de recuperação de dados. A empresa decidiu implementar uma camada de cache na frente do banco de dados. O conteúdo em cache deve ser criptografado e altamente disponível. Qual solução atenderá a esses requisitos?",
    options: [
      "Amazon CloudFront",
      "Amazon ElastiCache para Memcached",
      "Amazon ElastiCache para Redis no modo cluster",
      "Amazon DynamoDB Accelerator (DAX)"
    ],
    correctAnswer: 2,
    explanation: "A opção C é a correta. O ElastiCache para Redis no modo cluster suporta criptografia em repouso e trânsito, além de alta disponibilidade com replicação. A opção A é para entrega de conteúdo web, não para cache de banco de dados. A opção B (Memcached) não suporta criptografia ou alta disponibilidade. A opção D é específica para DynamoDB, não para RDS."
  },
  {
    id: 14,
    text: "Para uma implantação usando o AWS CodeDeploy, qual é a ordem de execução dos hooks para implantações in-place?",
    options: [
      "BeforeInstall -> ApplicationStop -> ApplicationStart -> AfterInstall",
      "ApplicationStop -> BeforeInstall -> AfterInstall -> ApplicationStart",
      "BeforeInstall -> ApplicationStop -> ValidateService -> ApplicationStart",
      "ApplicationStop -> BeforeInstall -> ValidateService -> ApplicationStart",
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. A ordem de execução dos hooks para implantações in-place no CodeDeploy é: ApplicationStop (para parar a aplicação existente), BeforeInstall (antes da instalação da nova versão), AfterInstall (após a instalação), e ApplicationStart (para iniciar a nova versão). As opções A, C, e D não seguem a sequência correta."
  },
  {
    id: 15,
    text: "Um desenvolvedor em uma empresa criou recentemente uma aplicação sem servidor para processar e exibir dados de relatórios financeiros. A interface de usuário (UI) da aplicação permite que os usuários selecionem e iniciem o processamento de arquivos. A UI exibe uma mensagem quando o resultado está disponível para visualização. A aplicação usa o AWS Step Functions com funções para processar os arquivos. O desenvolvedor usou o Amazon API Gateway e funções Lambda para criar uma API para suportar a UI. A equipe de UI da empresa que a solicitação para processar um arquivo frequentemente retorna erros de timeout devido ao tamanho ou complexidade dos arquivos. A equipe de UI deseja que a API forneça uma resposta imediata para que a UI possa exibir uma mensagem enquanto os arquivos estão sendo processados. O processo backend invocado pela API precisa enviar uma mensagem de e-mail quando o processamento do relatório estiver concluído. O que o desenvolvedor deve fazer para configurar a API para atender a esses requisitos?",
    options: [
      "Alterar a rota do API Gateway para adicionar um cabeçalho header X-Amz-Invocation-Type com um valor estático fixo de 'Event' na solicitação de integração. Implantar o estágio do API Gateway para aplicar as alterações.",
      "Alterar a configuração da função que implementa Lambda a solicitação para processar um arquivo. Configurar a idade máxima do evento para que a função Lambda seja executada de forma assíncrona.",
      "Alterar o valor de timeout do API Gateway para corresponder ao valor de timeout limite da função Lambda. Implantar o estágio do API Gateway para aplicar as alterações.",
      "Alterar a rota do API Gateway para adicionar um cabeçalho X-Amz-Target header com um valor estático de 'Async' na solicitação de integração. Implantar o estágio do API Gateway para aplicar as alterações."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. Configurar o header X-Amz-Invocation-Type como 'Event' no API Gateway faz com que a invocação da Lambda seja assíncrona, permitindo uma resposta imediata ao cliente enquanto o processamento ocorre. A mensagem de e-mail pode ser enviada pelo backend após o processamento. A opção B é incorreta, pois a 'idade máxima' não controla a assincronia. A opção C não resolve o problema de timeout. A opção D é inválida, pois X-Amz-Target não é usado para invocações assíncronas."
  },
  {
    id: 16,
    text: "Um desenvolvedor tem uma aplicação composta por várias funções AWS Lambda diferentes. As funções Lambda personalizadas usam algumas das mesmas dependências. Para evitar problemas de segurança, relacionados, o desenvolvedor está constantemente atualizando as dependências de todas as funções Lambda. O resultado é um esforço duplicado para cada função. Como o desenvolvedor pode manter as dependências das funções atualizadas de forma atualizada com a MENOR complexidade adicional?",
    options: [
      "Definir uma janela de manutenção para as funções para garantir que as funções recebam cópias atualizadas das dependências.",
      "Atualizar as funções para a versão mais recente do ambiente de runtime.",
      "Definir uma camada de função que contenha todas as dependências compartilhadas.",
      "Usar um repositório do AWS CodeCommit para hospedar as dependências em um local centralizado."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a mais eficiente. Uma camada Lambda permite centralizar dependências compartilhadas, simplificando atualizações e reduzindo duplicação. A opção A adiciona sobrecarga manual. A opção B não resolve o problema das dependências. A opção D requer gerenciamento adicional do repositório."
  },
  {
    id: 17,
    text: "Uma app mobile armazena postagens de blog em uma tabela do Amazon DynamoDB. Milhões de posts são adicionados todos os dias, e cada postagem representa um item na tabela. O aplicativo móvel requer apenas posts recentes. Qualquer postagem com mais de 48 horas pode ser removida. Qual é a maneira mais econômica de excluir as postagens com mais de 48 anos?",
    options: [
      "Para cada item, adicione um novo atributo de tipo String com um carimbo de data/hora definido como o momento da criação do post do blog. Criar um script para encontrar posts antigos com uma varredura completa da tabela e remover posts com mais de 48 horas usando a operação BatchWriteItem da API. Agendar um trabalho cron em uma instância Amazon EC2 uma vez por hora para iniciar o script.",
      "Para cada item, adicione um novo atributo de tipo String com um carimbo de data/hora definido como o momento da criação do post do blog. Criar um script para encontrar posts antigos com uma varredura completa da tabela e remover posts com mais de 48 horas usando a operação BatchWriteItem da API. Colocar o script em uma imagem de contêiner. Agendar uma tarefa do Amazon Elastic Container Service (Amazon ECS) no AWS Fargate que invoca o contêiner a cada 5 minutos.",
      "Para cada item, adicione um novo atributo de tipo Date com um carimbo de data/hora definido para 48 horas após a criação do post do blog. Criar um índice secundário global (GSI) que utilize o novo atributo como chave de ordenação. Criar uma função AWS Lambda que faça referência ao GSI e remova itens expirados usando a operação BatchWriteItem da API. Agendar a função com um evento do Amazon CloudWatch a cada minuto.",
      "Para cada item, adicione um novo atributo de tipo Number com um carimbo de data/hora definido para 48 horas após a criação do post do blog. Configurar a tabela DynamoDB com um TTL que faça referência ao novo atributo."
    ],
    correctAnswer: 3,
    explanation: "A opção D é a mais econômica. Configurar o Time to Live (TTL) no DynamoDB permite que o serviço remova automaticamente itens expirados (após 48 horas) sem custos adicionais de execução ou gerenciamento. As opções A e B requerem varredura manual da tabela, aumentando custos. A opção C usa um GSI e Lambda, o que é mais caro e complexo."
  },
  {
    id: 18,
    text: "Um desenvolvedor está modificando uma função AWS Lambda existente. Ao verificar o código, verificando, o desenvolvedor percebe valores de parâmetros codificados para um nome de usuário, senha, banco de dados, host e porta do Amazon RDS para SQL Server. Também há valores de parâmetros codificados para uma tabela do Amazon S3, um bucket do DynamoDB e um tópico SNS do Amazon Simple Notification Service (Amazon). O desenvolvedor deseja armazenar os valores de parâmetros de forma segura fora do código em um formato seguro e ativar a rotação de credenciais. O desenvolvedor também deseja poder reutilizar os valores de parâmetros de outras aplicações e atualizar os valores de parâmetros sem modificar o código. Qual solução a solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
    options: [
      "Criar um segredo de banco de dados do RDS no AWS Secrets Manager. Definir o nome de usuário, senha, banco de dados, host e porta. Ativar a rotação do segredo. Criar variáveis de ambiente criptografadas do Lambda para a tabela do banco de dados, bucket S3 e tópico SNS.",
      "Criar um banco de dados secreto do RDS no AWS Secrets Manager. Definir o nome de usuário, senha, banco de dados, host e porta. Ativar a criação de segredo. Criar parâmetros SecureString no AWS Key Management Systems Manager Parameter Store para a tabela DynamoDB, bucket S3 e tópico SNS.", "Criar parâmetros de banco de dados RDS no AWS Systems Manager Parameter Store para o nome de usuário, senha, banco de dados, host e sistema de dados, host e porta. Criar variáveis de ambiente criptografadas do ambiente Lambda para a tabela DynamoDB, bucket do S3 e tópico SNS. Criar uma função e definir a lógica para a tarefa de criar credenciais de rotação. Agendar a tarefa de rotação de credenciais no Amazon EventBridge.",
      "Crie parâmetros de banco de dados RDS no AWS Systems Manager Parameter Store para o nome de usuário, senha, banco de dados, host e porta. Armazene a tabela DynamoDB, o bucket S3 e o tópico SNS no Amazon S3. Crie uma função Lambda e defina a lógica para a rotação de credenciais. Invoque a função Lambda em um cronograma."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a mais eficiente. O AWS Secrets Manager suporta rotação automática para credenciais de RDS, e o Parameter Store é ideal para armazenar parâmetros SecureString para DynamoDB, S3 e SNS, permitindo reutilização e atualizações sem modificar o código. A opção A usa variáveis de ambiente, menos recomendadas para segredos. As opções C e D exigem gerenciamento manual de rotação, aumentando a sobrecarga."
  },
  {
    id: 19,
    text: "Um desenvolvedor acessa o AWS Code por SSH por meio de SSH. As chaves SSH configuradas para acessar o acesso ao AWS Code estão vinculadas a um usuário com permissões [permissões fornecidas]. O desenvolvedor precisa criar/excluir branches de ramificação. Quais permissões específicas do IAM precisam ser adicionadas com base no princípio do menor privilégio?",
    options: [
      "\"codecommit: CreateBranch\", \"codecommit: DeleteBranch\"",
      "\"codecommit: Put*\"",
      "\"codecommit: Update*\"",
      "\"codecommit: *\""
    ],
    correctAnswer: "A",
    explanation: "A opção é a correta. Adicionar permissões específicas 'codecommit: CreateBranch' e 'codecommit: DeleteBranch' segue o princípio do menor privilégio, permitindo apenas as ações necessárias. As opções B, C e D concedem permissões excessivas, violando o princípio do menor privilégio."
  },
  {
    id: 20,
    text: "Uma aplicação implantada no Amazon EC2 está usando uma aplicação que utiliza o Amazon DynamoDB. A aplicação chama a API REST do DynamoDB. Periodicamente, a aplicação apresenta um erro de ProvisionedThroughputExceededException quando a aplicação grava em uma tabela do DynamoDB. Quais soluções mitigarão esse erro da maneira mais econômica possível? (Escolha duas opções.)",
    options: [
      "Modificar o código da aplicação para realizar tentativas de repetição com aumento exponencial backoff.",
      "Modificar a aplicação para usar os SDKs do cliente AWS para o DynamoDB.",
      "Aumentar a capacidade de leitura e escrita de throughput da tabela do DynamoDB.",
      "Criar um Amazon DynamoDB Accelerator (DAX para a tabela do DynamoDB) para a tabela do DynamoDB.",
      "Criar uma segunda tabela para o DynamoDB. Distribuir as leituras e gravações entre as duas tabelas."
    ],
    correctAnswer: [0, 1],
    explanation: "As opções A e B são as mais econômicas. Implementar repetições com aumento exponencial (opção A) lida com erros de throughput excedido sem aumentar custos. Usar os SDKs do AWS (opção B) inclui repetições automáticas, reduzindo erros sem custos adicionais. A opção C aumenta os custos devido ao provisionamento extra. As opções D e E adicionam complexidade e custos significativos."
  },
  {
    id: 21,
    text: "Quando um desenvolvedor tenta executar um projeto no AWS CodeBuild, ocorre um erro porque o tamanho combinado de todas as variáveis de ambiente excede o limite máximo permitido. Qual é a solução recomendada?",
    options: [
      "Adicionar o comando 'export LC_ALL=\"en_US.utf8\"' à seção de pré-build para garantir a localização POSIX.",
      "Usar o Amazon Cognito para armazenar um grande número de pares chave-valor como variáveis de ambiente.",
      "Atualizar as configurações do projeto de build para usar um bucket do Amazon S3 para armazenar um grande número de variáveis de ambiente.",
      "Usar o AWS Systems Manager Parameter Store para armazenar um grande número de variáveis de ambiente."
    ],
    correctAnswer: 3,
    explanation: "A opção D é a correta. O AWS Systems Manager Parameter Store permite armazenar de forma segura um grande número de variáveis de ambiente, contornando os limites de tamanho do CodeBuild. A opção A não resolve o problema de limite de caracteres. A opção B é inadequada, pois o Amazon Cognito é voltado para autenticação. A opção C não é compatível diretamente com o uso de variáveis no CodeBuild."
  },
  {
    id: 22,
    text: "Uma empresa está expandindo a compatibilidade de seu aplicativo móvel de compartilhamento de fotos para centenas de dispositivos adicionais com dimensões e resoluções de tela únicas. As fotos são armazenadas no Amazon S3 em seu formato original e resolução. A empresa usa uma distribuição do Amazon para CloudFront para servir as fotos. O aplicativo inclui a dimensão e a resolução da tela como parâmetros GET em cada solicitação. Um desenvolvedor precisa implementar uma solução que otimize as fotos fornecidas a cada dispositivo para reduzir o tempo de carregamento e aumentar a qualidade da foto. Qual solução atenderá a esses requisitos da maneira mais econômica?",
    options: [
      "Usar operações em lote do Amazon S3 para invocar uma função do AWS Lambda@ para criar novas variantes das fotos com as dimensões e resoluções necessárias. Criar um recurso dinâmico de origem do CloudFront que mapeia automaticamente a solicitação de cada dispositivo para a variante de foto correspondente.",
      "Usar operações em lote do Amazon S3 para invocar uma função do AWS Lambda para criar novas versões variantes das fotos com as dimensões e resoluções requeridas. Criar uma função Lambda@Edge para rotear solicitações para a variante de foto correspondente usando os cabeçalhos de solicitação.",
      "Criar uma função Lambda@Edge que otimize as crie fotos sob demanda e retorne as fotos como uma resposta. Alterar a política de cache TTL do CloudFront para o valor máximo possível.",
      "Crie uma função Lambda@Edge que otimize as fotos sob demanda e armazena uma cópia das fotos processadas no Amazon S3 para solicitações subsequentes."
    ],
    correctAnswer: "B",
    explanation: "A opção B é a mais econômica a mais eficiente. Usar operações em lote do S3 para criar variantes de fotos e uma função Lambda@Edge para rotear solicitações com base nos headers (como dimensões do dispositivo) otimiza a entrega sem processamento repetitivo. A opção A requer um 'origem dinâmica' complexo, não suportado nativamente. As opções C e D processam fotos sob demanda, aumentando custos de Lambda@Edge."
  },
  {
    id: 23,
    text: "Uma empresa está desenvolvendo uma aplicação para negociação de ações no mercado de ações. A aplicação requer uma aplicação que exige uma latência de sub-milissegundo para o processamento de solicitações de negociação. A empresa usa o Amazon para armazenar DynamoDB para armazenar todos os dados de negociação que são usados para processar cada solicitação de negociação. Uma equipe de desenvolvimento realiza testes de carga na aplicação e constata que o tempo de recuperação de dados é maior do que o esperado. A equipe de desenvolvimento precisa de uma solução que reduza o tempo de recuperação de dados com o menor esforço possível. Qual solução atende a esses requisitos?",
    options: [
      "Adicionar índices secundários locais (por exemplo, LSIs) para os dados de negociação.",
      "Armazenar os dados de negociação no Amazon S3 e usar o S3 Transfer Acceleration.",
      "Adicionar tentativas de repetição com aumento exponencial para consultas do DynamoDB.",
      "Usar o Amazon DynamoDB Accelerator (DAX para armazenar os dados de negociação em cache)."
    ],
    correctAnswer: 3,
    explanation: "A opção D é a mais eficiente. O DynamoDB Accelerator (DAX) fornece cacheamento de baixa latência para consultas, reduzindo significativamente o tempo de recuperação de dados com configuração mínima. A opção A não melhora a latência diretamente. A opção B é inviável, pois o S3 não é adequado para dados transacionais de baixa latência. A opção C lida com erros, não com desempenho."
  },
  {
    id: 24,
    text: "Um desenvolvedor está trabalhando em uma aplicação Python que é executada em instâncias do Amazon EC2. O desenvolvedor deseja ativar o rastreamento de solicitações da aplicação para depurar problemas de desempenho no código. Qual combinação de ações o desenvolvedor deve tomar para atingir esse objetivo? (Escolha duas opções.)",
    options: [
      "Instalar o agente do Amazon CLI na AWS nas instâncias CloudWatch.",
      "Instalar o daemon do AWS X-Ray na nas instâncias do EC2.",
      "Configurar a aplicação para gravar logs formatados em JSON no /var/log/cloudwatch/.",
      "Configurar a aplicação para gravar dados de rastreamento no /var/log/xray/.",
      "Instalar e configurar o AWS X-Ray SDK para Python no na aplicação."
    ],
    correctAnswer: [1, 4],
    explanation: "As opções B e E são necessárias. Instalar o daemon do AWS X-Ray (opção B) nas instâncias EC2 permite coletar dados de rastreamento. O AWS X-Ray SDK para Python (opção E) instrumenta o código para enviar traços ao X-Ray. A opção A é para monitoramento, não rastreamento. As opções C e D não são caminhos padrão para X-Ray ou CloudWatch."
  },
  {
    id: 25,
    text: "Uma empresa está desenvolvendo uma aplicação sem servidor no AWS. A aplicação usa uma função do AWS Lambda@ para processar pedidos de clientes 24 horas por dia, 7 dias por semana. A função lambda chama uma API HTTP de um fornecedor externo para processar pagamentos. Durante testes de carga, um desenvolvedor descobre que a API de processamento de pagamentos ocasionalmente expira e retorna erros. A empresa espera considerar que algumas chamadas da API de processamento de pagamento retornarão erros. A empresa deseja que a equipe de suporte receba notificações em tempo real apenas notificações quando a taxa de erro da API externa de processamento de pagamentos exceder 5% do número total de erros de transações em uma hora. Os desenvolvedores precisam usar um tópico existente do Amazon Simple Notification Service (Amazon SNS) que está configurado para notificar a equipe de suporte para a notificação da equipe de suporte. Qual solução atenderá a esses requisitos?",
    options: ["A",
      "Escrever os resultados das chamadas da API de processamento de pagamentos para o Amazon CloudWatch. Usar o Amazon Insights do CloudWatch para consultar os logs do CloudWatch. Agendar uma função para verificar os logs do CloudWatch e notificar o tópico SNS existente.",
      "Publicar métricas personalizadas que registram os erros da API de processamento de pagamento externa no CloudWatch. Configurar um alarme do Amazon CLI para notificar o tópico SNS existente no CloudWatch quando a taxa de erro ultrapassar a taxa especificada.",
      "Publicar os resultados das chamadas da API de processamento de pagamentos externa para um novo tópico no Amazon SNS topic. Inscrever os membros da equipe de suporte para o novo tópico SNS topic.",
      "Escrever os resultados das chamadas da API de processamento de pagamento externa para o Amazon S3. Agendar uma consulta do Amazon Athena para executar em intervalos regulares regularmente. Configurar o Athena para enviar notificações para o tópico SNS existente quando a taxa de erro exceder a taxa especificada."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. Publicar métricas personalizadas para o CloudWatch e configurar um alarme para notificar o tópico SNS quando a taxa de erro exceder 5% é eficiente e em tempo real. A opção A requer consultas manuais ou agendadas, menos responsivas. A opção C cria um novo tópico, o que não é necessário. A opção D é complexa, pois envolve S3 e Athena, com maior latência."
  },
  {
    id: 26,
    text: "Uma empresa tem uma aplicação que é executada como uma série de funções do AWS Lambda@. Cada função Lambda recebe dados de um tópico do Amazon Simple Notification Service (Amazon SNS) e grava os dados em uma instância de banco de dados Amazon Aurora. Para cumprir uma política de segurança da informação, a empresa deve garantir que todas as funções Lambda usem uma única string de conexão de banco de dados criptografada de forma segura para acessar o Aurora. Qual solução atenderá a esses requisitos?",
    options: [
      "Usar autenticação de banco de dados do IAM para o Aurora para habilitar conexões seguras de banco de dados para todas as funções personalizadas.",
      "Armazenar as credenciais e ler as credenciais de uma instância de banco de dados do Amazon RDS DB criptografada.",
      "Armazenar as credenciais no AWS Systems Manager Parameter Store como um parâmetro de string segura.",
      "Usar variáveis de ambiente do Lambda com uma chave compartilhada compartilhada do AWS Key Management Service (AWS KMS) para criptografia."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a correta. O AWS Systems Manager Parameter Store com SecureString armazena a string de conexão de forma segura, criptografada, e permite reutilização por várias funções Lambda. A opção A é válida para autenticação, mas não armazena strings de conexão. A opção B é confusa e não prática. A opção D é menos segura, pois variáveis de ambiente não são ideais para segredos."
  },
  {
    id: 27,
    text: "Um desenvolvedor está solucionando problemas em uma API do Amazon API Gateway. Os clientes estão recebendo erros de resposta HTTP 400 quando tentam acessar um endpoint da API. Como o desenvolvedor pode determinar a causa dos erros?",
    options: [
      "Criar um fluxo de entrega do Amazon Data Firehose para receber logs de chamadas de API do Gateway. Configurar o Amazon Logs como o destino do fluxo de entrega do CloudWatch.",
      "Ativar o AWS Insights do CloudTrail e criar um trilho. Especificar o Amazon Resource Name (ARN) do trilho para o estágio da API.",
      "Ativar o AWS X-Ray para o estágio da API. Criar um grupo de log do Amazon Logs do CloudWatch. Especificar o criar o Amazon Resource Name (ARN) do grupo de log para o grupo da API.",
      "Ativar o habilitar o log de execução e de acesso no Amazon CloudWatch Logs para o estágio da API do estágio da API. Criar um grupo no CloudWatch Logs. Especificar o grupo de log do CloudWatch Logs do grupo de log para a API."
    ],
    correctAnswer: "C",
    explanation: "A opção C é a correta. Ativar logs de execução e acesso no CloudWatch para o estágio da API permite registrar detalhes das solicitações, incluindo erros HTTP 400, facilitando a diagnose. A opção A é inválida, pois o Kinesis não é usado para logs do API Gateway. A opção B (CloudTrail) é para auditoria, não para depuração de erros de solicitação. A opção C usa X-Ray, que é útil, mas menos direta para logs de erro."
  },
  {
    id: 28,
    text: "Uma empresa desenvolveu uma aplicação de API na AWS usando o Amazon CloudFront, o Amazon API Gateway e o AWS Lambda@. A API tem no mínimo quatro rodadas de solicitações por segundo. Um desenvolvedor percebe que muitos usuários da API executam a mesma consulta usando o método POST. O desenvolvedor deseja armazenar em cache as solicitações POST para otimizar os recursos da API. Qual solução exibirá esses requisitos?",
    options: [
      "Configurar o cache do Amazon CloudFront. Atualizar a API para retornar conteúdo em cache com base nos cabeçalhos de solicitação padrão.",
      "Substituir o método de cache no estágio selecionado do API Gateway. Selecionar o método POST.",
      "Salvar a última solicitação de resposta no diretório /tmp/ do Lambda. Atualizar o diretório da função para verificar o Lambda /tmp/.",
      "Salvar a última solicitação no AWS Systems Manager. Modificar o parâmetro da função para recuperar a última solicitação de resposta do Parameter Store."
    ],
    correctAnswer: "B",
    explanation: "A opção está correta. O API Gateway permite habilitar cache para métodos específicos, incluindo POST, no nível do estágio, reduzindo a carga nos recursos da API. A opção A (Cloudfront) é para conteúdo estático, não para APIs dinâmicas. As opções C e D adicionam complexidade desnecessária e não são escaláveis."
  },
  {
    id: 29,
    text: "Uma empresa está desenvolvendo uma aplicação de microservices que consiste em muitas funções do AWS Lambda personalizadas. A equipe de gerenciamento de desenvolvimento deseja usar modelos do AWS SAM Templates (AWS Application Serverless Application Model) para testar automaticamente as funções de teste Lambda. A equipe de desenvolvimento planeja testar uma pequena porcentagem de tráfego que é direcionado para novas atualizações antes da equipe se comprometer com uma implantação completa da aplicação. Qual combinação dessas ações atenderá a esses requisitos da maneira mais eficiente operacionalmente mais eficiente? (Escolha duas opções.)",
    options: [
      "Usar comandos da CLI do AWS SAM CLI em AWS CodeDeploy para invocar os testes das funções para testar a implantação do Lambda.",
      "Declarar o destino da opção EventBridgeConfigure na configuração do Lambda com configurações de funções OnSuccess e OnFailure.",
      "Habilitar implantações graduais por meio de modelos do SAM templates.",
      "Definir o tipo de preferência de implantação como Canary10Percent30Minutes. Usar hooks para testar a implantação.",
      "Atribuir o tipo de preferência de implantação do tipo como Linear10PercentEvery10Minutes30Minutes. Usar hooks para testar a implantação."
    ],
    correctAnswer: [2, 3],
    explanation: "As opções C e D são as mais corretas. Habilitar implantações graduais nos modelos SAM (opção C) e definir uma preferência como Canary10Percent30Minutes (opção D) permite testar uma pequena quantidade de tráfego antes da implantação completa, com hooks para validação. A opção A é inadequada, pois o SAM não se integra diretamente com o CodeDeploy para testes. A opção B não está relacionada a testes de tráfego. A opção E é uma alternativa válida, mas menos específica que D."
  },
  {
    id: 30,
    text: "Uma empresa está usando o AWS CloudFormation para implantar uma aplicação de duas camadas. A aplicação usará o Amazon S3 como seu banco de dados de backend. A empresa deseja uma solução que gere aleatoriamente a senha do banco de dados durante a implantação. A solução ideal também deve realizar a rotação automática da senha do banco de dados sem exigir alterações na aplicação. Qual é a solução MAIS eficiente é a solução operacional eficiente que atende a esses requisitos?",
    options: [
      "Usar uma função do AWS Lambda como um recurso personalizado do Lambda CloudFormation para gerar e gerenciar a rotar a senha.",
      "Usar um recurso do AWS Systems Manager Parameter Store com o tipo de dados SecureString para criar e gerenciar a rotar a senha.",
      "Usar um daemon cron no host da aplicação do para gerar a gerenciar e rotar a senha.",
      "Usar um recurso do AWS Manager Secrets Manager para gerar a gerenciar e rotar a senha."
    ],
    correctAnswer: 3,
    explanation: "A opção D é a mais eficiente. O AWS Secrets Manager suporta geração automática de senhas e rotação automática para RDS, sem necessidade de código adicional. A opção A requer desenvolvimento personalizado. A opção B não suporta rotação automática para RDS. A opção C adiciona sobrecarga operacional."
  },
  {
    id: 31,
    text: "Um desenvolvedor foi solicitado a criar uma função do AWS Lambda que é invocada sempre que atualizações são feitas em itens em uma tabela do Amazon DynamoDB. A função foi criada, e as permissões apropriadas foram adicionadas à função de execução do Lambda. Os fluxos do Amazon Stream DynamoDB Streams foram habilitados para a tabela, ativados, mas a função ainda não está sendo invocada. Qual opção ativará a possibilidade de atualizações na tabela do DynamoDB para invocar a função Lambda?",
    options: [
      "Alterar o valor do parâmetro StreamTypeViewType para NEW_AND_IMAGES para a tabela do DynamoDB.",
      "Configurar o mapeamento de fonte de evento para a função do Lambda.",
      "Mapear um canal do Amazon SNS Simple Notification Service (Amazon SNS) para os fluxos do DynamoDB Streams.",
      "Aumentar a configuração máxima de duração (timeout) da função do limite."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. Configurar um mapeamento de fonte de evento associa o fluxo do DynamoDB à função Lambda, permitindo invocações automáticas. A opção A não é necessária, pois NEW_AND_OLD_IMAGES é opcional. A opção C adiciona complexidade desnecessária com SNS. A opção D não resolve o problema de invocação."
  },
  {
    id: 32,
    text: "Um desenvolvedor precisa implantar uma aplicação que está sendo executada no Amazon ECS usando AWS Fargate. A aplicação possui aplicações que possuem variáveis de ambiente que devem ser passadas para um contêiner para que a aplicação seja inicializável. Como as variáveis de ambiente devem ser passadas para o contêiner?",
    options: [
      "Definir um array que inclua um array com as variáveis de ambiente no parâmetro de ambiente dentro da definição de serviço.",
      "Definir um array que inclua um array que inclui as variáveis de ambiente no parâmetro de ambiente dentro do parâmetro de definição de tarefa.",
      "Definir um array que inclua um array que inclui as variáveis de ambiente no parâmetro de entrada dentro da definição de tarefa do parâmetro de entrada de tarefa.",
      "Definir um array que inclua um array que inclui as variáveis de ambiente no parâmetro de entrada dentro da definição de serviço do parâmetro de entrada de serviço."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. As variáveis de ambiente são definidas no parâmetro 'environment' dentro da definição de tarefa no ECS, permitindo que o contêiner acesse durante a inicialização. As opções A e D referem-se à definição de serviço, que não suporta esse parâmetro. A opção C usa 'entryPoint', que é para comandos de entrada, não variáveis."
  },
  {
    id: 33,
    text: "Uma equipe de desenvolvimento mantém uma aplicação web usando um único template do AWS RDS, template do CloudFormation. O template define servidores web e um banco de dados Amazon RDS. A equipe usa o template de CloudFormation para implantar a pilha do CloudFormation em diferentes ambientes. Durante uma implantação recente da aplicação, um desenvolvedor causou a exclusão e recriação do banco de dados de desenvolvimento primário. O resultado desse incidente foi a perda total de dados. A equipe completa precisa evitar a exclusão acidental do banco de dados no futuro. Quais soluções atenderão a esses requisitos? (Escolha duas opções.)",
    options: [
      "Adicionar um atributo de Política de Exclusão do CloudFormation com o valor Retain ao recurso de banco de dados.",
      "Atualizar a política da pilha do CloudFormation para impedir alterações no banco de dados.",
      "Modificar o banco de dados para usar uma implantação multi-AZ.",
      "Criar um conjunto de pilha do CloudFormation para as implantações da aplicação web e do banco de dados.",
      "Adicionar um atributo de Política de Exclusão do CloudFormation com o valor Retain à pilha."
    ],
    correctAnswer: [0, 1],
    explanation: "As opções A e B são as corretas. Adicionar uma DeletionPolicy com Retain ao recurso do banco de dados (opção A) impede a exclusão do banco durante atualizações da pilha. Atualizar a política da pilha para bloquear alterações no banco (opção B) evita exclusões acidentais. A opção C melhora a disponibilidade, não a proteção contra exclusão. A opção D não impede exclusões. A opção E é inválida, pois DeletionPolicy não se aplica à pilha inteira."
  },
  {
    id: 34,
    text: "Um desenvolvedor está armazenando dados sensíveis gerados por uma aplicação no Amazon S3. O desenvolvedor deseja criptografar os dados em repouso. Uma política da empresa exige um registro de auditoria de quando a chave do AWS Key Management Service (AWS KMS) foi usada e por quem. Qual opção de criptografia atenderá a esses requisitos?",
    options: [
      "Criptografia do lado do servidor com chaves gerenciadas pelo Amazon S3 (SSE-S3)",
      "Criptografia do lado do servidor com chaves gerenciadas pelo AWS KMS (SSE-KMS)",
      "Criptografia do lado do servidor com chaves fornecidas pelo cliente (SSE-C)",
      "Criptografia do lado do servidor com chaves autogerenciadas"
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. A criptografia SSE-KMS usa chaves gerenciadas pelo KMS, que fornece registros de auditoria no CloudTrail para rastrear o uso da chave. A opção A (SSE-S3) não suporta auditoria detalhada. A opção C (SSE-C) exige que o cliente gerencie chaves, sem auditoria KMS. A opção D é inválida, pois 'chaves autogerenciadas' não é uma opção padrão."
  },
  {
    id: 35,
    text: `Uma empresa tem uma aplicação de comércio eletrônico. 

Para rastrear avaliações de produtos, a equipe de desenvolvimento da empresa usa uma tabela do Amazon DynamoDB. Cada registro inclui o seguinte:

• Um ID de Revisão, um identificador único universal de 16 dígitos (UUID)  
• Um ID de Produto e um ID de Usuário, UUIDs de 16 dígitos que referenciam outras tabelas  
• Uma Avaliação do Produto em uma escala de 1 a 5  
• Um comentário opcional do usuário  

A chave de partição da tabela é o ID de Revisão do Produto.

A consulta mais realizada na tabela é encontrar as 10 revisões com a maior classificação para um produto específico. 

Qual índice fornecerá a resposta MAIS RÁPIDA para essa consulta?`,
    options: [
      "Um índice secundário global (GSI) com ID do Produto como chave de partição e Avaliação do Produto como chave de ordenação",
      "Um índice secundário global (GSI) com ID do Produto como chave de partição e ID de Revisão como chave de ordenação",
      "Um índice secundário local (LSI) com ID do Produto como chave de partição e Avaliação do Produto como chave de ordenação",
      "Um índice secundário local (LSI) com ID de Revisão como chave de partição e ID do Produto como chave de ordenação"
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. Um GSI com ID do Produto como chave de partição e Avaliação do Produto como chave de ordenação permite consultas rápidas para encontrar as revisões mais bem classificadas de um produto. A opção B não ordena por avaliação. A opção C (LSI) é inválida, pois LSIs exigem a chave de partição da tabela original (ID de Revisão). A opção D é irrelevante para a consulta."
  },
  {
    id: 36,
    text: `Uma empresa está oferecendo APIs como serviço na internet para fornecer acesso de leitura não autenticado a informações estatísticas atualizadas diariamente. A empresa usa o Amazon API Gateway e o AWS Lambda para desenvolver as APIs. O serviço se tornou popular, exigindo, e a empresa deseja melhorar a capacidade de resposta das APIs.
    Qual ação pode ajudar a empresa a atingir esse objetivo?`,
    options: [
      "Habilitar o cache da API no API Gateway.",
      "Configurar o API Gateway para usar um endpoint de interface VPC.",
      "Habilitar o compartilhamento de recursos de origem cruzada (CORS) para as APIs.",
      "Configurar a utilização de planos de uso e chaves de API no API Gateway."
    ],
    correctAnswer: "A",
    explanation: "A opção A é a correta. Habilitar o cache no API Gateway reduz a latência ao armazenar respostas de APIs frequentemente consultadas, melhorando a responsividade. A opção B é para acesso interno, não para desempenho público. A opção C é para acesso de navegadores, não para desempenho. A opção D gerencia acesso, não responsividade."
  },
  {
    id: 37,
    text: `Uma empresa precisa distribuir atualizações de firmware para seus clientes em todo o mundo.

    Qual serviço permitirá um controle fácil e seguro do acesso aos downloads com o menor custo?`,
    options: [
      "Usar o Amazon CloudFront com URLs assinados para o Amazon S3.",
      "Criar uma Distribuição dedicada de Amazon CloudFront para cada cliente.",
      "Usar o Amazon CloudFront com AWS Lambda@Edge.",
      "Usar o Amazon API Gateway e o AWS Lambda para controlar o acesso a um bucket do S3."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a mais econômica e segura. URLs assinadas com CloudFront e S3 permitem controle de acesso seguro com baixa complexidade e custo. A opção B é cara devido à criação de distribuições por cliente. A opção C adiciona complexidade desnecessária. A opção D é mais complexa e custosa com API Gateway e Lambda."
  },
  {
    id: 38,
    text: `Um desenvolvedor está testando um aplicativo que invoca uma função Lambda do AWS de forma assíncrona. Durante a fase de testes, a função Lambda falha após duas tentativas.

    Como o desenvolvedor pode solucionar a falha?`,
    options: [
      "Configurar o log do AWS CloudTrail para investigar as falhas de invocação.",
      "Configurar Filas de Letras Mortas (Dead Letter Queues) enviando mensagens para o Amazon SQS para investigação.",
      "Configurar o Amazon Simple Workflow Service para processar quaisquer eventos não processados diretamente.",
      "Configurar o AWS Config para registrar quaisquer eventos não processados diretamente."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. Configurar uma Fila de Letras Mortas (DLQ) com SQS permite capturar eventos que falharam após tentativas, facilitando a análise. A opção A (CloudTrail) é para auditoria, não para falhas de invocação. As opções C e D são inválidas, pois SWF e Config não são adequados para esse caso."
  },
  {
    id: 39,
    text: `Uma empresa está migrando seu banco de dados PostgreSQL para a Nuvem AWS. A empresa deseja usar um banco de dados que proteja e rotacione regularmente as credenciais do banco de dados. A empresa deseja uma solução que não exija sobrecarga adicional de programação.

    Qual solução atenderá a esses requisitos?`,
    options: [
      "Usar o Amazon Aurora PostgreSQL para o banco de dados. Armazenar as credenciais do banco de dados no AWS Systems Manager Parameter Store. Ativar a rotação.",
      "Usar o Amazon Aurora PostgreSQL para o banco de dados. Armazenar as credenciais do banco de dados no AWS Secrets Manager. Ativar a rotação.",
      "Usar o Amazon DynamoDB para o banco de dados. Armazenar as credenciais do banco de dados no AWS Systems Manager Parameter Store. Ativar a rotação.",
      "Usar o Amazon DynamoDB para o banco de dados. Armazenar as credenciais do banco de dados no AWS Secrets Manager. Ativar a rotação."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. O AWS Secrets Manager suporta rotação automática de credenciais para Aurora PostgreSQL sem programação adicional. A opção A é inválida, pois o Parameter Store não suporta rotação para bancos de dados. As opções C e D usam DynamoDB, que não é um banco de dados relacional como PostgreSQL."
  },
  {
    id: 40,
    text: `Um desenvolvedor está criando uma aplicação móvel que não exigirá que os usuários façam login.
    Qual é o método MAIS eficiente para conceder aos usuários acesso aos recursos da AWS?`,
    options: [
      "Usar um provedor de identidade para autenticar de forma segura com a aplicação.",
      "Criar uma função AWS Lambda para criar um usuário IAM quando um usuário acessa a aplicação.",
      "Criar credenciais usando o AWS KMS e aplicar essas credenciais aos usuários ao usar a aplicação.",
      "Usar o Amazon Cognito para associar usuários não autenticados a uma função IAM com acesso limitado aos recursos."
    ],
    correctAnswer: 3,
    explanation: "A opção D é a mais eficiente. O Amazon Cognito permite criar identidades não autenticadas associadas a uma função IAM com permissões limitadas, ideal para acesso anônimo. A opção A exige autenticação. A opção B é insegura e complexa. A opção C não é prática para gerenciar acessos."
  },
  {
    id: 41,
    text: `Um desenvolvedor desenvolveu uma nova aplicação sem servidor usando funções personalizadas do AWS Lambda que serão implantadas usando a CLI do AWS SAM (AWS Serverless Application Model).
    Qual etapa o desenvolvedor deve concluir antes de implantar a aplicação?`,
    options: [
      "Comprimir os arquivos da aplicação em um arquivo .zip e carregá-lo no AWS Lambda.",
      "Testar a nova função do AWS Lambda rastreando-a primeiro no AWS X-Ray.",
      "Empacotar a aplicação sem servidor usando um pacote SAM do SAM CLI.",
      "Criar o ambiente da aplicação usando o comando 'eb create my-env'."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a correta. Empacotar a aplicação com o comando 'sam package' é necessário para preparar os artefatos para implantação via SAM CLI. A opção A é para implantações manuais. A opção B é opcional. A opção D é para Elastic Beanstalk, não SAM."
  },
  {
    id: 42,
    text: `Uma empresa deseja automatizar parte de seu processo de implantação. Um desenvolvedor precisa automatizar o processo de verificação e exclusão de recursos não utilizados que suportaram pilhas implantadas anteriormente, mas que não são mais usados.
A empresa tem uma aplicação central que usa o AWS Cloud Development Kit (AWS CDK) para gerenciar todas as pilhas de implantação. As pilhas estão distribuídas em várias contas. A solução do desenvolvedor deve se integrar da forma mais fluida possível ao processo de implantação atual.
Qual solução atenderá a esses requisitos com a MENOR quantidade de configuração?`,
    options: [
      "Na aplicação central do AWS CDK, escrever uma função handler no código que usa chamadas do AWS SDK para verificar e excluir recursos não utilizados. Criar um modelo do AWS CloudFormation a partir de um arquivo JSON. Usar o modelo para anexar o código da função a uma função AWS Lambda e invocar a função Lambda quando a pilha de implantação for executada.",
      "Na aplicação central do AWS CDK, escrever uma função handler no código que usa chamadas do AWS SDK para verificar e excluir recursos não utilizados. Criar um recurso personalizado do AWS CDK. Usar o recurso personalizado para anexar o código da função a uma função AWS Lambda e invocar a função Lambda quando a pilha de implantação for executada.",
      "Na aplicação central do AWS CDK, escrever uma função handler no código que usa chamadas do AWS SDK para verificar e excluir recursos não utilizados. Criar uma API no AWS Amplify. Usar a API para anexar o código da função a uma função AWS Lambda e invocar a função Lambda quando a pilha de implantação for executada.",
      "No console do AWS Lambda, escrever uma função handler no código que usa chamadas do AWS SDK para verificar e excluir recursos não utilizados. Criar um recurso personalizado do AWS CDK. Usar o recurso personalizado para importar a função Lambda para a pilha e invocar a função Lambda quando a pilha de implantação for executada."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a mais eficiente. Usar um recurso personalizado do AWS CDK permite integrar a lógica de verificação e exclusão diretamente no processo de implantação do CDK com mínima configuração. A opção A requer um modelo CloudFormation separado, aumentando a complexidade. A opção C usa Amplify, que não é adequado para esse caso. A opção D exige gerenciamento manual no console Lambda, menos integrado."
  },
  {
    id: 43,
    text: `Uma empresa construiu uma nova aplicação na Nuvem AWS. A empresa automatizou a inicialização de novos recursos com um grupo de Auto Scaling usando modelos do AWS CloudFormation. Os scripts de inicialização contêm dados sensíveis.
A empresa precisa de uma solução integrada ao CloudFormation para gerenciar os dados sensíveis nos scripts de inicialização.
Qual solução atenderá a esses requisitos da maneira MAIS segura?`,
    options: [
      "Colocar os dados sensíveis em um parâmetro do CloudFormation. Criptografar os modelos do CloudFormation usando uma chave do AWS Key Management Service (AWS KMS).",
      "Colocar os dados sensíveis em um bucket do Amazon S3. Atualizar os modelos do CloudFormation para baixar o objeto do Amazon S3 durante a inicialização.",
      "Colocar os dados sensíveis no AWS Systems Manager Parameter Store como um parâmetro de string segura. Atualizar os modelos do CloudFormation para usar referências dinâmicas para especificar valores do modelo.",
      "Colocar os dados sensíveis no Amazon Elastic File System (Amazon EFS). Aplicar criptografia no EFS após a criação do sistema de arquivos. Atualizar os modelos do CloudFormation para recuperar dados do Amazon EFS."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a mais segura. O Parameter Store com SecureString armazena dados sensíveis de forma criptografada, e as referências dinâmicas no CloudFormation permitem acesso seguro sem expor os dados. A opção A não criptografa os parâmetros adequadamente. A opção B expõe dados no S3, menos seguro. A opção D é complexa e não é ideal para dados sensíveis."
  },
  {
    id: 44,
    text: `Uma empresa precisa configurar credenciais seguras de banco de dados para todos os seus recursos na Nuvem AWS. Os recursos da empresa incluem instâncias de banco de dados Amazon RDS, clusters Amazon DocumentDB e instâncias de banco de dados Amazon Aurora. A política de segurança da empresa exige que as credenciais de banco de dados sejam criptografadas em repouso e rotacionadas em intervalos regulares.
Qual solução atenderá a esses requisitos da maneira MAIS segura?`,
    options: [
      "Configurar autenticação de banco de dados do IAM para acesso baseado em token. Gerar tokens de usuário para fornecer acesso centralizado a instâncias de banco de dados RDS, clusters DocumentDB e instâncias Aurora.",
      "Criar parâmetros para as credenciais de banco de dados no AWS Systems Manager Parameter Store. Definir o parâmetro Type como SecureString. Configurar a rotação automática nos parâmetros.",
      "Armazenar as credenciais de acesso ao banco de dados como um objeto criptografado do Amazon S3 em um bucket S3. Bloquear todo o acesso público ao bucket S3. Usar criptografia do lado do servidor do S3 para configurar a rotação automática da chave de criptografia.",
      "Criar uma função AWS Lambda usando o modelo SecretsManagerRotationTemplate no console do AWS Secrets Manager. Criar segredos para as credenciais de banco de dados no Secrets Manager. Configurar a rotação de segredos em um agendamento."
    ],
    correctAnswer: 3,
    explanation: "A opção D é a mais segura. O AWS Secrets Manager suporta criptografia em repouso e rotação automática para credenciais de RDS, DocumentDB e Aurora, usando um modelo de rotação integrado. A opção A não gerencia credenciais criptografadas. A opção B não suporta rotação automática para bancos de dados. A opção C é inadequada, pois o S3 não é ideal para credenciais."
  },
  {
    id: 45,
    text: `Um desenvolvedor criou uma função AWS Lambda que faz consultas a uma instância de banco de dados Amazon Aurora MySQL. Quando o desenvolvedor realiza um teste, a instância de banco de dados mostra um erro de excesso de conexões.
Qual solução atenderá a esses requisitos com o MENOR esforço operacional?`,
    options: [
      "Criar uma réplica de leitura para a instância de banco de dados. Consultar a instância de banco de dados réplica em vez da instância primária.",
      "Migrar os dados para um banco de dados Amazon DynamoDB.",
      "Configurar a instância de banco de dados Amazon Aurora MySQL para implantação Multi-AZ.",
      "Criar um proxy no Amazon RDS Proxy. Consultar o proxy em vez da instância de banco de dados."
    ],
    correctAnswer: 3,
    explanation: "A opção D é a mais eficiente. O RDS Proxy gerencia conexões, reduzindo o número de conexões abertas ao banco de dados com configuração mínima. A opção A requer alterações na lógica de consulta. A opção B envolve uma migração complexa. A opção C não resolve o problema de conexões."
  },
  {
    id: 46,
    text: `Um desenvolvedor está criando uma nova API REST usando o Amazon API Gateway e o AWS Lambda. A equipe de desenvolvimento testa a API e valida as respostas para os casos de uso conhecidos antes de implantar a API no ambiente de produção.
O desenvolvedor deseja disponibilizar a API REST para testes usando o API Gateway localmente.
Qual subcomando da Interface de Linha de Comando do AWS Serverless Application Model (AWS SAM CLI) atenderá a esses requisitos?`,
    options: [
      "sam local invoke",
      "sam local generate-event",
      "sam local start-lambda",
      "sam local start-api"
    ],
    correctAnswer: 3,
    explanation: "A opção D é a correta. O comando 'sam local start-api' inicia uma API local para testar endpoints do API Gateway. A opção A invoca uma função Lambda específica. A opção B gera eventos de teste. A opção C simula invocações Lambda, mas não a API."
  },
  {
    id: 47,
    text: `Uma empresa está executando instâncias do Amazon EC2 em várias contas AWS. Um desenvolvedor precisa implementar uma aplicação que coleta todos os eventos de ciclo de vida das instâncias EC2. A aplicação precisa armazenar os eventos de ciclo de vida em uma única fila Amazon SQS na conta principal da empresa para processamento adicional.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Configurar o Amazon EC2 para entregar os eventos de ciclo de vida das instâncias EC2 de todas as contas ao barramento de eventos do Amazon EventBridge da conta principal. Adicionar uma regra do EventBridge ao barramento de eventos da conta principal que corresponda a todos os eventos de ciclo de vida das instâncias EC2. Adicionar a fila SQS como destino da regra.",
      "Usar as políticas de recursos da fila SQS na conta principal para conceder permissões a cada conta para escrever nessa fila SQS. Adicionar ao barramento de eventos do Amazon EventBridge de cada conta uma regra do EventBridge que corresponda a todos os eventos de ciclo de vida das instâncias EC2. Adicionar a fila SQS na conta principal como destino da regra.",
      "Escrever uma função AWS Lambda que escaneie todas as instâncias EC2 nas contas da empresa para detectar mudanças no ciclo de vida das instâncias EC2. Configurar a função Lambda para escrever uma mensagem de notificação na fila SQS na conta principal se detectar uma mudança no ciclo de vida da instância EC2. Adicionar uma regra agendada do Amazon EventBridge que invoque a função Lambda a cada minuto.",
      "Configurar as permissões no barramento de eventos da conta principal para receber eventos de todas as contas. Criar uma regra do Amazon EventBridge em cada conta para enviar todos os eventos de ciclo de vida das instâncias EC2 ao barramento de eventos da conta principal. Adicionar uma regra do EventBridge ao barramento de eventos da conta principal que corresponda a todos os eventos de ciclo de vida das instâncias EC2. Definir a fila SQS como destino da regra."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a mais eficiente. Configurar o EventBridge para centralizar eventos na conta principal e direcioná-los para a fila SQS minimiza a complexidade. A opção B requer políticas de recursos adicionais. A opção C é ineficiente devido à varredura periódica. A opção D é mais complexa, exigindo regras em todas as contas."
  },
  {
    id: 48,
    text: `Um desenvolvedor deseja armazenar informações sobre filmes. Cada filme tem um título, ano de lançamento e gênero. As informações do filme também podem incluir propriedades adicionais sobre o elenco e a equipe de produção. Essas informações adicionais são inconsistentes entre os filmes. Por exemplo, um filme pode ter um assistente de direção, e outro pode ter um treinador de animais.
O desenvolvedor precisa implementar uma solução para suportar os seguintes casos de uso:
- Para um dado título e ano de lançamento, obter todos os detalhes sobre o filme com esse título e ano de lançamento.
- Para um dado título, obter todos os detalhes sobre todos os filmes com esse título.
- Para um dado gênero, obter todos os detalhes sobre todos os filmes desse gênero.
Qual configuração de armazenamento de dados atenderá a esses requisitos?`,
    options: [
      "Criar uma tabela do Amazon DynamoDB. Configurar a tabela com uma chave primária que consiste no título como chave de partição e o ano de lançamento como chave de ordenação. Criar um índice secundário global que usa o gênero como chave de partição e o título como chave de ordenação.",
      "Criar uma tabela do Amazon DynamoDB. Configurar a tabela com uma chave primária que consiste no gênero como chave de partição e o ano de lançamento como chave de ordenação. Criar um índice secundário global que usa o título como chave de partição.",
      "Em uma instância de banco de dados Amazon RDS, criar uma tabela que contenha colunas para título, ano de lançamento e gênero. Configurar o título como chave primária.",
      "Em uma instância de banco de dados Amazon RDS, criar uma tabela onde a chave primária é o título e todos os outros dados são codificados no formato JSON como uma coluna adicional."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. A tabela DynamoDB com título como chave de partição e ano de lançamento como chave de ordenação suporta os dois primeiros casos de uso. O GSI com gênero como chave de partição suporta o terceiro caso. As opções C e D (RDS) são menos flexíveis para dados inconsistentes e consultas por gênero."
  },
  {
    id: 49,
    text: `Uma empresa tem uma aplicação sem servidor na AWS que usa uma frota de funções AWS Lambda com aliases. A empresa publica regularmente novas funções Lambda usando uma solução de implantação interna. A empresa deseja melhorar o processo de liberação e usar deslocamento de tráfego. Uma versão de função recém-publicada deve inicialmente estar disponível apenas para uma porcentagem fixa de usuários de produção.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Configurar o roteamento no alias da nova função usando um alias ponderado.",
      "Configurar um tipo de implantação canário para o Lambda.",
      "Configurar o roteamento nas novas versões usando variáveis de ambiente.",
      "Configurar um tipo de implantação linear para o Lambda."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. Um alias ponderado permite direcionar uma porcentagem fixa de tráfego para a nova versão da função Lambda. As opções B e D referem-se a tipos de implantação do CodeDeploy, não suportados diretamente por aliases. A opção C não é viável para roteamento de tráfego."
  },
  {
    id: 50,
    text: `Uma empresa tem uma aplicação que armazena dados em instâncias do Amazon RDS. A aplicação experimenta periodicamente picos de tráfego elevado que causam problemas de desempenho. Durante períodos de pico de tráfego, um desenvolvedor nota uma redução na velocidade de consulta em todas as consultas de banco de dados.
O líder técnico da equipe determina que uma solução de cache escalável e multithread deve ser usada para aliviar o tráfego de leitura pesado. A solução precisa melhorar o desempenho.
Qual solução atenderá a esses requisitos com a MENOR complexidade?`,
    options: [
      "Usar o Amazon ElastiCache para Memcached para aliviar as solicitações de leitura do banco de dados principal.",
      "Replicar os dados para o Amazon DynamoDB. Configurar um cluster do DynamoDB Accelerator (DAX).",
      "Configurar as instâncias do Amazon RDS para usar implantação Multi-AZ com uma instância em espera. Aliviar as solicitações de leitura do banco de dados principal para a instância em espera.",
      "Usar o Amazon ElastiCache para Redis para aliviar as solicitações de leitura do banco de dados principal."
    ],
    correctAnswer: 3,
    explanation: "A opção D é a mais simples. O ElastiCache para Redis suporta cache multithread e é fácil de integrar com RDS, melhorando o desempenho de leitura. A opção A (Memcached) é menos robusta. A opção B é complexa devido à migração para DynamoDB. A opção C não é ideal, pois instâncias em espera Multi-AZ são para failover, não para leitura."
  },
  {
    id: 51,
    text: `Um desenvolvedor deve fornecer uma chave de API para uma função AWS Lambda para autenticar com um sistema de terceiros. A função Lambda será executada em um agendamento. O desenvolvedor precisa garantir que a chave de API permaneça criptografada em repouso.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Armazenar a chave de API como uma variável de ambiente do Lambda usando uma chave gerenciada pelo cliente do AWS Key Management Service (AWS KMS).",
      "Configurar a aplicação para solicitar que o usuário forneça a senha para a função Lambda na primeira execução.",
      "Armazenar a chave de API como um valor no código da aplicação.",
      "Usar o Lambda@Edge e comunicar apenas pelo protocolo HTTPS."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. Armazenar a chave de API como uma variável de ambiente criptografada com uma chave KMS garante segurança em repouso. A opção B não é viável para execução agendada. A opção C é insegura. A opção D é irrelevante para armazenamento de chaves."
  },
  {
    id: 52,
    text: `Um departamento de TI usa o Amazon S3 para armazenar imagens sensíveis. Após mais de 1 ano, a empresa move as imagens para armazenamento de arquivo. A empresa raramente acessa as imagens, mas deseja uma solução de armazenamento que maximize a resiliência. O departamento de TI precisa acessar as imagens movidas para o armazenamento de arquivo em até 24 horas.
Qual solução atenderá a esses requisitos da maneira MAIS econômica?`,
    options: [
      "Usar o S3 Standard-Infrequent Access (S3 Standard-IA) para armazenar as imagens. Usar o S3 Glacier Deep Archive com recuperação padrão para armazenar e recuperar imagens arquivadas.",
      "Usar o S3 Standard-Infrequent Access (S3 Standard-IA) para armazenar as imagens. Usar o S3 Glacier Deep Archive com recuperação em massa para armazenar e recuperar imagens arquivadas.",
      "Usar o S3 Intelligent-Tiering para armazenar as imagens. Usar o S3 Glacier Deep Archive com recuperação padrão para armazenar e recuperar imagens arquivadas.",
      "Usar o S3 One Zone-Infrequent Access (S3 One Zone-IA) para armazenar as imagens. Usar o S3 Glacier Deep Archive com recuperação em massa para armazenar e recuperar imagens arquivadas."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a mais econômica. O S3 Intelligent-Tiering move automaticamente dados para camadas de acesso menos frequente, e o Deep Archive com recuperação padrão atende ao requisito de 24 horas com alta resiliência. As opções A e B usam Standard-IA, mais caro. A opção D usa One Zone-IA, menos resiliente."
  },
  {
    id: 53,
    text: `Um desenvolvedor está construindo uma aplicação sem servidor usando o AWS Serverless Application Model (AWS SAM). O desenvolvedor está testando a aplicação em um ambiente de desenvolvimento. Quando a aplicação estiver quase concluída, o desenvolvedor precisará configurar ambientes adicionais de teste e preparação para uma equipe de garantia de qualidade.
O desenvolvedor deseja usar um recurso do AWS SAM para configurar implantações em vários ambientes.
Qual solução atenderá a esses requisitos com o MENOR esforço de desenvolvimento?`,
    options: [
      "Adicionar um arquivo de configuração no formato TOML para agrupar entradas de configuração para cada ambiente. Adicionar uma tabela para cada ambiente de teste e preparação. Implantar atualizações nos ambientes usando o comando sam deploy e a flag --config-env correspondente a cada ambiente.",
      "Criar modelos AWS SAM adicionais para cada ambiente de teste e preparação. Escrever um script de shell personalizado que usa o comando sam deploy e a flag --template-file para implantar atualizações nos ambientes.",
      "Criar um arquivo de configuração AWS SAM com parâmetros padrão. Realizar atualizações nos ambientes de teste e preparação usando a flag --parameter-overrides no AWS SAM CLI e os parâmetros que as atualizações substituirão.",
      "Usar o modelo AWS SAM existente. Adicionar parâmetros adicionais para configurar atributos específicos para os recursos de função sem servidor e tabela de banco de dados em cada ambiente. Implantar atualizações nos ambientes de teste e preparação usando o comando sam deploy."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a mais eficiente. O arquivo de configuração TOML com a flag --config-env permite gerenciar múltiplos ambientes de forma nativa no SAM com mínimo esforço. A opção B requer múltiplos modelos, aumentando a complexidade. As opções C e D exigem gerenciamento manual de parâmetros."
  },
  {
    id: 54,
    text: `Um desenvolvedor está trabalhando em uma aplicação que processa dados operacionais de dispositivos IoT. Cada dispositivo IoT faz upload de um arquivo de dados a cada hora para um bucket do Amazon S3. O desenvolvedor deseja processar cada arquivo de dados imediatamente quando ele é carregado no Amazon S3.
O desenvolvedor usará uma função AWS Lambda para processar os arquivos de dados do Amazon S3. A função Lambda está configurada com as informações do bucket S3 onde os arquivos são carregados. O desenvolvedor deseja configurar a função Lambda para ser invocada imediatamente após cada upload de arquivo de dados.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Adicionar uma invocação assíncrona à função Lambda. Selecionar o bucket S3 como fonte.",
      "Adicionar um evento do Amazon EventBridge à função Lambda. Selecionar o bucket S3 como fonte.",
      "Adicionar um gatilho à função Lambda. Selecionar o bucket S3 como fonte.",
      "Adicionar uma camada à função Lambda. Selecionar o bucket S3 como fonte."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a correta. Adicionar um gatilho S3 à função Lambda permite invocações automáticas quando arquivos são carregados no bucket. A opção A não é válida para gatilhos S3. A opção B usa EventBridge, que é indireto. A opção D é irrelevante, pois camadas não configuram gatilhos."
  },
  {
    id: 55,
    text: `Um desenvolvedor está configurando infraestrutura usando o AWS CloudFormation. Se ocorrer um erro quando os recursos descritos no modelo do CloudFormation forem provisionados, os recursos provisionados com sucesso devem ser preservados. O desenvolvedor deve provisionar e atualizar a pilha do CloudFormation usando a AWS CLI.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Adicionar a opção de linha de comando --enable-termination-protection aos comandos create-stack e update-stack.",
      "Adicionar a opção de linha de comando --disable-rollback aos comandos create-stack e update-stack.",
      "Adicionar a opção de linha de comando --parameters ParameterKey=PreserveResources,ParameterValue=True aos comandos create-stack e update-stack.",
      "Adicionar a opção de linha de comando --tags Key=PreserveResources,Value=True aos comandos create-stack e update-stack."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. A flag --disable-rollback preserva recursos provisionados em caso de erro. A opção A protege a pilha contra exclusão, não contra falhas. As opções C e D não são válidas para esse propósito."
  },
  {
    id: 56,
    text: `Um desenvolvedor está construindo uma aplicação sem servidor que se conecta a um banco de dados Amazon Aurora PostgreSQL. A aplicação sem servidor consiste em centenas de funções AWS Lambda. Durante cada escala das funções Lambda, uma nova conexão de banco de dados é feita, aumentando o consumo de recursos do banco de dados.
O desenvolvedor precisa reduzir o número de conexões feitas ao banco de dados. A solução não deve impactar a escalabilidade das funções Lambda.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Configurar concorrência provisionada para cada função Lambda definindo o parâmetro ProvisionedConcurrentExecutions como 10.",
      "Habilitar o gerenciamento de cache de cluster para o Aurora PostgreSQL. Alterar a string de conexão de cada função Lambda para apontar para o gerenciamento de cache de cluster.",
      "Usar o Amazon RDS Proxy para criar um pool de conexões para gerenciar as conexões do banco de dados. Alterar a string de conexão de cada função Lambda para referenciar o proxy.",
      "Configurar concorrência reservada para cada função Lambda definindo o parâmetro ReservedConcurrentExecutions como 10."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a correta. O RDS Proxy gerencia um pool de conexões, reduzindo o número de conexões diretas ao banco de dados sem afetar a escalabilidade do Lambda. As opções A e D limitam a escalabilidade. A opção B não existe para Aurora PostgreSQL."
  },
  {
    id: 57,
    text: `Um desenvolvedor está se preparando para iniciar o desenvolvimento de uma nova versão de uma aplicação. A versão anterior da aplicação está implantada em um ambiente de produção. O desenvolvedor precisa implantar correções e atualizações na versão atual durante o desenvolvimento da nova versão da aplicação. O código para a nova versão da aplicação está armazenado no AWS CodeCommit.
Qual solução atenderá a esses requisitos?`,
    options: [
      "A partir do ramo principal, criar um ramo de recursos para correções de bugs de produção. Criar um segundo ramo de recursos a partir do ramo principal para o desenvolvimento da nova versão.",
      "Criar uma tag Git do código que está atualmente implantado em produção. Criar uma tag Git para o desenvolvimento da nova versão. Enviar as duas tags para o repositório CodeCommit.",
      "A partir do ramo principal, criar um ramo do código que está atualmente implantado em produção. Aplicar uma política IAM que garanta que outros usuários não possam fazer push ou merge para o ramo.",
      "Criar um novo repositório CodeCommit para o desenvolvimento da nova versão da aplicação. Criar uma tag Git para o desenvolvimento da nova versão."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. Criar ramos de recursos para correções de produção e desenvolvimento da nova versão permite gerenciar ambos os fluxos de trabalho no mesmo repositório. A opção B (tags) não suporta desenvolvimento contínuo. A opção C limita colaboração. A opção D é desnecessária e fragmenta o código."
  },
  {
    id: 58,
    text: `Um desenvolvedor está criando uma pilha do AWS CloudFormation. A pilha contém recursos IAM com nomes personalizados. Quando o desenvolvedor tenta implantar a pilha, ele recebe um erro de InsufficientCapabilities.
O que o desenvolvedor deve fazer para resolver esse problema?`,
    options: [
      "Especificar a capacidade CAPABILITY_AUTO_EXPAND na pilha do CloudFormation.",
      "Usar uma função de administrador para implantar recursos IAM com o CloudFormation.",
      "Especificar a capacidade CAPABILITY_IAM na pilha do CloudFormation.",
      "Especificar a capacidade CAPABILITY_NAMED_IAM na pilha do CloudFormation."
    ],
    correctAnswer: 3,
    explanation: "A opção D é a correta. A capacidade CAPABILITY_NAMED_IAM é necessária para criar recursos IAM com nomes personalizados. A opção A é para macros. A opção B não resolve o erro. A opção C é menos específica, mas insuficiente para nomes personalizados."
  },
  {
    id: 59,
    text: `Um desenvolvedor mantém uma API REST do Amazon API Gateway. Os clientes usam a API por meio de uma interface de usuário frontend e autenticação do Amazon Cognito.
O desenvolvedor tem uma nova versão da API que contém novos endpoints e mudanças incompatíveis na interface. O desenvolvedor precisa fornecer acesso beta a outros desenvolvedores da equipe sem afetar os clientes.
Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?`,
    options: [
      "Definir um estágio de desenvolvimento na API do API Gateway. Instruir os outros desenvolvedores a apontar os endpoints para o estágio de desenvolvimento.",
      "Definir uma nova API do API Gateway que aponte para o novo código da aplicação da API. Instruir os outros desenvolvedores a apontar os endpoints para a nova API.",
      "Implementar um parâmetro de consulta no código da aplicação da API que determine qual versão do código chamar.",
      "Especificar novos endpoints do API Gateway para os endpoints da API que o desenvolvedor deseja adicionar."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a mais eficiente. Criar um estágio de desenvolvimento no API Gateway permite testar a nova versão sem afetar os clientes, com mínima configuração. A opção B cria uma nova API, aumentando a sobrecarga. A opção C modifica o código, adicionando complexidade. A opção D não isola a nova versão."
  },
  {
    id: 60,
    text: `Uma empresa usa o Amazon API Gateway para expor um conjunto de APIs para clientes. As APIs têm cache habilitado no API Gateway. Os clientes precisam de uma maneira de invalidar o cache para cada API quando testam a API.
O que um desenvolvedor deve fazer para dar aos clientes a capacidade de invalidar o cache da API?`,
    options: [
      "Pedir aos clientes que usem credenciais AWS para chamar a operação InvalidateCache da API.",
      "Anexar uma política InvalidateCache à função de execução IAM que os clientes usam para invocar a API. Pedir aos clientes que enviem uma solicitação que contenha o cabeçalho HTTP Cache-Control:max-age=0 ao fazer uma chamada de API.",
      "Pedir aos clientes que usem o AWS SDK da classe API Gateway para invocar a operação InvalidateCache da API.",
      "Anexar uma política InvalidateCache à função de execução IAM que os clientes usam para invocar a API. Pedir aos clientes que adicionem o parâmetro de string de consulta INVALIDATE_CACHE ao fazer uma chamada de API."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. O cabeçalho Cache-Control:max-age=0 força a invalidação do cache, e uma política IAM pode permitir isso. As opções A e C exigem acesso administrativo, inadequado para clientes. A opção D usa um parâmetro inválido."
  },
  {
    id: 61,
    text: `Um desenvolvedor está criando uma função AWS Lambda que gerará e exportará um arquivo. A função requer 100 MB de armazenamento temporário para arquivos temporários durante a execução. Esses arquivos não serão necessários após a conclusão da função.
Como o desenvolvedor pode lidar com os arquivos temporários da maneira MAIS eficiente?`,
    options: [
      "Armazenar os arquivos no Amazon Elastic Block Store (Amazon EBS) e excluir os arquivos no final da função Lambda.",
      "Copiar os arquivos para o Amazon Elastic File System (Amazon EFS) e excluir os arquivos no final da função Lambda.",
      "Armazenar os arquivos no diretório /tmp e excluir os arquivos no final da função Lambda.",
      "Copiar os arquivos para um bucket do Amazon S3 com uma política de ciclo de vida para excluir os arquivos."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a mais eficiente. O diretório /tmp do Lambda é projetado para armazenamento temporário e é automaticamente limpo após a execução. As opções A e B exigem gerenciamento adicional. A opção D adiciona complexidade e custos."
  },
  {
    id: 62,
    text: `Uma empresa usa o Amazon DynamoDB como armazenamento de dados para seu sistema de gerenciamento de pedidos. A aplicação frontend da empresa armazena pedidos em uma tabela do DynamoDB. A tabela do DynamoDB está configurada para enviar eventos de alteração para um fluxo do DynamoDB. A empresa usa uma função AWS Lambda para registrar e processar os pedidos recebidos com base nos dados do fluxo do DynamoDB.
Uma revisão operacional revela que a quantidade de pedidos recebidos às vezes é definida como 0. Um desenvolvedor precisa criar um painel que mostrará quantos clientes únicos esse problema afeta a cada dia.
O que o desenvolvedor deve fazer para implementar o painel?`,
    options: [
      "Conceder à função de execução da função Lambda permissões para carregar logs no Amazon CloudWatch Logs. Implementar uma consulta do CloudWatch Logs Insights que selecione o número de clientes únicos para pedidos com quantidade igual a 0 e agrupe os resultados em períodos de 1 dia. Adicionar a consulta do CloudWatch Logs Insights a um painel do CloudWatch.",
      "Usar o Amazon Athena para consultar logs de API do AWS CloudTrail para chamadas de API. Implementar uma consulta do Athena que selecione o número de clientes únicos para pedidos com quantidade igual a 0 e agrupe os resultados em períodos de 1 dia. Adicionar a consulta do Athena a um painel do Amazon CloudWatch.",
      "Configurar a função Lambda para enviar eventos ao Amazon EventBridge. Criar uma regra do EventBridge que agrupe o número de clientes únicos para pedidos com quantidade igual a 0 em períodos de 1 dia. Adicionar um painel do CloudWatch como destino da regra.",
      "Ativar métricas personalizadas do Amazon CloudWatch para o fluxo do DynamoDB da tabela do DynamoDB. Criar um alarme do CloudWatch que agrupe o número de clientes únicos para pedidos com quantidade igual a 0 em períodos de 1 dia. Adicionar o alarme do CloudWatch a um painel do CloudWatch."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. Usar CloudWatch Logs Insights para consultar logs gerados pela função Lambda é direto e eficiente. A opção B é complexa e irrelevante, pois CloudTrail não captura dados de pedidos. A opção C usa EventBridge incorretamente. A opção D não é viável para métricas de clientes."
  },
  {
    id: 63,
    text: `Um desenvolvedor precisa solucionar problemas em uma função AWS Lambda em um ambiente de desenvolvimento. A função Lambda está configurada no modo VPC e precisa se conectar a uma instância de banco de dados Amazon RDS para SQL Server existente. A instância de banco de dados está implantada em uma sub-rede privada e aceita conexões usando a porta 1433.
Quando o desenvolvedor testa a função, a função relata um erro ao tentar se conectar ao banco de dados.
Qual combinação de etapas o desenvolvedor deve tomar para diagnosticar esse problema? (Escolha duas opções.)`,
    options: [
      "Verificar se o grupo de segurança da função tem acesso de saída na porta 1433 para o grupo de segurança da instância de banco de dados. Verificar se o grupo de segurança da instância de banco de dados tem acesso de entrada na porta 1433 a partir do grupo de segurança da função.",
      "Verificar se o grupo de segurança da função tem acesso de entrada na porta 1433 a partir do grupo de segurança da instância de banco de dados. Verificar se o grupo de segurança da instância de banco de dados tem acesso de saída na porta 1433 para o grupo de segurança da função.",
      "Verificar se a VPC está configurada para um gateway NAT. Verificar se a instância de banco de dados tem a opção de acesso público ativada.",
      "Verificar se as permissões da função de execução da função incluem rds:DescribeDBInstances, rds:ModifyDBInstance e rds:DescribeDBSecurityGroups para a instância de banco de dados.",
      "Verificar se as permissões da função de execução da função incluem ec2:CreateNetworkInterface, ec2:DescribeNetworkInterfaces e ec2:DeleteNetworkInterface."
    ],
    correctAnswer: [0, 4],
    explanation: "As opções A e E são necessárias. A opção A verifica as regras de grupo de segurança para permitir tráfego na porta 1433. A opção E garante que a função Lambda tenha permissões para gerenciar interfaces de rede na VPC. A opção B inverte as regras de segurança incorretamente. A opção C é irrelevante, pois o banco está em uma sub-rede privada. A opção D não é necessária para conexões."
  },
  {
    id: 64,
    text: `Um desenvolvedor precisa lançar uma nova instância do Amazon EC2 usando a AWS CLI.
Qual comando da AWS CLI o desenvolvedor deve usar para atender a esse requisito?`,
    options: [
      "aws ec2 bundle-instance",
      "aws ec2 start-instances",
      "aws ec2 confirm-product-instance",
      "aws ec2 run-instances"
    ],
    correctAnswer: 3,
    explanation: "A opção D é a correta. O comando 'aws ec2 run-instances' lança uma nova instância EC2. A opção A é para criar pacotes de instâncias. A opção B inicia instâncias existentes. A opção C verifica códigos de produtos."
  },
  {
    id: 65,
    text: `Um desenvolvedor precisa gerenciar a infraestrutura da AWS como código e deve ser capaz de implantar várias cópias idênticas da infraestrutura, preparar alterações e reverter para versões anteriores.
Qual abordagem atende a esses requisitos?`,
    options: [
      "Usar relatórios de alocação de custos e o AWS OpsWorks para implantar e gerenciar a infraestrutura.",
      "Usar métricas e alertas do Amazon CloudWatch junto com marcação de recursos para implantar e gerenciar a infraestrutura.",
      "Usar o AWS Elastic Beanstalk e o AWS CodeCommit para implantar e gerenciar a infraestrutura.",
      "Usar o AWS CloudFormation e o AWS CodeCommit para implantar e gerenciar a infraestrutura."
    ],
    correctAnswer: 3,
    explanation: "A opção D é a correta. O CloudFormation gerencia infraestrutura como código, permitindo implantações consistentes e reversão. O CodeCommit suporta controle de versão. A opção A é inadequada, pois OpsWorks é para gerenciamento de aplicações. A opção B não suporta implantações como código. A opção C é limitada a aplicações web."
  }
];

// Lista de questões ativa (será embaralhada)
let questions = [...originalQuestions];

// Estado do simulado
const examState = {
  currentQuestionIndex: 0,
  answers: {},
  markedForReview: new Set(),
  timeRemaining: 90 * 60,
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