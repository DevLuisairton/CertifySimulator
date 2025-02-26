// Dados dos serviços
const awsServices = [
  {
    id: 1,
    name: "Amazon S3",
    category: "storage",
    categoryLabel: "Armazenamento",
    image: "https://cdn.worldvectorlogo.com/logos/amazon-s3-simple-storage-service.svg",
    description: "O Amazon S3 é um serviço de armazenamento de objetos altamente durável e escalável, ideal para armazenar grandes volumes de dados, como backups, arquivos de mídia e dados de análise.",
    useCase: "Uma empresa de mídia usa o Amazon S3 para armazenar e distribuir vídeos para seus usuários, garantindo alta disponibilidade e baixa latência."
  },
  {
    id: 2,
    name: "Amazon EBS",
    category: "storage",
    categoryLabel: "Armazenamento",
    image: "https://cdn.worldvectorlogo.com/logos/amazon-elastic-block-store-1.svg",
    description: "O Amazon EBS fornece armazenamento em blocos para instâncias EC2, ideal para bancos de dados, sistemas de arquivos e aplicativos que exigem baixa latência.",
    useCase: "Uma empresa de fintech usa o Amazon EBS para armazenar dados de transações em um banco de dados MySQL em uma instância EC2, garantindo desempenho e confiabilidade."
  },
  {
    id: 3,
    name: "Amazon RDS",
    category: "database",
    categoryLabel: "Banco de Dados",
    image: "https://cdn.prod.website-files.com/5f05d5858fab461d0d08eaeb/634eb5d575ede34ec83cdbc5_rds_light.svg",
    description: "O Amazon RDS é um serviço gerenciado para bancos de dados relacionais, como MySQL, PostgreSQL, Oracle e SQL Server. Automatiza tarefas como backups, patches e escalabilidade.",
    useCase: "Uma empresa de e-commerce usa o Amazon RDS para gerenciar seu banco de dados PostgreSQL, garantindo alta disponibilidade com implantações Multi-AZ."
  },
  {
    id: 4,
    name: "Amazon DynamoDB",
    category: "database",
    categoryLabel: "Banco de Dados",
    image: "https://cdn.prod.website-files.com/667079b02bf838d86761e20b/66a1cbf5f5756a7741c0be1e_DynamoDB.svg",
    description: "O Amazon DynamoDB é um banco de dados NoSQL totalmente gerenciado, escalável e de alto desempenho, ideal para aplicativos que exigem baixa latência.",
    useCase: "Um aplicativo de jogos online usa o DynamoDB para armazenar dados de perfil de usuários e pontuações em tempo real, garantindo escalabilidade e desempenho."
  },
  {
    id: 5,
    name: "Amazon Redshift",
    category: "database",
    categoryLabel: "Banco de Dados",
    image: "https://www.snaplogic.com/wp-content/uploads/2023/10/Amazon-Redshift-Icon.png",
    description: "O Amazon Redshift é um data warehouse totalmente gerenciado para análise de dados em grande escala, com integração a ferramentas de BI.",
    useCase: "Uma empresa de análise de dados usa o Amazon Redshift para processar grandes volumes de dados de vendas e gerar relatórios em tempo real."
  },
  {
    id: 6,
    name: "Amazon Aurora",
    category: "database",
    categoryLabel: "Banco de Dados",
    image: "https://media.printables.com/media/prints/128177/images/1229545_20d317ff-78ce-4cec-a9b6-7aba1b3c7972/thumbs/inside/1280x960/png/aurora.webp",
    description: "O Amazon Aurora é um banco de dados relacional compatível com MySQL e PostgreSQL, oferecendo desempenho superior e escalabilidade automática.",
    useCase: "Uma empresa de SaaS usa o Amazon Aurora para gerenciar seu banco de dados de clientes, garantindo alta disponibilidade e baixa latência."
  },
  {
    id: 7,
    name: "Amazon Glacier",
    category: "storage",
    categoryLabel: "Armazenamento",
    image: "https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGcuLhRA1QJJxbymwTYhAiH8=/amazon-glacier-2023-01-04%2000-00-00-2024-12-09%2001-11-06",
    description: "O Amazon Glacier é um serviço de armazenamento de baixo custo para arquivamento de dados, ideal para backups de longo prazo.",
    useCase: "Uma empresa de saúde usa o Amazon Glacier para armazenar backups de dados de pacientes, garantindo conformidade com regulamentações de retenção de dados."
  },
  {
    id: 8,
    name: "AWS Backup",
    category: "storage",
    categoryLabel: "Armazenamento",
    image: "https://www.skyarch.net/blog/wp-content/uploads/2022/04/blog_logo_aws-backup2.png",
    description: "O AWS Backup é um serviço gerenciado para backup e recuperação de dados, centralizando o gerenciamento de backups em vários serviços da AWS.",
    useCase: "Uma empresa de TI usa o AWS Backup para automatizar backups de instâncias EC2 e bancos de dados RDS, garantindo a recuperação de dados em caso de falhas."
  },
  {
    id: 9,
    name: "Amazon EFS",
    category: "storage",
    categoryLabel: "Armazenamento",
    image: "https://cdn.worldvectorlogo.com/logos/amazon-elastic-file-system.svg",
    description: "O Amazon EFS é um serviço de armazenamento de arquivos escalável e totalmente gerenciado, compatível com o protocolo NFS.",
    useCase: "Uma empresa de desenvolvimento de software usa o Amazon EFS para compartilhar arquivos de código entre múltiplas instâncias EC2 em um ambiente de desenvolvimento."
  },
  {
    id: 10,
    name: "Amazon DocumentDB",
    category: "database",
    categoryLabel: "Banco de Dados",
    image: "https://cdn.prod.website-files.com/5f05d5858fab461d0d08eaeb/635107c554da469dc8f83e71_Amazon-DocumentDB-with-MongoDB-compatibility.svg",
    description: "O Amazon DocumentDB é um banco de dados NoSQL compatível com MongoDB, oferecendo escalabilidade automática e alta disponibilidade.",
    useCase: "Uma empresa de mídia social usa o Amazon DocumentDB para armazenar dados de perfis de usuários e posts, garantindo escalabilidade e desempenho."
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