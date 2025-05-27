     // Animação das barras de progresso quando visíveis na tela
     document.addEventListener('DOMContentLoaded', function() {
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
    });

    // Botão de voltar ao topo
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("backToTop").style.display = "block";
        } else {
            document.getElementById("backToTop").style.display = "none";
        }
    };

    document.getElementById("backToTop").onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    // Menu de navegação responsivo
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    }

    // Modal
    function openModal(modalId) {
        document.getElementById(modalId).style.display = 'block';
    }

    function closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }

    // Fechar modal ao clicar fora
    window.onclick = function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os botões do header
    const headerButtons = document.querySelectorAll('.header__buttons .btn');
    
    // Adiciona o evento de clique a cada botão
    headerButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Previne o comportamento padrão do link
            e.preventDefault();
            
            // Obtém o ID da seção alvo do atributo href
            const targetId = this.getAttribute('href');
            
            // Verifica se o link aponta para uma seção da página
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Calcula a posição da seção alvo com um offset para não colar no topo
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
                    
                    // Animação de rolagem suave
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Atualiza a URL sem recarregar a página (opcional)
                    history.pushState(null, null, targetId);
                }
            }
        });
    });
    
    // Se quiser manter a atualização dos links ativos como no script anterior
    const navLinks = document.querySelectorAll('.navbar__link, .mobile__link');
    
    if (navLinks.length > 0) {
        window.addEventListener('scroll', function() {
            const fromTop = window.scrollY + 100;
            
            document.querySelectorAll('section[id]').forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop;
                const sectionId = '#' + section.getAttribute('id');
                
                if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });
                    
                    document.querySelectorAll(`.navbar__link[href="${sectionId}"], .mobile__link[href="${sectionId}"]`).forEach(link => {
                        link.classList.add('active');
                    });
                }
            });
        });
    }
});

