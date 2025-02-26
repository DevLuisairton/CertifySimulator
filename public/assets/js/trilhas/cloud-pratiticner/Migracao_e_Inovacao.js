// Dados dos serviços
const awsServices = [
  {
    id: 1,
    name: "AWS Cloud Adoption Framework (CAF)",
    category: "migracao",
    categoryLabel: "Migração",
    image: "https://media7o.sedmiodjel.com/blog/aws-cloud-adoption-framework/aws-cloud-adoption-framework-cover.jpg",
    description: "Guia estruturado para adoção da nuvem da AWS, com foco em negócios, pessoas, governança, plataforma, segurança e operações.",
    useCase: "Uma empresa usa o CAF para planejar a migração de sua infraestrutura on-premises para a AWS."
  },
  {
    id: 2,
    name: "Os 6 Rs de Migração",
    category: "migracao",
    categoryLabel: "Migração",
    image: "https://emaster.cloud/wp-content/uploads/sites/10/2024/01/6r-cloud-migration.png",
    description: "Estratégias para migração de cargas de trabalho: Rehost, Replatform, Refactor, Repurchase, Retire e Retain.",
    useCase: "Migração de um banco de dados MySQL para o Amazon RDS usando a estratégia Replatform."
  },
  {
    id: 3,
    name: "Família Snow",
    category: "migracao",
    categoryLabel: "Migração",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*y8Kt0fhOHVFs-1ypWNG16A.png",
    description: "Dispositivos físicos para transferência segura de grandes volumes de dados para a AWS.",
    useCase: "Transferência de 100 TB de vídeos para a AWS usando o Snowball."
  },
  {
    id: 4,
    name: "Inovação com AWS",
    category: "inovacao",
    categoryLabel: "Inovação",
    image: "https://assets.aboutamazon.com/dims4/default/d3fd012/2147483647/strip/true/crop/1999x1125+1+0/resize/2480x1396!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fcc%2F4d%2F3aebf2f94859adcced3119ac7fe7%2Fabout-amazon-aws-update-1.jpg",
    description: "Serviços de IA, IoT, Serverless e Big Data para impulsionar a inovação.",
    useCase: "Uso do Amazon SageMaker para criar um sistema de recomendação de produtos."
  }
];

// Restante do código JavaScript (igual ao exemplo anterior)

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