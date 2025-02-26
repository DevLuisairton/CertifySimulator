// Dados dos serviços
const awsServices = [
  {
    id: 1,
    name: "Amazon CloudWatch",
    category: "monitoring",
    categoryLabel: "Monitoramento",
    image: "https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/monitoring-on-aws/monitor-your-architecture-with-amazon-cloudwatch/images/522c742e37be736db2af0f8a720b1c02_f-05-f-9-a-02-2-a-81-4-fa-3-b-651-412-e-2222-bd-08.png",
    description: "O Amazon CloudWatch monitora recursos e aplicativos em tempo real, coletando métricas, logs e definindo alertas para ações automatizadas.",
    useCase: "Uma empresa de e-commerce usa o CloudWatch para monitorar o desempenho de suas instâncias EC2 e configurar alertas para escalonamento automático durante picos de tráfego."
  },
  {
    id: 2,
    name: "AWS CloudTrail",
    category: "audit",
    categoryLabel: "Auditoria",
    image: "https://www.honeycomb.io/wp-content/uploads/2023/03/integration_aws-cloudtrail_featured_image.svg",
    description: "O AWS CloudTrail registra chamadas de API para auditoria e conformidade, monitorando atividades em contas da AWS.",
    useCase: "Uma empresa de finanças usa o CloudTrail para auditar todas as ações realizadas em sua conta AWS, garantindo conformidade com regulamentações."
  },
  {
    id: 3,
    name: "AWS X-Ray",
    category: "monitoring",
    categoryLabel: "Monitoramento",
    image: "https://www.devguides.dev/content/images/size/w2000/2022/10/AWS-X-Ray@4x.png",
    description: "O AWS X-Ray rastreia e analisa chamadas de aplicativos distribuídos, identificando gargalos e problemas de desempenho.",
    useCase: "Uma empresa de tecnologia usa o X-Ray para rastrear chamadas entre microserviços e melhorar o desempenho de seu aplicativo."
  },
  {
    id: 4,
    name: "AWS Config",
    category: "compliance",
    categoryLabel: "Conformidade",
    image: "https://blog.cloud-partner.jp/wp-content/uploads/2024/03/Slide19-768x432.jpg",
    description: "O AWS Config avalia e audita a configuração de recursos da AWS, monitorando mudanças e verificando conformidade com políticas.",
    useCase: "Uma empresa de saúde usa o AWS Config para garantir que todos os buckets S3 estejam configurados com criptografia ativada."
  },
  {
    id: 5,
    name: "Amazon Athena",
    category: "analytics",
    categoryLabel: "Análise",
    image: "https://images.seeklogo.com/logo-png/43/1/aws-athena-logo-png_seeklogo-430928.png",
    description: "O Amazon Athena permite consultar dados diretamente no Amazon S3 usando SQL, sem a necessidade de provisionar infraestrutura.",
    useCase: "Uma empresa de logística usa o Athena para analisar logs de entrega armazenados no S3 e identificar padrões de desempenho."
  },
  {
    id: 6,
    name: "AWS Glue",
    category: "analytics",
    categoryLabel: "Análise",
    image: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/aws-glue-9ztw380gkkd1g54iwwsq7.png/aws-glue-g9i4j0s3igbjmai4vernz9.png?_a=DAJFJtWIZAAC",
    description: "O AWS Glue é um serviço ETL totalmente gerenciado que prepara e transforma dados para análise.",
    useCase: "Uma empresa de marketing usa o AWS Glue para transformar dados de campanhas publicitárias e carregá-los no Amazon Redshift para análise."
  },
  {
    id: 7,
    name: "Amazon QuickSight",
    category: "analytics",
    categoryLabel: "Análise",
    image: "https://aws.taf-jp.com/cms/wp-content/uploads/2024/02/blog_featured-img_w580px_QuickSight.png",
    description: "O Amazon QuickSight é uma ferramenta de business intelligence para criar dashboards e visualizações de dados.",
    useCase: "Uma empresa de varejo usa o QuickSight para criar dashboards interativos que mostram tendências de vendas em tempo real."
  },
  {
    id: 8,
    name: "AWS Data Pipeline",
    category: "analytics",
    categoryLabel: "Análise",
    image: "https://cloud-icons.onemodel.app/aws/Architecture-Service-Icons_01312023/Arch_Analytics/Arch_64/Arch_AWS-Data-Pipeline_64.svg",
    description: "O AWS Data Pipeline orquestra a movimentação e transformação de dados entre serviços AWS, automatizando workflows de processamento de dados.",
    useCase: "Uma empresa de mídia usa o Data Pipeline para mover dados de vídeo do S3 para o Amazon Redshift, onde são analisados para insights de audiência."
  },
  {
    id: 9,
    name: "AWS Trusted Advisor",
    category: "optimization",
    categoryLabel: "Otimização",
    image: "https://cloud-icons.onemodel.app/aws/Architecture-Service-Icons_01312023/Arch_Management-Governance/64/Arch_AWS-Trusted-Advisor_64.svg",
    description: "O AWS Trusted Advisor oferece recomendações para otimizar custos, desempenho, segurança e confiabilidade, monitorando proativamente o ambiente AWS.",
    useCase: "Uma empresa de consultoria usa o Trusted Advisor para identificar recursos subutilizados e reduzir custos na nuvem."
  },
  {
    id: 10,
    name: "Amazon Kinesis",
    category: "analytics",
    categoryLabel: "Análise",
    image: "https://cdn.worldvectorlogo.com/logos/amazon-kinesis-1.svg",
    description: "O Amazon Kinesis coleta, processa e analisa dados em tempo real, ideal para aplicativos de streaming de dados.",
    useCase: "Uma empresa de jogos online usa o Kinesis para analisar métricas de jogadores em tempo real e personalizar a experiência do usuário."
  }
];

// Restante do código JavaScript (igual ao exemplo anterior)

document.addEventListener('DOMContentLoaded', function () {
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