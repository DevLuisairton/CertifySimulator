// Dados dos serviços
const awsServices = [
  {
    id: 1,
    name: "AWS IAM",
    category: "security",
    categoryLabel: "Segurança",
    image: "https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/aws-cloud-security/control-access-with-aws-identity-and-access-management/images/3d5ecfeab35e8dfc1eb781f7880fafc9_99-c-15-ccc-fe-5-e-4-d-8-f-bcfc-193197-b-9-dc-7-b.png",
    description: "O AWS IAM gerencia acesso a serviços e recursos da AWS, permitindo criar usuários, grupos, roles e políticas para controlar permissões.",
    useCase: "Uma empresa configura políticas de IAM para garantir que desenvolvedores tenham acesso apenas aos recursos necessários para suas tarefas."
  },
  {
    id: 2,
    name: "AWS Organizations",
    category: "governance",
    categoryLabel: "Governança",
    image: "https://media.licdn.com/dms/image/v2/D5612AQGVqg30lOlE6w/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1687832175068?e=1746057600&v=beta&t=GM2mzdUM2U_p_h7Ql3s0H-S8tEcr_bJSvYZRPdgX8Fg",
    description: "O AWS Organizations centraliza o gerenciamento de múltiplas contas da AWS, aplicando políticas de controle de serviço (SCPs) para governança.",
    useCase: "Uma empresa usa o AWS Organizations para gerenciar contas de diferentes departamentos, aplicando políticas de segurança e consolidando faturas."
  },
  {
    id: 3,
    name: "AWS KMS",
    category: "security",
    categoryLabel: "Segurança",
    image: "https://pyongwonlee.com/wp-content/uploads/2020/11/kms.png",
    description: "O AWS KMS gerencia chaves de criptografia para proteger dados, integrando-se com serviços como S3, RDS e EBS.",
    useCase: "Uma empresa de saúde usa o AWS KMS para criptografar dados de pacientes armazenados no Amazon S3, garantindo conformidade com o HIPAA."
  },
  {
    id: 4,
    name: "AWS CloudTrail",
    category: "audit",
    categoryLabel: "Auditoria",
    image: "https://www.honeycomb.io/wp-content/uploads/2023/03/integration_aws-cloudtrail_featured_image.svg",
    description: "O AWS CloudTrail registra chamadas de API para auditoria e conformidade, monitorando atividades em contas da AWS.",
    useCase: "Uma empresa de finanças usa o CloudTrail para auditar todas as ações realizadas em sua conta AWS, garantindo conformidade com regulamentações."
  },
  {
    id: 5,
    name: "AWS Config",
    category: "compliance",
    categoryLabel: "Conformidade",
    image: "https://blog.cloud-partner.jp/wp-content/uploads/2024/03/Slide19-768x432.jpg",
    description: "O AWS Config avalia e audita a configuração de recursos da AWS, monitorando mudanças e verificando conformidade com políticas.",
    useCase: "Uma empresa de e-commerce usa o AWS Config para garantir que todos os buckets S3 estejam configurados com criptografia ativada."
  },
  {
    id: 6,
    name: "AWS Shield",
    category: "security",
    categoryLabel: "Segurança",
    image: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/aws-shield-0e59r9srfmg5rrazojnce.png/aws-shield-zvecdvtitg4rrblkrqik.png?_a=DAJFJtWIZAAC",
    description: "O AWS Shield protege aplicativos contra ataques DDoS, oferecendo proteção básica gratuita e opções avançadas com o AWS Shield Advanced.",
    useCase: "Um site de jogos online usa o AWS Shield para proteger seus servidores contra ataques DDoS, garantindo disponibilidade contínua."
  },
  {
    id: 7,
    name: "AWS WAF",
    category: "security",
    categoryLabel: "Segurança",
    image: "https://miro.medium.com/v2/resize:fit:600/format:webp/1*ton2HkaQ-wgiKX_rrBFCQw.png",
    description: "O AWS WAF protege aplicativos web contra exploits comuns, como SQL injection e cross-site scripting (XSS), permitindo criar regras personalizadas.",
    useCase: "Uma empresa de comércio eletrônico usa o AWS WAF para bloquear tráfego malicioso e proteger seu site contra ataques de injeção de SQL."
  },
  {
    id: 8,
    name: "Amazon Inspector",
    category: "security",
    categoryLabel: "Segurança",
    image: "https://help.sumologic.com/img/integrations/amazon-aws/inspector-classic.png",
    description: "O Amazon Inspector avalia automaticamente a segurança de aplicativos implantados na AWS, identificando vulnerabilidades e desvios das melhores práticas.",
    useCase: "Uma empresa de tecnologia usa o Amazon Inspector para verificar a segurança de suas instâncias EC2, garantindo que estejam em conformidade com políticas de segurança."
  },
  {
    id: 9,
    name: "AWS Artifact",
    category: "compliance",
    categoryLabel: "Conformidade",
    image: "https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/aws-cloud-security/use-aws-services-to-stay-compliant/images/23c059baf902893d512147e4f02e77f6_0-c-6672-da-5172-4-b-96-b-0-a-8-42-daa-85-aeae-5.png",
    description: "O AWS Artifact fornece acesso a relatórios de conformidade e documentação de segurança da AWS, ajudando a atender requisitos regulatórios.",
    useCase: "Uma empresa de saúde usa o AWS Artifact para acessar relatórios de conformidade com o HIPAA e garantir que seus sistemas atendam aos requisitos regulatórios."
  },
  {
    id: 10,
    name: "AWS Trusted Advisor",
    category: "optimization",
    categoryLabel: "Otimização",
    image: "https://cloud-icons.onemodel.app/aws/Architecture-Service-Icons_01312023/Arch_Management-Governance/64/Arch_AWS-Trusted-Advisor_64.svg",
    description: "O AWS Trusted Advisor oferece recomendações para otimizar custos, desempenho, segurança e confiabilidade, monitorando proativamente o ambiente AWS.",
    useCase: "Uma empresa de consultoria usa o AWS Trusted Advisor para identificar recursos subutilizados e reduzir custos na nuvem."
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