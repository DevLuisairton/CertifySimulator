const originalQuestions = [
  {
    id: 1,
    text: `Um desenvolvedor está trabalhando em uma função AWS Lambda que acessa o Amazon DynamoDB. A função Lambda deve recuperar um item e atualizar alguns de seus atributos, ou criar o item se ele não existir. A função Lambda tem acesso à chave primária.
Quais permissões IAM o desenvolvedor deve solicitar para a função Lambda alcançar essa funcionalidade?`,
    options: [
      "dynamodb:DeleteItem dynamodb:GetItem dynamodb:PutItem",
      "dynamodb:UpdateItem dynamodb:GetItem dynamodb:DescribeTable",
      "dynamodb:GetRecords dynamodb:PutItem dynamodb:UpdateTable",
      "dynamodb:UpdateItem dynamodb:GetItem dynamodb:PutItem"
    ],
    correctAnswer: 3,
    explanation: "A opção D é a correta. A função precisa de `dynamodb:GetItem` para recuperar o item, `dynamodb:UpdateItem` para atualizar atributos e `dynamodb:PutItem` para criar o item se ele não existir. A opção A inclui `DeleteItem`, que não é necessária. A opção B inclui `DescribeTable`, irrelevante. A opção C inclui `GetRecords` e `UpdateTable`, que não se aplicam."
  },
  {
    id: 2,
    text: `Um desenvolvedor construiu uma aplicação de mercado que armazena dados de preços no Amazon DynamoDB com o Amazon ElastiCache na frente. Os preços dos itens no mercado mudam frequentemente. Vendedores começaram a reclamar que, após atualizarem o preço de um item, o preço não muda na listagem do produto.
O que pode estar causando esse problema?`,
    options: [
      "O cache não está sendo invalidado quando o preço do item é alterado.",
      "O preço do item está sendo recuperado usando um cluster ElastiCache com escrita direta.",
      "A tabela DynamoDB foi provisionada com capacidade de leitura insuficiente.",
      "A tabela DynamoDB foi provisionada com capacidade de escrita insuficiente."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. Se o cache não for invalidado após a atualização do preço, a aplicação retorna dados desatualizados do ElastiCache. A opção B (escrita direta) não é um comportamento padrão do ElastiCache. As opções C e D afetariam o desempenho, não a consistência dos preços."
  },
  {
    id: 3,
    text: `Uma empresa exige que todas as aplicações executando no Amazon EC2 usem funções IAM para acessar serviços AWS. Um desenvolvedor está modificando uma aplicação que atualmente depende de chaves de acesso de usuário IAM armazenadas em variáveis de ambiente para acessar tabelas do Amazon DynamoDB usando o boto, o SDK da AWS para Python.
O desenvolvedor associou uma função com as mesmas permissões do usuário IAM à instância EC2 e, em seguida, excluiu o usuário IAM. Quando a aplicação foi reiniciada, mensagens de AWS AccessDeniedException começaram a aparecer nos logs da aplicação. O desenvolvedor conseguiu usar sua conta pessoal no servidor para executar comandos da API do DynamoDB usando a AWS CLI.
Qual é a causa MAIS provável da exceção?`,
    options: [
      "As políticas IAM podem levar alguns minutos para se propagarem aos recursos.",
      "As credenciais de variáveis de ambiente desativadas ainda estão sendo usadas pela aplicação.",
      "O SDK da AWS não suporta credenciais obtidas usando uma função de instância.",
      "O grupo de segurança da instância não permite acesso a http://169.254.169.254."
    ],
    correctAnswer: 2,
    explanation: "A opção B é a correta. A aplicação ainda tenta usar as chaves de acesso em variáveis de ambiente, que foram desativadas. O boto prioriza credenciais de ambiente sobre o perfil de instância. A opção A é improvável, pois a propagação é rápida. A opção C é falsa, pois o SDK suporta funções de instância. A opção D bloqueia o acesso ao metadado, mas o erro seria diferente."
  },
  {
    id: 4,
    text: `Uma empresa tem uma aplicação existente com credenciais de banco de dados codificadas. Um desenvolvedor precisa modificar a aplicação existente. A aplicação está implantada em duas Regiões AWS com uma configuração de failover ativo-passivo para atender à estratégia de recuperação de desastres da empresa.
O desenvolvedor precisa de uma solução para armazenar as credenciais fora do código. A solução deve estar em conformidade com a estratégia de recuperação de desastres da empresa.
Qual solução atenderá a esses requisitos da maneira MAIS segura?`,
    options: [
      "Armazenar as credenciais no AWS Secrets Manager na Região primária. Habilitar a replicação de segredos para a Região secundária. Atualizar a aplicação para usar o ARN com base na Região.",
      "Armazenar as credenciais no AWS Systems Manager Parameter Store na Região primária. Habilitar a replicação de parâmetros para a Região secundária. Atualizar a aplicação para usar o ARN com base na Região.",
      "Armazenar as credenciais em um arquivo de configuração. Fazer upload do arquivo de configuração para um bucket S3 na Região primária. Habilitar a Replicação entre Regiões (CRR) para um bucket S3 na Região secundária. Atualizar a aplicação para acessar o arquivo de configuração do bucket S3, com base na Região.",
      "Armazenar as credenciais em um arquivo de configuração. Fazer upload do arquivo de configuração para um sistema de arquivos Amazon Elastic File System (Amazon EFS). Atualizar a aplicação para usar os endpoints regionais do sistema de arquivos EFS para acessar o arquivo de configuração nas Regiões primária e secundária."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a mais segura. O Secrets Manager suporta replicação de segredos entre Regiões, garantindo conformidade com o failover ativo-passivo e criptografia segura. A opção B não suporta replicação de parâmetros SecureString. A opção C é menos segura, pois o S3 não é ideal para credenciais. A opção D é complexa e não suporta failover nativo."
  },
  {
    id: 5,
    text: `Um desenvolvedor está criando uma aplicação que armazenará informações pessoais de saúde (PHI). O PHI precisa ser criptografado em todos os momentos. Uma instância de banco de dados Amazon RDS para MySQL criptografada está armazenando os dados. O desenvolvedor deseja aumentar o desempenho da aplicação armazenando em cache dados frequentemente acessados, adicionando a capacidade de classificar ou ordenar os conjuntos de dados em cache.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Criar uma instância do Amazon ElastiCache para Redis. Habilitar a criptografia de dados em trânsito e em repouso. Armazenar dados frequentemente acessados no cache.",
      "Criar uma instância do Amazon ElastiCache para Memcached. Habilitar a criptografia de dados em trânsito e em repouso. Armazenar dados frequentemente acessados no cache.",
      "Criar uma réplica de leitura do Amazon RDS para MySQL. Conectar-se à réplica de leitura usando SSL. Configurar a réplica de leitura para armazenar dados frequentemente acessados.",
      "Criar uma tabela do Amazon DynamoDB e um cluster do DynamoDB Accelerator (DAX) para a tabela. Armazenar dados frequentemente acessados na tabela do DynamoDB."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. O ElastiCache para Redis suporta criptografia em trânsito e em repouso, além de permitir classificação e ordenação de dados. A opção B (Memcached) não suporta criptografia em repouso nem classificação. A opção C não é cache, apenas leitura. A opção D não garante criptografia em repouso para PHI."
  },
  {
    id: 6,
    text: `Um desenvolvedor está recebendo erros HTTP 400: ThrottlingException intermitentemente ao chamar a API do Amazon CloudWatch. Quando uma chamada falha, nenhum dado é recuperado.
Qual prática recomendada deve ser aplicada primeiro para resolver esse problema?`,
    options: [
      "Entrar em contato com o Suporte AWS para um aumento de limite.",
      "Usar a AWS CLI para obter as métricas.",
      "Analisar as aplicações e remover a chamada à API.",
      "Repetir a chamada com retrocesso exponencial."
    ],
    correctAnswer: 3,
    explanation: "A opção D é a correta. O retrocesso exponencial é a prática recomendada para lidar com erros de limitação, reduzindo a taxa de chamadas. A opção A pode ser considerada se o retrocesso falhar. A opção B não resolve a limitação. A opção C é drástica e desnecessária."
  },
  {
    id: 7,
    text: `Uma aplicação precisa usar o endereço IP do cliente em seu processamento. A aplicação foi movida para a AWS e colocada atrás de um Application Load Balancer (ALB). No entanto, todos os endereços IP dos clientes agora parecem ser iguais. A aplicação deve manter a capacidade de escalar horizontalmente.
Com base nesse cenário, qual é a solução MAIS econômica para esse problema?`,
    options: [
      "Remover a aplicação do ALB. Excluir o ALB e alterar o Amazon Route 53 para direcionar o tráfego para a instância que executa a aplicação.",
      "Remover a aplicação do ALB. Criar um Classic Load Balancer em seu lugar. Direcionar o tráfego para a aplicação usando o protocolo HTTP.",
      "Alterar o código da aplicação para inspecionar o cabeçalho X-Forwarded-For. Garantir que o código funcione corretamente se uma lista de endereços IP for passada no cabeçalho.",
      "Alterar o código da aplicação para inspecionar um cabeçalho personalizado. Alterar o código do cliente para passar o endereço IP no cabeçalho personalizado."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a mais econômica. O cabeçalho X-Forwarded-For contém o IP do cliente, permitindo que a aplicação o acesse sem remover o ALB. A opção A elimina a escalabilidade. A opção B é mais cara e menos moderna. A opção D exige alterações no cliente, aumentando a complexidade."
  },
  {
    id: 8,
    text: `Um desenvolvedor está projetando uma aplicação sem servidor que os clientes usam para selecionar assentos para um local de concertos. Os clientes enviam as solicitações de ingressos para uma API do Amazon API Gateway com uma função AWS Lambda que reconhece o pedido e gera um ID de pedido. A aplicação inclui duas funções Lambda adicionais: uma para gerenciamento de inventário e outra para processamento de pagamento. Essas duas funções Lambda são executadas em paralelo e gravam o pedido em uma tabela do Amazon DynamoDB.
A aplicação deve fornecer assentos aos clientes de acordo com os seguintes requisitos. Se um assento for acidentalmente vendido mais de uma vez, o primeiro pedido recebido pela aplicação deve obter o assento. Nesses casos, a aplicação deve processar o pagamento apenas para o primeiro pedido. No entanto, se o primeiro pedido for rejeitado durante o processamento de pagamento, o segundo pedido deve obter o assento. Nesses casos, a aplicação deve processar o pagamento para o segundo pedido.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Enviar o ID do pedido para um tópico FIFO do Amazon Simple Notification Service (Amazon SNS) que se divide em uma fila FIFO do Amazon Simple Queue Service (Amazon SQS) para gerenciamento de inventário e outra fila FIFO do SQS para processamento de pagamento.",
      "Alterar a função Lambda que gera o ID do pedido para iniciar a função Lambda para gerenciamento de inventário. Em seguida, iniciar a função Lambda para processamento de pagamento.",
      "Enviar o ID do pedido para um tópico do Amazon Simple Notification Service (Amazon SNS). Inscrever as funções Lambda para gerenciamento de inventário e processamento de pagamento no tópico.",
      "Entregar o ID do pedido para uma fila do Amazon Simple Queue Service (Amazon SQS). Configurar as funções Lambda para gerenciamento de inventário e processamento de pagamento para consultar a fila."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. Um tópico SNS FIFO com filas SQS FIFO garante a ordem dos pedidos, permitindo que o primeiro pedido seja processado primeiro. A opção B não garante ordem paralela. A opção C (SNS não FIFO) não preserva a ordem. A opção D (SQS não FIFO) não garante ordem estrita."
  },
  {
    id: 9,
    text: `Uma aplicação usa o AWS X-Ray para gerar uma grande quantidade de dados de rastreamento por hora. Um desenvolvedor deseja usar expressões de filtro para limitar os resultados retornados por meio de atributos personalizados especificados pelo usuário.
Como o desenvolvedor deve usar expressões de filtro para filtrar os resultados no X-Ray?`,
    options: [
      "Adicionar atributos personalizados como anotações no documento de segmento.",
      "Adicionar atributos personalizados como metadados no documento de segmento.",
      "Adicionar atributos personalizados como novos campos de segmento no documento de segmento.",
      "Criar novas regras de amostragem baseadas em atributos personalizados."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. Anotações no documento de segmento são indexadas e podem ser usadas em expressões de filtro do X-Ray. A opção B (metadados) não é indexada. A opção C não é suportada. A opção D é para amostragem, não filtragem."
  },
  {
    id: 10,
    text: `Uma aplicação está processando milhões de eventos em tempo real recebidos por meio de uma API.
Qual serviço pode ser usado para permitir que vários consumidores processem os dados simultaneamente e de forma MAIS econômica?`,
    options: [
      "Amazon SNS com fanout para uma fila SQS para cada aplicação",
      "Amazon SNS com fanout para uma fila FIFO SQS para cada aplicação",
      "Amazon Kinesis Firehose",
      "Amazon Kinesis Data Streams"
    ],
    correctAnswer: 3,
    explanation: "A opção D é a correta. O Kinesis Data Streams suporta múltiplos consumidores em tempo real com alta escalabilidade e custo eficiente. A opção A é menos adequada para grandes volumes em tempo real. A opção B (FIFO) é mais cara. A opção C é para entrega de dados, não processamento concorrente."
  },
  {
    id: 11,
    text: `Dado o seguinte modelo do AWS CloudFormation:
[O modelo não foi fornecido, mas a questão implica um bucket S3 criado]
Qual é a maneira MAIS eficiente de referenciar o novo bucket do Amazon S3 a partir de outro modelo do AWS CloudFormation?`,
    options: [
      "Adicionar uma declaração Export à seção Outputs do modelo original e usar ImportValue em outros modelos.",
      "Adicionar Exported: true ao Content.Bucket no modelo original e usar ImportResource em outros modelos.",
      "Criar um recurso personalizado do AWS CloudFormation que obtenha o nome do bucket do recurso ContentBucket da primeira pilha.",
      "Usar Fn::Include para incluir o modelo existente em outros modelos e usar o recurso ContentBucket diretamente."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. Exportar o nome do bucket na seção Outputs e usar `ImportValue` é o método padrão e eficiente para referenciar recursos entre modelos. A opção B é inválida. A opção C é complexa. A opção D não é prática para referenciar recursos específicos."
  },
  {
    id: 12,
    text: `Um desenvolvedor construiu uma aplicação que insere dados em uma tabela do Amazon DynamoDB. A tabela está configurada para usar capacidade provisionada. A aplicação é implantada em uma instância nano burstable do Amazon EC2. Os logs da aplicação mostram que a aplicação está falhando devido a um erro ProvisionedThroughputExceededException.
Quais ações o desenvolvedor deve tomar para resolver esse problema? (Escolha duas opções.)`,
    options: [
      "Mover a aplicação para uma instância EC2 maior.",
      "Aumentar o número de unidades de capacidade de leitura (RCUs) provisionadas para a tabela do DynamoDB.",
      "Reduzir a frequência de solicitações ao DynamoDB implementando retrocesso exponencial.",
      "Aumentar a frequência de solicitações ao DynamoDB diminuindo o atraso de repetição.",
      "Alterar o modo de capacidade da tabela do DynamoDB de provisionada para sob demanda."
    ],
    correctAnswer: [2, 4],
    explanation: "As opções C e E são corretas. O retrocesso exponencial (C) reduz a taxa de solicitações, evitando limitação. O modo sob demanda (E) elimina erros de capacidade provisionada. A opção A não resolve limitação do DynamoDB. A opção B é cara e pode não ser suficiente. A opção D piora o problema."
  },
  {
    id: 13,
    text: `Uma empresa está hospedando um workshop para usuários externos e deseja compartilhar os documentos de referência com os usuários externos por 7 dias. A empresa armazena os documentos de referência em um bucket do Amazon S3 que pertence à empresa.
Qual é a maneira MAIS segura de compartilhar os documentos com os usuários externos?`,
    options: [
      "Usar URLs pré-assinadas do S3 para compartilhar os documentos com os usuários externos. Definir um tempo de expiração de 7 dias.",
      "Mover os documentos para uma pasta do Amazon WorkDocs. Compartilhar os links da pasta do WorkDocs com os usuários externos.",
      "Criar usuários IAM temporários com acesso somente leitura ao bucket S3. Compartilhar as chaves de acesso com os usuários externos. Expirar as credenciais após 7 dias.",
      "Criar uma função que tenha acesso somente leitura ao bucket S3. Compartilhar o ARN dessa função com os usuários externos."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a mais segura. URLs pré-assinadas fornecem acesso temporário e controlado sem credenciais permanentes. A opção B é menos segura e complexa. A opção C expõe chaves de acesso, um risco de segurança. A opção D é inválida, pois ARNs de funções não concedem acesso direto."
  },
  {
    id: 14,
    text: `Um desenvolvedor está planejando usar o Amazon API Gateway e o AWS Lambda para fornecer uma API REST. O desenvolvedor terá três ambientes distintos para gerenciar: desenvolvimento, teste e produção.
Como a aplicação deve ser implantada enquanto minimiza o número de recursos a gerenciar?`,
    options: [
      "Criar um API Gateway separado e uma função Lambda separada para cada ambiente na mesma Região.",
      "Atribuir uma Região para cada ambiente e implantar o API Gateway e o Lambda em cada Região.",
      "Criar um API Gateway com múltiplos estágios com uma função Lambda com múltiplos aliases.",
      "Criar um API Gateway e uma função Lambda, e usar um parâmetro REST para identificar o ambiente."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a correta. Um único API Gateway com estágios (dev, test, prod) e uma função Lambda com aliases reduz o número de recursos gerenciados. A opção A aumenta a sobrecarga. A opção B é desnecessária e cara. A opção D é menos estruturada e propensa a erros."
  },
  {
    id: 15,
    text: `Uma empresa tem uma aplicação legada Windows de múltiplos nós que é executada no local. A aplicação usa uma pasta compartilhada na rede como um repositório de configuração centralizado para armazenar arquivos de configuração no formato .xml. A empresa está migrando a aplicação para instâncias do Amazon EC2. Como parte da migração para a AWS, um desenvolvedor deve identificar uma solução que forneça alta disponibilidade para o repositório.
Qual solução atenderá a esse requisito da maneira MAIS econômica?`,
    options: [
      "Montar um volume do Amazon Elastic Block Store (Amazon EBS) em uma das instâncias EC2. Implantar um sistema de arquivos no volume EBS. Usar o sistema operacional host para compartilhar uma pasta. Atualizar o código da aplicação para ler e escrever arquivos de configuração da pasta compartilhada.",
      "Implantar uma instância micro EC2 com um volume de armazenamento de instância. Usar o sistema operacional host para compartilhar uma pasta. Atualizar o código da aplicação para ler e escrever arquivos de configuração da pasta compartilhada.",
      "Criar um bucket do Amazon S3 para hospedar o repositório. Migrar os arquivos .xml existentes para o bucket S3. Atualizar o código da aplicação para usar o SDK da AWS para ler e escrever arquivos de configuração do Amazon S3.",
      "Criar um bucket do Amazon S3 para hospedar o repositório. Migrar os arquivos .xml existentes para o bucket S3. Montar o bucket S3 nas instâncias EC2 como um volume local. Atualizar o código da aplicação para ler e escrever arquivos de configuração do disco."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a mais econômica. O S3 oferece alta disponibilidade e é mais barato que EBS ou instâncias dedicadas. O SDK da AWS facilita a integração. A opção A é cara e complexa. A opção B é menos disponível. A opção D não é suportada, pois S3 não pode ser montado como disco."
  },
  {
    id: 16,
    text: `Um desenvolvedor registrou uma função AWS Lambda como alvo para um Application Load Balancer (ALB) usando um comando CLI. No entanto, a função Lambda não está sendo invocada quando o cliente envia solicitações por meio do ALB.
Por que a função Lambda não está sendo invocada?`,
    options: [
      "Uma função Lambda não pode ser registrada como alvo para um ALB.",
      "Uma função Lambda pode ser registrada com um ALB apenas usando o AWS Management Console.",
      "As permissões para invocar a função Lambda estão faltando.",
      "A zona cruzada não está habilitada no ALB."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a correta. A função Lambda precisa de permissões IAM (exemplo: `lambda:InvokeFunction`) no policy do ALB. A opção A é falsa, pois ALBs suportam Lambda como alvo. A opção B é incorreta, pois CLI é suportado. A opção D não afeta invocações."
  },
  {
    id: 17,
    text: `Um desenvolvedor está criando uma função AWS Lambda que se conectará a uma instância do Amazon RDS para MySQL. O desenvolvedor deseja armazenar as credenciais do banco de dados. As credenciais do banco de dados precisam ser criptografadas e a senha do banco de dados precisa ser rotacionada automaticamente.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Armazenar as credenciais do banco de dados como variáveis de ambiente para a função Lambda. Configurar as variáveis de ambiente para rotacionar automaticamente.",
      "Armazenar as credenciais do banco de dados no AWS Secrets Manager. Configurar a rotação gerenciada nas credenciais do banco de dados.",
      "Armazenar as credenciais do banco de dados no AWS Systems Manager Parameter Store como parâmetros de string segura. Configurar a rotação gerenciada nos parâmetros.",
      "Armazenar as credenciais do banco de dados no parâmetro X-Amz-Security-Token."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. O Secrets Manager suporta criptografia e rotação automática de credenciais para RDS. A opção A não suporta rotação automática. A opção C não suporta rotação para RDS. A opção D é inválida."
  },
  {
    id: 18,
    text: `Um desenvolvedor deseja reduzir o risco ao implantar uma nova versão de uma função AWS Lambda existente. Para testar a função Lambda, o desenvolvedor precisa dividir o tráfego entre a versão existente e a nova versão da função.
Qual solução atenderá esses requisitos?`,
    options: [
      "Configurar uma política de roteamento ponderada no Amazon Route 53.",
      "Criar um alias de função. Configurar o alias para dividir o tráfego entre as duas versões da função Lambda.",
      "Criar um Application Load Balancer (ALB) que use a função Lambda como objetivo.",
      "Criar a nova versão da função Lambda como uma camada Lambda na versão existente."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. Um alias Lambda com pesos configurados permite dividir o tráfego entre versões. A opção A não é aplicável a Lambda. A opção C é inviável, pois ALBs não dividem tráfego por versão. A opção D é inválida, pois camadas não gerenciam versões."
  },
  {
    id: 19,
    text: `Um desenvolvedor criou uma grande função AWS Lambda. A implantação da função está falhando devido a um erro InvalidParameterValueException. A mensagem de erro indica que o tamanho descompactado da função excede o valor máximo suportado.
Quais ações o desenvolvedor pode tomar para resolver esse erro? (Escolha duas opções.)`,
    options: [
      "Enviar uma solicitação de aumento de cota para o Suporte AWS para aumentar o tamanho da função para o necessário.",
      "Usar um algoritmo de compressão mais eficiente que o ZIP.",
      "Dividir a função em várias funções menores.",
      "Compactar o arquivo .zip duas vezes para comprimi-lo ainda mais.",
      "Mover bibliotecas comuns, dependências da função e tempos de execução personalizados para camadas Lambda."
    ],
    correctAnswer: [2, 4],
    explanation: "As opções C e E são corretas. Dividir a função (C) reduz o tamanho individual. Mover dependências para camadas (E) reduz o tamanho do pacote. A opção A não é garantida. A opção B não é suportada pelo Lambda. A opção D não reduz o tamanho descompactado."
  },
  {
    id: 20,
    text: `Um desenvolvedor está solucionando problemas em uma aplicação em um ambiente de integração. Na aplicação, uma fila do Amazon Simple Queue Service (Amazon SQS) consome mensagens e, em seguida, uma função AWS Lambda processa as mensagens. A função Lambda transforma as mensagens e faz uma chamada de API para um serviço de terceiros.
Houve um aumento no uso da aplicação. A API de terceiros frequentemente retorna mensagens de erro HTTP 429 Too Many Requests.
Como o desenvolvedor pode resolver esse problema?`,
    options: [
      "Aumentar o tamanho do lote da fonte de eventos SQS.",
      "Configurar a concorrência provisionada para a função Lambda com base nos limites de taxa documentados da API de terceiros.",
      "Aumentar as tentativas de repetição e a idade máxima do evento na configuração assíncrona da função Lambda.",
      "Configurar a concorrência máxima na fonte de eventos SQS com base nos limites de taxa documentados do serviço de terceiros."
    ],
    correctAnswer: 3,
    explanation: "A opção D é a correta. Configurar a concorrência máxima no SQS limita a taxa de chamadas à API, respeitando os limites do terceiro. A opção A aumenta o lote, não resolve limitação. A opção B é para Lambda, não SQS. A opção C não controla a taxa de chamadas."
  },
  {
    id: 21,
    text: `Uma empresa tem uma aplicação de três camadas implantada no Amazon Elastic Container Service (Amazon ECS). A aplicação está usando uma instância de banco de dados Amazon RDS para MySQL. A aplicação realiza mais leituras do que escritas no banco de dados.
Durante períodos de pico de uso, o desempenho da aplicação diminui. Quando essa degradação de desempenho ocorre, a métrica ReadLatency da instância de banco de dados no Amazon CloudWatch aumenta repentinamente.
Como um desenvolvedor deve modificar a aplicação para melhorar o desempenho?`,
    options: [
      "Usar o Amazon ElastiCache para armazenar resultados de consultas em cache.",
      "Escalar o cluster ECS para conter mais instâncias ECS.",
      "Adicionar unidades de capacidade de leitura (RCUs) à instância de banco de dados.",
      "Modificar a definição da tarefa ECS para aumentar a memória da tarefa."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. O ElastiCache reduz a carga de leitura no RDS, melhorando o desempenho. A opção B não resolve a latência de leitura. A opção C não se aplica a RDS. A opção D não afeta diretamente a leitura do banco."
  },
  {
    id: 22,
    text: `Uma empresa tem uma aplicação web online que inclui um catálogo de produtos. O catálogo está armazenado em um bucket do Amazon S3 chamado DOC-EXAMPLE-BUCKET. A aplicação deve ser capaz de listar os objetos no bucket S3 e deve ser capaz de baixar objetos por meio de uma política IAM.
Qual política permite o acesso MÍNIMO para atender a esses requisitos?`,
    options: [
      "Política A",
      "Política B",
      "Política C",
      "Política D"
    ],
    correctAnswer: 0,
    explanation: "Como as políticas não foram fornecidas, a resposta padrão é A. A política deve incluir `s3:ListBucket` para listar objetos e `s3:GetObject` para baixar objetos, com acesso limitado ao bucket específico."
  },
  {
    id: 23,
    text: `Um desenvolvedor está escrevendo uma aplicação para criptografar arquivos fora da AWS antes de fazer upload dos arquivos para um bucket do Amazon S3. A criptografia deve ser simétrica e realizada dentro da aplicação.
Como o desenvolvedor pode implementar a criptografia na aplicação para atender a esses requisitos?`,
    options: [
      "Criar uma chave de dados no AWS KMS. Usar o AWS Encryption SDK para criptografar os arquivos.",
      "Criar uma chave HMAC no AWS KMS.",
      "Criar um par de chaves de dados no AWS KMS.",
      "Criar uma chave de dados no AWS KMS."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. O AWS Encryption SDK com uma chave de dados do KMS suporta criptografia simétrica na aplicação. A opção B não é válida, pois HMAC não é para criptografia simétrica. A opção C refere-se a criptografia assimétrica. A opção D é ambígua e redundante."
  },
  {
    id: 24,
    text: `Um desenvolvedor está trabalhando em uma aplicação implantada em uma instância do Amazon EC2. O desenvolvedor precisa de uma solução que transfira arquivos da aplicação para um bucket do Amazon S3 com segurança.
O que o desenvolvedor fazer para atender esses requisitos da maneira MAIS segura?`,
    options: [
      "Criar um usuário IAM. Criar uma chave de acesso para o usuário IAM. Armazenar a chave de acesso nas variáveis de ambiente da aplicação.",
      "Criar uma função IAM. Criar uma chave de acesso para a função IAM. Armazenar a chave de acesso nas variáveis de ambiente da aplicação.",
      "Criar uma função IAM. Configurar a função IAM para acessar as chamadas de API específicas do Amazon S3 necessárias para a aplicação. Associar a função IAM à instância EC2.",
      "Configurar uma política de bucket S3 para o bucket S3. Configurar a política de bucket S3 para permitir acesso para o ID da instância EC2."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a mais segura. Associar uma função IAM à instância EC2 elimina a necessidade de chaves de acesso, usando credenciais temporárias. As opções A e B expõem chaves de acesso, menos seguras. A opção D não é prática, pois políticas de bucket não usam IDs de instância."
  },
  {
    id: 25,
    text: `Um desenvolvedor criou uma API web que recebe solicitações por meio de um Application Load Balancer (ALB) voltado para a internet com um ouvinte HTTPS. O desenvolvedor configura um pool de usuários do Amazon Cognito e deseja garantir que todas as solicitações à API sejam autenticadas pelo Amazon Cognito.
O que o desenvolvedor deve fazer para atender esse requisito?`,
    options: [
      "Adicionar uma regra de ouvinte ao ouvinte para retornar uma resposta fixa se o cabeçalho Authorization estiver ausente.",
      "Criar uma ação de autenticação para as regras de ouvinte do ALB.",
      "Criar uma API do Amazon API Gateway.",
      "Criar um novo grupo de destino que inclua um destino de função AWS Lambda."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. Configurar uma ação de autenticação do tipo `authenticate-cognito` no ALB garante que as solicitações sejam autenticadas pelo Cognito. A opção A apenas rejeita solicitações, sem autenticação. A opção C adiciona complexidade desnecessária. A opção D é inviável para autenticação."
  },
  {
    id: 26,
    text: `Uma empresa deseja implantar e manter sites estáticos na AWS. O código-fonte de cada site está hospedado em um dos vários sistemas de controle de versão, incluindo AWS CodeCommit, Bitbucket e GitHub.
A empresa deseja implementar lançamentos em fases usando ambientes de desenvolvimento, staging, teste de aceitação do usuário e produção na Nuvem AWS. As implantações para cada ambiente devem ser iniciadas por mesclagens de código no ramo Git relevante. A empresa deseja usar HTTPS para toda a troca de dados. A empresa precisa de uma solução que não exija servidores em execução contínua.
Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?`,
    options: [
      "Hospedar cada site usando o AWS Amplify com um backend sem servidor.",
      "Hospedar cada site no AWS Elastic Beanstalk com múltiplos ambientes.",
      "Hospedar cada site em diferentes buckets do Amazon S3 para cada ambiente.",
      "Hospedar cada site em sua própria instância do Amazon EC2."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. O AWS Amplify suporta sites estáticos sem servidores, integração com repositórios Git, e implantações por ramo com HTTPS, minimizando a sobrecarga. A opção B requer servidores. A opção C é complexa para gerenciar. A opção D é cara e não é sem servidor."
  },
  {
    id: 27,
    text: `Uma empresa implantou recentemente uma função AWS Lambda. Um desenvolvedor observa um aumento nas métricas de limitação da função no Amazon CloudWatch.
Quais são as soluções MAIS eficientes operacionalmente para reduzir a limitação da função? (Escolha duas opções.)`,
    options: [
      "Migrar a função para o Amazon Elastic Kubernetes Service (Amazon EKS).",
      "Aumentar a idade máxima dos eventos no Lambda.",
      "Aumentar a concorrência reservada da função.",
      "Adicionar a ação lambda:GetFunctionConcurrency à função de execução.",
      "Solicitar uma alteração de cota de serviço para maior concorrência."
    ],
    correctAnswer: [2, 4],
    explanation: "As opções C e E são corretas. Aumentar a concorrência reservada (C) aloca mais capacidade. Solicitar aumento de cota (E) resolve limitações de conta. A opção A é complexa. A opção B não afeta limitação. A opção D é irrelevante."
  },
  {
    id: 28,
    text: `Uma empresa está criando um serviço REST usando uma integração do Amazon API Gateway com o AWS Lambda. O serviço deve executar diferentes versões para fins de teste.
Qual seria a MELHOR maneira de realizar isso?`,
    options: [
      "Usar um cabeçalho X-Version para denotar qual versão está sendo chamada.",
      "Criar um autorizador Lambda do API Gateway para rotear clientes da API para a versão correta.",
      "Criar uma política de recurso do API Gateway para isolar versões.",
      "Implantar as versões da API como estágios únicos com endpoints únicos."
    ],
    correctAnswer: 3,
    explanation: "A opção D é a correta. Implantar versões como estágios no API Gateway permite isolamento e gerenciamento claro. A opção A exige alterações no cliente. A opção B é complexa. A opção C não é prática para versões."
  },
  {
    id: 29,
    text: `Uma empresa está usando o AWS CodePipeline para entregar uma de suas aplicações. O pipeline de entrega é acionado por alterações no ramo principal de um repositório do AWS CodeCommit e usa o AWS CodeBuild para implementar as etapas de teste e construção do processo e o AWS CodeDeploy para implantar a aplicação.
O pipeline está operando com sucesso há vários meses e não houve modificações. Após uma recente alteração no código-fonte da aplicação, o AWS CodeDeploy não implantou a aplicação atualizada como esperado.
Quais são as possíveis causas? (Escolha duas opções.)`,
    options: [
      "A alteração não foi feita no ramo principal do repositório do AWS CodeCommit.",
      "Uma das etapas anteriores no pipeline falhou e o pipeline foi encerrado.",
      "Uma das instâncias do Amazon EC2 no cluster do AWS CodePipeline da empresa está inativa.",
      "O AWS CodePipeline está configurado incorretamente e não está invocando o AWS CodeDeploy.",
      "O AWS CodePipeline não tem permissões para acessar o AWS CodeCommit."
    ],
    correctAnswer: [0, 1],
    explanation: "As opções A e B são corretas. Se a alteração não foi no ramo principal (A), o pipeline não é acionado. Se uma etapa anterior falhou (B), o CodeDeploy não é executado. A opção C é inválida, pois pipelines não usam clusters EC2. As opções D e E são improváveis após meses de funcionamento."
  },
  {
    id: 30,
    text: `Um desenvolvedor está construindo uma aplicação sem servidor usando o AWS SAM em várias funções AWS Lambda. Quando a aplicação é implantada, o desenvolvedor quer direcionar 10% do tráfego para a nova implantação da aplicação pelos primeiros 10 minutos após a implantação. Se não houver problemas, todo o tráfego deve mudar para a nova versão.
Qual mudança no modelo AWS SAM atenderá esses requisitos?`,
    options: [
      "Definir o Tipo de Preferência de Implantação como Canary10Percent10Minutes.",
      "Definir o Tipo de Preferência de Implantação como Linear10PercentEvery10Minutes.",
      "Definir o Tipo de Preferência de Implantação como Canary.",
      "Definir o Tipo de Preferência de Implantação como Linear."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. O `Canary10Percent10Minutes` direciona 10% do tráfego por 10 minutos, com AutoPublishAlias garantindo a transição. A opção B é linear, não canary. As opções C e D não atendem aos requisitos de tempo e porcentagem."
  },
  {
    id: 31,
    text: `Uma função AWS Lambda está sendo executada em uma conta AWS compartilhada da empresa. A função precisa realizar uma ação adicional ec2:DescribeInstances direcionada às contas de desenvolvimento da empresa. Um desenvolvedor deve configurar as permissões necessárias entre as contas.
Como o desenvolvedor deve configurar as permissões para aderir ao princípio do menor privilégio?`,
    options: [
      "Criar uma função IAM na conta compartilhada. Adicionar a permissão ec2:DescribeInstances à função. Estabelecer uma relação de confiança entre as contas de desenvolvimento para essa função. Atualizar a função IAM da função Lambda na conta compartilhada adicionando a permissão ec2:DescribeInstances à função.",
      "Criar uma função IAM nas contas de desenvolvimento. Adicionar a permissão ec2:DescribeInstances à função. Estabelecer uma relação de confiança com a conta compartilhada para essa função. Atualizar a função IAM da função Lambda na conta compartilhada adicionando as permissões iam:AssumeRole.",
      "Criar uma função IAM na conta compartilhada. Adicionar a permissão ec2:DescribeInstances à função. Estabelecer uma relação de confiança entre as contas de desenvolvimento para essa função. Atualizar a função IAM da função Lambda na conta compartilhada adicionando as permissões CIM:AssumeRole.",
      "Criar uma função IAM nas contas de desenvolvimento. Adicionar a permissão ec2:DescribeInstances à função. Estabelecer uma relação de confiança com a conta compartilhada para essa função. Atualizar a função IAM da função Lambda na conta compartilhada adicionando a permissão ec2:DescribeInstances à função."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a correta. Criar uma função na conta compartilhada com `ec2:DescribeInstances` e permitir que as contas de desenvolvimento a assumam via relação de confiança, com a função Lambda assumindo-a via `iam:AssumeRole`, segue o menor privilégio. As opções A e D adicionam permissões desnecessárias diretamente. A opção B inverte a estrutura de confiança."
  },
  {
    id: 32,
    text: `Um desenvolvedor está construindo uma nova aplicação que será implantada na AWS. O desenvolvedor criou um repositório do AWS CodeCommit para a aplicação. O desenvolvedor inicializou um novo projeto para a aplicação invocando o comando cdk init do AWS Cloud Development Kit (AWS CDK).
O desenvolvedor deve escrever testes unitários para os modelos de infraestrutura como código (IaC) que o AWS CDK gera. O desenvolvedor também deve executar uma ferramenta de validação em todos os constructos do CDK da aplicação para garantir que configurações de segurança críticas estejam ativadas.
Qual combinação de ações atenderá esses requisitos com a MENOR sobrecarga de desenvolvimento? (Escolha duas opções.)`,
    options: [
      "Usar um framework de testes unitários.",
      "Usar o módulo de assertions do CDK.",
      "Usar o contexto de tempo de execução do CDK.",
      "Escrever um script que busca cadeias de configuração específicas na aplicação.",
      "Usar a classe CDK Aspects do CDK."
    ],
    correctAnswer: [1, 4],
    explanation: "As opções B e E são corretas. O módulo de assertions do CDK (B) facilita testes unitários para IaC. A classe Aspects (E) valida configurações de segurança com baixa sobrecarga. A opção A é genérica. A opção C não valida segurança. A opção D é manual e propensa a erros."
  },
  {
    id: 33,
    text: `Uma empresa de vendas online está desenvolvendo uma aplicação sem servidor que é executada na AWS. A aplicação usa uma função AWS Lambda que calcula taxas de sucesso de pedidos e atualiza os dados em uma tabela do Amazon DynamoDB. Um desenvolvedor deseja uma maneira eficiente de invocar a função Lambda a cada 15 minutos.
Qual solução atenderá essa necessidade com o MENOR esforço de desenvolvimento?`,
    options: [
      "Criar uma regra do Amazon EventBridge.",
      "Criar um documento do AWS Systems Manager.",
      "Criar uma máquina de estado do AWS Step Functions.",
      "Provisionar uma instância pequena do Amazon EC2."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. Uma regra do EventBridge com uma expressão de taxa de 15 minutos é simples e nativa. A opção B é complexa e inadequada. A opção C adiciona sobrecarga. A opção D é cara e não é sem servidor."
  },
  {
    id: 34,
    text: `Uma empresa implanta uma aplicação de processamento de fotos em uma instância do Amazon EC2. A aplicação precisa de processar cada foto em menos de 5 minutos. Se o processamento levar mais tempo, a equipe de desenvolvimento da empresa deve receber uma notificação.
Como um desenvolvedor pode implementar a medição de tempo e a notificação requeridas com a MENOR sobrecarga operacional?`,
    options: [
      "Criar uma métrica personalizada do Amazon CloudWatch",
      "Criar uma fila do Amazon Simple Queue Service (Amazon SQS).",
      "Criar uma métrica personalizada do Amazon CloudWatch.",
      "Criar um fluxo de dados do Amazon Kinesis."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. Publicar o tempo de processamento como uma métrica personalizada no CloudWatch e configurar um alarme com SNS é simples e eficiente. A opção B adiciona complexidade. A opção C é redundante. A opção D é excessiva para monitoramento."
  },
  {
    id: 35,
    text: `Uma empresa está usando o AWS Elastic Beanstalk para gerenciar aplicações web que estão sendo executadas em instâncias do Amazon EC2. Um desenvolvedor precisa fazer alterações de configuração. O desenvolvedor deve implantar as alterações apenas em novas instâncias.
Quais tipos de implantação o desenvolvedor pode usar para atender a esse requisito? (Escolha duas opções.)`,
    options: [
      "All at once",
      "Immutable",
      "Rolling",
      "Blue/green",
      "Rolling with additional batch"
    ],
    correctAnswer: [1, 3],
    explanation: "As opções B e D são corretas. A implantação imutável (B) cria novas instâncias para alterações. A implantação blue/green (D) também usa novas instâncias. As opções A, C e E afetam instâncias existentes."
  },
    {
    id: 36,
    text: `Um desenvolvedor precisa usar o Amazon DynamoDB para armazenar pedidos de clientes. A empresa do desenvolvedor exige que todos os dados dos clientes sejam criptografados em repouso com uma chave gerada pela empresa.
O que o desenvolvedor deve fazer para atender a esses requisitos?`,
    options: [
      "Criar a tabela DynamoDB com criptografia definida como None. Codificar a aplicação para usar a chave para descriptografar os dados quando a aplicação lê da tabela. Codificar a aplicação para usar a chave para criptografar os dados quando a aplicação grava na tabela.",
      "Armazenar a chave usando o AWS Key Management Service (AWS KMS). Escolher uma chave gerenciada pelo cliente do AWS KMS durante a criação da tabela DynamoDB. Fornecer o Amazon Resource Name (ARN) da chave KMS.",
      "Armazenar a chave usando o AWS Key Management Service (AWS KMS). Criar a tabela DynamoDB com criptografia padrão. Incluir o parâmetro kms:Encrypt com o ARN da chave KMS ao usar o SDK de desenvolvimento de software do DynamoDB.",
      "Armazenar a chave usando o AWS Key Management Service (AWS KMS). Escolher uma chave gerenciada pela AWS do KMS durante a criação da tabela DynamoDB. Fornecer o ARN da chave KMS."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. Usar uma chave gerenciada pelo cliente do AWS KMS permite que a empresa controle a chave, e especificar o ARN durante a criação da tabela habilita a criptografia em repouso. A opção A é insegura e manual. A opção C é inválida, pois kms:Encrypt não é usado em tabelas DynamoDB. A opção D usa uma chave gerenciada pela AWS, não pela empresa."
  },
  {
    id: 37,
    text: `Uma empresa está migrando um banco de dados local para o Amazon RDS para MySQL. A empresa tem cargas de trabalho com alta incidência de leitura. A empresa deseja refatorar o código para alcançar o desempenho ótimo de leitura para consultas.
Qual solução atenderá a esse requisito com o MENOR esforço atual e futuro?`,
    options: [
      "Usar uma implantação multi-AZ do Amazon RDS. Aumentar o número de conexões que o código faz com o banco de dados ou aumentar o tamanho do pool de conexões, se um pool de conexões estiver em uso.",
      "Usar uma implantação multi-AZ do Amazon RDS. Modificar o código para que as consultas acessem a instância RDS secundária.",
      "Implantar o Amazon RDS com uma ou mais réplicas de leitura. Modificar o código da aplicação para que as consultas usem a URL das réplicas de leitura.",
      "Usar um software de replicação de código aberto para criar uma cópia do banco de dados MySQL em uma instância do Amazon EC2. Modificar o código da aplicação para que as consultas usem o endereço IP da instância EC2."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a correta. Réplicas de leitura do RDS descarregam consultas de leitura, melhorando o desempenho com mudanças mínimas no código. A opção A não otimiza leitura. A opção B é inválida, pois instâncias secundárias multi-AZ são para failover, não leitura. A opção D é complexa e exige manutenção."
  },
  {
    id: 38,
    text: `Uma empresa usa o AWS CloudFormation para implantar uma aplicação que usa uma API REST do Amazon API Gateway com integração de função AWS Lambda. A aplicação usa o Amazon DynamoDB para persistência de dados. A aplicação tem três estágios: desenvolvimento, teste e produção. Cada estágio usa sua própria tabela DynamoDB.
A empresa enfrentou problemas inesperados ao promover mudanças para o estágio de produção. As mudanças foram bem-sucedidas nos estágios de desenvolvimento e teste. Um desenvolvedor precisa direcionar 20% do tráfego para a nova API de estágio de produção com a próxima versão de produção. O desenvolvedor precisa direcionar os 80% restantes do tráfego para o estágio de produção existente. A solução deve minimizar o número de erros que qualquer cliente individual experimenta.
Qual abordagem o desenvolvedor deve adotar para atender a esses requisitos?`,
    options: [
      "Atualizar 20% das mudanças planejadas para o estágio de produção. Implantar o novo estágio de produção. Monitorar os resultados. Repetir esse processo cinco vezes para testar todas as mudanças planejadas.",
      "Atualizar o registro DNS do Amazon Route 53 para a API de estágio de produção para usar uma política de roteamento ponderada. Definir o peso como 80. Adicionar um segundo registro para o nome de domínio de produção. Alterar a segunda política de roteamento para uma política de roteamento ponderada. Definir o peso da segunda política como 20. Alterar o alias da segunda política para usar a API de estágio de teste.",
      "Implantar um Application Load Balancer (ALB) na frente da API REST. Alterar o registro do Amazon Route 53 da API de produção para direcionar o tráfego para o ALB. Registrar os estágios de produção e teste como alvos do ALB com pesos de 80% e 20%, respectivamente.",
      "Configurar as configurações de canary para a API de estágio de produção. Alterar a porcentagem de tráfego direcionado para a implantação canary para 20%. Fazer as atualizações planejadas para o estágio de produção. Implantar as mudanças."
    ],
    correctAnswer: 3,
    explanation: "A opção D é a correta. Configurações de canary no API Gateway permitem direcionar 20% do tráfego para a nova versão, minimizando erros por cliente. A opção A é manual e arriscada. A opção B é complexa e não se aplica a API Gateway. A opção C não é suportada para API Gateway."
  },
  {
    id: 39,
    text: `Um desenvolvedor criou uma aplicação de coleta de dados que usa o Amazon API Gateway, AWS Lambda e Amazon S3. Os usuários da aplicação fazem upload de arquivos de dados periodicamente e aguardam o status de validação ser refletido em um painel de processamento. O processo de validação é complexo e demorado para arquivos grandes.
Alguns usuários estão fazendo upload de dezenas de arquivos grandes e precisam esperar e atualizar o painel de processamento para ver se os arquivos foram validados. O desenvolvedor deve refatorar a aplicação para atualizar imediatamente o resultado da validação no painel do usuário sem recarregar o painel completo.
Qual é a solução MAIS eficiente operacionalmente que atende a esses requisitos?`,
    options: [
      "Integrar o cliente com uma API WebSocket do API Gateway. Salvar os arquivos enviados pelo usuário com o ID de conexão WebSocket. Enviar o status de validação para o ID de conexão quando o processamento for concluído para iniciar uma atualização da interface do usuário.",
      "Iniciar uma instância micro do Amazon EC2 e configurar um servidor WebSocket. Enviar o arquivo enviado pelo usuário e os detalhes do usuário para a instância EC2 após o upload do arquivo. Usar o servidor WebSocket para enviar atualizações para a interface do usuário quando o arquivo enviado for processado.",
      "Salvar o endereço de e-mail do usuário junto com o arquivo enviado. Quando o processo de validação for concluído, enviar uma notificação por e-mail através do Amazon Simple Notification Service (Amazon SNS) para o usuário que fez o upload do arquivo.",
      "Salvar o arquivo enviado pelo usuário e os detalhes do usuário no Amazon DynamoDB. Usar o Amazon DynamoDB Streams com notificações push do Amazon Simple Notification Service (Amazon SNS) para enviar atualizações ao navegador para atualizar a interface do usuário."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a mais eficiente. O WebSocket do API Gateway permite atualizações em tempo real sem recarregar o painel, usando IDs de conexão para rastrear usuários. A opção B é cara e complexa. A opção C (e-mail) não atualiza o painel diretamente. A opção D é menos eficiente para atualizações em tempo real."
  },
  {
    id: 40,
    text: `Um desenvolvedor de uma empresa está criando uma aplicação que usa o Amazon API Gateway. A empresa deseja garantir que apenas usuários do departamento de Vendas possam usar a aplicação. Os usuários se autenticam na aplicação usando credenciais federadas de um provedor de identidade de terceiros (IdP) através do Amazon Cognito. O desenvolvedor configurou um mapeamento de atributos para mapear um atributo chamado Department e passar o atributo para um autorizador AWS Lambda personalizado.
Para testar a limitação de acesso, o desenvolvedor define seu departamento como Engenharia no IdP e tenta fazer login na aplicação. O desenvolvedor tem o acesso negado. Em seguida, o desenvolvedor atualiza seu departamento para Vendas no IdP e tenta fazer login. Novamente, o desenvolvedor tem o acesso negado. O desenvolvedor verifica os logs e descobre que o acesso está sendo negado porque o token de acesso do desenvolvedor tem um valor de departamento de Engenharia.
Qual das seguintes é uma possível razão para o departamento do desenvolvedor ainda ser relatado como Engenharia em vez de Vendas?`,
    options: [
      "O cache de autorização está habilitado no autorizador Lambda personalizado.",
      "O cache de autorização está habilitado no pool de usuários do Amazon Cognito.",
      "A função IAM para o autorizador Lambda personalizado não tem uma tag Department.",
      "A função IAM para o pool de usuários do Amazon Cognito não tem uma tag Department."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. O cache de autorização no autorizador Lambda pode armazenar o token antigo com o valor 'Engenharia', causando negação de acesso. A opção B não afeta tokens de acesso. As opções C e D (tags IAM) não influenciam o mapeamento de atributos."
  },
  {
    id: 41,
    text: `Uma empresa migrou uma aplicação para instâncias do Amazon EC2. A escalabilidade automática está funcionando bem para a interface do usuário da aplicação. No entanto, o processo de entrega de solicitações de envio para a equipe do armazém da empresa está enfrentando problemas. Solicitações de envio duplicadas estão chegando, e algumas solicitações estão perdidas ou chegam fora de ordem.
A empresa deve evitar solicitações de envio duplicadas e processar as solicitações na ordem em que chegam. As solicitações nunca têm mais de 250 KB e levam de 5 a 10 minutos para processar. Um desenvolvedor precisa reestruturar a aplicação para melhorar a confiabilidade da entrega e processamento das solicitações.
O que o desenvolvedor deve fazer para atender a esses requisitos?`,
    options: [
      "Criar um fluxo de entrega do Amazon Kinesis Data Firehose para processar as solicitações. Criar um fluxo de dados do Amazon Kinesis. Modificar a aplicação para gravar as solicitações no fluxo de dados Kinesis.",
      "Criar uma função AWS Lambda para processar as solicitações. Criar um tópico do Amazon Simple Notification Service (Amazon SNS). Inscrever a função Lambda no tópico SNS. Modificar a aplicação para gravar as solicitações no tópico SNS.",
      "Criar uma função AWS Lambda para processar as solicitações. Criar uma fila padrão do Amazon Simple Queue Service (Amazon SQS). Definir a fila SQS como uma fonte de evento para a função Lambda. Modificar a aplicação para gravar as solicitações na fila SQS.",
      "Criar uma função AWS Lambda para processar as solicitações. Criar uma fila FIFO do Amazon Simple Queue Service (Amazon SQS). Definir a fila SQS como uma fonte de evento para a função Lambda. Modificar a aplicação para gravar as solicitações na fila SQS."
    ],
    correctAnswer: 3,
    explanation: "A opção D é a correta. Uma fila FIFO SQS garante ordem e elimina duplicatas usando IDs de deduplicação, ideal para solicitações de 250 KB processadas em 5-10 minutos. A opção A não garante ordem estrita. A opção B não elimina duplicatas. A opção C (fila padrão) não preserva ordem."
  },
  {
    id: 42,
    text: `Um desenvolvedor está criando um pipeline de aprendizado de máquina (ML) no AWS Step Functions que contém funções AWS Lambda. O desenvolvedor configurou uma fila do Amazon Simple Queue Service (Amazon SQS) para entregar parâmetros do modelo de ML ao pipeline para treinar modelos de ML. Os modelos treinados são enviados para um bucket do Amazon S3.
O desenvolvedor precisa de uma solução que possa testar localmente o pipeline de ML sem fazer chamadas de integração de serviço para o Amazon SQS e Amazon S3.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Usar o Amazon CodeGuru Profiler para analisar as funções Lambda usadas no pipeline do AWS Step Functions.",
      "Usar a Imagem Docker Local do AWS Step Functions para executar e testar localmente as funções Lambda.",
      "Usar a CLI do AWS Serverless Application Model (AWS SAM) para executar e testar localmente as funções Lambda.",
      "Usar o AWS Step Functions Local com integrações de serviço simuladas."
    ],
    correctAnswer: 3,
    explanation: "A opção D é a correta. O AWS Step Functions Local permite testar pipelines localmente com simulações de serviços como SQS e S3. A opção A é para profiling, não teste local. A opção B testa Step Functions, mas não simula integrações. A opção C testa Lambda, não o pipeline completo."
  },
  {
    id: 43,
    text: `Uma empresa executa uma aplicação de processamento em lote usando funções AWS Lambda e APIs do Amazon API Gateway com estágios de implantação para desenvolvimento, teste de aceitação do usuário e produção. Uma equipe de desenvolvimento precisa configurar as APIs nos estágios de implantação para se conectar a endpoints de serviços de terceiros.
Qual solução atenderá a esse requisito?`,
    options: [
      "Armazenar os endpoints de serviços de terceiros em camadas Lambda que correspondem ao estágio.",
      "Armazenar os endpoints de serviços de terceiros em variáveis de estágio do API Gateway que correspondem ao estágio.",
      "Codificar os endpoints de serviços de terceiros como parâmetros de consulta na URL de solicitação do API Gateway.",
      "Armazenar o endpoint de serviço de terceiros para cada ambiente no AWS AppConfig."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. Variáveis de estágio do API Gateway são projetadas para armazenar configurações como endpoints por estágio, simplificando a gestão. A opção A é inadequada para configurações. A opção C é insegura e inflexível. A opção D adiciona complexidade desnecessária."
  },
  {
    id: 44,
    text: `Um desenvolvedor está construindo uma aplicação sem servidor que é executada na AWS. O desenvolvedor deseja criar um fluxo de trabalho de desenvolvimento acelerado que implante mudanças incrementais na AWS para teste. O desenvolvedor quer implantar as mudanças incrementais, mas não deseja implantar completamente toda a aplicação na AWS para cada commit de código.
O que o desenvolvedor deve fazer para atender a esses requisitos?`,
    options: [
      "Usar o AWS Serverless Application Model (AWS SAM) para construir a aplicação. Usar o comando sam sync para implantar as mudanças incrementais.",
      "Usar o AWS Serverless Application Model (AWS SAM) para construir a aplicação. Usar o comando sam init para implantar as mudanças incrementais.",
      "Usar o AWS Cloud Development Kit (AWS CDK) para construir a aplicação. Usar o comando cdk synth para implantar as mudanças incrementais.",
      "Usar o AWS Cloud Development Kit (AWS CDK) para construir a aplicação. Usar o comando cdk bootstrap para implantar as mudanças incrementais."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. O comando `sam sync` implanta mudanças incrementais rapidamente, ideal para desenvolvimento acelerado. A opção B (`sam init`) cria projetos, não implanta. A opção C (`cdk synth`) gera modelos, não implanta. A opção D (`cdk bootstrap`) configura ambientes, não implanta mudanças."
  },
  {
    id: 45,
    text: `Um desenvolvedor está construindo uma aplicação que usará uma API do Amazon API Gateway com um backend AWS Lambda. A equipe que desenvolverá o frontend precisa de acesso imediato aos endpoints da API para construir a interface do usuário. Para preparar a aplicação backend para integração, o desenvolvedor precisa configurar endpoints. Os endpoints precisam retornar códigos de status HTTP predefinidos e respostas JSON para a equipe de frontend. O desenvolvedor cria um método para um recurso da API.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Definir o tipo de integração como AWS_PROXY. Provisionar funções Lambda para retornar dados JSON codificados.",
      "Definir o tipo de integração como MOCK. Configurar a solicitação de integração do método e a resposta de integração para associar respostas JSON com códigos de status HTTP específicos.",
      "Definir o tipo de integração como HTTP_PROXY. Configurar o API Gateway para passar todas as solicitações para uma API de placeholder externa, que a equipe construirá.",
      "Definir o tipo de integração como MOCK. Usar uma solicitação de método para definir códigos de status HTTP. Usar uma solicitação de integração para definir respostas JSON."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. Integrações MOCK no API Gateway permitem retornar respostas JSON e códigos de status predefinidos sem backend real. A opção A exige Lambda, desnecessário. A opção C depende de um serviço externo. A opção D configura incorretamente solicitações de método."
  },
  {
    id: 46,
    text: `Um desenvolvedor está migrando uma aplicação para o Amazon Elastic Kubernetes Service (Amazon EKS). O desenvolvedor migra a aplicação para o Amazon Elastic Container Registry (Amazon ECR) com um cluster EKS. Como parte da migração da aplicação para um novo backend, o desenvolvedor cria uma nova conta AWS. O desenvolvedor faz alterações de configuração na aplicação para apontar a aplicação para a nova conta AWS e usar novos recursos de backend. O desenvolvedor testa com sucesso as alterações dentro da aplicação implantando o pipeline.
A construção da imagem Docker e a implantação do pipeline são bem-sucedidas, mas a aplicação ainda está se conectando ao backend antigo. O desenvolvedor descobre que a configuração da aplicação ainda está referenciando o cluster EKS original e não os novos recursos de backend.
Qual razão pode explicar por que a aplicação não está se conectando aos novos recursos?`,
    options: [
      "O desenvolvedor não criou com sucesso a nova conta AWS.",
      "O desenvolvedor adicionou uma nova tag à imagem Docker.",
      "O desenvolvedor não atualizou a tag da imagem Docker para uma nova versão.",
      "O desenvolvedor enviou as alterações para uma nova tag da imagem Docker."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a correta. Se a tag da imagem Docker não foi atualizada, o EKS continua usando a imagem antiga com configurações do backend antigo. A opção A é improvável, pois a implantação foi bem-sucedida. As opções B e D não explicam a conexão ao backend antigo."
  },
  {
    id: 47,
    text: `Um desenvolvedor está criando uma aplicação que lê e grava em vários buckets do Amazon S3. A aplicação será implantada em uma instância do Amazon EC2. O desenvolvedor deseja fazer solicitações de API seguras a partir das instâncias EC2 sem a necessidade de gerenciar credenciais de segurança para a aplicação. O desenvolvedor precisa aplicar o princípio do menor privilégio.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Criar um usuário IAM. Criar chaves de acesso e chaves secretas para o usuário. Associar o usuário a uma política IAM que permita permissões s3:*.",
      "Associar a instância EC2 a uma função IAM que tenha uma política IAM que permita permissões s3:ListBucket e s3:*Object para buckets S3 específicos.",
      "Associar a instância EC2 a uma função IAM que tenha uma política gerenciada pela AWS AmazonS3FullAccess.",
      "Criar uma política de bucket no bucket S3 que permita permissões s3:ListBucket e s3:*Object para a instância EC2."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. Associar uma função IAM com permissões específicas (s3:ListBucket, s3:*Object) para buckets definidos segue o menor privilégio e elimina a gestão de credenciais. A opção A usa chaves fixas, menos seguras. A opção C concede acesso total, violando o menor privilégio. A opção D não é prática, pois políticas de bucket não usam instâncias diretamente."
  },
  {
    id: 48,
    text: `Um desenvolvedor está criando uma aplicação que será implantada em dispositivos IoT. A aplicação enviará dados para uma API RESTful implantada como uma função AWS Lambda. A aplicação atribuirá a cada solicitação de API um identificador único. O volume de solicitações de API da aplicação pode aumentar aleatoriamente a qualquer momento do dia.
Durante períodos de limitação de solicitações, a aplicação pode precisar repetir solicitações. A API deve ser capaz de lidar com solicitações duplicadas sem inconsistências ou perda de dados.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Criar uma instância de banco de dados Amazon RDS para MySQL. Armazenar o identificador único para cada solicitação em uma tabela de banco de dados. Modificar a função Lambda para verificar a tabela pelo identificador antes de processar a solicitação.",
      "Criar uma tabela do Amazon DynamoDB. Armazenar o identificador único para cada solicitação na tabela. Modificar a função Lambda para verificar a tabela pelo identificador antes de processar a solicitação.",
      "Criar uma tabela do Amazon DynamoDB. Armazenar o identificador único para cada solicitação na tabela. Modificar a função Lambda para retornar uma resposta de erro do cliente quando a função receber uma solicitação duplicada.",
      "Criar uma instância do Amazon ElastiCache para Memcached. Armazenar o identificador único para cada solicitação no cache. Modificar a função Lambda para verificar o cache pelo identificador antes de processar a solicitação."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. O DynamoDB é escalável e rápido para verificar identificadores únicos, prevenindo duplicatas sem erros. A opção A (RDS) é menos escalável. A opção C retorna erros, não lida com duplicatas. A opção D (Memcached) não é persistente."
  },
  {
    id: 49,
    text: `Um desenvolvedor está escrevendo uma aplicação que recuperará dados sensíveis de um sistema de terceiros. A aplicação formatará os dados em um arquivo PDF. O arquivo PDF pode ter mais de 1 MB. A aplicação criptografará os dados em disco usando o AWS Key Management Service (AWS KMS). A aplicação descriptografará o arquivo quando um usuário solicitar seu download. As partes de recuperação e formatação da aplicação estão completas.
O desenvolvedor precisa usar a API GenerateDataKey para criptografar o arquivo PDF para que o arquivo PDF possa ser descriptografado posteriormente. O desenvolvedor precisa usar uma chave gerenciada pelo cliente simétrica do AWS KMS para criptografia.
Quais soluções atenderão a esses requisitos?`,
    options: [
      "Gravar a chave criptografada da API GenerateDataKey em disco para uso posterior. Usar a chave em texto simples da API GenerateDataKey e um algoritmo de criptografia simétrica para criptografar o arquivo.",
      "Gravar a chave em texto simples da API GenerateDataKey em disco para uso posterior. Usar a chave criptografada da API GenerateDataKey e um algoritmo de criptografia simétrica para criptografar o arquivo.",
      "Gravar a chave criptografada da API GenerateDataKey em disco para uso posterior. Usar a chave em texto simples da API GenerateDataKey para criptografar o arquivo usando a API KMS Encrypt.",
      "Gravar a chave em texto simples da API GenerateDataKey em disco para uso posterior. Usar a chave criptografada da API GenerateDataKey para criptografar o arquivo usando a API KMS Encrypt."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. A API GenerateDataKey fornece uma chave em texto simples para criptografia simétrica e uma chave criptografada para armazenamento. A opção B armazena a chave em texto simples, insegura. As opções C e D usam a API KMS Encrypt incorretamente para arquivos grandes."
  },
  {
    id: 50,
    text: `Uma empresa executa uma aplicação em instâncias do Amazon EC2. As instâncias EC2 abrem conexões com um banco de dados Amazon RDS para SQL Server. Um desenvolvedor precisa armazenar e acessar as credenciais e deseja rotacionar automaticamente as credenciais. O desenvolvedor não quer armazenar as credenciais do banco de dados no código.
Qual solução atenderá a esses requisitos da maneira MAIS segura?`,
    options: [
      "Criar uma função IAM que tenha permissões para acessar o banco de dados. Anexar a função IAM às instâncias EC2.",
      "Armazenar as credenciais como segredos no AWS Secrets Manager. Criar uma função AWS Lambda para atualizar os segredos e o banco de dados. Recuperar as credenciais do Secrets Manager conforme necessário.",
      "Armazenar as credenciais em um arquivo de texto criptografado em um bucket do Amazon S3. Configurar o modelo de lançamento da instância EC2 para baixar as credenciais do Amazon S3 conforme a instância é iniciada. Criar uma função AWS Lambda para atualizar os segredos e o banco de dados.",
      "Armazenar as credenciais em uma tabela do Amazon DynamoDB. Configurar uma regra de eventos do Amazon CloudWatch para invocar uma função AWS Lambda para atualizar periodicamente os segredos e o banco de dados."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a mais segura. O Secrets Manager suporta rotação automática e armazenamento seguro de credenciais. A opção A não armazena nem rotaciona credenciais. A opção C é menos segura devido ao armazenamento em S3. A opção D é complexa e não suporta rotação nativa."
  },
  {
    id: 51,
    text: `Uma empresa deseja testar sua aplicação web com mais frequência. A empresa implanta a aplicação usando uma pilha separada do AWS CloudFormation para cada ambiente. A empresa implanta o mesmo modelo do CloudFormation em cada pilha conforme a aplicação progride pelo ciclo de vida de desenvolvimento.
Um desenvolvedor precisa incluir notificações para a equipe de garantia de qualidade (QA). O desenvolvedor deseja que as notificações ocorram para novas implantações no ambiente de pré-produção final.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Criar um tópico do Amazon Simple Notification Service (Amazon SNS). Inscrever a equipe de QA no tópico SNS. Atualizar as opções da pilha do CloudFormation para apontar para o tópico SNS no ambiente de pré-produção.",
      "Criar uma função AWS Lambda que notifique a equipe de QA. Criar uma regra do Amazon EventBridge para invocar a função Lambda no barramento de eventos padrão. Filtrar os eventos no serviço CloudFormation e no ARN da pilha do CloudFormation.",
      "Criar um alarme do Amazon CloudWatch que monitore as métricas do CloudFormation. Filtrar as métricas pelo nome da pilha e pelo status da pilha. Configurar o alarme do CloudWatch para notificar a equipe de QA.",
      "Criar uma função AWS Lambda que notifique a equipe de QA. Configurar o mapeamento de fonte de evento para receber eventos do CloudFormation. Especificar os valores de filtragem para limitar as invocações à pilha do CloudFormation desejada."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a correta. Uma regra do EventBridge pode filtrar eventos do CloudFormation para a pilha de pré-produção, acionando uma notificação Lambda. A opção A não é nativa do CloudFormation. A opção C não monitora eventos de implantação. A opção D usa mapeamento incorreto para CloudFormation."
  },
  {
    id: 52,
    text: `Um desenvolvedor gerencia três contas AWS. Cada conta contém uma instância de banco de dados Amazon RDS em uma sub-rede privada. O desenvolvedor precisa definir usuários em cada banco de dados de maneira consistente. O desenvolvedor deve garantir que os mesmos usuários sejam criados e atualizados posteriormente em todas as três contas.
Qual solução atenderá a esses requisitos com a MAIOR eficiência operacional?`,
    options: [
      "Criar um modelo do AWS CloudFormation. Declarar os usuários no modelo. Anexar os usuários ao banco de dados. Implantar o modelo em cada conta.",
      "Criar um modelo do AWS CloudFormation que contenha um recurso personalizado para criar os usuários no banco de dados. Implantar o modelo em cada conta.",
      "Escrever um script que crie os usuários. Implantar uma instância do Amazon EC2 em cada conta para executar o script nos bancos de dados. Executar o script em cada conta.",
      "Implementar uma função AWS Lambda que crie os usuários no banco de dados. Fornecer à função os detalhes de todas as três contas."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a mais eficiente. Um modelo CloudFormation declara usuários de forma consistente e implanta em todas as contas com automação. A opção B adiciona complexidade com recursos personalizados. A opção C é manual e propensa a erros. A opção D exige gerenciamento complexo de credenciais."
  },
  {
    id: 53,
    text: `Uma empresa está construindo uma nova aplicação que é executada na AWS e usa o Amazon API Gateway para expor APIs. Equipes de desenvolvedores estão trabalhando em componentes separados da aplicação em paralelo. A empresa deseja publicar uma API sem um backend integrado para que as equipes que dependem do backend da aplicação possam continuar o trabalho de desenvolvimento antes que o desenvolvimento do backend da API esteja concluído.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Criar recursos do API Gateway e definir o tipo de integração como MOCK. Configurar a solicitação de integração do método e a resposta de integração para associar uma resposta com um código de status HTTP. Criar um estágio do API Gateway e implantar a API.",
      "Criar uma função AWS Lambda que retorna respostas simuladas e vários códigos de status HTTP. Criar recursos do API Gateway e definir o tipo de integração como AWS_PROXY. Implantar o API Gateway.",
      "Criar uma aplicação EC2 que retorna respostas HTTP simuladas. Criar recursos do API Gateway.",
      "Criar recursos do API Gateway com o tipo de integração definido como HTTP_PROXY."
    ],
    correctAnswer: 0,
    explanation: "A opção é a correta. Integrações MOCK no API Gateway retornam respostas simuladas, permitindo desenvolvimento do frontend sem backend. A opção B exige criar funções Lambda, adicionando trabalho. A opção C requer instâncias EC2, aumentando a complexidade. A opção D depende de um backend externo, que não está pronto."
  },
  {
    id: 54,
    text: `Uma aplicação que funciona na AWS recebe mensagens de uma fila do Amazon Simple Queue Service (SQS) e processa as mensagens em lotes. A aplicação envia os dados para outra fila SQS para ser consumida por outra aplicação legada. O sistema legado pode levar até 5 minutos para processar alguns dados de transação.
Um desenvolvedor deseja garantir que não haja atualizações fora de ordem no sistema legado. O desenvolvedor não pode alterar o comportamento do sistema legado.
Qual solução atenderá esses requisitos?`,
    options: [
      "Usar uma fila FIFO SQS. Configurar o valor do tempo limite de visibilidade.",
      "Usar uma fila padrão do SQS com um tipo de dados SendMessageBatchRequestEntry. Configurar os valores DelaySeconds.",
      "Usar uma fila padrão do padrão SQS com um tipo de dados SendMessageBatchRequestEntry. Configurar o valor do tempo limite de visibilidade.",
      "Usar uma fila FIFO SQS. Configurar o valor DelaySeconds."
    ],
    correctAnswer: 0,
    explanation: "A opção é a correta. Uma fila FIFO SQS garante a ordem de processamento, e o tempo limite de visibilidade evita que mensagens sejam reprocessadas prematuramente durante os 5 minutos. A opção B não garante ordem. A opção C não resolve a ordem. A opção D (DelaySeconds) não garante ordem em FIFO."
  },
  {
    id: 55,
    text: `Uma empresa está construindo uma aplicação intensiva que será executada em uma frota de instâncias do Amazon EC2. A aplicação usa volumes do Amazon Elastic Block Store (Amazon EBS) anexados para armazenar dados. Os volumes do Amazon EBS serão criados no momento da implantação inicial. A aplicação processará informações sensíveis. Todos os dados devem ser criptografados. A solução não deve impactar o desempenho da aplicação.
Qual solução atenderá a esses requisitos?
`,
    options: [
      "Configurar a frota de instâncias EC2 para usar instâncias de volumes EBS criptografados para armazenar dados.",
      "Configurar a aplicação para gravar todos os dados em um bucket do Amazon S3 criptografado.",
      "Configurar um algoritmo de criptografia personalizado para uma aplicação que criptografará e descriptografará todos os dados.",
      "Configurar uma Amazon Machine Image (AMI) que tenha um volume root criptografado e armazene os dados em discos efêmeros."
    ],
    correctAnswer: 0,
    explanation: "A opção Explicação: a correta é a correta. Explicação: Volumes EBS criptografados garantem segurança sem impacto no desempenho, nativamente suportados pela AWS. A opção B (S3) não é adequada para dados dinâmicos de aplicações EC2. A opção C adiciona sobrecarga. A opção D usa discos efêmeros, que não são persistentes."
  },
  {
    id: 56,
    text: `Um desenvolvedor está atualizando a versão de produção de uma função AWS Lambda para corrigir um defeito. O desenvolvedor testou o código atualizado em um ambiente de teste. O desenvolvedor deseja implantar gradualmente as atualizações para um pequeno subconjunto de usuários de produção antes de implantar as mudanças para todos os usuários. Apenas 10% dos usuários devem ser inicialmente expostos ao novo código em produção.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Atualizar o código Lambda e criar uma nova versão da função Lambda. Criar um gatilho de função Lambda. Configurar os pesos de tráfego no gatilho entre as duas versões da função Lambda.",
      "Criar uma nova função Lambda com o código atualizado. Criar um alias Lambda para a função Lambda de produção. Configurar o alias Lambda para enviar 50% do tráfego para a função Lambda de produção e 10% do tráfego para a função de teste.",
      "Atualizar o código Lambda e criar uma nova versão da função Lambda. Criar uma integração proxy Lambda.",
      "Atualizar o código Lambda e criar uma nova versão da função Lambda. Criar um alias de função Lambda. Configurar os pesos de tráfego no alias Lambda entre as duas versões da função Lambda."
      ],
      correctAnswer: 3,
      explanation: "A opção D é a correta. Um alias Lambda com pesos de tráfego (90% produção, 10% nova versão) permite uma implantação gradual. A opção A (gatilho) não suporta divisão de peso. A opção B cria uma nova função, não necessária. A opção C (proxy) não gerencia versões."
    },
    {
    id: 57,
    text: `Um desenvolvedor está criando uma função AWS Lambda que consome mensagens de uma enquete padrão do Amazon Simple Queue Service (SQS). O desenvolvedor nota que a função Lambda processa algumas mensagens várias vezes.
    Como o desenvolvedor deve resolver esse problema da maneira MAIS econômica?`,
    options: [
      "Alterar a fila padrão do Amazon SQS para uma fila FIFO do Amazon SQS usando o ID de deduplicação de mensagens do SQS.",
      "Configurar uma fila de letras mortas (DLQ).",
      "Definir o limite de concorrência máxima da função AWS Lambda para 1.",
      "Alterar o processamento de mensagens para usar o Amazon Kinesis Data Streams em vez do Amazon SQS."
    ],
    correctAnswer: 1,
    explanation: "A opção B é a mais econômica. Configurar uma DLQ move mensagens com erro após tentativas, permitindo análise sem mudar a arquitetura. A opção A (FIFO) é cara e não resolve reprocessamento. A opção C limita a escalabilidade. A opção D requer refatoração significativa."
  },
  {
    id: 58,
    text: `Um desenvolvedor está otimizando uma função AWS Lambda e quer testar as mudanças em produção em uma pequena porcentagem de todo o tráfego. A função Lambda atende a solicitações para uma API REST no Amazon API Gateway. O desenvolvedor precisa implantar suas mudanças e realizar um teste em produção sem alterar a URL do API Gateway Gateway.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Definir uma versão para a função Lambda de produção atualmente implantada. Atualizar o endpoint da API Gateway para referenciar a nova versão da função Lambda. Fazer upload e publicar o código da função Lambda otimizado. Definir uma versão canary no estágio de produção do API Gateway.",
      "Definir uma versão para a função Lambda de produção atualmente implantada. Atualizar o endpoint da API Gateway para referenciar a nova versão da função Lambda. Fazer upload e publicar o código da função Lambda otimizado.",
      "Definir um alias na versão $LATEST$ da função Lambda. Atualizar o endpoint da API Gateway para referenciar o novo alias da função Lambda. Definir uma versão canary no estágio de produção do API Gateway.",
      "Definir uma versão para a função Lambda de produção atualmente implantada. Atualizar o endpoint da API Gateway."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a correta. Um alias Lambda com uma versão canary no API Gateway permite testar a nova versão em produção com uma porcentagem de tráfego, mantendo a URL. A opção Um e outras opções manipulam endpoints incorretamente ou não configuram canary."
  },
  {
    id: 59,
    text: `Um desenvolvedor deseja expandir uma aplicação para executar em múltiplas regiões AWS. O desenvolvedor deseja copiar as Imagens de Máquina Amazon (AMIs) com as últimas mudanças e criar uma nova pilha de aplicativos na região de destino. De acordo com os requisitos da empresa, todas as AMIs devem ser criptografadas em todas as regiões. No entanto, nem todas as AMIs que a empresa usa são criptografadas.
Como o desenvolvedor pode expandir a aplicação para executar na região de destino, atendendo ao requisito de criptografia?`,
    options: [
      "Criar novas AMIs e especificar parâmetros de criptografia. Copiar as AMIs criptografadas para a região de destino. Excluir as AMIs não criptografadas.",
      "Usar o AWS Key Management Service (AWS KMS) para habilitar a criptografia nas AMIs não criptografadas.",
      "Usar o AWS Certificate Management (ACM) para habilitar a criptografia nas AMIs não criptografadas.",
      "Copiar as AMIs não criptografadas para a região de destino. Habilitar a criptografia por padrão na região de destino."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. Criar novas AMIs criptografadas e copiá-las para a região atende ao requisito. A opção B e C são inválidas, pois KMS e ACM não criptografam AMIs diretamente. A opção D não garante que AMIs existentes sejam criptografadas."
  },
  {
    id: 60,
    text: `Uma empresa nota que as credenciais que usa para se conectar a um fornecedor de software como serviço (SaaS) externo estão armazenadas em um arquivo de configuração como texto simples.
O desenvolvedor precisa proteger as credenciais da API e impor a rotação automática de credenciais trimestralmente.
Qual solução atenderá a esses requisitos da maneira MAIS segura?`,
    options: [
      "Usar o AWS Key Management Service (AWS KMS) para criptografar o arquivo de configuração.",
      "Recuperar credenciais temporárias do AWS Security Token Service (AWS STS) a cada 15 minutos.",
      "Armazenar as credenciais no AWS Secrets Manager e habilitar a rotação.",
      "Armazenar as credenciais no AWS System Manager Parameter Store."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a mais segura. O Secrets Manager suporta rotação automática trimestral e armazenamento seguro. A opção A não oferece rotação automática. A opção B (STS) não é adequada para SaaS. A opção D não suporta rotação automática nativa."
  },
  {
    id: 61,
    text: `Uma empresa tem uma aplicação que está hospedada em instâncias do Amazon EC2. A aplicação armazena objetos em um bucket do Amazon S3 e permite que os usuários baixem objetos do bucket do S3. Um desenvolvedor ativa o S3 Block Public Access para o bucket do S3. Após essa mudança, os usuários relatam erros ao tentar baixar objetos. O desenvolvedor precisa implementar uma solução para que apenas usuários que estejam logados na aplicação possam acessar objetos no bucket do bucket S3.
Qual combinação de etapas atenderá a esses requisitos da maneira MAIS segura? (Escolha duas.)`,
    options: [
      "Criar um perfil de instância do IAM e uma função com uma política apropriada. Associar a função às instâncias EC2.",
      "Criar um usuário IAM com uma política apropriada. Armazenar o ID da chave de acesso e a chave de acesso nas instâncias EC2.",
      "Modificar a aplicação para usar a chamada de API GenerateDataKey do S3.",
      "Modificar a aplicação para usar a chamada de API GetObject do S3 e retornar o manipulador do objeto ao usuário.",
      "Modificar a aplicação para delegar solicitações ao bucket do S3."
    ],
    correctAnswer: [0, 2],
    explanation: "As opções A e C são corretas. Uma função IAM associada às instâncias EC2 (A)) permite acesso seguro sem credenciais fixas. URLs pré-assinadas (C) permitem que usuários autenticados acessem objetos diretamente, respeitando o bloqueio público. A opção expõe credenciais (B). A opção D não lida com autenticação. A opção E é vaga."
  },
  {
    id: 62,
    text: `Uma fila do Amazon Simple Queue Service (Amazon SQS) serve como fonte de eventos para uma função AWS Lambda. Em cada item da fila corresponde a um arquivo de vídeo que a função Lambda deve conter para uma resolução menor. A função Lambda está esgotando o tempo em arquivos de vídeo mais longos, mas o tempo limite da função Lambda já está configurado para seu valor máximo.
O que O que um deve fazer para evitar os tempos limite sem alterações adicionais de código?`,
    options: [
      "Aumentar a configuração de memória da função Lambda.",
      "Aumentar o tempo limite de visibilidade na fila SQS.",
      "Aumentar o tamanho da instância do host que executa a função Lambda.",
      "Usar multi-threading para a conversão."
    ],
    correctAnswer: 0,
    explanation: "A opção é a correta. Explicação: Aumentar a memória da Lambda aumenta a CPU alocada, reduzindo o tempo de processamento sem alterar o código. A opção B evita reprocessamento, não tempo limite. A opção C não é aplicável. Explicação: A opção D exige alterações no código."
  },
  {
    id: 63,
    text: `Uma empresa está se preparando para migrar uma aplicação para o primeiro ambiente AWS da empresa. Antes dessa migração, um desenvolvedor está criando uma aplicação de prova de conceito para validar um modelo para construção e implantação de aplicações baseadas em contêineres na AWS.
Qual combinação de etapas deve o desenvolvedor realizar para implantar a aplicação de prova de conceito baseada em contêiner com o MENOR esforço operacional? (Escolha duas.)`,
options: [
      "Empacotar a aplicação em um arquivo .zip usando uma ferramenta de linha de comando. Fazer upload do pacote para o Amazon S3.",
      "Empacotar a aplicação em uma imagem de contêiner usando o Docker CLI. Fazer upload da imagem para o Amazon Elastic Container Registry (Amazon ECR).",
      "Implantar a aplicação em uma instância do Amazon EC2 usando o AWS CodeDeploy.",
      "Implantar a aplicação no Amazon Elastic Kubernetes Service (Amazon EKS) no AWS Fargate.",
      "Implantar a aplicação no Amazon Elastic Container Service (Amazon ECS) no AWS Fargate."
    ],
    correctAnswer: [1, 4],
    explanation: "As opções B e E são corretas. Empacotar a aplicação em uma imagem Docker e fazer upload para o ECR (B) é padrão para contêineres. Implantar no ECS Fargate (E) é sem servidor, minimizando esforço operacional. A opção A não é adequada para contêineres. A opção C adiciona complexidade. A opção D (EKS) é mais complexa que ECS."
  },
  {
    id: 64,
    text: `Um desenvolvedor suporta uma aplicação que acessa dados em uma tabela do Amazon DynamoDB. Um dos atributos do item é expirationDate no formato de data e hora. A aplicação usa esse atributo para encontrar itens, arquivá-los e removê-los da tabela com base no valor do timestamp.
A aplicação será desativada em breve, e o desenvolvedor deve encontrar uma outra maneira de implementar essa funcionalidade. O desenvolvedor precisa de uma solução que requer a menor quantidade de código a ser escrita.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Habilitar o TTL no atributo expirationDate na tabela. Criar um fluxo do DynamoDB. Criar uma função AWS Lambda para processar os itens excluídos. Criar um gatilho do DynamoDB para a função Lambda.",
      "Criar duas funções AWS Lambda: uma para excluir os itens e outra para processar os itens. Criar um fluxo do DynamoDB. Usar a operação DeleteItem API para excluir os itens com base no atributo expirationDate.",
      "Criar duas funções AWS Lambda: uma para excluir os itens e outra para processar os itens. Criar uma regra agendada do Amazon EventBridge para chamar as funções Lambda.",
      "Habilitar o TTL no atributo expirationDate na tabela. Especificar uma fila de entrega de mensagens não entregues (DLQ) do Amazon Simple Queue Service (SQS) como destino para excluir os itens."
    ],
    correctAnswer: 0,
    explanation: "A opção A é a correta. Habilitar o TTL no DynamoDB exclui automaticamente itens expirados, e um fluxo com Lambda processa os itens com mínimo código. A opção B exige mais código para exclusão manual. A opção C usa EventBridge, mais complexo. A opção D não processa itens excluídos adequadamente."
  },
  {
    id: 65,
    text: `Um desenvolvedor precisa implementar uma biblioteca personalizada de aprendizado de máquina (ML) em uma aplicação. O tamanho da biblioteca é de 15 GB. O tamanho da biblioteca está aumentando. A aplicação usa funções AWS Lambda. Todas as funções Lambda precisam ter acesso à biblioteca.
Qual solução atenderá a esses requisitos?`,
    options: [
      "Salvar a biblioteca em camadas Lambda. Anexar as camadas a todas as funções Lambda.",
      "Salvar a biblioteca no Amazon S3. Baixar a biblioteca do Amazon S3 dentro da função Lambda.",
      "Salvar a biblioteca como uma imagem de contêiner Lambda. Reimplantar as funções Lambda com a nova imagem.",
      "Salvar a biblioteca em um sistema de arquivos do Amazon Elastic File System (Amazon EFS). Montar o sistema EFS em todas as funções Lambda."
    ],
    correctAnswer: 2,
    explanation: "A opção C é a correta. Uma imagem de contêiner Lambda suporta até 10 GB comprimidos, mas bibliotecas grandes como 15 GB podem ser otimizadas. É mais simples que EFS. A opção A é limitada a 250 MB. A opção B é lenta para grandes downloads. A opção D (EFS) é viável, mas mais complexa."
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