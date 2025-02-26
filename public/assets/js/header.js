document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');
  const navItems = document.querySelectorAll('.nav-links li');

  // Verifica se os elementos existem antes de prosseguir
  if (!menuToggle || !navLinks || !navbar) return;

  // Adiciona índice para animação escalonada
  navItems.forEach((item, index) => {
      item.style.setProperty('--i', index);
  });

  // Função para alternar o menu
  const toggleMenu = () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.classList.toggle('menu-open');

      // Animação escalonada para os itens do menu
      navItems.forEach((item, index) => {
          if (navLinks.classList.contains('active')) {
              item.style.transitionDelay = `${index * 0.1}s`;
          } else {
              item.style.transitionDelay = `${(navItems.length - index) * 0.1}s`;
          }
      });
  };

  // Adiciona evento de clique ao botão do menu
  menuToggle.addEventListener('click', toggleMenu);

  // Fecha o menu ao clicar fora
  document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar-content') && 
          !e.target.closest('.nav-links') && 
          navLinks.classList.contains('active')) {
          toggleMenu();
      }
  });

  // Scroll suave para links de navegação
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          
          if (target) {
              // Fecha o menu móvel se estiver aberto
              if (navLinks.classList.contains('active')) {
                  toggleMenu();
              }

              // Scroll suave para o alvo
              target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });

  // Navegação por teclado para cartões de certificação
  document.querySelectorAll('.cert-card').forEach(card => {
      card.setAttribute('tabindex', '0'); // Melhora a acessibilidade
      card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              card.click();
          }
      });
  });
});