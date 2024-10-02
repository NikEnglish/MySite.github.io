// script.js

document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero-text');

    function animateText() {
        heroText.style.opacity = '1';
        heroText.style.transform = 'translate(-50%, -50%) scale(1)';
        
        setTimeout(() => {
            heroText.style.transitionProperty = 'opacity transform scale';
            heroText.style.transitionDuration = '0.5s';
            
            setTimeout(() => {
                heroText.style.transitionProperty = '';
                heroText.style.transitionDuration = '';
            }, 500);
        }, 1000);
    }

    function animateOut() {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translate(-50%, -50%) scale(0.95)';
        heroText.style.transitionProperty = 'opacity transform scale';
        heroText.style.transitionDuration = '0.5s';
        
        setTimeout(() => {
            heroText.style.display = 'none';
        }, 500);
    }

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;

        if (window.innerHeight > document.body.offsetHeight) {
            const bottomOfPage = document.body.offsetHeight - window.innerHeight;
            if (bottomOfPage <= scrollPosition) {
                animateOut();
            } else {
                heroText.style.opacity = '0';
                heroText.style.transform = 'translate(-50%, -50%) scale(0.95)';
                heroText.style.display = 'none';
            }
        } else {
            if (scrollPosition >= window.innerHeight * 0.75) {
                animateText();
            }
        }
    });
});
