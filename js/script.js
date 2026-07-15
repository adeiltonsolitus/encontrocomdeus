//COMPORTAMENTO DO FRONT-END 
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MENU MOBILE (Funcionalidade Original)
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });
    }

    // 2. ACORDEÃO DO FAQ (Funcionalidade Original)
    const faqTriggers = document.querySelectorAll('.faq-trigger');

    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            const answerId = trigger.getAttribute('aria-controls');
            const answer = document.getElementById(answerId);

            // Fecha todos os outros itens abertos antes de abrir o atual (Efeito sanfona limpo)
            faqTriggers.forEach(otherTrigger => {
                if (otherTrigger !== trigger) {
                    otherTrigger.setAttribute('aria-expanded', 'false');
                    const otherAnswerId = otherTrigger.getAttribute('aria-controls');
                    const otherAnswer = document.getElementById(otherAnswerId);
                    if (otherAnswer) otherAnswer.style.maxHeight = null;
                }
            });

            // Altera o estado do item clicado
            trigger.setAttribute('aria-expanded', !isExpanded);

            if (!isExpanded) {
                // Abre
                answer.style.maxHeight = answer.scrollHeight + "px";
                trigger.querySelector('.faq-icon').textContent = '−';
            } else {
                // Fecha
                answer.style.maxHeight = null;
                trigger.querySelector('.faq-icon').textContent = '+';
            }
        });
    });

    // 3. MONITORAMENTO DO CLIQUE DE PAGAMENTO (Novo/Segurança)
    const paymentButton = document.getElementById('start-payment');
    if (paymentButton) {
        paymentButton.addEventListener('click', (e) => {
            // Se você esqueceu de alterar o link no HTML, o JS avisa para não quebrar a página
            if (paymentButton.getAttribute('href') === 'SEU_LINK_DE_PAGAMENTO_INFINITY_PAY') {
                e.preventDefault();
                alert('Atenção Administrador: Altere o link de pagamento no arquivo index.html para o link real da Infinity Pay.');
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const paymentButton = document.getElementById('start-payment');

    if (paymentButton) {
        paymentButton.addEventListener('click', (event) => {
            // Se o navegador for muito rápido, o redirecionamento pode cortar o disparo do GA4.
            // Usamos a propriedade especial "event_callback" para garantir o envio antes de mudar de página.
            event.preventDefault(); 
            const targetUrl = paymentButton.getAttribute('href');

            // Dispara o evento padrão do GA4 para início de pagamento/inscrição
            gtag('event', 'begin_checkout', {
                'currency': 'BRL',
                'value': 170.00, // Coloque aqui o valor exato do ingresso do retiro
                'items': [{
                    'item_id': 'retiro_peniel_2026',
                    'item_name': 'Inscrição Retiro Peniel',
                    'price': 170.00,
                    'quantity': 1
                }],
                'event_callback': () => {
                    // Após garantir o envio dos dados ao Google, redireciona o usuário para a página de obrigado
                    window.location.href = targetUrl;
                }
            });

            // Fallback de segurança: se o Google falhar em responder em 1 segundo, muda de página mesmo assim
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 1000);
        });
    }
});

