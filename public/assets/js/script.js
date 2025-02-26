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