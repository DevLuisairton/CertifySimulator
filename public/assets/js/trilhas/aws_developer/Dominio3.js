// Dados dos serviços - Domínio 2: Security (26%) - Developer Associate
const awsServices = [
  {
    id: 1,
    name: "AWS AppConfig",
    category: "configManagement",
    categoryLabel: "Gerenciamento de Configuração",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*FLMAj2H7o_54TT2qg1gncQ.png", // Placeholder
    description: "Serviço para gerenciar configurações de aplicações de forma centralizada e dinâmica. Permite atualizar configurações sem a necessidade de reimplantar a aplicação, facilitando a adaptação a diferentes ambientes ou requisitos e melhorando a agilidade operacional. Faz parte do AWS Systems Manager.",
    useCase: "Uma aplicação possui um recurso que só deve ser ativado para usuários beta. Usando o AppConfig, um 'feature flag' pode ser definido. Quando a equipe decide liberar o recurso para todos, a configuração no AppConfig é atualizada, e a aplicação reflete a mudança dinamicamente, sem precisar de um novo deploy do código."
  },
  {
    id: 2,
    name: "Empacotamento (Packaging) de Lambda e Contêineres",
    category: "artifactManagement",
    categoryLabel: "Gerenciamento de Artefatos",
    image: "https://miro.medium.com/max/1024/1*9V1XjH3Z4n3Y8X8Y8Z_q_w.png", // Placeholder
    description: "Processo de organizar o código da aplicação e suas dependências de forma a tornar o deploy simples, rápido e consistente. Para AWS Lambda, pode envolver a criação de pacotes ZIP com o código e dependências, ou o uso de Layers para bibliotecas compartilhadas. Para contêineres, o código é empacotado em uma imagem Docker, que é então enviada para um repositório como o Amazon ECR (Elastic Container Registry).",
    useCase: "Uma função Lambda em Python usa várias bibliotecas externas. Para o deploy, o código da função e um diretório com as bibliotecas instaladas são empacotados em um arquivo ZIP. Esse ZIP é então carregado para o Lambda. Alternativamente, as bibliotecas comuns poderiam ser colocadas em uma Lambda Layer para serem compartilhadas entre múltiplas funções."
  },
  {
    id: 3,
    name: "Repositórios de Código e Versionamento (Git)",
    category: "sourceControl",
    categoryLabel: "Controle de Versão",
    image: "https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png", // Placeholder
    description: "Utilização de sistemas de controle de versão, como o Git, para gerenciar o código-fonte da aplicação. Permite rastrear alterações, colaborar em equipe, manter um histórico detalhado das modificações e reverter para versões anteriores em caso de problemas. A integração com pipelines de CI/CD é fundamental para automatizar builds e deploys a partir de commits no repositório.",
    useCase: "Uma equipe de desenvolvedores trabalha em uma aplicação web. Eles usam um repositório Git (hospedado no AWS CodeCommit, GitHub ou similar) para versionar o código. Cada nova funcionalidade é desenvolvida em um 'branch' separado. Após a revisão e testes, o branch é mesclado ao branch principal ('main' ou 'master'), o que pode automaticamente disparar um pipeline de CI/CD."
  },
  {
    id: 4,
    name: "AWS CodePipeline",
    category: "ciCd",
    categoryLabel: "CI/CD",
    image: "https://d1.awsstatic.com/Product-Page-Diagram_AWS-CodePipeline.720289ce6810872196b852046018917c6e6e859f.png", // Placeholder
    description: "Serviço de entrega contínua totalmente gerenciado que ajuda a automatizar seus pipelines de lançamento de software para atualizações rápidas e confiáveis de aplicações e infraestrutura. Orquestra as diferentes fases do processo de release, como compilação de código, execução de testes e implantação em ambientes de desenvolvimento, teste e produção.",
    useCase: "Um pipeline é configurado no AWS CodePipeline. Quando um desenvolvedor envia código para o repositório (ex: AWS CodeCommit), o CodePipeline detecta a mudança, aciona o AWS CodeBuild para compilar o código e executar testes unitários. Se bem-sucedido, ele aciona o AWS CodeDeploy para implantar a nova versão em um ambiente de staging e, após aprovação manual, em produção."
  },
  {
    id: 5,
    name: "AWS CodeBuild",
    category: "ciCd",
    categoryLabel: "CI/CD",
    image: "https://d1.awsstatic.com/product-marketing/CodeBuild/Product-Page-Diagram_AWS-CodeBuild.e6804ee7a2a775a54d9944a7109587116a952160.png", // Placeholder
    description: "Serviço de integração contínua totalmente gerenciado que compila código-fonte, executa testes e produz pacotes de software prontos para implantação. Com o CodeBuild, você não precisa provisionar, gerenciar e escalar seus próprios servidores de compilação. Ele escala continuamente e processa múltiplas compilações em paralelo.",
    useCase: "Como parte de um pipeline no CodePipeline, o AWS CodeBuild é usado para pegar o código-fonte de um repositório, instalar dependências (ex: `npm install` para Node.js), executar testes unitários e de linting, e então empacotar a aplicação (ex: criar um arquivo ZIP para Lambda ou uma imagem Docker)."
  },
  {
    id: 6,
    name: "AWS CodeDeploy",
    category: "ciCd",
    categoryLabel: "CI/CD",
    image: "https://d1.awsstatic.com/Product-Page-Diagram_AWS-CodeDeploy.a47576973928dd0298890cb6c67a79869b73016a.png", // Placeholder
    description: "Serviço que automatiza implantações de código em diversas instâncias de computação, como Amazon EC2, AWS Fargate, AWS Lambda e servidores on-premises. Torna mais fácil lançar rapidamente novas funcionalidades, ajuda a evitar downtime durante a implantação da aplicação e lida com a complexidade de atualizar aplicações. Suporta diferentes estratégias de deployment como in-place, blue/green e canary.",
    useCase: "Após o AWS CodeBuild criar um artefato de uma aplicação web, o AWS CodeDeploy é usado para implantar essa nova versão em um grupo de instâncias EC2. Ele pode ser configurado para uma estratégia de 'rolling update', atualizando um subconjunto de instâncias por vez para minimizar o impacto, ou uma estratégia 'blue/green' para um switch de tráfego rápido."
  },
  {
    id: 7,
    name: "AWS CloudFormation",
    category: "iac",
    categoryLabel: "Infraestrutura como Código (IaC)",
    image: "https://d1.awsstatic.com/Product-Page-Diagram_AWS-CloudFormation_Automate-Provisioning.33648769c0d18509a3f797833676363ca98057f0.png", // Placeholder
    description: "Serviço que permite modelar e provisionar recursos da AWS e de terceiros de forma segura e repetível. Você descreve sua infraestrutura desejada em um template (YAML ou JSON), e o CloudFormation cuida do provisionamento e configuração desses recursos como uma 'stack'. Facilita o versionamento da infraestrutura, a replicação de ambientes e o gerenciamento de dependências entre recursos.",
    useCase: "Para configurar um ambiente de aplicação completo (incluindo VPC, sub-redes, instâncias EC2, banco de dados RDS e load balancer), um template do AWS CloudFormation é criado. Ao executar este template, o CloudFormation provisiona todos esses recursos de forma automatizada e na ordem correta. Se uma atualização for necessária, o template é modificado e o CloudFormation atualiza a stack."
  },
  {
    id: 8,
    name: "AWS CDK (Cloud Development Kit)",
    category: "iac",
    categoryLabel: "Infraestrutura como Código (IaC)",
    image: "https://miro.medium.com/max/900/1*Q2uX3z4Yj8Q4g2g5Yq5vIw.png", // Placeholder
    description: "Framework de desenvolvimento de software de código aberto para definir sua infraestrutura de nuvem em código usando linguagens de programação familiares (como TypeScript, Python, Java, C#). Permite criar e provisionar recursos AWS usando a lógica e as abstrações da sua linguagem preferida, que são então sintetizadas em templates AWS CloudFormation para implantação.",
    useCase: "Um desenvolvedor Python prefere definir sua infraestrutura AWS usando Python. Com o AWS CDK, ele pode escrever código Python para descrever uma VPC, funções Lambda e tabelas DynamoDB. O CDK transforma esse código em um template CloudFormation, que é então usado para provisionar os recursos na AWS."
  },
  {
    id: 9,
    name: "Configuração de Stages (Dev, Test, Prod) em Pipelines",
    category: "testingDeployment",
    categoryLabel: "Testes e Deployment",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*qXMMR6wV50XG0jXtXW0YfQ.png", // Placeholder
    description: "Prática de definir ambientes isolados (stages) para diferentes fases do ciclo de vida do software, como Desenvolvimento (Dev), Teste (Test/Staging) e Produção (Prod). Cada stage pode ter suas próprias configurações, endpoints e recursos. Isso permite validar alterações e novas funcionalidades em ambientes controlados antes de impactar os usuários finais, minimizando riscos. Ferramentas como API Gateway e Lambda suportam stages e aliases para gerenciar diferentes versões.",
    useCase: "Um pipeline de CI/CD para uma API usa diferentes stages. Após o commit, o código é implantado no stage 'Dev' do API Gateway, que aponta para versões de desenvolvimento de funções Lambda. Após testes automatizados, ele é promovido para o stage 'Test' para testes de integração mais amplos. Finalmente, após aprovação, é implantado no stage 'Prod', que usa as versões estáveis e testadas das Lambdas."
  },
  {
    id: 10,
    name: "Canary Deployment",
    category: "deploymentStrategies",
    categoryLabel: "Estratégias de Deployment",
    image: "https://martinfowler.com/bliki/images/canaryRelease/sketch.png", // Placeholder
    description: "Técnica de implantação onde a nova versão de uma aplicação é liberada gradualmente para um pequeno subconjunto de usuários (o 'canário') antes de ser disponibilizada para todos. Permite monitorar o comportamento da nova versão em produção com tráfego real, mas limitado, para detectar problemas e avaliar o impacto. Se tudo estiver bem, o tráfego para a nova versão é aumentado progressivamente.",
    useCase: "Uma nova versão de uma funcionalidade de um site de e-commerce é lançada usando Canary Deployment. Inicialmente, apenas 5% do tráfego de usuários é direcionado para a nova versão. A equipe monitora métricas de erro, latência e conversão. Se os resultados forem positivos, o percentual é aumentado para 20%, 50%, e finalmente 100%."
  },
  {
    id: 11,
    name: "Blue/Green Deployment",
    category: "deploymentStrategies",
    categoryLabel: "Estratégias de Deployment",
    image: "https://miro.medium.com/max/2000/1*S6x2vR8mX2VCIh23DAx6ZQ.png", // Placeholder
    description: "Estratégia de implantação que minimiza o downtime e o risco ao manter dois ambientes de produção idênticos: 'Blue' (versão atual estável) e 'Green' (nova versão). O tráfego é direcionado para o ambiente Blue. A nova versão é implantada e testada no ambiente Green. Quando pronta, o tráfego é rapidamente comutado do Blue para o Green. Se problemas surgirem no Green, o tráfego pode ser revertido para o Blue quase instantaneamente.",
    useCase: "Uma aplicação crítica precisa ser atualizada. Um novo ambiente 'Green' é criado com a nova versão da aplicação, idêntico ao ambiente 'Blue' atual. Após testes extensivos no ambiente Green, um balanceador de carga ou DNS é usado para redirecionar todo o tráfego de usuários do ambiente Blue para o Green. O ambiente Blue é mantido por um tempo para rollback rápido, se necessário."
  },
  {
    id: 12,
    name: "Rolling Deployment (Atualização Contínua)",
    category: "deploymentStrategies",
    categoryLabel: "Estratégias de Deployment",
    image: "https://www.researchgate.net/publication/339509432/figure/fig4/AS:862689631850496@1582693054842/Rolling-Update-Deployment-Strategy-The-figure-shows-an-example-of-how-the-application.jpg", // Placeholder
    description: "Técnica onde a nova versão de uma aplicação é implantada gradualmente, atualizando um subconjunto de instâncias ou servidores por vez, em vez de todos simultaneamente. As instâncias antigas são substituídas pelas novas em 'ondas'. Isso permite que a aplicação permaneça disponível durante o processo de atualização, embora possa haver um período em que ambas as versões (antiga e nova) estejam atendendo ao tráfego.",
    useCase: "Uma aplicação rodando em um cluster de 10 servidores precisa ser atualizada. Usando Rolling Deployment, a nova versão é implantada em 2 servidores por vez. Enquanto esses 2 são atualizados, os outros 8 continuam rodando a versão antiga. Após a atualização bem-sucedida dos 2 primeiros, o processo continua para os próximos 2, e assim por diante, até que todos os 10 servidores estejam com a nova versão."
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