let slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let isPaused = false; // Variável para controlar a pausa

// Função para mostrar o slide atual
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Próximo slide (se não estiver pausado)
function nextSlide() {
    if (!isPaused) {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
}

// Slide anterior
function prevSlide() {
    if (!isPaused) {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }
}

// Inicializa o primeiro slide como ativo
showSlide(currentIndex);

// Configura os botões de navegação
document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

// Pausar transição quando o mouse passar por cima de qualquer slide
slides.forEach(slide => {
    slide.addEventListener('mouseenter', () => isPaused = true);
    slide.addEventListener('mouseleave', () => isPaused = false);
});

// Troca automática de slide a cada 4 segundos
setInterval(nextSlide, 4000);
