// Dados dos serviços
const awsServices = [
  {
    id: 1,
    name: "Amazon EC2",
    category: "compute",
    categoryLabel: "Computação",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/AWS_Simple_Icons_Compute_Amazon_EC2_Instances.svg",
    description: "O Amazon Elastic Compute Cloud (EC2) é um serviço web que fornece capacidade computacional segura e redimensionável na nuvem. É projetado para facilitar a computação em escala na nuvem para desenvolvedores.",
    useCase: "Uma empresa de e-commerce utiliza instâncias EC2 para hospedar seu site de vendas. Durante períodos de alta demanda, como Black Friday, a empresa aumenta automaticamente o número de instâncias para lidar com o tráfego adicional e depois reduz quando a demanda normaliza, pagando apenas pelos recursos utilizados."
  },
  {
    id: 2,
    name: "AWS Lambda",
    category: "serverless",
    categoryLabel: "Sem Servidor",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Amazon_Lambda_architecture_logo.svg",
    description: "O AWS Lambda é um serviço de computação sem servidor que executa código em resposta a eventos e gerencia automaticamente os recursos computacionais subjacentes, permitindo execução de código sem provisionar ou gerenciar servidores.",
    useCase: "Um aplicativo de processamento de imagens usa o Lambda para redimensionar automaticamente as fotos enviadas pelos usuários para um bucket S3. O código é executado apenas quando uma nova imagem é carregada, eliminando a necessidade de manter servidores em execução constantemente."
  },
  {
    id: 3,
    name: "Amazon ECS",
    category: "container",
    categoryLabel: "Contêineres",
    image: "https://d3g9o9u8re44ak.cloudfront.net/logo/5cd326ff-a018-4472-b384-15142bfe5d2c/4862aa6a-08fc-4290-b05e-3012c4e57a92.png",
    description: "O Amazon Elastic Container Service (ECS) é um serviço de orquestração de contêineres altamente escalável e de alto desempenho que suporta contêineres Docker e permite executar aplicações facilmente em um cluster gerenciado de instâncias EC2 ou no AWS Fargate.",
    useCase: "Uma empresa de tecnologia financeira utiliza o ECS para implantar sua aplicação baseada em microserviços, permitindo gerenciar, escalar e implantar dezenas de contêineres independentemente, resultando em atualizações mais rápidas e isolamento de falhas."
  },
  {
    id: 4,
    name: "AWS Elastic Beanstalk",
    category: "compute",
    categoryLabel: "Computação",
    image: "https://victorycto.com/wp-content/uploads/2021/04/aws-elastic-beanstalk.svg",
    description: "O AWS Elastic Beanstalk é um serviço fácil de usar para implantar e escalar aplicações web e serviços desenvolvidos em Java, .NET, PHP, Node.js, Python, Ruby, Go e Docker em servidores familiares como Apache, Nginx, Passenger e IIS.",
    useCase: "Uma startup de desenvolvimento web utiliza o Elastic Beanstalk para implantar sua aplicação em Python sem se preocupar com a infraestrutura subjacente. O Elastic Beanstalk provisiona automaticamente o ambiente, configura balanceadores de carga e gerencia o escalonamento, permitindo que a equipe foque no código."
  },
  {
    id: 5,
    name: "Amazon EKS",
    category: "container",
    categoryLabel: "Contêineres",
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*NZX1Yf5Jzms1sU9sJSNO_g.png",
    description: "O Amazon Elastic Kubernetes Service (EKS) é um serviço gerenciado que facilita a execução do Kubernetes na AWS sem precisar instalar e operar seu próprio plano de controle ou nós do Kubernetes.",
    useCase: "Uma empresa multinacional migrou sua plataforma de análise de dados para o EKS para padronizar a implantação de suas aplicações em diferentes regiões. Com o EKS, eles conseguem usar as mesmas ferramentas e processos Kubernetes em ambientes de desenvolvimento, teste e produção."
  },
  {
    id: 6,
    name: "AWS Fargate",
    category: "serverless",
    categoryLabel: "Sem Servidor",
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*BCgeXMygZAH_xXzKG8vvQQ.png",
    description: "O AWS Fargate é uma tecnologia que você pode usar com o Amazon ECS ou EKS para executar contêineres sem precisar gerenciar servidores ou clusters. Permite focar na criação de aplicações em vez de gerenciar infraestrutura.",
    useCase: "Uma empresa de mídia utiliza o Fargate para processar vídeos enviados pelos usuários sem se preocupar com o gerenciamento da infraestrutura subjacente. O Fargate escala automaticamente com base na demanda, permitindo processar picos de envios sem intervenção manual."
  },
  {
    id: 7,
    name: "Amazon Lightsail",
    category: "compute",
    categoryLabel: "Computação",
    image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fr16heemznaghfzyfmrwz.png",
    description: "O Amazon Lightsail oferece servidores virtuais privados (VPS) fáceis de usar, com tudo o que você precisa para implantar e gerenciar seu aplicativo, a um preço mensal baixo e previsível.",
    useCase: "Um blogger utiliza o Lightsail para hospedar seu site WordPress com um preço fixo mensal. A simplicidade do serviço permite que ele gerencie seu blog sem conhecimentos avançados de infraestrutura em nuvem, beneficiando-se de backups automáticos e alta disponibilidade."
  },
  {
    id: 8,
    name: "AWS Batch",
    category: "compute",
    categoryLabel: "Computação",
    image: "https://images.seeklogo.com/logo-png/43/1/aws-batch-logo-png_seeklogo-430932.png",
    description: "O AWS Batch permite que desenvolvedores, cientistas e engenheiros executem facilmente centenas de milhares de trabalhos de computação em lote na AWS, sem a necessidade de instalar e gerenciar software de computação em lote.",
    useCase: "Uma empresa farmacêutica utiliza o AWS Batch para processar grandes conjuntos de simulações de compostos químicos. O serviço gerencia dinamicamente a quantidade e o tipo de recursos computacionais, otimizando custos e reduzindo o tempo total de processamento."
  },
  {
    id: 9,
    name: "AWS Outposts",
    category: "edge",
    categoryLabel: "Edge Computing",
    image: "https://cloud-icons.onemodel.app/aws/Architecture-Service-Icons_01312023/Arch_Compute/64/Arch_AWS-Outposts-family_64.svg",
    description: "O AWS Outposts é um serviço totalmente gerenciado que estende a infraestrutura, serviços, APIs e ferramentas da AWS para praticamente qualquer datacenter, espaço de colocation ou instalação on-premises.",
    useCase: "Uma instituição financeira que precisa manter dados sensíveis localmente devido a requisitos regulatórios usa o AWS Outposts para executar aplicações AWS em seu próprio datacenter, mantendo a consistência operacional com a nuvem AWS e reduzindo a latência para seus usuários."
  },
  {
    id: 10,
    name: "AWS Lambda@Edge",
    category: "edge",
    categoryLabel: "Edge Computing",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*w8_jHFa0hQGyCDcl.png",
    description: "O AWS Lambda@Edge é uma extensão do Lambda que permite executar funções para personalizar o conteúdo entregue pelo CloudFront, executando o código mais próximo dos usuários para melhorar o desempenho.",
    useCase: "Um site global de comércio eletrônico utiliza o Lambda@Edge para personalizar dinamicamente o conteúdo da página inicial com base na localização geográfica do usuário, exibindo produtos, preços e promoções regionais sem a necessidade de redirecionar o tráfego para servidores de origem."
  },
  {
    id: 11,
    name: "AWS SQS",
    category: "messaging",
    categoryLabel: "Mensageria",
    image: "https://www.apono.io/wp-content/uploads/2023/05/amazon-sqs-min.png",
    description: "O Amazon Simple Queue Service (SQS) é um serviço de enfileiramento de mensagens totalmente gerenciado que permite a desacoplagem e escalabilidade de sistemas distribuídos, microsserviços e aplicações sem servidor.",
    useCase: "Uma empresa de pagamentos online usa o SQS para gerenciar filas de transações, garantindo que cada pagamento seja processado de forma confiável e escalável, mesmo sob picos de tráfego."
  },
  {
    id: 12,
    name: "AWS SNS",
    category: "messaging",
    categoryLabel: "Mensageria",
    image: "https://images.ctfassets.net/7rbn0raz0t75/3JzLsX7jyemmi2yvIqPfYG/59a0745e0c4cd783a8d879fb32d5e535/AWSSNS-icon-color.svg?w=384&q=100",
    description: "O Amazon Simple Notification Service (SNS) é um serviço de mensagens pub/sub totalmente gerenciado que permite a comunicação entre aplicações e serviços distribuídos.",
    useCase: "Uma plataforma de notificações em tempo real usa o SNS para enviar alertas personalizados para usuários móveis e web, garantindo entrega rápida e confiável."
  },
  {
    id: 13,
    name: "Família de instâncias do Amazon EC2: Uso geral",
    category: "compute",
    categoryLabel: "Computação",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/AWS_Simple_Icons_Compute_Amazon_EC2_Instances.svg",
    description: "As instâncias de uso geral do Amazon EC2 oferecem um equilíbrio entre recursos de computação, memória e rede, ideais para uma ampla variedade de cargas de trabalho.",
    useCase: "Uma startup de tecnologia usa instâncias de uso geral para hospedar seu site e aplicativos, garantindo desempenho consistente e custo-efetivo."
  },
  {
    id: 14,
    name: "Família de instâncias do Amazon EC2: Otimizado para computação",
    category: "compute",
    categoryLabel: "Computação",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/AWS_Simple_Icons_Compute_Amazon_EC2_Instances.svg",
    description: "As instâncias otimizadas para computação do Amazon EC2 são projetadas para cargas de trabalho que exigem alto poder de processamento, como processamento de dados e servidores de jogos.",
    useCase: "Uma empresa de análise de dados usa instâncias otimizadas para computação para processar grandes volumes de dados em tempo real, reduzindo o tempo de análise."
  },
  {
    id: 15,
    name: "Família de instâncias do Amazon EC2: Otimizado para memória",
    category: "compute",
    categoryLabel: "Computação",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/AWS_Simple_Icons_Compute_Amazon_EC2_Instances.svg",
    description: "As instâncias otimizadas para memória do Amazon EC2 são ideais para cargas de trabalho que exigem grande capacidade de memória, como bancos de dados em memória e análises de big data.",
    useCase: "Uma empresa de finanças usa instâncias otimizadas para memória para executar análises complexas em grandes conjuntos de dados financeiros, garantindo desempenho rápido e eficiente."
  },
  {
    id: 16,
    name: "Família de instâncias do Amazon EC2: Otimizado para armazenamento",
    category: "compute",
    categoryLabel: "Computação",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/AWS_Simple_Icons_Compute_Amazon_EC2_Instances.svg",
    description: "As instâncias otimizadas para armazenamento do Amazon EC2 são projetadas para cargas de trabalho que exigem alto desempenho de armazenamento, como data warehouses e sistemas de arquivos distribuídos.",
    useCase: "Uma empresa de mídia usa instâncias otimizadas para armazenamento para armazenar e processar grandes volumes de vídeos e imagens, garantindo acesso rápido e confiável."
  },
  {
    id: 17,
    name: "Família de instâncias do Amazon EC2: Computação acelerada",
    category: "compute",
    categoryLabel: "Computação",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/AWS_Simple_Icons_Compute_Amazon_EC2_Instances.svg",
    description: "As instâncias de computação acelerada do Amazon EC2 utilizam hardware especializado, como GPUs e FPGAs, para acelerar cargas de trabalho de machine learning, processamento gráfico e outras tarefas intensivas.",
    useCase: "Uma empresa de inteligência artificial usa instâncias de computação acelerada para treinar modelos de deep learning em grandes conjuntos de dados, reduzindo o tempo de treinamento."
  },
  {
    id: 18,
    name: "Opções de compras do Amazon EC2: Sob demanda",
    category: "compute",
    categoryLabel: "Computação",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/AWS_Simple_Icons_Compute_Amazon_EC2_Instances.svg",
    description: "As instâncias sob demanda do Amazon EC2 permitem que você pague apenas pelo tempo de computação utilizado, sem compromissos de longo prazo ou custos iniciais.",
    useCase: "Uma empresa de desenvolvimento de software usa instâncias sob demanda para testar novas versões de aplicativos, garantindo flexibilidade e controle de custos."
  },
  {
    id: 19,
    name: "Opções de compras do Amazon EC2: Saving Plans",
    category: "compute",
    categoryLabel: "Computação",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/AWS_Simple_Icons_Compute_Amazon_EC2_Instances.svg",
    description: "Os Saving Plans do Amazon EC2 oferecem preços reduzidos em troca de um compromisso de uso de computação por um período de 1 ou 3 anos, proporcionando economia significativa.",
    useCase: "Uma empresa de e-commerce usa Saving Plans para reduzir custos de infraestrutura durante períodos de alta demanda, como Black Friday."
  },
  {
    id: 20,
    name: "Opções de compras do Amazon EC2: Instâncias reservadas",
    category: "compute",
    categoryLabel: "Computação",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/AWS_Simple_Icons_Compute_Amazon_EC2_Instances.svg",
    description: "As instâncias reservadas do Amazon EC2 permitem que você reserve capacidade de computação por um período de 1 ou 3 anos, obtendo descontos significativos em comparação com instâncias sob demanda.",
    useCase: "Uma empresa de SaaS usa instâncias reservadas para garantir capacidade de computação contínua e previsível para seus clientes, reduzindo custos operacionais."
  },
  {
    id: 21,
    name: "Opções de compras do Amazon EC2: Instâncias Spot",
    category: "compute",
    categoryLabel: "Computação",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/AWS_Simple_Icons_Compute_Amazon_EC2_Instances.svg",
    description: "As instâncias Spot do Amazon EC2 permitem que você aproveite capacidade ociosa na nuvem a um custo significativamente reduzido, ideal para cargas de trabalho tolerantes a interrupções.",
    useCase: "Uma empresa de pesquisa científica usa instâncias Spot para executar simulações complexas que podem ser interrompidas e reiniciadas sem impacto nos resultados."
  },
  {
    id: 22,
    name: "Opções de compras do Amazon EC2: Hosts dedicados",
    category: "compute",
    categoryLabel: "Computação",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/AWS_Simple_Icons_Compute_Amazon_EC2_Instances.svg",
    description: "Os Hosts Dedicados do Amazon EC2 permitem que você utilize servidores físicos dedicados para suas instâncias EC2, atendendo a requisitos de conformidade e licenciamento.",
    useCase: "Uma empresa de saúde usa Hosts Dedicados para garantir que suas aplicações de processamento de dados sensíveis cumpram regulamentações de privacidade."
  },
  {
    id: 23,
    name: "Auto Scaling",
    category: "compute",
    categoryLabel: "Computação",
    image: "https://cloud-icons.onemodel.app/aws/Architecture-Service-Icons_01312023/Arch_Compute/64/Arch_Amazon-EC2-Auto-Scaling_64.svg",
    description: "O Auto Scaling do Amazon EC2 permite ajustar automaticamente a capacidade de computação para manter o desempenho e a disponibilidade das aplicações, escalando para cima ou para baixo conforme a demanda.",
    useCase: "Uma plataforma de streaming usa Auto Scaling para garantir que recursos suficientes estejam disponíveis durante picos de tráfego, como lançamentos de novos conteúdos."
  },
  {
    id: 24,
    name: "Elastic Load Balancing",
    category: "compute",
    categoryLabel: "Computação",
    image: "https://cdn.prod.website-files.com/5f05d5858fab461d0d08eaeb/6357c4f9893194358f41b54a_elb_light.svg",
    description: "O Elastic Load Balancing (ELB) distribui automaticamente o tráfego de entrada entre várias instâncias EC2, garantindo alta disponibilidade e escalabilidade para suas aplicações.",
    useCase: "Uma empresa de comércio eletrônico usa ELB para distribuir o tráfego entre seus servidores web durante promoções, garantindo que o site permaneça responsivo e disponível."
  }
];

document.addEventListener('DOMContentLoaded', function() {
  const servicesGrid = document.getElementById('servicesGrid');
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const expandAllBtn = document.getElementById('expandAllBtn');
  const collapseAllBtn = document.getElementById('collapseAllBtn');
  const progressText = document.getElementById('progressText');
  const progressBar = document.getElementById('progressBar');

  let readServices = new Set(); // Armazena os IDs dos serviços lidos

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
    const category = categoryFilter.value;
    
    const filteredServices = awsServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm) || 
                           service.description.toLowerCase().includes(searchTerm);
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