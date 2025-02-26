// Dados dos serviços
const awsServices = [
  {
    id: 1,
    name: "Regiões AWS",
    category: "global",
    categoryLabel: "Infraestrutura Global",
    image: "https://hermes.dio.me/assets/articles/a483d6e9-6f6b-4bc4-9bb6-f5f6fdca9272.png",
    description: "As Regiões AWS são áreas geográficas onde a AWS possui data centers. Cada região é composta por múltiplas Zonas de Disponibilidade (AZs). Escolha a região com base em requisitos de latência, conformidade e custo.",
    useCase: "Uma empresa global de e-commerce escolhe a região AWS mais próxima de seus clientes para reduzir a latência e melhorar a experiência do usuário, garantindo conformidade com regulamentações locais."
  },
  {
    id: 2,
    name: "Zonas de Disponibilidade (AZs)",
    category: "global",
    categoryLabel: "Infraestrutura Global",
    image: "https://www.vocecertificadoaws.com.br/wp-content/uploads/2024/05/aws-regioes.jpg.webp",
    description: "As Zonas de Disponibilidade (AZs) são data centers isolados dentro de uma região AWS. Projetados para serem independentes em termos de energia, rede e infraestrutura física, garantem alta disponibilidade e tolerância a falhas.",
    useCase: "Um banco internacional utiliza múltiplas AZs para garantir que seus serviços de transação financeira permaneçam disponíveis mesmo em caso de falha em uma única AZ."
  },
  {
    id: 3,
    name: "Edge Locations e Amazon CloudFront",
    category: "global",
    categoryLabel: "Infraestrutura Global",
    image: "https://d1.awsstatic.com/Global-Accelerator_Infrastructure-Map_2x7.2023.4c2a53c7c0d445df26718987c0b6a4ff3a05510c.jpg",
    description: "Edge Locations são pontos de presença global usados pelo Amazon CloudFront (CDN) para entregar conteúdo com baixa latência. Eles melhoram o desempenho de aplicativos distribuídos globalmente.",
    useCase: "Uma plataforma de streaming de vídeo utiliza o CloudFront para entregar conteúdo aos usuários finais com baixa latência, garantindo uma experiência de reprodução suave em qualquer lugar do mundo."
  },
  {
    id: 4,
    name: "Alta Disponibilidade e Resiliência",
    category: "reliability",
    categoryLabel: "Confiabilidade",
    image: "https://dkrn4sk0rn31v.cloudfront.net/2018/11/06150319/zonas-e-regioes-da-aws.png",
    description: "Use múltiplas AZs para garantir continuidade dos serviços em caso de falha. Serviços como Amazon Route 53 (DNS) e Elastic Load Balancing (ELB) ajudam a distribuir tráfego e garantir disponibilidade.",
    useCase: "Uma empresa de saúde utiliza múltiplas AZs e o Elastic Load Balancing para garantir que seus sistemas de prontuários eletrônicos permaneçam disponíveis 24/7, mesmo durante picos de demanda."
  },
  {
    id: 5,
    name: "AWS Global Accelerator",
    category: "reliability",
    categoryLabel: "Confiabilidade",
    image: "https://cloud-icons.onemodel.app/aws/Architecture-Service-Icons_01312023/Arch_Networking-Content-Delivery/64/Arch_AWS-Global-Accelerator_64.svg",
    description: "O AWS Global Accelerator melhora o desempenho e a disponibilidade de aplicativos globais, direcionando o tráfego para os endpoints mais próximos e saudáveis.",
    useCase: "Uma empresa de jogos online utiliza o Global Accelerator para garantir que os jogadores ao redor do mundo tenham uma experiência de jogo suave e sem lag."
  },
  {
    id: 6,
    name: "AWS Backup",
    category: "reliability",
    categoryLabel: "Confiabilidade",
    image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/0*1pY4YswMDO4J_zN0.png",
    description: "O AWS Backup automatiza backups e garante a recuperação de dados, protegendo aplicativos e dados críticos contra perda acidental ou corrupção.",
    useCase: "Uma empresa de seguros utiliza o AWS Backup para proteger seus dados de clientes, garantindo que possam ser restaurados rapidamente em caso de falha ou desastre."
  },
  {
    id: 7,
    name: "AWS Well-Architected Framework",
    category: "reliability",
    categoryLabel: "Confiabilidade",
    image: "https://tiqqe.com/wp-content/uploads/2019/08/aws-well-architected-vertical-orange-300x300.png",
    description: "O AWS Well-Architected Framework oferece práticas recomendadas para construir sistemas confiáveis, seguros, eficientes e de alto desempenho na nuvem.",
    useCase: "Uma startup de tecnologia utiliza o Well-Architected Framework para revisar sua arquitetura de nuvem, garantindo que ela seja escalável, segura e econômica."
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