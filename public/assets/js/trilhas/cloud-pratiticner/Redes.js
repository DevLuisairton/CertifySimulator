// Dados dos serviços
const awsServices = [
  {
    id: 1,
    name: "Amazon VPC",
    category: "networking",
    categoryLabel: "Redes",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*NNXkxobbMBxJGxsFy2quYQ.png",
    description: "O Amazon VPC permite criar uma rede privada virtual na AWS, isolando recursos e controlando o tráfego de rede. Use sub-redes para segmentar a rede e melhorar a segurança.",
    useCase: "Uma empresa cria uma VPC com sub-redes públicas e privadas para hospedar um aplicativo web. As instâncias EC2 na sub-rede pública acessam a Internet, enquanto as instâncias de banco de dados na sub-rede privada permanecem isoladas."
  },
  {
    id: 2,
    name: "Sub-redes",
    category: "networking",
    categoryLabel: "Redes",
    image: "https://docs.aws.amazon.com/pt_br/vpc/latest/userguide/images/subnet-cidrs.png",
    description: "Sub-redes são divisões lógicas dentro de uma VPC. Podem ser públicas (acessíveis à Internet) ou privadas (isoladas da Internet), essenciais para organizar e proteger recursos.",
    useCase: "Uma empresa usa sub-redes públicas para instâncias EC2 que precisam acessar a Internet e sub-redes privadas para bancos de dados, garantindo segurança adicional."
  },
  {
    id: 3,
    name: "Internet Gateway (IGW)",
    category: "networking",
    categoryLabel: "Redes",
    image: "https://cdn.prod.website-files.com/5f05d5858fab461d0d08eaeb/635a1c060b1a32823c9159d0_internet_gateway_light.svg",
    description: "O Internet Gateway permite comunicação entre instâncias na VPC e a Internet. É usado em sub-redes públicas para acesso à Internet.",
    useCase: "Um site hospedado em instâncias EC2 na sub-rede pública usa o Internet Gateway para permitir o acesso dos usuários à Internet."
  },
  {
    id: 4,
    name: "NAT Gateway",
    category: "networking",
    categoryLabel: "Redes",
    image: "https://cdn.prod.website-files.com/5f05d5858fab461d0d08eaeb/6358cec281674a47f95c499b_nat_gateway_light.svg",
    description: "O NAT Gateway permite que instâncias em sub-redes privadas acessem a Internet para atualizações ou downloads, mas impede o acesso externo a essas instâncias.",
    useCase: "Uma aplicação de backend em uma sub-rede privada usa o NAT Gateway para acessar a Internet e baixar atualizações de software sem expor a instância à Internet."
  },
  {
    id: 5,
    name: "Elastic Load Balancing (ELB)",
    category: "networking",
    categoryLabel: "Redes",
    image: "https://www.honeycomb.io/wp-content/uploads/2023/03/integration_aws-elb_featured_image.svg",
    description: "O Elastic Load Balancing distribui o tráfego de entrada entre várias instâncias EC2, garantindo alta disponibilidade e escalabilidade para aplicativos.",
    useCase: "Um aplicativo web usa o ELB para distribuir o tráfego entre instâncias EC2 em múltiplas AZs, garantindo que o aplicativo permaneça disponível mesmo durante picos de tráfego."
  },
  {
    id: 6,
    name: "Security Groups",
    category: "security",
    categoryLabel: "Segurança",
    image: "https://cdn.prod.website-files.com/5f05d5858fab461d0d08eaeb/6326e125cd40a845ea04041d_security_group_light.svg",
    description: "Os Security Groups atuam como firewalls virtuais para instâncias EC2, controlando o tráfego de entrada e saída com base em regras configuradas.",
    useCase: "Uma empresa configura um Security Group para permitir apenas tráfego HTTP/HTTPS para suas instâncias EC2, bloqueando outros tipos de tráfego."
  },
  {
    id: 7,
    name: "Network ACLs",
    category: "security",
    categoryLabel: "Segurança",
    image: "https://cdn.prod.website-files.com/5f05d5858fab461d0d08eaeb/6359353d44a94b52173350b7_network_acl_light.svg",
    description: "As Network ACLs controlam o tráfego em nível de sub-rede, oferecendo uma camada adicional de segurança com regras de permissão e negação.",
    useCase: "Uma empresa usa Network ACLs para bloquear tráfego de IPs específicos em uma sub-rede, complementando a segurança dos Security Groups."
  },
  {
    id: 8,
    name: "AWS Direct Connect",
    category: "networking",
    categoryLabel: "Redes",
    image: "https://cloud-icons.onemodel.app/aws/Architecture-Service-Icons_01312023/Arch_Networking-Content-Delivery/64/Arch_AWS-Direct-Connect_64.svg",
    description: "O AWS Direct Connect estabelece uma conexão dedicada entre a rede local e a AWS, reduzindo a latência e melhorando a segurança.",
    useCase: "Uma empresa de saúde usa o Direct Connect para transferir grandes volumes de dados entre seu datacenter local e a AWS, garantindo segurança e desempenho."
  },
  {
    id: 9,
    name: "AWS VPN",
    category: "networking",
    categoryLabel: "Redes",
    image: "https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Compute__Networking_copy_Amazon_VPC_VPN_Gateway-512.png",
    description: "O AWS VPN cria uma conexão segura e criptografada entre a rede local e a VPC, ideal para ambientes híbridos.",
    useCase: "Uma empresa conecta sua rede local à AWS usando VPN, permitindo que funcionários acessem recursos na nuvem de forma segura."
  },
  {
    id: 10,
    name: "Amazon Route 53",
    category: "networking",
    categoryLabel: "Redes",
    image: "https://cloud-icons.onemodel.app/aws/Architecture-Service-Icons_01312023/Arch_Networking-Content-Delivery/64/Arch_Amazon-Route-53_64@5x.png",
    description: "O Amazon Route 53 é um serviço de DNS altamente disponível e escalável, que roteia o tráfego de usuários para aplicativos na AWS ou em outros ambientes.",
    useCase: "Uma empresa usa o Route 53 para direcionar o tráfego de usuários para a região AWS mais próxima, garantindo baixa latência e alta disponibilidade."
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