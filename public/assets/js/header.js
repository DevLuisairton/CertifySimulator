document.addEventListener('DOMContentLoaded', function() {
  // Menu Mobile
  const navbarToggle = document.querySelector('.navbar__toggle');
  const mobileMenu = document.querySelector('.mobile__menu');
  const body = document.body;

  // Overlay
  const overlay = document.createElement('div');
  overlay.id = 'mobile-overlay';
  overlay.classList.add('mobile__overlay');
  body.appendChild(overlay);

  // Função para toggle do menu
  const toggleMenu = () => {
    navbarToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
      overlay.style.display = 'block';
      setTimeout(() => overlay.style.opacity = '1', 10);
      body.style.overflow = 'hidden';
    } else {
      overlay.style.opacity = '0';
      setTimeout(() => {
        overlay.style.display = 'none';
        body.style.overflow = '';
      }, 300);
    }
  };

  // Event listeners
  navbarToggle.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  // Navegação Suave - Ajustada para header full-page
  const navLinks = document.querySelectorAll('.navbar__link, .mobile__link');
  const sections = document.querySelectorAll('section[id], footer[id]'); // Seleciona apenas elementos com ID

  const smoothScroll = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Ajuste especial para o header (já que ocupa 100vh)
      const offset = targetId === '#header' ? 0 : 70;
      
      // Calcula a posição considerando o viewport height para o header
      const targetPosition = targetId === '#header' 
        ? 0 
        : targetElement.getBoundingClientRect().top + window.scrollY - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.hash) {
        e.preventDefault();
        const targetId = this.hash;

        // Fecha o menu mobile se estiver aberto
        if (mobileMenu.classList.contains('active')) {
          toggleMenu();
        }

        smoothScroll(targetId);
        
        // Atualiza a URL sem recarregar a página
        if (history.pushState) {
          history.pushState(null, null, targetId);
        } else {
          window.location.hash = targetId;
        }
        
        updateActiveLinks();
      }
    });
  });

  // Scroll Spy - Atualizado para considerar o header full-page
  const updateActiveLinks = () => {
    let currentSection = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.id;

      // Tratamento especial para o header (primeira seção)
      if (sectionId === 'header') {
        if (scrollPosition < sections[1].offsetTop - 100) {
          currentSection = 'header';
        }
      } else if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
        currentSection = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.hash === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  };

  // Efeito de scroll na navbar
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    // Ajustado para ativar depois de sair do header (100vh)
    const headerHeight = document.getElementById('header').offsetHeight;
    navbar.classList.toggle('scrolled', window.scrollY > headerHeight - 100);
    
    updateActiveLinks();
  });

  // Inicialização
  updateActiveLinks();
  overlay.style.display = 'none';

  // Tratamento para redimensionamento da janela
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
      toggleMenu();
    }
  });
});