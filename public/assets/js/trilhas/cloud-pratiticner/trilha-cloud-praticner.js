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