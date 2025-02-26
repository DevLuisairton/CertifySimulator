// Dados sobre Precificação e Suporte na AWS
const pricingAndSupport = [
  {
    id: 1,
    name: "Pay-as-you-go (Pagamento conforme o uso)",
    category: "precificacao",
    categoryLabel: "Precificação",
    image: "https://img.freepik.com/vetores-premium/pay-as-you-go-icone-do-conceito-de-servico_106317-33123.jpg?w=740",
    description: "Pague apenas pelos serviços que utilizar, sem custos iniciais ou compromissos de longo prazo.",
    useCase: "Ideal para startups que precisam de flexibilidade financeira, pagando apenas pelo que consomem."
  },
  {
    id: 2,
    name: "Economias com uso contínuo",
    category: "precificacao",
    categoryLabel: "Precificação",
    image: "https://i.pinimg.com/736x/82/7a/ba/827abafe1fcb763bc00c1e50a66d3f65.jpg",
    description: "Descontos automáticos para serviços como EC2 e RDS quando você os utiliza de forma contínua.",
    useCase: "Empresas com cargas de trabalho estáveis podem economizar significativamente com descontos automáticos."
  },
  {
    id: 3,
    name: "Instâncias Reservadas (RIs)",
    category: "precificacao",
    categoryLabel: "Precificação",
    image: "https://comunidadecloud.com/wp-content/webp-express/webp-images/uploads/2023/09/amazon-aws.jpg.webp",
    description: "Economize até 75% em comparação com o preço sob demanda ao se comprometer com um uso de 1 ou 3 anos.",
    useCase: "Empresas com planejamento de longo prazo podem reduzir custos com instâncias reservadas."
  },
  {
    id: 4,
    name: "Planos de Poupança (Savings Plans)",
    category: "precificacao",
    categoryLabel: "Precificação",
    image: "https://media.licdn.com/dms/image/v2/C4D12AQHgmStvAhRw8g/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1574270206133?e=1746057600&v=beta&t=90YogQ6qCh2DO8qVy5OBnr62bRd9zpYT85gUb6lkAP0",
    description: "Oferece flexibilidade para economizar em uso de computação (EC2, Fargate, Lambda) com compromissos de uso.",
    useCase: "Ideal para empresas que desejam flexibilidade em troca de economias significativas."
  },
  {
    id: 5,
    name: "Spot Instances",
    category: "precificacao",
    categoryLabel: "Precificação",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*FTTiy27_uRMc-ZQWLAQWww.png",
    description: "Utilize capacidade ociosa da AWS com descontos de até 90%, ideal para cargas de trabalho tolerantes a interrupções.",
    useCase: "Cargas de trabalho como processamento de dados em lote podem se beneficiar de custos reduzidos."
  },
  {
    id: 6,
    name: "AWS Cost Explorer",
    category: "ferramentas",
    categoryLabel: "Ferramentas de Gerenciamento",
    image: "https://cdn.prod.website-files.com/5f05d5858fab461d0d08eaeb/654132b253b4e36b9d799ee4_6427c1d7f47c952c5838718d_2d67f7b91666ed485b01206d538bb37b_1-fc-23372-267-c-4369-8-a-31-294-c-5-f-5-fe-949.webp",
    description: "Visualize e analise seus custos e uso ao longo do tempo.",
    useCase: "Empresas podem identificar tendências de gastos e otimizar recursos."
  },
  {
    id: 7,
    name: "AWS Budgets",
    category: "ferramentas",
    categoryLabel: "Ferramentas de Gerenciamento",
    image: "https://cdn.prod.website-files.com/5f05d5858fab461d0d08eaeb/654132b3479b31588db4f670_64285a405fbce21438513280_764d2095435e0eb2c12d3f09c9ae895f_559-fc-4-d-5-fc-81-4-e-87-ab-7-d-274098-ae-488-f.webp",
    description: "Defina orçamentos personalizados e receba alertas quando seus custos ou uso excederem os limites definidos.",
    useCase: "Equipes financeiras podem monitorar e controlar gastos em tempo real."
  },
  {
    id: 8,
    name: "AWS Cost and Usage Report (CUR)",
    category: "ferramentas",
    categoryLabel: "Ferramentas de Gerenciamento",
    image: "https://miro.medium.com/v2/resize:fit:512/format:webp/1*5uqwh6aDOVFbP4kP24IBxA.png",
    description: "Relatório detalhado de todos os custos e uso de serviços da AWS.",
    useCase: "Auditorias internas e análises detalhadas de custos."
  },
  {
    id: 9,
    name: "AWS Pricing Calculator",
    category: "ferramentas",
    categoryLabel: "Ferramentas de Gerenciamento",
    image: "https://d1.awsstatic.com/pricing/Page-Illo_Pricing_Calculator.44a85eb84ad20b4579a5ca38fad45e213fed8b44.png",
    description: "Estime o custo de arquiteturas na AWS antes de implementá-las.",
    useCase: "Equipes de arquitetura podem planejar custos antes da implementação."
  },
  {
    id: 10,
    name: "Plano Básico (Gratuito)",
    category: "suporte",
    categoryLabel: "Suporte",
    image: "https://media.licdn.com/dms/image/v2/C4E12AQEQR5elqf9oTA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1557988094813?e=1746057600&v=beta&t=Quy_h959jH-cLX1Y839F-rP0B3KS_cV3Ma1p9c8Wbgo",
    description: "Acesso a documentação, whitepapers, fóruns e painel de status da AWS.",
    useCase: "Ideal para usuários que precisam de acesso básico a recursos de suporte."
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
  renderServices(pricingAndSupport);

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
    
    const filteredServices = pricingAndSupport.filter(service => {
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
    const totalServices = pricingAndSupport.length;
    const readCount = readServices.size;
    const progressPercentage = (readCount / totalServices) * 100;

    progressText.textContent = `${readCount} de ${totalServices} serviços concluídos`;
    progressBar.style.width = `${progressPercentage}%`;
  }

  // Inicializa o progresso
  updateProgress();
});