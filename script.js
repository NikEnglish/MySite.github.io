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

    cards.forEach((card, index) => {
        card.addEventListener('click', () => setActiveCard(index));
    });

    setInterval(nextCard, 5000);

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

    // Добавляем кнопки навигации
    const navButtonsContainer = document.createElement('div');
    navButtonsContainer.style.position = 'absolute';
    navButtonsContainer.style.bottom = '80px';
    navButtonsContainer.style.left = '50%';
    navButtonsContainer.style.transform = 'translateX(-50%)';
    navButtonsContainer.style.display = 'flex';
    navButtonsContainer.style.gap = '20px';

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.onclick = prevCard;

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.onclick = nextCard;

    navButtonsContainer.appendChild(prevButton);
    navButtonsContainer.appendChild(nextButton);

    document.body.appendChild(navButtonsContainer);
});
