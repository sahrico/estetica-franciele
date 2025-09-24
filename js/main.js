document.addEventListener('DOMContentLoaded', () => {
    // Animação de fade-in ao rolar a página
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.hidden');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Funcionalidade para o FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Funcionalidade para o Menu Hambúrguer (Corrigida)
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mainMenu = document.getElementById('main-menu');
    const body = document.body;
    let scrollPosition = 0; // Variável para armazenar a posição do scroll

    hamburgerBtn.addEventListener('click', () => {
        const isMenuOpening = !mainMenu.classList.contains('active');

        if (isMenuOpening) {
            scrollPosition = window.pageYOffset; // Salva a posição atual do scroll
            body.style.top = `-${scrollPosition}px`; // Move a página para cima
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
            body.style.top = ''; // Remove a posição fixa
            window.scrollTo(0, scrollPosition); // Volta a página para a posição salva
        }
        
        mainMenu.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link
    const menuLinks = mainMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('no-scroll');
            body.style.top = '';
            window.scrollTo(0, scrollPosition);
            
            mainMenu.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        });
    });
});