document.addEventListener('DOMContentLoaded', function() {
    // Navegação Suave entre Seções
    const links = document.querySelectorAll('.navbar a');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }
    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Ajuste para considerar a altura do menu
            behavior: 'smooth'
        });
    }

    // Carrossel de Imagens na Seção "Projetos"
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let currentIndex = 0;
    document.getElementById('nextBtn').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });
    document.getElementById('prevBtn').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });
    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    // Formulário de Contato com Validação de Dados
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        if (nome === '' || email === '' || mensagem === '') {
            formMessage.textContent = 'Por favor, preencha todos os campos.';
            formMessage.style.color = 'red';
        } else if (!validateEmail(email)) {
            formMessage.textContent = 'Por favor, insira um email válido.';
            formMessage.style.color = 'red';
        } else {
            formMessage.textContent = 'Mensagem enviada com sucesso!';
            formMessage.style.color = 'green';
            form.reset();
        }
    });
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Animação ao Rolar a Página (Scroll Animation)
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    function checkVisibility() {
        const windowHeight = window.innerHeight;
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 50) {
                element.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verifica a visibilidade ao carregar a página
});




