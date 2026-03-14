// Script para interações do site TripMe

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
});

// Fechar menu ao clicar em link
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});

// Modal para cards
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

const cardData = {
    cultural: {
        title: 'Roteiro Cultural',
        content: `
            <h3>Explore a História dos Vilarejos</h3>
            <p>Nosso roteiro cultural leva você a vilarejos históricos onde o tempo parece ter parado. Caminhe pelas ruas de pedra antigas, visite igrejas medievais e aprenda sobre as tradições locais com guias especializados.</p>
            <ul>
                <li>Duração: 7 dias</li>
                <li>Dificuldade: Moderada</li>
                <li>Inclui: Guias locais, hospedagem em pousadas tradicionais</li>
            </ul>
            <p><strong>Preço: A partir de R$ 3.500</strong></p>
        `
    },
    gastronomico: {
        title: 'Roteiro Gastronômico',
        content: `
            <h3>Uma Jornada Culinária Inesquecível</h3>
            <p>Descubra os sabores autênticos dos vilarejos europeus. Participe de aulas de culinária, visite vinícolas familiares e deguste pratos preparados com ingredientes locais frescos.</p>
            <ul>
                <li>Duração: 5 dias</li>
                <li>Dificuldade: Fácil</li>
                <li>Inclui: Aulas de culinária, degustações, hospedagem com café da manhã</li>
            </ul>
            <p><strong>Preço: A partir de R$ 2.800</strong></p>
        `
    },
    aventura: {
        title: 'Roteiro de Aventura',
        content: `
            <h3>Conquiste as Montanhas</h3>
            <p>Para os amantes de adrenalina, oferecemos trilhas desafiadoras pelas montanhas alpinas. Desde caminhadas leves até escaladas técnicas, há opções para todos os níveis.</p>
            <ul>
                <li>Duração: 6 dias</li>
                <li>Dificuldade: Alta</li>
                <li>Inclui: Equipamentos de segurança, guias certificados, hospedagem em refúgios</li>
            </ul>
            <p><strong>Preço: A partir de R$ 4.200</strong></p>
        `
    }
};

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const modalType = card.dataset.modal;
        if (cardData[modalType]) {
            modalBody.innerHTML = cardData[modalType].content;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Formulário de contato
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulação de envio (em produção, substitua por API real)
    try {
        // Simular delay de envio
        await new Promise(resolve => setTimeout(resolve, 1000));

        formMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
        formMessage.className = 'success';
        formMessage.style.display = 'block';

        contactForm.reset();

        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    } catch (error) {
        formMessage.textContent = 'Erro ao enviar mensagem. Tente novamente.';
        formMessage.className = 'error';
        formMessage.style.display = 'block';
    }
});

// Animações de scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.content-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Smooth scroll para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});