const originalQuestions = [
  {

    id: 1,
    text: "Uma empresa está implementando um aplicativo em instâncias do Amazon EC2. O aplicativo precisa processar as transações recebidas. Quando o aplicativo detecta uma transação que não é válida, o aplicativo deve enviar uma mensagem de chat para a equipe de suporte da empresa. Para enviar a mensagem, o aplicativo precisa recuperar o token de acesso para autenticar usando a API de chat. Um desenvolvedor precisa implementar uma solução para armazenar o token de acesso. O token de acesso deve ser criptografado em repouso e em trânsito. O token de acesso também deve ser acessível a partir de outras contas da AWS. Qual solução atenderá a esses requisitos com a MENOR sobrecarga de gerenciamento?",
    options: [
      "Use um parâmetro SecureString do AWS Systems Manager Parameter Store que usa uma chave gerenciada da AWS do AWS Key Management Service (AWS KMS) para armazenar o token de acesso. Adicione uma política baseada em recursos ao parâmetro para permitir o acesso de outras contas. Atualize a função IAM das instâncias do EC2 com permissões para acessar o Parameter Store. Recupere o token do Parameter Store com o sinalizador de descriptografia ativado. Use o token de acesso descriptografado para enviar a mensagem para o chat.",

      "Criptografe o token de acesso usando uma chave gerenciada pelo cliente do AWS Key Management Service (AWS KMS). Armazene o token de acesso em uma tabela do Amazon DynamoDB. Atualize a função IAM das instâncias do EC2 com permissões para acessar o DynamoDB e o AWS KMS. Recupere o token do DynamoDDescriptografe o token usando o AWS KMS nas instâncias do EC2. Use o token de acesso descriptografado para enviar a mensagem para o chat.",

      "Use o AWS Secrets Manager com uma chave gerenciada pelo cliente do AWS Key Management Service (AWS KMS) para armazenar o token de acesso. Adicione uma política baseada em recursos ao segredo para permitir o acesso de outras contas. Atualize a função IAM das instâncias do EC2 com permissões para acessar o Secrets Manager. Recupere o token do Secrets Manager. Use o token de acesso descriptografado para enviar a mensagem para o chat.",

      "Criptografe o token de acesso usando uma chave gerenciada da AWS do AWS Key Management Service (AWS KMS). Armazene o token de acesso em um bucket do Amazon S3. Adicione uma política de bucket ao bucket do S3 para permitir o acesso de outras contas. Atualize a função IAM das instâncias do EC2 com permissões para acessar o Amazon S3 e o AWS KMS. Recupere o token do bucket do S3. Descriptografe o token usando o AWS KMS nas instâncias do EC2. Use o token de acesso descriptografado para enviar a mensagem para o chat."
    ],
    correctAnswer: 2,
    explanation: "O AWS Secrets Manager é projetado para armazenar com segurança segredos como credenciais de banco de dados, chaves de API e outros segredos. Ele oferece rotação automática de segredos, criptografia em repouso e em trânsito e controle de acesso granular. Usar uma chave gerenciada pelo cliente do KMS fornece controle sobre a criptografia e permite que a chave seja compartilhada entre contas. Políticas baseadas em recursos em segredos permitem controle de acesso entre contas, e a função IAM das instâncias EC2 é atualizada para conceder permissões para acessar o Secrets Manager."

  },

  {

    id: 2,

    text: "Um desenvolvedor está implantando um novo aplicativo no Amazon Elastic Container Service (Amazon ECS). O desenvolvedor precisa armazenar e recuperar com segurança diferentes tipos de variáveis. Essas variáveis incluem informações de autenticação para uma API remota, o URL para a API e credenciais. As informações de autenticação e o URL da API devem estar disponíveis para todas as versões implantadas atuais e futuras do aplicativo em ambientes de desenvolvimento, teste e produção. Como o desenvolvedor deve recuperar as variáveis com o MÍNIMO de alterações no aplicativo?",

    options: [

      "Atualize o aplicativo para recuperar as variáveis do AWS Systems Manager Parameter Store. Use caminhos exclusivos no Parameter Store para cada variável em cada ambiente. Armazene as credenciais no AWS Secrets Manager em cada ambiente.",

      "Atualize o aplicativo para recuperar as variáveis do AWS Key Management Service (AWS KMS). Armazene o URL da API e as credenciais como chaves exclusivas para cada ambiente.",

      "Atualize o aplicativo para recuperar as variáveis de um arquivo criptografado armazenado com o aplicativo. Armazene o URL da API e as credenciais em arquivos exclusivos para cada ambiente.",

      "Atualize o aplicativo para recuperar as variáveis de cada um dos ambientes implantados. Defina as informações de autenticação e o URL da API na definição da tarefa do ECS como nomes exclusivos durante o processo de implantação."

    ],

    correctAnswer: 0,

    explanation: "O AWS Systems Manager Parameter Store permite armazenar parâmetros como strings seguras e recuperar esses valores com segurança. Usar caminhos exclusivos no Parameter Store para cada variável em cada ambiente permite organizar e gerenciar diferentes configurações para diferentes ambientes. O AWS Secrets Manager é um serviço de gerenciamento de segredos que ajuda a proteger o acesso aos seus aplicativos, serviços e recursos de TI. A opção A é a única que utiliza ambos os serviços para armazenar e recuperar as variáveis com segurança e o mínimo de alterações no aplicativo."

  },

  {

    id: 3,

    text: "Uma empresa usa funções AWS Lambda e um gatilho do Amazon S3 para processar imagens em um bucket do S3. Uma equipe de desenvolvimento configurou vários ambientes em uma única conta da AWS. Após uma recente implantação de produção, a equipe de desenvolvimento observou que os buckets do S3 de desenvolvimento invocavam as funções Lambda do ambiente de produção. Essas invocações causaram a execução indesejada de arquivos S3 de desenvolvimento usando funções Lambda de produção. A equipe de desenvolvimento deve impedir essas invocações. A equipe deve seguir as melhores práticas de segurança. Qual solução atenderá a esses requisitos?",

    options: [

      "Atualize a função de execução do Lambda para a função Lambda de produção para adicionar uma política que permita que a função de execução leia apenas o bucket S3 do ambiente de produção.",

      "Mova os ambientes de desenvolvimento e produção para contas AWS separadas. Adicione uma política de recursos a cada função Lambda para permitir apenas buckets S3 que estejam na mesma conta para invocar a função.",

      "Adicione uma política de recursos à função Lambda de produção para permitir que apenas o bucket S3 do ambiente de produção invoque a função.",

      "Mova os ambientes de desenvolvimento e produção para contas AWS separadas. Atualize a função de execução do Lambda para cada função para adicionar uma política que permita que a função de execução leia o bucket S3 que está na mesma conta."

    ],

    correctAnswer: 2,

    explanation: "A opção C é a solução correta porque adiciona uma política de recursos à função Lambda de produção, restringindo quais buckets S3 podem invocá-la. Isso segue as melhores práticas de segurança, aplicando o princípio do menor privilégio. A opção B também propõe mover os ambientes para contas separadas, o que é uma boa prática de segurança, mas não é estritamente necessário para atender aos requisitos da pergunta e pode envolver mais trabalho. A opção A não impede a invocação indesejada, e a opção D é mais complexa do que o necessário."

  },

  {

    id: 4,

    text: "Um desenvolvedor está criando um aplicativo. Novos usuários do aplicativo devem ser capazes de criar uma conta e se registrar usando suas próprias contas de mídia social. Qual serviço ou recurso da AWS o desenvolvedor deve usar para atender a esses requisitos?",

    options: [

      "Função IAM",

      "Pools de identidade do Amazon Cognito",

      "Pools de usuários do Amazon Cognito",

      "AWS Directory Service"

    ],

    correctAnswer: 2,

    explanation: "Os Pools de usuários do Amazon Cognito fornecem um diretório de usuários que suporta o registro e o login de usuários, incluindo o login com provedores de identidade social (como Facebook, Google e Amazon) e provedores de identidade empresarial. Os Pools de identidade do Amazon Cognito são usados para conceder aos usuários acesso aos recursos da AWS."

  },

  {

    id: 5,

    text: "Um aplicativo de mídia social usa o AWS SDK for JavaScript no frontend para obter credenciais de usuário do AWS Security Token Service (AWS STS). O aplicativo armazena seus ativos em um bucket do Amazon S3. O aplicativo serve seu conteúdo usando uma distribuição do Amazon CloudFront com a origem definida para o bucket do S3. As credenciais para a função que o aplicativo assume para fazer as chamadas do SDK são armazenadas em texto não criptografado em um arquivo JSON dentro do código do aplicativo. O desenvolvedor precisa implementar uma solução que permita que o aplicativo obtenha credenciais de usuário sem ter nenhuma credencial codificada no código do aplicativo. Qual solução atenderá a esses requisitos?",

    options: [

      "Adicione uma função Lambda@Edge à distribuição. Invoque a função no pedido do visualizador. Adicione permissões à função de execução da função para permitir que a função acesse o AWS STS. Mova todas as chamadas do SDK do frontend para a função.",

      "Adicione uma função do CloudFront à distribuição. Invoque a função no pedido do visualizador. Adicione permissões à função de execução da função para permitir que a função acesse o AWS STS. Mova todas as chamadas do SDK do frontend para a função.",

      "Adicione uma função Lambda@Edge à distribuição. Invoque a função no pedido do visualizador. Mova as credenciais do arquivo JSON para a função. Mova todas as chamadas do SDK do frontend para a função.",

      "Adicione uma função do CloudFront à distribuição. Invoque a função no pedido do visualizador. Mova as credenciais do arquivo JSON para a função. Mova todas as chamadas do SDK do frontend para a função."

    ],

    correctAnswer: 0,

    explanation: "A opção A é a melhor solução porque usa o Lambda@Edge para mover as chamadas do SDK para a função Lambda, eliminando a necessidade de armazenar credenciais no código do aplicativo. O Lambda@Edge permite executar código no CloudFront, mais próximo do usuário, melhorando o desempenho. A opção B usa CloudFront Functions, que são mais leves que o Lambda@Edge, mas não suportam chamadas para o AWS STS. As opções C e D não resolvem o problema de armazenar credenciais no código do aplicativo."

  },

  {

    id: 6,

    text: "Um desenvolvedor está atualizando várias funções do AWS Lambda e percebe que todas as funções do Lambda compartilham as mesmas bibliotecas personalizadas. O desenvolvedor deseja centralizar todas as bibliotecas, atualizar as bibliotecas de forma conveniente e manter o controle de versão das bibliotecas. Qual solução atenderá a esses requisitos com o MÍNIMO esforço de desenvolvimento?",

    options: [

      "Crie um repositório AWS CodeArtifact que contenha todas as bibliotecas personalizadas.",

      "Crie uma imagem de contêiner personalizada para as funções Lambda para salvar todas as bibliotecas personalizadas.",

      "Crie uma camada Lambda que contenha todas as bibliotecas personalizadas.",

      "Crie um sistema de arquivos Amazon Elastic File System (Amazon EFS) para armazenar todas as bibliotecas personalizadas."

    ],

    correctAnswer: 2,

    explanation: "As camadas Lambda permitem empacotar e implantar bibliotecas compartilhadas com funções Lambda. Isso simplifica as atualizações e o controle de versão das bibliotecas, pois você pode atualizar a camada e todas as funções que a usam serão atualizadas automaticamente. As outras opções envolvem mais esforço de desenvolvimento ou não são tão adequadas para o caso de uso."

  },

  {

    id: 7,

    text: "Um desenvolvedor deseja usar o AWS Elastic Beanstalk para testar uma nova versão de um aplicativo em um ambiente de teste. Qual método de implantação oferece a implantação MAIS RÁPIDA?",

    options: [

      "Imutável",

      "Rolante",

      "Rolante com lote adicional",

      "Tudo de uma vez"

    ],

    correctAnswer: 3,

    explanation: "A implantação 'Tudo de uma vez' é a mais rápida porque substitui todas as instâncias do ambiente pela nova versão simultaneamente. No entanto, ela também causa tempo de inatividade durante a implantação, o que não é ideal para ambientes de produção. As outras opções minimizam o tempo de inatividade, mas são mais lentas."

  },

  {

    id: 8,

    text: "Uma empresa está migrando aplicativos internos legados para a AWS. A liderança deseja reescrever o diretório interno de funcionários para usar os serviços nativos da AWS. Um desenvolvedor precisa criar uma solução para armazenar detalhes de contato de funcionários e fotos de alta resolução para uso com o novo aplicativo. Qual solução permitirá a pesquisa e recuperação de detalhes individuais de cada funcionário e fotos de alta resolução usando as APIs da AWS?",

    options: [

      "Codifique as informações de contato e as fotos de cada funcionário usando Base64. Armazene as informações em uma tabela do Amazon DynamoDB usando uma chave de classificação.",

      "Armazene as informações de contato de cada funcionário em uma tabela do Amazon DynamoDB junto com as chaves de objeto para as fotos armazenadas no Amazon S3.",

      "Use os pools de usuários do Amazon Cognito para implementar o diretório de funcionários em um método de software como serviço (SaaS) totalmente gerenciado.",

      "Armazene as informações de contato dos funcionários em uma instância de banco de dados do Amazon RDS DB com as fotos armazenadas no Amazon Elastic File System (Amazon EFS)."

    ],

    correctAnswer: 1,

    explanation: "Armazenar as informações de contato no DynamoDB e as fotos no S3 é uma boa prática. O DynamoDB é adequado para armazenar dados estruturados e fornecer pesquisa rápida, enquanto o S3 é adequado para armazenar grandes objetos como fotos. A opção B permite usar as APIs da AWS para recuperar ambos os tipos de dados de forma eficiente. A opção A envolve codificação desnecessária, a opção C não é adequada para armazenar fotos e a opção D envolve o uso de um sistema de arquivos para fotos, o que pode ser menos escalável e eficiente."

  },

  {

    id: 9,

    text: "Uma empresa está fornecendo acesso de leitura a objetos em um bucket do Amazon S3 para diferentes clientes. A empresa usa permissões do IAM para restringir o acesso ao bucket do S3. Os clientes podem acessar apenas seus próprios arquivos. Devido a um requisito regulamentar, a empresa precisa impor a criptografia em trânsito para interações com o Amazon S3. Qual solução atenderá a esses requisitos?",

    options: [

      "Adicione uma política de bucket ao bucket S3 para negar ações S3 quando a condição aws:SecureTransport for igual a falso.",

      "Adicione uma política de bucket ao bucket S3 para negar ações S3 quando a condição s3:x-amz-acl for igual a public-read.",

      "Adicione uma política IAM aos usuários IAM para impor o uso do AWS SDK.",

      "Adicione uma política IAM aos usuários IAM que permite ações S3 quando a condição s3:x-amz-acl for igual a bucket-owner-read."

    ],

    correctAnswer: 0,

    explanation: "A opção A é a correta. A condição `aws:SecureTransport` em uma política de bucket S3 pode ser usada para impor que todas as interações com o bucket S3 usem conexões seguras (HTTPS). Se a condição for definida como `false`, qualquer tentativa de acessar o bucket S3 usando HTTP será negada. Essa é uma maneira eficaz de garantir a criptografia em trânsito. As outras opções não abordam diretamente a criptografia em trânsito."

  },

  {

    id: 10,

    text: "Uma empresa tem um aplicativo de armazenamento de imagens da web que é executado na AWS. A empresa hospeda o aplicativo em instâncias do Amazon EC2 em um grupo Auto Scaling. O grupo Auto Scaling atua como o grupo de destino para um Application Load Balancer (ALB) e usa um bucket do Amazon S3 para armazenar as imagens à venda. A empresa deseja desenvolver um recurso para testar solicitações do sistema. O recurso direcionará as solicitações para um grupo de destino separado que hospeda uma nova versão beta do aplicativo. Qual solução atenderá a esse requisito com o MÍNIMO esforço?",

    options: [

      "Crie um novo grupo Auto Scaling e grupo de destino para a versão beta do aplicativo. Atualize a regra de roteamento do ALB com uma condição que procura um cookie chamado version que tenha um valor de beta. Atualize o código do sistema de teste para usar este cookie para testar a versão beta do aplicativo.",

      "Crie um novo ALB, grupo Auto Scaling e grupo de destino para a versão beta do aplicativo. Configure um registro Amazon Route 53 alternativo para o novo endpoint do ALB. Use o endpoint alternativo do Route 53 nas solicitações do sistema de teste para testar a versão beta do aplicativo.",

      "Crie um novo ALB, grupo Auto Scaling e grupo de destino para a versão beta do aplicativo. Use o Amazon CloudFront com Lambda@Edge para determinar qual solicitação específica irá para o novo ALB. Use o endpoint do CloudFront para enviar as solicitações do sistema de teste para testar a versão beta do aplicativo.",

      "Crie um novo grupo Auto Scaling e grupo de destino para a versão beta do aplicativo. Atualize a regra de roteamento do ALB com uma condição que procura um cookie chamado version que tenha um valor de beta. Use o Amazon CloudFront com Lambda@Edge para atualizar as solicitações do sistema de teste para adicionar o cookie necessário quando as solicitações forem para o ALB."

    ],

    correctAnswer: 0,

    explanation: "A opção A é a solução mais eficiente porque usa os recursos existentes do ALB para direcionar o tráfego com base em um cookie. Isso evita a necessidade de criar novos recursos como um novo ALB ou usar serviços mais complexos como o CloudFront e o Lambda@Edge. As outras opções envolvem mais complexidade e custos adicionais."

  },

  {

    id: 11,

    text: "Uma equipe está desenvolvendo um aplicativo implantado em instâncias do Amazon EC2. Durante o teste, a equipe recebe um erro. As instâncias do EC2 não conseguem acessar um bucket do Amazon S3. Quais etapas a equipe deve seguir para solucionar esse problema? (Escolha dois.)",

    options: [

      "Verifique se a política atribuída à função IAM anexada às instâncias do EC2 concede acesso ao Amazon S3.",

      "Verifique a política do bucket S3 para validar as permissões de acesso para o bucket S3.",

      "Verifique se a política atribuída ao usuário IAM anexado às instâncias do EC2 concede acesso ao Amazon S3.",

      "Verifique a política de ciclo de vida do S3 para validar as permissões atribuídas ao bucket S3.",

      "Verifique os grupos de segurança atribuídos às instâncias do EC2. Certifique-se de que uma regra não está bloqueando o acesso ao Amazon S3."

    ],

    correctAnswer: [0, 1],

    explanation: "As opções A e B são as corretas. Para solucionar problemas de acesso ao S3 a partir de instâncias EC2, é fundamental verificar as permissões do IAM atribuídas às instâncias (opção A) e as políticas do bucket S3 (opção B). As opções C, D e E não são diretamente relevantes para solucionar o problema de acesso ao S3 a partir de instâncias EC2.",

  },

  {

    id: 12,

    text: "Um desenvolvedor está trabalhando em um site de comércio eletrônico. O desenvolvedor deseja revisar os logs do servidor sem fazer login em cada um dos servidores de aplicativos individualmente. O site é executado em várias instâncias do Amazon EC2, é escrito em Python e precisa ser altamente disponível. Como o desenvolvedor pode atualizar o aplicativo para atender a esses requisitos com o MÍNIMO de alterações?",

    options: [

      "Reescreva o aplicativo para ser nativo da nuvem e para ser executado no AWS Lambda, onde os logs podem ser revisados no Amazon CloudWatch.",

      "Configure o registro centralizado usando o Amazon OpenSearch Service, Logstash e OpenSearch Dashboards.",

      "Reduza a escala do aplicativo para uma instância EC2 maior, onde apenas uma instância está gravando os logs.",

      "Instale o agente unificado do Amazon CloudWatch nas instâncias do EC2. Configure o agente para enviar os logs do aplicativo para o CloudWatch."

    ],

    correctAnswer: 3,

    explanation: "A opção D é a solução mais eficiente e com o mínimo de alterações. O agente do CloudWatch permite coletar logs de todas as instâncias EC2 e centralizá-los no CloudWatch, facilitando a revisão sem login individual. A opção A envolve uma reescrita significativa do aplicativo, a opção B é mais complexa e cara, e a opção C compromete a alta disponibilidade.",

  },

  {

    id: 13,

    text: "Uma empresa está criando um aplicativo que processa arquivos .csv do Amazon S3. Um desenvolvedor criou um bucket S3. O desenvolvedor também criou uma função AWS Lambda para processar os arquivos .csv do bucket S3. Qual combinação de etapas invocará a função Lambda quando um arquivo .csv for carregado no Amazon S3? (Escolha dois.)",

    options: [

      "Crie uma regra do Amazon EventBridge. Configure a regra com um padrão para corresponder ao evento de criação do objeto S3.",

      "Agende uma regra do Amazon EventBridge para executar uma nova função Lambda para verificar o bucket S3.",

      "Adicione um gatilho à função Lambda existente. Defina o tipo de gatilho como EventBridge. Selecione a regra do Amazon EventBridge.",

      "Crie uma nova função Lambda para verificar o bucket S3 em busca de objetos S3 adicionados recentemente.",

      "Adicione regras de ciclo de vida do S3 para invocar a função Lambda existente."

    ],

    correctAnswer: [0, 2],

    explanation: "As opções A e C são as corretas. O Amazon EventBridge pode ser configurado para reagir a eventos do S3, incluindo a criação de objetos. Um gatilho Lambda pode ser configurado para ser invocado por uma regra do EventBridge. A opção B é ineficiente (polling), e as opções D e E não são formas corretas de invocar o Lambda em resposta a uploads do S3.",

  },

  {

    id: 14,

    text: "Um desenvolvedor precisa criar um modelo do AWS CloudFormation que preencha automaticamente a variável da região da AWS que implanta o modelo do CloudFormation. Qual é a maneira MAIS eficiente operacionalmente de determinar a região na qual o modelo está sendo implantado?",

    options: [

      "Use o pseudo parâmetro AWS::Region.",

      "Exija a região como um parâmetro do CloudFormation.",

      "Encontre a região do pseudo parâmetro AWS::StackId usando a função intrínseca Fn::Split.",

      "Importe dinamicamente a região referenciando o parâmetro relevante no AWS Systems Manager Parameter Store."

    ],

    correctAnswer: 0,

    explanation: "O pseudo parâmetro AWS::Region fornece a região na qual a pilha do CloudFormation está sendo criada. É a maneira mais eficiente e direta de obter essa informação dentro do modelo. As outras opções são mais complexas e menos eficientes.",

  },

  {

    id: 15,

    text: "Uma empresa tem centenas de funções AWS Lambda que a equipe de QA da empresa precisa testar usando os URLs da função Lambda. Um desenvolvedor precisa configurar a autenticação das funções Lambda para permitir o acesso para que o grupo QA IAM possa invocar as funções Lambda usando os URLs públicos. Qual solução atenderá a esses requisitos?",

    options: [

      "Crie um script da CLI que faça um loop nas funções Lambda para adicionar um URL de função Lambda com o tipo de autenticação AWS_IAM. Execute outro script para criar uma política baseada em identidade IAM que permita a ação lambda:InvokeFunctionUrl para todos os Nomes de Recursos da Amazon (ARNs) da função Lambda. Anexe a política ao grupo QA IAM.",

      "Crie um script da CLI que faça um loop nas funções Lambda para adicionar um URL de função Lambda com o tipo de autenticação NONE. Execute outro script para criar uma política baseada em recursos IAM que permita a ação lambda:InvokeFunctionUrl para todos os Nomes de Recursos da Amazon (ARNs) da função Lambda. Anexe a política ao grupo QA IAM.",

      "Crie um script da CLI que faça um loop nas funções Lambda para adicionar um URL de função Lambda com o tipo de autenticação AWS_IAM. Execute outro script para fazer um loop nas funções Lambda para criar uma política baseada em identidade IAM que permita a ação lambda:InvokeFunctionUrl do Nome de Recurso da Amazon (ARN) do grupo QA IAM.",

      "Crie um script da CLI que faça um loop nas funções Lambda para adicionar um URL de função Lambda com o tipo de autenticação NONE. Execute outro script para fazer um loop nas funções Lambda para criar uma política baseada em recursos IAM que permita a ação lambda:InvokeFunctionUrl do Nome de Recurso da Amazon (ARN) do grupo QA IAM."

    ],

    correctAnswer: 0,

    explanation: "A opção A é a correta. Ao usar o tipo de autenticação AWS_IAM para os URLs da função Lambda e criar uma política IAM que permite ao grupo QA invocar essas funções, você controla o acesso por meio do IAM, que é o mecanismo padrão de controle de acesso da AWS. As outras opções usam o tipo de autenticação NONE, que não fornece autenticação e, portanto, não é seguro.",

  },

  {

    id: 16,

    text: "Um desenvolvedor mantém um aplicativo de negócios crítico que usa o Amazon DynamoDB como armazenamento de dados principal. A tabela do DynamoDB contém milhões de documentos e recebe 30 a 60 solicitações por minuto. O desenvolvedor precisa realizar o processamento quase em tempo real nos documentos quando eles são adicionados ou atualizados na tabela do DynamoDB. Como o desenvolvedor pode implementar esse recurso com a MENOR quantidade de alterações no código do aplicativo existente?",

    options: [

      "Configure um trabalho cron em uma instância do Amazon EC2. Execute um script a cada hora para consultar a tabela em busca de alterações e processar os documentos.",

      "Habilite um fluxo do DynamoDB na tabela. Invoque uma função AWS Lambda para processar os documentos.",

      "Atualize o aplicativo para enviar uma solicitação PutEvents para o Amazon EventBridge. Crie uma regra do EventBridge para invocar uma função AWS Lambda para processar os documentos.",

      "Atualize o aplicativo para processar os documentos de forma síncrona diretamente após a gravação do DynamoDB."

    ],

    correctAnswer: 1,

    explanation: "A opção B é a mais eficiente. Os fluxos do DynamoDB permitem capturar um fluxo ordenado de modificações em uma tabela e invocar uma função Lambda em resposta a essas modificações. Isso permite o processamento em tempo real com o mínimo de alterações no código do aplicativo existente. As outras opções são menos eficientes ou envolvem mais alterações no código.",

  },

  {

    id: 17,

    text: "Um desenvolvedor está escrevendo um aplicativo para uma empresa. O aplicativo será implantado no Amazon EC2 e usará um banco de dados Amazon RDS para Microsoft SQL Server. A equipe de segurança da empresa exige que as credenciais do banco de dados sejam alternadas pelo menos semanalmente. Como o desenvolvedor deve configurar as credenciais do banco de dados para este aplicativo?",

    options: [

      "Crie um usuário de banco de dados. Armazene o nome de usuário e a senha em um parâmetro de string segura do AWS Systems Manager Parameter Store. Habilite a rotação da chave do AWS Key Management Service (AWS KMS) usada para criptografar o parâmetro.",

      "Habilite a autenticação IAM para o banco de dados. Crie um usuário de banco de dados para uso com a autenticação IAM. Habilite a rotação de senha.",

      "Crie um usuário de banco de dados. Armazene o nome de usuário e a senha em um segredo do AWS Secrets Manager que tenha a rotação diária habilitada.",

      "Use os dados do usuário do EC2 para criar um usuário de banco de dados. Forneça o nome de usuário e a senha em variáveis de ambiente para o aplicativo."

    ],

    correctAnswer: 2,

    explanation: "A opção C é a melhor. O AWS Secrets Manager é projetado para gerenciar segredos de banco de dados, incluindo rotação automática. Isso atende aos requisitos de segurança e rotação. As outras opções são menos seguras ou não fornecem rotação automática.",

  },

  {

    id: 18,

    text: "Um aplicativo de mensagens em tempo real usa as APIs WebSocket do Amazon API Gateway com serviço HTTP de backend. Um desenvolvedor precisa criar um recurso no aplicativo para identificar um cliente que se conecta e desconecta continuamente da conexão WebSocket. O desenvolvedor também precisa da capacidade de remover o cliente. Qual combinação de alterações o desenvolvedor deve fazer no aplicativo para atender a esses requisitos? (Escolha dois.)",

    options: [

      "Mude para APIs HTTP no serviço de backend.",

      "Mude para APIs REST no serviço de backend.",

      "Use o URL de retorno de chamada para desconectar o cliente do serviço de backend.",

      "Adicione código para rastrear o status do cliente no Amazon ElastiCache no serviço de backend.",

      "Implemente rotas $connect e $disconnect no serviço de backend."

    ],

    correctAnswer: [4, 5],

    explanation: "As opções D e E são corretas. As rotas $connect e $disconnect do WebSocket API Gateway permitem rastrear o status do cliente, e o ElastiCache pode armazenar esse status. As outras opções não são diretamente relevantes para rastrear conexões de clientes.",

  },

  {

    id: 19,

    text: "Um desenvolvedor está criando um aplicativo que dará aos usuários a capacidade de armazenar fotos de seus telefones celulares na nuvem. O aplicativo precisa suportar dezenas de milhares de usuários. O aplicativo usa uma API REST do Amazon API Gateway integrada com funções AWS Lambda para processar as fotos. O aplicativo armazena detalhes sobre as fotos no Amazon DynamoDB. Os usuários precisam criar uma conta para acessar o aplicativo. No aplicativo, os usuários devem ser capazes de carregar fotos e recuperar fotos carregadas anteriormente. As fotos variam em tamanho de 300 KB a 5 MB. Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",

    options: [

      "Use os pools de usuários do Amazon Cognito para gerenciar contas de usuário. Crie um autorizador de pool de usuários do Amazon Cognito no API Gateway para controlar o acesso à API. Use a função Lambda para armazenar as fotos e os detalhes na tabela do DynamoDB. Recupere as fotos carregadas anteriormente diretamente da tabela do DynamoDB.",

      "Use os pools de usuários do Amazon Cognito para gerenciar contas de usuário. Crie um autorizador de pool de usuários do Amazon Cognito no API Gateway para controlar o acesso à API. Use a função Lambda para armazenar as fotos no Amazon S3. Armazene a chave S3 do objeto como parte dos detalhes da foto na tabela do DynamoDB. Recupere as fotos carregadas anteriormente consultando o DynamoDB para obter a chave S3.",

      "Crie um usuário IAM para cada usuário do aplicativo durante o processo de inscrição. Use a autenticação IAM para acessar a API do API Gateway. Use a função Lambda para armazenar as fotos no Amazon S3. Armazene a chave S3 do objeto como parte dos detalhes da foto na tabela do DynamoDB. Recupere as fotos carregadas anteriormente consultando o DynamoDB para obter a chave S3.",

      "Crie uma tabela de usuários no DynamoDB. Use a tabela para gerenciar contas de usuário. Crie um autorizador Lambda que valide as credenciais do usuário na tabela de usuários. Integre o autorizador Lambda com o API Gateway para controlar o acesso à API. Use a função Lambda para armazenar as fotos no Amazon S3. Armazene a chave S3 do objeto como parte dos detalhes da foto na tabela do DynamoDB. Recupere as fotos carregadas anteriormente consultando o DynamoDB para obter a chave S3."

    ],

    correctAnswer: 1,

    explanation: "A opção B é a melhor. O Cognito gerencia usuários, o API Gateway controla o acesso e o S3 armazena as fotos, com o DynamoDB armazenando apenas os metadados. Isso é escalável e eficiente. As outras opções são mais complexas ou menos escaláveis.",

  },

  {

    id: 20,

    text: "Um desenvolvedor escreveu o código para um aplicativo e deseja compartilhá-lo com outros desenvolvedores da equipe para receber feedback. O código do aplicativo compartilhado precisa ser armazenado a longo prazo com várias versões e rastreamento de alterações em lote. Qual serviço da AWS o desenvolvedor deve usar?",

    options: [

      "AWS CodeBuild",

      "Amazon S3",

      "AWS CodeCommit",

      "AWS Cloud9"

    ],

    correctAnswer: 2,

    explanation: "O AWS CodeCommit é um serviço de controle de versão de código-fonte totalmente gerenciado que hospeda repositórios Git privados. Ele é projetado para armazenar e versionar código de forma segura e escalável, o que o torna ideal para compartilhar código com equipes e rastrear alterações ao longo do tempo. As outras opções não são projetadas para esse propósito específico.",

  },

  {

    id: 21,

    text: "O desenvolvedor de uma empresa está criando um site estático para ser implantado no Amazon S3 para um ambiente de produção. O site se integra a um banco de dados Amazon Aurora PostgreSQL usando uma função AWS Lambda. O site implantado na produção usará um alias Lambda que aponta para uma versão específica da função Lambda. A empresa deve alternar as credenciais do banco de dados a cada 2 semanas. As funções Lambda que a empresa implantou anteriormente devem ser capazes de usar as credenciais mais recentes. Qual solução atenderá a esses requisitos?",

    options: [

      "Armazene as credenciais do banco de dados no AWS Secrets Manager. Ative a rotação. Escreva o código na função Lambda para recuperar as credenciais do Secrets Manager.",

      "Inclua as credenciais do banco de dados como parte do código da função Lambda. Atualize as credenciais periodicamente e implante a nova função Lambda.",

      "Use variáveis de ambiente Lambda. Atualize as variáveis de ambiente quando novas credenciais estiverem disponíveis.",

      "Armazene as credenciais do banco de dados no AWS Systems Manager Parameter Store. Ative a rotação. Escreva o código na função Lambda para recuperar as credenciais do Systems Manager Parameter Store."

    ],

    correctAnswer: 0,

    explanation: "O AWS Secrets Manager é projetado para armazenar com segurança credenciais de banco de dados e outras informações confidenciais. Ele oferece rotação automática de credenciais, o que atende ao requisito de rotação regular. As outras opções não são tão seguras ou não fornecem rotação automática.",

  },

  {

    id: 22,

    text: "Um desenvolvedor está desenvolvendo um aplicativo que usa solicitações assinadas (Signature Version 4) para chamar outros serviços da AWS. O desenvolvedor criou uma solicitação canônica, criou a string para assinar e calculou as informações de assinatura. Quais métodos o desenvolvedor poderia usar para concluir uma solicitação assinada? (Escolha dois.)",

    options: [

      "Adicione a assinatura a um cabeçalho HTTP chamado Authorization.",

      "Adicione a assinatura a um cookie de sessão.",

      "Adicione a assinatura a um cabeçalho HTTP chamado Authentication.",

      "Adicione a assinatura a um parâmetro de string de consulta chamado X-Amz-Signature.",

      "Adicione a assinatura a um cabeçalho HTTP chamado WWW-Authenticate."

    ],

    correctAnswer: [0, 3],

    explanation: "A assinatura deve ser adicionada ao cabeçalho `Authorization` ou como um parâmetro de string de consulta chamado `X-Amz-Signature`. Essas são as maneiras padrão de fornecer informações de autenticação em solicitações HTTP assinadas. As outras opções não são válidas para esse propósito.",

  },

  {

    id: 23,

    text: "Uma empresa deve implantar todas as suas instâncias de banco de dados do Amazon RDS DB usando modelos do AWS CloudFormation como parte da automação de integração contínua e entrega contínua (CI/CD) do AWS CodePipeline. A senha principal para a instância do banco de dados deve ser gerada automaticamente como parte do processo de implantação. Qual solução atenderá a esses requisitos com o MÍNIMO esforço de desenvolvimento?",

    options: [

      "Crie um recurso personalizado do CloudFormation com suporte do AWS Lambda. Escreva o código Lambda que gera uma string segura. Retorne o valor da string segura como um campo de dados do objeto de resposta de recurso personalizado. Use a função intrínseca Fn::GetAtt do CloudFormation para obter o valor da string segura. Use o valor para criar a instância do banco de dados.",

      "Use a ação AWS CodeBuild do CodePipeline para gerar uma string segura usando o seguinte comando da AWS CLI: aws secretsmanager get-random-password. Passe a string segura gerada como um parâmetro do CloudFormation com o atributo NoEcho definido como true. Use a referência do parâmetro para criar a instância do banco de dados.",

      "Crie um recurso personalizado do CloudFormation com suporte do AWS Lambda. Escreva o código Lambda que gera uma string segura. Retorne o valor da string segura como um campo de dados do objeto de resposta de recurso personalizado. Use a função intrínseca Fn::GetAtt do CloudFormation para obter um valor da string segura. Crie segredos no AWS Secrets Manager. Use a referência dinâmica secretsmanager para usar o valor armazenado no segredo para criar a instância do banco de dados.",

      "Use o recurso AWS::SecretsManager::Secret para gerar uma string segura. Armazene a string segura como um segredo no AWS Secrets Manager. Use a referência dinâmica secretsmanager para usar o valor armazenado no segredo para criar a instância do banco de dados."

    ],

    correctAnswer: 3,

    explanation: "A opção D é a solução mais eficiente. O recurso `AWS::SecretsManager::Secret` do CloudFormation pode gerar uma string segura e armazená-la como um segredo no Secrets Manager. A referência dinâmica `secretsmanager` permite usar o valor do segredo diretamente na definição do recurso RDS, sem a necessidade de código Lambda personalizado."

  },

  {

    id: 24,

    text: "Uma organização está armazenando arquivos grandes no Amazon S3 e está escrevendo um aplicativo da web para exibir metadados sobre os arquivos para os usuários finais. Com base nos metadados, um usuário seleciona um objeto para baixar. A organização precisa de um mecanismo para indexar os arquivos e fornecer recuperação de latência de milissegundos de um dígito para os metadados. Qual serviço da AWS deve ser usado para realizar isso?",

    options: [

      "Amazon DynamoDB",

      "Amazon EC2",

      "AWS Lambda",

      "Amazon RDS"

    ],

    correctAnswer: 0,

    explanation: "O Amazon DynamoDB é um serviço de banco de dados NoSQL rápido e flexível para aplicativos que exigem latência de milissegundos de um dígito em qualquer escala. Ele é adequado para armazenar metadados e fornecer recuperação rápida. Os outros serviços não são tão adequados para esse caso de uso."

  },

  {

    id: 25,

    text: "Um desenvolvedor está criando um modelo do AWS Serverless Application Model (AWS SAM). O AWS SAM template contém a definição de múltiplas funções AWS Lambda, um bucket do Amazon S3, e uma distribuição do Amazon CloudFront. Uma das funções Lambda roda no Lambda@Edge na distribuição CloudFront. O bucket S3 é configurado como uma origem para a distribuição CloudFront. Quando o desenvolvedor implanta o AWS SAM template na região eu-west-1, a criação da stack falha. Qual das seguintes pode ser a razão para esse problema?",

    options: [

      "Distribuições CloudFront podem ser criadas apenas na região us-east-1.",

      "Funções Lambda@Edge podem ser criadas apenas na região us-east-1.",

      "Um único AWS SAM template não pode conter múltiplas funções Lambda.",

      "A distribuição CloudFront e o bucket S3 não podem ser criados na mesma região."

    ],

    correctAnswer: 1,

    explanation: "Funções Lambda@Edge devem ser criadas na região `us-east-1`, mesmo que a distribuição CloudFront esteja em outra região. CloudFront distributions podem ser criadas em qualquer região, e um template SAM pode conter múltiplas funções Lambda. Buckets S3 podem ser criados na mesma região que a distribuição CloudFront."

  },

  {

    id: 26,

    text: "Um desenvolvedor está integrando o Amazon ElastiCache em um aplicativo. O cache armazenará dados de um banco de dados. Os dados em cache devem preencher painéis em tempo real. Qual estratégia de cache atenderá a esses requisitos?",

    options: [

      "Um cache read-through",

      "Um cache write-behind",

      "Um cache de carregamento lento",

      "Um cache write-through"

    ],

    correctAnswer: 3,

    explanation: "Um cache write-through atualiza o cache toda vez que os dados são gravados no banco de dados. Isso garante que os dados no cache estejam sempre atualizados e prontos para serem usados para preencher painéis em tempo real. As outras estratégias de cache não garantem a atualização imediata dos dados no cache."

  },

  {

    id: 27,

    text: "Um desenvolvedor está criando uma função AWS Lambda. A função Lambda precisa de uma biblioteca externa para se conectar a uma solução de terceiros. A biblioteca externa é uma coleção de arquivos com um tamanho total de 100 MB. O desenvolvedor precisa disponibilizar a biblioteca externa para o ambiente de execução do Lambda e reduzir o espaço do pacote Lambda. Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",

    options: [

      "Crie uma camada Lambda para armazenar a biblioteca externa. Configure a função Lambda para usar a camada.",

      "Crie um bucket do Amazon S3. Carregue a biblioteca externa no bucket S3. Monte a pasta do bucket S3 na função Lambda. Importe a biblioteca usando a pasta apropriada no ponto de montagem.",

      "Carregue a biblioteca externa para o diretório /tmp da função Lambda durante a implantação do pacote Lambda. Importe a biblioteca do diretório /tmp.",

      "Crie um volume do Amazon Elastic File System (Amazon EFS). Carregue a biblioteca externa no volume EFS. Monte o volume EFS na função Lambda. Importe a biblioteca usando a pasta apropriada no ponto de montagem."

    ],

    correctAnswer: 0,

    explanation: "As camadas Lambda permitem empacotar dependências e compartilhá-las entre funções. Isso reduz o tamanho do pacote de implantação da função e simplifica o gerenciamento de dependências. As outras opções são mais complexas ou menos eficientes."

  },

  {

    id: 28,

    text: "Uma empresa tem um aplicativo front-end que é executado em quatro instâncias do Amazon EC2 atrás de um Elastic Load Balancer (ELB) em um ambiente de produção provisionado pelo AWS Elastic Beanstalk. Um desenvolvedor precisa implantar e testar um novo código de aplicativo ao atualizar a plataforma Elastic Beanstalk da versão atual para uma versão mais recente do Node.js. A solução deve resultar em zero tempo de inatividade para o aplicativo. Qual solução atende a esses requisitos?",

    options: [

      "Clone o ambiente de produção para uma versão de plataforma diferente. Implante o novo código do aplicativo e teste-o. Troque os URLs do ambiente após a verificação.",

      "Implante o novo código do aplicativo em uma implantação all-at-once nas instâncias EC2 existentes. Teste o código. Reimplante o código anterior se a verificação falhar.",

      "Execute uma atualização imutável para implantar o novo código do aplicativo em novas instâncias EC2. Sirva o tráfego para as novas instâncias depois que elas passarem nas verificações de integridade.",

      "Use uma implantação contínua para o novo código do aplicativo. Aplique o código a um subconjunto de instâncias EC2 até que os testes sejam aprovados. Reimplante o código anterior se os testes falharem."

    ],

    correctAnswer: 2,

    explanation: "As atualizações imutáveis criam um novo conjunto de instâncias EC2 com a nova versão do aplicativo e da plataforma e, em seguida, trocam o tráfego para as novas instâncias. Isso garante zero tempo de inatividade e permite um rollback fácil se necessário. As outras opções envolvem algum grau de tempo de inatividade ou são mais complexas."

  },

  {

    id: 29,

    text: "Um desenvolvedor está criando uma função AWS Lambda. A função Lambda consumirá mensagens de uma fila do Amazon Simple Queue Service (Amazon SQS). O desenvolvedor deseja integrar o teste de unidade como parte do processo de integração contínua e entrega contínua (CI/CD) da função. Como o desenvolvedor pode testar a função da unidade?",

    options: [

      "Crie um modelo do AWS CloudFormation que cria uma fila SQS e implanta a função Lambda. Crie uma pilha a partir do modelo durante o processo de CI/CD. Invoque a função implantada. Verifique a saída.",

      "Crie um evento SQS para testes. Use um teste que consome mensagens da fila SQS durante o processo Cl/CD da função.",

      "Crie uma fila SQS para testes. Use esta fila SQS no teste de unidade do aplicativo. Execute os testes de unidade durante o processo de CI/CD.",

      "Use o comando aws lambda invoke com um evento de teste durante o processo CIICD."

    ],

    correctAnswer: 3,

    explanation: "O comando `aws lambda invoke` permite invocar uma função Lambda com um evento de teste e verificar a saída. Isso é adequado para testes de unidade. As outras opções são mais complexas ou não são testes de unidade reais."

  },

  {

    id: 30,

    text: "Uma empresa recebe pedidos de alimentos de vários parceiros. A empresa tem um aplicativo de microsserviços que usa APIs do Amazon API Gateway com integração AWS Lambda. Cada parceiro envia pedidos chamando uma API personalizada exposta por meio do API Gateway. A chamada da API invoca uma função Lambda compartilhada para processar os pedidos. Os parceiros precisam ser notificados após a função Lambda processar os pedidos. Cada parceiro deve receber atualizações apenas para os pedidos do próprio parceiro. A empresa deseja adicionar novos parceiros no futuro com o mínimo de alterações de código possível. Qual solução atenderá a esses requisitos da maneira MAIS escalável?",

    options: [

      "Crie um tópico diferente do Amazon Simple Notification Service (Amazon SNS) para cada parceiro. Configure a função Lambda para publicar mensagens para cada parceiro no tópico SNS do parceiro.",

      "Crie uma função Lambda diferente para cada parceiro. Configure a função Lambda para notificar o endpoint de serviço de cada parceiro diretamente.",

      "Crie um tópico do Amazon Simple Notification Service (Amazon SNS). Configure a função Lambda para publicar mensagens com atributos específicos no tópico SNS. Assine cada parceiro no tópico SNS. Aplique a política de filtro apropriada às assinaturas de tópico.",

      "Crie um tópico do Amazon Simple Notification Service (Amazon SNS). Assine todos os parceiros no tópico SNS."

    ],

    correctAnswer: 2,

    explanation: "A opção C é a mais escalável. Usar um único tópico SNS com atributos e políticas de filtro permite adicionar novos parceiros sem alterar o código. As outras opções envolvem mais código ou não são tão escaláveis."

  },

  {

    id: 31,

    text: "Um desenvolvedor está trabalhando em um aplicativo da web que usa o Amazon DynamoDB como seu armazenamento de dados. O aplicativo tem duas tabelas do DynamoDB: uma tabela chamada artists e uma tabela chamada songs. A tabela artists tem artistName como chave de partição. A tabela songs tem songName como chave de partição e artistName como chave de classificação. Os padrões de uso da tabela incluem a recuperação de várias músicas e artistas em uma única operação de banco de dados da página da web. O desenvolvedor precisa de uma maneira de recuperar essas informações com o mínimo de tráfego de rede e desempenho ótimo do aplicativo. Qual solução atenderá a esses requisitos?",

    options: [

      "Execute uma operação BatchGetltem que retorna itens das duas tabelas. Use a lista de chaves songName/artistName para a tabela songs e a lista de chaves artistName para a tabela artists.",

      "Crie um índice secundário local (LSI) na tabela songs que usa artistName como a chave de partição. Execute uma operação de consulta para cada artistName na tabela songs que filtra pela lista de songName. Execute uma operação de consulta para cada artistName na tabela artists.",

      "Execute uma operação BatchGetitem na tabela songs que usa as chaves songName/artistName. Execute uma operação BatchGetltem na tabela artists que usa artistName como a chave.",

      "Execute uma operação Scan em cada tabela que filtra pela lista de songName/artistName para a tabela songs e a lista de artistName na tabela artists."

    ],

    correctAnswer: 0,

    explanation: "A operação `BatchGetItem` é otimizada para recuperar vários itens de uma ou mais tabelas do DynamoDB em uma única chamada. Isso é mais eficiente do que fazer várias chamadas individuais e reduz o tráfego de rede. As outras opções envolvem mais chamadas ou operações menos eficientes."

  },

  {

    id: 32,

    text: "Uma empresa está desenvolvendo um aplicativo de comércio eletrônico que usa as APIs do Amazon API Gateway. O aplicativo usa o AWS Lambda como backend. A empresa precisa testar o código em um ambiente de teste dedicado e monitorado antes que a empresa libere o código para o ambiente de produção. Qual solução atenderá a esses requisitos?",

    options: [

      "Use um único estágio no API Gateway. Crie uma função Lambda para cada ambiente. Configure os clientes da API para enviar um parâmetro de consulta que indica o ambiente e a função Lambda específica.",

      "Use vários estágios no API Gateway. Crie uma única função Lambda para todos os ambientes. Adicione diferentes blocos de código para diferentes ambientes na função Lambda com base nas variáveis de ambiente Lambda.",

      "Use vários estágios no API Gateway. Crie uma função Lambda para cada ambiente. Configure as variáveis de estágio do API Gateway para rotear o tráfego para a função Lambda em diferentes ambientes.",

      "Use um único estágio no API Gateway. Configure os clientes da API para enviar um parâmetro de consulta que indica o ambiente. Adicione diferentes blocos de código para diferentes ambientes na função Lambda para corresponder ao valor do parâmetro de consulta."

    ],

    correctAnswer: 2,

    explanation: "Usar vários estágios no API Gateway permite ter diferentes configurações (e funções Lambda) para diferentes ambientes. Isso é mais limpo e gerenciável do que usar uma única função Lambda com blocos de código diferentes ou parâmetros de consulta para controlar o comportamento. As variáveis de estágio podem ser usadas para configurar o roteamento."

  },

  {

    id: 33,

    text: "Um desenvolvedor cria uma função AWS Lambda que recupera e agrupa dados de vários endpoints de API pública. A função Lambda foi atualizada e configurada para se conectar à sub-rede privada de um VPC. Um gateway de internet está anexado ao VPC. O VPC usa as configurações padrão de ACL de rede e grupo de segurança. O desenvolvedor descobre que a função Lambda não pode mais acessar a API pública. O desenvolvedor garantiu que a API pública esteja acessível, mas a função Lambda não consegue se conectar à API Como o desenvolvedor deve corrigir o problema de conexão?",

    options: [

      "Certifique-se de que a ACL de rede permite o tráfego de saída para a internet pública.",

      "Certifique-se de que o grupo de segurança permite o tráfego de saída para a internet pública.",

      "Certifique-se de que o tráfego de saída da sub-rede privada seja roteado para um gateway NAT público.",

      "Certifique-se de que o tráfego de saída da sub-rede privada seja roteado para um novo gateway de internet."

    ],

    correctAnswer: 2,

    explanation: "Quando uma função Lambda está em um VPC privado e precisa acessar a internet pública, ela precisa de um gateway NAT (Network Address Translation) público para permitir o tráfego de saída. As ACLs e grupos de segurança padrão geralmente permitem o tráfego, então as opções A e B são menos prováveis. Criar um novo gateway de internet (opção D) não resolveria o problema, pois o problema é o roteamento do tráfego de saída da sub-rede privada."

  },

  {

    id: 34,

    text: "Um desenvolvedor precisa armazenar variáveis de configuração para um aplicativo. O desenvolvedor precisa definir uma data e hora de expiração para a configuração. O desenvolvedor deseja receber notificações antes que a configuração expire. Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",

    options: [

      "Crie um parâmetro padrão no AWS Systems Manager Parameter Store. Defina os tipos de política Expiration e ExpirationNotification.",

      "Crie um parâmetro padrão no AWS Systems Manager Parameter Store. Crie uma função AWS Lambda para expirar a configuração e enviar notificações do Amazon Simple Notification Service (Amazon SNS) notificações.",

      "Crie um parâmetro avançado no AWS Systems Manager Parameter Store. Defina os tipos de política Expiration e ExpirationNotification.",

      "Crie um parâmetro avançado no AWS Systems Manager Parameter Store. Crie uma instância do Amazon EC2 com um trabalho cron para expirar a configuração e enviar notificações."

    ],

    correctAnswer: 2,

    explanation: "Os parâmetros avançados no AWS Systems Manager Parameter Store suportam políticas de expiração e notificação diretamente, sem a necessidade de funções Lambda ou instâncias EC2 adicionais. Isso oferece a menor sobrecarga operacional. Os parâmetros padrão não suportam essas políticas."

  },

  {

    id: 35,

    text: "Uma empresa está desenvolvendo um aplicativo sem servidor que consiste em várias funções AWS Lambda atrás das APIs do Amazon API Gateway. Um desenvolvedor precisa automatizar a implantação do código da função Lambda. O desenvolvedor implantará funções Lambda atualizadas com o AWS CodeDeploy. A implantação deve minimizar a exposição de possíveis erros para os usuários finais. Quando o aplicativo estiver em produção, o aplicativo não poderá sofrer tempo de inatividade fora da janela de manutenção especificada. Qual configuração de implantação atenderá a esses requisitos com o MENOR tempo de implantação?",

    options: [

      "Use a configuração de implantação in-place do AWS CodeDeploy para as funções Lambda. Mude todo o tráfego imediatamente após a implantação.",

      "Use a configuração de implantação linear do AWS CodeDeploy para mudar 10% do tráfego a cada minuto.",

      "Use a configuração de implantação all-at-once do AWS CodeDeploy para mudar todo o tráfego para as versões atualizadas imediatamente.",

      "Use a configuração de implantação canary predefinida do AWS CodeDeploy para mudar 10% do tráfego imediatamente e mudar o tráfego restante após 5 minutos."

    ],

    correctAnswer: 3,

    explanation: "A implantação canary predefinida do CodeDeploy permite uma mudança gradual de tráfego para a nova versão da função Lambda, minimizando o impacto de possíveis erros. A opção D oferece um bom equilíbrio entre velocidade de implantação e redução de riscos. As opções A e C são mais rápidas, mas mais arriscadas, e a opção B é mais lenta."

  },

  {

    id: 36,

    text: "Um desenvolvedor está trabalhando em um aplicativo da web que usa o Amazon DynamoDB como seu armazenamento de dados711. O aplicativo tem duas tabelas do DynamoDB: uma tabela chamada artists e uma tabela chamada songs. A tabela artists tem artistName como chave de partição. A tabela songs tem songName como chave de partição e artistName como chave de classificação. Os padrões de uso da tabela incluem a recuperação de várias músicas e artistas em uma única operação de banco de dados da página da web. O desenvolvedor precisa de uma maneira de recuperar essas informações com o mínimo de tráfego de rede e desempenho ótimo do aplicativo. Qual solução atenderá a esses requisitos?",

    options: [

      "Execute uma operação BatchGetltem que retorna itens das duas tabelas. Use a lista de chaves songName/artistName para a tabela songs e a lista de chaves artistName para a tabela artists.",

      "Crie um índice secundário local (LSI) na tabela songs que usa artistName como a chave de partição. Execute uma operação de consulta para cada artistName na tabela songs que filtra pela lista de songName. Execute uma operação de consulta para cada artistName na tabela artists.",

      "Execute uma operação BatchGetitem na tabela songs que usa as chaves songName/artistName. Execute uma operação BatchGetltem na tabela artists que usa artistName como a chave.",

      "Execute uma operação Scan em cada tabela que filtra pela lista de songName/artistName para a tabela songs e a lista de artistName na tabela artists."

    ],

    correctAnswer: 0,

    explanation: "A operação `BatchGetItem` é otimizada para recuperar vários itens de uma ou mais tabelas do DynamoDB em uma única chamada. Isso é mais eficiente do que fazer várias chamadas individuais e reduz o tráfego de rede. As outras opções envolvem mais chamadas ou operações menos eficientes."

  },

  {

    id: 37,

    text: "Uma empresa está desenvolvendo um aplicativo de comércio eletrônico que usa as APIs do Amazon API Gateway. O aplicativo usa o AWS Lambda como backend. A empresa precisa testar o código em um ambiente de teste dedicado e monitorado antes que a empresa libere o código para o ambiente de produção. Qual solução atenderá a esses requisitos?",

    options: [

      "Use um único estágio no API Gateway. Crie uma função Lambda para cada ambiente. Configure os clientes da API para enviar um parâmetro de consulta que indica o ambiente e a função Lambda específica.",

      "Use vários estágios no API Gateway. Crie uma única função Lambda para todos os ambientes. Adicione diferentes blocos de código para diferentes ambientes na função Lambda com base nas variáveis de ambiente Lambda.",

      "Use vários estágios no API Gateway. Crie uma função Lambda para cada ambiente. Configure as variáveis de estágio do API Gateway para rotear o tráfego para a função Lambda em diferentes ambientes.",

      "Use um único estágio no API Gateway. Configure os clientes da API para enviar um parâmetro de consulta que indica o ambiente. Adicione diferentes blocos de código para diferentes ambientes na função Lambda para corresponder ao valor do parâmetro de consulta."

    ],

    correctAnswer: 2,

    explanation: "Usar vários estágios no API Gateway permite ter diferentes configurações (e funções Lambda) para diferentes ambientes. Isso é mais limpo e gerenciável do que usar uma única função Lambda com blocos de código diferentes ou parâmetros de consulta para controlar o comportamento. As variáveis de estágio podem ser usadas para configurar o roteamento."

  },

  {

    id: 38,

    text: "Um desenvolvedor cria uma função AWS Lambda que recupera e agrupa dados de vários endpoints de API pública. A função Lambda foi atualizada e configurada para se conectar à sub-rede privada de um VPC. Um gateway de internet está anexado ao VPC. O VPC usa as configurações padrão de ACL de rede e grupo de segurança. O desenvolvedor descobre que a função Lambda não pode mais acessar a API pública. O desenvolvedor garantiu que a API pública esteja acessível, mas a função Lambda não consegue se conectar à API Como o desenvolvedor deve corrigir o problema de conexão?",

    options: [

      "Certifique-se de que a ACL de rede permite o tráfego de saída para a internet pública.",

      "Certifique-se de que o grupo de segurança permite o tráfego de saída para a internet pública.",

      "Certifique-se de que o tráfego de saída da sub-rede privada seja roteado para um gateway NAT público.",

      "Certifique-se de que o tráfego de saída da sub-rede privada seja roteado para um novo gateway de internet."

    ],

    correctAnswer: 2,

    explanation: "Quando uma função Lambda está em um VPC privado e precisa acessar a internet pública, ela precisa de um gateway NAT (Network Address Translation) público para permitir o tráfego de saída. As ACLs e grupos de segurança padrão geralmente permitem o tráfego, então as opções A e B são menos prováveis. Criar um novo gateway de internet (opção D) não resolveria o problema, pois o problema é o roteamento do tráfego de saída da sub-rede privada."

  },

  {

    id: 39,

    text: "Um desenvolvedor precisa armazenar variáveis de configuração para um aplicativo. O desenvolvedor precisa definir uma data e hora de expiração para a configuração. O desenvolvedor deseja receber notificações antes que a configuração expire. Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",

    options: [

      "Crie um parâmetro padrão no AWS Systems Manager Parameter Store. Defina os tipos de política Expiration e ExpirationNotification.",

      "Crie um parâmetro padrão no AWS Systems Manager Parameter Store. Crie uma função AWS Lambda para expirar a configuração e enviar notificações do Amazon Simple Notification Service (Amazon SNS) notificações.",

      "Crie um parâmetro avançado no AWS Systems Manager Parameter Store. Defina os tipos de política Expiration e ExpirationNotification.",

      "Crie um parâmetro avançado no AWS Systems Manager Parameter Store. Crie uma instância do Amazon EC2 com um trabalho cron para expirar a configuração e enviar notificações."

    ],

    correctAnswer: 2,

    explanation: "Os parâmetros avançados no AWS Systems Manager Parameter Store suportam políticas de expiração e notificação diretamente, sem a necessidade de funções Lambda ou instâncias EC2 adicionais. Isso oferece a menor sobrecarga operacional. Os parâmetros padrão não suportam essas políticas."

  },

  {

    id: 40,

    text: "Uma empresa está desenvolvendo um aplicativo sem servidor que consiste em várias funções AWS Lambda atrás das APIs do Amazon API Gateway. Um desenvolvedor precisa automatizar a implantação do código da função Lambda. O desenvolvedor implantará funções Lambda atualizadas com o AWS CodeDeploy. A implantação deve minimizar a exposição de possíveis erros para os usuários finais. Quando o aplicativo estiver em produção, o aplicativo não poderá sofrer tempo de inatividade fora da janela de manutenção especificada. Qual configuração de implantação atenderá a esses requisitos com o MENOR tempo de implantação?",

    options: [

      "Use a configuração de implantação in-place do AWS CodeDeploy para as funções Lambda. Mude todo o tráfego imediatamente após a implantação.",

      "Use a configuração de implantação linear do AWS CodeDeploy para mudar 10% do tráfego a cada minuto.",

      "Use a configuração de implantação all-at-once do AWS CodeDeploy para mudar todo o tráfego para as versões atualizadas imediatamente.",

      "Use a configuração de implantação canary predefinida do AWS CodeDeploy para mudar 10% do tráfego imediatamente e mudar o tráfego restante após 5 minutos."

    ],

    correctAnswer: 3,

    explanation: "A implantação canary predefinida do CodeDeploy permite uma mudança gradual de tráfego para a nova versão da função Lambda, minimizando o impacto de possíveis erros. A opção D oferece um bom equilíbrio entre velocidade de implantação e redução de riscos. As opções A e C são mais rápidas, mas mais arriscadas, e a opção B é mais lenta."

  },

  {

    id: 41,

    text: "Uma empresa criou quatro funções AWS Lambda que se conectam a um servidor de banco de dados relacional executado em uma instância do Amazon RDS. Uma equipe de segurança exige que a empresa altere automaticamente a senha do banco de dados a cada 30 dias. Qual solução atenderá a esses requisitos da forma MAIS segura?",

    options: [

      "Armazene as credenciais do banco de dados nas variáveis de ambiente da função Lambda. Implante a função Lambda com as novas credenciais a cada 30 dias.",

      "Armazene as credenciais do banco de dados no AWS Secrets Manager. Configure um cronograma de rotação de 30 dias para as credenciais.",

      "Armazene as credenciais do banco de dados nas strings seguras do AWS Systems Manager Parameter Store. Configure um cronograma de rotação de 30 dias para as strings seguras.",

      "Armazene as credenciais do banco de dados em um bucket do Amazon S3 que usa criptografia do lado do servidor com chaves de criptografia fornecidas pelo cliente (SSE-C). Configure um cronograma de rotação de chave de 30 dias para a chave do cliente."

    ],

    correctAnswer: 1,

    explanation: "O AWS Secrets Manager é projetado para armazenar com segurança credenciais de banco de dados e oferece rotação automática de credenciais. Isso atende aos requisitos de segurança e rotação. As outras opções são menos seguras ou não fornecem rotação automática."

  },

  {

    id: 42,

    text: "Um desenvolvedor está configurando um pipeline de implantação. O pipeline inclui um estágio de construção do AWS CodeBuild que requer acesso a um banco de dados para executar testes de integração. O desenvolvedor está usando um arquivo buildspec.yml para configurar a conexão com o banco de dados. A política da empresa exige a rotação automática de todas as credenciais do banco de dados. Qual solução lidará com as credenciais do banco de dados da forma MAIS segura?",

    options: [

      "Recupere as credenciais de variáveis que estão embutidas no arquivo buildspec.yml. Configure uma função AWS Lambda para girar as credenciais.",

      "Recupere as credenciais de uma variável de ambiente vinculada a um parâmetro SecureString no AWS Systems Manager Parameter Store. Configure o Parameter Store para rotação automática.",

      "Recupere as credenciais de uma variável de ambiente vinculada a um segredo do AWS Secrets Manager. Configure o Secrets Manager para rotação automática.",

      "Recupere as credenciais de uma variável de ambiente que contém a string de conexão em texto não criptografado. Configure um evento do Amazon EventBridge para girar as credenciais."

    ],

    correctAnswer: 2,

    explanation: "O AWS Secrets Manager é projetado para armazenar e girar credenciais de banco de dados com segurança. As outras opções são menos seguras ou não fornecem rotação automática."

  },

  {

    id: 43,

    text: "Uma empresa está desenvolvendo um aplicativo multicamadas sem servidor na AWS. A empresa criará a camada de lógica sem servidor usando o Amazon API Gateway e o AWS Lambda. Enquanto a empresa constrói a camada de lógica, um desenvolvedor que trabalha no frontend do aplicativo deve desenvolver testes de integração. Os testes devem cobrir cenários positivos e negativos, dependendo dos códigos de status HTTP de sucesso e erro. Qual solução atenderá a esses requisitos com o MÍNIMO esforço?",

    options: [

      "Configure uma integração de simulação para métodos de API no API Gateway. Na solicitação de integração da Execução do Método, adicione uma lógica simples para retornar sucesso ou erro com base no código de status HTTP. Na resposta de integração, adicione mensagens que correspondam aos códigos de status HTTP.",

      "Crie dois recursos de integração de simulação para métodos de API no API Gateway. Na solicitação de integração, retorne um código de status HTTP de sucesso para um recurso e um código de status HTTP de erro para o outro recurso. Na resposta de integração, adicione mensagens que correspondam aos códigos de status HTTP.",

      "Crie funções Lambda para executar testes. Adicione uma lógica simples para retornar sucesso ou erro, com base nos códigos de status HTTP. Crie uma integração Lambda do API Gateway. Selecione as funções Lambda apropriadas que correspondem aos códigos de status HTTP.",

      "Crie uma função Lambda para executar testes. Adicione uma lógica simples para retornar códigos de status HTTP de sucesso ou erro. Crie uma integração de simulação no API Gateway. Selecione a função Lambda que corresponde aos códigos de status HTTP."

    ],

    correctAnswer: 0,

    explanation: "A opção A é a mais eficiente. As integrações de simulação no API Gateway permitem definir respostas estáticas para métodos de API, o que é útil para testes frontend antes que o backend esteja pronto. As outras opções envolvem mais código ou recursos."

  },

  {

    id: 44,

    text: "Os usuários estão relatando erros em um aplicativo. O aplicativo consiste em vários microsserviços implantados no Amazon Elastic Container Service (Amazon ECS) com AWS Fargate. Quais etapas um desenvolvedor deve seguir para corrigir os erros? (Escolha dois.)",

    options: [

      "Implante o AWS X-Ray como um contêiner auxiliar para os microsserviços. Atualize a política de função da tarefa para permitir o acesso à API X-Ray.",

      "Implante o AWS X-Ray como um daemonset no cluster Fargate. Atualize a política de função de serviço para permitir o acesso à API X-Ray.",

      "Instrumente o aplicativo usando o AWS X-Ray SDK. Atualize o aplicativo para usar a chamada da API PutXrayTrace para se comunicar com a API X-Ray.",

      "Instrumente o aplicativo usando o AWS X-Ray SDK. Atualize o aplicativo para se comunicar com o daemon X-Ray.",

      "Instrumente a tarefa ECS para enviar a saída stdout e stderr para o Amazon CloudWatch Logs. Atualize a política de função da tarefa para permitir a ação cloudwatch:PullLogs."

    ],

    correctAnswer: [0, 3],

    explanation: "As opções A e D são as corretas. O AWS X-Ray permite rastrear solicitações em microsserviços. Para usá-lo com o ECS, você precisa implantar o daemon X-Ray e instrumentar o aplicativo com o SDK. As outras opções não são formas corretas de configurar o X-Ray com o ECS."

  },

  {

    id: 45,

    text: "Um desenvolvedor está criando um aplicativo para uma empresa. O aplicativo precisa ler o arquivo doc.txt localizado na pasta raiz de um bucket do Amazon S3 chamado DOC-EXAMPLE-BUCKET. A equipe de segurança da empresa exige que o princípio do menor privilégio seja aplicado à política IAM do aplicativo. Qual instrução de política IAM atenderá a esses requisitos de segurança?",

    options: [

      "```json { \"Version\": \"2012-10-17\", \"Statement\": [ { \"Effect\": \"Allow\", \"Action\": \"s3:GetObject\", \"Resource\": \"arn:aws:s3:::DOC-EXAMPLE-BUCKET\" } ] } ```",

      "```json { \"Version\": \"2012-10-17\", \"Statement\": [ { \"Effect\": \"Allow\", \"Action\": \"s3:*\", \"Resource\": \"arn:aws:s3:::DOC-EXAMPLE-BUCKET/doc.txt\" } ] } ```",

      "```json { \"Version\": \"2012-10-17\", \"Statement\": [ { \"Effect\": \"Allow\", \"Action\": \"s3:GetObject\", \"Resource\": \"arn:aws:s3:::DOC-EXAMPLE-BUCKET/doc.txt\" } ] } ```",

      "```json { \"Version\": \"2012-10-17\", \"Statement\": [ { \"Effect\": \"Allow\", \"Action\": \"s3:*\", \"Resource\": \"arn:aws:s3:::DOC-EXAMPLE-BUCKET/*\" } ] } ```"

    ],

    correctAnswer: 2,

    explanation: "A opção C é a mais segura. Ela concede apenas a permissão `s3:GetObject` e restringe o acesso ao arquivo específico `doc.txt`. As outras opções concedem mais permissões do que o necessário ou não restringem o acesso ao arquivo específico."

  },

  {

    id: 46,

    text: "Uma empresa financeira deve armazenar registros originais de clientes por 10 anos por razões legais. Um registro completo contém informações de identificação pessoal (PII). De acordo com as regulamentações locais, as PII estão disponíveis apenas para certas pessoas na empresa e não devem ser compartilhadas com terceiros. A empresa precisa disponibilizar os registros para organizações terceirizadas para análise estatística sem compartilhar as PII. Um desenvolvedor deseja armazenar o registro imutável original no Amazon S3. Dependendo de quem acessa o documento S3, o documento deve ser retornado como está ou com todas as PII removidas. O desenvolvedor escreveu uma função AWS Lambda para remover as PII do documento. A função é chamada removePii. O que o desenvolvedor deve fazer para que a empresa atenda aos requisitos de PII enquanto mantém apenas uma cópia do documento?",

    options: [

      "Configurar uma notificação de evento S3 que invoca a função removePii quando uma solicitação GET do S3 é feita. Chamar o Amazon S3 usando uma solicitação GET para acessar o objeto sem PII.",

      "Configurar uma notificação de evento S3 que invoca a função removePii quando uma solicitação PUT do S3 é feita. Chamar o Amazon S3 usando uma solicitação PUT para acessar o objeto sem PII.",

      "Criar um ponto de acesso S3 Object Lambda a partir do console S3. Selecionar a função removePii. Usar pontos de acesso S3 para acessar o objeto sem PII.",

      "Criar um ponto de acesso S3 a partir do console S3. Usar o nome do ponto de acesso para chamar a função de API GetObjectLegalHold do S3. Passar o nome da função removePii para acessar o objeto sem PII."

    ],

    correctAnswer: 2,

    explanation: "A opção C é a solução correta. O S3 Object Lambda permite processar dados durante a recuperação, usando uma função Lambda (como removePii) para modificar o conteúdo retornado, neste caso, removendo PII. Isso permite manter uma única cópia do documento no S3 enquanto atende aos requisitos de privacidade. A opção A não é viável, pois eventos GET não modificam o conteúdo retornado. A opção B está incorreta, pois eventos PUT são para uploads, não para recuperação. A opção D é inválida, pois GetObjectLegalHold não suporta a funcionalidade descrita."

  },

  {

    id: 47,

    text: "Uma empresa tem um aplicativo que usa o AWS CodePipeline para automatizar seu fluxo de integração contínua e entrega contínua (CI/CD). O aplicativo usa o AWS CodeCommit para controle de versão. Um desenvolvedor que estava trabalhando em uma das tarefas não puxou as alterações mais recentes da branch principal. Uma semana depois, o desenvolvedor notou conflitos de merge. Como o desenvolvedor pode resolver os conflitos de merge na branch do desenvolvedor com o MENOR esforço de desenvolvimento?",

    options: [

      "Clonar o repositório. Criar uma nova branch. Atualizar a branch com as alterações.",

      "Criar uma nova branch. Aplicar as alterações da branch anterior.",

      "Usar a visualização Commit Visualizer para comparar os commits quando um recurso foi adicionado. Corrigir os conflitos de merge.",

      "Parar o pull da branch principal para a branch de recurso. Rebasear a branch de recurso a partir da branch principal."

    ],

    correctAnswer: 3,

    explanation: "A opção D é a mais eficiente. Rebasear a branch de recurso a partir da branch principal (git rebase) incorpora as alterações mais recentes da branch principal e permite ao desenvolvedor resolver conflitos de merge diretamente. Isso requer menos esforço do que criar novas branches ou clonar o repositório (opções A e B). A opção C não é prática, pois o Commit Visualizer não é uma ferramenta padrão para resolver conflitos no CodeCommit."

  },

  {

    id: 48,

    text: "Um desenvolvedor deseja adicionar validação de solicitação a uma API do Amazon API Gateway em um ambiente de produção. O desenvolvedor precisa testar as alterações antes que a API seja implantada no ambiente de produção. Para o teste, o desenvolvedor enviará solicitações de teste para a API por meio de uma ferramenta de teste. Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",

    options: [

      "Exportar a API existente para um arquivo OpenAPI. Criar uma nova API. Importar o arquivo OpenAPI. Modificar a nova API para adicionar validação de solicitação. Realizar os testes. Modificar a API existente para adicionar validação de solicitação. Implantar a API existente na produção.",

      "Modificar a API existente para adicionar validação de solicitação. Implantar a API atualizada em um novo estágio do API Gateway. Realizar os testes. Implantar a API atualizada no estágio de produção do API Gateway.",

      "Criar uma nova API. Adicionar os recursos e métodos necessários, incluindo a nova validação de solicitação. Realizar os testes. Modificar a API existente para adicionar validação de solicitação. Implantar a API existente na produção.",

      "Clonar a API existente. Modificar a nova API para adicionar validação de solicitação. Realizar os testes. Modificar a API existente para adicionar validação de solicitação. Implantar a API existente na produção."

    ],

    correctAnswer: 1,

    explanation: "A opção B é a mais eficiente. Usar estágios do API Gateway permite testar alterações em um ambiente separado (novo estágio) sem afetar a produção. Após os testes, a API pode ser implantada no estágio de produção. As opções A, C e D envolvem criar novas APIs ou exportar/importar arquivos, o que adiciona complexidade desnecessária."

  },

  {

    id: 49,

    text: "Uma empresa de alimentos online fornece uma API HTTP do Amazon API Gateway para receber pedidos de parceiros. A API é integrada com uma função AWS Lambda. A função Lambda armazena os pedidos em uma tabela do Amazon DynamoDB. A empresa espera integrar novos parceiros. Alguns dos parceiros exigem funções Lambda adicionais para receber pedidos. A empresa criou um bucket do Amazon S3. A empresa precisa armazenar todos os pedidos e atualizações no bucket S3 para análise futura. Como o desenvolvedor pode garantir que todos os pedidos e atualizações sejam armazenados no Amazon S3 com o MENOR esforço de desenvolvimento?",

    options: [

      "Criar uma nova função Lambda e um novo endpoint de API do API Gateway. Configurar a nova função Lambda para gravar no bucket S3. Modificar a função Lambda original para postar atualizações no novo endpoint da API.",

      "Usar o Amazon Kinesis Data Streams para criar um novo fluxo de dados. Modificar a função Lambda para publicar pedidos no fluxo de dados. Configurar o fluxo de dados para gravar no bucket S3.",

      "Habilitar o DynamoDB Streams na tabela DynamoDB. Criar uma nova função Lambda. Associar o ARN do fluxo à função Lambda. Configurar a função Lambda para gravar no bucket S3 conforme os registros aparecem no fluxo da tabela.",

      "Modificar a função Lambda para publicar em um novo tópico do Amazon Simple Notification Service (Amazon SNS) conforme a função Lambda recebe pedidos. Inscrever uma nova função Lambda no tópico. Configurar a nova função Lambda para gravar no bucket S3 conforme as atualizações chegam pelo tópico."

    ],

    correctAnswer: 2,

    explanation: "A opção C é a mais eficiente. Habilitar o DynamoDB Streams permite capturar automaticamente todas as alterações (inserções e atualizações) na tabela DynamoDB. Uma nova função Lambda pode ser configurada para processar esses eventos e gravar no bucket S3, minimizando alterações no código existente. As opções A, B e D requerem mais modificações ou introduzem complexidade adicional."

  },

  {

    id: 50,

    text: "O site de uma empresa é executado em uma instância do Amazon EC2 e usa o Auto Scaling para dimensionar o ambiente durante horários de pico. Usuários do site em todo o mundo estão enfrentando alta latência devido ao conteúdo estático na instância EC2, mesmo durante horários fora de pico. Quais etapas resolverão o problema de latência? (Escolha duas.)",

    options: [

      "Dobrar o número máximo de servidores do grupo de Auto Scaling.",

      "Hospedar o código do aplicativo no AWS Lambda.",

      "Dimensionar verticalmente redimensionando as instâncias EC2.",

      "Criar uma distribuição do Amazon CloudFront para armazenar o conteúdo estático em cache.",

      "Armazenar o conteúdo estático do aplicativo no Amazon S3."

    ],

    correctAnswer: [3, 4],

    explanation: "As opções D e E são as corretas. Criar uma distribuição do Amazon CloudFront (opção D) reduz a latência ao armazenar conteúdo estático em cache em locais de borda globais. Armazenar o conteúdo estático no Amazon S3 (opção E) permite que o CloudFront acesse esses arquivos de forma eficiente. As opções A e C abordam o dimensionamento do servidor, mas não resolvem diretamente a latência para conteúdo estático. A opção B é irrelevante, pois mudar para Lambda não aborda a entrega de conteúdo estático."

  },

  {

    id: 51,

    text: "Uma empresa tem um bucket do Amazon S3 contendo conteúdo premium que pretende disponibilizar apenas para assinantes pagos de seu site. O bucket S3 atualmente tem permissões padrão de todos os objetos serem privados para evitar a exposição inadvertida do conteúdo premium a visitantes não pagantes do site. Como a empresa pode limitar a capacidade de baixar um arquivo de conteúdo premium no bucket S3 apenas para assinantes pagos?",

    options: [

      "Aplicar uma política de bucket que permite que usuários anônimos baixem o conteúdo do bucket S3.",

      "Gerar uma URL de objeto pré-assinada para o arquivo de conteúdo premium quando um assinante pago solicita um download.",

      "Adicionar uma política de bucket que exige autenticação multifator para solicitações de acesso aos objetos do bucket S3.",

      "Habilitar a criptografia do lado do servidor no bucket S3 para proteção de dados contra visitantes não pagantes do site."

    ],

    correctAnswer: 1,

    explanation: "A opção B é a correta. Gerar URLs pré-assinadas permite que apenas usuários autorizados (assinantes pagos) acessem arquivos específicos no S3 por um tempo limitado, mantendo os objetos privados. A opção A compromete a segurança ao permitir acesso anônimo. A opção C não é prática para limitar acesso a assinantes. A opção D protege dados em repouso, mas não restringe o acesso a assinantes."

  },

  {

    id: 52,

    text: "Um desenvolvedor está criando uma função AWS Lambda que pesquisa itens em uma tabela do Amazon DynamoDB chamada customer_contact_information. Os itens da tabela DynamoDB têm o email_address do cliente como a chave de partição e propriedades adicionais, como customer_type, name e job_title. A função Lambda é executada sempre que um usuário digita um novo caractere no campo de entrada customer_type. O desenvolvedor deseja que a pesquisa retorne correspondências parciais de todas as propriedades email_address de um customer_type específico. O desenvolvedor não deseja recriar a tabela DynamoDB. O que o desenvolvedor deve fazer para atender a esses requisitos?",

    options: [

      "Adicionar um índice secundário global (GSI) à tabela DynamoDB com customer_type como a chave de partição e email_address como a chave de classificação. Realizar uma operação de consulta no GSI usando a expressão de condição begins_with com a propriedade email_address.",

      "Adicionar um índice secundário global (GSI) à tabela DynamoDB com email_address como a chave de partição e customer_type como a chave de classificação. Realizar uma operação de consulta no GSI usando a expressão de condição begins_with com a propriedade email_address.",

      "Adicionar um índice secundário local (LSI) à tabela DynamoDB com customer_type como a chave de partição e email_address como a chave de classificação. Realizar uma operação de consulta no LSI usando a expressão de condição begins_with com a propriedade email_address.",

      "Adicionar um índice secundário local (LSI) à tabela DynamoDB com job_title como a chave de partição e email_address como a chave de classificação. Realizar uma operação de consulta no LSI usando a expressão de condição begins_with com a propriedade email_address."

    ],

    correctAnswer: 0,

    explanation: "A opção A é a correta. Um índice secundário global (GSI) com customer_type como chave de partição e email_address como chave de classificação permite consultas eficientes para correspondências parciais em email_address para um customer_type específico usando begins_with. A opção B inverte as chaves, o que não suporta a consulta desejada. As opções C e D usam índices locais (LSI), que exigem a chave de partição da tabela original (email_address), não permitindo consultas apenas por customer_type."

  },

  {

    id: 53,

    text: "Um desenvolvedor está construindo um aplicativo que usa APIs do Amazon API Gateway, funções AWS Lambda e tabelas do Amazon DynamoDB. O desenvolvedor usa o AWS Serverless Application Model (AWS SAM) para construir e executar aplicativos sem servidor na AWS. Cada vez que o desenvolvedor envia alterações apenas para as funções Lambda, todos os artefatos do aplicativo são reconstruídos. O desenvolvedor deseja implementar o AWS SAM Accelerate executando um comando para reimplantar apenas as funções Lambda que foram alteradas. Qual comando atenderá a esses requisitos?",

    options: [

      "sam deploy --force-upload",

      "sam deploy --no-execute-changeset",

      "sam package",

      "sam sync --watch"

    ],

    correctAnswer: 3,

    explanation: "A opção D é a correta. O comando `sam sync --watch` faz parte do AWS SAM Accelerate, que monitora alterações no código e reimplanta automaticamente apenas os recursos alterados, como funções Lambda, reduzindo o tempo de implantação. As opções A e B reimplantam todos os recursos, e a opção C apenas empacota o aplicativo, mas não o implanta."

  },

  {

    id: 54,

    text: "Um desenvolvedor está construindo um aplicativo que permite aos usuários visualizar contas bancárias de várias fontes em um único painel. O desenvolvedor automatizou o processo para recuperar credenciais de API para essas fontes. O processo invoca uma função AWS Lambda associada a um recurso personalizado do AWS CloudFormation. O desenvolvedor deseja uma solução que armazene as credenciais de API com sobrecarga operacional mínima. Qual solução atenderá a esses requisitos da maneira MAIS segura?",

    options: [

      "Adicionar um recurso AWS Secrets Manager GenerateSecretString ao modelo CloudFormation. Definir o valor para referenciar novas credenciais para o recurso CloudFormation.",

      "Usar a operação ssm:PutParameter do AWS SDK na função Lambda a partir do recurso personalizado existente para armazenar as credenciais como um parâmetro. Definir o valor do parâmetro para referenciar as novas credenciais. Definir o tipo de parâmetro como SecureString.",

      "Adicionar um recurso AWS Systems Manager Parameter Store ao modelo CloudFormation. Definir o valor do recurso CloudFormation para referenciar as novas credenciais. Definir o atributo NoEcho como true.",

      "Usar a operação ssm:PutParameter do AWS SDK na função Lambda a partir do recurso personalizado existente para armazenar as credenciais como um parâmetro. Definir o valor do parâmetro para referenciar as novas credenciais. Definir o atributo NoEcho como true."

    ],

    correctAnswer: 0,

    explanation: "A opção A é a mais segura e eficiente. O AWS Secrets Manager com GenerateSecretString permite criar e armazenar credenciais seguras diretamente no CloudFormation, com criptografia automática e mínima sobrecarga. As opções B e D usam o Parameter Store, que é menos adequado para segredos, e a opção D menciona incorretamente NoEcho para ssm:PutParameter. A opção C não suporta GenerateSecretString."

  },

  {

    id: 55,

    text: "Um desenvolvedor está tentando obter dados de uma tabela do Amazon DynamoDB chamada demoman-table. O desenvolvedor configurou a AWS CLI para usar as credenciais de um usuário IAM específico e executou o seguinte comando: aws dynamodb get-item --table-name demoman-table --key '{\"id\": {\"N\":\"1993\"}}'. O comando retornou erros e nenhuma linha foi retornada. Qual é a causa MAIS provável desses problemas?",

    options: [

      "O comando está incorreto; ele deve ser reescrito para usar put-item com um argumento de string.",

      "O desenvolvedor precisa abrir um ticket com o Suporte da AWS para habilitar o acesso à demoman-table.",

      "O Amazon DynamoDB não pode ser acessado a partir da AWS CLI e precisa ser chamado por meio da API REST.",

      "O usuário IAM precisa de uma política associada com acesso de leitura à demoman-table."

    ],

    correctAnswer: 3,

    explanation: "A opção D é a mais provável. O erro provavelmente ocorre porque o usuário IAM não tem permissões de leitura (dynamodb:GetItem) para a tabela demoman-table. A opção A está incorreta, pois get-item é o comando correto. A opção B é desnecessária, pois o acesso é gerenciado por políticas IAM. A opção C é falsa, pois o DynamoDB é acessível via AWS CLI."

  },

  {

    id: 56,

    text: "Uma organização está usando o Amazon CloudFront para garantir que seus usuários experimentem acesso de baixa latência ao seu aplicativo web. A organização identificou a necessidade de criptografar todo o tráfego entre os usuários e o CloudFront, e todo o tráfego entre o CloudFront e o aplicativo web. Como esses requisitos podem ser atendidos? (Escolha duas.)",

    options: [

      "Usar o AWS KMS para criptografar o tráfego entre o CloudFront e o aplicativo web.",

      "Definir a Política de Protocolo de Origem como 'Somente HTTPS'.",

      "Definir a Porta HTTP de Origem como 443.",

      "Definir a Política de Protocolo do Visualizador como 'Somente HTTPS' ou 'Redirecionar HTTP para HTTPS'.",

      "Habilitar a opção do CloudFront Restrict Viewer Access."

    ],

    correctAnswer: [1, 3],

    explanation: "As opções B e D são as corretas. Definir a Política de Protocolo de Origem como 'Somente HTTPS' (opção B) garante que o tráfego entre o CloudFront e a origem seja criptografado. Definir a Política de Protocolo do Visualizador como 'Somente HTTPS' ou 'Redirecionar HTTP para HTTPS' (opção D) garante que o tráfego entre os usuários e o CloudFront seja criptografado. A opção A é incorreta, pois o KMS não é usado para criptografia de tráfego. A opção C é irrelevante, pois a porta é configurada automaticamente com HTTPS. A opção E não está relacionada com criptografia."

  },

  {

    id: 57,

    text: "Um desenvolvedor está implantando uma função AWS Lambda. O desenvolvedor deseja a capacidade de retornar rapidamente e sem problemas às versões anteriores da função. Como o desenvolvedor pode alcançar esse objetivo com a MENOR sobrecarga operacional?",

    options: [

      "Usar o AWS OpsWorks para realizar implantações azul/verde.",

      "Usar um alias de função com diferentes versões.",

      "Manter pacotes de implantação para versões anteriores no Amazon S3.",

      "Usar o AWS CodePipeline para implantações e reversões."

    ],

    correctAnswer: 1,

    explanation: "A opção B é a mais eficiente. Usar aliases de função Lambda permite alternar rapidamente entre versões da função sem necessidade de reimplantação ou gerenciamento adicional. As opções A e D introduzem complexidade desnecessária com ferramentas externas. A opção C exige gerenciamento manual de pacotes, aumentando a sobrecarga."

  },

  {

    id: 58,

    text: "Um desenvolvedor está planejando migrar dados corporativos locais para o Amazon S3. Os dados devem ser criptografados, e as chaves de criptografia devem suportar rotação automática anual. A empresa deve usar o AWS Key Management Service (AWS KMS) para criptografar os dados. Qual tipo de chaves o desenvolvedor deve usar para atender a esses requisitos?",

    options: [

      "Chaves gerenciadas pelo Amazon S3.",

      "Chaves gerenciadas pelo cliente simétricas com material de chave gerado pela AWS.",

      "Chaves gerenciadas pelo cliente assimétricas com material de chave gerado pela AWS.",

      "Chaves gerenciadas pelo cliente simétricas com material de chave importado."

    ],

    correctAnswer: 1,

    explanation: "A opção B é a correta. Chaves gerenciadas pelo cliente simétricas com material de chave gerado pela AWS suportam rotação automática anual no KMS, atendendo aos requisitos de criptografia e rotação. A opção A não suporta rotação automática. A opção C usa chaves assimétricas, inadequadas para criptografia de dados S3. A opção D não suporta rotação automática, pois o material de chave é importado."

  },

  {

    id: 59,

    text: "Uma equipe de desenvolvedores está usando um pipeline do AWS CodePipeline como mecanismo de integração contínua e entrega contínua (CI/CD) para um aplicativo web. Um desenvolvedor escreveu testes unitários para testar programaticamente a funcionalidade do código do aplicativo. Os testes unitários produzem um relatório de teste que mostra os resultados de cada verificação individual. O desenvolvedor agora deseja executar esses testes automaticamente durante o processo de CI/CD. Qual solução atenderá a esse requisito com a MENOR sobrecarga operacional?",

    options: [

      "Escrever um gancho pré-commit do Git que executa os testes antes de cada commit. Garantir que cada desenvolvedor trabalhando no projeto tenha o gancho pré-commit instalado localmente. Revisar o relatório de teste e resolver quaisquer problemas antes de enviar as alterações para o AWS CodeCommit.",

      "Adicionar um novo estágio ao pipeline. Usar o AWS CodeBuild como provedor. Adicionar o novo estágio após o estágio que implanta revisões de código no ambiente de teste. Escrever um buildspec que falha o estágio do CodeBuild se algum teste não passar. Usar o recurso de relatórios de teste do CodeBuild para integrar o relatório ao console do CodeBuild. Visualizar os resultados dos testes no CodeBuild. Resolver quaisquer problemas.",

      "Adicionar um novo estágio ao pipeline. Usar o AWS CodeBuild como provedor. Adicionar o novo estágio antes do estágio que implanta revisões de código no ambiente de teste. Escrever um buildspec que falha o estágio do CodeBuild se algum teste não passar. Usar o recurso de relatórios de teste do CodeBuild para integrar o relatório ao console do CodeBuild. Visualizar os resultados dos testes no CodeBuild. Resolver quaisquer problemas.",

      "Adicionar um novo estágio ao pipeline. Usar o Jenkins como provedor. Configurar o CodePipeline para usar o Jenkins para executar os testes unitários. Escrever um Jenkinsfile que falha o estágio se algum teste não passar. Usar o plugin de relatório de teste para Jenkins para integrar o relatório ao painel do Jenkins. Visualizar os resultados dos testes no Jenkins. Resolver quaisquer problemas."

    ],

    correctAnswer: 2,

    explanation: "A opção C é a mais eficiente. Adicionar um estágio de teste com o AWS CodeBuild antes da implantação no ambiente de teste permite executar testes unitários automaticamente no pipeline, usando o recurso de relatórios de teste do CodeBuild para visualizar resultados. Isso minimiza a sobrecarga operacional em comparação com o Jenkins (opção D) ou ganchos locais (opção A). A opção B testa após a implantação, o que é menos ideal, pois falhas podem afetar o ambiente de teste."

  },

  {

    id: 60,

    text: "Uma empresa tem vários pontos de extremidade de VPC da Amazon no mesmo VPC. Um desenvolvedor precisa configurar uma política de bucket do Amazon S3 para que os usuários possam acessar um bucket S3 apenas usando esses pontos de extremidade de VPC. Qual solução atenderá a esses requisitos?",

    options: [

      "Criar várias políticas de bucket S3 usando cada ID de ponto de extremidade de VPC que tenha o valor aws:SourceVpce na condição StringNotEquals.",

      "Criar uma única política de bucket S3 que tenha o valor aws:SourceVpc e na condição StringNotEquals usar o ID do VPC.",

      "Criar uma única política de bucket S3 que tenha o valor aws:SourceVpce e na condição StringNotEquals usar vpce*.",

      "Criar uma única política de bucket S3 que tenha vários valores aws:sourceVpce na condição StringNotEquals. Repetir para todos os IDs de pontos de extremidade de VPC."

    ],

    correctAnswer: 0,

    explanation: "A opção A é a correta. Usar uma política de bucket S3 com a condição aws:SourceVpce e especificar cada ID de ponto de extremidade de VPC na condição StringNotEquals garante que o acesso ao bucket seja restrito aos pontos de extremidade especificados. A opção B usa aws:SourceVpc, que restringe por VPC, não por ponto de extremidade. A opção C é inválida, pois vpce* não é um valor válido. A opção D sugere múltiplos valores aws:sourceVpce, mas a sintaxe correta é usar várias políticas ou uma lista de IDs na condição."

  },

  {

    id: 61,

    text: "Uma empresa usa uma cadeia de certificados de autoridade de certificação raiz personalizada (Root CA Cert) de 10 KB para gerar certificados SSL para seus endpoints HTTPS locais. Um dos aplicativos baseados em nuvem da empresa tem centenas de funções AWS Lambda que recuperam dados desses endpoints. Um desenvolvedor atualizou o armazenamento de confiança do ambiente de execução Lambda para usar o Root CA Cert quando o ambiente de execução Lambda é inicializado. O desenvolvedor incluiu o Root CA Cert como um arquivo de texto no pacote de implantação Lambda. Após 3 meses de desenvolvimento, o Root CA Cert não é mais válido e deve ser atualizado. O desenvolvedor precisa de uma solução mais eficiente para atualizar o Root CA Cert para todas as funções Lambda implantadas. A solução não deve incluir a reconstrução ou atualização de todas as funções Lambda que usam o Root CA Cert. A solução também deve funcionar para todos os ambientes de desenvolvimento, teste e produção. Cada ambiente é gerenciado em uma conta AWS separada. Quais etapas o desenvolvedor deve seguir para atender a esses requisitos da maneira MAIS econômica? (Escolha duas.)",

    options: [

      "Armazenar o Root CA Cert como um segredo no AWS Secrets Manager. Criar uma política baseada em recursos. Adicionar usuários IAM para permitir acesso ao segredo.",

      "Armazenar o Root CA Cert como um parâmetro SecureString no AWS Systems Manager Parameter Store. Criar uma política baseada em recursos. Adicionar usuários IAM para permitir acesso à política.",

      "Armazenar o Root CA Cert em um bucket do Amazon S3. Criar uma política baseada em recursos para permitir acesso ao bucket.",

      "Refatorar o código Lambda para carregar o Root CA Cert a partir do local do Root CA Cert. Modificar o armazenamento de confiança em tempo de execução dentro do manipulador da função Lambda.",

      "Refatorar o código Lambda para carregar o Root CA Cert a partir do local do Root CA Cert. Modificar o armazenamento de confiança em tempo de execução fora do manipulador da função Lambda."

    ],

    correctAnswer: [0, 4],

    explanation: "As opções A e E são as mais econômicas. Armazenar o Root CA Cert no AWS Secrets Manager (opção A) permite gerenciamento centralizado e acesso seguro entre contas, com políticas baseadas em recursos. Refatorar o código Lambda para carregar o certificado dinamicamente fora do manipulador (opção E) evita a necessidade de reimplantar todas as funções. A opção B é menos ideal, pois o Parameter Store é menos adequado para segredos. A opção C expõe o certificado publicamente, e a opção D aumenta a sobrecarga ao modificar o manipulador."

  },

  {

    id: 62,

    text: "Um desenvolvedor mantém aplicativos que armazenam vários segredos no AWS Secrets Manager. Os aplicativos usam segredos que mudaram ao longo do tempo. O desenvolvedor precisa identificar quais segredos ainda estão em uso sem causar tempo de inatividade do aplicativo. O que o desenvolvedor deve fazer para atender a esses requisitos?",

    options: [

      "Configurar a entrega de arquivos de log do AWS CloudTrail para um bucket do Amazon S3. Criar um alarme do Amazon CloudWatch para solicitações de operação da API GetSecretValue do Secrets Manager.",

      "Criar uma regra gerenciada do AWS Config chamada secretsmanager-secret-unused. Criar uma regra do Amazon EventBridge para iniciar notificações quando a regra gerenciada do AWS Config for atendida.",

      "Desativar temporariamente os segredos dos aplicativos e monitorar os logs de erro dos aplicativos.",

      "Configurar o AWS X-Ray para os aplicativos. Criar uma regra de amostragem para corresponder às solicitações de operação da API GetSecretValue do Secrets Manager."

    ],

    correctAnswer: 1,

    explanation: "A opção B é a correta. A regra gerenciada secretsmanager-secret-unused do AWS Config identifica segredos não utilizados no Secrets Manager sem causar tempo de inatividade. Uma regra do EventBridge pode notificar quando segredos não utilizados são detectados. A opção A requer análise manual de logs. A opção C causa interrupções ao desativar segredos. A opção D é inadequada, pois o X-Ray não é projetado para monitorar chamadas de API do Secrets Manager."

  },

  {

    id: 63,

    text: "Um desenvolvedor está escrevendo um aplicativo sem servidor que requer que uma função AWS Lambda seja invocada a cada 10 minutos. Qual é uma maneira automatizada e sem servidor de invocar a função?",

    options: [

      "Implantar uma instância do Amazon EC2 baseada em Linux e editar seu arquivo /etc/crontab adicionando um comando para invocar periodicamente a função Lambda.",

      "Configurar uma variável de ambiente chamada PERIOD para a função Lambda. Definir o valor como 600.",

      "Criar uma regra do Amazon EventBridge que seja executada em um agendamento regular para invocar a função Lambda.",

      "Criar um tópico do Amazon Simple Notification Service (Amazon SNS) que tenha uma assinatura para a função Lambda com um temporizador de 600 segundos."

    ],

    correctAnswer: 2,

    explanation: "A opção C é a correta. O Amazon EventBridge permite agendar invocações de funções Lambda em intervalos regulares (como a cada 10 minutos) de forma sem servidor e automatizada. A opção A requer gerenciamento de uma instância EC2, o que adiciona sobrecarga. A opção B não invoca a função. A opção D é inválida, pois o SNS não suporta temporizadores para assinaturas."

  },

  {

    id: 64,

    text: "Uma empresa está usando o Amazon OpenSearch Service para implementar um sistema de monitoramento de auditoria. Um desenvolvedor precisa criar um recurso personalizado do AWS CloudFormation associado a uma função AWS Lambda para configurar o domínio do OpenSearch Service. A função Lambda deve acessar o domínio do OpenSearch Service usando as credenciais internas de usuário mestre do OpenSearch Service. Qual é a maneira MAIS segura de passar essas credenciais para a função Lambda?",

    options: [

      "Usar um parâmetro do CloudFormation para passar as credenciais de usuário mestre na implantação para as MasterUserOptions do domínio do OpenSearch Service e a variável de ambiente da função Lambda. Definir o atributo NoEcho como true.",

      "Usar um parâmetro do CloudFormation para passar as credenciais de usuário mestre na implantação para as MasterUserOptions do domínio do OpenSearch Service e criar um parâmetro no AWS Systems Manager Parameter Store. Definir o atributo NoEcho como true. Criar uma função IAM com a permissão ssm:GetParameter. Atribuir a função à função Lambda. Armazenar o nome do parâmetro como a variável de ambiente da função Lambda. Resolver o valor do parâmetro em tempo de execução.",

      "Usar um parâmetro do CloudFormation para passar as credenciais de usuário mestre na implantação para as MasterUserOptions do domínio do OpenSearch Service e a variável de ambiente da função Lambda. Criptografar o valor do parâmetro usando o comando de criptografia do AWS Key Management Service (AWS KMS).",

      "Usar o CloudFormation para criar um segredo do AWS Secrets Manager. Usar uma referência dinâmica do CloudFormation para recuperar o valor do segredo para as MasterUserOptions do domínio do OpenSearch Service. Criar uma função IAM com a permissão secretsmanager:GetSecretValue. Atribuir a função à função Lambda. Armazenar o nome do segredo como a variável de ambiente da função Lambda. Resolver o valor do segredo em tempo de execução."

    ],

    correctAnswer: 3,

    explanation: "A opção D é a mais segura. O AWS Secrets Manager é projetado para armazenar e gerenciar segredos, como credenciais, com criptografia automática e controle de acesso granular. Usar uma referência dinâmica no CloudFormation para as MasterUserOptions e recuperar o segredo em tempo de execução via IAM minimiza a exposição das credenciais. As opções A e C armazenam credenciais em variáveis de ambiente, o que é menos seguro. A opção B usa o Parameter Store, que é menos ideal para segredos."

  },

  {

    id: 65,

    text: "Um aplicativo é executado em várias instâncias EC2 atrás de um ELB. Onde os dados de sessão devem ser gravados para que possam ser servidos de forma confiável em várias solicitações?",

    options: [

      "Gravar dados no Amazon ElastiCache.",

      "Gravar dados no Amazon Elastic Block Store.",

      "Gravar dados no Amazon EC2 Instance Store.",

      "Gravar dados no sistema de arquivos raiz."

    ],

    correctAnswer: 0,

    explanation: "A opção A é a correta. O Amazon ElastiCache é ideal para armazenar dados de sessão, pois fornece acesso rápido e confiável em várias instâncias EC2, garantindo consistência em solicitações. A opção B (EBS) é mais lenta e não é adequada para dados de sessão. A opção C (Instance Store) é volátil e pode perder dados. A opção D (sistema de arquivos raiz) não é compartilhado entre instâncias, tornando-o inadequado."

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