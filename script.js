document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let activeCardIndex = 0;

    function setActiveCard(index) {
        cards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
        });
        activeCardIndex = index;
    }

    function nextCard() {
        const newIndex = (activeCardIndex + 1) % cards.length;
        setActiveCard(newIndex);
    }

    function prevCard() {
        const newIndex = (activeCardIndex - 1 + cards.length) % cards.length;
        setActiveCard(newIndex);
    }

    // На мобильных устройствах используем стрелки
    const prevArrow = document.querySelector('.arrow:nth-child(1)');
    const nextArrow = document.querySelector('.arrow:nth-child(2)');

    // Обработчики кликов для стрелок
    prevArrow.addEventListener('click', prevCard);
    nextArrow.addEventListener('click', nextCard);

    // Автоматическое переключение на мобильных устройствах
    setInterval(() => {
        if (window.innerWidth <= 768) {
            nextCard();
        }
    }, 5000);

    // Добавляем обработчик клавиатуры для мобильных устройств
    document.addEventListener('keydown', (event) => {
        switch(event.key) {
            case 'ArrowRight':
                nextCard();
                break;
            case 'ArrowLeft':
                prevCard();
                break;
        }
    });

    // Добавляем обработчик для навигации по карусели
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const href = link.getAttribute('href');
            const section = document.querySelector(href);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
