document.addEventListener('DOMContentLoaded', () => {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    let currentSlide = 0;

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= carouselWrapper.children.length) {
            currentSlide = 0;
        }
        carouselWrapper.style.animation = 'none';
        setTimeout(() => {
            carouselWrapper.style.animation = 'slide 60s infinite linear';
        }, 0);
    }

    setInterval(nextSlide, 60000);

    // Добавляем небольшую задержку перед первым переходом
    setTimeout(() => {
        carouselWrapper.style.animation = 'none';
        setTimeout(() => {
            carouselWrapper.style.animation = 'slide 60s infinite linear';
        }, 0);
    }, 3000);
});
