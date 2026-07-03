/* js/script.js */
window.addEventListener('DOMContentLoaded', () => {
    
    // 1. Controle do Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // 2. Controle do FAQ (Ajustado para Máxima Estabilidade)
    const faqTriggers = document.querySelectorAll('.faq-trigger');

    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Evita que o clique seja anulado por outros elementos
            
            const item = trigger.closest('.faq-item');
            
            // Se o item já está ativo, desativa. Se não, ativa.
            item.classList.toggle('active');
            
            // Atualiza acessibilidade
            const isExpanded = item.classList.contains('active');
            trigger.setAttribute('aria-expanded', isExpanded);
            
            const answer = item.querySelector('.faq-answer');
            if (answer) {
                answer.setAttribute('aria-hidden', !isExpanded);
            }
        });
    });

    // 3. Scroll do Header
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(5, 5, 5, 0.98)';
                header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.8)';
            } else {
                header.style.backgroundColor = 'rgba(5, 5, 5, 0.85)';
                header.style.boxShadow = 'none';
            }
        }, { passive: true });
    }
});