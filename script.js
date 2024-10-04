document.addEventListener('DOMContentLoaded', function() {
    // Функция для плавного пролистывания
    function smoothScroll(target, duration = 1000) {
        const targetY = target.getBoundingClientRect().top;
        const scrollDuration = duration / 60;
        const startTime = performance.now();

        const scrollAnimation = () => {
            const currentTime = performance.now();
            const progress = Math.min((currentTime - startTime) * scrollDuration, 1);
            const easeInOutQuad = t => t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
            const easedProgress = easeInOutQuad(progress);
            window.scrollTo(0, easedProgress * targetY);

            if (progress < 1) {
                requestAnimationFrame(scrollAnimation);
            } else {
                window.scrollTo(0, targetY);
            }
        };

        requestAnimationFrame(scrollAnimation);
    }

    // Функция для сохранения сообщения в файл
    function saveMessage(name, email, message) {
        const messageText = `${new Date().toLocaleString()} - Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;
        const file = document.createElement('a');
        file.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(messageText));
        file.setAttribute('download', 'messages.txt');
        file.click();
    }

    // Функция для карусели карт
    function cardCarousel() {
        const cards = document.querySelectorAll('.card');
        const prevBtn = document.querySelector('#prevArrow');
        const nextBtn = document.querySelector('#nextArrow');

        let currentIndex = 0;

        function moveCard(direction) {
            const targetIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

            if (targetIndex >= cards.length) {
                targetIndex = 0;
            } else if (targetIndex < 0) {
                targetIndex = cards.length - 1;
            }

            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(-50%) scale(0.95)';
            });

            cards[targetIndex].style.opacity = '1';
            cards[targetIndex].style.transform = 'translateY(-50%) scale(1)';

            currentIndex = targetIndex;
        }

        prevBtn.addEventListener('click', () => moveCard('prev'));
        nextBtn.addEventListener('click', () => moveCard('next'));

        // Автоматическое переключение каждые 5 секунд
        setInterval(() => moveCard('next'), 5000);
    }

    // Инициализация карусели карт
    cardCarousel();

    // Добавляем плавный скролл для кнопки Get It Now!
    const getItNowButton = document.querySelector('button[type="get"]');
    if (getItNowButton) {
        getItNowButton.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScroll(getItNowButton.nextElementSibling);
        });
    }

    // Обработка формы отправки сообщения
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Получаем значения из формы
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        // Сохраняем сообщение в файл
        saveMessage(name, email, message);

        alert('Спасибо! Ваше сообщение было сохранено.');
        contactForm.reset();
    });
});
