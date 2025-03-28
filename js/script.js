document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    
    menuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
        menuBtn.querySelector('i').classList.toggle('fa-times');
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
            menuBtn.querySelector('i').classList.remove('fa-times');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Carrossel de depoimentos
    const carousel = document.querySelector('.depoimentos-carousel');
    const prevBtn = document.querySelector('.carousel-controls .prev');
    const nextBtn = document.querySelector('.carousel-controls .next');
    
    if (carousel) {
        let scrollAmount = 0;
        const scrollStep = 380;
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        
        prevBtn.addEventListener('click', function() {
            scrollAmount = Math.max(scrollAmount - scrollStep, 0);
            carousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        nextBtn.addEventListener('click', function() {
            scrollAmount = Math.min(scrollAmount + scrollStep, maxScroll);
            carousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
    
    // Contador regressivo
    function updateTimer() {
        const now = new Date();
        const endDate = new Date();
        endDate.setDate(now.getDate() + 3); // 3 dias a partir de agora
        
        const diff = endDate - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    if (document.querySelector('.timer')) {
        updateTimer();
        setInterval(updateTimer, 1000);
    }
    
    // Animação de scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .diferencial-card, .depoimento-card, .contato-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Inicializar elementos com opacidade 0 para animação
    const animatedElements = document.querySelectorAll('.service-card, .diferencial-card, .depoimento-card, .contato-form');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executar uma vez ao carregar a página
});