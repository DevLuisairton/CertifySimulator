// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function () {

    // Animação das barras de progresso quando visíveis na tela
    const progressBars = document.querySelectorAll('.progress-bar');

    function animateProgressBar() {
        progressBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight) && (rect.bottom >= 0);

            if (isVisible) {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            }
        });
    }

    // Executar uma vez na carga inicial
    animateProgressBar();

    // Executar quando rolar a página
    window.addEventListener('scroll', animateProgressBar);

    // Navegação suave e links ativos
    initSmoothNavigation();

    // Inicializar outras funcionalidades
    initBackToTop();
    initResponsiveMenu();
    initModals();
});

// Função para navegação suave e links ativos
function initSmoothNavigation() {
    // Seleciona todos os links de navegação
    const navLinks = document.querySelectorAll('.navbar__link, .mobile__link');

    // Adiciona o evento de clique a cada link
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Obtém o ID da seção alvo do atributo href
            const targetId = this.getAttribute('href');

            // Verifica se o link aponta para uma seção da página
            if (targetId && targetId.startsWith('#')) {
                // Previne o comportamento padrão do link
                e.preventDefault();

                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Calcula a posição da seção alvo
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

                    // Remove a classe 'active' de todos os links
                    navLinks.forEach(navLink => {
                        navLink.classList.remove('active');
                    });

                    // Adiciona a classe 'active' apenas ao link clicado
                    this.classList.add('active');

                    // Animação de rolagem suave
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
            // Se não for um link âncora, segue o link normalmente (removido else vazio)
        });
    });

    // Atualiza o link ativo durante a rolagem
    window.addEventListener('scroll', function () {
        const fromTop = window.scrollY + 100; // Adiciona um pequeno offset

        // Verifica cada seção para ver se está visível
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop;
            const sectionId = '#' + section.getAttribute('id');

            if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
                // Remove a classe 'active' de todos os links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Adiciona a classe 'active' ao link correspondente
                document.querySelectorAll(`.navbar__link[href="${sectionId}"], .mobile__link[href="${sectionId}"]`).forEach(link => {
                    link.classList.add('active');
                });
            }
        });
    });
}

// Botão de voltar ao topo
function initBackToTop() {
    const backToTopBtn = document.getElementById("backToTop");

    if (backToTopBtn) {
        window.addEventListener('scroll', function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        });

        backToTopBtn.addEventListener('click', function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    }
}

// Menu de navegação responsivo
function initResponsiveMenu() {
    // Torna a função toggleMenu global se necessário
    window.toggleMenu = function () {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.classList.toggle('active');
        }
    };
}

// Modais
function initModals() {
    // Torna as funções de modal globais se necessário
    window.openModal = function (modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    };

    window.closeModal = function (modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    };

    // Fechar modal ao clicar fora
    window.addEventListener('click', function (event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
}