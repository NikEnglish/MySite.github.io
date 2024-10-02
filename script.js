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
    const prevArrow = document.createElement('button');
    prevArrow.textContent = '<';
    prevArrow.classList.add('arrow');

    const nextArrow = document.createElement('button');
    nextArrow.textContent = '>';
    nextArrow.classList.add('arrow');

    const arrowsContainer = document.createElement('div');
    arrowsContainer.appendChild(prevArrow);
    arrowsContainer.appendChild(nextArrow);

    document.body.appendChild(arrowsContainer);

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

    // На десктопных устройствах используем наведение для переключения
    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => setActiveCard(index));
        card.addEventListener('mouseleave', () => setActiveCard(activeCardIndex));
    });
});
