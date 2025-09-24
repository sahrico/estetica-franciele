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

    // Funcionalidade para o Menu Hambúrguer
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mainMenu = document.getElementById('main-menu');
    const body = document.body; // Seleciona o corpo da página

    hamburgerBtn.addEventListener('click', () => {
        mainMenu.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
        body.classList.toggle('no-scroll'); // Adiciona/remove a classe que desabilita a rolagem
    });

    // Fecha o menu ao clicar em um link
    const menuLinks = mainMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainMenu.classList.remove('active');
            hamburgerBtn.classList.remove('active');
            body.classList.remove('no-scroll'); // Garante que a rolagem seja reativada
        });
    });
});