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

    // Автоматическое переключение на мобильных устройств
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

    // Добавляем обработчик touchstart для перелистывания карусель
    document.body.addEventListener('touchstart', (event) => {
        event.preventDefault();

        const touch = event.touches[0];
        const startX = touch.clientX;

        document.body.addEventListener('touchmove', (e) => {
            const moveX = e.touches[0].clientX;
            const diffX = startX - moveX;

            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    nextCard();
                } else {
                    prevCard();
                }

                // Останавливаем движение
                e.preventDefault();
            }
        });
    });

    // Добавляем обработчик mousemove для перелистывания карусель
    document.body.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;

        if (mouseX < window.innerWidth / 2) {
            prevCard();
        } else if (mouseX > window.innerWidth / 2) {
            nextCard();
        }
    });
});
