// Dados dos serviços
const awsServices = [
  {
    id: 1,
    name: "AWS Systems Manager",
    category: "automacao",
    categoryLabel: "Automação",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*gWi9sJwRlAWZbMWZ",
    description: "Serviço para gerenciar e automatizar tarefas em recursos da AWS e on-premises.",
    useCase: "Automatizar a aplicação de patches em instâncias EC2."
  },
  {
    id: 2,
    name: "AWS Step Functions",
    category: "automacao",
    categoryLabel: "Automação",
    image: "https://cdn.worldvectorlogo.com/logos/aws-step-functions-1.svg",
    description: "Orquestra workflows de múltiplos serviços da AWS em uma aplicação.",
    useCase: "Orquestrar uma pipeline de processamento de dados envolvendo S3, DynamoDB e Lambda."
  },
  {
    id: 3,
    name: "Amazon EventBridge",
    category: "integracao",
    categoryLabel: "Integração",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*ht02Pp4pq5-h0qQ1AcT8yg.png",
    description: "Serviço de barramento de eventos para conectar aplicações usando eventos em tempo real.",
    useCase: "Integrar sistemas de notificação com serviços como SNS e Lambda."
  },
  {
    id: 4,
    name: "AWS CloudFormation",
    category: "automacao",
    categoryLabel: "Automação",
    image: "https://images.seeklogo.com/logo-png/43/1/aws-cloudformation-logo-png_seeklogo-430935.png",
    description: "Ferramenta de infraestrutura como código para provisionar e gerenciar recursos da AWS.",
    useCase: "Automatizar a criação de um ambiente completo de desenvolvimento na AWS."
  },
  {
    id: 5,
    name: "Amazon API Gateway",
    category: "integracao",
    categoryLabel: "Integração",
    image: "https://images.seeklogo.com/logo-png/43/1/aws-api-gateway-logo-png_seeklogo-430924.png",
    description: "Serviço para criar, publicar e gerenciar APIs RESTful e WebSocket.",
    useCase: "Expor uma API para integração com sistemas externos."
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