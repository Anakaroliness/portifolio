// script.js
document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const carousel = document.querySelector(".carousel-container");
    const images = document.querySelectorAll(".carousel-container img");
    let index = 0;
    const total = images.length;
    const imageWidth = 500; // Largura de cada imagem
    
    function moveCarousel(direction) {
        index += direction;
        if (index < 0) {
            index = total - 1;
        } else if (index >= total) {
            index = 0;
        }
        carousel.style.transform = `translateX(${-index * imageWidth}px)`;
    }
    
    prevButton.addEventListener("click", () => moveCarousel(-1));
    nextButton.addEventListener("click", () => moveCarousel(1));
    
    // Auto deslizar a cada 3 segundos
    setInterval(() => moveCarousel(1), 3000);
    
    // Validação do formulário
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Mensagem enviada com sucesso!");
        this.reset();
    });

    // Animação ao rolar a página
    window.addEventListener("scroll", function() {
        document.querySelectorAll(".section").forEach(section => {
            const position = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            if (position < screenPosition) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    });
});
