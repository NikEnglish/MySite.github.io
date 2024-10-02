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
});
